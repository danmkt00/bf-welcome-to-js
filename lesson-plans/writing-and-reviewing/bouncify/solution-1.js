'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/
//working solution
const bouncifyString = (text) => {
  let bouncifyText = '';
  let upperText = true;
  const pattern = /[a-zA-Z]+/;
  for (let char of text) {
    if (pattern.test(char)) {
      if (upperText) {
        bouncifyText += char.toUpperCase();
      } else {
        bouncifyText += char.toLowerCase();
      }
      upperText = !upperText; //flip from true to false
    } else {
      //if it's not in the pattern
      bouncifyText += char;
    }
  }
  return bouncifyText;
};

let input = null;
while (!input) {
  input = prompt('enter some text, the letters will be bouncified');
  if (input === null) {
    alert('there is no escape!');
  }
  if (input === '') {
    alert('no empty input, try again.');
  }
}

console.log(input);

console.log(bouncifyString(input));

alert(bouncifyString(input));
