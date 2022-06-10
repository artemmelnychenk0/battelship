import gameBoard from "./gameBoard";


test('is Board empty', () => {
    const board1 = gameBoard();
    board1.getBoard();
    expect(board1.board).not.toBe();
})

test('is ship placed on a board', () => {
    const board1 = gameBoard();
    board1.getBoard();
    board1.placeShip(board1.submarine, 1)
    expect(board1.board).toEqual(["empty", "submarine", "submarine", "submarine", "empty"]);
})

test('is ship got attacked', () => {
    const board1 = gameBoard();
    board1.getBoard();
    board1.placeShip(board1.tugboat, 1)
    board1.receiveAttack(2)
    expect(board1.board).toEqual(["empty", "tugboat", "X", "empty", "empty"]);
})

test('if shot is missed', () => {
    const board1 = gameBoard();
    board1.getBoard();
    board1.placeShip(board1.submarine, 1)
    board1.receiveAttack(4);
    expect(board1.board).toEqual(["empty", "submarine", "submarine", "submarine", "missed"]);
})

test('what it returns', () => {
    const board1 = gameBoard();
    board1.getBoard();
    board1.placeShip(board1.submarine, 1)
    board1.receiveAttack(1);
    board1.receiveAttack(2);
    board1.receiveAttack(3);
    expect(board1.shipsSunk()).toBe(true);

})
