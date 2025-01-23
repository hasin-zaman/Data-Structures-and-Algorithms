/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    if(nums.length === 0) return 0

    function mergeSort(start, end) {
        if(start >= end) return 0

        let mid = Math.floor((start + end) / 2)
        let count = mergeSort(start, mid) + mergeSort(mid + 1, end)

        // count reverse pairs
        let j = mid + 1
        for(let i=start; i<=mid; i++) {
            while(j <= end && nums[i] > 2 * nums[j]) j++

            count += j - (mid + 1)
        }

        // merge sorted halves
        merge(start, mid, end)

        return count
    }

    function merge(start, mid, end) {
        let left = nums.slice(start, mid + 1)
        let right = nums.slice(mid + 1, end + 1)

        let i = 0, j = 0, k = start
        while(i < left.length && j < right.length) {
            if(left[i] <= right[j]) nums[k++] = left[i++]
            else nums[k++] = right[j++]
        }

        while(i < left.length) nums[k++] = left[i++]
        while(j < right.length) nums[k++] = right[j++]
    }

    return mergeSort(0, nums.length - 1)
};