// The Template Method pattern provides an outline of a series of steps for an algorithm.
// Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps.
// This pattern is designed to offer extensibility to the client developer.

var datastore = {
  process: function () {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  },
};

function inherit(proto) {
  var F = function () {};
  F.prototype = proto;
  return new F();
}

// log helper

var log = (function () {
  var log = '';

  return {
    add: function (msg) {
      log += msg + '\n';
    },
    show: function () {
      alert(log);
      log = '';
    },
  };
})();

function run() {
  var mySql = inherit(datastore);

  // implement template steps

  mySql.connect = function () {
    log.add('MySQL: connect step');
  };

  mySql.select = function () {
    log.add('MySQL: select step');
  };

  mySql.disconnect = function () {
    log.add('MySQL: disconnect step');
  };

  mySql.process();

  log.show();
}
