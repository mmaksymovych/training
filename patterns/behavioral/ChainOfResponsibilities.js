// A way of passing a request between a chain of objects

// The Chain of Responsibility pattern provides a chain of loosely coupled objects
// one of which can satisfy a request.
// This pattern is essentially a linear search for an object that can handle a particular request.

class DeviceBuilder {
  device = null;

  constructor(budget) {
    this.device = {};
    this.budget = budget;
  }

  printDeviceConfiguration = () => {
    console.log(this.device);
    return this;
  };

  addDisplay = () => {
    const price = 50;

    if (price < this.budget) {
      this.device.display = true;
      this.amount -= price;
    } else {
      console.info('No budget for display');
    }
    return this;
  };

  addKeyboard = () => {
    const price = 20;

    if (price < this.budget) {
      this.device.keyboard = true;
      this.amount -= price;
    } else {
      console.info('No budget for keyboard');
    }
    return this;
  };

  addCamera = () => {
    const price = 100;

    if (price < this.budget) {
      this.device.camera = true;
      this.amount -= price;
    } else {
      console.info('No budget for camera');
    }
    return this;
  };
}

const device = new DeviceBuilder(100);
device.addDisplay().addCamera().addKeyboard();
device.printDeviceConfiguration();

class NumberFinder {
  constructor(number) {
    this.number = number;
    this.numbers = {};
  }

  findCount = (number) => {
    if (this.numbers[number]) {
      console.info(`${number} already used`);
      return this;
    }

    const count = Math.floor(this.number / number);
    const left = this.number % number;
    this.numbers[number] = count;
    this.number = left;
    return this;
  };

  printResults = () => {
    Object.entries(this.numbers).forEach(([key, value]) => {
      console.log(`number ${key} -> ${value}`);
    });

    console.log(`left - ${this.number}`);
  };
}

const finder = new NumberFinder(347);

finder.findCount(100).findCount(7).findCount(2).findCount(1);
finder.printResults();
