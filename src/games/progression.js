import generateRandomNum from '../utils.js';
import run from '../gameEngine.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const startOfProgression = generateRandomNum(1, 10);
  const stepOfProgression = generateRandomNum(1, 10);
  const sizeOfProgression = 10;
  const progression = [startOfProgression];
  for (let i = 1; i <= sizeOfProgression; i += 1) {
    progression.push(startOfProgression + (stepOfProgression * (i)));
  }
  const randomIndex = generateRandomNum(0, 9);
  const question = progression.map((element) => {
    if (progression.indexOf(element) === randomIndex) {
      return '..';
    }
    return element;
  });
  const rightAnswer = String(progression[randomIndex]);
  return [question, rightAnswer];
};

export default () => {
  run(description, generateRound);
};
