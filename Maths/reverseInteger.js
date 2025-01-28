/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let reversed = 0
    while(x !== 0) {
        let digit = x % 10
        x = parseInt(x / 10)
        reversed = (10 * reversed) + digit
        if(reversed >= Math.pow(2, 31) - 1 || reversed <= Math.pow(-2, 31)) {
            return 0
        }
    }

    return reversed
};