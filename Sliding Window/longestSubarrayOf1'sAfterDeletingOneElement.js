/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    
    let maxLength = 0
    let zeroCount = 0
    let l = 0
    for(let r=0; r<nums.length; r++) {
        if(nums[r] === 0) zeroCount++

        while(zeroCount > 1) {
            if(nums[l] === 0) zeroCount--
            l++
        }

        maxLength = Math.max(maxLength, r - l)
    }

    return maxLength
};