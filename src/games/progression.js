import { getRandomNum } from '../index.js';
import gameEngine from '../gameEngine.js';

const description = 'What number is missing in the progression?';
const makeProgression = (number, d, l = 10) => {
  let randomNum = number;
  const result = [];
  for (let i = 1; i <= l; i += 1) {
    result.push(randomNum);
    randomNum += d;
  }
  return result;
};

const theMissingNum = (madeProgression, position) => {
  const rightAnswer = madeProgression[position];
  return String(rightAnswer);
};

const mainFunctionOfProgression = () => {
  const startOfProgression = getRandomNum(1, 10);
  const stepOfProgression = getRandomNum(1, 10);
  const rightProgression = makeProgression(startOfProgression, stepOfProgression);
  const randomPosition = getRandomNum(0, 9);
  const shownProgression = [...rightProgression];
  shownProgression[randomPosition] = '..';
  const rightAnswer = theMissingNum(rightProgression, randomPosition);
  return [shownProgression, rightAnswer];
};

export default () => {
  gameEngine(description, mainFunctionOfProgression);
};
