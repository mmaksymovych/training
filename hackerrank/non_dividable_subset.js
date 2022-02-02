function nonDivisibleSubset(k, s) {
  if (k === 0 || k === 1) {
    return 1
  }

  let count = 0

  const remainders = getRemaindersWithCounts(s, k)

  for (let remainder = 0; remainder < k; remainder++) {
    const remainderCount = remainders[remainder]

    if (!remainderCount) {
      continue
    }

    const diff = k - remainder

    if (diff === remainder) {
      count += 1
      delete remainders[remainder]
      continue
    }

    if (remainder === 0) {
      count += 1
      delete remainders[remainder]
      continue
    }

    const diffCount = remainders[diff]

    if (diffCount) {
      const remainderCountIsBigger = remainderCount > diffCount

      count += remainderCountIsBigger ? remainderCount : diffCount
    } else {
      count += remainderCount
    }

    delete remainders[remainder]
    delete remainders[diff]
  }

  return count
}

function getRemaindersWithCounts(s, k) {
  return s.reduce((acc, number) => {
    const remainder = number % k

    const exists = acc[remainder]

    return {
      ...acc,
      [remainder]: exists ? (acc[remainder] += 1) : 1,
    }
  }, {})
}

function getSubsetArrayCount(remainders, k, counts) {
  let count = 0

  for (let i = 0; i < remainders.length; i++) {
    if (Object.keys(counts).length === 0) {
      break
    }

    const remainder = remainders[i]
    const remainderCount = counts[remainder]

    if (!remainderCount) {
      continue
    }

    const diff = k - remainder

    if (diff === remainder) {
      count += 1
      delete counts[remainder]
      continue
    }

    if (remainder === 0) {
      count += 1
      delete counts[remainder]
      continue
    }

    const diffCount = counts[diff]

    if (diffCount) {
      const remainderCountIsBigger = remainderCount > diffCount

      count += remainderCountIsBigger ? remainderCount : diffCount
    } else {
      count += remainderCount
    }

    delete counts[remainder]
    delete counts[diff]
  }

  return count
}

function getRemainders(arr, k) {
  return arr.reduce((acc, el) => {
    return [...acc, el % k]
  }, [])
}

function calculateCounts(arr) {
  return arr.reduce((acc, el) => {
    return {
      ...acc,
      [el]: acc[el] ? acc[el] + 1 : 1,
    }
  }, {})
}

module.exports = {
  nonDivisibleSubset,
  nonDivisibleSubset2,
  getRemainders,
  calculateCounts,
}
