import generateRandomNum from '../utils.js';
import run from '../gameEngine.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  if (operator === '-') {
    return String(num1 - num2);
  } if (operator === '+') {
    return String(num1 + num2);
  }
  return String(num1 * num2);
};

const generateRound = () => {
  const operations = ['*', '-', '+'];
  const randomOperator = operations[generateRandomNum(0, 2)];
  const number1 = generateRandomNum(1, 10);
  const number2 = generateRandomNum(1, 10);
  const question = [number1, randomOperator, number2].join(' ');
  const rightAnswer = calculate(number1, number2, randomOperator);
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
