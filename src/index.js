module.exports = function reverse (n) {
  if(n < 0) {
    n = n * -1;
  }
  const stringNum = '' + n;
  const arr = stringNum.split('');
  const newArr = [];
  arr.forEach(num => newArr.unshift(num));
  const reverseString = newArr.join('');
  return +reverseString;
}
