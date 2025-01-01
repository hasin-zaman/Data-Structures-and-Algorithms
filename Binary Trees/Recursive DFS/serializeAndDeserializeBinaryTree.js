/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let serialized = []
    function dfs(node) {
        if(!node) {
            serialized.push("null")
            return
        }

        serialized.push(node.val.toString())
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return serialized.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(",")
    let index = 0
    
    function buildTree() {
        if(nodes[index] === "null") {
            index++
            return null
        }

        const root = new TreeNode(parseInt(nodes[index]))
        index++
        root.left = buildTree()
        root.right = buildTree()

        return root
    }
    return buildTree()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */