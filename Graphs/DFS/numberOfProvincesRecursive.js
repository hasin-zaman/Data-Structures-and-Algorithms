/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    const visited = new Set()
    let provinceCount = 0

    function dfs(i) {
        visited.add(i)

        for(let j=0; j<isConnected.length; j++) {
            if(isConnected[i][j]==1 && !visited.has(j)) {
                visited.add(j)
                dfs(j)
            }
        }
    }

    for(let i=0; i<isConnected.length; i++) {
        if(!visited.has(i)) {
            dfs(i)
            provinceCount++
        }   
    }
    
    return provinceCount
};