/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const map = new Map()
    for(let i=0; i<nums.length; i++) {
        map.set(nums[i], 1 + (map.get(nums[i]) || 0))
    }

    const visited = new Set()
    let count = 0
    for(let i=0; i<nums.length; i++) {
        if(!visited.has(nums[i]) && map.has(k - nums[i])) {
            if(nums[i] === (k - nums[i])) {
                count += Math.floor(map.get(nums[i]) / 2)
            }
            else {
                count += Math.min(map.get(nums[i]), map.get(k - nums[i]))
                visited.add(k - nums[i])
            }
            visited.add(nums[i])
        }
    }

    return count
};