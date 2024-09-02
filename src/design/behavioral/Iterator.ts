interface IterableItem<T> {
  next(): T | null;
  hasNext(): boolean;
}

interface IterableCollectionItems<T> {
  createIterator(): IterableItem<T>;
}

class Player {
  constructor(
    private name: string,
    private role: string,
    private buy: number
  ) {}
  info(): void {
    console.log(
      `Player ${this.name} with role ${this.role} and overall buy ${this.buy}`
    );
  }
}

class IteratorItem<T> implements IterableItem<T> {
  private index = 0;

  constructor(private items: T[]) {}

  next(): T | null {
    if (this.hasNext()) {
      return this.items[this.index++];
    }
    return null;
  }
  hasNext(): boolean {
    return this.index < this.items.length;
  }
}

class Defence implements IterableCollectionItems<Player> {
  private players: Player[] = [];
  addPlayer(player: Player): void {
    this.players.push(player);
  }
  getPlayers(): Player[] {
    return this.players;
  }
  createIterator(): IteratorItem<Player> {
    return new IteratorItem<Player>(this.players);
  }
}

export const iterator = () => {
  const players: Player[] = [
    new Player("Fonchik", "Rifler", 5000),
    new Player("Clemson", "Lurker", 3000),
    new Player("h4st", "Sniper", 7000),
  ];
  const defence = new Defence();
  for (const player of players) {
    defence.addPlayer(player);
  }
  const iterator = defence.createIterator();
  while (iterator.hasNext()) {
    iterator.next()?.info();
  }
};
