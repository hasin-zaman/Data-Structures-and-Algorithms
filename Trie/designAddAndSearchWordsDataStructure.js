var TrieNode = function() {
    this.children = new Map()
    this.isEndOfWord = false
};

var WordDictionary = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root
    for(const char of word) {
        if(!node.children.has(char)) node.children.set(char, new TrieNode())
        node = node.children.get(char)
    }
    node.isEndOfWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs(j, root) {
        let node = root
        for(let i=j; i<word.length; i++) {
            if(word[i] === ".") {
                for(const [key, value] of node.children) {
                    if(dfs(i + 1, value)) return true
                }
                return false
            }
            else {
                if(!node.children.has(word[i])) return false
                node = node.children.get(word[i])
            }
        }
        return node.isEndOfWord
    }

    return dfs(0, this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */