interface Team {
  getItems(): void;
}

class TeamA implements Team {
  getItems(): void {
    console.log("Spawn players");
    console.log("Spawn weapons");
    console.log("Spawn spike");
  }
}

class TeamB implements Team {
  getItems(): void {
    console.log("Spawn players");
    console.log("Spawn weapons");
  }
}

abstract class Side {
  abstract createTeam(): Team;
}

class SideA extends Side {
  createTeam() {
    const team = new TeamA();
    team.getItems();
    return team;
  }
}

class SideB extends Side {
  createTeam() {
    const team = new TeamB();
    team.getItems();
    return team;
  }
}
export const factoryMethod = () => {
  const sideA = new SideA();
  const sideB = new SideB();
  console.log("Team A");
  sideA.createTeam();
  console.log("Team B");
  sideB.createTeam();
};
