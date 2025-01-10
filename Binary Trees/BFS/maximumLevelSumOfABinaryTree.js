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
 * @return {number}
 */
var maxLevelSum = function(root) {

    let level =  0
    let max = [-Infinity, 0]
    const queue = [root]
    while(queue.length > 0) {
        const n = queue.length
        level++
        let sum = 0
        for(let i=0; i<n; i++) {
            const node = queue.shift()
            sum += node.val
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        if(sum > max[0]) max = [sum, level]
    }
    
    return max[1]
};