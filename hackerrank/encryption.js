/*
PSEUDOCODE

1. remove spaces
2. get sqrt
3. define number of rows and columns
4. Ensure rows*col > L
4. Eplit string into array of rows
5. Encode

*/

function encryptString(s) {
  const formattedString = removeSpacesFromString(s)
  const rowsAndCols = getRowsAndCols(formattedString)
  const matrix = getMatrix(formattedString, rowsAndCols.cols)
  const encrypted = encryptMatrix(matrix)

  return encrypted
}

function removeSpacesFromString(s) {
  return s.replace(/ /g, '')
}

function getRowsAndCols(s) {
  const length = s.length
  const sqrt = Math.sqrt(length)

  const rows = parseInt(sqrt)
  const cols = sqrt > rows ? rows + 1 : rows

  return {
    rows,
    cols,
  }
}

function verifyRowsAndCols(rows, cols, length) {
  return rows * cols >= length
}

function getMatrix(s, cols) {
  const length = s.length
  const step = cols

  const chunks = []

  for (var i = 0; i < length; i += step) {
    const str = s.slice(i, i + step)

    chunks.push(str)
  }

  return chunks
}

function encryptMatrix(matrix) {
  const cols = matrix[0].length

  let encryptedPhrase = ''

  for (var i = 0; i < cols; i++) {
    let encryptedWord = ''

    for (var j = 0; j < matrix.length; j++) {
      const letter = matrix[j][i]

      if (!letter) {
        break
      }

      encryptedWord += letter
    }

    encryptedPhrase += `${encryptedWord} `
  }

  return encryptedPhrase.trim()
}

module.exports = {
  removeSpacesFromString,
  getRowsAndCols,
  verifyRowsAndCols,
  getMatrix,
  encryptMatrix,
  encryptString,
}
