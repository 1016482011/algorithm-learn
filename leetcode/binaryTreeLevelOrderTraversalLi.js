/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) return [];
  let arr = [root],
    temp = [],
    back = [[root.val]];
  while (arr.length > 0) {
    back.unshift([]);
    temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i].left !== null) {
        temp.push(arr[i].left);
        back[0].push(arr[i].left.val);
      }
      if (arr[i] && arr[i].right !== null) {
        temp.push(arr[i].right);
        back[0].push(arr[i].right.val);
      }
    }
    if (back[0].length === 0) back.shift();
    arr = temp;
  }
  return back;
};
