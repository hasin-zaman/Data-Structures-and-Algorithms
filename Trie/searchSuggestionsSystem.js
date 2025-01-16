class TrieNode {
    constructor() {
        this.root = new Map()
        this.suggestions = []
    }

    insert(word) {
        let node = this.root
        for(const char of word) {
            if(!node.has(char)) node.set(char, new Map())
            node = node.get(char)

            if(!node.suggestions) node.suggestions = []
            if(node.suggestions.length < 3) node.suggestions.push(word)
        }
    }

    search(prefix) {
        let node = this.root
        for(const char of prefix) {
            if(!node.has(char)) return []
            node = node.get(char)
        }
        return node.suggestions
    }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    
    const trie = new TrieNode()

    products.sort()
    for(const product of products) trie.insert(product)

    let res = []
    let prefix = ''
    for(let i=0; i<searchWord.length; i++) {
        prefix += searchWord[i]
        res.push(trie.search(prefix))
    }

    return res
};