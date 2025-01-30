/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    const res = []
    function backtrack(start, subset) {
        res.push([...subset])
        if(start === nums.length + 1) return

        for(let i=start; i<nums.length; i++) {
            subset.push(nums[i])
            backtrack(i + 1, subset)
            subset.pop()
        }
    }

    backtrack(0, [])
    return res
};