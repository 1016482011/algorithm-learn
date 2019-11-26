/**
 * https://leetcode-cn.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let subLen = b.length - a.length;
  if (subLen < 0) {
    let tmp = a;
    a = b;
    b = tmp;
    subLen = Math.abs(subLen);
  }
  let pre = "";
  for (let i = 0; i < subLen; i++) {
    pre += "0";
  }
  a = pre + a;

  let s = 0,
    res = "";
  for (let i = a.length - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + s;
    if (sum === 1 || sum === 0) {
      s = 0;
      res = sum + res;
    } else if (sum === 2) {
      s = 1;
      res = "0" + res;
    } else if (sum === 3) {
      s = 1;
      res = "1" + res;
    }
  }
  return s === 0 ? res : "1" + res;
};
