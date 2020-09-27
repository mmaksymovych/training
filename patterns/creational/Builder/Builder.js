// The Builder pattern allows a client to construct a complex object by specifying the type and content only.
// Construction details are hidden from the client entirely.
const { DeviceBuilder } = require('./helpers');

const deviceBuilder = new DeviceBuilder();
const iPhone = deviceBuilder.buidDevice();
iPhone.call();
