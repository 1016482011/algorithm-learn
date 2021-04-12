/**
 * @param {number} N
 * @return {number}
 * https://leetcode-cn.com/problems/fibonacci-number/
 */
var fib = function(N) {
  if (N === 0 || N === 1 ) {
      return N
  }
  let pre = 0
  let cur = 1
  for (let i = 2;i<N + 1;i++) {
      let sum = pre +cur
      pre = cur
      cur = sum
  }
  return cur
};