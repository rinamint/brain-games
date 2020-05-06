import readlineSync from 'readline-sync';
import { hello } from './index.js';


export default (descriptionOfTheGame, coreFunctionOfTheGame) => {
  const userName = hello();
  console.log(descriptionOfTheGame);
  for (let i = 1; i <= 3;) {
    const [askUser, rightAnswer] = coreFunctionOfTheGame();
    console.log(`Question: ${askUser}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
      i += 1;
    } else if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer was "${rightAnswer}".
  Let's try again, ${userName}!`);
      break;
    }
  }
};
