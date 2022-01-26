const { write, findIndexBinary } = require('./ranking');

describe('ranking tests', function() {

  test('should find index with binary search', () => {
    const arr = [20,16,13,10,1]
    const el = 12

    const index = findIndexBinary(arr, el)

    expect(index).toBe(4);
  });

  test('should find index with binary search 1', () => {
    const arr = [20,16,13,10,1]
    const el = 10

    const index = findIndexBinary(arr, el)

    expect(index).toBe(4);
  });

  test('should find index with binary search 2', () => {
    const arr = [20,16,13,10,1]
    const el = 1

    const index = findIndexBinary(arr, el)

    expect(index).toBe(5);
  });

  test('should find index with binary search 3', () => {
    const arr = [20,16,13,10,1]
    const el = 3

    const index = findIndexBinary(arr, el)

    expect(index).toBe(5);
  });

  test('should find index with binary search 4', () => {
    const arr = [20,16,13,10,1]
    const el = 21

    const index = findIndexBinary(arr, el)

    expect(index).toBe(1);
  });

});