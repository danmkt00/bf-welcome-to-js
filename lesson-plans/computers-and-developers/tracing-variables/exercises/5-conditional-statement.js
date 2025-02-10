'use strict';

// let a = 'Ewin';
// let a = 'Tugba';
let a = 'Jo';             //declare and initialize
// let a = 'Olesandra'; 

let b = 'Hello ' + a + ', your name is '; //declare and initialize

if (a.length > 4) { //check the length of the name
  b = b + 'long.';    //if the name is longer than 4 add 'long' to let b 
} else if (a.length === 4) {
  b = b + 'perfect.'; //if the name is  4 add 'perfect' to let b 
} else {
  b = b + 'short.';  //if the name is less than 4 (else) add 'short' to let b 
}

console.log(b); //show b variable in the console
