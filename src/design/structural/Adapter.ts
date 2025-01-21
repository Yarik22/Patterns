interface ModernWeaponInterface {
  shoot(): void;
  reload(): void;
}

class LegacyWeaponSystem {
  fire(): void {
    console.log("Firing using the legacy weapon system!");
  }

  loadAmmo(): void {
    console.log("Reloading ammo using the legacy weapon system!");
  }
}

class WeaponAdapter implements ModernWeaponInterface {
  private legacyWeapon: LegacyWeaponSystem;

  constructor(legacyWeapon: LegacyWeaponSystem) {
    this.legacyWeapon = legacyWeapon;
  }

  shoot(): void {
    this.legacyWeapon.fire();
  }

  reload(): void {
    this.legacyWeapon.loadAmmo();
  }
}

export const adapter = () => {
  const legacyWeapon = new LegacyWeaponSystem();
  console.log("Using fire and loadAmmo without the adapter:");
  legacyWeapon.fire();
  legacyWeapon.loadAmmo();
  const modernWeapon: ModernWeaponInterface = new WeaponAdapter(legacyWeapon);

  console.log("Using shoot and reload via the adapter:");
  modernWeapon.shoot();
  modernWeapon.reload();
};
