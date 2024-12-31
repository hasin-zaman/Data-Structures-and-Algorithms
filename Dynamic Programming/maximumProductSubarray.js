/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let res = nums[0], currMax = nums[0], currMin = nums[0]
    for(let i=1; i<nums.length; i++) {
        let tempMax = currMax

        currMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin)
        currMin = Math.min(nums[i], nums[i] * tempMax, nums[i] * currMin)
        
        res = Math.max(res, currMax)
    }

    return res
};