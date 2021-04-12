# algorithm-learn

算法学习

## 案例

### 单链 

- [单链](https://github.com/1016482011/algorithm-learn/blob/master/linkedList/singlyLinkedList.js)。
- [回文字符串判定](https://github.com/1016482011/algorithm-learn/blob/master/linkedList/palindrome.js)。单链结构实现思路：使用快慢两个指针找到链表中点，慢指针每次前进一步，快指针每次前进两步。在慢指针前进的过程中，同时修改其 next 指针，使得链表前半部分反序，比较中点两侧的链表是否相等，最后将前半部分正序。

### 栈

- [链式栈](https://github.com/1016482011/algorithm-learn/blob/master/stack/stackBasedOnLinkedList.js)。

### 队列

- [链式队列](https://github.com/1016482011/algorithm-learn/blob/master/queue/queueBasedOnLinkedList.js)

### 递归

- [假如这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法？](https://github.com/1016482011/algorithm-learn/blob/master/recursion/step.js)

### 排序

适合小规模数据的排序

- [冒泡排序](https://github.com/1016482011/algorithm-learn/blob/master/sort/bubbleSort.js)。原地排序，稳定排序，时间复杂度 O(n^2)
- [插入排序](https://github.com/1016482011/algorithm-learn/blob/master/sort/insertionSort.js)。原地排序，稳定排序，时间复杂度 O(n^2)
- [选择排序](https://github.com/1016482011/algorithm-learn/blob/master/sort/selectionSort.js)。原地排序，不稳定排序，时间复杂度 O(n^2)

适合大规模的数据排序

- [归并排序](https://github.com/1016482011/algorithm-learn/blob/master/sort/mergeSort.js)。非原地排序，稳定排序，时间复杂度 O(nlogn)，空间复杂度 O(n)
- [快速排序](https://github.com/1016482011/algorithm-learn/blob/master/sort/quickSort.js)。原地排序，非稳定排序，时间复杂度 O(nlogn)，最坏情况 O(n^2)

线性排序

桶排序、计数排序、基数排序。它们对要排序的数据都有比较苛刻的要求，应用不是非常广泛。但是如果数据特征比较符合这些排序算法的要求，应用这些算法，会非常高效，线性时间复杂度可以达到 O(n)。

桶排序和计数排序的排序思想是非常相似的，都是针对范围不大的数据，将数据划分成不同的桶来实现排序。

基数排序要求数据可以划分成高低位，位之间有递进关系。比较两个数，我们只需要比较高位，高位相同的再比较低位。而且每一位的数据范围不能太大，因为基数排序算法需要借助桶排序或者计数排序来完成每一个位的排序工作。

### 二分查找

- [简单有序数组二分查找](https://github.com/1016482011/algorithm-learn/blob/master/binary/bsearch.js)。
- [求一个数的平方根，精确到小数点后 6 位](https://github.com/1016482011/algorithm-learn/blob/master/binary/squareRoot.js)。

### 二叉树

[前、中、后序遍历](https://github.com/1016482011/algorithm-learn/blob/master/tree/traversalTree.js)

- 前序遍历是指，对于树中的任意节点来说，先打印这个节点，然后再打印它的左子树，最后打印它的右子树。
- 中序遍历是指，对于树中的任意节点来说，先打印它的左子树，然后再打印它本身，最后打印它的右子树。
- 后序遍历是指，对于树中的任意节点来说，先打印它的左子树，然后再打印它的右子树，最后打印这个节点本身。

[二叉查找树](https://github.com/1016482011/algorithm-learn/blob/master/tree/searchTree.js)

1. 节点 N 左子树上的所有节点的值都小于等于节点 N 的值；
2. 节点 N 右子树上的所有节点的值都大于等于节点 N 的值；
3. 左子树和右子树也都是 BST。

## LeetCode 练习

[LeetCode 练习](https://github.com/1016482011/algorithm-learn/blob/master/leetcode)

## 剑指offer

练习地址来自牛客网的 [剑指offer](https://www.nowcoder.com/ta/coding-interviews) 专栏

最后一题对应专栏的JZ36，做题时间为 2020-11-14 到 2021-03-02