class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i)
        this.rank = new Array(n).fill(0)
    }

    find(x) {
        if(this.parent[x]!=x) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }

    union(x, y) {
        const rootX = this.find(x)
        const rootY = this.find(y)
        if(rootX === rootY) return false

        if(this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX
        }
        else if(this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY
        }
        else {
            this.parent[rootY] = rootX
            this.rank[rootX] ++
        }
        return true
    }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length
    
    const uf = new UnionFind(n)
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(isConnected[i][j]==1) {
                uf.union(i, j)
            }
        }
    }

    const provinces = new Set()
    for(let i=0; i<n; i++) {
        provinces.add(uf.find(i))
    }

    return provinces.size
};