/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let currentNode1 = l1,
    currentNode2 = l2,
    headNode = new ListNode(-Infinity),
    node = headNode;
  while (currentNode1 !== null && currentNode2 !== null) {
    let val;
    if (currentNode1.val < currentNode2.val) {
      val = currentNode1.val;
      currentNode1 = currentNode1.next;
    } else {
      val = currentNode2.val;
      currentNode2 = currentNode2.next;
    }
    node.next = new ListNode(val);
    node = node.next;
  }
  if (currentNode1 !== null) node.next = currentNode1;
  if (currentNode2 !== null) node.next = currentNode2;
  return headNode.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists1 = function(l1, l2) {
  function merge(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    if (list1.val < list2.val) {
      list1.next = merge(list1.next, list2);
      return list1;
    } else {
      list2.next = merge(list1, list2.next);
      return list2;
    }
  }
  return merge(l1, l2);
};
