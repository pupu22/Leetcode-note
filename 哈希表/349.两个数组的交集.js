/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length < nums2.length){
        const _ = nums1
        nums1 = nums2
        nums2 = _
    }
    const nums1Set = new Set(nums1)// 生成{...nums1},元素不重复，键值名相同，都为数组元素
    const resSet = new Set()
    for(let i = nums2.length -1; i >= 0; i--){
        nums1Set.has(nums2[i]) && resSet.add(nums2[i])
    }
    return Array.from(resSet)
};