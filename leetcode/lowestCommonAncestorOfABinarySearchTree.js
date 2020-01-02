/**
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const travelTree = function(root) {
    if (p.val > root.val && q.val > root.val) {
      return travelTree(root.right);
    } else if (p.val < root.val && q.val < root.val) {
      return travelTree(root.left);
    } else {
      return root;
    }
  };
  return travelTree(root);
};
