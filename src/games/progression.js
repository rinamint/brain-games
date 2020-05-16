import generateRandomNum from '../utils.js';
import run from '../gameEngine.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const start = generateRandomNum(1, 10);
  const step = generateRandomNum(1, 10);
  const length = 10;
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * (i)));
  }
  const missingNum = generateRandomNum(0, length - 1);
  const question = progression.map((element, index) => {
    if (index === missingNum) {
      return '..';
    }
    return element;
  });
  const rightAnswer = String(progression[missingNum]);
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
