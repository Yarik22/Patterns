class ValorantAgent {
  name?: string;
  role?: string;
  abilities: string[] = [];
  loadout: string[] = [];

  display(): void {
    console.log(`Agent: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`Abilities: ${this.abilities.join(", ")}`);
    console.log(`Loadout: ${this.loadout.join(", ")}`);
  }
}

interface AgentBuilder {
  setName(name: string): AgentBuilder;
  setRole(role: string): AgentBuilder;
  addAbility(ability: string): AgentBuilder;
  addLoadoutItem(item: string): AgentBuilder;
  build(): ValorantAgent;
}

class ValorantAgentBuilder implements AgentBuilder {
  private agent: ValorantAgent;

  constructor() {
    this.agent = new ValorantAgent();
  }

  setName(name: string): AgentBuilder {
    this.agent.name = name;
    return this;
  }

  setRole(role: string): AgentBuilder {
    this.agent.role = role;
    return this;
  }

  addAbility(ability: string): AgentBuilder {
    this.agent.abilities.push(ability);
    return this;
  }

  addLoadoutItem(item: string): AgentBuilder {
    this.agent.loadout.push(item);
    return this;
  }

  build(): ValorantAgent {
    const result = this.agent;
    this.agent = new ValorantAgent();
    return result;
  }
}

class AgentDirector {
  private builder: AgentBuilder;

  constructor(builder: AgentBuilder) {
    this.builder = builder;
  }

  constructDuelist(): ValorantAgent {
    return this.builder
      .setName("Phoenix")
      .setRole("Duelist")
      .addAbility("Curveball")
      .addAbility("Hot Hands")
      .addAbility("Blaze")
      .addLoadoutItem("Vandal")
      .addLoadoutItem("Classic")
      .build();
  }

  constructController(): ValorantAgent {
    return this.builder
      .setName("Brimstone")
      .setRole("Controller")
      .addAbility("Sky Smoke")
      .addAbility("Stim Beacon")
      .addAbility("Incendiary")
      .addLoadoutItem("Phantom")
      .addLoadoutItem("Sheriff")
      .build();
  }
}

export const builder = () => {
  const builder = new ValorantAgentBuilder();
  const director = new AgentDirector(builder);

  const duelist = director.constructDuelist();
  const controller = director.constructController();

  duelist.display();
  controller.display();
};
