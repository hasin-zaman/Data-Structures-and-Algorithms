/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let parent = Array.from({length: edges.length+1}, (_, i) => i)
    let rank = new Array(edges.length).fill(0)

    // Find function with path compression
    function find(x) {
        if(parent[x]!=x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    // Union function with union by rank
    function union(x, y) {
        const rootX = find(x)
        const rootY = find(y)

        if(rootX === rootY) return false //cycle detected

        if(rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX
        }
        else if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        }
        else {
            parent[rootY] = rootX
            rank[rootX]++
        }
        return true
    }

    for(const [u, v] of edges) {
        if(!union(u, v)) {
            return [u, v]
        }
    }

    return []
};