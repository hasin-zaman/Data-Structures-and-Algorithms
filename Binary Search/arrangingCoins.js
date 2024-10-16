//Logn solution
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let l = 1
    let r = n
    let res = 0

    while(l<=r) {
        let mid = parseInt((l+r)/2)

        //formula to sum up sequential numbers lets say 1, 2, 3, ...
        let coins = (mid / 2) * (mid + 1)

        if(coins > n) {
            r = mid - 1
        }
        else {
            l = mid + 1
            res = Math.max(res, mid)
        }
    }

    return res
};

//O(1) solution using quadratic equation
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
};
