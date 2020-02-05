const mul = require('./src/multiply');
const div = require('./src/divide');
const add = require('./src/add');
const fibo = require('./src/fibo');
const sub = require('./src/subtract');

const main = function(args) {
  const calcTools = { add, mul, div, sub, fibo };
  console.log(calcTools[args[0]](+args[1], +args[2]));
};

main(process.argv.slice(2));
