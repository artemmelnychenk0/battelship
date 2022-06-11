import { Player, computer } from "./player";
import gameBoard from "./gameBoard";

//new game
const newGame = () => {
    const playerBoard = gameBoard();
    const computerBoard = gameBoard();
    // const player = Player();
    // const ai = computer();
    //create Boards
    const board4Player = playerBoard.getBoard();
    const playerShot = playerBoard.receiveAttack()

    const board4AI = computerBoard.getBoard();
    console.log(board4Player)
    // place Ships
    const playerShips =
        playerBoard.placeShip(playerBoard.carrier, 3, 0, 'vertical')
    playerBoard.placeShip(playerBoard.battleship, 1, 6, 'horizontal')
    playerBoard.placeShip(playerBoard.submarine, 4, 7, 'vertical')
    playerBoard.placeShip(playerBoard.tugboat, 7, 4, 'horizontal')
    playerBoard.placeShip(playerBoard.patrol, 1, 3, 'horizontal')
    playerBoard.placeShip(playerBoard.jet, 9, 9, 'horizontal')


    const computerShips = computerBoard.placeShip(computerBoard.jet, 3, 3, 'horizontal')
    computerBoard.placeShip(playerBoard.carrier, 3, 1, 'vertical')
    computerBoard.placeShip(playerBoard.battleship, 2, 5, 'horizontal')
    computerBoard.placeShip(playerBoard.submarine, 4, 7, 'vertical')
    computerBoard.placeShip(playerBoard.tugboat, 7, 4, 'horizontal')
    computerBoard.placeShip(playerBoard.patrol, 1, 3, 'horizontal')


    //attack the computer

    return { board4Player, board4AI }
}

export default newGame;


