var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8, 11]

function quickSort(array) {
  if (array.length == 0) return []

  var left = []
  var right = []
  var el = array[0]

  for (var i = 1; i < array.length; i++) {
    if (array[i] < el) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat(el, quickSort(right))
}

const sorted = quickSort(array)

console.log(sorted)
