// The objective of the example is to show that with the Bridge pattern input and output devices can vary independently (without changes to the code);
// the devices are loosely coupled by two levels of abstraction.

const { Service, MouseController, KeyboardController } = require('./helpers');

const service = new Service();

const mouseController = new MouseController(service);
const keyboard = new KeyboardController(service);

mouseController.leftBtnClick();
mouseController.rightBtnClick();

keyboard.spaceBtnPress();
keyboard.escapeBtnPress();
