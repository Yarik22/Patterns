interface Strategy {
  apply(totalBuy: number): boolean;
}

class PushAStrategy implements Strategy {
  private static minBuy: number = 10000;
  apply(totalBuy: number): boolean {
    return totalBuy >= PushAStrategy.minBuy;
  }
}

class PushBStrategy implements Strategy {
  private static minBuy: number = 15000;
  apply(totalBuy: number): boolean {
    return totalBuy >= PushBStrategy.minBuy;
  }
}

class PushCStrategy implements Strategy {
  private static minBuy: number = 17000;
  apply(totalBuy: number): boolean {
    return totalBuy >= PushCStrategy.minBuy;
  }
}

class Push {
  private static strategy: Strategy;
  constructor() {}
  applyStrategy(buy: number): boolean {
    if (!Push.strategy) {
      return false;
    }
    return Push.strategy.apply(buy);
  }
  setStrategy(strategy: Strategy) {
    Push.strategy = strategy;
  }
}

export const strategy = () => {
  const buy = 15000;
  const push = new Push();
  push.setStrategy(new PushAStrategy());
  console.log(
    push.applyStrategy(buy) ? "You can push A plant" : "You can`t push A plant"
  );
  push.setStrategy(new PushBStrategy());
  console.log(
    push.applyStrategy(buy) ? "You can push B plant" : "You can`t push B plant"
  );
  push.setStrategy(new PushCStrategy());
  console.log(
    push.applyStrategy(buy) ? "You can push C plant" : "You can`t push C plant"
  );
};
