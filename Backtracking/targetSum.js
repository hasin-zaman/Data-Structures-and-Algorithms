/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    let memo = new Map()
    function backtrack(i, total) {
        if(i === nums.length) return total === target ? 1 : 0

        const key = `${i}-${total}`
        if(memo.has(key)) return memo.get(key)

        const res = backtrack(i + 1, total + nums[i]) + backtrack(i + 1, total - nums[i])

        memo.set(key, res)
        return res
    }

    return backtrack(0, 0)
};