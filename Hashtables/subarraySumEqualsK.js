/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    const map = new Map([[0, 1]]) // sum -> frequency
    let sum = 0, count = 0
    for(let i=0; i<nums.length; i++) {
        sum += nums[i]

        if(map.has(sum - k)) count += map.get(sum - k)
        map.set(sum, 1 + (map.get(sum) || 0))
    }

    return count
};