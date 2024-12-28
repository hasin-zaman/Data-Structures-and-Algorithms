/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    const tails = []
    for(const num of nums) {
        let l = 0, r = tails.length
        while(l <= r) {
            const mid = Math.floor((l+r)/2)
            if(tails[mid] < num) l = mid + 1
            else r = mid - 1
        }

        // replace or push to the end
        if(l < tails.length) tails[l] = num
        else tails.push(num)
    }

    return tails.length
};