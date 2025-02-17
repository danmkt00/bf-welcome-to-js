'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Unexpected token '{'

  location: line 63

  life cycle: creation phase 

  the mistake: using two elses

  the fix(es): in line 27 make the else -> else if
*/

let userName = 'idgjkghjkg';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}
