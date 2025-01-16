/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort()

    let res = []
    let search = ''
    for(let i=0; i<searchWord.length; i++) {
        search += searchWord[i]
        let l = 0
        let r = products.length - 1
        while(l < r) {
            let mid = Math.floor((l + r) / 2)
            if(search > products[mid]) l = mid + 1
            else r = mid - 1
        }

        let suggestions = []
        for(let j=l; j<products.length && suggestions.length<3; j++) {
            if(products[j].startsWith(search)) suggestions.push(products[j])
        }

        res.push(suggestions)
    }

    return res
};