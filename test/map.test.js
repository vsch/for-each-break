"use strict";

const forEachBreak = require("for-each-break");
const BREAK = forEachBreak.BREAK;
const RETURN = forEachBreak.RETURN;
const forEach = forEachBreak.forEach;
const map = forEachBreak.map;
const filter = forEachBreak.filter;
const forEachRight = forEachBreak.forEachRight;
const mapRight = forEachBreak.mapRight;
const filterRight = forEachBreak.filterRight;

test('map no break', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const result = map.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array });
        return 10 - value;
    });

    expect(values).toEqual([
        { value: 1, index: 0, array: thisArg },
        { value: 2, index: 1, array: thisArg },
        { value: 3, index: 2, array: thisArg },
        { value: 4, index: 3, array: thisArg },
        { value: 5, index: 4, array: thisArg },
    ]);

    expect(result).toEqual(thisArg.map(value => 10 - value));
});

test('map break', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const result = map.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array });
        if (value === 3) return BREAK;
        return 10 - value;
    });

    expect(values).toEqual([
        { value: 1, index: 0, array: thisArg },
        { value: 2, index: 1, array: thisArg },
        { value: 3, index: 2, array: thisArg },
    ]);

    expect(result).toEqual(thisArg.filter(value => value < 3).map(value => 10 - value));
});

test('map return', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const result = map.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array });
        if (value === 3) return RETURN([100, 200]);
    });

    expect(values).toEqual([
        { value: 1, index: 0, array: thisArg },
        { value: 2, index: 1, array: thisArg },
        { value: 3, index: 2, array: thisArg },
    ]);

    expect(result).toEqual([100, 200]);
});

test('mapRight no break', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const thisArgRight = [5, 4, 3, 2, 1];
    const result = mapRight.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array });
        return 10 - value;
    });

    expect(values).toEqual([
        { value: 5, index: 4, array: thisArg },
        { value: 4, index: 3, array: thisArg },
        { value: 3, index: 2, array: thisArg },
        { value: 2, index: 1, array: thisArg },
        { value: 1, index: 0, array: thisArg },
    ]);

    expect(result).toEqual(thisArgRight.map(value => 10 - value));
});

test('mapRight break', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const thisArgRight = [5, 4, 3, 2, 1];
    const result = mapRight.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array });
        if (value === 3) return BREAK;
        return 10 - value;
    });

    expect(values).toEqual([
        { value: 5, index: 4, array: thisArg },
        { value: 4, index: 3, array: thisArg },
        { value: 3, index: 2, array: thisArg },
    ]);

    expect(result).toEqual(thisArgRight.filter(value => value > 3).map(value => 10 - value));
});

test('mapRight return', () => {
    const values = [];
    const thisArg = [1, 2, 3, 4, 5];
    const thisArgRight = [5, 4, 3, 2, 1];
    const result = mapRight.call(thisArg, (value, index, array) => {
        values.push({ value: value, index: index, array: array });
        if (value === 3) return RETURN([100, 200]);
    });

    expect(values).toEqual([
        { value: 5, index: 4, array: thisArg },
        { value: 4, index: 3, array: thisArg },
        { value: 3, index: 2, array: thisArg },
    ]);

    expect(result).toEqual([100, 200]);
});

