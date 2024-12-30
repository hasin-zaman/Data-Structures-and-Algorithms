class MinHeap {
    constructor() {
        this.heap = []
    }

    enqueue([time, node]) {
        this.heap.push([time, node])
        this.bubbleUp()
    }

    dequeue() {
        if(this.heap.length === 1) return this.heap.pop()
        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return root
    }

    isEmpty() {
        return this.heap.length === 0
    }

    bubbleUp() {
        let index = this.heap.length - 1
        while(index > 0) {
            const parent = Math.floor((index-1)/2)
            if(this.heap[index][0] >= this.heap[parent][0]) break
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
        }
    }

    bubbleDown() {
        let index = 0
        while(true) {
            let smallest = index
            let left = 2 * index + 1
            let right = 2 * index + 2
            if(left<this.heap.length && this.heap[left][0]<this.heap[smallest][0]) smallest = left
            if(right<this.heap.length && this.heap[right][0]<this.heap[smallest][0]) smallest = right
            if(smallest === index) break
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]]
            index = smallest
        }
    }
}
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    const MOD = Math.pow(10, 9) + 7
    
    const graph = new Map()
    for(const [u, v, time] of roads) {
        if(!graph.has(u)) graph.set(u, [])
        if(!graph.has(v)) graph.set(v, [])
        graph.get(u).push([v, time])
        graph.get(v).push([u, time])
    }
    
    const times = Array(n).fill(Infinity)
    const counts = Array(n).fill(0)
    times[0] = 0
    counts[0] = 1

    const heap = new MinHeap()
    heap.enqueue([0, 0])
    while(!heap.isEmpty()) {
        const [currTime, currNode] = heap.dequeue()

        for(const [neighbor, time] of (graph.get(currNode) || [])) {
            const newTime = currTime + time

            if(newTime < times[neighbor]) {
                times[neighbor] = newTime
                counts[neighbor] = counts[currNode]
                heap.enqueue([newTime, neighbor])
            }
            else if(newTime === times[neighbor]) {
                counts[neighbor] = (counts[neighbor] + counts[currNode]) % MOD
            }
        }
    }
    
    return counts[n-1]
};