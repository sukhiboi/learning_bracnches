const mul = require('./src/multiply');
const div = require('./src/divide');
const add = require('./src/add');
const sub = require('./src/subtract');
const isOdd = require('./src/isOdd');

const main = function(args) {
  const calcTools = { add, mul, div, sub, isOdd };
  console.log(calcTools[args[0]](+args[1], +args[2]));
};

main(process.argv.slice(2));
