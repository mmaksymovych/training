

const linear_search = (arr, number) => {
  let index;

  for(let i=0; i<arr.length; i++) {
    if(arr[i] === number) {
      index=i;
      break;
    }
  }

  return index ? console.log(`number index - ${index}`) : console.log('number does not exist in array');
};

linear_search([1,6,3,4,6], 6);