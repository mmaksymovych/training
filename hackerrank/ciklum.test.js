const { add } = require('./ciklum')

describe('describe', () => {
  test('test', () => {
    const actual = add(2, 1)
    const expected = 3

    expect(actual).toBe(expected)
  })
})
