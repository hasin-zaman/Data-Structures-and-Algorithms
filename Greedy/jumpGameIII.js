/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    
    const visited = new Set()
    let stack = [start]
    while(stack.length > 0) {
        const index = stack.pop()
        if(arr[index] === 0) return true

        visited.add(index)

        if(index + arr[index] < arr.length && !visited.has(index + arr[index])) {
            stack.push(index + arr[index])
        }

        if(index - arr[index] >= 0 && !visited.has(index - arr[index])) {
            stack.push(index - arr[index])
        }
    }

    return false
};