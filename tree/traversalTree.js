class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }
  generate() {
    for (let i = 0; i < 10; i += 2) {
      this.insert(i)
    }
    for (let i = 1; i < 10; i += 2) {
      this.insert(i)
    }
  }
  insert(value) {
    const currentNode = new Node(value)
    if (this.root === null) {
      this.root = currentNode
      return
    }
    let p = this.root
    while (p !== null) {
      // 跟父节点比，比父节点大的放右边，小的放左边
      if (value > p.value) {
        if (p.right === null) {
          p.right = currentNode
          break
        }
        p = p.right
      } else {
        if (p.left === null) {
          p.left = currentNode
          break
        }
        p = p.left
      }
    }
  }
  // 中序遍历
  inorderPrint() {
    let root = this.root
    function print(point) {
      if (point === null) return
      print(point.left)
      console.log(point.value)
      print(point.right)
    }
    print(root)
  }
  // 前序遍历
  preorderPrint() {
    let root = this.root
    function print(point) {
      if (point === null) return
      console.log(point.value)
      print(point.left)
      print(point.right)
    }
    print(root)
  }
  // 后序遍历
  postorderPrint() {
    let root = this.root
    function print(point) {
      if (point === null) return
      print(point.left)
      print(point.right)
      console.log(point.value)
    }
    print(root)
  }
}

const tree = new Tree()
tree.generate()
console.log('=======前序遍历======')
tree.preorderPrint()
console.log('=======中序遍历======')
tree.inorderPrint()
console.log('=======后序遍历======')
tree.postorderPrint()
