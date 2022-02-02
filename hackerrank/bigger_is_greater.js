function biggerIsGreater2(w) {
  w = w.split('')
  // Find non-increasing suffix
  let i = w.length - 1
  while (i > 0 && w[i - 1] >= w[i]) {
    i--
  }

  if (i <= 0) return 'no answer'

  // Find the rightmost successor to pivot in the suffix
  let j = w.length - 1
  while (w[j] <= w[i - 1]) j--

  // Swap the pivot with the rightmost character
  const temp = w[i - 1]
  w[i - 1] = w[j]
  w[j] = temp

  // Reverse suffix
  j = w.length - 1
  while (i < j) {
    const temp = w[i]
    w[i] = w[j]
    w[j] = temp
    i++
    j--
  }

  return w.join('')
}

function biggerIsGreater(str) {
  if (str.length === 1) {
    return 'no answer'
  }

  const arr = str.split('')

  let sequenceStartIndex = getSequenceStartIndex(arr)

  if (sequenceStartIndex === 0) {
    return 'no answer'
  }

  // swap pivot
  const swapped = swapPivot(arr, sequenceStartIndex)

  const reversed = reverseSequence(swapped, sequenceStartIndex)

  return reversed.join('')
}

function getSequenceStartIndex(arr) {
  let sequenceStartIndex = arr.length - 1

  while (
    sequenceStartIndex > 0 &&
    arr[sequenceStartIndex - 1] >= arr[sequenceStartIndex]
  ) {
    sequenceStartIndex--
  }

  return sequenceStartIndex
}

function swapPivot(arr, sequenceIndex) {
  if (arr.length === 1 || sequenceIndex === 0) {
    return arr
  }

  const pivotIndex = sequenceIndex - 1
  let successorIndex = arr.length - 1

  const swapped = [...arr]

  while (arr[successorIndex] <= arr[pivotIndex]) {
    successorIndex--
  }

  const temp = swapped[pivotIndex]

  swapped[pivotIndex] = swapped[successorIndex]
  swapped[successorIndex] = temp

  return swapped
}

function reverseSequence(arr, sequenceStartIndex) {
  const array = [...arr]

  const sequence = arr.slice(sequenceStartIndex, array.length)
  const reversed = sequence.reverse()

  array.splice(sequenceStartIndex, array.length, ...reversed)

  return array
}

module.exports = {
  biggerIsGreater,
  getSequenceStartIndex,
  swapPivot,
  reverseSequence,
}
