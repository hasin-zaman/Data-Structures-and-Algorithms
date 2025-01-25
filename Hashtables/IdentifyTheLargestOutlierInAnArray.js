/**
 * @param {number[]} nums
 * @return {number}
 */
var getLargestOutlier = function(nums) {
    
    let sum = 0
    const map = new Map()
    for(let i=0; i<nums.length; i++) {
        sum += nums[i]
        map.set(nums[i], 1 + (map.get(nums[i]) || 0))
    }

    let largest = -Infinity
    for(let i=0; i<nums.length; i++) {
        const outlier = sum - (2 * nums[i])
        if(map.has(outlier) && (outlier !== nums[i] || map.get(outlier) > 1)){
            largest = Math.max(largest, outlier)
        }
    }

    return largest
};