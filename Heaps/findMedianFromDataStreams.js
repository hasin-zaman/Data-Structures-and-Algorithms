var MedianFinder = function() {
    this.maxHeap = new MaxHeap()
    this.minHeap = new MinHeap()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) this.maxHeap.enqueue(num)
    else this.minHeap.enqueue(num)

    // keep both trees balance at all times
    if((this.minHeap.size() + 1) < this.maxHeap.size()) {
        this.minHeap.enqueue(this.maxHeap.dequeue())
    }
    else if(this.maxHeap.size() < this.minHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.peek()
    }
    
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(num) {
        this.heap.push(num);
        this.bubbleUp();
    }

    dequeue() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(num) {
        this.heap.push(num);
        this.bubbleUp();
    }

    dequeue() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let largest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            if (left < length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < length && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}