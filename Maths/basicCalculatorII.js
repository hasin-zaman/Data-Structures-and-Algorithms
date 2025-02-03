/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
    let res = 0, currNum = '', lastNum = 0, prevOperator = '+'
    for(let i=0; i<=s.length; i++) {
        if(s[i] === ' ') continue

        if(i !== s.length && s[i] >= '0' && s[i] <= '9') currNum += s[i]
        else {
            currNum = Number(currNum)
            switch(prevOperator) {
                case '+':
                    res += lastNum
                    lastNum = currNum
                    break
                case '-':
                    res += lastNum
                    lastNum = -currNum
                    break
                case '*':
                    lastNum *= currNum
                    break
                case '/':
                    lastNum = Math.trunc(lastNum/currNum)
                    break
            }
            prevOperator = s[i]
            currNum = ''
        }
    }
    res += lastNum

    return res
};