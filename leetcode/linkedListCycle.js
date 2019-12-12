/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 初版
 */
var hasCycle = function(head) {
  if (!head) return false;
  let current = head,
    i = 0;
  current.index = i;
  while (current !== null) {
    i++;
    if (current.next && current.next.index !== undefined) return true;
    current.index = i;
    current = current.next;
  }
  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 优化
 */
var hasCycle = function(head) {
  if (!head) return false;
  let pre = head,
    end = head.next;
  while (pre !== null) {
    if (pre === end) return true;
    pre = pre.next;
    if (end !== null && end.next !== null) {
      end = end.next.next;
    } else {
      return false;
    }
  }
  return false;
};
