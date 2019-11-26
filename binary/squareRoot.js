// 求一个数的平方根，精确到小数点后 6 位
function squareRoot(n) {
  if (n <= 0) return;
  let low = 0,
    high = n,
    mid;
  for (let i = 0; i <= 6; i++) {
    let pow = Math.pow(10, -i);
    mid = high;
    midSquare = mid * mid;
    while (!(n - midSquare > 0 && n - midSquare < pow)) {
      if (midSquare === n) return mid.toFixed(6);
      if (midSquare > n) {
        high = mid;
      } else {
        low = mid;
      }
      mid = low + (high - low) / 2;
      midSquare = mid * mid;
    }
  }
  return mid.toFixed(6);
}

console.log(squareRoot(4));
console.log(squareRoot(9));
console.log(squareRoot(8));
console.log(squareRoot(10));
console.log(squareRoot(2147483647));
