/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let n = grid.length
    if(grid[0][0]==1 || grid[n-1][n-1]==1) {
        return -1
    }

    let queue = [[0, 0]]
    let length = 1
    while(queue.length>0) {
        const size = queue.length
        for(let i=0; i<size; i++) {
            const [l, r] = queue.shift()
            if((l == n-1) && (r == n-1)) {
                return length
            }

            addToQueue(l-1, r-1)
            addToQueue(l-1, r)
            addToQueue(l-1, r+1)
            addToQueue(l, r-1)
            addToQueue(l, r+1)
            addToQueue(l+1, r-1)
            addToQueue(l+1, r)
            addToQueue(l+1, r+1)
        }
        length++
    }

    function addToQueue(l, r) {
        if(l<0 || r<0 || l==n || r==n || grid[l][r]==1) return

        queue.push([l, r])
        grid[l][r] = 1
    }

    return -1
};