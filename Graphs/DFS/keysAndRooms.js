/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
    const visited = new Set()
    visited.add(0)
    let stack = [...rooms[0]]
    while(stack.length > 0) {
        const room = stack.pop()
        if(visited.has(room)) continue
        visited.add(room)

        for(let i=0; i<rooms[room].length; i++) {
            if(!visited.has(rooms[room][i])) stack.push(rooms[room][i])
        }
    }

    return rooms.length === visited.size
};