function RandomListNode(x){
  this.label = x;
  this.next = null;
  this.random = null;
}
function Clone(pHead)
{
  if(!pHead) return pHead
  let current = pHead
  while (current) {
      const item = new RandomListNode(current.label)
      item.random = current.random
      item.next = current.next
      current.next = item
      current = item.next
  }
  
  current = pHead
  while (current) {
      current.next.random = current.random ? current.random.next : null
      current = current.next.next
  }
  let cRoot = new RandomListNode(null)
  
  current = pHead
  let ccurrent = cRoot
  while (current) {
      ccurrent.next = current.next
      ccurrent = ccurrent.next
      current = current.next.next
  }
  return cRoot.next
}
module.exports = {
  Clone : Clone
};