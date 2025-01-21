interface Team {
  getItems(): void;
}

class TeamA implements Team {
  getItems(): void {
    console.log("Spawn players A");
    console.log("Spawn weapons A");
    console.log("Spawn spike A");
  }
}

class TeamB implements Team {
  getItems(): void {
    console.log("Spawn players B");
    console.log("Spawn weapons B");
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
  console.log("Fabric created team A");
  sideA.createTeam();
  console.log("Fabric created team B");
  sideB.createTeam();
};
