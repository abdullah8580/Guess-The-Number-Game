#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.magentaBright("******Welcome to Guess-The-Number Game******")
);

type newNumType = {
  userInput: number;
};

let answers: newNumType = await inquirer.prompt([
  {
    type: "number",
    name: "userInput",
    message: chalk.blueBright("Guess the number between 1 and 10:"),
  },
]);

let randomNum: number = Math.floor(Math.random() * 10);

// console.log(randomNum);

if (answers.userInput == randomNum) {
  console.log(chalk.greenBright("HURRAY! You guessed the right number"));
} else if (answers.userInput < randomNum) {
  console.log(
    chalk.yellowBright("Your guessed number is less then the actual number")
  );
} else if (answers.userInput > randomNum) {
  console.log(
    chalk.redBright("Your guessed number is greater then the actual number")
  );
}

let userChoice = await inquirer.prompt({
  type: "list",
  name: "loopChoice",
  message: chalk.blueBright("Do you want to play the game again?"),
  choices: ["Yes", "No"],
});

if (userChoice.loopChoice == "Yes") {
  while (userChoice.loopChoice == "Yes") {
    let answers: newNumType = await inquirer.prompt([
      {
        type: "number",
        name: "userInput",
        message: chalk.blueBright("Guess the number between 1 and 10:"),
      },
    ]);

    let randomNum: number = Math.floor(Math.random() * 10);

    if (answers.userInput == randomNum) {
      console.log(chalk.greenBright("HURRAY! You guessed the right number"));
    } else if (answers.userInput < randomNum) {
      console.log(
        chalk.yellowBright("Your guessed number is less then the actual number")
      );
    } else if (answers.userInput > randomNum) {
      console.log(
        chalk.redBright("Your guessed number is greater then the actual number")
      );
    }

    userChoice = await inquirer.prompt({
      type: "list",
      name: "loopChoice",
      message: chalk.blueBright("Do you want to play the game again?"),
      choices: ["Yes", "No"],
    });
  }
}
