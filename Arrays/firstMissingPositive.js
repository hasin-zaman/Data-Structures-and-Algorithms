/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length
    
    let contains1 = false
    for(let i=0; i<n; i++) {
        if(nums[i] === 1) contains1 = true
        if(nums[i] <= 0 || nums[i] > n) nums[i] = 1
    }
    if(!contains1) return 1

    for(let i=0; i<n; i++) {
        let value = Math.abs(nums[i])
        if(value === n) nums[0] = -Math.abs(nums[0])
        else nums[value] = -Math.abs(nums[value])
    }

    for(let i=1; i<n; i++) {
        if(nums[i] > 0) return i
    }

    return nums[0] > 0 ? n : n + 1
};