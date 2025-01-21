interface CommandExpression {
  interpret(): void;
}

class SmokeCommand implements CommandExpression {
  interpret(): void {
    console.log("Activating smoke ability.");
  }
}

class FlashCommand implements CommandExpression {
  interpret(): void {
    console.log("Activating flash ability.");
  }
}

class HealCommand implements CommandExpression {
  interpret(): void {
    console.log("Activating heal ability.");
  }
}

class CompositeCommand implements CommandExpression {
  private commands: CommandExpression[] = [];

  addCommand(command: CommandExpression): void {
    this.commands.push(command);
  }

  interpret(): void {
    this.commands.forEach((command) => command.interpret());
  }
}

export const interpreter = () => {
  const smoke = new SmokeCommand();
  const flash = new FlashCommand();
  const heal = new HealCommand();

  const compositeCommand = new CompositeCommand();
  compositeCommand.addCommand(smoke);
  compositeCommand.addCommand(flash);
  compositeCommand.addCommand(heal);

  console.log("Executing combined abilities:");
  compositeCommand.interpret();
};
