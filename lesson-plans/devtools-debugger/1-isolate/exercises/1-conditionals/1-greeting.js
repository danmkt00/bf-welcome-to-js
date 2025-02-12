'use strict';

let firstName = prompt('enter your first name:');
let lastName = prompt('enter your last name');

let fullName = '';

if(firstName === null || lastName === null){
  fullName = null;
}else{
  fullName = `${firstName} ${lastName}`;
}

let greeting = '';
if (fullName === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + fullName + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
