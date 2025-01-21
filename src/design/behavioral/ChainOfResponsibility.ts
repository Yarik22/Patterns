interface SupportHandler {
  setNext(handler: SupportHandler): SupportHandler;
  handleRequest(issue: string): void;
}

abstract class AbstractSupportHandler implements SupportHandler {
  private nextHandler: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(issue: string): void {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(issue);
    } else {
      console.log(`Issue "${issue}" could not be resolved.`);
    }
  }
}

class Tier1Support extends AbstractSupportHandler {
  handleRequest(issue: string): void {
    if (issue === "basic") {
      console.log("Tier 1 Support resolved the issue.");
    } else {
      console.log("Tier 1 Support escalated the issue.");
      super.handleRequest(issue);
    }
  }
}

class Tier2Support extends AbstractSupportHandler {
  handleRequest(issue: string): void {
    if (issue === "intermediate") {
      console.log("Tier 2 Support resolved the issue.");
    } else {
      console.log("Tier 2 Support escalated the issue.");
      super.handleRequest(issue);
    }
  }
}

class Tier3Support extends AbstractSupportHandler {
  handleRequest(issue: string): void {
    if (issue === "advanced") {
      console.log("Tier 3 Support resolved the issue.");
    } else {
      console.log("Tier 3 Support could not resolve the issue.");
      super.handleRequest(issue);
    }
  }
}

export const chainOfResponsibility = () => {
  const tier1 = new Tier1Support();
  const tier2 = new Tier2Support();
  const tier3 = new Tier3Support();

  tier1.setNext(tier2).setNext(tier3);

  console.log("Submitting a 'basic' issue:");
  tier1.handleRequest("basic");

  console.log("\nSubmitting an 'intermediate' issue:");
  tier1.handleRequest("intermediate");

  console.log("\nSubmitting an 'advanced' issue:");
  tier1.handleRequest("advanced");

  console.log("\nSubmitting an 'unknown' issue:");
  tier1.handleRequest("unknown");
};
