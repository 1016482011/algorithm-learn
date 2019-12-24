/**
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;
  let arr = [root];
  while (arr.length > 0) {
    let tempArr = [];
    for (let o of arr) {
      let temp = o.left;
      o.left = o.right;
      o.right = temp;
      if (o.left) tempArr.push(o.left);
      if (o.right) tempArr.push(o.right);
    }
    arr = tempArr;
  }
  return root;
};
