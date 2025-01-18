/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a-b)

    const res = []
    function backtrack(start, sum, combination) {
        if(sum === target) {
            res.push([...combination])
            return
        }

        for(let i=start; i<candidates.length; i++) {
            if(sum + candidates[i] > target) break
            if(i > start && candidates[i] === candidates[i - 1]) continue

            combination.push(candidates[i])
            backtrack(i + 1, sum + candidates[i], combination)
            combination.pop()
        }
    }

    backtrack(0, 0, [])
    return res
};