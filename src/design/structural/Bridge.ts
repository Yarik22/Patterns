interface FireMode {
  fire(): void;
}

class SingleShot implements FireMode {
  fire(): void {
    console.log("Firing a single shot!");
  }
}

class BurstFire implements FireMode {
  fire(): void {
    console.log("Firing a burst of bullets!");
  }
}

class AutomaticFire implements FireMode {
  fire(): void {
    console.log("Firing bullets automatically!");
  }
}

abstract class Weapon {
  protected fireMode: FireMode;

  constructor(fireMode: FireMode) {
    this.fireMode = fireMode;
  }

  abstract shoot(): void;
}

class Rifle extends Weapon {
  shoot(): void {
    console.log("Using a Rifle:");
    this.fireMode.fire();
  }
}

class Sniper extends Weapon {
  shoot(): void {
    console.log("Using a Sniper:");
    this.fireMode.fire();
  }
}

export const bridge = () => {
  const singleShot = new SingleShot();
  const burstFire = new BurstFire();
  const automaticFire = new AutomaticFire();

  const rifleWithSingleShot = new Rifle(singleShot);
  const rifleWithBurstFire = new Rifle(burstFire);

  const sniperWithSingleShot = new Sniper(singleShot);
  const sniperWithAutomaticFire = new Sniper(automaticFire);

  rifleWithSingleShot.shoot();
  rifleWithBurstFire.shoot();
  sniperWithSingleShot.shoot();
  sniperWithAutomaticFire.shoot();
};
