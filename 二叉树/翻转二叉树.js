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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null)return null;
  let swap = function(root, left, right){
    let temp = left
    left = right
    right = temp
    root.left = left
    root.right = right
  }
  let queue = [root]
  while(queue.length){
    let len = queue.length
    while(len --){
      let node = queue.shift()
      swap(node, node.left, node.right)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
};