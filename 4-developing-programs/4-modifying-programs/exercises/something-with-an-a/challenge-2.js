// #todo

'use strict';

/*
  modify the program so it searches for "A" or "a"

  you will need to change one condition
  the user's instructions
  and strings used to generate a reaction

  looking for a challenge?
    tell the user whether their input has "a" or "A"
*/

const letter = 'a';
const userInput = prompt(
  'please enter something with an "' + letter + '" in it',
);

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why !!! ??? !!!';
} else if (userInput.toLowerCase().includes(letter)) {
  reaction = '"' + userInput + '" is perfect!';
} else {
  reaction =
    '"' +
    userInput +
    '" has no "' +
    letter.toUpperCase() +
    '" or "' +
    letter.toLowerCase() +
    '" in it';
}

alert(reaction);
