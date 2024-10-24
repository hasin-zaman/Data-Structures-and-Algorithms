
var TimeMap = function() {
    this.store = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.store.has(key)) {
        this.store.set(key, [])
    }

    this.store.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.store.has(key)) {
        return "";
    }
    
    let res = ""
    let values = this.store.get(key)
    
    let l = 0
    let r = values.length - 1
    while(l<=r) {
        let m = Math.floor((l+r)/2)
        if(values[m][1] <= timestamp) {
            res = values[m][0]
            l = m + 1
        }
        else {
            r = m -1
        }
    }

    return res
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */