import readlineSync from 'readline-sync';

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const printName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${printName}!`);
  return printName;
};
