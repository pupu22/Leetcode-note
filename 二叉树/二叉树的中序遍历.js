function TreeNode(val,left, right){
    this.val = (val === undefined? 0 : val)
    this.left = (left === null? null : left)
    this.right = (right === null? null : right)
}
// 递归法
// var inorderTravelsal = function(node){
//     let res = []
//     const dfs = function(root){
//         if(root === null)return; 
//         dfs(root.left)
//         res.push(root.val)
//         dfs(root.right)
//     }
//     dfs(node)
//     return res
// }

// 迭代法
var inorderTravelsal = function (node){
    let res = []
    let stack = []
    let cur = node
    while(stack.length || cur){
        if(cur){
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
}
let a = new TreeNode(2,new TreeNode(3,null, null), new TreeNode(4,null, null))
let tree = new TreeNode(1,null, a)

let num = inorderTravelsal(tree)
console.log(num)