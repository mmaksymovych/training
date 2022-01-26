/*
1. replace half elements with dashes
2. bucket sort

*/

function sort(arr) {
  const replacedWithDashes = replaceElementswithDashes(arr)
  const sorted = bucketSort(replacedWithDashes)
  const str = convertToString(sorted)

  return str
}

function replaceElementswithDashes(arr) {
  if (arr.length === 1) {
    return arr
  }

  for (let i = 0; i < parseInt(arr.length / 2); i++) {
    arr[i][1] = '-'
  }

  return arr
}

function bucketSort(unsortedArr) {
  const sortedArr = []

  unsortedArr.forEach((el) => {
    const [index, value] = el

    const sortedArrEl = sortedArr[index]

    if (sortedArrEl) {
      sortedArrEl.push(value)
    } else {
      sortedArr[index] = [value]
    }
  })

  return Array.from(sortedArr).filter((el) => el)
}

function convertToString(flattenArr) {
  return flattenArr.flat().join(' ')
}

module.exports = {
  replaceElementswithDashes,
  bucketSort,
  convertToString,
  sort,
}
