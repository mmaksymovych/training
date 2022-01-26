const {
  removeSpacesFromString,
  getRowsAndCols,
  verifyRowsAndCols,
  getMatrix,
  encryptMatrix,
  encryptString,
} = require('./encryption')

describe('encryption tests', () => {
  test('encrypt string', () => {
    const str =
      'if man was meant to stay on the ground god would have given us roots'

    const encrypted = encryptString(str)

    const expected =
      'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau'

    expect(expected).toBe(encrypted)
  })

  test('remove spaces from string', () => {
    const s = 'hello world. this is string with spaces!'

    const withoutSpaces = removeSpacesFromString(s)

    expect(withoutSpaces).toBe('helloworld.thisisstringwithspaces!')
  })

  describe('rows and cols tests', () => {
    test('same rows and cols', () => {
      const s = 'aaaaaaaaa'

      const rowsAndCols = getRowsAndCols(s)

      expect(rowsAndCols.rows).toBe(3)
      expect(rowsAndCols.cols).toBe(3)
    })

    test('more cols then rows', () => {
      const s = 'aaaaaaaaaa'

      const rowsAndCols = getRowsAndCols(s)

      expect(rowsAndCols.rows).toBe(3)
      expect(rowsAndCols.cols).toBe(4)
    })

    test('verify rows and cols (true)', () => {
      const rows = 3
      const cols = 4
      const length = 9

      const isValid = verifyRowsAndCols(rows, cols, length)

      expect(isValid).toBe(true)
    })

    test('verify rows and cols (true - equal)', () => {
      const rows = 3
      const cols = 4
      const length = 12

      const isValid = verifyRowsAndCols(rows, cols, length)

      expect(isValid).toBe(false)
    })

    test('verify rows and cols (false)', () => {
      const rows = 3
      const cols = 4
      const length = 13

      const isValid = verifyRowsAndCols(rows, cols, length)

      expect(isValid).toBe(false)
    })
  })

  describe('matrix tests', () => {
    test('should return matrix (3*3 9 elements)', () => {
      const s = 'aaabbbccc'

      const rowsAndCols = getRowsAndCols(s)
      const matrix = getMatrix(s, rowsAndCols.cols, rowsAndCols.rows)

      const expected = ['aaa', 'bbb', 'ccc']

      expect(matrix).toStrictEqual(expected)
    })

    test('should return matrix (4*3 11 elements)', () => {
      const s = 'aaabbbcccdd'

      const rowsAndCols = getRowsAndCols(s)
      const matrix = getMatrix(s, rowsAndCols.cols, rowsAndCols.rows)

      const expected = ['aaab', 'bbcc', 'cdd']

      expect(matrix).toStrictEqual(expected)
    })
  })

  describe('matrix encryption tests', () => {
    test('encrypt matrix (3*3 9 elements)', () => {
      const matrix = ['aaa', 'bbb', 'ccc']

      const encrypted = encryptMatrix(matrix)

      const expected = 'abc abc abc'

      expect(encrypted).toBe(expected)
    })

    test('encrypt matrix (4*3 11 elements)', () => {
      const matrix = ['aaab', 'bbcc', 'cdd']

      const encrypted = encryptMatrix(matrix)

      const expected = 'abc abd acd bc'

      expect(encrypted).toBe(expected)
    })
  })
})
