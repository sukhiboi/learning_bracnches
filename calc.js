const mul = require('./src/multiply');
const div = require('./src/divide');
const add = require('./src/add');
const percent = require('./src/percent');
const sub = require('./src/subtract');
const multiply = require('./src/multiply');
const subtract = require('./src/subtract');
const factorial = require('./src/factorial');

const main = function(args) {
  const calcTools = { add, mul, div, sub, percent };
  console.log(calcTools[args[0]](+args[1], +args[2]));
  console.log(multiply(2, 3), subtract(5, 2));
  console.log(factorial(5));
};

main(process.argv.slice(2));
