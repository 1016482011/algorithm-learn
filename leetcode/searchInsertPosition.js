/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 初版
 */
var searchInsert = function(nums, target) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      j++;
    } else {
      break;
    }
  }
  return j;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 优化
 */
var searchInsert = function(nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;
  while (left <= right) {
    mid = left + parseInt((right - left) / 2);
    if (target === nums[mid]) {
      break;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[mid] < target ? mid + 1 : mid;
};
