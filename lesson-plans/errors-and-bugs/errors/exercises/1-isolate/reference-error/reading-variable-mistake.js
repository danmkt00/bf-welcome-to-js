'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: line 20

  life cycle: execution phase 

  the mistake: reading variable before declaring

  the fix(es): declare tomatoes before reading
*/

let tomatoes = 'fresh';

console.log(tomatoes);


