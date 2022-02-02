function permutation(arr, index = 0, final = []) {
  const el = arr[index]

  if (index === arr.length - 1) {
    final.push(arr)
  }

  for (let i = index; i < arr.length; i++) {
    const perm = [...arr]

    const temp = perm[i]
    perm[i] = el
    perm[index] = temp

    if (index < arr.length - 1) {
      permutation(perm, index + 1, final)
    }
  }

  return final
}

const permuted = permutation(['a', 'b', 'c'])
console.log(permuted)

module.exports = {
  permutation,
}
