#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input will guess the number
// 3) if user input is higher than the random number, computer will say "too high - done
const randomNum = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        type: 'number',
        name: "userGuessNumber",
        message: "Pleas Guess a number between 1 to 10:"
    },
]);
if (answers.userGuessNumber === randomNum) {
    console.log(`Wow Congrats You guessed true Number`);
}
else {
    console.log(`Sorry You Guess Wrong NUmber`);
}
