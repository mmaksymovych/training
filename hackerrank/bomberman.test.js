const { bomberMan, setBombs, explode, convertString } = require('./bomberman')

describe('bomberman tests', () => {
  describe('bomberman', () => {
    test('bomberman test 0', () => {
      const grid = ['OO.O.', '.OO..']

      const expected = ['.....', '....O']

      const actual = bomberMan(9, grid)
      expect(actual).toStrictEqual(expected)
    })

    test('bomberman test 1', () => {
      const grid = [
        '.......',
        '...O...',
        '....O..',
        '.......',
        'OO.....',
        'OO.....',
      ]

      const expected = [
        'OOO.OOO',
        'OO...OO',
        'OOO...O',
        '..OO.OO',
        '...OOOO',
        '...OOOO',
      ]

      const actual = bomberMan(3, grid)
      expect(actual).toStrictEqual(expected)
    })

    test('bomberman test 2', () => {
      const grid = [
        'OOOO.O.O...OOO.O.O........O.OOO.O.....OO..O..O...OOO....O.OOO....O...O....O..O.O.O.....OOOO.O...O....OO.O...........O.O..O.O..O...OO.OOO......O........O...O....O.O..O....O.......OOOO.O..........OO.O',
      ]

      const expected = [
        '.........O.........OOOOOO.........OOO..........O.....OO.......OO...O...OO..........OOO........O...OO......OOOOOOOOO.............O........OOOO...OOOOOO...O...OO........OO...OOOOO........OOOOOOOO.....',
      ]

      const actual = bomberMan(253764589, grid)
      expect(actual).toStrictEqual(expected)
    })

    test('bomberman test 3 (failing)', () => {
      const grid = [
        'O...OO.OO...OOO.OO......OO.O..OO..O.O......O......OO....O...O.......O.OO..OO.OO.O...........O...OOOO.OO.OO.O.OO......O...O......O..O...O...O..OO........O.O.........O.....OOO......O..O.O...O.......',
        '..OO.O......O..O.....O.O..O...O....OOO.O.OO.OO.........OO....O.OOO.OO.O..OO...O......O.O...O...OO.....O.............O...O..OO....OO.O.O...O..OO....O.OO.O.O.OO.OOO.......O..O.OO......O.....OO..O...',
      ]

      const expected = [
        'OOOOOOOOO...OOOOOO......OOOO.OOO..OOO.....OOO.....OO....O...O...O...OOOOOOOO.OOOO...........O...OOOO.OOOOO.O.OO......O...OOO....OOOO...O...OOOOO......OOOOOOO...O...O.....OOOOO....O.OOOO...O.......',
        'OOOOOOOO....OOOOO....O.OOOO...O....OOO.O.OOOOO.........OO....O.OOO.OOOOOOOO...OO.....O.O...O...OOOO...OOO...........O...OOOOO....OOOO.O...OOOOO....O.OOOOOOOOO.OOO.......OOOOOOO......OO....OO..O...',
      ]

      const actual = bomberMan(253764589, grid)
      expect(actual).toStrictEqual(expected)
    })
  })

  describe('set bombs tests', () => {
    test('set bombs test', () => {
      const grid = [
        '.......',
        '...O...',
        '....O..',
        '...O...',
        '.......',
        'OO.....',
        'OO.....',
      ]
      const gridMetadata = {}

      const expected = [
        'OOOOOOO',
        'OOOOOOO',
        'OOOOOOO',
        'OOOOOOO',
        'OOOOOOO',
        'OOOOOOO',
        'OOOOOOO',
      ]

      const actual = setBombs(grid, gridMetadata, 0)

      expect(actual).toStrictEqual(expected)
    })

    test('set bombs test 2', () => {
      const grid = ['...O..', 'O.....', 'OOOOOO']
      const gridMetadata = {}

      const expected = ['OOOOOO', 'OOOOOO', 'OOOOOO']

      const actual = setBombs(grid, gridMetadata, 0)

      expect(actual).toStrictEqual(expected)
    })

    test('set metadata test', () => {
      const grid = ['OO....', '..OO..', '....OO']
      const gridMetadata = {}

      const expected = {
        10: 0,
        11: 0,
        14: 0,
        15: 0,
        20: 0,
        21: 0,
        22: 0,
        23: 0,
        '02': 0,
        '03': 0,
        '04': 0,
        '05': 0,
      }

      setBombs(grid, gridMetadata, 0)

      expect(gridMetadata).toStrictEqual(expected)
    })
  })

  describe('make explosion tests', () => {
    test('explode', () => {
      const grid = [
        '.......',
        '...O...',
        '....O..',
        '.......',
        'OO.....',
        'OO.....',
      ]

      const expected = [
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
        '.......',
      ]
      explode(grid, {}, 0)

      expect(grid).toStrictEqual(expected)
    })
  })
})
