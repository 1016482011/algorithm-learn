/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    if (!root) return []
    let arr = []
    findPath(root,[], expectNumber,0);
    function findPath(node, path, number, currentSum) {
        currentSum += node.val
        path.push(node)
        if (currentSum === expectNumber && !node.left && !node.right) {
            let t = []
            for (let it of path) {
                t.push(it.val)
            }
            arr.push(t)
        }
        
        if (node.left !== null) {
            findPath(node.left, path, number, currentSum)
        }
        if (node.right !== null) {
            findPath(node.right, path, number, currentSum)
        }
        path.pop()
    }
    return arr
}
module.exports = {
    FindPath : FindPath
};