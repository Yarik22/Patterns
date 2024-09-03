interface Observer {
  update(agentName: string, abilityName: string): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(abilityName: string): void;
}

class Agent implements Subject {
  private observers: Observer[] = [];
  constructor(public name: string) {}

  public attach(observer: Observer): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      console.log(`${observer.constructor.name} subscribed on ${this.name}`);
    }
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
      console.log(`${observer.constructor.name} unsubscribed on ${this.name}`);
    }
  }

  public notify(abilityName: string): void {
    console.log(`${this.name} used ${abilityName}`);
    for (const observer of this.observers) {
      observer.update(this.name, abilityName);
    }
  }

  public useAbility(abilityName: string): void {
    console.log(`${this.name} is trying to use ${abilityName}`);
    this.notify(abilityName);
  }
}

class AgentObserver implements Observer {
  constructor(public name: string) {}

  public update(agentName: string, abilityName: string): void {
    console.log(`${this.name} notified that ${agentName} used ${abilityName}`);
  }
}

export const observer = () => {
  const agentPhoenix = new Agent("Phoenix");
  const agentSage = new Agent("Sage");

  const observerKilljoy = new AgentObserver("Killjoy");
  const observerSova = new AgentObserver("Sova");

  agentPhoenix.attach(observerKilljoy);
  agentSage.attach(observerSova);

  agentPhoenix.useAbility("Curveball");
  agentSage.useAbility("Resurrection");
};
