function aitkenInterpolation(x, y, x_target) {
  const n = x.length

  // Initialize the Aitken table
  const table = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const xd = []

  // Fill in the first column with known function values
  for (let i = 0; i < n; i++) {
    table[i][0] = y[i]
    xd[i] = x[i] - x_target
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const res = (table[i][i] * xd[j] - table[j][i] * xd[i]) / (xd[j] - xd[i])
      const rounded = Number(res.toFixed(4))
      table[j][i + 1] = rounded
    }
  }

  // interpolated value
  const interpolated = table[n - 1][n - 1]

  // round to 4 decimal places
  return Number(interpolated.toFixed(4))
}

module.exports = {
  aitkenInterpolation,
}
