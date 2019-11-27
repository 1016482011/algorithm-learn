/**
 * https://leetcode-cn.com/problems/same-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let arr1 = [],
    arr2 = [];
  const travelTree = function(node, arr) {
    if (node === null) {
      arr.push(node);
      return;
    }
    arr.push(node.val);
    travelTree(node.left, arr);
    travelTree(node.right, arr);
  };
  travelTree(p, arr1);
  travelTree(q, arr2);
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
