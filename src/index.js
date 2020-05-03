import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const printName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${printName}!`);
  return printName;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const rules = (funct, userAnswer) => {
  if (funct === userAnswer) {
    return 1;
  }
  return 0;
};
