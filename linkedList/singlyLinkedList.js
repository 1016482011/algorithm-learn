// js实现单链
class Node {
  constructor(el) {
    this.el = el
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
  }
  // 根据值查找节点
  findByValue(val) {
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.el !== val) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }
  // 根据索引查找节点
  findByIndex(index) {
    let pos = 0
    let currentNode = this.head.next
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    return currentNode === null ? -1 : currentNode
  }
  // 查找前一个值
  findPrev(val) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.el !== val) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      return -1
    }

    return currentNode
  }
  // 链尾添加节点
  append(newEl) {
    const newNode = new Node(newEl)
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }
  // 插入节点
  insert(newEl, el) {
    const newNode = new Node(newEl)
    const targetNode = this.findByValue(el)
    if (targetNode === -1) {
      console.log('对应节点不存在')
      return
    }
    newNode.next = targetNode.next
    targetNode.next = newNode
  }
  // 根据值删除节点
  remove(val) {
    const preNode = this.findPrev(val)
    if (preNode === -1) {
      console.log('节点不存在')
      return
    }
    preNode.next = preNode.next.next
  }

  // 显示链表数据
  display() {
    let currentNode = this.head.next
    let str = ''
    while (currentNode !== null) {
      str = `${str}${!str ? '' : ', '}${currentNode.el}`
      currentNode = currentNode.next
    }
    console.log(str)
  }
}

exports = module.exports = LinkedList
