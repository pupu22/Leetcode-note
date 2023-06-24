var levelOrder = function(root) {
  let res = [], queue = []
  queue.push(root)
  if(root === null){
    return res;
  }
  while(queue.length){
    let length = queue.length
    let temp = []
    for(let i = 0; i < length; i++){
      let node = queue.shift()
      temp.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(temp)
  }
  return res;
};