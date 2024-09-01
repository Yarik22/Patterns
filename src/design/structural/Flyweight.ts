class WeaponType {
  public static weaponCode: number = 0;
  public weaponCode: number;
  constructor(
    public ammunition: number,
    public name: string,
    public cost: number
  ) {
    this.weaponCode = WeaponType.weaponCode++;
  }
}

class WeaponFactory {
  protected static weaponTypes: WeaponType[] = [];

  static getWeaponType(
    ammunition: number,
    name: string,
    cost: number
  ): WeaponType {
    let type = WeaponFactory.weaponTypes.find(
      (t) => ammunition === t.ammunition && name === t.name && cost === t.cost
    );

    if (!type) {
      type = new WeaponType(ammunition, name, cost);
      WeaponFactory.weaponTypes.push(type);
    }

    return type;
  }
}

class Player {
  constructor(protected nickname: string, protected weapon: WeaponType) {}

  info(): void {
    console.log(
      `${this.nickname} with weapon ${this.weapon.name}(code: ${this.weapon.weaponCode}) (${this.weapon.ammunition} ammo, cost: ${this.weapon.cost})`
    );
  }
}

class Team {
  constructor(protected players: Player[] = []) {}

  createPlayer(
    nickname: string,
    ammunition: number,
    name: string,
    cost: number
  ) {
    const weaponType = WeaponFactory.getWeaponType(ammunition, name, cost);
    const player = new Player(nickname, weaponType);
    this.players.push(player);
  }

  info(): void {
    this.players.forEach((p) => p.info());
  }
}

export const flyweight = () => {
  const team = new Team();
  team.createPlayer("Player1", 30, "AK-47", 1500);
  team.createPlayer("Player2", 50, "M16", 2000);
  team.createPlayer("Player3", 30, "AK-47", 1500);
  team.info();
};
