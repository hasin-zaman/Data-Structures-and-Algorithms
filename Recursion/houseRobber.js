/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    const memo = Array(nums.length).fill(-1)
    function calcAmount(i) {
        if(i >= nums.length) return 0

        if(memo[i] !== -1) return memo[i]
        memo[i] = Math.max(nums[i] + calcAmount(i + 2), calcAmount(i + 1))

        return memo[i]
    }

    return calcAmount(0, 0)
};