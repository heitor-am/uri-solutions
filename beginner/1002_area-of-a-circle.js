// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Solving the problem
const radius = Number(input),
  area = 3.14159 * Math.pow(radius ,2);

console.log(`A=${area.toFixed(4)}`);