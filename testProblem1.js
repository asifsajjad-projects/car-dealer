const findById = require('./problem1');
// readline is an interface to get user input from nodeJS console. importing readline module
const readline = require('readline');

// creating interface ques with input and output
const ques = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// using question method of the interface readline to take input and return output to the console
ques.question("Enter the id to be searched in the inventory ? id: ", function(ans){
    console.log(findById(parseInt(ans)));
    // closing the interface
    ques.close();
}); 


//console.log(findById(1));