/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1
    let last = -1
    let l = 0
    let r = nums.length - 1
    while(l<=r) {
        let m = Math.floor((l+r)/2)

        if(nums[m]==target) {
            if(m==nums.length-1 || nums[m+1]!=target) {
                last = m
                break
            }
            l = m + 1
        }
        else if(nums[m] > target) {
            r = m - 1 
        }
        else {
            l = m + 1
        }
    }

    l = 0
    r = nums.length - 1
    while(l<=r) {
        let m = Math.floor((l+r)/2)

        if(nums[m]==target) {
            if(m==0 || nums[m-1]!=target) {
                first = m
                break
            }
            r = m - 1
        }
        else if(nums[m] > target) {
            r = m - 1 
        }
        else {
            l = m + 1
        }
    }

    return [first, last]
};