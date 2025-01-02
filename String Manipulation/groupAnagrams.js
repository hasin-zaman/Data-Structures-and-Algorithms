/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let dicts = new Map()
    for(let i=0; i<strs.length; i++) {
        let dict = Array(26).fill(0)
        for(let j=0; j<strs[i].length; j++) {
            let index = strs[i].charCodeAt(j) - 'a'.charCodeAt(0)
            dict[index]++
        }

        let key = dict.join(',')

        if(!dicts.has(key)) {
            dicts.set(key, [])
        }
        
        dicts.get(key).push(strs[i])
    }

    return Array.from(dicts.values())
};