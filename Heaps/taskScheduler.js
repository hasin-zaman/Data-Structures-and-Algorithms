class MaxHeap {
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
            if(this.heap[parent] >= this.heap[index]) break
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
        }
    }

    bubbleDown() {
        let index = 0
        while(true) {
            let largest = index
            let l = 2 * index + 1
            let r = 2 * index + 2
            if(l < this.heap.length && this.heap[l] > this.heap[largest]) largest = l
            if(r < this.heap.length && this.heap[r] > this.heap[largest]) largest = r
            if(largest === index) break
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]
            index = largest
        }
    }

    isEmpty() {
        return this.heap.length === 0
    }
}

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    
    const freq = new Map()
    for(const task of tasks) {
        freq.set(task, 1 + (freq.get(task) || 0))
    }

    const heap = new MaxHeap()
    for(const [key, value] of freq) {
        heap.enqueue(value)
    }

    let time = 0
    let queue = []

    while(!heap.isEmpty() || queue.length > 0) {
        time++

        if(!heap.isEmpty()) {
            let count = heap.dequeue() - 1
            if(count > 0) queue.push([count, time + n])
        }

        if(queue.length > 0 && queue[0][1] === time) {
            heap.enqueue(queue.shift()[0])
        }
    }

    return time
};