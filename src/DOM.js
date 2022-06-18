import newGame from "./game";
import './style.css';
import gameBoard from "./gameBoard";
import { Player, computer } from "./player";

const dom = () => {

    const playerSide = document.querySelector('.player')
    const computerSide = document.querySelector('.computer')

    const placeBtn = document.querySelector('.place')
    const aiBtn = document.querySelector('.computerAttack')


    const playerBoard = gameBoard();
    const computerBoard = gameBoard();
    const board4Player = playerBoard.getBoard();
    const board4AI = computerBoard.getBoard();

    const AI = computer();

    //display player board
    const displayPlayer = () => {
        const board = document.createElement('div')
        board.classList.add('board')

        for (let i = 0; i < board4Player.length; i++) {
            for (let j = 0; j < board4Player.length; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.appendChild(document.createTextNode(board4Player[i][j]))
                board.appendChild(cell)
            }
        }


        playerSide.appendChild(board)
    }
    displayPlayer()

    //display ai board
    const displayComputer = () => {
        const board = document.createElement('div')
        board.classList.add('board')

        for (let i = 0; i < board4AI.length; i++) {
            for (let j = 0; j < board4AI.length; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.appendChild(document.createTextNode(board4AI[i][j]))
                cell.setAttribute('x', i.toString());
                cell.setAttribute('y', j.toString())
                board.appendChild(cell)
            }
        }


        computerSide.appendChild(board)
    }
    displayComputer();

    const renderDOM = () => {
        computerSide.removeChild(computerSide.firstChild)
        playerSide.removeChild(playerSide.firstChild)
        displayComputer();
        displayPlayer();
    }

    //place computer ships & player ships

    placeBtn.addEventListener('click', () => {
        const playerShips =
            playerBoard.placeShip(playerBoard.carrier, 'vertical', 3, 0)
        playerBoard.placeShip(playerBoard.battleship, 'horizontal', 1, 6,)
        playerBoard.placeShip(playerBoard.submarine, 'vertical', 4, 7)
        playerBoard.placeShip(playerBoard.tugboat, 'horizontal', 7, 4)
        playerBoard.placeShip(playerBoard.patrol, 'horizontal', 1, 3)
        playerBoard.placeShip(playerBoard.jet, 'horizontal', 9, 9)

        const coords1 = AI.randomizer()
        const coords2 = AI.randomizer()
        const coords3 = AI.randomizer()
        const coords4 = AI.randomizer()
        const coords5 = AI.randomizer()
        const coords6 = AI.randomizer()
        const computerShips =


            computerBoard.placeShip(computerBoard.carrier, coords1.randomItem, coords1.coordX, coords1.coordY)
        computerBoard.placeShip(computerBoard.battleship, coords2.randomItem, coords2.coordX, coords2.coordY)
        computerBoard.placeShip(computerBoard.submarine, coords3.randomItem, coords3.coordX, coords3.coordY)
        computerBoard.placeShip(computerBoard.tugboat, coords4.randomItem, coords4.coordX, coords4.coordY)
        computerBoard.placeShip(computerBoard.patrol, coords5.randomItem, coords5.coordX, coords5.coordY)
        computerBoard.placeShip(computerBoard.jet, coords6.randomItem, coords6.coordX, coords6.coordY)



        renderDOM()
    })




    //attack computer
    let myTurn = true
    const attack = computerSide.addEventListener('click', (e) => {
        //shot with coordinates
        const shot = e.target.attributes

        computerBoard.receiveAttack(shot.x.value, shot.y.value,)
        myTurn = false
        renderDOM()
        computerAttack();
        gameOver();

    })
    //attack player

    const computerAttack = () => {
        if (myTurn == false) {
            let shot = playerBoard.receiveAttack(AI.randomShotY(), AI.randomShotX())
            if (shot == true) {
                playerBoard.receiveAttack(AI.randomShotY(), AI.randomShotX())
            } else {
                myTurn = true
            }
            renderDOM();
            gameOver();
        }
    }
    //is GameOver
    const gameOver = () => {
        // computerBoard.shipsSunk();
        if (computerBoard.shipsSunk() == true) {
            alert('Game is OVER')
        }
    }
    aiBtn.addEventListener('click', () => {
        AI.randomOrinetation();
        AI.randomPlacement();

    })
}

export default dom