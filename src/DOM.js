import newGame from "./game";
import './style.css';

const dom = () => {

    const playerSide = document.querySelector('.player')
    const computerSide = document.querySelector('.computer')


    const player = newGame();
    const computer = newGame();

    //display player board
    const displayPlayer = () => {
        const board = document.createElement('div')
        board.classList.add('board')

        for (let i = 0; i < player.board4Player.length; i++) {
            for (let j = 0; j < player.board4Player.length; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.appendChild(document.createTextNode(player.board4Player[i][j]))
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

        for (let i = 0; i < computer.board4AI.length; i++) {
            for (let j = 0; j < computer.board4AI.length; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.appendChild(document.createTextNode(computer.board4AI[i][j]))
                cell.setAttribute('y', i.toString());
                cell.setAttribute('x', j.toString())
                board.appendChild(cell)
            }
        }


        computerSide.appendChild(board)
    }
    displayComputer();
    //place player ships

    //attack computer
    const attack = computerSide.addEventListener('click', (e) => {
        //shot with coordinates
        const shot = e.target.attributes
        if (shot.x.value == 0 && shot.y.value == 0) {
            console.log(shot)
        }
    })

}
export default dom;