const l1 = 0.0005
const l2 = 0.0004
const l3 = 0.0003
const l4 = 0.00025
const l5 = 0.005

const start = 0
const end = 100

const func1 = (t, P) => {
  const e1 = -(l1 + l2 + l3 + l4 + l5) * P[0]
  const e2 = l1 * P[0] - (l2 + l3 + l4 + l5) * P[1]
  const e3 = l2 * P[0] - (l1 + l3 + l4 + l5) * P[2]
  const e4 = l3 * P[0] - (l1 + l2 + l4 + l5) * P[3]
  const e5 = l4 * P[0] - (l1 + l2 + l3 + l5) * P[4]
  const e6 = l5 * P[0]
  const e7 = l2 * P[1] + l1 * P[2] - (l3 + l4 + l5) * P[6]
  const e8 = l3 * P[1] + l1 * P[3]
  const e9 = l4 * P[1] + l1 * P[4] - (l2 + l3 + l5) * P[8]
  const e10 = l5 * P[1]
  const e11 = l3 * P[2] + l2 * P[3] - (l1 + l4 + l5) * P[10]
  const e12 = l4 * P[2] + l2 * P[4]
  const e13 = l5 * P[2]
  const e14 = l3 * P[4] + l4 * P[3] - (l1 + l2 + l5) * P[13]
  const e15 = l5 * P[3]
  const e16 = l5 * P[4]
  const e17 = l3 * P[6] + l1 * P[10]
  const e18 = l4 * P[6] + l2 * P[8]
  const e19 = l5 * P[6]
  const e20 = l3 * P[8] + l1 * P[13]
  const e21 = l5 * P[8]
  const e22 = l4 * P[10] + l5 * P[13]
  const e23 = l5 * P[10]
  const e24 = l5 * P[13]

  return [
    e1,
    e2,
    e3,
    e4,
    e5,
    e6,
    e7,
    e8,
    e9,
    e10,
    e11,
    e12,
    e13,
    e14,
    e15,
    e16,
    e17,
    e18,
    e19,
    e20,
    e21,
    e22,
    e23,
    e24,
  ]
}

module.exports = {
  start,
  end,
  func1,
}
