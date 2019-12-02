/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
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
var maxDepth = function(root) {
  if (root === null) return 0;
  let arr = [root],
    h = 0,
    temp = [];
  while (arr.length > 0) {
    temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i].left !== null) temp.push(arr[i].left);
      if (arr[i] && arr[i].right !== null) temp.push(arr[i].right);
    }
    arr = temp;
    h++;
  }
  return h;
};
