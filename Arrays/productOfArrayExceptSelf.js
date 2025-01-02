/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    const res = Array(nums).fill(1)

    let prefix = 1
    for(let i=0; i<n; i++) {
        res[i] = prefix
        prefix *= nums[i]
    }

    let suffix = 1
    for(let i=n-1; i>=0; i--) {
        res[i] *= suffix
        suffix *= nums[i]
    }

    return res
};