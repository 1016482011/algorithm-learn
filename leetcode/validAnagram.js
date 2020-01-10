/**
 * https://leetcode-cn.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var obj = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
    if (obj[t[i]] === undefined) {
      obj[t[i]] = -1;
    } else {
      obj[t[i]]--;
    }
  }
  for (let o of Object.keys(obj)) {
    if (obj[o] !== 0) return false;
  }
  return true;
};
