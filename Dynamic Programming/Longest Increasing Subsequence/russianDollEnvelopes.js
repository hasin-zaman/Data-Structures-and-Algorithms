/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])

    const tails = []
    for(const [w, h] of envelopes) {
        let l = 0, r = tails.length
        while(l <= r) {
            const mid = Math.floor((l+r)/2)
            if(h > tails[mid]) l = mid + 1
            else r = mid -1
        }

        if(l < tails.length) tails[l] = h
        else tails.push(h)
    }

    return tails.length
};