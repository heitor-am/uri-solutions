// Read the input file
const input = require('fs').readFileSync('/dev/stdin', 'utf8'),
  values = input.split(' ').map(Number);

// Solving the problem
const [a, b, c] = values,
  PI = 3.14159;
let areaOfRightTriangle = (a * c) / 2,
  areaOfCircle = PI * Math.pow(c, 2),
  areaOfTrapezium = ((a + b) * c) / 2,
  areaOfSquare = Math.pow(b, 2),
  areaOfRectangle = a * b;

console.log(`TRIANGULO: ${areaOfRightTriangle.toFixed(3)}`);
console.log(`CIRCULO: ${areaOfCircle.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaOfTrapezium.toFixed(3)}`);
console.log(`QUADRADO: ${areaOfSquare.toFixed(3)}`);
console.log(`RETANGULO: ${areaOfRectangle.toFixed(3)}`);