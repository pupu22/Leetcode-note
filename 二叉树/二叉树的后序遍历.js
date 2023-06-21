function TreeNode(val,left, right){
    this.val = (val === undefined? 0 : val)
    this.left = (left === null? null : left)
    this.right = (right === null? null : right)
}
var postorderTravelsal = function(node){
    let res = []
    const dfs = function(root){
        if(root === null)return; 
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
    dfs(node)
    return res
}
let a = new TreeNode(2,new TreeNode(3,null, null), new TreeNode(4,null, null))
let tree = new TreeNode(1,null, a)

let num = postorderTravelsal(tree)
console.log(num)