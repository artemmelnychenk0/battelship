import { Player, computer } from "./player.js";

test('is player creates Board', () => {
    const danny = Player('danny')
    expect(danny.newBoard()).toEqual(["empty", "empty", "empty", "empty", "empty"])
})

test('is computer generates a shot', () => {
    const ai = computer();
    expect(ai.randomShot(1, 50)).toBe();
})

