/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    function pow(n) {
        if(n === 0) return 1
        if(n === 1) return x

        let half;
        if(n % 2 === 0) {
            half = pow(n/2)
            return half * half
        }
        else {
            half = pow((n - 1)/2)
            return x * half * half
        }
    }

    let res = pow(Math.abs(n))
    return n < 0 ? 1/res : res
};