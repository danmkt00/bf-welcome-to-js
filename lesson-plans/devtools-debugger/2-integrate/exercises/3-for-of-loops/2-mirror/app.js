import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read the user's input ---

  let userText = readString('to-mirror');
  let character = readString('character');

  // --- mirror the text ---

  let mirrored = ' ' + character + ' ';
  for (let char of userText) {
    mirrored = char.toLowerCase() + mirrored + char.toUpperCase();
  }

  // --- display the result ---

  displayString('output', mirrored);
});

/*  ===== Challenges =====

  - make the mirror image upper case
  - make the non-mirror image lower case
  - let the user decide which character goes in the middle
      for example, any of these should be possible:
        asdf * fdsa
        asdf & fdsa
        asdf - fdsa
        asdf o fdsa
        ...
      you will need to add an input to the HTML file

*/
