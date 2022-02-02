const {
  biggerIsGreater,
  getSequenceStartIndex,
  swapPivot,
  reverseSequence,
} = require('./bigger_is_greater')

describe('bigger is greater tests', () => {
  describe('permutation tests', () => {
    test('string permutation 0', () => {
      const str = 'dhck'
      const expected = 'dhkc'

      const actual = biggerIsGreater(str)

      expect(actual).toBe(expected)
    })

    test('string permutation', () => {
      const str = 'hefg'
      const expected = 'hegf'

      const actual = biggerIsGreater(str)

      expect(actual).toBe(expected)
    })

    test('string permutation 1', () => {
      const str = 'ab'
      const expected = 'ba'

      const actual = biggerIsGreater(str)

      expect(actual).toBe(expected)
    })

    test('string permutation 2', () => {
      const str = 'ba'
      const expected = 'no answer'

      const actual = biggerIsGreater(str)

      expect(actual).toBe(expected)
    })

    test('string permutation 3', () => {
      const str = 'bb'
      const expected = 'no answer'

      const actual = biggerIsGreater(str)

      expect(actual).toBe(expected)
    })

    test('string permutation 4', () => {
      const str = 'fedcbabcd'
      const expected = 'fedcbabdc'

      const actual = biggerIsGreater(str)

      expect(actual).toBe(expected)
    })

    test('string permutation 5', () => {
      const str = 'zxvuutttrrrpoookiihhgggfdca'
      const expected = 'no answer'

      const actual = biggerIsGreater(str)

      expect(actual).toBe(expected)
    })
    test('string permutation 6', () => {
      const str = 'zzzayybbaa'
      const expected = 'zzzbaaabyy'

      const actual = biggerIsGreater(str)

      expect(actual).toBe(expected)
    })
  })

  describe('sequence tests', () => {
    test('string length === 1', () => {
      const arr = ['a']
      const expected = 0

      const actual = getSequenceStartIndex(arr)

      expect(actual).toBe(expected)
    })

    test('string length === 2 (pos 1)', () => {
      const arr = ['a', 'b']
      const expected = 1

      const actual = getSequenceStartIndex(arr)

      expect(actual).toBe(expected)
    })

    test('string length === 2 (pos 0)', () => {
      const arr = ['b', 'a']
      const expected = 0

      const actual = getSequenceStartIndex(arr)

      expect(actual).toBe(expected)
    })

    test('string length > 2 (pos 1)', () => {
      const arr = ['a', 'c', 'b']
      const expected = 1

      const actual = getSequenceStartIndex(arr)

      expect(actual).toBe(expected)
    })

    test('no sequence', () => {
      const arr = [100, 104, 99, 107]
      const expected = 3

      const actual = getSequenceStartIndex(arr)

      expect(actual).toBe(expected)
    })
  })

  describe('pivot tests', () => {
    test('1 element', () => {
      const arr = ['a']
      const expected = ['a']

      const actual = swapPivot(arr, 0)

      expect(actual).toStrictEqual(expected)
    })

    test('no pivot', () => {
      const arr = ['b', 'a']
      const expected = ['b', 'a']

      const actual = swapPivot(arr, 0)

      expect(actual).toStrictEqual(expected)
    })

    test('2 elements', () => {
      const arr = ['a', 'b']
      const expected = ['b', 'a']

      const actual = swapPivot(arr, 1)

      expect(actual).toStrictEqual(expected)
    })

    test('7 elements', () => {
      const arr = [0, 1, 2, 5, 3, 3, 0]
      const expected = [0, 1, 3, 5, 3, 2, 0]

      const actual = swapPivot(arr, 3)

      expect(actual).toStrictEqual(expected)
    })
  })

  describe('reverse tests', () => {
    test('reverse sequence test', () => {
      const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
      const expected = ['a', 'b', 'c', 'g', 'f', 'e', 'd']

      const actual = reverseSequence(arr, 3)

      expect(actual).toStrictEqual(expected)
    })
  })
})
