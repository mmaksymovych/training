const {
  getTypesSortedCounts,
  verifyTypesCountsAreEqual,
  isPossibleToSort,
} = require('./balls')

describe('balls sorting tests', () => {
  describe('matrix type sorting tests', () => {
    it('should sort 2 types', () => {
      const matrix = [
        [1, 1],
        [1, 1],
      ]

      const sorted = getTypesSortedCounts(matrix)
      const expected = [2, 2]

      expect(sorted).toStrictEqual(expected)
    })

    it('should sort 3 types', () => {
      const matrix = [
        [1, 1, 5],
        [0, 0, 0],
        [1, 1, 0],
      ]

      const sorted = getTypesSortedCounts(matrix)
      const expected = [2, 2, 5]

      expect(sorted).toStrictEqual(expected)
    })
  })

  it('verify swapping possible', () => {
    const matrix = [
      [0, 2, 1],
      [1, 1, 1],
      [2, 0, 0],
    ]

    const actual = isPossibleToSort(matrix)
    const expected = 'Possible'

    expect(actual).toBe(expected)
  })
})
