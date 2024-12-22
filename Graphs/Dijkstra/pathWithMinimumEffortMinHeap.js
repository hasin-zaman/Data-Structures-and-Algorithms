class MinHeap {
    constructor() {
        this.heap = []
    }

    push([l, r, cost]) {
        this.heap.push([l, r, cost])
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1
        while(index>0) {
            let parentIndex = Math.floor((index-1)/2)
            if(this.heap[parentIndex][2]<=this.heap[index][2]) break
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex
        }
    }

    pop() {
        if(this.heap.length===1) return this.heap.pop()

        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return top
    }

    bubbleDown() {
        let index = 0
        const length = this.heap.length
        while(true) {
            let leftIndex = 2 * index + 1
            let rightIndex = 2 * index + 2
            let smallest = index

            if(leftIndex<length && this.heap[leftIndex][2]<this.heap[smallest][2]) {
                smallest = leftIndex
            }
            if(rightIndex<length && this.heap[rightIndex][2]<this.heap[smallest][2]) {
                smallest = rightIndex
            }
            if(smallest===index) break
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            index = smallest
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    
    const rows = heights.length
    const cols = heights[0].length

    let effort = Array.from({length: rows}, () => Array(cols).fill(Infinity))
    effort[0][0] = 0
    
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const pq = new MinHeap()
    pq.push([0, 0, 0])
    while(!pq.isEmpty()) {
        const [l, r, currentEffort] = pq.pop()

        if(l==(rows-1) && r==(cols-1)) return currentEffort

        for(let [dx, dy] of directions) {
            const newL = l + dx
            const newR = r + dy

            if(newL<0 || newR<0 || newL==rows || newR==cols) continue

            const newEffort = Math.max(currentEffort, Math.abs(heights[newL][newR] - heights[l][r]))

            if(newEffort<effort[newL][newR]) {
                effort[newL][newR] = newEffort
                pq.push([newL, newR, newEffort])
            }
        }
    }
};