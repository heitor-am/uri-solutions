// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);

// Solving the problem
const [sellerName, fixedSalary, totalSales] = lines;
let finalSalary = fixedSalary + totalSales * 0.15;

console.log(`TOTAL = R$ ${finalSalary.toFixed(2)}`);