/**
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return null;
  let current = head;
  while (current !== null) {
    if (current.val === val) {
      head = current.next;
      current = head;
      continue;
    }
    if (current.next === null) return head;
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
