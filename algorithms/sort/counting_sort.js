/*
1. create array with counts by index
2. modify array - every index stores sum of prev count - e.g. i = i + [i-1]
3. rotate clockwise (arr.unshift())
4. place elements
    - get element from unsorted array
    - get value from shifted array by index
    - calculate index in sorted array - e.g. i = value + count
    - update element count
*/

function sort(arr) {
  const counts = getArrayWithCounts(arr)
  const sum = sumCounts(counts)
  const shifted = moveArray(sum)
  const sorted = placeElements(arr, shifted)

  return sorted
}

function getArrayWithCounts(arr) {
  const counts = arr.reduce((acc, number) => {
    if (number > acc.length) {
      acc.length = number
    }
    acc[number] = acc[number] ? acc[number] + 1 : 1

    return acc
  }, [])

  return Array.from(counts, (item) => item || 0)
}

function sumCounts(arr) {
  return arr.reduce((acc, el, i) => {
    if (i === 0) {
      return [el]
    }

    const prev = acc[i - 1]
    acc[i] = prev + el

    return acc
  }, [])
}

function moveArray(arr) {
  arr.unshift(0)
  return arr
}

function placeElements(array, shiftedCounts) {
  const sortedArray = []
  const counts = {}

  for (el of array) {
    const count = counts[el] || 0

    const position = shiftedCounts[el] + count
    sortedArray[position] = el

    counts[el] = count + 1
  }

  return sortedArray
}

module.exports = {
  sort,
  getArrayWithCounts,
  sumCounts,
  moveArray,
  placeElements,
  sort,
}
