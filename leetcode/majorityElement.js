/**
 * https://leetcode-cn.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let o = {};
  for (let i = 0; i < nums.length; i++) {
    if (o[nums[i]] === undefined) o[nums[i]] = 0;
    o[nums[i]]++;
    if (o[nums[i]] > nums.length / 2) return nums[i];
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 * 投票法
 */
var majorityElement = function(nums) {
  let count = 0,
    num = null;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) num = nums[i];
    if (nums[i] === num) count++;
    if (nums[i] !== num) count--;
  }
  return num;
};
