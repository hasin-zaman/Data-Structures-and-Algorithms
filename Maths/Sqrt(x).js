/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    if(x < 2) return x

    let l = 2, r = Math.floor(x / 2)
    while(l <= r) {
        let mid = Math.floor((l + r) / 2)
        let square = mid * mid
        if(square > x) r = mid - 1
        else if(square < x) l = mid + 1
        else return mid 
    }
    return r
};