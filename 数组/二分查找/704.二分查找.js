// 左闭右开
var search = function(nums, target) {
    let left = 0, right = nums.length;
    while(left < right){
        let mid = left + ((right - left ) >> 1);
        if(nums[mid] > target){
            right = mid;
        } else if(nums[mid] < target){
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};