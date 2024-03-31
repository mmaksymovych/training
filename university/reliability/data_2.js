const l1 = 0.0005
const l2 = 0.0004
const l3 = 0.0003
const l4 = 0.00025
const l5 = 0.005

const m1 = 0.0005
const m2 = 0.0004
const m3 = 0.0003
const m4 = 0.00025
const m5 = 0.005

const start = 0
const end = 100

const func2 = (t, P) => {
  const e1 =
    -(l1 + l2 + l3 + l4 + l5) * P[0] +
    m1 * P[0] +
    m2 * P[1] +
    m3 * P[2] +
    m4 * P[3]

  const e2 =
    -(l2 + l3 + l4 + l5 + m1) * P[1] + l1 * P[0] + m2 * P[6] + m4 * P[8]

  const e3 = -(l1 + l3 + l4 + l5 + m2) * P[2] + l2 * P[0] + m3 * P[10]
  const e4 = -(l1 + l2 + l4 + l5 + m3) * P[3] + l3 * P[0] + m4 * P[14]
  const e5 = -(l1 + l2 + l3 + l5 + m4) * P[4] + l4 * P[0]
  const e6 = -m5 * P[5] + l5 * P[0]

  const e7 = -(l3 + l4 + l5 + m2) * P[6] + l2 * P[1] + l1 * P[2]
  const e8 = -m1 * P[7] + l3 * P[1] + l1 * P[3]
  const e9 = -(l3 + l5 + m4) * P[8] + l4 * P[1] + l1 * P[4]
  const e10 = -(l2 + m5) * P[9] + l5 * P[1]
  const e11 = -(l2 + l3 + l5 + m3) * P[10] + l3 * P[2] + l2 * P[3]
  const e12 = -m2 * P[11] + l3 * P[2] + l4 * P[2] + l2 * P[4]
  const e13 = -m5 * P[12] + l5 * P[2]
  const e14 = -(l1 + l2 + l5 + m4) * P[13] + l4 * P[3] + l3 * P[4]
  const e15 = -m5 * P[14] + l5 * P[3]
  const e16 = -m5 * P[15] + l5 * P[4]
  const e17 = -(l1 + l2 + l3 + l4 + l5) * P[16] + m5 * P[5]

  const e18 = -m3 * P[17] + l3 * P[6] + l1 * P[10]
  const e19 = -m4 * P[18] + l4 * P[6] + l2 * P[8]
  const e20 = -m5 * P[19] + l2 * P[6] + l2 * P[9]

  const e21 = -(l1 + l2 + l4 + l5) * P[20] + m1 * P[7] + m5 * P[14] + m3 * P[16]
  const e22 = -(l1 + l2 + l4 + l5) * P[21] + l3 * P[8] + l1 * P[13]
  const e23 = -m5 * P[22] + l5 * P[8]
  const e24 = -(l2 + l3 + l4 + l5) * P[23] + m5 * P[8] + m1 * P[16]
  const e25 = -m2 * P[24] + l4 * P[10] + l2 * P[13]
  const e26 = -m5 * P[25] + l5 * P[10]
  const e27 = -(l1 + l2 + l3 + l5) * P[26] + m2 * P[11] + m4 * P[16]
  const e28 = -(l1 + l3 + l5) * P[27] + m5 * P[12] + m2 * P[16]
  const e29 = -m5 * P[28] + l5 * P[13]
  const e30 = -(l1 + l2 + l5) * P[29] + m5 * P[17]
  const e31 = m5 * P[16]
  const e32 =
    -(l3 + l4 + l5) * P[31] +
    m3 * P[17] +
    m4 * P[18] +
    m5 * P[19] +
    l1 * P[27] +
    l2 * P[23]
  const e33 = l1 * P[20] + l3 * P[23]
  const e34 = -(l1 + l4 + l5) * P[33] + m5 * P[25] + m3 * P[27]
  const e35 =
    -(l1 + l2 + l5) * P[34] + l4 * P[20] + m2 * P[24] + m5 * P[28] + l3 * P[29]

  const e36 = l5 * P[20]
  const e37 =
    -(l2 + l3 + l5) * P[36] + m5 * P[22] + l4 * P[23] + l1 * P[26] + l1 * P[29]
  const e38 = l5 * P[23]
  const e39 = l2 * P[26]
  const e40 = l5 * P[26]
  const e41 = l4 * P[27] + l2 * P[29]
  const e42 = l5 * P[27]
  const e43 = l3 * P[31] + l3 * P[33]
  const e44 = l4 * P[31] + l2 * P[36]
  const e45 = l5 * P[31]
  const e46 = l4 * P[33] + l2 * P[34]
  const e47 = l5 * P[33]
  const e48 = l1 * P[34] + l3 * P[36]
  const e49 = l5 * P[34]
  const e50 = l5 * P[36]

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
    e25,
    e26,
    e27,
    e28,
    e29,
    e30,
    e31,
    e32,
    e33,
    e34,
    e35,
    e36,
    e37,
    e38,
    e39,
    e40,
    e41,
    e42,
    e43,
    e44,
    e45,
    e46,
    e47,
    e48,
    e49,
    e50,
  ]
}

module.exports = {
  start,
  end,
  func2,
}
