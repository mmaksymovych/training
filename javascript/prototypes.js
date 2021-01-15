// By default, the JavaScript engine provides the Object() function 
// and an anonymous object that can be referenced via the Object.prototype.

// object literal
const a = {};

// Object create
const b = Object.create({});

// new Object
const c = new Object();

// constructor
const d = new SomeObject();

function SomeObject(prop1) {
  this.prop1 = prop1;
}

SomeObject.prototype = {
  test = 'test'
}