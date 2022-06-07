import Ship from "./ship";

test('does it created ship', () => {
    expect(Ship(5).shipArray).toHaveLength(5)
})

test('it take X as a hit', () => {
    const ship1 = Ship(5);
    expect(ship1.hit(0)).toEqual(['X', , , , ,])
})

test('is ship sunk', () => {
    const ship1 = Ship(1);
    ship1.hit(0)
    ship1.hit(1)
    expect(ship1.sunk).toBeTruthy();
})

// for (let i = 0; i < length; i++) {
//     board[position] = shipCell
// }