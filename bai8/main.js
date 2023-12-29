"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const utilities_1 = require("./utilities");
// Example usage
const num = 5;
console.log(`Factorial of ${num}: ${(0, utilities_1.factorial)(num)}`);
const primeCheckNum = 7;
console.log(`${primeCheckNum} is prime: ${(0, utilities_1.isPrime)(primeCheckNum)}`);
// run tsc utilities.ts main.ts --target es6 --module commonjs
// node main.js
