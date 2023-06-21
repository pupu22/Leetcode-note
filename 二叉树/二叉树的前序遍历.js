function TreeNode(val,left, right){
    this.val = (val === undefined? 0 : val)
    this.left = (left === null? null : left)
    this.right = (right === null? null : right)
}
// 递归法
// var perorderTravelsal = function(node){
//     let res = []
//     const dfs = function(root){
//         if(root === null)return; 
//         console.log(root.val)
//         res.push(root.val)
//         dfs(root.left)
//         dfs(root.right)
//     }
//     dfs(node)
//     return res
// }
// let a = new TreeNode(2,null, new TreeNode(3,null, null))
// let tree = new TreeNode(1,null, a)

// let num = perorderTravelsal(tree)
// console.log(num)
// 迭代法
var perorderTravelsal = function(node) {
    let res = []
    if(!node) return res;
    const stack = [node]
    let cur = null
    while(stack.length){
        cur = stack.pop()
        res.push(cur.val)
        cur.right && stack.push(cur.right)
        cur.left && stack.push(cur.left)
    }
    return res;
}
let a = new TreeNode(2,null, new TreeNode(3,null, null))
let tree = new TreeNode(1,null, a)

let num = perorderTravelsal(tree)
console.log(num)