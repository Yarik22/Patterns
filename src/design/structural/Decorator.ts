interface Player {
  getDescription(): string;
  getHealth(): number;
}


class BasicPlayer implements Player {
  getDescription(): string {
    return "Basic Player";
  }

  getHealth(): number {
    return 100;
  }
}

class PlayerDecorator implements Player {
  protected player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  getDescription(): string {
    return this.player.getDescription();
  }

  getHealth(): number {
    return this.player.getHealth();
  }
}

class SpeedBoostDecorator extends PlayerDecorator {
  constructor(player: Player) {
    super(player);
  }

  getDescription(): string {
    return `${super.getDescription()} with Speed Boost`;
  }
}

class InvisibilityDecorator extends PlayerDecorator {
  constructor(player: Player) {
    super(player);
  }

  getDescription(): string {
    return `${super.getDescription()} with Invisibility`;
  }
}

class ExtraHealthDecorator extends PlayerDecorator {
  constructor(player: Player) {
    super(player);
  }

  getDescription(): string {
    return `${super.getDescription()} with Extra Health`;
  }

  getHealth(): number {
    return super.getHealth() + 50;
  }
}

export const decorator = () => {
  let player: Player = new BasicPlayer();
  console.log(player.getDescription());
  console.log(`Health: ${player.getHealth()}`);

  player = new SpeedBoostDecorator(player);
  console.log(player.getDescription());
  console.log(`Health: ${player.getHealth()}`);

  player = new InvisibilityDecorator(player);
  console.log(player.getDescription());
  console.log(`Health: ${player.getHealth()}`);

  player = new ExtraHealthDecorator(player);
  console.log(player.getDescription());
  console.log(`Health: ${player.getHealth()}`);
};
