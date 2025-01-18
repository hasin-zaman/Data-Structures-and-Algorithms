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
var widthOfBinaryTree = function(root) {
    
    let width = 0
    const queue = [[root, 0]]
    while(queue.length) {
        const n = queue.length
        const levelStartIndex = queue[0][1]
        for(let i=0; i<n; i++) {
            const [node, index] = queue.shift()
            const normalizedIndex = index - levelStartIndex
            if(node.left) queue.push([node.left, 2 * normalizedIndex])
            if(node.right) queue.push([node.right, 2 * normalizedIndex + 1])
        }

        width = Math.max(width, queue.length > 0 ? queue[queue.length-1][1] - queue[0][1] + 1 : n)
    }

    return width
};