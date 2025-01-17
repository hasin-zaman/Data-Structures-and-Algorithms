class MinHeap {
    constructor() {
        this.heap = []
    }

    enqueue(num) {
        this.heap.push(num)
        this.bubbleUp()
    }

    dequeue() {
        if(this.heap.length === 1) return this.heap.pop()
        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return top
    }

    bubbleUp() {
        let index = this.heap.length - 1
        while(index > 0) {
            let parent = Math.floor((index - 1) / 2)
            if(this.heap[parent] <= this.heap[index]) break
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
        }
    }

    bubbleDown() {
        let index = 0
        while(true) {
            let smallest = index
            let l = 2 * index + 1
            let r = 2 * index + 2
            if(l < this.heap.length && this.heap[l] < this.heap[smallest]) smallest = l
            if(r < this.heap.length && this.heap[r] < this.heap[smallest]) smallest = r
            if(smallest === index) break
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]]
            index = smallest
        }
    }

    size() {
        return this.heap.length
    }

    top() {
        return this.heap[0]
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.scores = new MinHeap()
    for(const num of nums) this.scores.enqueue(num)
    while(this.scores.size() > k) this.scores.dequeue() 
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.scores.size() < this.k) this.scores.enqueue(val)
    else if(val > this.scores.top()) {
        this.scores.enqueue(val)
        this.scores.dequeue()
    }
    return this.scores.top()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */