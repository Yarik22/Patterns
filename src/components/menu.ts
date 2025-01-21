import { it } from "node:test";
import { AnsiColor } from "../enums/Colours";
import { PatternTypes } from "../enums/Patterns";
import { patterns } from "../utils/patterns";
import * as readline from "readline";
import { descriptions } from "../utils/descriptions";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const getColorByType = (type: PatternTypes): string => {
  switch (type) {
    case PatternTypes.Creational:
      return AnsiColor.Green;
    case PatternTypes.Structural:
      return AnsiColor.Blue;
    case PatternTypes.Behavioral:
      return AnsiColor.Yellow;
    default:
      return AnsiColor.Reset;
  }
};

const generateOptionsString = (): string => {
  return patterns
    .map((item, index) => {
      const color = getColorByType(item.type);
      return `${color}${index + 1}) ${item.pattern} (${item.type})${
        AnsiColor.Reset
      }`;
    })
    .join("\n");
};

export const displayPatternMenu = async (): Promise<void> => {
  while (true) {
    const options = `----------------------------------------\n${
      AnsiColor.Reset
    }What pattern example do you want to see?${
      AnsiColor.Reset
    }\n${generateOptionsString()}${AnsiColor.Red}\n0) Exit${AnsiColor.Reset}\n`;

    console.log(options);

    const choice = await askQuestion("Enter your choice (number): ");
    const choiceNumber = parseInt(choice);

    if (choiceNumber === 0) {
      console.log(`${AnsiColor.Red}Exiting...${AnsiColor.Reset}`);
      rl.close();
      return;
    }

    const selectedPattern = patterns[choiceNumber - 1];

    if (selectedPattern) {
      const color = getColorByType(selectedPattern.type);
      console.log(
        `\n${color}You have selected: ${selectedPattern.pattern}${AnsiColor.Reset}`
      );
      selectedPattern.fn();
      console.log(
        `${color}Description:\n${descriptions[selectedPattern.pattern]}${
          AnsiColor.Reset
        }`
      );
    } else {
      console.log(
        `${AnsiColor.Red}Invalid choice, please try again.${AnsiColor.Reset}`
      );
    }
  }
};
