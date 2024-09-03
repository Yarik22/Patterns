// Abstract product interfaces
interface Team {
  getItems(): void;
}

interface Drop {
  getItems(): void;
}

class TeamA implements Team {
  getItems(): void {
    console.log("Spawn players for Team A");
    console.log("Spawn weapons for Team A");
    console.log("Spawn spike for Team A");
  }
}

class TeamB implements Team {
  getItems(): void {
    console.log("Spawn players for Team B");
    console.log("Spawn weapons for Team B");
  }
}

class MapDrop implements Drop {
  getItems(): void {
    console.log("Spawn drop on map");
  }
}

interface GameFactory {
  createTeam(): Team;
  createDrop(): Drop;
}

class SideAFactory implements GameFactory {
  createTeam(): Team {
    return new TeamA();
  }

  createDrop(): Drop {
    return new MapDrop();
  }
}

class SideBFactory implements GameFactory {
  createTeam(): Team {
    return new TeamB();
  }

  createDrop(): Drop {
    return new MapDrop();
  }
}

export const abstractFactory = () => {
  const sideAFactory = new SideAFactory();
  const sideBFactory = new SideBFactory();

  const teamA = sideAFactory.createTeam();
  const dropA = sideAFactory.createDrop();
  teamA.getItems();
  dropA.getItems();

  const teamB = sideBFactory.createTeam();
  const dropB = sideBFactory.createDrop();
  teamB.getItems();
  dropB.getItems();
};
