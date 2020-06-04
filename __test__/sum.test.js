const { sum } = require('../src/sum');

describe('Additional of two function test', () => {
    test("Add 1 + 2 should be 3", () => {
        expect(sum(1, 2)).toBe(3);
        expect(typeof sum(1, 2)).toBe('number');
    });

    test("It should fail if string as parameter", () => {
        expect(() => { sum('hello', 'world')}).toThrow(Error);
    });
});