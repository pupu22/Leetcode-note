// 不适合使用哈希表，而应该用三指针
/*
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/3sum
*/
var threeSum = function(nums){
    const res = [], len = nums.length
    nums.sort((a,b)=> a-b)
    for(let i = 0; i < nums.length; i++){
        let l = i + 1, r = len - 1, iNum = nums[i]
        if(nums[i] > 0)return res;
        if(iNum == nums[i -1])continue
        while(l < r){
            let lNum = nums[l], rNum = nums[r],threeSum = iNum + rNum + lNum
            if(threeSum < 0)l++
            else if(threeSum > 0) r--
            else{
                res.push([iNum, lNum, rNum])
                while(l < r && nums[l] === nums[l + 1]){
                    l ++
                }
                while(l < r && nums[r] === nums[r-1]){
                    r --
                }
                l++
                r--
            }
        }
    }
    return res
}