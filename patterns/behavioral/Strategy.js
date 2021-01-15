// The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task.
// It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it.
// Essentially, Strategy is a group of algorithms that are interchangeable.

function Logistic() {}

Logistic.prototype = {
  setMethod: function (method) {
    this.method = method;
  },

  calculate: function () {
    this.method.calculate();
  },
};

function Sea() {
  this.calculate = function () {
    // calculations
    console.log('100$');
  };
}

function Sky() {
  this.calculate = function () {
    // calculations
    console.log('200$');
  };
}

function Road() {
  this.calculate = function () {
    // calculations
    console.log('150$');
  };
}

const logistic = new Logistic();

const sea = new Sea();
const sky = new Sky();
const road = new Road();

logistic.setMethod(sea);
logistic.calculate();

logistic.setMethod(sky);
logistic.calculate();

logistic.setMethod(road);
logistic.calculate();
