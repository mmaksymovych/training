

const bucket_sort = (array) => {

  let sorted_array = [];
  for(let i=0;i<array.length;i++) {
    if(array[i] < 0) {
      console.log('Array contains negative numbers. Stop execution');
      return;
    }
    if(sorted_array.length < array[i]){
      sorted_array.length = []
    }
    sorted_array[array[i]] = array[i];
  }
  console.log(sorted_array.filter(() => true));
};

bucket_sort([9,7,5,3,1,4]);