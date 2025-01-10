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
 * @return {number[]}
 */
var rightSideView = function(root) {

    let res = []
    let queue = [root]
    while(queue.length > 0) {
        const n = queue.length

        let rightSide = null
        for(let i=0; i<n; i++) {
            const node = queue.shift()
            if(node) {
                rightSide = node
                queue.push(node.left)
                queue.push(node.right)
            }
        }

        if(rightSide) res.push(rightSide.val)
    }

    return res
};