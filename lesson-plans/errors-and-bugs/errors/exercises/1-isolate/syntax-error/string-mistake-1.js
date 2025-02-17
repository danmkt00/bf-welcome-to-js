'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Invalid or unexpected token
    at evaller.onload

  location: line 63

  life cycle: creation phase 

  the mistake: not the right way to declare a variable

  the fix(es): put everything in variable a in one line
*/

const a = 'this is\n two lines';
