/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if (!pRoot2) return false
    function def (A, B) {
        if (!B) return true
        if (!A) return false
        return A.val === B.val && def(A.left, B.left) && def(A.right, B.right)
    }
    
    function treeTraversal (tree) {
        if (!tree) return false
        return def(tree, pRoot2) || treeTraversal(tree.left) || treeTraversal(tree.right)
    }
    
    
    return treeTraversal(pRoot1)
}