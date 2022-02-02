const {
  timeInWords,
  transformZeroToTwentyMinutes,
  transformTwentytoSixtyMinutes,
  buildMinutesString,
  TYPES,
  buildHoursString,
} = require('./time')

describe('convert time tests', () => {
  describe('time in words', () => {
    test('5:00', () => {
      const h = 5
      const m = 0

      const expected = "five o' clock"
      const actual = timeInWords(h, m)

      expect(actual).toBe(expected)
    })

    test('5:15', () => {
      const h = 5
      const m = 15

      const expected = 'quarter past five'
      const actual = timeInWords(h, m)

      expect(actual).toBe(expected)
    })

    test('5:35', () => {
      const h = 5
      const m = 30

      const expected = 'half past five'
      const actual = timeInWords(h, m)

      expect(actual).toBe(expected)
    })

    test('5:45', () => {
      const h = 5
      const m = 45

      const expected = 'quarter to six'
      const actual = timeInWords(h, m)

      expect(actual).toBe(expected)
    })

    test('11:25', () => {
      const h = 11
      const m = 25

      const expected = 'twenty five minutes past eleven'
      const actual = timeInWords(h, m)

      expect(actual).toBe(expected)
    })

    test('11:42', () => {
      const h = 11
      const m = 42

      const expected = 'eighteen minutes to twelve'
      const actual = timeInWords(h, m)

      expect(actual).toBe(expected)
    })
  })

  describe('hours transformation tests', () => {
    test('past type', () => {
      const h = 5
      const expected = 'five'
      const actual = buildHoursString(h, TYPES.PAST)

      expect(actual).toBe(expected)
    })

    test('to type', () => {
      const h = 5
      const expected = 'six'
      const actual = buildHoursString(h, TYPES.TO)

      expect(actual).toBe(expected)
    })

    test('to type 12 h', () => {
      const h = 12
      const expected = 'one'
      const actual = buildHoursString(h, TYPES.TO)

      expect(actual).toBe(expected)
    })
  })

  describe('minutes transformation tests', () => {
    test('0 - 10', () => {
      const actual1 = transformZeroToTwentyMinutes(1)
      const expected1 = 'one'

      const actual2 = transformZeroToTwentyMinutes(2)
      const expected2 = 'two'

      const actual3 = transformZeroToTwentyMinutes(3)
      const expected3 = 'three'

      const actual4 = transformZeroToTwentyMinutes(4)
      const expected4 = 'four'

      const actual5 = transformZeroToTwentyMinutes(5)
      const expected5 = 'five'

      const actual6 = transformZeroToTwentyMinutes(6)
      const expected6 = 'six'

      const actual7 = transformZeroToTwentyMinutes(7)
      const expected7 = 'seven'

      const actual8 = transformZeroToTwentyMinutes(8)
      const expected8 = 'eight'

      const actual9 = transformZeroToTwentyMinutes(9)
      const expected9 = 'nine'

      const actual10 = transformZeroToTwentyMinutes(10)
      const expected10 = 'ten'

      const actual11 = transformZeroToTwentyMinutes(11)
      const expected11 = 'eleven'

      const actual12 = transformZeroToTwentyMinutes(12)
      const expected12 = 'twelve'

      const actual13 = transformZeroToTwentyMinutes(13)
      const expected13 = 'thirteen'

      const actual14 = transformZeroToTwentyMinutes(14)
      const expected14 = 'fourteen'

      const actual15 = transformZeroToTwentyMinutes(15)
      const expected15 = 'fifteen'

      const actual16 = transformZeroToTwentyMinutes(16)
      const expected16 = 'sixteen'

      const actual17 = transformZeroToTwentyMinutes(17)
      const expected17 = 'seventeen'

      const actual18 = transformZeroToTwentyMinutes(18)
      const expected18 = 'eighteen'

      const actual19 = transformZeroToTwentyMinutes(19)
      const expected19 = 'nineteen'

      expect(actual1).toBe(expected1)
      expect(actual2).toBe(expected2)
      expect(actual3).toBe(expected3)
      expect(actual4).toBe(expected4)
      expect(actual5).toBe(expected5)
      expect(actual6).toBe(expected6)
      expect(actual7).toBe(expected7)
      expect(actual8).toBe(expected8)
      expect(actual9).toBe(expected9)
      expect(actual10).toBe(expected10)
      expect(actual11).toBe(expected11)
      expect(actual12).toBe(expected12)
      expect(actual13).toBe(expected13)
      expect(actual14).toBe(expected14)
      expect(actual15).toBe(expected15)
      expect(actual16).toBe(expected16)
      expect(actual17).toBe(expected17)
      expect(actual18).toBe(expected18)
      expect(actual19).toBe(expected19)
    })

    test('20 - 60', () => {
      const actual20 = transformTwentytoSixtyMinutes(20)
      const expected20 = 'twenty'

      const actual25 = transformTwentytoSixtyMinutes(25)
      const expected25 = 'twenty five'

      const actual54 = transformTwentytoSixtyMinutes(54)
      const expected54 = 'fifty four'

      expect(actual20).toBe(expected20)
      expect(actual25).toBe(expected25)
      expect(actual54).toBe(expected54)
    })
  })

  describe('build minutes string tests', () => {
    test('past quarter', () => {
      const m = 15
      const actual = buildMinutesString(m, TYPES.PAST)
      const expected = 'quarter'

      expect(actual).toBe(expected)
    })
    test('half', () => {
      const m = 30
      const actual = buildMinutesString(m, TYPES.PAST)
      const expected = 'half'

      expect(actual).toBe(expected)
    })
    test('to quarter', () => {
      const m = 45
      const actual = buildMinutesString(m, TYPES.TO)
      const expected = 'quarter'

      expect(actual).toBe(expected)
    })
    test('past', () => {
      const m = 28
      const actual = buildMinutesString(m, TYPES.PAST)
      const expected = 'twenty eight minutes'

      expect(actual).toBe(expected)
    })
    test('to', () => {
      const m = 43
      const actual = buildMinutesString(m, TYPES.TO)
      const expected = 'seventeen minutes'

      expect(actual).toBe(expected)
    })

    test('to', () => {
      const m = 1
      const actual = buildMinutesString(m, TYPES.PAST)
      const expected = 'one minute'

      expect(actual).toBe(expected)
    })
  })
})
