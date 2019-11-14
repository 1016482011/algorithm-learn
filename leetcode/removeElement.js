/**
 * https://leetcode-cn.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let j = nums.length - 1;
  function catEnd(arr, e, v) {
    if (arr[e] !== v) return e;
    return catEnd(arr, e - 1, v);
  }
  for (let s = 0; s < nums.length; s++) {
    if (nums[s] === val) {
      j = catEnd(nums, j, val);
      if (j <= s) return j + 1;
      const temp = nums[s];
      nums[s] = nums[j];
      nums[j] = temp;
    }
  }
};
