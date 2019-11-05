# algorithm-learn

算法学习

根据[课程中的案例](https://time.geekbang.org/column/intro/126)的思路，自己用 js 实现一遍。

## 案例

### 单链

- [单链](https://github.com/1016482011/algorithm-learn/blob/master/linkedList/singlyLinkedList.js)
- [回文字符串判定](https://github.com/1016482011/algorithm-learn/blob/master/linkedList/palindrome.js)。单链结构实现思路：使用快慢两个指针找到链表中点，慢指针每次前进一步，快指针每次前进两步。在慢指针前进的过程中，同时修改其 next 指针，使得链表前半部分反序。最后比较中点两侧的链表是否相等。
