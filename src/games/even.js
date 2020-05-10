import generateRandomNum from '../utils.js';
import run from '../gameEngine.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
export const description = 'Answer "yes" if number is even otherwise answer "no"';

export const generateRound = () => {
  const question = generateRandomNum(1, 10);
  const rightAnswer = isEven(question);
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
