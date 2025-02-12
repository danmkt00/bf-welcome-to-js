'use strict';

let input1 = '';
let input2 = '';

while (input1.length !== 5) {
  input1 = prompt('Enter the first 5 characters:');
}

while (input2.length !== 5) {
  input2 = prompt('Enter the last 5 characters:');
}

let input = input1 + input2;

let message = 'Thank you for "' + input + '"!';

alert(message);


/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
