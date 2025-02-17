'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  location: line 24

  life cycle: execution phase

  the mistake: declaration of the variable after reading it

  the fix(es): declare isValidUserName before reading
*/

const userName = 'chiobin';
let isValidUserName;

console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
