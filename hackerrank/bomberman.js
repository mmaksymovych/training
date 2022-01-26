function bomberMan(n, grid) {
  const gridMetadata = {}

  let limit = n

  if (limit > 6) {
    limit = limit % 2 > 0 ? 7 : 6
  }

  for (let sec = 0; sec <= limit; sec++) {
    console.log('iteration - ', sec)

    if (sec >= 2) {
      sec % 2 === 0
        ? setBombs(grid, gridMetadata, sec)
        : explode(grid, gridMetadata, sec)
    }
  }

  return grid
}

function setBombs(grid, gridMetadata, sec) {
  const bombChar = 'O'
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    let str = grid[i].split('')

    for (let j = 0; j < str.length; j++) {
      const isBomb = str[j] === bombChar

      if (!isBomb) {
        count++
        str[j] = bombChar
        gridMetadata[`${i}${j}`] = sec
      }
    }

    grid[i] = str.join('')
  }

  console.log('set bombs - ', count)

  return grid
}

function explode(grid, gridMetadata, sec) {
  console.log('explode')
  const bombChar = 'O'

  const forExplosion = {}

  for (let i = 0; i < grid.length; i++) {
    let str = grid[i].split('')

    for (let j = 0; j < str.length; j++) {
      const isBomb = str[j] === bombChar

      if (isBomb) {
        const bombTimeSec = gridMetadata[`${i}${j}`]

        const diff = bombTimeSec ? sec - bombTimeSec : 5

        if (diff >= 3) {
          findBombsForExplosion(grid, i, j, forExplosion)
        }
      }
    }
  }

  explodeBombs(forExplosion, grid)
}

function findBombsForExplosion(grid, i, j, forExplosion) {
  // previous row
  if (i !== 0) {
    saveMetadata(forExplosion, i - 1, j)
  }

  // current row
  saveMetadata(forExplosion, i, j)
  if (j !== 0) {
    saveMetadata(forExplosion, i, j - 1)
  }
  if (j !== grid[i].length - 1) {
    saveMetadata(forExplosion, i, j + 1)
  }

  //next row
  if (i !== grid.length - 1) {
    saveMetadata(forExplosion, i + 1, j)
  }
}

function explodeBombs(forExplosion, grid) {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    const str = grid[i]

    const replaced = str
      .split('')
      .map((el, index) => {
        if (forExplosion[i]) {
          if (forExplosion[i][index]) {
            count++
            return '.'
          }
        }

        return el
      })
      .join('')

    grid[i] = replaced
  }

  console.log('exploded - ', count)
}

function saveMetadata(forExplosion, index, j) {
  const current = forExplosion[index]

  if (current) {
    current[j] = true
  } else {
    forExplosion[index] = {}
    forExplosion[index][j] = true
  }
}

module.exports = {
  bomberMan,
  setBombs,
  explode,
}
