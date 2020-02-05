const fibo = function(num) {
  const ar = [0, 1];
  for (i = 0; i < num - 2; i++) {
    ar.push(ar[i] + ar[i + 1]);
  }
  return ar.toString();
};

module.exports = fibo;
