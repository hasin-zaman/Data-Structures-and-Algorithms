/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    
    const radiantQueue = []
    const direQueue = []

    for(let i=0; i<senate.length; i++) {
        if(senate[i] === 'R') radiantQueue.push(i)
        else direQueue.push(i)
    }

    const n = senate.length
    while(radiantQueue.length > 0 && direQueue.length > 0) {
        const radiantIndex = radiantQueue.shift()
        const direIndex = direQueue.shift()

        if(radiantIndex < direIndex) radiantQueue.push(radiantIndex + n)
        else direQueue.push(direIndex + n)
    }

    return radiantQueue.length > 0 ? 'Radiant' : 'Dire'
};