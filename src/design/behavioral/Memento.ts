class LoadoutMemento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

class AgentLoadout {
  private loadout: string;

  constructor(loadout: string) {
    this.loadout = loadout;
  }

  setLoadout(loadout: string): void {
    console.log(`Agent loadout updated to: ${loadout}`);
    this.loadout = loadout;
  }

  getLoadout(): string {
    return this.loadout;
  }

  save(): LoadoutMemento {
    console.log(`Saving loadout: ${this.loadout}`);
    return new LoadoutMemento(this.loadout);
  }

  restore(memento: LoadoutMemento): void {
    this.loadout = memento.getState();
    console.log(`Loadout restored to: ${this.loadout}`);
  }
}

class LoadoutCaretaker {
  private mementoHistory: LoadoutMemento[] = [];

  save(memento: LoadoutMemento): void {
    this.mementoHistory.push(memento);
    console.log("Loadout saved to history.");
  }

  undo(): LoadoutMemento | null {
    if (this.mementoHistory.length > 0) {
      const memento = this.mementoHistory.pop();
      console.log("Reverting to previous loadout...");
      return memento || null;
    }
    console.log("No saved loadouts to revert to.");
    return null;
  }
}

export const memento = () => {
  const agentLoadout = new AgentLoadout("Phantom, Full Armor, Flash");
  const caretaker = new LoadoutCaretaker();

  caretaker.save(agentLoadout.save());

  agentLoadout.setLoadout("Operator, Half Armor, Smoke");
  caretaker.save(agentLoadout.save());

  agentLoadout.setLoadout("Vandal, Full Armor, Grenade");

  const lastSavedMemento = caretaker.undo();
  if (lastSavedMemento) {
    agentLoadout.restore(lastSavedMemento);
  }

  const earlierSavedMemento = caretaker.undo();
  if (earlierSavedMemento) {
    agentLoadout.restore(earlierSavedMemento);
  }
};
