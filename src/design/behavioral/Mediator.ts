interface TeamMediator {
  sendMessage(message: string, sender: Agent): void;
  addAgent(agent: Agent): void;
}

class MatchMediator implements TeamMediator {
  private agents: Agent[] = [];

  addAgent(agent: Agent): void {
    this.agents.push(agent);
    console.log(`${agent.getName()} has joined the team.`);
  }

  sendMessage(message: string, sender: Agent): void {
    this.agents.forEach((agent) => {
      if (agent !== sender) {
        agent.receiveMessage(message, sender);
      }
    });
  }
}

abstract class Agent {
  protected mediator: TeamMediator;

  constructor(mediator: TeamMediator, private name: string) {
    this.mediator = mediator;
  }

  getName(): string {
    return this.name;
  }

  sendMessage(message: string): void {
    console.log(`${this.name} sends: "${message}"`);
    this.mediator.sendMessage(message, this);
  }

  abstract receiveMessage(message: string, sender: Agent): void;
}

class Duelist extends Agent {
  receiveMessage(message: string, sender: Agent): void {
    console.log(
      `[Duelist ${this.getName()}] received message from ${sender.getName()}: "${message}"`
    );
  }
}

class Controller extends Agent {
  receiveMessage(message: string, sender: Agent): void {
    console.log(
      `[Controller ${this.getName()}] received message from ${sender.getName()}: "${message}"`
    );
  }
}

class Initiator extends Agent {
  receiveMessage(message: string, sender: Agent): void {
    console.log(
      `[Initiator ${this.getName()}] received message from ${sender.getName()}: "${message}"`
    );
  }
}

export const mediator = () => {
  const mediator = new MatchMediator();

  const phoenix = new Duelist(mediator, "Phoenix");
  const brimstone = new Controller(mediator, "Brimstone");
  const sova = new Initiator(mediator, "Sova");

  mediator.addAgent(phoenix);
  mediator.addAgent(brimstone);
  mediator.addAgent(sova);

  phoenix.sendMessage("I'm pushing mid.");
  brimstone.sendMessage("Deploying smokes.");
  sova.sendMessage("Scanning the site.");
};
