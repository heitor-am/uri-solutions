// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

// Solving the problem
const [a, b, c, d] = lines;
let difference = a * b - c * d;

console.log(`DIFERENCA = ${difference}`);