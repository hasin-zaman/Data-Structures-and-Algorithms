/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1
    let r = Math.max(...piles)
    let res = r
    while(l<=r) {
        let m = Math.floor((l+r)/2)
        let time = 0
        for(let i=0; i<piles.length; i++) {
            time += Math.ceil(piles[i]/m)
        }

        if(time<=h) {
            r = m - 1
            res = Math.min(res, m)
        }
        else {
            l = m + 1
        }
    }

    return res
};