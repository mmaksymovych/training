const { bucketSort } = require('./bucket')

describe('test', () => {
  it('test', () => {
    //var randomNumbers = [2, 5, 1, 7, 4, 3]
    var randomNumbers = [1, 7]

    var sorted = bucketSort(randomNumbers)
    console.log(sorted)
  })
})
