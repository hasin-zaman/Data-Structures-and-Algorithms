/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let res = []
    function backtrack(permutation, set) {
        if(permutation.length === nums.length) {
            res.push([...permutation])
            return
        }

        for(let i=0; i<nums.length; i++) {
            if(set.has(nums[i])) continue

            set.add(nums[i])
            permutation.push(nums[i])
            backtrack(permutation, set)
            permutation.pop()
            set.delete(nums[i])
        }
    }

    backtrack([], new Set())
    return res
};