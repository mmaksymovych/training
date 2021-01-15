/* simple generator example */
function* generator() {
  yield 1
  yield 2
  yield 3
}

const gen1 = generator()

console.log(gen1.next()) // {value: 1, done: false}
console.log('test')

console.log(gen1.next()) // {value: 2, done: false}
console.log(gen1.next()) // {value: undefined, done: true}

/* generator that accepts value */
function* acceptGenerator() {
  const test = yield 1
  if (test) {
    console.log(test)
  }
}

const test = acceptGenerator()

test.next('bla')
test.next()
