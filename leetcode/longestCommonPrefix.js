/**
 * https://leetcode-cn.com/problems/longest-common-prefix/submissions/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  function getPrefix(p, str) {
    if (!p) return "";
    if (str.indexOf(p) === 0) return p;
    return getPrefix(p.slice(0, -1), str);
  }
  let pre = strs[0];
  for (let i = 1; i < strs.length; i++) {
    pre = getPrefix(pre, strs[i]);
    if (!pre) return pre;
  }
  return pre;
};
