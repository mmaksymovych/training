// InsertionSort to be used within bucket sort
// Define the number of buckets to use
const NUM_BUCKETS = 4

// Define the function to generate random numbers

// Define the bucket sort function
function bucketSort(numbers) {
  // Find the minimum and maximum values in the input array
  const minValue = Math.min(...numbers)
  const maxValue = Math.max(...numbers)

  // Determine the range of values and the size of each bucket
  const range = maxValue - minValue
  const bucketSize = Math.ceil(range / NUM_BUCKETS)

  // Divide the input array into buckets
  const buckets = new Array(NUM_BUCKETS)
  for (let i = 0; i < NUM_BUCKETS; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i]
    const bucketIndex = Math.floor((value - minValue) / bucketSize)
    buckets[bucketIndex].push(value)
  }

  // Sort each bucket using insertion sort
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i])
  }

  // Concatenate the sorted buckets
  let sortedNumbers = []
  for (let i = 0; i < buckets.length; i++) {
    sortedNumbers = sortedNumbers.concat(buckets[i])
  }

  // Return the sorted array
  return sortedNumbers
}

// Define the insertion sort function
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
}

module.exports = {
  bucketSort,
}
