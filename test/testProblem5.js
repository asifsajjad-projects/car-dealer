const carsCheck = require('../problem5');
const readline = require('readline');

console.log(`The number of cars older than 2010 are: ${carsCheck(2010).carscount}.`);
// console.log('The List of cars that are older than 2010 are :');
// console.log(carsCheck(2010).carList);

const q1= readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

q1.question('Please enter a year to search for older cars number:  ', (answer) => {
    console.log(`The number of cars older than ${answer} are ${carsCheck(answer).carscount}`);
    q1.close();
  });