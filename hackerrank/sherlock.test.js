const {
  groupByChar,
  groupByCounts,
  sortCounts,
  checkString,
} = require('./sherlock')

describe('sherlock tests', () => {
  test('char grouping test', () => {
    const str = 'asdfghhjkklll'

    const actual = groupByChar(str)
    const expected = {
      a: 1,
      s: 1,
      d: 1,
      f: 1,
      g: 1,
      h: 2,
      j: 1,
      k: 2,
      l: 3,
    }

    expect(actual).toStrictEqual(expected)
  })

  test('counts grouping test', () => {
    const charGroup = {
      a: 3,
      b: 3,
      c: 5,
      d: 9,
    }

    const actual = groupByCounts(charGroup)
    const expected = {
      3: 2,
      5: 1,
      9: 1,
    }

    expect(actual).toStrictEqual(expected)
  })

  test('counts sorting', () => {
    const countsGroupArr = [
      [9, 1],
      [3, 2],
      [5, 1],
    ]

    const actual = sortCounts(countsGroupArr)
    const expected = [
      [3, 2],
      [9, 1],
      [5, 1],
    ]

    expect(actual).toStrictEqual(expected)
  })

  describe('check string tests', () => {
    test('NO - more then 2 counts groups', () => {
      const str = 'aabbcccdddd'
      const actual = checkString(str)

      expect(actual).toBe('NO')
    })

    test('NO - 2 counts groups (1)', () => {
      const str = 'aabbcccddd'
      const actual = checkString(str)

      expect(actual).toBe('NO')
    })

    test('NO - 2 counts groups (2)', () => {
      const str = 'aabbccccc'
      const actual = checkString(str)

      expect(actual).toBe('NO')
    })

    test('NO - hackerrank use case', () => {
      const str = 'aabbccddeefghi'
      const actual = checkString(str)

      expect(actual).toBe('NO')
    })

    test('YES - 2 counts groups', () => {
      const str = 'aabbccc'
      const actual = checkString(str)

      expect(actual).toBe('YES')
    })

    test('YES - valid string', () => {
      const str = 'aabbcc'
      const actual = checkString(str)

      expect(actual).toBe('YES')
    })
  })
})
