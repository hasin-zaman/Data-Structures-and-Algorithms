/**
 * @param {number[]} parent
 */
var LockingTree = function(parent) {
    this.parent = parent
    this.locked = new Array(parent.length).fill(null)
    this.child = new Map()
    for(let i=0; i<parent.length; i++) {
        this.child.set(i, [])
    }

    for(let i=1; i<parent.length; i++) {
        this.child.get(parent[i]).push(i)
    }
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function(num, user) {
    if(this.locked[num]) {
        return false
    }

    this.locked[num] = user
    return true
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function(num, user) {
    if(this.locked[num]!=user) {
        return false
    }

    this.locked[num] = null
    return true
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function(num, user) {
    let i = num
    while(i != -1) {
        if(this.locked[i]) {
            return false
        }
        i = this.parent[i]
    }

    let lockedCount = 0
    let queue = [num]
    while(queue.length>0) {
        let n = queue.shift()
        if(this.locked[n]) {
            this.locked[n] = null
            lockedCount++
        }
        queue.push(...this.child)
    }

    if(lockedCount > 0) {
        this.locked[num] = user
    }

    return lockedCount > 0
};

/** 
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */