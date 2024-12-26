/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1

    let prev1 = 1, prev2 = 0
    for(let i=2; i<=n; i++) {
        const current = prev1 + prev2
        prev2 = prev1
        prev1 = current 
    }

    return prev1
};