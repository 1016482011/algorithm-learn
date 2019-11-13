/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 * 初版
 */
var romanToInt = function(s) {
  function getSum(a) {
    let sum = 0;
    for (let o of a) {
      sum += o;
    }
    return sum;
  }
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  // 存放加数
  let a = [];
  // 存放减数
  let b = [];
  for (let i of s) {
    if (a.length > 0 && map[i] > a[a.length - 1]) {
      b.push(a[a.length - 1]);
      a[a.length - 1] = map[i];
    } else {
      a.push(map[i]);
    }
  }

  return getSum(a) - getSum(b);
};

/**
 * @param {string} s
 * @return {number}
 * 优化版
 */
var romanToInt1 = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let pre = null;
  let sum = 0;
  for (let i of s) {
    if (pre !== null) {
      sum = map[i] > pre ? sum - pre : sum + pre;
    }
    pre = map[i];
  }
  return sum + pre;
};
