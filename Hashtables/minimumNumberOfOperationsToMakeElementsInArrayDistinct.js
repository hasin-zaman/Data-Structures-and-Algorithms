/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    
    let count = 0
    while(new Set(nums).size !== nums.length) {
        nums = nums.slice(3)
        count++
    }

    return count
};