const yargs = require('yargs');

const argv = yargs
  .option('value1', {
    describe: 'Esimene väärtus',
    demandOption: true, 
    type: 'number' 
  })
  .option('value2', {
    describe: 'Teine väärtus',
    demandOption: true,
    type: 'number'
  })
  .option('sign', {
    describe: 'Märk (+, -, *, /)',
    demandOption: true,
    choices: ['+', '-', '*', '/'] 
  })
  .help()
  .argv;

const { value1, value2, sign } = argv;

let result;
switch (sign) {
  case '+':
    result = value1 + value2;
    break;
  case '-':
    result = value1 - value2;
    break;
  case '*':
    result = value1 * value2;
    break;
  case '/':
    result = value1 / value2;
    break;
  default:
    console.log('Vigane märk. Valige +, -, * või /.');
    process.exit(1);
}

console.log(`${value1} ${sign} ${value2} = ${result}`);
