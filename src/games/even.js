
import { getRandomNum, gameEngine } from '../index.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
export const description = 'Answer "yes" if number is even otherwise answer "no"';

export const mainFunctionOfEven = () => {
  const num = getRandomNum(1, 10);
  const rightAnswer = isEven(num);
  return [num, rightAnswer];
};

export default () => {
  gameEngine(description, mainFunctionOfEven);
};
