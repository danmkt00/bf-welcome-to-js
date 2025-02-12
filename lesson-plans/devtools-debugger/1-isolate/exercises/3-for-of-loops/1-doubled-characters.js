'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubledEach = '';
let doubledBetween = '';
for (let nextChar of text) {
  doubledEach = doubledEach + nextChar + '‐' + nextChar + '‐';
  doubledBetween = doubledBetween + nextChar + nextChar + '‐';
}

alert(doubledEach);
alert(doubledBetween);


/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
