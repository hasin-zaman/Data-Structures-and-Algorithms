/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === '') return []

    const map = new Map([['2', ['a', 'b', 'c']], ['3', ['d', 'e', 'f']], ['4', ['g', 'h', 'i']], ['5', ['j', 'k', 'l']], ['6', ['m', 'n', 'o']], ['7', ['p', 'q', 'r', 's']], ['8', ['t', 'u', 'v']], ['9', ['w', 'x', 'y', 'z']]])
    
    const n = digits.length
    let res = []
    function backtrack(i, combination) {
        if(i === n) {
            res.push(combination)
            return
        }

        for(const letter of map.get(digits[i])) {
            combination += letter
            backtrack(i + 1, combination)
            combination = combination.slice(0, combination.length - 1)
        }
    }

    backtrack(0, '')
    return res
};