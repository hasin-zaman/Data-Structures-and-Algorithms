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

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    const leftHeap = new MinHeap(), rightHeap = new MinHeap()
    let remaining = []

    for(let i=0; i<costs.length; i++) {
        if(i < candidates) leftHeap.enqueue(costs[i])
        else if(i >= costs.length - candidates) rightHeap.enqueue(costs[i])
        else remaining.push(costs[i])
    }

    let cost = 0
    for(let i=0; i<k; i++) {
        if(!rightHeap.isEmpty() && (leftHeap.isEmpty() || rightHeap.top() < leftHeap.top())) {
            cost += rightHeap.dequeue()
            if(remaining.length > 0) rightHeap.enqueue(remaining.pop())
        }
        else {
            cost += leftHeap.dequeue()
            if(remaining.length > 0) leftHeap.enqueue(remaining.shift())
        }
    }

    return cost
};