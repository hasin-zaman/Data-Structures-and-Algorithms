class Trie {
    constructor() {
        this.root = [null, null]
    }

    insert(num) {
        let node = this.root
        for(let i=29; i>=0; i--) {
            const bit = (num >> i) & 1
            if(!node[bit]) node[bit] = [null, null]
            node = node[bit]
        }
    }

    getMaxXor(num) {
        let node = this.root
        let maxXor = 0
        for(let i=29; i>=0; i--) {
            const bit = (num >> i) & 1
            const oppositeBit = bit ^ 1
            if(node[oppositeBit]) {
                maxXor |= (1 << i)
                node = node[oppositeBit]
            }
            else node = node[bit]
        }
        return maxXor
    }
}

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function(nums, queries) {
    nums.sort((a, b) => a - b)
    queries = queries.map((query, i) => [...query, i]).sort((a, b) => a[1] - b[1])

    const trie = new Trie()
    const res = new Array(queries.length).fill(-1)
    let index = 0
    for(const [x, m, i] of queries) {
        while(index < nums.length && nums[index] <= m) {
            trie.insert(nums[index])
            index++
        }
        if(index > 0) res[i] = trie.getMaxXor(x)
    }

    return res
};