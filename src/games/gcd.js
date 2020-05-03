import readlineSync from 'readline-sync';
import { hello, rules, getRandomInt } from '../index.js';

const userName = hello();


const findDivider = (num1, num2) => {
  let result = 0;
  for (let i = 1; i <= num1 || i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return String(result);
};

console.log('Find the greatest common divisor of given numbers.');

export default () => {
  let randomNum1 = getRandomInt(1, 30);
  let randomNum2 = getRandomInt(1, 30);
  for (let i = 1; i <= 3;) {
    console.log(`Question: ${randomNum1}, ${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (rules(findDivider(randomNum1, randomNum2), userAnswer) === 1) {
      console.log('Correct!');
      randomNum1 = getRandomInt(1, 30);
      randomNum2 = getRandomInt(1, 30);
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
      i += 1;
    } else if (rules(findDivider(randomNum1, randomNum2), userAnswer) === 0) {
      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer was "${findDivider(randomNum1, randomNum2)}".
  Let's try again, ${userName}!`);
      break;
    }
  }
};
