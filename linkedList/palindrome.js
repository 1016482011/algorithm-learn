const LinkedList = require('./singlyLinkedList')

const LList = new LinkedList()

LList.append('l')
LList.append('e')
LList.append('v')
LList.append('v')
LList.append('l')
LList.display()

// TODO 边界条件未做判断
// 慢指针节点
let sNode = LList.findByIndex(0)
// 快指针节点
let qNode = sNode.next

// 慢指针前个节点
let sPreNode = null
// 慢指针后一个节点
let afterNode = null

// 标识是否回文
let isPalindrome = true

while (qNode !== null) {
  // 慢指针步进
  let sNextNode = sNode.next
  sNode.next = sPreNode
  sPreNode = sNode
  sNode = sNextNode
  // 快指针步进
  let qNextNode = qNode.next
  if (qNextNode === null) {
    qNode = qNextNode
    afterNode = sNextNode
  } else {
    qNode = qNextNode.next
    afterNode = sNode.next
  }
}

// 正序时使用
let preNode = sPreNode

while (afterNode !== null) {
  if (sPreNode.el !== afterNode.el) isPalindrome = false
  sPreNode = sPreNode.next
  afterNode = afterNode.next
}

// 将链表前半部分正序
while (preNode !== null) {
  let preNextNode = preNode.next
  preNode.next = sNode
  sNode = preNode
  preNode = preNextNode
}

console.log(isPalindrome ? '回文字符串' : '非回文字符串')
LList.display()