


const selection_sort = (array) => {
  let counter = 0;

  while(counter !== array.length-1) {
    let temp = array[counter];
    let tempIndex = counter;

    for(let i=counter; i<array.length; i++) {
      if(array[i]<temp) {
        temp=array[i];
        tempIndex=i;
      }

      if(i === array.length - 1) {
        const value = array[counter];
        array[counter] = temp;
        array[tempIndex] = value;
        counter++;
      }
    }
  }
  console.log(array);
};


selection_sort([9,7,5,3,1,454,343,232,121,111]);