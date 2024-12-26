/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    if(n === 1) return nums[0]
    if(n === 2) return Math.max(nums[0], nums[1])

    //excluding last house
    let firstPrev1 = Math.max(nums[0], nums[1]), firstPrev2 = nums[0]
    for(let i=2; i<n-1; i++) {
        const current = Math.max(nums[i] + firstPrev2, firstPrev1)
        firstPrev2 = firstPrev1
        firstPrev1 = current
    }

    //excluding first house
    let secondPrev1 = Math.max(nums[1], nums[2]), secondPrev2 = nums[1]
    for(let i=3; i<n; i++) {
        const current = Math.max(nums[i] + secondPrev2, secondPrev1)
        secondPrev2 = secondPrev1
        secondPrev1 = current
    }

    return Math.max(firstPrev1, firstPrev2, secondPrev1, secondPrev2)
};