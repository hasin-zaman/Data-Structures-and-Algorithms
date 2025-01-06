/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
    let maxCount = 0
    let zeroCount = 0
    let l = 0
    for(let r=0; r<nums.length; r++) {
        if(nums[r] === 0) zeroCount++

        while(zeroCount > k) {
            if(nums[l] === 0) zeroCount --
            l++
        }

        maxCount = Math.max(maxCount, r - l + 1)
    }

    return maxCount
};