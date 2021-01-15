function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen1 = generator();

console.log(gen1.next()); // {value: 1, done: false}
console.log(gen1.next()); // {value: 2, done: false}
console.log(gen1.next()); // {value: undefined, done: true}

function* observer() {
  // (A)
  while (true) {
    const input = yield; // (B)
    console.log(input);
  }
}

const obs = observer();
obs.next();
obs.next('a');
obs.next('b');
