/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length
    const n = maze[0].length
    
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const visited = new Set()
    visited.add(`${entrance[0]}-${entrance[1]}`)

    const queue = [[entrance[0], entrance[1], 0]]
    while(queue.length > 0) {
        const [i, j, steps] = queue.shift()
        if((i === 0 || j === 0 || i === m-1 || j === n-1) && !(i === entrance[0] && j === entrance[1])) return steps

        for(const [dx, dy] of directions) {
            const x = dx + i
            const y = dy + j
            const key = `${x}-${y}`
            if(x >= 0 && y >= 0 && x < m && y < n && maze[x][y] !== '+' && !visited.has(key)) {
                visited.add(key)
                queue.push([x, y, steps + 1])
            }
        }
    }

    return -1
};