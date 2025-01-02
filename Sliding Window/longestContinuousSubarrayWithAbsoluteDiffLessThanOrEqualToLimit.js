/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let maxDeque = []
    let minDeque = []
    let l = 0
    let maxLength = 0

    for(let r=0; r<nums.length; r++) {
        while(maxDeque.length && nums[maxDeque[maxDeque.length - 1]] < nums[r]) {
            maxDeque.pop();
        }
        maxDeque.push(r);

        while(minDeque.length && nums[minDeque[minDeque.length - 1]] > nums[r]) {
            minDeque.pop();
        }
        minDeque.push(r);

        while(Math.abs(nums[maxDeque[0]] - nums[minDeque[0]]) > limit) {
            if (maxDeque[0] === l) maxDeque.shift();
            if (minDeque[0] === l) minDeque.shift();
            l++;
        }

        maxLength = Math.max(maxLength, r - l + 1)
    }

    return maxLength
};