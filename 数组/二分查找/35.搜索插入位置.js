// 插入元素有四种情况
// 小于所有元素
// 大于所有元素
// 等于某个元素
// 要插入元素之中
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length;
    while(left < right){
        let mid = left + ((right - left) >> 1);
        if(target <nums[0] )return 0;
        if(target > nums[right -1]) return right;
        if(nums[mid] > target) {
            right = mid;
        }else if( nums[mid] < target){
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return left;  
};