

const bubble_sort = (array) => {

  let finished = false;

  while(!finished) {
    for(let i=0; i<array.length; i++) {
      if(array[i] > array[i+1]) {
        const temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        break;
      }

      if(i===array.length-1) {
        finished=true;
      }
    }
  }

  return array;
};

module.exports = bubble_sort;