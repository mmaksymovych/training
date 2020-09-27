class Service {
  play = () => console.log('play');
  stop = () => console.log('stop');
}

class MouseController {
  constructor(service) {
    this.service = service;
  }

  leftBtnClick = () => {
    this.service.play();
  };

  rightBtnClick = () => {
    this.service.stop();
  };
}

class KeyboardController {
  constructor(service) {
    this.service = service;
  }

  spaceBtnPress = () => {
    this.service.play();
  };

  escapeBtnPress = () => {
    this.service.stop();
  };
}

module.exports = {
  Service,
  MouseController,
  KeyboardController,
};
