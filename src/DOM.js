import newGame from "./game";
import './style.css';
import refresh from './assets/refresh.svg'


const dom = () => {

    const playerSide = document.querySelector('.player')
    const computerSide = document.querySelector('.computer')

    let game = newGame()

    let playerBoard = game.player1;
    let computerBoard = game.computer1;
    let board4Player = game.board4Player;
    let board4AI = game.board4AI;
    let AI = game.AI;



    const resetBoard = (board) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                board[i][j] = ''
            }
        }
    }

    //display boards

    const display = (side) => {
        const board = document.createElement('div')
        board.classList.add('board')

        for (let i = 0; i < side.length; i++) {
            for (let j = 0; j < side.length; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                if (side[i][j] === 'carri' ||
                    side[i][j] === 'battl' ||
                    side[i][j] === 'sub' ||
                    side[i][j] === 'patro' ||
                    side[i][j] === 'tug' ||
                    side[i][j] === 'jet') {
                    if (side == board4Player) {
                        cell.classList.add('ship')
                    }
                } else if (side[i][j] === 'missed') {
                    cell.classList.add('missed')
                } else if (side[i][j] === 'X') {
                    cell.classList.add('hit')
                }
                cell.addEventListener('mouseover', (e) => shipAreaSelection(e.target))
                cell.addEventListener('mouseleave', (e) => shipAreaRemove(e))
                cell.appendChild(document.createTextNode(''))
                cell.setAttribute('x', i.toString());
                cell.setAttribute('y', j.toString())
                board.appendChild(cell)
            }
        }

        if (side == board4AI) {
            computerSide.appendChild(board)
        } else if (side == board4Player) {
            playerSide.appendChild(board)
        }

    }
    display(board4Player)

    //highligh placing ships
    let coords = []
    function shipAreaSelection(cell) {
        if (choise == '' || !choise) {
            return
        } else {
            const currentLength = playerBoard[choise].shipLength;
            let coordX = Number(cell.getAttribute('x'))
            let coordY = Number(cell.getAttribute('y'))
            coords.push(coordX, coordY)

            const selectedY = coordY + currentLength
            const selectedX = coordX + currentLength

            let validator = computerBoard.shipFit(playerBoard[choise], direction, coordX, coordY)

            if (validator == true && board4Player[coordX][coordY] == '') {
                if (direction == 'horizontal') {
                    for (let i = coordY; i < selectedY; i++) {
                        playerSide.querySelector(`[y = '${i}'][x = '${coordX}']`).classList.add('selected')

                    }

                } else if (direction == 'vertical') {
                    for (let i = coordX; i < selectedX; i++) {
                        playerSide.querySelector(`[y = '${coordY}'][x = '${i}']`).classList.add('selected')

                    }
                }

            };

        }
    };
    //remove highlight
    function shipAreaRemove() {
        if (choise == '' || !choise) {
            return
        } else {
            const currentLength = playerBoard[choise].shipLength;
            let coordX = coords[0]
            let coordY = coords[1]

            const selectedY = coordY + currentLength
            const selectedX = coordX + currentLength

            let validator = computerBoard.shipFit(playerBoard[choise], direction, coordX, coordY)

            if (validator == true) {
                if (direction == 'horizontal') {
                    for (let i = coordY; i < selectedY; i++) {
                        playerSide.querySelector(`[y = '${i}'][x = '${coordX}']`).classList.remove('selected')

                    }

                } else if (direction == 'vertical') {
                    for (let i = coordX; i < selectedX; i++) {
                        playerSide.querySelector(`[y = '${coordY}'][x = '${i}']`).classList.remove('selected')

                    }
                }

            };

        }
        coords = []
    };

    //render boards
    const renderDOM = (side) => {
        if (side == board4Player) {
            playerSide.removeChild(playerSide.firstChild)
            display(board4Player)
        } else if (side == board4AI) {
            computerSide.removeChild(computerSide.firstChild);
            display(board4AI)
        }

    }


    //attack by player
    let myTurn = true
    computerSide.addEventListener('click', (e) => {
        const shot = e.target.attributes

        computerBoard.receiveAttack(shot.x.value, shot.y.value,)

        myTurn = false
        renderDOM(board4AI);
        setTimeout(computerAttack, 500)
        gameOver(board4Player)

    })

    //attack by AI
    const computerAttack = () => {
        if (myTurn == false) {
            let shot = playerBoard.receiveAttack(AI.randomShotY(), AI.randomShotX())
            if (shot == true) {
                playerBoard.receiveAttack(AI.randomShotY(), AI.randomShotX())
            } else {
                myTurn = true
            }
            renderDOM(board4Player);
            gameOver(board4AI);
        }
    }
    //is GameOver 
    const gameOver = (side) => {

        let resultArray = []
        for (let i = 0; i < side.length; i++) {
            const result = side[i].every(filter)

            function filter(e) {
                if (e == 'carri' || e == 'battl' || e == 'sub' || e == 'tug' || e == 'patro' || e == 'jet') {
                    return false
                } else return true
            }

            resultArray.push(result)

        }
        if (resultArray.every(e => e == true)) {
            if (side == board4AI) {
                if (confirm('You won, wanna play again?')) {
                    restartGame()
                } else {
                    console.log('Okay, bye')
                }
            } else if (side == board4Player) {
                if (confirm('You lost, wanna play again?')) {
                    restartGame()
                } else {
                    console.log('Okay, bye')
                }
            }

        }

    }

    //reset Game
    const restartGame = () => {
        removeAllChilNodes(playerSide);
        removeAllChilNodes(computerSide);
        resetBoard(board4AI)
        resetBoard(board4Player)
        game.placeShipAI();
        dom()
        btns.forEach(function (btn) {
            btn.disabled = false
        })

    }
    function removeAllChilNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }


    //choose ships
    let choise

    const btns = document.querySelectorAll('button#ship')
    const change = document.querySelector('#change')
    change.src = refresh

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
            btn.disabled = true
            choise = btn.classList
        })
    })
    //place player ships
    let ships = 0
    playerSide.addEventListener('click', (e) => {

        const spot = e.target.attributes
        if (choise != '') {
            playerBoard.placeShip(playerBoard[choise], direction, spot.x.value, spot.y.value)
            choise = ''
            ships++
            renderDOM(board4Player);
        }
        if (ships == 6) {
            game.placeShipAI()
            display(board4AI)
            return
        }
    })
}
///


export default dom