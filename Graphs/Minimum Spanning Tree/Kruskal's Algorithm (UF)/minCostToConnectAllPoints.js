class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i)
        this.rank = Array(n).fill(0)
    }

    find(x) {
        if(x!=this.parent[x]) this.parent[x] = this.find(this.parent[x])
        return this.parent[x]
    }

    union(x, y) {
        const rootX = this.find(x)
        const rootY = this.find(y)
        if(rootX === rootY) return false

        if(this.rank[rootY] > this.rank[rootX]) this.parent[rootX] = rootY
        else if(this.rank[rootY] < this.rank[rootX]) this.parent[rootY] = rootX
        else {
            this.parent[rootX] = rootY
            this.rank[rootY]++
        }
        return true
    }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length
    
    const edges = []
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            const distance = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
            edges.push([distance, i, j])
        }
    }

    edges.sort((a, b) => a[0]-b[0])

    const uf = new UnionFind(n)
    let edgesUsed = 0
    let cost = 0
    for(const [distance, i, j] of edges) {
        if(uf.union(i, j)) {
            cost += distance
            edgesUsed++
        }

        if(edgesUsed === n-1) break
    }

    return cost
};