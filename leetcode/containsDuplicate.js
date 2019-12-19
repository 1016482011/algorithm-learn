/**
 * https://leetcode-cn.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let o = {};
  for (let n of nums) {
    if (o[n] !== undefined) return true;
    o[n] = n;
  }
  return false;
};
