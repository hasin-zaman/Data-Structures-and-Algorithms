/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    
    let chars = new Map()
    // Step 1: Find the first and last occurrences of each character
    for(let i=0; i<s.length; i++) {
        if(!chars.has(s[i])) chars.set(s[i], [i, i])
        else chars.get(s[i])[1] = i
    }

    // Step 2: Expand the ranges
    for(const [char, range] of chars) {
        let [start, end] = range
        let j = start + 1
        while(j < end) {
            start = Math.min(start, chars.get(s[j])[0])
            end = Math.max(end, chars.get(s[j])[1])
            j++
        }
        chars.set(char, [start, end])
    }

    // Step 3: Sort ranges by ending index
    chars = [...chars.values()].sort((a, b) => a[1] - b[1])

    // Step 4: Greedy selection of non-overlapping substrings
    let res = [], prevEnd = -1
    for(const [start, end] of chars) {
        if(start > prevEnd) {
            res.push(s.slice(start, end + 1))
            prevEnd = end
        }
    }

    return res
};