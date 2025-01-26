class MaxHeap {
    constructor() {
        this.heap = []
    }

    enqueue([char, freq]) {
        this.heap.push([char, freq])
        this.bubbleUp()
    }

    dequeue() {
        if(this.heap.length === 0) return ['', 1]
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
            if(this.heap[parent][1] >= this.heap[index][1]) break
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
            if(l < this.heap.length && this.heap[l][1] > this.heap[largest][1]) largest = l
            if(r < this.heap.length && this.heap[r][1] > this.heap[largest][1]) largest = r
            if(largest === index) break
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]
            index = largest
        }
    }

    size() {
        return this.heap.length
    }
}

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    
    const map = new Map()
    for(const char of s) {
        map.set(char, 1 + (map.get(char) || 0))
    }

    const heap = new MaxHeap()
    for(const [char, count] of map) {
        heap.enqueue([char, count])
    }

    let res = ''
    while(heap.size() > 1) {
        let max = heap.dequeue()
        let secondMax = heap.dequeue() 

        res += max[0] + secondMax[0]
        
        if(max[1] > 1) heap.enqueue([max[0], max[1] - 1])
        if(secondMax[1] > 1) heap.enqueue([secondMax[0], secondMax[1] - 1])
    }

    let [lastChar, lastFreq] = heap.dequeue()
    if(res[res.length - 1] === lastChar || lastFreq > 1) return ''
    if(lastFreq === 1) res += lastChar

    return res
};