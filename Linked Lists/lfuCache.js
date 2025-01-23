class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity
    this.keys = new Map()
    this.freq = new Map()
    this.minFreqList = 1
};

LFUCache.prototype.initializeFreqList = function(frequency) {
    const head = new Node()
    const tail = new Node()
    head.next = tail
    tail.prev = head
    this.freq.set(frequency, [head, tail, 0])
};

LFUCache.prototype.addToList = function(frequency, node) {
    if(!this.freq.has(frequency)) this.initializeFreqList(frequency)

    const [head, tail, count] = this.freq.get(frequency)
    node.prev = tail.prev
    node.next = tail
    tail.prev.next = node
    tail.prev = node
    this.freq.set(frequency, [head, tail, count + 1])

    if(frequency === 1) this.minFreqList = 1
};

LFUCache.prototype.deleteFromList = function(frequency, node) {
    const [head, tail, count] = this.freq.get(frequency)
    if(!node) node = head.next
        
    this.keys.delete(node.key)
    node.prev.next = node.next
    node.next.prev = node.prev
    this.freq.set(frequency, [head, tail, count - 1])
    
    if(frequency === this.minFreqList && count - 1 === 0) this.minFreqList++
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(!this.keys.has(key)) return -1

    let [node, frequency] = this.keys.get(key)

    this.deleteFromList(frequency, node)
    this.addToList(frequency + 1, node)

    this.keys.set(key, [node, frequency + 1])
    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.keys.has(key)) {
        let [node, frequency] = this.keys.get(key)
        this.deleteFromList(frequency, node)
        
        node.val = value
        this.addToList(frequency + 1, node)
        this.keys.set(key, [node, frequency + 1])
    }
    else {
        if(this.keys.size === this.capacity) {
            this.deleteFromList(this.minFreqList, null)
        }

        const newNode = new Node(key, value)
        this.addToList(1, newNode)
        this.keys.set(key, [newNode, 1])
    }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */