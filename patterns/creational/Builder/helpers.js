class Device {
  call = () => {
    console.info('Calling....');
  };

  constructor(display, keyboard, microphone) {
    this.display = display;
    this.keyboard = keyboard;
    this.microphone = microphone;
  }
}

class Display {
  test = () => {
    console.log('display test success');
    return true;
  };
}

class Keyboard {
  test = () => {
    console.log('keyboard test success');
    return true;
  };
}

class Microphone {
  test = () => {
    console.log('microphone test success');
    return true;
  };
}

class DeviceBuilder {
  createDisplay = () => {
    console.log('display added');
    return new Display();
  };
  createKeyboard = () => {
    console.log('keyboard added');
    return new Keyboard();
  };
  createMicrophone = () => {
    console.log('microphone added');
    return new Microphone();
  };
  testDevice = (device) => {
    if (
      device.display.test() &&
      device.keyboard.test() &&
      device.microphone.test()
    ) {
      return true;
    }
  };

  buidDevice = () => {
    const display = this.createDisplay();
    const keyboard = this.createKeyboard();
    const microphone = this.createMicrophone();

    const device = new Device(display, keyboard, microphone);
    console.log('testing device');
    const testSuccess = this.testDevice(device);
    if (testSuccess) {
      console.log('device test success');
      return device;
    } else {
      throw Error('Error during device creation');
    }
  };
}

module.exports = {
  DeviceBuilder,
};
