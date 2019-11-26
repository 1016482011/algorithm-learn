/**
 * https://leetcode-cn.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 * 初版
 */
var mySqrt = function(n) {
  if (n === 0) return 0;
  let low = 0,
    high = n,
    mid;
  for (let i = 0; i <= 6; i++) {
    let pow = Math.pow(10, -i);
    mid = n;
    midSquare = mid * mid;
    while (!(n - midSquare > 0 && n - midSquare < pow)) {
      if (midSquare === n) return parseInt(mid.toFixed(6));
      if (midSquare > n) {
        high = mid;
      } else {
        low = mid;
      }
      mid = low + (high - low) / 2;
      midSquare = mid * mid;
    }
  }
  return parseInt(mid.toFixed(6));
};

/**
 * @param {number} x
 * @return {number}
 * 优化
 */
var mySqrt = function(x) {
  if (x == 1 || x == 0) {
    return x;
  }
  let start = 1;
  let end = x / 2 + 1;
  let mid = 0;
  while (start <= end) {
    mid = parseInt(start + (end - start) / 2);
    //防止越界
    if (mid <= x / mid && mid + 1 > x / (mid + 1)) {
      return mid;
    }
    if (mid > x / mid) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return mid;
};
