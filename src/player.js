import gameBoard from "./gameBoard"

const Player = (name) => {

    const getName = () => {
        return name
    }
    const isMyTurn = true

    return { getName, isMyTurn }
}

const computer = () => {
    const board = gameBoard();
    const computerBoard = () => board.getBoard()

    const randomShotY = () => {
        let result = Math.floor(Math.random() * 10)
        return result
    }
    const randomShotX = () => {
        let result = Math.floor(Math.random() * 10)
        return result
    }

    const randomizer = () => {
        let orientation = ['vertical', 'horizontal']
        let randomItem = orientation[Math.floor(Math.random() * orientation.length)];
        let coordX
        let coordY
        if (randomItem == 'vertical') {
            coordX = Math.floor(Math.random() * 6)
            coordY = Math.floor(Math.random() * 10)

        } else {
            coordX = Math.floor(Math.random() * 10)
            coordY = Math.floor(Math.random() * 6)
        }
        return { coordX, coordY, randomItem }
    }


    //should  not shot at the same spot



    return { computerBoard, randomShotY, randomShotX, randomizer }

}
export { Player, computer }