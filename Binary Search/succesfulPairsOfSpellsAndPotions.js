/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {

    potions.sort((a, b) => a - b)
    
    let res = []
    for(let i=0; i<spells.length; i++) {
        let l = 0
        let r = potions.length - 1
        while(l <= r) {
            let mid = Math.floor((l + r) / 2)
            let prod = spells[i] * potions[mid]
            if(prod < success) l = mid + 1
            else r = mid - 1
        }

        res.push(potions.length - l)
    }

    return res
};