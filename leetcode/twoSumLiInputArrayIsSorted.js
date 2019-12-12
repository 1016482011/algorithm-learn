/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 暴力法
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (i !== j && numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    }
  }
  return [];
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 双指针法
 */
var twoSum = function(numbers, target) {
  let pre = 0,
    end = numbers.length - 1;
  while (pre < end) {
    if (numbers[pre] === target - numbers[end]) return [pre + 1, end + 1];
    if (numbers[pre] < target - numbers[end]) pre++;
    if (numbers[pre] > target - numbers[end]) end--;
  }
};
