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
  // TODO 自己实现一遍
  remove(num) {
    let point = this.root
    let prent = null
    let tree = this

    let res = null
    while (true) {
      if (point.left) {
        if (num < point.left.value || num < point.value) {
          prent = point
          point = point.left
          continue
        }
      }
      if (point.right) {
        if (num >= point.right.value || num >= point.value) {
          if (num === point.value) {
            delMethod(point, prent)
            if (prent === null) {
              point = this.root
            } else {
              prent = prent
              point = prent.right
            }
            res = true
            continue
          }
          prent = point
          point = point.right
          continue
        }
      }
      if (point.value === num) {
        res = true
        delMethod(point, prent)
      }
      break
    }
    return res
    function delMethod(delNode, parent) {
      let p = delNode // p指向要删除的节点
      let pp = parent // pp记录的是p的父节点

      // 要删除的节点有两个子节点
      if (p.left != null && p.right != null) {
        // 查找右子树中最小节点
        let minP = p.right
        let minPP = p // minPP表示minP的父节点
        while (minP.left != null) {
          minPP = minP
          minP = minP.left
        }
        p.value = minP.value // 将minP的数据替换到p中
        p = minP // 下面就变成了删除minP了
        pp = minPP
      }

      // 删除节点是叶子节点或者仅有一个子节点
      let child // p的子节点
      if (p.left != null) child = p.left
      else if (p.right != null) child = p.right
      else child = null

      if (pp == null) {
        tree.root = child
      } else if (pp.left == p) {
        pp.left = child
      } else {
        pp.right = child
      }
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
}
