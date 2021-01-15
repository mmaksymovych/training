const fibonacci = (limit, prev = 1, current = 1) => {
  current === 1 && console.log(current);
  console.log(current);

  const next = prev + b;
  prev = b;
  b = next;

  if (b > limit) return;

  fibonacci(limit, prev, b);
};

function* generatorFibbonachi(n) {
  let prev = 0;
  let current = 1;

  while (current < n) {
    yield current;

    const temp = prev + current;
    prev = current;
    current = temp;
  }
}

//fibonacci(55);
const gen = generatorFibbonachi(100);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
