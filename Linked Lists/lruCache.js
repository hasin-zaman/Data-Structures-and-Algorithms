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
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.keys = new Map()
    this.head = new Node(0, 0)
    this.tail = new Node(0, 0)
    this.head.next = this.tail //dummy head of doubly linked list
    this.tail.prev = this.head //dummy tail of doubly linked list
};

LRUCache.prototype.add = function(node) {
    // add node right after head
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
};

LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.keys.has(key)) {
        const node = this.keys.get(key)
        this.remove(node)
        this.add(node)
        return node.val
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.keys.has(key)) {
        this.remove(this.keys.get(key))
    }
    else if(this.keys.size === this.capacity) {
        const lru = this.tail.prev
        this.remove(lru)
        this.keys.delete(lru.key)
    }

    const node = new Node(key, value)
    this.add(node)
    this.keys.set(key, node)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */