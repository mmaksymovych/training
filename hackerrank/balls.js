/*
PSEUDOCODE

- get sorted counts of every type
- get sorted sizes of every container
- compare

*/

function isPossibleToSort(container) {
  const sortedTypesCounts = getTypesSortedCounts(container)
  const sortedContainersSizes = getSortedContainersSizes(container)

  for (var i = 0; i < sortedTypesCounts.length; i++) {
    if (sortedTypesCounts[i] !== sortedContainersSizes[i]) {
      return 'Impossible'
    }
  }

  return 'Possible'
}

function getSortedContainersSizes(container) {
  return container
    .map((el) =>
      el.reduce((acc, num) => {
        return (acc += num)
      }, 0)
    )
    .sort((a, b) => a - b)
}

function getTypesSortedCounts(matrix) {
  const counts = []

  for (var container = 0; container < matrix.length; container++) {
    for (var col = 0; col < matrix[container].length; col++) {
      const el = matrix[container][col]

      const sortedEl = counts[col]
      sortedEl ? (counts[col] += el) : (counts[col] = el)
    }
  }

  return counts.sort((a, b) => a - b)
}

module.exports = {
  getTypesSortedCounts,
  isPossibleToSort,
}
