// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

// Solving the problem
const [a, b] = lines;
let sum = a + b;

console.log(`SOMA = ${sum}`);