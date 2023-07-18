// import greet from './greet.js'

// // call the function & print the result on the screen
// console.log(greet('Tendani'))

import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'
import figlet from 'figlet';

const styledMessage = chalk.bgGreen.black(greet('Tendani'));
console.log(styledMessage)

// var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});