interface AbilityVisitor {
  visitSmokeAbility(smokeAbility: SmokeAbility): void;
  visitFlashAbility(flashAbility: FlashAbility): void;
  visitHealAbility(healAbility: HealAbility): void;
}

interface Ability {
  accept(visitor: AbilityVisitor): void;
}

class SmokeAbility implements Ability {
  constructor(private cost: number) {}

  accept(visitor: AbilityVisitor): void {
    visitor.visitSmokeAbility(this);
  }

  getCost(): number {
    return this.cost;
  }
}

class FlashAbility implements Ability {
  constructor(private cost: number) {}

  accept(visitor: AbilityVisitor): void {
    visitor.visitFlashAbility(this);
  }

  getCost(): number {
    return this.cost;
  }
}

class HealAbility implements Ability {
  constructor(private cost: number) {}

  accept(visitor: AbilityVisitor): void {
    visitor.visitHealAbility(this);
  }

  getCost(): number {
    return this.cost;
  }
}

class AbilityCostCalculator implements AbilityVisitor {
  private totalCost: number = 0;

  visitSmokeAbility(smokeAbility: SmokeAbility): void {
    console.log(`Smoke Ability used. Cost: ${smokeAbility.getCost()}`);
    this.totalCost += smokeAbility.getCost();
  }

  visitFlashAbility(flashAbility: FlashAbility): void {
    console.log(`Flash Ability used. Cost: ${flashAbility.getCost()}`);
    this.totalCost += flashAbility.getCost();
  }

  visitHealAbility(healAbility: HealAbility): void {
    console.log(`Heal Ability used. Cost: ${healAbility.getCost()}`);
    this.totalCost += healAbility.getCost();
  }

  getTotalCost(): number {
    return this.totalCost;
  }
}
export const visitor = () => {
  const smoke = new SmokeAbility(200);
  const flash = new FlashAbility(100);
  const heal = new HealAbility(150);

  const costCalculator = new AbilityCostCalculator();

  const abilities: Ability[] = [smoke, flash, heal];

  abilities.forEach((ability) => ability.accept(costCalculator));

  console.log(`Total cost of abilities: ${costCalculator.getTotalCost()}`);
};
