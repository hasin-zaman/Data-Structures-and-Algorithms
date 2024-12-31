/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketPairs = new Map([[')', '('], ['}', '{'], [']', '[']])

    let stack = []
    for(let i=0; i<s.length; i++) {
        if(bracketPairs.has(s[i])) {
            if(stack[stack.length-1] === bracketPairs.get(s[i])) stack.pop()
            else return false
        }
        else stack.push(s[i])
    }

    return stack.length === 0
};