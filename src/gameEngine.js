import readlineSync from 'readline-sync';


export default (descriptionOfTheGame, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  const numbeOfRounds = 3;
  console.log(descriptionOfTheGame);
  for (let i = 0; i < numbeOfRounds; i += 1) {
    const [question, rightAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is a wrong answer ;(. The correct answer was "${rightAnswer}".
  Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
