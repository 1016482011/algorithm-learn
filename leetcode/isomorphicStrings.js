/**
 * https://leetcode-cn.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let o = {},
    b = {};
  for (let i = 0; i < s.length; i++) {
    if (o[s[i]] !== undefined) {
      if (o[s[i]] !== t[i]) return false;
    } else {
      o[s[i]] = t[i];
    }
    if (b[t[i]] !== undefined) {
      if (b[t[i]] !== s[i]) return false;
    } else {
      b[t[i]] = s[i];
    }
  }
  return true;
};
