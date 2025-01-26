/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    const res = []
    function backtrack(curr, openCount, closeCount) {
        if(curr.length === n * 2) {
            res.push(curr)
            return
        }

        if(openCount < n) backtrack(curr + '(', openCount + 1, closeCount)
        if(openCount > closeCount) backtrack(curr + ')', openCount, closeCount + 1)
    }

    backtrack('', 0, 0)
    return res
};