/*

1. group by char
2. group counts
3. sort counts( min to max) 
4. check if valid
    - if sorted counts length > 2 - NO VALID
    - if sorted[1]-sorted[2] 
2. find if invalid exists
3. return yes or no
*/

function checkString(s) {
  const charGroups = groupByChar(s)
  const countsGroups = groupByCounts(charGroups)

  const countsArray = Object.entries(countsGroups)

  if (countsArray.length === 1) {
    return 'YES'
  }

  if (countsArray.length > 2) {
    return 'NO'
  }

  const sortedCountsArray = sortCounts(countsArray)

  const isValid = checkIfValid(sortedCountsArray)

  return isValid
}

function groupByChar(str) {
  return str.split('').reduce((acc, el) => {
    return {
      ...acc,
      [el]: acc[el] ? (acc[el] += 1) : 1,
    }
  }, {})
}

function groupByCounts(grouped) {
  return Object.values(grouped).reduce((acc, el) => {
    return {
      ...acc,
      [el]: acc[el] ? (acc[el] += 1) : 1,
    }
  }, {})
}

function sortCounts(arr) {
  return arr.sort(
    ([a, charsCountA], [b, charsCountB]) => charsCountB - charsCountA
  )
}

function checkIfValid(sortedCountsArr) {
  if (sortedCountsArr[1][1] > 1) {
    return 'NO'
  }

  if (sortedCountsArr[1][0] - sortedCountsArr[0][0] > 1) {
    return 'NO'
  }

  return 'YES'
}

module.exports = {
  groupByChar,
  groupByCounts,
  sortCounts,
  checkIfValid,
  checkString,
}
