import readlineSync from 'readline-sync';

const roundsNumber = 3;

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, rightAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
