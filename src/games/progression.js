import generateRandomNum from '../utils.js';
import run from '../gameEngine.js';

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

const generateRound = () => {
  const startOfProgression = generateRandomNum(1, 10);
  const stepOfProgression = generateRandomNum(1, 10);
  const rightProgression = makeProgression(startOfProgression, stepOfProgression);
  const randomPosition = generateRandomNum(0, 9);
  const question = [...rightProgression];
  question[randomPosition] = '..';
  const rightAnswer = theMissingNum(rightProgression, randomPosition);
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
