function sumOfMaxOfSubarrays(arr) {
    const n = arr.length
    let left = Array(n).fill(-1)
    let right = Array(n).fill(n)
    const stack = []
    
    for(let i=0; i<n; i++) {
        while(stack.length > 0 && arr[stack[stack.length-1]] < arr[i]) {
            stack.pop()
        }
        
        if(stack.length > 0) left[i] = stack[stack.length - 1]
        stack.push(i)
    }
    
    stack.length = 0
    
    for(let i=n-1; i>=0; i--) {
        while(stack.length > 0 && arr[stack[stack.length-1]] <= arr[i]) {
            stack.pop()
        }
        
        if(stack.length > 0) right[i] = stack[stack.length - 1]
        stack.push(i)
    }
    console.log(left, right)
    
    let sum = 0
    for(let i=0; i<n; i++) {
        const l = i - left[i]
        const r = right[i] - i
        const totalSubarrays = l * r
        sum += arr[i] * totalSubarrays * (l + r) / 2
        console.log(i, l, r, totalSubarrays, sum)
    }
    
    return sum
}

// Example usage:
const arr = [4, 2, 1, 2];
console.log(sumOfMaxOfSubarrays(arr)); // output 59