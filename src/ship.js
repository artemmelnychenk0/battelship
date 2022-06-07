const Ship = function (length) {
    const shipArray = Array(length)
    const shipLength = shipArray.length
    let underWater = false

    function hit(num) {
        const mark = 'X';
        shipArray[num] = mark;
        return shipArray
    }

    function sunk() {
        let underWater = shipArray.every(e => e = 'X')
        return underWater
    }
    return { shipArray, hit, sunk, underWater, shipLength }

}
const ship1 = Ship('1', '4', false, false)

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