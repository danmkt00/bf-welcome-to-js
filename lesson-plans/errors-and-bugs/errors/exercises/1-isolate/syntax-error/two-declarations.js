'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  location: line 22

  life cycle: creation phase 

  the mistake: declaring the same variable twice

  the fix(es): reasign the second one by deleting declaration
*/

let tree = 'oak';

console.log(tree);

tree = 'birch';

console.log(tree);

