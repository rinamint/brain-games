import generateRandomNum from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num <= 0) {
    return false;
  }
  if (num > 0 && num <= 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = generateRandomNum(1, 30);
  const question = String(num);
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
