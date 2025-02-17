'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: ReferenceError
  message: welf is not defined

  location: line 20

  life cycle: execution phase

  the mistake: welf is not declared

  the fix(es): declare welf
*/

const welf = 'ingrad';

console.log(welf);
