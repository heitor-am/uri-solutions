// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Solving the problem
const radius = Number(input);
const PI = 3.14159;
let volumeOfSphere = (4 / 3) * PI * Math.pow(radius, 3);

console.log(`VOLUME = ${volumeOfSphere.toFixed(3)}`);