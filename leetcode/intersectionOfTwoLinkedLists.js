/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 暴力解法
 */
var getIntersectionNode = function(headA, headB) {
  let currentA = headA,
    currentB = headB;
  while (currentA !== null) {
    while (currentB !== null) {
      if (currentA === currentB) return currentB;
      currentB = currentB.next;
    }
    currentA = currentA.next;
    currentB = headB;
  }
  return null;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 空间换时间
 */
var getIntersectionNode = function(headA, headB) {
  let currentA = headA,
    currentB = headB;
  while (currentA !== null) {
    currentA.mark = true;
    currentA = currentA.next;
  }
  while (currentB !== null) {
    if (currentB.mark) return currentB;
    currentB = currentB.next;
  }
  return null;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 双指针法
 */
var getIntersectionNode = function(headA, headB) {
  let currentA = headA,
    currentB = headB;
  while (currentA !== null || currentB !== null) {
    if (currentA === currentB) return currentB;
    currentA = currentA === null ? headB : currentA.next;
    currentB = currentB === null ? headA : currentB.next;
  }
  return null;
};
