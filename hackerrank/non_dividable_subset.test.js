const {
  nonDivisibleSubset,
  getRemainders,
  calculateCounts,
} = require('./non_dividable_subset')

describe('subset tests', () => {
  // test('get remainders', () => {
  //   const elements = [
  //     2375782,
  //     21836421,
  //     2139842193,
  //     2138723,
  //     23816,
  //     21836219,
  //     2948784,
  //     43864923,
  //     283648327,
  //     23874673,
  //   ]

  //   const expected = [6, 9, 8, 2, 0, 2, 7, 11, 1, 4]

  //   const actual = getRemainders(elements, 13)

  //   expect(actual).toStrictEqual(expected)
  // })

  // test('should calculate counts', () => {
  //   const values = [6, 9, 8, 2, 0, 2, 7, 11, 1, 4]
  //   const actual = calculateCounts(values)

  //   const expected = { 0: 1, 1: 1, 2: 2, 4: 1, 6: 1, 7: 1, 8: 1, 9: 1, 11: 1 }

  //   expect(actual).toStrictEqual(expected)
  // })

  describe('subset tests', () => {
    test('should find subset 1', () => {
      const elements = [
        2375782,
        21836421,
        2139842193,
        2138723,
        23816,
        21836219,
        2948784,
        43864923,
        283648327,
        23874673,
      ]

      const expected = 7

      const actual = nonDivisibleSubset(13, elements)

      expect(actual).toStrictEqual(expected)
    })

    test('should find subset 2', () => {
      const elements = [1, 2, 3, 4, 5]

      const expected = 1

      const actual = nonDivisibleSubset(1, elements)

      expect(actual).toStrictEqual(expected)
    })

    test('should find subset 3', () => {
      const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      const expected = 5

      const actual = nonDivisibleSubset(4, elements)

      expect(actual).toStrictEqual(expected)
    })

    test('should find subset 4', () => {
      const elements = [1, 7, 2, 4]

      const expected = 3

      const actual = nonDivisibleSubset(3, elements)

      expect(actual).toStrictEqual(expected)
    })
  })

  describe('subset tests 2', () => {
    test('should find subset 1', () => {
      const elements = [
        582740017,
        954896345,
        590538156,
        298333230,
        859747706,
        155195851,
        331503493,
        799588305,
        164222042,
        563356693,
        80522822,
        432354938,
        652248359,
      ]

      const expected = 11

      const actual = nonDivisibleSubset(11, elements)

      expect(actual).toStrictEqual(expected)
    })

    test('should find subset 2', () => {
      const elements = [1, 2, 3, 4, 5]

      const expected = 1

      const actual = nonDivisibleSubset(1, elements)

      expect(actual).toStrictEqual(expected)
    })

    test('should find subset 3', () => {
      const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      const expected = 5

      const actual = nonDivisibleSubset(4, elements)

      expect(actual).toStrictEqual(expected)
    })

    test('should find subset 4', () => {
      const elements = [1, 7, 2, 4]

      const expected = 3

      const actual = nonDivisibleSubset(3, elements)

      expect(actual).toStrictEqual(expected)
    })
  })
})
