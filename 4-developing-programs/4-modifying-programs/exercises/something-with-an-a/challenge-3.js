// #todo

'use strict';

/*
  modify the program to search for "coffee" in the user's input

  upper or lower case is your choice
*/

const word = 'coffee';
const userInput = prompt('please enter something with an "' + word + '" in it');

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why !!! ??? !!!';
} else if (userInput.toLowerCase().includes(word)) {
  reaction = '"' + userInput + '" is perfect!';
} else {
  reaction = '"' + userInput + '" has no "' + word + '" in it';
}

alert(reaction);
