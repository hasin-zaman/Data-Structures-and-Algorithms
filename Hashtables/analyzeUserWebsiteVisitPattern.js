/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    
    const data = username.map((user, i) => [user, timestamp[i], website[i]])
    data.sort((a, b) => a[1] - b[1])

    const visits = new Map()
    for(const [user, time, site] of data) {
        if(!visits.has(user)) visits.set(user, [])
        visits.get(user).push(site)
    }

    const patterns = new Map()
    let maxCount = 0
    for(const sites of visits.values()) {
        if(sites.length < 3) continue

        const uniquePatterns = new Set()

        for(let i=0; i<sites.length; i++) {
            for(let j=i+1; j<sites.length; j++) {
                for(let k=j+1; k<sites.length; k++) {
                    const key = `${sites[i]},${sites[j]},${sites[k]}`
                    uniquePatterns.add(key)
                }
            }
        }

        for(const key of uniquePatterns) {
            patterns.set(key, 1 + (patterns.get(key) || 0))
            maxCount = Math.max(maxCount, patterns.get(key))
        }
    }

    const res = []
    for(const [key, value] of patterns) {
        if(value === maxCount) res.push(key)
    }

    res.sort()

    return res[0].split(',')
};