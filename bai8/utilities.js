"use strict";
// utilities.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = exports.factorial = void 0;
// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
exports.factorial = factorial;
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
exports.isPrime = isPrime;
