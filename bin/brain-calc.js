import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

const userName = name;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const calculation = (num1, num2, operator) => {
  if (operator === '-') {
    return String(num1 - num2);
  } if (operator === '+') {
    return String(num1 + num2);
  }
  return String(num1 * num2);
};

const calcGame = () => {
  const operations = ['*', '-', '+'];
  let randomOperator = operations[getRandomInt(0, 2)];
  let number1 = getRandomInt(1, 10);
  let number2 = getRandomInt(1, 10);
  for (let i = 1; i <= 3;) {
    console.log(`Question: ${number1} ${randomOperator} ${number2}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (calculation(number1, number2, randomOperator) === userAnswer) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
      i += 1;
      number1 = getRandomInt(1, 10);
      number2 = getRandomInt(1, 10);
      randomOperator = operations[getRandomInt(0, 2)];
    } else if (calculation(number1, number2, randomOperator) !== userAnswer) {
      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer was "${calculation(number1, number2, randomOperator)}".
        Let's try again, ${userName}!`);
      break;
    }
  }
};
calcGame();
