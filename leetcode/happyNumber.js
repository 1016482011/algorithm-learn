/**
 * https://leetcode-cn.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  // 快慢指针破循环
  const sumSquare = function(n) {
    let sum = 0;
    while (n > 0) {
      let m = n % 10;
      sum += m * m;
      n = Math.floor(n / 10);
    }
    return sum;
  };
  let slow = n,
    fast = n;
  do {
    slow = sumSquare(slow);
    fast = sumSquare(fast);
    fast = sumSquare(fast);
  } while (slow !== fast);
  return slow === 1;
};
