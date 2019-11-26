/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  let pre = head,
    currentNode = head.next;
  while (currentNode !== null) {
    if (currentNode.val === pre.val) {
      pre.next = currentNode.next;
    } else {
      pre = currentNode;
    }
    currentNode = currentNode.next;
  }
  return head;
};
