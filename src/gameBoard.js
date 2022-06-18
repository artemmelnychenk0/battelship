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

    function placeShip(ship, direction, x, y) {
        let message = ''
        if (board[x][y] === '') {
            for (let i = 0; i < ship.shipLength; i++) {

                board[x][y] = ship.getName()
                if (direction == 'horizontal') {
                    y++
                } else if (direction == 'vertical') {
                    x++
                }
            }
        } else {
            message = 'Spot is taken'
            x++
            y++
            console.log(ship.getName())
            for (let i = 0; i < ship.shipLength; i++) {

                board[x][y] = ship.getName()
                if (direction == 'horizontal') {
                    y++
                } else if (direction == 'vertical') {
                    x++
                }
            }

        }
        return message

    }

    function receiveAttack(positionX, positionY) {
        let illegalShot = false
        const found = boatArray.find(e => e.getName() == board[positionX][positionY])
        //problem
        if (found === undefined && board[positionX][positionY] != 'missed' && board[positionX][positionY] != 'X') {
            board[positionX][positionY] = 'missed';


        } else if (found !== undefined && board[positionX][positionY] != 'missed' && board[positionX][positionY] != found.hit()) {
            board[positionX][positionY] = found.hit();


        } else {
            illegalShot = true
            console.log('Idiot')
        }
        return illegalShot

    };

    function shipsSunk() {
        let allShips = false
        const resultArray = []
        for (let i = 0; i < board.length; i++) {
            const result = board[i].every(e => e != 'jet' && 'submarine' && 'tugboat' && 'carrier' && 'battleship' && 'patrol')
            resultArray.push(result)
        }
        if (resultArray.every(e => e == true)) {
            allShips = true
            return allShips
        }
    }

    return { getBoard, board, placeShip, receiveAttack, submarine, tugboat, jet, battleship, carrier, boatArray, patrol, shipsSunk }
}
export default gameBoard