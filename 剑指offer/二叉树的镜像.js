/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    function dfs (tree) {
        if (!tree) return
        let tep = tree.left
        tree.left = tree.right
        tree.right = tep
        dfs(tree.left)
        dfs(tree.right)
    }
     
    dfs(root)
     
    return root
}