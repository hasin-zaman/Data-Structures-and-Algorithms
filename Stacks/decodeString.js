/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    let stack = []
    let res = ''
    let currNum = ''
    for(let i=0; i<s.length; i++) {
        if(s[i] >= '0' && s[i] <= '9') currNum += s[i]
        else if(s[i] === '[') {
            stack.push([res, parseInt(currNum)])
            currNum = ''
            res = ''
        }
        else if(s[i] === ']') {
            const [prevRes, multiplier] = stack.pop()
            res = prevRes + res.repeat(multiplier)
        }
        else res += s[i]
    }

    return res
};