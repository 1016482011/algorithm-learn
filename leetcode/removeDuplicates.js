/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/submissions/
 * @param {number[]} nums
 * @return {number}
 * 初版
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let s = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[s]) {
      s++;
      nums[s] = nums[i];
    }
  }
  nums.length = s + 1;
  return s + 1;
};
