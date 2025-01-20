/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    
    const cols = new Map()
    let minCol = 0, maxCol = 0
    const queue = [[root, 0, 0]]
    while(queue.length > 0) {
        const [node, row, col] = queue.shift()

        if(!cols.has(col)) cols.set(col, [])
        cols.get(col).push([node.val, row])

        minCol = Math.min(minCol, col)
        maxCol = Math.max(maxCol, col)

        if(node.left) queue.push([node.left, row + 1, col - 1])
        if(node.right) queue.push([node.right, row + 1, col + 1])
    }

    let res = []
    for(let i=minCol; i<=maxCol; i++) {
        const col = cols.get(i).sort((a, b) => a[1] - b[1] || a[0] - b[0])
        res.push(col.map(a => a[0]))
    }

    return res
};