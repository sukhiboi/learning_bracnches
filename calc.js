const div = require('./src/divide');
const percent = require('./src/percent');
const factorial = require('./src/factorial');
const mul = require('./src/multiply');
const isEven = require('./src/isEven');
const add = require('./src/add');
const sub = require('./src/subtract');
const isOdd = require('./src/isOdd');
const fibo = require('./src/fibo');

const main = function(args) {
  const calcTools = {
    add,
    mul,
    div,
    sub,
    isOdd,
    fibo,
    isEven,
    factorial,
    percent,
    isOdd
  };

  console.log(calcTools[args[0]](+args[1], +args[2]));
};

main(process.argv.slice(2));
