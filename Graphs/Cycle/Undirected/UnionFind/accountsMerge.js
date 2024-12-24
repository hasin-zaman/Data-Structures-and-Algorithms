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
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const uf = new UnionFind(accounts.length)

    const emailToIndex = new Map()
    for(let i=0; i<accounts.length; i++) {
        for(let j=1; j<accounts[i].length; j++) {
            if(!emailToIndex.has(accounts[i][j])) {
                emailToIndex.set(accounts[i][j], i)
            }
            else {
                uf.union(i, emailToIndex.get(accounts[i][j]))
            }
        }
    }

    let parentToEmails = new Map()
    for(const [key, value] of emailToIndex) {
        const parent = uf.find(value)
        if(!parentToEmails.has(parent)) parentToEmails.set(parent, [])
        parentToEmails.get(parent).push(key)
    }

    let result = []
    for(const [key, value] of parentToEmails) {
        value.sort()
        result.push([accounts[key][0], ...value])
    }

    return result
};