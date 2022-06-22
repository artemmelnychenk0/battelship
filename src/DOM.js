import newGame from "./game";
import './style.css';
import gameBoard from "./gameBoard";
import { Player, computer } from "./player";

const dom = () => {

    const playerSide = document.querySelector('.player')
    const computerSide = document.querySelector('.computer')

    const playerBoard = gameBoard();
    const computerBoard = gameBoard();
    const board4Player = playerBoard.getBoard();
    const board4AI = computerBoard.getBoard();

    const AI = computer();

    //display player board
    let cell
    const displayPlayer = () => {
        const board = document.createElement('div')
        board.classList.add('board')

        for (let i = 0; i < board4Player.length; i++) {
            for (let j = 0; j < board4Player.length; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')

                if (board4Player[i][j] === 'carri' ||
                    board4Player[i][j] === 'battl' ||
                    board4Player[i][j] === 'sub' ||
                    board4Player[i][j] === 'patro' ||
                    board4Player[i][j] === 'tug' ||
                    board4Player[i][j] === 'jet') {
                    cell.classList.add('ship')
                    cell.appendChild(document.createTextNode(''))
                    cell.setAttribute('x', i.toString());
                    cell.setAttribute('y', j.toString())
                    board.appendChild(cell)

                } else {
                    if (board4Player[i][j] === 'missed') {
                        cell.classList.add('missed')
                    } else if (board4Player[i][j] === 'X') {
                        cell.classList.add('hit')
                    }
                    cell.appendChild(document.createTextNode(''))
                    cell.setAttribute('x', i.toString());
                    cell.setAttribute('y', j.toString())
                    board.appendChild(cell)
                }
            }
        }


        playerSide.appendChild(board)
        return cell
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
                if (board4AI[i][j] === 'carri' ||
                    board4AI[i][j] === 'battl' ||
                    board4AI[i][j] === 'sub' ||
                    board4AI[i][j] === 'patro' ||
                    board4AI[i][j] === 'tug' ||
                    board4AI[i][j] === 'jet') {

                    cell.appendChild(document.createTextNode(''))

                    cell.setAttribute('x', i.toString());
                    cell.setAttribute('y', j.toString())
                    board.appendChild(cell)

                } else {
                    if (board4AI[i][j] === 'missed') {
                        cell.classList.add('missed')
                        cell.appendChild(document.createTextNode(''))
                    } else if (board4AI[i][j] === 'X') {
                        cell.classList.add('hit')
                        cell.appendChild(document.createTextNode(''))

                    }
                    cell.appendChild(document.createTextNode(''))
                    cell.setAttribute('x', i.toString());
                    cell.setAttribute('y', j.toString())
                    board.appendChild(cell)
                }
            }
        }


        computerSide.appendChild(board)
    }


    const renderDOMPlayer = () => {
        playerSide.removeChild(playerSide.firstChild)
        displayPlayer();
    }

    const renderDOMAI = () => {
        computerSide.removeChild(computerSide.firstChild);
        displayComputer();
    }

    //place computer ships & player ships

    const placeShipAI = () => {

        for (let i = 0; i < 6; i++) {
            let coords = AI.randomizer()

            computerBoard.placeShip(computerBoard.boatArray[i], coords.randomItem, coords.coordX, coords.coordY)


        }
        console.log(board4AI)
    }






    placeShipAI();



    //attack computer
    let myTurn = true
    const attack = computerSide.addEventListener('click', (e) => {
        //shot with coordinates
        const shot = e.target.attributes

        computerBoard.receiveAttack(shot.x.value, shot.y.value,)

        myTurn = false
        renderDOMAI();
        setTimeout(computerAttack, 700)
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
            renderDOMPlayer();
            gameOver();
        }
    }
    //is GameOver
    const gameOver = () => {
        if (computerBoard.shipsSunk() == true) {
            alert('Game is OVER')
        }
    }

    //dragable
    let choise

    const btns = document.querySelectorAll('button#ship')
    const change = document.querySelector('#change')

    let direction = 'horizontal'

    change.addEventListener('click', () => {
        if (direction == 'horizontal') {
            direction = 'vertical'
        } else {
            direction = 'horizontal'
        }
    })

    btns.forEach(function (btn) {
        btn.addEventListener('click', () => {
            choise = btn.classList
            btn.style.backgroundColor = 'purple'
            return choise
        })
    })

    let ships = 0
    playerSide.addEventListener('click', (e) => {

        const spot = e.target.attributes
        if (choise != '') {
            playerBoard.placeShip(playerBoard[choise], direction, spot.x.value, spot.y.value)

            choise = ''
            ships++
            renderDOMPlayer();
        }
        if (ships == 6) {
            displayComputer()
            return
        }
    })

}
///


export default dom