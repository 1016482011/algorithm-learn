/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
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
var reverseList = function(head) {
  var reverse = function(pre, current) {
    if (current === null) return pre;
    let next = current.next;
    current.next = pre;
    return reverse(current, next);
  };
  return reverse(null, head);
};
