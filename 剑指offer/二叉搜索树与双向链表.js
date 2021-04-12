/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    let last = null
    function travelTree(tree) {
        
        if (tree === null) return
        
        let current = tree
        if (current.left !== null) {
            travelTree(current.left, last)
        } 
        console.log('=========')
        console.log(current)
        console.log(last)
        current.left = last
        if (last !== null) {
            last.right = current
        }
        
        last = current
        
        if (current.right !== null) {
            travelTree(current.right, last)
        }
    }
    travelTree(pRootOfTree, null)
    let lastNode = last
    while (lastNode && lastNode.left !== null) {
        lastNode = lastNode.left
    }
    return lastNode
}
module.exports = {
    Convert : Convert
};