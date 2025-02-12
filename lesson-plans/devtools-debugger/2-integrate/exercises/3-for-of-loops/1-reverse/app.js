import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('reversify', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');

  console.log(text);

  // --- reverse the string input ---

  let reversed = '';
  for (let character of text) {
    if (!reversed.toLowerCase().includes(character.toLowerCase())) {
      //check if there are repetitive characters
      reversed = character + reversed;
    }
  }

  console.log(reversed);

  // --- set to upper or lower case ---

  let finalText = '';
  if (text.length < 5) {
    //if the input test is less than 5, make text lower case
    finalText = reversed.toLowerCase();
  } else if (text.length > 10) {
    //if the input test is more than 10, make text lower case
    finalText = reversed.toUpperCase();
  } else {
    // don't make any changes from 5 to 10 length
    finalText = reversed;
  }

  console.log(finalText);

  // --- display the final text ---

  // display the final text to the <pre> with id "out"
  displayString('out', finalText);
});

/*  ===== Challenges =====

  - change the condition so upper/lower case depends on the length of the input
      longer inputs are upper case
      medium inputs are not changed
      shorter inputs are lower case
  - make sure each character appears only once in the reversed text

*/
