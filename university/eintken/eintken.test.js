const { aitkenInterpolation } = require('./eintken')

describe('eintken', () => {
  it('[1, 2, 3, 4]', () => {
    const x = [1, 2, 3, 4] // Known x values
    const y = [2, 3, 5, 10] // Corresponding known y values

    const x_target = 2.5 // Target x value for interpolation

    const interpolatedValue = aitkenInterpolation(x, y, x_target)

    expect(interpolatedValue).toBe(3.75)
  })

  it('[1.4, 1.5, 1.6, 1.7]', () => {
    const x = [1.4, 1.5, 1.6, 1.7] // Known x values
    const y = [1.833, 1.9365, 2.0396, 2.1424] // Corresponding known y values

    const x_target = 1.52 // Target x value for interpolation

    const interpolatedValue = aitkenInterpolation(x, y, x_target)

    expect(interpolatedValue).toBe(1.9572)
  })
})
