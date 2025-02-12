// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let name = readString('the-name');
  let lastName = readString('the-last-name');

  console.log(name);
  console.log(lastName);

  // --- create a message ---

  let greeting = 'Hello ' + name + ' ' + lastName + '!';
  let goodbye = 'Good bye ' + name + ' ' + lastName + '!';

  let fullMessage = greeting + '\n\n' + goodbye;

  // --- display the message ---

  displayString('greeting-output', fullMessage);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
