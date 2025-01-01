/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    candidates.sort((a, b) => a - b)

    function backtrack(start, remaining, combination) {
        if(remaining === 0) {
            res.push([...combination])
        }

        for(let i=start; i<candidates.length; i++) {
            if(candidates[i] > remaining) break
            combination.push(candidates[i])
            backtrack(i, remaining - candidates[i], combination)
            combination.pop()
        }
    }

    backtrack(0, target, [])
    return res
};