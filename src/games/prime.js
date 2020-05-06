import { getRandomNum } from '../index.js';
import gameEngine from '../gameEngine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const IsItPrime = (num) => {
  let result = 1;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      result += 1;
    }
  }
  return result === 1 ? 'yes' : 'no';
};

const mainFunctionOfPrime = () => {
  const randomNum = getRandomNum(1, 30);
  const rightAnswer = IsItPrime(randomNum);
  return [randomNum, rightAnswer];
};

export default () => {
  gameEngine(description, mainFunctionOfPrime);
};
