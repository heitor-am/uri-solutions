// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

// Solving the problem
const [a, b] = lines;
let average = (a * 3.5 + b * 7.5) / (3.5 + 7.5);

console.log(`MEDIA = ${average.toFixed(5)}`);