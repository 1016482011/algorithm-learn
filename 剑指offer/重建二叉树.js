function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
  function buildTree (preStart, preEnd, vinstart, vinEnd, pre, vin){
      if (preStart > preEnd) return null
      let rootIndex = preStart
      let len = 0
      const treeNode = new TreeNode(pre[preStart])
      
      for (let i = vinstart;i<vinEnd+1;i++) {
          if(vin[i] === pre[rootIndex]){
              len = i - vinstart
              break
          }
      }
      
      treeNode.left = buildTree(preStart + 1, preStart + len, vinstart, vinstart + len, pre, vin)
      treeNode.right = buildTree(preStart + len + 1, preEnd, vinstart + len + 1, vinEnd ,pre, vin)
      return treeNode
  }
  return buildTree(0, pre.length - 1, 0, vin.length -1, pre, vin)
}