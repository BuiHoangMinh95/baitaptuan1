// main.ts
import { factorial, isPrime } from './utilities';

// Example usage
const num = 5;
console.log(`Factorial of ${num}: ${factorial(num)}`);

const primeCheckNum = 7;
console.log(`${primeCheckNum} is prime: ${isPrime(primeCheckNum)}`);

// run tsc utilities.ts main.ts --target es6 --module commonjs
// node main.js