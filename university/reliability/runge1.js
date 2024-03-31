const _rungeKutta = require('runge-kutta')
const rungeKutta = _rungeKutta.default
const { func1 } = require('./data')
const { func2 } = require('./data_2')

const runge1Example = () => {
  const T = 0.2143,
    R = 1 / 14

  const dSIR = (t, y) => {
    return [-T * y[0] * y[1], (T * y[0] - R) * y[1], R * y[1]]
  }

  // Solve the system and log the result (reduced to the infection count).
  const res = rungeKutta(dSIR, [1, 0.1, 0], [0, 14], 1)
  const resMap = res.map((x) => x[1])

  return resMap
}

const runge1Lab = () => {
  const initial = Array(24).fill(0)
  initial[0] = 1

  // Solve the system and log the result (reduced to the infection count).
  const res = rungeKutta(func1, initial, [0, 1000], 1)

  const last = res[res.length - 1]

  const sum = last.reduce((acc, el) => acc + el, 0)

  console.log('sum', sum)
  console.log('last', last)

  return res
}

const runge2Lab = () => {
  const initial = Array(49).fill(0)
  initial[0] = 1

  // Solve the system and log the result (reduced to the infection count).
  const res = rungeKutta(func2, initial, [0, 1000], 1)

  const last = res[res.length - 1]

  const sum = last.reduce((acc, el) => acc + el, 0)

  console.log('last', last)
  console.log('sum 2', sum)

  return res
}

module.exports = {
  runge1Example,
  runge1Lab,
  runge2Lab,
}
