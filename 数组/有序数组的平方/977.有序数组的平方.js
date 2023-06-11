// 暴力解法
// 时间复杂度 O(n + nlog n)
var sortedSquares = function(nums) {
    const arr = nums.map((value) =>(value * value))
    arr.sort((a,b)=> a-b)
    return arr;
};

//双指针法
//时间复杂度 O(n)
var sortedSquares = function(nums) {
    let n = nums.length;
    let arr = new Array(n).fill(0)
    let i =0,j = n-1,k= n-1;
    while(i <= j){
        let left = nums[i] * nums[i]
        let right = nums[j]* nums[j]
        if(left < right){
            arr[k--] = right;
            j--;
        }else{
            arr[k--]=left;
            i++
        }
    }
    return arr;
};