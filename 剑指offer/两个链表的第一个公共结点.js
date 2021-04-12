/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    let p1 = null
    let p2 = null
    while (pHead1 || pHead2) {
        if(pHead1) {
            if (pHead1.pre !== undefined) {
                return pHead1
            }
            pHead1.pre = p1
            p1 = pHead1
            pHead1 = pHead1.next
        }
        if (pHead2) {
            if (pHead2.pre !== undefined) {
                return pHead2
            }
            pHead2.pre = p2
            p2 = pHead2
            pHead2 = pHead2.next
        }
  
    }
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};