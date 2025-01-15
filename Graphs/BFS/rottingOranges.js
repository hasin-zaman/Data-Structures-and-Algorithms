/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length
    const n = grid[0].length
    
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let queue = []
    let freshCount = 0

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === 2) queue.push([i, j])
            else if(grid[i][j] === 1) freshCount++
        }
    }

    let minutes = 0
    while(queue.length > 0) {
        const queueLength = queue.length
        let newRot = false
        for(let i=0; i<queueLength; i++) {
            const [j, k] = queue.shift()

            for(const [dx, dy] of directions) {
                const x = dx + j
                const y = dy + k
                if(x >=0 && y >= 0 && x < m && y < n && grid[x][y] === 1) {
                    grid[x][y] = 2
                    freshCount--
                    queue.push([x, y])
                    newRot = true
                }
            } 
        }
        if(newRot) minutes++
    }
    
    return freshCount > 0 ? -1 : minutes
};