interface AgentState {
  performAction(agent: Agent): void;
}

class IdleState implements AgentState {
  performAction(agent: Agent): void {
    console.log(`${agent.getName()} is idle, waiting for instructions.`);
  }
}

class AttackingState implements AgentState {
  performAction(agent: Agent): void {
    console.log(`${agent.getName()} is attacking the enemy!`);
  }
}

class DefendingState implements AgentState {
  performAction(agent: Agent): void {
    console.log(`${agent.getName()} is defending the site!`);
  }
}

class Agent {
  private currentState: AgentState;
  private name: string;

  constructor(name: string) {
    this.name = name;
    this.currentState = new IdleState();
  }

  getName(): string {
    return this.name;
  }

  setState(state: AgentState): void {
    this.currentState = state;
    console.log(`${this.name} state changed.`);
  }

  performAction(): void {
    this.currentState.performAction(this);
  }
}

export const state = () => {
  const phoenix = new Agent("Phoenix");

  phoenix.performAction();

  phoenix.setState(new AttackingState());
  phoenix.performAction();

  phoenix.setState(new DefendingState());
  phoenix.performAction();
};
