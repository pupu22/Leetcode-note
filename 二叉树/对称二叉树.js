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
 * @return {boolean}
 */

/* 递归法 */
// var isSymmetric = function(root) {
//   let isCorrect = function(left, right){
//       if(left === null && right!== null || left !== null && right === null){
//           return false
//       }else if(left === null &&right === null){
//           return true
//       }else if (left.val !== right.val){
//           return false
//       }
//       let outside = isCorrect(left.left, right.right)
//       let inside = isCorrect(left.right, right.left)
//       return outside && inside
//   }
//   if(root === null) return true;
//   return isCorrect(root.left, root.right)
// };

/* 迭代法 */
var isSymmetric = function(root) {
  if(root === null) return true;
  let queue = []
  queue.push(root.left)
  queue.push(root.right)
  while(queue.length){
    let left = queue.shift()
    let right = queue.shift()
    if(left=== null && right=== null){
      continue
    }else if(left === null && right !== null || left !== null && right === null ){
      return false
    }else if(left.val !== right.val){
      return false
    }
    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }
  return true;
}