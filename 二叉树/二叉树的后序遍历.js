function TreeNode(val,left, right){
    this.val = (val === undefined? 0 : val)
    this.left = (left === null? null : left)
    this.right = (right === null? null : right)
}
// 递归法
// var postorderTravelsal = function(node){
//     let res = []
//     const dfs = function(root){
//         if(root === null)return; 
//         dfs(root.left)
//         dfs(root.right)
//         res.push(root.val)
//     }
//     dfs(node)
//     return res
// }

// 迭代法
var postorderTravelsal = function (node) {
    let res = []
    const stack = [node]
    let cur = null
    while(stack.length){
        cur = stack.pop()
        res.push(cur.val)
        cur.left && stack.push(cur.left)
        cur.right && stack.push(cur.right)
    }
    return res.reverse()
}
let a = new TreeNode(2,new TreeNode(3,null, null), new TreeNode(4,null, null))
let tree = new TreeNode(1,null, a)

let num = postorderTravelsal(tree)
console.log(num)