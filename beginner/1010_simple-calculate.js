// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

// Solving the problem
const [productCode1, numberOfUnits1, priceForUnit1] = lines.shift().split(' ');
const [productCode2, numberOfUnits2, priceForUnit2] = lines.shift().split(' ');
let total = numberOfUnits1 * priceForUnit1 + numberOfUnits2 * priceForUnit2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);