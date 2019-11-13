/**
 * https://leetcode-cn.com/problems/valid-parentheses/submissions/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let map = new Map();
  map
    .set("(", ")")
    .set("[", "]")
    .set("{", "}");
  let arr = [];
  for (let w of s) {
    if (w === map.get(arr[arr.length - 1])) {
      arr.pop();
    } else {
      arr.push(w);
    }
  }
  return arr.length === 0;
};
