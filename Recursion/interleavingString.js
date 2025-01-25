/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) return false
    
    const memo = new Map()
    function formInterleave(i, j) {
        if(s1[i] !== s3[i + j] && s2[j] !== s3[i + j]) return false
        if(i === s1.length && j === s2.length) return true

        const key = `${i}-${j}`
        if(memo.has(key)) return memo.get(key)

        let res = false
        if(i < s1.length && s1[i] === s3[i + j]) res = formInterleave(i + 1, j)
        if(!res && j < s2.length && s2[j] === s3[i + j]) res = formInterleave(i, j + 1)

        memo.set(key, res)
        return res
    }

    return formInterleave(0, 0)
};