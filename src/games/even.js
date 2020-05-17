import generateRandomNum from '../utils.js';
import run from '../index.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if number is even otherwise answer "no"';

const generateRound = () => {
  const num = generateRandomNum(1, 30);
  const question = String(num);
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
