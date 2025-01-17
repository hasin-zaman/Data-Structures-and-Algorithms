/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    // decreasing order means largest lexicographical arrangement
    // find pivot, num right before decreasing oder
    let pivot = -1
    for(let i=nums.length-2; i>=0; i--) {
        if(nums[i] < nums[i+1]) {
            pivot = i
            break
        }
    }

    if(pivot === -1) {
        // reset to first lexicographical arrangement
        nums.reverse()
    }
    else {
        // find min value in decreasing order larger than pivot
        let min = Infinity
        for(let i=nums.length-1; i>pivot; i--) {
            if(nums[i] > nums[pivot]) {
                min = i
                break
            }
        }
        
        // swap pivot and min of decreasing order
        [nums[pivot], nums[min]] = [nums[min], nums[pivot]]
        
        // reverse decreasing order to make it increasing instead and smallest arrangement
        let l = pivot + 1
        let r = nums.length - 1
        while(l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
            r--
        }
    }
};