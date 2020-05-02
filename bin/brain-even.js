import readlineSync from 'readline-sync';

import { name } from '../src/cli.js';

const userName = name;
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Answer "yes" if the number is even, otherwise answer "no"');

export default () => {
  let num = getRandomInt(1, 10);
  for (let i = 1; i <= 3;) {
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer:')
    if (isEven(num) === userAnswer) {
      console.log('Correct!');
      i += 1;
      num = getRandomInt(1, 10);
    } else if (isEven(num) !== userAnswer) {
      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer was "${isEven(num)}".
  Let's try again, ${userName}!`);
      break;
    }
  }
};
