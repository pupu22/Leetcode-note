# Leetcode-note
leetcode刷题记录

刷题教程：
- [LABULADONG 的算法网站](https://labuladong.github.io/algo/) 
- [代码随想录](https://programmercarl.com/%E6%95%B0%E7%BB%84%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E6%95%B0%E7%BB%84%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80)

# 链表
## 设计链表
- [x] [707.设计链表](https://leetcode.cn/problems/design-linked-list/) medium
## 移除元素
- [x] [203.移除链表元素](https://leetcode.cn/problems/remove-linked-list-elements/) easy
## 反转链表
- [x] [206.翻转链表](https://leetcode.cn/problems/reverse-linked-list/) easy
## 两两交换链表中的元素
- [x] [24.两两交换链表中的元素](https://leetcode.cn/problems/swap-nodes-in-pairs/) medium
## 删除链表中的倒数第N个节点
- [x] [19.删除链表中的倒数第N个节点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/) medium

## 双指针技巧
- [x] [合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/) easy
- [x] [86. 分割链表](https://leetcode.cn/problems/partition-list/) medium

# 数组
## 二分查找
- [x] [704.二分查找](https://leetcode.cn/problems/binary-search/) easy
- [x] [35. 搜索插入位置](https://leetcode.cn/problems/search-insert-position/) easy
## 移除元素
双指针法
- [x] [27.移除元素](https://leetcode.cn/problems/remove-element/) easy
## 有序数组的平方
双指针法
- [x] [977.有序数组的平方](https://leetcode.cn/problems/squares-of-a-sorted-array/) easy
## 长度最小的子数组
- [x] [977.有序数组的平方](https://leetcode.cn/problems/squares-of-a-sorted-array/) medium
- [x] [904.水果成篮](https://leetcode.cn/problems/squares-of-a-sorted-array/) medium
- [x] [76.最小覆盖子串](https://leetcode.cn/problems/squares-of-a-sorted-array/) hard
## 螺旋矩阵
- [x] [59.螺旋矩阵II](https://leetcode.cn/problems/spiral-matrix-ii/) medium

# 二叉树
##  二叉树的递归遍历与迭代遍历（深度遍历）
前序遍历、中序遍历、后序遍历
## 二叉树的层序遍历（广度遍历）
- [x] [102.二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)
- [x] [199.二叉树的右视图](https://leetcode.cn/problems/binary-tree-right-side-view/)
- [x] [429.N叉树的层序遍历](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/)
- [x] [116.填充每个节点的下一个右侧节点](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/)
- [x] [104.二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)
- [x] [111.二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)
## 翻转二叉树
- [x] [26.翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)
- [x] [101.对称二叉树](https://leetcode.cn/problems/symmetric-tree/)
- [x] [222.完全二叉树的节点个数](https://leetcode.cn/problems/count-complete-tree-nodes/) hard
- [x] [110.平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/) easy
- [x] [257.二叉树的所有路径](https://leetcode.cn/problems/binary-tree-paths/) easy
- [x] [404. 左叶子之和](https://leetcode.cn/problems/sum-of-left-leaves/) easy

# 哈希表
对于js来说，哈希表可以使用map也可以使用数组来实现。    
哈希表是典型的空间换时间的例子。    
当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑哈希法了。
- 使用数组来做哈希表，必须是元素个数已知，且比较紧凑。如果哈希值比较分散，会造成空间的浪费。
- 使用set来做哈希表，不仅占用空间比数组大，而且速度要比数组慢，set把数值映射到key上都要做hash计算的。当数据量比较大的时候，这个差异会很明显。
- 使用map来做哈希表，也会有哈希计算以及元素下标重叠时的哈希碰撞问题。