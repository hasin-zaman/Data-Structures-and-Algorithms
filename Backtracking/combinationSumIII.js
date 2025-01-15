/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if(n < k) return []
    
    const res = []
    function backtrack(index, combination, sum) {
        if(combination.length === k && sum === n) {
            res.push([...combination])
            return
        }

        for(let i=index; i<=9; i++) {
            if(combination.length === k || sum + i > n) break 

            combination.push(i)
            backtrack(i + 1, combination, sum + i)
            combination.pop()
        }
    }

    backtrack(1, [], 0)
    return res
};