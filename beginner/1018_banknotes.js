// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Solving the problem
let value = Number(input);
const bills = [100, 50, 20, 10, 5, 2, 1];

console.log(value);
bills.forEach(bill => {
  amount = Math.trunc(value / bill);
  console.log(`${amount} nota(s) de R$ ${bill},00`);
  value %= bill;
});