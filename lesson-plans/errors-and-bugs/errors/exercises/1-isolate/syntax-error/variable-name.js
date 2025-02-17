'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected number
    at evaller.onload

  location: line 26

  life cycle: creation phase 

  the mistake: you cannot start the name of the variable with a number

  the fix(es): spell 3 with letters
*/

const three = 'three';
