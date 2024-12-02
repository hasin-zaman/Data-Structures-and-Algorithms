/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {

    if(edges[1].includes(edges[0][0])) {
        return edges[0][0]
    }
    else {
        return edges[0][1]
    }
};