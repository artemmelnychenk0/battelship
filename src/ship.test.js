import Ship from "./ship";

test('does it created ship', () => {
    const ship1 = Ship(5)
    expect(ship1.shipLength).toBe(5)
})


test('does shot get incresase', () => {
    const sub = Ship(5, 'sub');
    sub.hit();
    expect(sub.recordShots()).toBe(1);
})

test('does ship goes under water', () => {
    const sub = Ship(2, 'sub');
    sub.hit();
    sub.hit();
    expect(sub.recordShots()).toBe(2);
    expect(sub.sunk()).toBe(true);
})