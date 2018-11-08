

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

  console.log(array);
};


bubble_sort([6,4,2,100,54,82,1,3,15,13]);