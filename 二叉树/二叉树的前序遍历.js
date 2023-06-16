var perorderTravelsal = function(node){
    let res = []
    const dfs = function(root){
        if(root === null)return 
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(node)
    return res
}

perorderTravelsal()