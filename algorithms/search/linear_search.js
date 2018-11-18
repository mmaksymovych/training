const linear_search = (arr, number) => {
  let index;

  for(let i=0; i<arr.length; i++) {
    if(arr[i] === number) {
      index=i;
      break;
    }
  }

  return index ? index : false;
};

module.exports = linear_search;