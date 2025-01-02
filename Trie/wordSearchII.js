class TrieNode {
    constructor() {
        this.children = new Map()
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for(const char of word) {
            if(!node.children.has(char)) node.children.set(char, new TrieNode())
            node = node.children.get(char)
        }
        node.isEndOfWord = true
    }
}
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const m = board.length, n = board[0].length

    const trie = new Trie()
    for(const word of words) trie.insert(word)

    const res = new Set()
    function dfs(i, j, node, word) {
        if(i<0 || j<0 || i===m || j===n || board[i][j] === '#') return

        let char = board[i][j]
        if(!node.children.has(char)) return
        
        const nextNode = node.children.get(char)
        const newWord = word + char

        if(nextNode.isEndOfWord) res.add(newWord)

        board[i][j] = '#'
        dfs(i+1, j, nextNode, newWord)
        dfs(i-1, j, nextNode, newWord)
        dfs(i, j+1, nextNode, newWord)
        dfs(i, j-1, nextNode, newWord)
        board[i][j] = char
    }

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            dfs(i, j, trie.root, '')
        }
    }

    return Array.from(res)
};