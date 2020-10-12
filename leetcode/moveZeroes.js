/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * https://leetcode-cn.com/problems/move-zeroes/
 */
var moveZeroes = function(nums) {
  let n = 0
  for (let i = 0;i< nums.length - n;i++) {
      if (nums[i] === 0) {
          nums.push(nums.splice(i, 1)[0])
          n++
          i--
      }
  }
};