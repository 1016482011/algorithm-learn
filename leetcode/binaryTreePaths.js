/**
 * https://leetcode-cn.com/problems/binary-tree-paths/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  var pathArr = [],
    treeArr = [{ tree: root, path: null }];
  while (treeArr.length > 0) {
    let arr = [];
    for (let a of treeArr) {
      if (!a.tree.right && !a.tree.left) {
        pathArr.unshift(a.path ? a.path + "->" + a.tree.val : a.tree.val + "");
      } else {
        if (a.tree.left) {
          arr.push({
            tree: a.tree.left,
            path: a.path ? a.path + "->" + a.tree.val : a.tree.val + ""
          });
        }
        if (a.tree.right) {
          arr.push({
            tree: a.tree.right,
            path: a.path ? a.path + "->" + a.tree.val : a.tree.val + ""
          });
        }
      }
    }
    treeArr = arr;
  }
  return pathArr;
};
