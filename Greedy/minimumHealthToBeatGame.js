/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
    
    let total = damage.reduce((sum, num) => sum + num, 0)
    let max = Math.max(...damage)
    let protection = armor > max ? max : armor

    return total - protection + 1
};