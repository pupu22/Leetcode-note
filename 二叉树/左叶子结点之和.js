var sumOfLeftLeaves  = function(root) {
  let res = 0, queue = []
  queue.push(root)
  if(root === null){
    return res;
  }
  while(queue.length){
    let length = queue.length
    while(length --){
      let node = queue.shift()
      if(node.left !== null && node.left.left === null && node.left.right === null){
        res += node.left.val
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res;
};