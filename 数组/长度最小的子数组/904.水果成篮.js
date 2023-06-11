// 题目可以理解为： 寻找只包含两种元素的最长子序列
var totalFruit = function(fruits) {
    const n = fruits.length
    const sum = new Map()
    let left=0,right = 0
    let ans = 0;
    while(right < n){
        sum.set(fruits[right], (sum.get(fruits[right]) || 0) + 1)
        while(sum.size > 2){
            sum.set(fruits[left], sum.get(fruits[left]) - 1)
            if(sum.get(fruits[left]) === 0){
                sum.delete(fruits[left])
            }
            left++
        }
        ans  = Math.max(ans, right-left +1)
        right++
    }
    return ans
};