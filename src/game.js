import { Player, computer } from "./player";
import gameBoard from "./gameBoard";

//new game
const newGame = () => {
    const player1 = gameBoard();
    const computer1 = gameBoard();
    // const player = Player();
    // const ai = computer();
    //create Boards
    const board4Player = player1.getBoard();
    const board4AI = computer1.getBoard();

    //create computer
    const AI = computer()

    //place ships AI
    const placeShipAI = () => {

        for (let i = 0; i < 6; i++) {
            let coords = AI.randomizer()
            let validator = computer1.shipFit(computer1.boatArray[i], coords.randomItem, coords.coordX, coords.coordY)
            if (validator == true && board4AI[coords.coordX][coords.coordY] === '') {
                computer1.placeShip(computer1.boatArray[i], coords.randomItem, coords.coordX, coords.coordY)
            } else {
                let coords = AI.randomizer()
                let validator = computer1.shipFit(computer1.boatArray[i], coords.randomItem, coords.coordX, coords.coordY)
                if (validator == true && board4AI[coords.coordX][coords.coordY] === '') {
                    computer1.placeShip(computer1.boatArray[i], coords.randomItem, coords.coordX, coords.coordY)
                }
            }

        }
    }
    //check if gameOver 




    return { board4Player, board4AI, player1, computer1, AI, placeShipAI }
}

export default newGame;

