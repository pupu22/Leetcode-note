// 双指针-滑动窗口
var minSubArrayLen = function(target, nums) {
    let start = 0, end = 0
    let n = nums.length
    let sum = 0
    let res = Infinity
    while(end < n){ //滑动窗口的右边界
        sum += nums[end]
        while(sum >= target){
            res = Math.min(res, end - start + 1)
            sum -= nums[start]
            start++
        }
        end++
    }
    return res === Infinity? 0 : res
};