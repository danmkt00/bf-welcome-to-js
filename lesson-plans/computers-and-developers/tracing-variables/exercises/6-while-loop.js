'use strict';

//let a = '*'; //declare and initialize
//let a = '<>';
let a = '|-|';
//let a = '';

let b = ''; ////declare and initialize
while (b.length < a.length * 3) { //we check i the length of b is less than length of a * 3 (this way we can repeat our value from variable three times)
  b = b + a; //concatenate value a to b
}

console.log(b);
