/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)

    let res = []
    for(let i=0; i<nums.length-2; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue

        let l = i + 1
        let r = nums.length - 1
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if(sum === 0 && (res)) {
                res.push([nums[i], nums[l], nums[r]])
                l++
                r--

                while(l < r && nums[l] === nums[l-1]) l++
                while(l < r && nums[r] === nums[r+1]) r--
            }
            else if(sum < 0) l++
            else r--
        }
    }

    return res
};