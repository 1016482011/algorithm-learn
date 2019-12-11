/**
 * https://leetcode-cn.com/problems/single-number/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let pre = 0,
    end = 1;
  while (nums[pre] !== undefined && nums[end] !== undefined) {
    if (nums[pre] === nums[end]) {
      if (pre + 1 !== end) {
        nums[end] = nums[pre + 1];
        nums[pre + 1] = nums[pre];
      }
      pre = pre + 2;
      end = pre + 1;
    } else {
      end++;
    }
  }
  return nums[pre];
};
