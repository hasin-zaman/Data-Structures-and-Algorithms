/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a-b)
    
    const res = []
    function backtrack(start, sum, combination) {
        if(sum === target) {
            res.push([...combination])
            return
        }

        for(let i=start; i<candidates.length; i++) {
            if(sum + candidates[i] > target) break
            combination.push(candidates[i])
            backtrack(i, sum + candidates[i], combination)
            combination.pop(candidates[i])
        }
    }

    backtrack(0, 0, [])
    return res
};