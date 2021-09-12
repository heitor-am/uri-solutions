// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Solving the problem
const [spentTime, averageSpeed] = input.split('\n');
let fuelSpent = (averageSpeed * spentTime) / 12;

console.log(fuelSpent.toFixed(3));