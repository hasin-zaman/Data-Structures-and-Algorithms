/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let rows = heights.length;
    let cols = heights[0].length;
    let pac = new Set()
    let atl = new Set()

    function dfs(r, c, visited, prevHeight) {
        if(visited.has(`${r},${c}`) || r<0 || c<0 || r==rows || c==cols || heights[r][c]<prevHeight) {
            return
        } 

        visited.add(`${r},${c}`)
        dfs(r-1, c, visited, heights[r][c])
        dfs(r+1, c, visited, heights[r][c])
        dfs(r, c-1, visited, heights[r][c])
        dfs(r, c+1, visited, heights[r][c])
    }

    for(let i=0; i<cols; i++) {
        dfs(0, i, pac, heights[0][i])
        dfs(rows-1, i, atl, heights[rows-1][i])
    }

    for(let i=0; i<rows; i++) {
        dfs(i, 0, pac, heights[i][0])
        dfs(i, cols-1, atl, heights[i][cols-1])
    }

    let res = []
    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            if(pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
                res.push([r, c])
            }
        }
    }
    
    return res
};