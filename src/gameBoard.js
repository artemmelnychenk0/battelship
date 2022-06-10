import Ship from "./ship"

const gameBoard = function () {

    let board = Array(5).fill('empty')
    const getBoard = () => board;

    const submarine = Ship(3, 'submarine')
    const tugboat = Ship(2, 'tugboat')
    const jets = Ship(1, 'jets')

    const boatArray = [submarine, tugboat, jets]

    function placeShip(ship, position) {

        for (let i = 0; i < ship.shipLength; i++) {
            board[position] = ship.getName()

            position++
        }
    }
    function receiveAttack(positionX, positionY) {
        const missed = 'missed';
        const found = boatArray.find(e => e.getName() == board[positionX])

        if (found == undefined) {
            board[positionX] = missed;
        } else if (board[positionX] === found.getName()) {
            board[positionX] = found.hit()
        }
    };
    function shipsSunk() {
        const checked = board.every(e => e != 'submarine' && 'tugboat' && 'jets')
        return checked
    }

    return { getBoard, board, placeShip, receiveAttack, submarine, tugboat, jets, boatArray, shipsSunk }
}
export default gameBoard


