/**
 * https://leetcode-cn.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let count = "1";
  function getCount(c, i) {
    if (i >= n) return c;
    let s = 1,
      end = null,
      countString = "";
    for (let j = 0; j <= c.length; j++) {
      if (c[j] === end) {
        s++;
      } else {
        if (end !== null) countString = countString + s + end;
        s = 1;
        end = c[j];
      }
    }
    return getCount(countString, ++i);
  }
  return getCount(count, 1, n);
};
