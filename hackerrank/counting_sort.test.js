const {
  replaceElementswithDashes,
  bucketSort,
  convertToString,
  sort,
} = require('./counting_sort')

describe('counting sort tests', () => {
  describe('replace elements with dashes', () => {
    test('1 element', () => {
      const arr = [[0, 'aa']]

      const actual = replaceElementswithDashes(arr)
      const expected = [[0, 'aa']]

      expect(actual).toStrictEqual(expected)
    })
    test('2 elements', () => {
      const arr = [
        [0, 'aa'],
        [1, 'bb'],
      ]

      const actual = replaceElementswithDashes(arr)
      const expected = [
        [0, '-'],
        [1, 'bb'],
      ]

      expect(actual).toStrictEqual(expected)
    })
    test('3 elements', () => {
      const arr = [
        [0, 'aa'],
        [1, 'bb'],
        [2, 'cc'],
      ]

      const actual = replaceElementswithDashes(arr)
      const expected = [
        [0, '-'],
        [1, 'bb'],
        [2, 'cc'],
      ]

      expect(actual).toStrictEqual(expected)
    })
    test('> 3 elements', () => {
      const arr = [
        [0, 'aa'],
        [1, 'bb'],
        [2, 'cc'],
        [3, 'dd'],
      ]

      const actual = replaceElementswithDashes(arr)
      const expected = [
        [0, '-'],
        [1, '-'],
        [2, 'cc'],
        [3, 'dd'],
      ]

      expect(actual).toStrictEqual(expected)
    })
  })

  test('bucket sort', () => {
    const arr = [
      [3, '1c'],
      [2, '1b'],
      [1, '1a'],
      [3, '2c'],
      [2, '2b'],
      [1, '2a'],
      [3, '3c'],
      [2, '3b'],
      [1, '3a'],
    ]

    const expected = [
      ['1a', '2a', '3a'],
      ['1b', '2b', '3b'],
      ['1c', '2c', '3c'],
    ]

    const actual = bucketSort(arr)

    expect(actual).toStrictEqual(expected)
  })

  test('convert to string', () => {
    const arr = [
      ['aa', 'bb'],
      ['cc', 'dd'],
      ['ee', 'ff'],
    ]

    const expected = 'aa bb cc dd ee ff'

    const actual = convertToString(arr)

    expect(actual).toBe(expected)
  })

  describe('sorting tests', () => {
    test('sort 1', () => {
      const arr = [
        [0, 'a'],
        [1, 'b'],
        [0, 'c'],
        [1, 'd'],
      ]

      const expected = '- c - d'
      const actual = sort(arr)

      expect(actual).toBe(expected)
    })

    test('sort 2', () => {
      const arr = [
        ['0', 'ab'],
        ['6', 'cd'],
        ['0', 'ef'],
        ['6', 'gh'],
        ['4', 'ij'],
        ['0', 'ab'],
        ['6', 'cd'],
        ['0', 'ef'],
        ['6', 'gh'],
        ['0', 'ij'],
        ['4', 'that'],
        ['3', 'be'],
        ['0', 'to'],
        ['1', 'be'],
        ['5', 'question'],
        ['1', 'or'],
        ['2', 'not'],
        ['4', 'is'],
        ['2', 'to'],
        ['4', 'the'],
      ]

      const expected =
        '- - - - - to be or not to be - that is the question - - - -'
      const actual = sort(arr)

      expect(actual).toBe(expected)
    })
  })
})
