/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
    const res = []
    function backtrack(start, partitions) {
        if(start === s.length) {
            res.push([...partitions])
            return
        }

        for(let i=start; i<=s.length; i++) {
            const slice = s.slice(start, i+1)
            if(!isPalindrome(slice)) continue
            partitions.push(slice)
            backtrack(i+1, partitions)
            partitions.pop()
        }
    }

    backtrack(0, [])
    return res
};

function isPalindrome(s) {
    return s === s.split('').reverse().join('')
}