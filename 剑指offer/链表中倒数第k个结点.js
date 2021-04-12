/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    if (!head || k < 0) return
    let fast = head
    let slow = head
    while (k--) {
        if (fast) {
            fast = fast.next
        } else {
            return null
        }
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}