/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let word = s.split('')
    let l = 0
    let r = s.length - 1
    const vowels = 'aeiouAEIOU'

    while(l < r) {
        while(l < r && !vowels.includes(word[l])) {
            l++
        }

        while(l < r && !vowels.includes(word[r])) {
            r--
        }

        [word[l], word[r]] = [word[r], word[l]]
        l++
        r--
    }

    return word.join('')
};