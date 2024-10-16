/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let l = 1
    let r = num

    while(l<=r) {
        let mid = parseInt((l+r)/2)
        let square = mid * mid
        if(square == num) {
            return true
        }
        else if(square > num) {
            r = mid - 1
        }
        else {
            l = mid + 1
        }
    }

    return false
};