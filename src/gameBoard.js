import Ship from "./ship"

const gameBoard = function () {

    let board = []
    function createBoard() {
        for (let i = 0; i < 5; i++) {
            const boardCell = 'empty';
            board.push(boardCell)
        }
        return board
    }
    function placeShip(length, position) {
        const shipCell = 'ship';
        for (let i = 0; i < length; i++) {
            board[position] = shipCell;
            position++
        }
        return board
    }
    function receiveAttack(positionX, positionY) {
        const attack = 'hit';
        board[positionX] = attack;
        return board
    }

    return { createBoard, board, placeShip, receiveAttack }
}
export default gameBoard
