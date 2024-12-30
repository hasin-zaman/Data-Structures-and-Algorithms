/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0; i<nums.length; i++) {
        map.set(nums[i], i)
    }

    for(let i=0; i<nums.length; i++) {
        const reqVal = target - nums[i]
        if(map.has(reqVal) && map.get(reqVal) !== i) return [i, map.get(reqVal)]
    }
};