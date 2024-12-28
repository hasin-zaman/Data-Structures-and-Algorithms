/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const memo = new Map()
    function findTarget(index, sum) {
        if(index === nums.length) {
            return sum === target ? 1 : 0
        }

        const key = `${index}-${sum}`
        if(memo.has(key)) return memo.get(key)

        const count = findTarget(index + 1, sum + nums[index]) + findTarget(index + 1, sum - nums[index])

        memo.set(key, count)
        return count
    }

    return findTarget(0, 0)
}