// The Interpreter pattern offers a scripting language that allows end-users to customize their solution.

const en_ua = {
  Hello: 'Привіт',
  GoodBye: 'Бувай',
};

const en_de = {
  Hello: 'Guten Tag',
  GoodBye: 'Aufiderzein',
};

const LANGUAGE_CONTEXT = {
  UA: 'en_ua',
  DE: 'en_de',
};

class Translator {
  constructor(context) {
    this.context = context;
  }

  translate(word) {
    switch (this.context) {
      case LANGUAGE_CONTEXT.UA: {
        console.log(en_ua[word]);
        break;
      }
      case LANGUAGE_CONTEXT.DE: {
        console.log(en_de[word]);
        break;
      }
      default: {
        console.log('context not found');
      }
    }
  }
}

const translator = new Translator(LANGUAGE_CONTEXT.DE);
translator.translate('Hello');
