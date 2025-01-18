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
var zigzagLevelOrder = function(root) {
    if(!root) return []

    let levelCount = 0
    const res = []
    const queue = [root]
    while(queue.length > 0) {
        const n = queue.length
        const level = []
        for(let i=0; i<n; i++) {
            const node = queue.shift()
            level.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        if(levelCount % 2 === 0) res.push(level)
        else res.push(level.reverse())
        levelCount++
    }

    return res
};