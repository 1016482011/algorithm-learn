/**
 * https://leetcode-cn.com/problems/path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  let a = [{ tree: root, sum: 0 }],
    temp = [];
  while (a.length > 0) {
    temp = [];
    for (let i = 0; i < a.length; i++) {
      if (
        sum - a[i].tree.val === a[i].sum &&
        a[i].tree.left === null &&
        a[i].tree.right === null
      )
        return true;
      if (a[i].tree.left !== null) {
        temp.push({ tree: a[i].tree.left, sum: a[i].tree.val + a[i].sum });
      }
      if (a[i].tree.right !== null) {
        temp.push({ tree: a[i].tree.right, sum: a[i].tree.val + a[i].sum });
      }
    }
    a = temp;
  }
  return false;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 * 版本二
 */
var hasPathSum = function(root, sum) {
  function path(root, sum) {
    if (root === null) return false;
    sum -= root.val;
    if (root.left === null && root.right === null) return sum === 0;
    return path(root.left, sum) || path(root.right, sum);
  }
  return path(root, sum);
};
