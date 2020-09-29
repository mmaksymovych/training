// Encapsulate a command request as an object

const Command = (execute, undo, n) => ({
  execute,
  undo,
  n,
});

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const SumCommand = (n) => Command(sum, sub, n);
const SubCommand = (n) => Command(sub, sum, n);
const MulCommand = (n) => Command(mul, div, n);
const DivCommand = (n) => Command(div, mul, n);

class Calculator {
  commands = [];
  result = 0;

  execute = (command) => {
    this.result = command.execute(this.result, command.n);
    this.commands.push(command);
    console.log('command executed, result - ', this.result);
  };

  undo = () => {
    if (!this.commands.length) {
      console.log('Nothing to undo');
    }

    if (this.commands.length === 1) {
      this.commands.pop();
      this.result = null;
    }

    const command = this.commands.pop();
    this.result = command.undo(this.result, command.n);
    console.log('undo last command, result - ', this.result);
  };
}

const calc = new Calculator();
calc.execute(SumCommand(4));
calc.execute(MulCommand(8));
calc.execute(SumCommand(4));
calc.undo();
calc.undo();
