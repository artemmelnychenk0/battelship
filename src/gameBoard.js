import Ship from "./ship"

const gameBoard = function () {

    let board = Array(10)
        .fill('')
        .map(() => Array(10).fill(''))
    const getBoard = () => board;

    const carrier = Ship(5, 'carri')
    const battleship = Ship(4, 'battl')
    const submarine = Ship(3, 'sub')
    const tugboat = Ship(2, 'tug')
    const patrol = Ship(2, 'patro')
    const jet = Ship(1, 'jet')


    const boatArray = [carrier, battleship, submarine, tugboat, patrol, jet]

    function placeShip(ship, y, x, direction) {

        for (let i = 0; i < ship.shipLength; i++) {
            board[y][x] = ship.getName()
            if (direction === 'horizontal') {
                x++
            } else if (direction === 'vertical') {
                y++
            }
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

    return { getBoard, board, placeShip, receiveAttack, submarine, tugboat, jet, battleship, carrier, boatArray, patrol, shipsSunk }
}
export default gameBoard


