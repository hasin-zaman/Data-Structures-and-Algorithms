class MaxHeap {
    constructor() {
        this.heap = []
    }

    push([index, prob]) {
        this.heap.push([index, prob])
        this.bubbleUp()
    }

    pop() {
        if(this.heap.length===1) return this.heap.pop()

        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return top
    }

    bubbleUp() {
        let index = this.heap.length - 1
        while(index>0) {
            let parentIndex = Math.floor((index-1)/2)
            if(this.heap[parentIndex][1]>=this.heap[index][1]) break
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex
        }
    }

    bubbleDown() {
        let index = 0
        const length = this.heap.length
        while(true) {
            let leftIndex = 2 * index + 1
            let rightIndex = 2 * index + 2
            let largest = index

            if(leftIndex<length && this.heap[leftIndex][1]>this.heap[largest][1]) {
                largest = leftIndex
            }
            if(rightIndex<length && this.heap[rightIndex][1]>this.heap[largest][1]) {
                largest = rightIndex
            }
            if(largest===index) break
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
            index = largest
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {

    let graph = new Map()
    for(let i=0; i<edges.length; i++) {
        if(!graph.has(edges[i][0])) graph.set(edges[i][0], [])
        if(!graph.has(edges[i][1])) graph.set(edges[i][1], [])
        graph.get(edges[i][0]).push([edges[i][1], succProb[i]])
        graph.get(edges[i][1]).push([edges[i][0], succProb[i]])
    }
    
    let visited = new Set()
    let pq = new MaxHeap()
    pq.push([start_node, 1])
    while(!pq.isEmpty()) {
        const [node, currentProb] = pq.pop()

        if(visited.has(node)) continue
        visited.add(node)

        if(node == end_node) return currentProb

        for(const [neighbor, prob] of (graph.get(node) || [])) {
            if(!visited.has(neighbor)) {
                pq.push([neighbor, prob * currentProb])
            }
        }
    }

    return 0
};