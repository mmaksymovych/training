/**
 * PSEUDO CODE
 *
 * 1. Find all occurences of pattern start
 * 2. Function that verifies full pattern
 *
 *
 */

function hasMatch(string, patternString, index) {
  const str = string.slice(index, patternString.length + index)

  return str === patternString
}

function findPatternOccurences(G, P) {
  for (let row = 0; row < G.length; row++) {
    const patternString = P[0]
    const string = G[row]

    for (let i = 0; i < string.length; i++) {
      if (hasMatch(string, patternString, i)) {
        const patternVerified = verifyFullPattern(G, P, row, i)

        if (patternVerified) {
          return 'YES'
        }
      }
    }
  }

  return 'NO'
}

function verifyFullPattern(matrix, pattern, row, index) {
  let result = true

  for (let i = 1; i < pattern.length; i++) {
    const patternString = pattern[i]

    const matrixString = matrix[row + i]

    if (!matrixString) {
      result = false
      break
    }

    const matrixPatternString = matrixString.slice(
      index,
      patternString.length + index
    )

    if (matrixPatternString !== patternString) {
      result = false
      break
    }
  }

  return result
}

module.exports = {
  verifyFullPattern,
  findPatternOccurences,
  hasMatch,
}
