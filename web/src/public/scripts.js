console.log('test');

const fetchData = async () => {
  const response = await fetch('http://localhost:4000/test');
  console.log(response);
};
