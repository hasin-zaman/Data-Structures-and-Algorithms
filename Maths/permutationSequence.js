/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    // Step 1: Create a list of numbers from 1 to n
    const nums = Array.from({ length: n }, (_, i) => i + 1)

    // Step 2: Compute factorial values
    let factorial = [1]
    for(let i=1; i<n; i++) {
        factorial[i] = factorial[i - 1] * i
    }

    // Step 3: Convert k to 0-based index
    k--

    let res = ''
    for(let i=n; i>0; i--) {
        const index = Math.floor(k / factorial[i - 1])
        res += nums[index]

        // Step 4: Remove used number and update k
        nums.splice(index, 1)
        k %= factorial[i - 1]
    }

    return res
};