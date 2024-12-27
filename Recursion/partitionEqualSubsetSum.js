/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a+b, 0)
    if(sum%2 === 1) return false

    const target = sum/2
    const memo = new Map()

    function canFindSum(index, currentSum) {
        const key = `${index}-${currentSum}`
        if(memo.has(key)) return memo.get(key)
        if(currentSum === target) return true
        if(currentSum > target || index === nums.length) return false

        const foundSum = canFindSum(index+1, nums[index]+currentSum) || canFindSum(index+1, currentSum)
        memo.set(key, foundSum)
        return foundSum
    }

    return canFindSum(0, 0)
};