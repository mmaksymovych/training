const {
  verifyFullPattern,
  findPatternOccurences,
  hasMatch,
} = require('./grid_search')

describe('grid search tests', () => {
  describe('pattern verification tests', () => {
    test('should verify full pattern (true)', () => {
      const matrix = [
        '112121212',
        '111255564',
        '441447899',
        '113456722',
        '112121212',
      ]

      const pattern = ['12555', '14478', '34567']

      const expected = true

      const actual = verifyFullPattern(matrix, pattern, 1, 2)

      expect(actual).toBe(expected)
    })

    test('should verify full pattern (false)', () => {
      const matrix = ['112121212', '111255564']

      const pattern = ['12555', '14478', '34567']

      const expected = false

      const actual = verifyFullPattern(matrix, pattern, 1, 2)

      expect(actual).toBe(expected)
    })
  })

  describe('find pattern tests', () => {
    it('should find pattern', () => {
      const array = [
        '7283455864',
        '6731158619',
        '8988242643',
        '3830589324',
        '2229505813',
        '5633845374',
        '6473530293',
        '7053106601',
        '0834282956',
        '4607924137',
      ]

      const pattern = ['9505', '3845', '3530']

      const actual = findPatternOccurences(array, pattern)
      const expected = 'YES'

      expect(actual).toBe(expected)
    })

    it('should find pattern 2', () => {
      const array = [
        '400453592126560',
        '114213133098692',
        '474386082879648',
        '522356951189169',
        '887109450487496',
        '252802633388782',
        '502771484966748',
        '075975207693780',
        '511799789562806',
        '404007454272504',
        '549043809916080',
        '962410809534811',
        '445893523733475',
        '768705303214174',
        '650629270887160',
      ]

      const pattern = ['99', '99']

      const actual = findPatternOccurences(array, pattern)
      const expected = 'NO'

      expect(actual).toBe(expected)
    })

    it('should find pattern 3', () => {
      const array = ['123412', '561212', '123634', '781288']

      const pattern = ['12', '34']

      const actual = findPatternOccurences(array, pattern)
      const expected = 'YES'

      expect(actual).toBe(expected)
    })

    it('should find pattern 4', () => {
      const array = [
        '111111111111111',
        '111111111111111',
        '111111011111111',
        '111111111111111',
        '111111111111111',
      ]

      const pattern = ['11111', '11111', '11110']

      const actual = findPatternOccurences(array, pattern)
      const expected = 'YES'

      expect(actual).toBe(expected)
    })

    it('should not find pattern', () => {
      const array = ['7283455864', '6731158619']

      const pattern = ['9505', '3845', '3530']

      const actual = findPatternOccurences(array, pattern)
      const expected = 'NO'

      expect(actual).toBe(expected)
    })
  })

  describe('has match tests', () => {
    it('has match (false)', () => {
      const string = 'ssssshello'
      const pattern = 'hello'

      const actual = hasMatch(string, pattern, 0)
      const expected = false

      expect(actual).toBe(expected)
    })

    it('has match (true)', () => {
      const string = 'ssssshello'
      const pattern = 'hello'

      const actual = hasMatch(string, pattern, 5)
      const expected = true

      expect(actual).toBe(expected)
    })

    it('has match with duplicates (true)', () => {
      const string = 'hellohello'
      const pattern = 'hello'

      const actual = hasMatch(string, pattern, 0)
      const expected = true

      expect(actual).toBe(expected)
    })

    it('has match with duplicates (second dup - true)', () => {
      const string = 'hellohello'
      const pattern = 'hello'

      const actual = hasMatch(string, pattern, 5)
      const expected = true

      expect(actual).toBe(expected)
    })
  })
})
