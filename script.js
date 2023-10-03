const knightMoves = require("./knight.js")

// Run $node script.js

console.log(knightMoves([0,0], [7,7]))
// => It takes 6 moves from [0,0] to [7,7]:
//    [0,0]
//    [1,2]
//    [2,4]
//    [3,6]
//    [5,7]
//    [6,5]
//    [7,7]

console.log(knightMoves([0,0], [2,1]))
// => It takes 1 moves from [0,0] to [2,1]:
//    [0,0]
//    [2,1]