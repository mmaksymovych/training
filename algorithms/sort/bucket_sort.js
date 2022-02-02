const bucket_sort = (array) => {
  let sorted_array = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      console.log('Array contains negative numbers. Stop execution')
      return
    }
    if (sorted_array.length < array[i]) {
      sorted_array.length = array[i]
    }
    sorted_array[array[i]] = array[i]
  }

  return sorted_array.filter(() => true)
}

function sortWithNegative(arr) {
  const negative = arr.filter((el) => el < 0).map((el) => el * -1)
  const positive = arr.filter((el) => el >= 0)

  const sortedNegative = bucket_sort(negative)
  const sortedPositive = bucket_sort(positive)

  const sortedNegativeReversed = sortedNegative.reverse()

  const sortedN = sortedNegativeReversed.map((el) => el * -1)

  const result = sortedN.concat(sortedPositive)

  return result
}

module.exports = {
  sortWithNegative,
}
