import readlineSync from 'readline-sync';
import { name, rules, getRandomInt } from '../index.js';

const userName = name;
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
console.log('Answer "yes" if the number is even, otherwise answer "no"');

export default () => {
  let num = getRandomInt(1, 50);
  for (let i = 1; i <= 3;) {
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (rules(isEven(num), userAnswer) === 1) {
      console.log('Correct!');
      num = getRandomInt(1, 50);
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
      i += 1;
    } else if (rules(isEven(num), userAnswer) === 0) {
      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer was "${isEven(num)}".
  Let's try again, ${userName}!`);
      break;
    }
  }
};
