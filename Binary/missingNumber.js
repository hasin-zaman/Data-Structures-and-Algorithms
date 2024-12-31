/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) { 
    let completeSum = 0
    for(let i=0; i<=nums.length; i++) {
        completeSum += i
    }

    let numsSum = nums.reduce((sum, a) => sum + a, 0)

    return completeSum - numsSum
};