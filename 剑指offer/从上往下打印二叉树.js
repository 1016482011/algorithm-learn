/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    if (!root) return []
    let arr = [root]
    let valArr = []
    while (arr.length > 0) {
        const item = arr.shift()
        valArr.push(item.val)
        if (item.left) {
            arr.push(item.left)
        }
        if (item.right) {
            arr.push(item.right)
        }
    }
    return valArr
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};