import generateRandomNum from '../utils.js';
import run from '../gameEngine.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  if (operator === '-') {
    return num1 - num2;
  } if (operator === '+') {
    return num1 + num2;
  } if (operator === '*') {
    return num1 * num2;
  }
  return null;
};

const generateRound = () => {
  const operators = ['*', '-', '+'];
  const randomOperator = operators[generateRandomNum(0, operators.length - 1)];
  const number1 = generateRandomNum(1, 10);
  const number2 = generateRandomNum(1, 10);
  const question = [number1, randomOperator, number2].join(' ');
  const rightAnswer = String(calculate(number1, number2, randomOperator));
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
