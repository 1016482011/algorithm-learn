/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 * 初版
 */
var lengthOfLastWord = function(s) {
  let pre = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      pre = end === 0 ? pre : end;
      end = 0;
    } else {
      end++;
    }
  }
  return end === 0 ? pre : end;
};

/**
 * @param {string} s
 * @return {number}
 * 优化
 */
var lengthOfLastWord = function(s) {
  let head = s.length - 1,
    end = s.length - 1;
  while (s[head] === " ") {
    head--;
  }
  end = head;
  while (s[head] !== " " && s[head] !== undefined) {
    head--;
  }
  return end - head;
};
