function factorial(f) {
  let n = BigInt(f)
  let sum = 1n

  while (n > 0) {
    sum = sum * n
    n--
  }

  return sum
}

const a = factorial(100)

console.log(a.toString())
