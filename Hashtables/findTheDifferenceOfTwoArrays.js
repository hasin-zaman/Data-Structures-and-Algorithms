/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    let res = [[], []]

    for(const num of set1) {
        if(!set2.has(num)) res[0].push(num)
    }

    for(const num of set2) {
        if(!set1.has(num)) res[1].push(num)
    }

    return res
};