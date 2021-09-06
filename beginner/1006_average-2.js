// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

// Solving the problem
const [a, b, c] = lines;
let average = (a * 2 + b * 3 + c * 5) / 10;

console.log(`MEDIA = ${average.toFixed(1)}`);