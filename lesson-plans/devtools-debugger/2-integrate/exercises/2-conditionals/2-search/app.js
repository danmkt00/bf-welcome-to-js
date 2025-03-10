import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read the user's input ---

  let searchThis = readString('text');
  let findThis = readString('query');

  let caseSensitive = readBoolean('sensitive');

  // --- do the search ---

  let doesExist = false;

  if (!caseSensitive) {
    let smallSearchThis = searchThis.toLowerCase();
    let smallFindThis = findThis.toLowerCase();
    doesExist = smallSearchThis.includes(smallFindThis);
  } else {
    doesExist = searchThis.includes(findThis);
  }

  // --- create the message ---

  let message = '';

  if (doesExist) {
    message = 'There is ( ' + findThis + ' ) in ( ' + searchThis + ' )';
  } else {
    message = 'There is no ( ' + findThis + ' ) in ( ' + searchThis + ' )';
  }

  // --- display the search results ---

  displayString('search-result', message);
});

/*  ===== Challenges =====

  - display a more helpful message than "yes" or "no"
  - change the conditional so the `if` is NOT case sensitive and the `else` is

*/
