/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  let arr = [root],
    i = 1,
    temp = [];
  while (arr.length > 0) {
    let isBreak = false;
    temp = [];
    for (let o of arr) {
      if (o.left === null && o.right === null) {
        isBreak = true;
        break;
      }
      if (o.left !== null) temp.push(o.left);
      if (o.right !== null) temp.push(o.right);
    }
    if (isBreak) break;
    i++;
    arr = temp;
  }
  return i;
};
