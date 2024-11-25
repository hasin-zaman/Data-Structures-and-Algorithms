/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
    const wordSet = new Set(wordList)

    if(!wordSet.has(endWord)) return 0

    const wordQueue = [beginWord]

    let output = 1
    while (wordQueue.length > 0) {
        let size = wordQueue.length
        output++

        while (size-- > 0) {
            const currWord = wordQueue.shift()

            for(let i=0; i<currWord.length; i++) {
                for(let j=0; j<26; j++) {
                    const temp = currWord.slice(0, i) + String.fromCharCode(97+j) + currWord.slice(i+1)

                    if (temp==endWord) return output

                    if(wordSet.has(temp)) {
                        wordQueue.push(temp)
                        wordSet.delete(temp)
                    }
                }
            }
        }
    }

    return 0
};