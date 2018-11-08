

const fibonacci = (number, a=1, b=1) => {
  b === 1 && console.log(b);
  console.log(b);

  const result  = a+b;
    a=b;
    b=result;

    if(b>number) return;

  fibonacci(number, a, b)
};


fibonacci(55);