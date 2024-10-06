var TrieNode = function() {
    this.children = new Map();
    this.word = false;
};

var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;
    for (let c of word) {
        if (!curr.children.has(c)) {
            curr.children.set(c, new TrieNode());
        }
        curr = curr.children.get(c);
    }
    curr.word = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {

    const dfs = function(j, root) {
        let curr = root;
        for (let i = j; i < word.length; i++) {
            if (word[i] === ".") {
                for (let [key, value] of curr.children) {
                    if (dfs(i + 1, value)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!curr.children.has(word[i])) {
                    return false;
                }
                curr = curr.children.get(word[i]);
            }
        }
        return curr.word;
    };

    return dfs(0, this.root);
};


const testCases = [
    { addWords: ["cat", "bat", "rat"], searches: ["cat", "c.t", "b..", "ca", "dog"], expected: [true, true, true, false, false] },
    { addWords: ["apple", "orange"], searches: ["apple", "o...ge", "grape", "ap..e", "o..nge"], expected: [true, true, false, true, true] }
];


for (let i = 0; i < testCases.length; i++) {
    const wordDictionary = new WordDictionary();
    const { addWords, searches, expected } = testCases[i];

    addWords.forEach(word => wordDictionary.addWord(word));

    searches.forEach((searchWord, index) => {
        const result = wordDictionary.search(searchWord);
        console.log(`Test case ${i + 1}, Search for "${searchWord}": Expected ${expected[index]}, Got ${result}`);
    });
}