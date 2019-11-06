class Node {
  constructor(el) {
    this.el = el
    this.next = null
  }
}

// 链式栈
class StackBasedOnLinkedList {
  constructor() {
    this.top = null
  }

  // 进栈
  push(el) {
    const node = new Node(el)
    if (this.top === null) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
  }
  // 出栈
  pop() {
    if (this.top === null) {
      console.log('栈内为空')
      return -1
    }
    const el = this.top.el
    this.top = this.top.next
    return el
  }
  // 清空栈
  clear() {
    this.top = null
  }
  // 数据查看
  display() {
    if (this.top === null) {
      console.log('栈内为空')
      return
    }
    let currentNode = this.top
    while (currentNode !== null) {
      console.log(currentNode.el)
      currentNode = currentNode.next
    }
  }
}

// Test
const newStack = new StackBasedOnLinkedList()
newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.display()
// 获取元素
let res = 0
console.log('-------获取pop元素------')
while (res !== -1) {
  res = newStack.pop()
  console.log(res)
}

exports = module.exports = StackBasedOnLinkedList