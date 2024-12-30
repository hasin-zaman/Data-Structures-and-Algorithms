/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n === 0) return []

    function generateTreesInRange(start, end) {
        if(start > end) return [null]

        const allTrees = []
        for(let i=start; i<=end; i++) {
            const leftTrees = generateTreesInRange(start, i-1)
            const rightTrees = generateTreesInRange(i+1, end)

            for(const left of leftTrees) {
                for(const right of rightTrees) {
                    const root = new TreeNode(i)
                    root.left = left
                    root.right = right
                    allTrees.push(root)
                }
            }
        }

        return allTrees
    }

    return generateTreesInRange(1, n)
};