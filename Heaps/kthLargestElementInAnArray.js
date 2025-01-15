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
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    const maxHeap = new MaxHeap()
    for(let i=0; i<nums.length; i++) maxHeap.enqueue(nums[i])
    for(let i=0; i<k-1; i++) maxHeap.dequeue()

    return maxHeap.dequeue()
};