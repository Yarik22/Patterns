interface Player {
  getName(): string;
  performAction(): void;
}

class RealPlayer implements Player {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  performAction(): void {
    console.log(`${this.name} is performing an action!`);
  }
}

class NullPlayer implements Player {
  getName(): string {
    return "No Player";
  }

  performAction(): void {
    console.log("No action performed. Player is absent.");
  }
}

export const nullObject = () => {
  const realPlayer = new RealPlayer("Phoenix");
  const nullPlayer = new NullPlayer();

  console.log(realPlayer.getName());
  realPlayer.performAction();

  console.log(nullPlayer.getName());
  nullPlayer.performAction();
};
