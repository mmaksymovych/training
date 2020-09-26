function* generator() {
  yield 1;
  yield 2;
}

const gen1 = generator();

console.log(gen1.next()); // {value: 1, done: false}
console.log(gen1.next()); // {value: 2, done: false}
console.log(gen1.next()); // {value: undefined, done: true}
