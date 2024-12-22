class MinHeap {
    constructor() {
        this.heap = [];
    }

    push([node, dist]) {
        this.heap.push([node, dist]);
        this.bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
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
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let smallest = index;

            if (leftIndex < length && this.heap[leftIndex][1] < this.heap[smallest][1]) {
                smallest = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex][1] < this.heap[smallest][1]) {
                smallest = rightIndex;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    
    let graph = new Map()
    for(const [u, v, weight] of edges) {
        if(!graph.has(u)) graph.set(u, [])
        if(!graph.has(v)) graph.set(v, [])
        graph.get(u).push([v, weight])
        graph.get(v).push([u, weight])
    }

    function dijkstra(start) {
        let dist = new Array(n).fill(Infinity)
        dist[start] = 0
        let pq = new MinHeap()
        pq.push([start, 0])
        while(!pq.isEmpty()) {
            const [node, currentWeight] = pq.pop()

            if(currentWeight>dist[node]) continue

            for(const [neighbor, weight] of (graph.get(node) || [])) {
                const newDist = currentWeight + weight
                if(newDist<dist[neighbor]) {
                    dist[neighbor] = newDist
                    pq.push([neighbor, newDist])
                }
            }
        }

        return dist.filter((distance) => distance<=distanceThreshold).length - 1
    }

    let result = [n, -1] // min reachable cities, city index

    for(let i=0; i<n; i++) {
        let reachable = dijkstra(i)
        if(reachable<result[0] || (reachable==result[0] && i>result[1])) {
            result = [reachable, i]
        }
    }

    return result[1]
};