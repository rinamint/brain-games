import readlineSync from 'readline-sync';
export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const printName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${printName}!`);
  return printName;
};
export const name = hello(); 

