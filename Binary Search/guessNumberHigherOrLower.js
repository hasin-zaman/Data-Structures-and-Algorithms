/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1
    let r = Math.pow(2, 31) - 1
    
    while(true) {
        if(guess(n) == 0) {
            return n
        }
        else if(guess(n) == -1) {
            r = n - 1
        }
        else {
            l = n + 1
        }

        n = parseInt((l+r)/2)
    }
};