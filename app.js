// const myOs  = require('os');
// const fs    = require('fs');
// const test  = require('./test');
var _ = require('lodash');

// console.log(myOs.cpus());

// console.log(myOs.userInfo());
//
// fs.appendFile('message.txt', ' data to append,', (err) => {
//   if(err) throw err;
//   console.log('The "data to append" was appended to file');
// });

// console.log(test.firstNumber);
// console.log(test.sum(5,5));

var numbers = [1, 2, 3, 4, 5];

console.log(_.isString("Akash"));
console.log(_.isString(120));
console.log(_.shuffle(numbers));
