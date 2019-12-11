/**
 * https://leetcode-cn.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toUpperCase();
  let pre = 0,
    end = s.length - 1,
    flag = true;
  while (pre < end) {
    if (!/^[0-9A-Z]+$/.test(s[pre])) {
      pre++;
      continue;
    }
    if (!/^[0-9A-Z]+$/.test(s[end])) {
      end--;
      continue;
    }
    if (s[pre] !== s[end]) {
      flag = false;
      break;
    }
    pre++;
    end--;
  }
  return flag;
};
