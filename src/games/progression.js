import generateRandomNum from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const start = generateRandomNum(1, 10);
  const step = generateRandomNum(1, 10);
  const length = 10;
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * (i)));
  }
  const missingNumIndex = generateRandomNum(0, length - 1);
  const question = progression.map((element, index) => {
    if (index === missingNumIndex) {
      return '..';
    }
    return element;
  });
  const rightAnswer = String(progression[missingNumIndex]);
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
