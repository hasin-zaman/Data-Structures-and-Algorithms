/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const array1 = version1.split('.').map((a) => parseInt(a))
    const array2 = version2.split('.').map((a) => parseInt(a))

    for(let i=0; i<Math.max(array1.length, array2.length); i++) {
        let v1 = array1[i]
        let v2 = array2[i]
        if(v1 === undefined) v1 = 0
        if(v2 === undefined) v2 = 0

        if(v1 > v2) return 1
        if(v2 > v1) return -1
    }
    return 0
};