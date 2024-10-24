var findClosestElements = function(arr, k, x) {
    if (arr.length <= k) {
        return arr;
    }
    
    if (x <= arr[0]) {
        return arr.slice(0, k);
    }
    
    if (x >= arr[arr.length - 1]) {
        return arr.slice(arr.length - k, arr.length);
    }
    
    let closestTarget = binarySearch(arr, x);
    let l = closestTarget, r = closestTarget;
    
    while (r - l + 1 < k) {
        if (l === 0) {
            r++;
        } else if (r === arr.length - 1) {
            l--;
        } else if (Math.abs(arr[l - 1] - x) <= Math.abs(arr[r + 1] - x)) {
            l--;
        } else {
            r++;
        }
    }
    
    return arr.slice(l, r + 1);
};

function binarySearch(nums, x) {
    let l = 0; 
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === x) {
            return mid;
        } else if (nums[mid] > x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}