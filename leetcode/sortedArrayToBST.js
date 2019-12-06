/**
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 二分法
 */
var sortedArrayToBST = function(nums) {
  function sortTree(nums, left, right) {
    if (left >= right) return null;
    const mid = (left + right) >>> 1;
    const node = new TreeNode(nums[mid]);
    node.left = sortTree(nums, left, mid);
    node.right = sortTree(nums, mid + 1, right);
    return node;
  }
  return sortTree(nums, 0, nums.length);
};
