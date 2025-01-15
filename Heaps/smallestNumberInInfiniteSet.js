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

    isEmpty() {
        return this.heap.length === 0
    }

    top() {
        return this.heap[0]
    }

}

var SmallestInfiniteSet = function() {
    this.minHeap = new MinHeap()
    this.minHeap.enqueue(1)
    this.numbers = new Set()
    this.numbers.add(1)
    this.nextSmallest = 2
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    const smallest = this.minHeap.dequeue()
    this.numbers.delete(smallest)
    if(this.minHeap.isEmpty()) {
        this.minHeap.enqueue(this.nextSmallest)
        this.numbers.add(this.nextSmallest)
        this.nextSmallest++
    }
    return smallest
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(!this.numbers.has(num) && num < this.nextSmallest) {
        this.minHeap.enqueue(num)
        this.numbers.add(num)
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */