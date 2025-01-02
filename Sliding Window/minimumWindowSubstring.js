/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let countT = new Map()
    let window = new Map()

    for(let char of t) {
        countT.set(char, 1 + (countT.get(char) || 0))
    }

    let countMatch = 0
    let minLength = Infinity
    let minSubstring = []
    let l = 0
    for(let r=0; r<s.length; r++) {
        window.set(s[r], 1 + (window.get(s[r]) || 0))

        if(window.get(s[r]) === countT.get(s[r])) countMatch++

        while(countMatch === countT.size) {
            if((r - l + 1) < minLength) {
                minSubstring = [l, r]
                minLength = r - l + 1
            }

            window.set(s[l], window.get(s[l]) - 1)
            if(window.get(s[l]) < countT.get(s[l])) countMatch--
            l++
        }
    }

    return s.slice(minSubstring[0], minSubstring[1] + 1)
};