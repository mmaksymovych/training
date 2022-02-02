const { permutate } = require('./permutation')

describe('permutation tests', () => {
  test('abc', () => {
    const arr = ['a', 'b', 'c']
    const expected = [
      ['a', 'b', 'c'],
      ['b', 'a', 'c'],
      ['c', 'b', 'a'],
    ]

    const actual = permutate(arr)

    expect(actual).toStrictEqual(expected)
  })
})
