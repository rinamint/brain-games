#!/usr/bin/env node
import printName from '../src/cli.js'
console.log('Welcome to the Brain Games!');
const userName = printName;
console.log(`Hello, ${userName}!`);