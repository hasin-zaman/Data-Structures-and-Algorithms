/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0

    let l = 0
    let r = nums.length - 1
    while(l <= r) {
        let mid = Math.floor((l + r) / 2)
        if((mid === 0 && nums[mid + 1] < nums[mid]) || (mid === nums.length-1 && nums[mid - 1] < nums[mid]) || (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid])) return mid
        else if((mid === nums.length-1 && nums[mid - 1] > nums[mid]) || (mid > 0 && nums[mid - 1] > nums[mid])) r = mid - 1
        else l = mid + 1
    }
};