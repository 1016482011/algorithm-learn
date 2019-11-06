class Node {
  constructor(el) {
    this.el = el
    this.next = null
  }
}

// 链式队列
class QueueBasedOnLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  // 进队
  enqueue(el) {
    const node = new Node(el)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }
  // 出队
  dequeue() {
    if (this.head === null) {
      console.log('队列为空')
      return -1
    }
    const el = this.head.el
    this.head = this.head.next
    return el
  }
}
// Test
const newQueue = new QueueBasedOnLinkedList()
// 插入元素
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
// 获取元素
let res = 0
console.log('-------获取dequeue元素------')
while (res !== -1) {
  res = newQueue.dequeue()
  console.log(res)
}
exports = module.exports = QueueBasedOnLinkedList
