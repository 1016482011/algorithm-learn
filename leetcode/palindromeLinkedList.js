/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) return true;
  let slow = head,
    pre = null,
    next = slow.next,
    fast = head.next,
    isEven = false;
  while (fast !== null) {
    next = slow.next;
    slow.next = pre;
    pre = slow;
    if (fast.next === null) {
      fast = null;
      isEven = true;
    } else {
      fast = fast.next.next;
      slow = next;
    }
  }
  let halfPre = slow,
    halfEnd = next;
  if (!isEven) {
    halfPre = pre;
    halfEnd = slow.next;
  }
  while (halfEnd !== null) {
    if (halfPre.val !== halfEnd.val) return false;
    halfEnd = halfEnd.next;
    halfPre = halfPre.next;
  }
  return true;
};
