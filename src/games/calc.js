import readlineSync from 'readline-sync';
import { name, rules, getRandomInt } from '../index.js';

const userName = name;

const calculation = (num1, num2, operator) => {
  if (operator === '-') {
    return String(num1 - num2);
  } if (operator === '+') {
    return String(num1 + num2);
  }
  return String(num1 * num2);
};

export default () => {
  const operations = ['*', '-', '+'];
  let randomOperator = operations[getRandomInt(0, 2)];
  let number1 = getRandomInt(1, 10);
  let number2 = getRandomInt(1, 10);
  for (let i = 1; i <= 3;) {
    console.log(`Question: ${number1} ${randomOperator} ${number2}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (rules(calculation(number1, number2, randomOperator), userAnswer) === 1) {
      console.log('Correct!');
      number1 = getRandomInt(1, 10);
      number2 = getRandomInt(1, 10);
      randomOperator = operations[getRandomInt(0, 2)];
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
      i += 1;
    } else if (rules(calculation(number1, number2, randomOperator), userAnswer) === 0) {
      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer was "${calculation(number1, number2, randomOperator)}".
  Let's try again, ${userName}!`);
      break;
    }
  }
};
