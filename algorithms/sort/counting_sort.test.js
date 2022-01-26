const {
  getArrayWithCounts,
  sumCounts,
  moveArray,
  placeElements,
  sort,
} = require('./counting_sort')

describe('count sort tests', () => {
  test('get array with counts', () => {
    const arr = [1, 3, 5, 7, 1, 2, 2, 5]

    const actual = getArrayWithCounts(arr)
    const expected = [0, 2, 2, 1, 0, 2, 0, 1]

    expect(actual).toStrictEqual(expected)
  })

  test('sum counts', () => {
    const arr = [0, 0, 2, 5, 3, 1]

    const actual = sumCounts(arr)
    const expected = [0, 0, 2, 7, 10, 11]

    expect(actual).toStrictEqual(expected)
  })

  test('move array', () => {
    const arr = [0, 0, 2, 5, 7]

    const actual = moveArray(arr)
    const expected = [0, 0, 0, 2, 5, 7]

    expect(actual).toStrictEqual(expected)
  })

  test('placeElements', () => {
    const arr = [1, 4, 1, 2, 7, 5, 2]
    const counts = [0, 0, 2, 4, 4, 5, 6, 6, 7, 7]

    const actual = placeElements(arr, counts)
    const expected = [1, 1, 2, 2, 4, 5, 7]

    expect(actual).toStrictEqual(expected)
  })

  test('sort', () => {
    const arr = [1, 4, 1, 2, 7, 5, 2]

    const actual = sort(arr)
    const expected = [1, 1, 2, 2, 4, 5, 7]

    expect(actual).toStrictEqual(expected)
  })
})
