// 完全二叉树：除了最底层节点可能没填满外，其余每层节点数都达到最大值，
// 并且最下面一层的节点都集中在该层最左边的若干位置。

// 层序遍历法
var countNodes = function(root) {
  if(root === null)return 0;
  let count = 0
  let queue = [root]
  while(queue.length){
    let len = queue.length
    while(len --){
      let node  = queue.shift()
      count ++
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return count
}

// 使用完全二叉树的性质
var countNodes1 = function(root){
      //利用完全二叉树的特点
  if(root === null) {
      return 0;
  }
  let left = root.left;
  let right = root.right;
  let leftDepth = 0, rightDepth = 0;
  while(left) {
      left = left.left;
      leftDepth++;
  }
  while(right) {
      right = right.right;
      rightDepth++;
  }
  if(leftDepth == rightDepth) {
      return Math.pow(2, leftDepth+1) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
}