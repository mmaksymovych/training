
const singleton = (() => {
  let instance = null;

  const init = () => {

    let number = 0;

    return {
      setNumber: (a) => {
        number = a;
      },
      getNumber: () => number
    }
  };

  const getInstance = () => {

    if(!instance) {
      instance = init()
    }

    return instance;
  };


  return {
    getInstance
  }

})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

instance1.setNumber(5);
console.log(instance2.getNumber());
