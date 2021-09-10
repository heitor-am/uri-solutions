// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Solving the problem
const [distanceTraveled, spentFuel] = input.split('\n');
let averageConsumption = distanceTraveled / spentFuel;

console.log(`${averageConsumption.toFixed(3)} km/l`);