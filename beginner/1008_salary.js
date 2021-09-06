// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

// Solving the problem
const [number, hoursWorked, amountPerHour] = lines;
let salary = hoursWorked * amountPerHour;

console.log(`NUMBER = ${number}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`);