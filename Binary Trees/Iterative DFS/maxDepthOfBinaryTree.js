// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// maxDepth function
var maxDepth = function(root) {
    let res = 0
    let stack = [[root, 1]]
    while(stack.length>0) {
        let [node, depth] = stack.pop()

        if(node) {
            res = Math.max(res, depth)
            stack.push([node.left, depth+1])
            stack.push([node.right, depth+1])
        }
    }

    return res
};

// Test cases
const testCases = [
    {
        root: null,  // Empty tree
        expected: 0
    },
    {
        root: new TreeNode(1),  // Single node tree
        expected: 1
    },
    {
        // Full binary tree of depth 3
        root: new TreeNode(1, 
                new TreeNode(2, 
                    new TreeNode(4), 
                    new TreeNode(5)
                ), 
                new TreeNode(3)
        ),
        expected: 3
    },
    {
        // Unbalanced tree (left-heavy)
        root: new TreeNode(1, 
                new TreeNode(2, 
                    new TreeNode(3, 
                        new TreeNode(4)
                    )
                )
        ),
        expected: 4
    },
    {
        // Unbalanced tree (right-heavy)
        root: new TreeNode(1, 
                null, 
                new TreeNode(2, 
                    null, 
                    new TreeNode(3, 
                        null, 
                        new TreeNode(4)
                    )
                )
        ),
        expected: 4
    }
];

// Running the test cases
testCases.forEach((test, index) => {
    const result = maxDepth(test.root);
    console.log(`Test case ${index + 1}: Expected ${test.expected}, Got ${result}`);
});