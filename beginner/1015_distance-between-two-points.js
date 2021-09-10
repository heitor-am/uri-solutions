// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8'),
  lines = input.split('\n').map(line => line.split(' '));

// Solving the problem
const [x1, y1] = lines.shift(),
  [x2, y2] = lines.shift();
let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distance.toFixed(4));