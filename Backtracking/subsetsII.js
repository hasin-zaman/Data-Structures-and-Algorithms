/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)

    const res = [[]]
    function backtrack(start, combination) {
        for(let i=start; i<nums.length; i++) {
            if(i > start && nums[i] === nums[i-1]) continue
            combination.push(nums[i])
            res.push([...combination])
            backtrack(i+1, combination)
            combination.pop()
        }
    }

    backtrack(0, [])
    return res
};