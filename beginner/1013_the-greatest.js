// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8'),
  values = input.split(' ').map(Number);

// Solving the problem
const [a, b, c] = values;
let greatest = (a + b + Math.abs(a - b)) / 2;

if (c > greatest) greatest = c;

console.log(`${greatest} eh o maior`);