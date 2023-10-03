function knightMoves(start, end) {
    
    const moves = [ 
        [ 1, 2 ], [ 2, 1 ],
        [ 2,-1 ], [ 1,-2 ],
        [ -1,-2 ], [ -2,-1 ],
        [ -2,1 ], [ -1,2 ]];

    const createGrid = (dim) => {

        let grid = [];

        for (let n = 0; n <= dim; n++) {
            for (let m = 0; m <= dim; m++) {
                grid.push([n,m])
            }
        }
        return grid
    }

    // initialize chessboard
    const chessBoard = createGrid(8);

    // initialize start coordinates
    let [startX, startY] = start;
    let [endX, endY] = start;
    
    // initialize queue
    let queue = [{x: startX, y: startY, path: [start]}];

}

module.exports = knightMoves;



// Convert start and end coordinates to grid indices

// Initialize the queue for BFS

// Mark the start position as visited

// Perform BFS

  // Check if we have reached the destination

  // Try all possible moves

    // Check if the new position is within the chessboard and not visited
    
      // Mark the new position as visited