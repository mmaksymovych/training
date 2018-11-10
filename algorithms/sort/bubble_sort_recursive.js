

const bubble_sort_recursive = (array) => {

  for(let i=0; i<array.length-1; i++) {
    if(array[i] > array[i+1]) {
      const temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
      return bubble_sort_recursive(array);
    }
  }

  console.log(array);
};

bubble_sort_recursive([9,7,5,3,99,1,100]);