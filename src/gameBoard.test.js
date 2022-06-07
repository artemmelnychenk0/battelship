import Ship from "./ship";
import gameBoard from "./gameBoard";


test('is Board empty', () => {
    const board1 = gameBoard();
    board1.createBoard();
    expect(board1.board).not.toBe();
})

test('is ship placed on a board', () => {
    const ship1 = Ship(3);
    const board1 = gameBoard();
    board1.createBoard();
    board1.placeShip(ship1.shipLength, 1)
    expect(board1.board).toStrictEqual(["empty", "ship", "ship", "ship", "empty"]);
})

test('is cell got attacked', () => {
    const ship1 = Ship(3);
    const board1 = gameBoard();
    board1.createBoard();
    board1.placeShip(ship1.shipLength, 1)
    board1.receiveAttack(2);
    expect(board1.board).toStrictEqual(["empty", "ship", "hit", "ship", "empty"]);

})