// A Factory Method creates new objects as instructed by the client.
// One way to create objects in JavaScript is by invoking a constructor function with the new operator.
// There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate.
// The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.

const SOME_CLASS_TYPE = {
  TYPE_1: 'type1',
  TYPE_2: 'type2',
};

class SomeClass1 {
  constructor() {
    this.someProperty1 = 'class 1 property 1';
    this.someProperty2 = 'class 1 property 2';
  }

  getMyProperties() {
    console.log(this.someProperty1);
    console.log(this.someProperty2);
    return;
  }
}

class SomeClass2 {
  constructor() {
    this.someProperty1 = 'class 2 property 1';
    this.someProperty2 = 'class 2 property 2';
  }

  getMyProperties() {
    console.log(this.someProperty1);
    console.log(this.someProperty2);
    return;
  }
}

class SomeClassFactory {
  constructor() {
    this.instance = null;
  }

  getInstance(type) {
    switch (type) {
      case SOME_CLASS_TYPE.TYPE_1:
        this.instance = new SomeClass1();
        break;
      case SOME_CLASS_TYPE.TYPE_2:
        this.instance = new SomeClass2();
        break;
    }

    return this.instance;
  }
}

const someClassFactory = new SomeClassFactory();
const instance = someClassFactory.getInstance(SOME_CLASS_TYPE.TYPE_1);
instance.getMyProperties();
