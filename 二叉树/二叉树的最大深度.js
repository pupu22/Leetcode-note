/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let res = 0, queue = []
  if(root=== null) return 0;
  queue.push(root)
  while(queue.length){
    let len = queue.length
    res ++
    while(len --){
      let node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
};