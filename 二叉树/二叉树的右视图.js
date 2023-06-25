function TreeNode(val,left, right){
  this.val = (val === undefined? 0 : val)
  this.left = (left === null? null : left)
  this.right = (right === null? null : right)
}

var rightSideView = function(root) {
  let res = [], queue = []
  queue.push(root)
  while(queue.length && root !== null){
    let length = queue.length
    while(length --){
      let node = queue.shift()
      if(!length){
        res.push(node.val)
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
};
let a = new TreeNode(2,null, new TreeNode(3,null, null))
let tree = new TreeNode(1,null, a)

let num = rightSideView(tree)
console.log(num)