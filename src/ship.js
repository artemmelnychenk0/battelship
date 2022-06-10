const Ship = function (length, name) {
    const shipArray = Array(length).fill(null)
    const shipLength = shipArray.length

    let shots = 0
    let underWater = false

    function hit() {
        shots++;
        return 'X'
    }

    function recordShots() {
        return shots
    }

    function sunk() {
        if (shipLength == shots) {
            underWater = true
            return underWater
        }
    }

    function getName() {
        return name
    }
    return { shipArray, hit, sunk, shipLength, getName, shots, recordShots, underWater }

}
export default Ship

// const Ship = function (length) {
//     const shipLength = new Array(length)


//     function hit() {
//         const mark = 'X';
//         shipLength.splice(0, 1, mark)
//     }
//     function sunk() {
//         //if whole array includes X
//         let isSunk = true
//     }
//     return { id, length, isHit, isSunk, hit, sunk }

// }