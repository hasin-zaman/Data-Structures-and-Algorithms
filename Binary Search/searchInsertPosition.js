/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0
    let r = nums.length - 1
    let m
    while(l<=r) {
        m = Math.floor((l+r)/2)
        if(nums[m]==target) {
            return m
        }
        else if(nums[m]>target) {
            r = m - 1
        }
        else {
            l = m + 1
        }
    }

    return nums[m] > target ? m : m + 1
};