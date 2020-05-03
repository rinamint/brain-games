import readlineSync from 'readline-sync';
import { hello, rules, getRandomInt } from '../index.js';

const userName = hello();
const makeProgression = (number, d, l = 10) => {
  let randomNum = number;
  const result = [];
  for (let i = 1; i <= l; i += 1) {
    result.push(randomNum);
    randomNum += d;
  }
  return result;
};

const isItRightAnswer = (madeProgression, position) => {
  const rightAnswer = madeProgression[position];
  return String(rightAnswer);
};

export default () => {
  let startOfProgression = getRandomInt(1, 10);
  let step = getRandomInt(1, 10);
  let rightProgression = makeProgression(startOfProgression, step);
  let randomPosition = getRandomInt(0, 9);
  let shownProgression = [...rightProgression];
  shownProgression[randomPosition] = '..';
  for (let i = 1; i <= 3;) {
    console.log(`Question: ${shownProgression}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (rules(isItRightAnswer(rightProgression, randomPosition), userAnswer) === 1) {
      console.log('Correct!');
      startOfProgression = getRandomInt(1, 10);
      step = getRandomInt(1, 10);
      randomPosition = getRandomInt(0, 9);
      rightProgression = makeProgression(startOfProgression, step);
      shownProgression = [...rightProgression];
      shownProgression[randomPosition] = '..';
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
      i += 1;
    } else if (rules(isItRightAnswer(rightProgression, randomPosition), userAnswer) === 0) {
      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer was "${isItRightAnswer(rightProgression, randomPosition)}".
        Let's try again, ${userName}!`);
      break;
    }
  }
};
