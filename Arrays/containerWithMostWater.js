/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    let l = 0
    let r = height.length-1
    while(l <= r) {
        const h = Math.min(height[l], height[r])
        const w = r - l
        const area = h * w
        maxArea = Math.max(maxArea, area)

        if(height[l] > height[r]) {
            r--
        }
        else {
            l++
        }
    }

    return maxArea
};