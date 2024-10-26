/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let array1;
    let array2;
    if(nums1.length<=nums2.length) {
        array1 = nums1
        array2 = nums2
    } else {
        array1 = nums2
        array2 = nums1
    }

    let total = array1.length + array2.length
    let half = Math.floor(total/2)

    let l = 0
    let r = array1.length - 1
    while(true) {
        let m = Math.floor((l+r)/2)
        let m2 = half - m - 2

        let array1Left = m>=0 ? array1[m] : Number.NEGATIVE_INFINITY
        let array1Right = m+1<array1.length ? array1[m+1] : Number.POSITIVE_INFINITY
        let array2Left = m2>=0 ? array2[m2] : Number.NEGATIVE_INFINITY
        let array2Right = m2+1<array2.length ? array2[m2+1] : Number.POSITIVE_INFINITY

        if((array1Left<=array2Right) && (array2Left<=array1Right)) {
            if(total%2 == 1) {
                return Math.min(array1Right, array2Right)
            }
            return (Math.max(array1Left, array2Left)+Math.min(array1Right, array2Right))/2
        }
        else if(array1Left>array2Right) {
            r = m - 1 
        }
        else {
            l = m + 1
        }
    }
};