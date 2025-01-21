interface Command {
  execute(): void;
  undo(): void;
}

class Agent {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  useAbility(abilityName: string): void {
    console.log(`${this.name} used ${abilityName}!`);
  }

  undoAbility(abilityName: string): void {
    console.log(`${this.name} reverted the use of ${abilityName}.`);
  }
}

class AbilityCommand implements Command {
  private agent: Agent;
  private abilityName: string;

  constructor(agent: Agent, abilityName: string) {
    this.agent = agent;
    this.abilityName = abilityName;
  }

  execute(): void {
    this.agent.useAbility(this.abilityName);
  }

  undo(): void {
    this.agent.undoAbility(this.abilityName);
  }
}

class AbilityInvoker {
  private commandHistory: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.commandHistory.push(command);
  }

  undoLastCommand(): void {
    const lastCommand = this.commandHistory.pop();
    if (lastCommand) {
      lastCommand.undo();
    } else {
      console.log("No commands to undo.");
    }
  }
}

export const command = () => {
  const phoenix = new Agent("Phoenix");
  const jett = new Agent("Jett");

  const phoenixBlazeCommand = new AbilityCommand(phoenix, "Blaze");
  const jettDashCommand = new AbilityCommand(jett, "Dash");

  const invoker = new AbilityInvoker();

  console.log("Executing abilities:");
  invoker.executeCommand(phoenixBlazeCommand);
  invoker.executeCommand(jettDashCommand);

  console.log("\nUndoing abilities:");
  invoker.undoLastCommand();
  invoker.undoLastCommand();
};
