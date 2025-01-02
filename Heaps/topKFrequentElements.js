class MinHeap {
    constructor() {
        this.heap = [];
    }

    enqueue([num, freq]) {
        this.heap.push([num, freq]);
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
            if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
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
            if (left < length && this.heap[left][1] < this.heap[smallest][1]) smallest = left;
            if (right < length && this.heap[right][1] < this.heap[smallest][1]) smallest = right;
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map()
    for(const num of nums) {
        freqMap.set(num, 1 + (freqMap.get(num) || 0))
    }

    const heap = new MinHeap()
    for(const [num, freq] of freqMap) {
        heap.enqueue([num, freq])
        if(heap.size() > k) heap.dequeue()
    }

    let res = []
    while(heap.size() > 0) res.push(heap.dequeue()[0])

    return res
};