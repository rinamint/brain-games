import generateRandomNum from '../utils.js';
import run from '../gameEngine.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGreatestDivider = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGreatestDivider(num2, num1 % num2);
};

const generateRound = () => {
  const randomNum1 = generateRandomNum(1, 10);
  const randomNum2 = generateRandomNum(1, 30);
  const rightAnswer = String(findGreatestDivider(randomNum1, randomNum2));
  const question = [randomNum1, randomNum2].join(' ');
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
