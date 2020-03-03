const mul = require('./src/multiply');
const div = require('./src/divide');
const add = require('./src/add');
const percent = require('./src/percent');

const sub = require('./src/subtract');

const main = function(args) {
  const calcTools = { add, mul, div, sub, percent };
  console.log(calcTools[args[0]](+args[1], +args[2]));
};

main(process.argv.slice(2));
