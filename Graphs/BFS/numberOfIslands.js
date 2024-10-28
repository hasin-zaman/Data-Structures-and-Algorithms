/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) {
        return 0;
    }

    let rows = grid.length;
    let cols = grid[0].length;

    let visited = new Set();
    let islands = 0;

    function bfs(r, c) {
        let queue = [];
        visited.add(r + "," + c);

        queue.push([r, c]);

        while (queue.length > 0) {
            let [row, col] = queue.shift();
            let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for (let [dr, dc] of directions) {
                let newRow = dr + row;
                let newCol = dc + col;
                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] === "1" &&
                    !visited.has(newRow + "," + newCol)
                ) {
                    queue.push([newRow, newCol]);
                    visited.add(newRow + "," + newCol);
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && !visited.has(r + "," + c)) {
                bfs(r, c);
                islands++;
            }
        }
    }

    return islands;
};