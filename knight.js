function knightMoves(start, end) {
    
    const moves = [ 
        [ 1, 2 ], [ 2, 1 ],
        [ 2,-1 ], [ 1,-2 ],
        [ -1,-2 ], [ -2,-1 ],
        [ -2,1 ], [ -1,2 ]];

    const createGrid = (dim) => {

        let grid = [];

        for (let n = 0; n <= dim - 1; n++) {
            
            grid.push([])

            for (let m = 0; m <= dim - 1; m++) {
                grid[n].push(0)
            }
        }
        return grid
    }

    // check input
    if ( start[0] < 0 || start[0] > 7 ||
         start[1] < 0 || start[1] > 7 ) throw new Error("Invalid Start Coordinate")

    if ( end[0] < 0   || end [0] > 7  ||
         end[1] < 0   || end [1] > 7 ) throw new Error("Invalid End Coordinate")
         

    // initialize chessboard
    const chessBoard = createGrid(8);

    // initialize start coordinates
    let [startX, startY] = start;
    let [endX, endY] = end;
    
    // initialize queue
    let queue = [{x: startX, y: startY, path: [start]}];

    // Mark the start position as visited
    chessBoard[startX][startY] = 1

    // Perform BFS
    while (queue.length > 0) {

        const { x, y, path } = queue.shift()

        if (x == endX && y == endY) {
            return `=> It takes ${path.length - 1} moves from [${start}] to [${end}]:\n${path.map((coord) => `   [${coord}]`).join(`\n`)}`
        }

        for ([ xC, yC ] of moves) {
            const newX = x + xC;
            const newY = y + yC;

            if (    newX >= 0 &&
                    newX <= 7 &&
                    newY >= 0 &&
                    newY <= 7 &&
                    chessBoard[newX][newY] == 0
                ) {
                    chessBoard[newX][newY] = 1;
                    const newPath = [...path, [newX, newY]];
                    queue.push({ x: newX, y: newY, path: newPath })
                }
        }
    }

    return "no path found"

}

console.log(knightMoves([0,0], [7,7]))

module.exports = knightMoves;



// Convert start and end coordinates to grid indices

// Initialize the queue for BFS

// Mark the start position as visited

// Perform BFS

  // Check if we have reached the destination

  // Try all possible moves

    // Check if the new position is within the chessboard and not visited
    
      // Mark the new position as visited