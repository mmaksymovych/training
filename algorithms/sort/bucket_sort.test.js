const { sortWithNegative } = require('./bucket_sort')

describe('bucker sort tests', () => {
  test('sort with negative', () => {
    const arr = [-1, 10, -5, -2, 50, 100]

    const expected = [-5, -2, -1, 10, 50, 100]

    const actual = sortWithNegative(arr)

    expect(actual).toStrictEqual(expected)
  })
})
