import { getRandomNum } from '../index.js';
import gameEngine from '../gameEngine.js';

const description = 'What is the result of the expression?';
const calculator = (num1, num2, operator) => {
  if (operator === '-') {
    return String(num1 - num2);
  } if (operator === '+') {
    return String(num1 + num2);
  }
  return String(num1 * num2);
};
const mainFunctionOfCalc = () => {
  const operations = ['*', '-', '+'];
  const randomOperator = operations[getRandomNum(0, 2)];
  const number1 = getRandomNum(1, 10);
  const number2 = getRandomNum(1, 10);
  const askUser = [number1, randomOperator, number2].join(' ');
  const resultOfCalc = calculator(number1, number2, randomOperator);
  return [askUser, resultOfCalc];
};

export default () => {
  gameEngine(description, mainFunctionOfCalc);
};
