const div = require('./src/divide');
const percent = require('./src/percent');
const factorial = require('./src/factorial');
const multiply = require('./src/multiply');
const isEven = require('./src/isEven');
const add = require('./src/add');
const subtract = require('./src/subtract');
const fibo = require('./src/fibo');

const main = function(args) {
  const calcTools = {
    add,
    multiply,
    div,
    subtract,
    fibo,
    isEven,
    factorial,
    percent
  };
  console.log(calcTools[args[0]](+args[1], +args[2]));
};

main(process.argv.slice(2));
