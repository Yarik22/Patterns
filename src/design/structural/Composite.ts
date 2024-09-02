interface KillTab {
  getName(): string;
  getKills(): number;
  displayKills(): void;
  addKill(player: KillTab): void;
  removeKill(player: KillTab): void;
  displayChildren(indent: string): void;
}

class Player implements KillTab {
  private killedPlayers: KillTab[] = [];
  constructor(private name: string, private kills: number = 0) {}
  getName(): string {
    return this.name;
  }
  getKills(): number {
    return this.killedPlayers.reduce(
      (total, child) => total + child.getKills(),
      this.kills
    );
  }
  displayKills(): void {
    console.log(
      `${this.name} personal kills:${
        this.kills
      }. Accamulated kill from other enemies: ${this.getKills()}`
    );
  }
  displayChildren(indent: string = ""): void {
    console.log(`${indent}- ${this.name} (Kills: ${this.kills})`);
    this.killedPlayers.forEach((child) => child.displayChildren(indent + "  "));
  }
  addKill(player: KillTab): void {
    this.killedPlayers.push(player);
  }
  removeKill(player: KillTab): void {
    const index = this.killedPlayers.indexOf(player);
    if (index !== -1) {
      this.killedPlayers.splice(index, 1);
    }
  }
}

export const composite = () => {
  const Fonchik = new Player("Fonchik", 11);
  const Clemson = new Player("Clemson", 15);
  const h4st = new Player("h4st", 12);
  const NEGAv = new Player("NEGAv", 9);
  const danboom = new Player("danboom", 9);

  Fonchik.addKill(Clemson);
  Fonchik.addKill(h4st);

  h4st.addKill(NEGAv);
  h4st.addKill(danboom);

  Fonchik.displayChildren();
  Fonchik.displayKills();
  Clemson.displayKills();
  h4st.displayKills();
  NEGAv.displayKills();
  danboom.displayKills();
};
