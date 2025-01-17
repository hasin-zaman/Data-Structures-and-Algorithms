/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Moore's Voting Algorithm
    // majority element will only be found if it has at least n/2 + 1 occurences 
    // if there is majority element, it will always remain in lead even after encountering others

    let count = 0, candidate = -1
    for(const num of nums) {
        if(count === 0) candidate = num
        num === candidate ? count++ : count--
    }
    return candidate
};