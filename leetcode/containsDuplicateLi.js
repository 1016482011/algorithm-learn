/**
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let o = {},
    i = 0;
  for (let n of nums) {
    if (o[n] !== undefined) {
      if (i - o[n] <= k) return true;
      if (i - o[n] > k) o[n] = i;
    } else {
      o[n] = i;
    }
    i++;
  }
  return false;
};
