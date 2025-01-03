/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let l = 0
    let r = 0
    while(r < chars.length) {
        let count = 0
        let char = chars[r]
        while(r < chars.length && chars[r] === char) {
            count++
            r++
        }
        
        chars[l++] = char
        if(count > 1) {
            for(const digit of count.toString()) {
                chars[l++] = digit
            }
        }
    }

    return l
};