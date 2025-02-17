'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  location: line 25

  life cycle: creation phase 

  the mistake: you assign value to a variable in the right side

  the fix(es): change places true = isHappy -> isHappy = true
*/

let isHappy = false;

isHappy = true;
