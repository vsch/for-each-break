"use strict";

const forEachBreak = require("for-each-break");
const BREAK = forEachBreak.BREAK;
const RETURN = forEachBreak.RETURN;
const forEach = forEachBreak.forEach;
const map = forEachBreak.map;
const filter = forEachBreak.filter;

test('forEach no break', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const result = forEach.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array })
    });
    expect(values).toEqual([
        { value: 1, index: 0, array: thisArg },
        { value: 2, index: 1, array: thisArg },
        { value: 3, index: 2, array: thisArg },
        { value: 4, index: 3, array: thisArg },
        { value: 5, index: 4, array: thisArg },
    ]);

    expect(result).toBe(undefined);
});

test('forEach break', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const result = forEach.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array });
        if (value === 3) return BREAK;
    });

    expect(values).toEqual([
        { value: 1, index: 0, array: thisArg },
        { value: 2, index: 1, array: thisArg },
        { value: 3, index: 2, array: thisArg },
    ]);

    expect(result).toBe(undefined);
});

test('forEach return', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const result = forEach.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array });
        if (value === 3) return RETURN(value);
    });

    expect(values).toEqual([
        { value: 1, index: 0, array: thisArg },
        { value: 2, index: 1, array: thisArg },
        { value: 3, index: 2, array: thisArg },
    ]);

    expect(result).toBe(3);
});

test('forEach no break, default return', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const result = forEach.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array })
    }, 100);

    expect(values).toEqual([
        { value: 1, index: 0, array: thisArg },
        { value: 2, index: 1, array: thisArg },
        { value: 3, index: 2, array: thisArg },
        { value: 4, index: 3, array: thisArg },
        { value: 5, index: 4, array: thisArg },
    ]);

    expect(result).toBe(100);
});

test('forEach break, default return', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const result = forEach.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array });
        if (value === 3) return BREAK;
    }, 100);

    expect(values).toEqual([
        { value: 1, index: 0, array: thisArg },
        { value: 2, index: 1, array: thisArg },
        { value: 3, index: 2, array: thisArg },
    ]);

    expect(result).toBe(100);
});

