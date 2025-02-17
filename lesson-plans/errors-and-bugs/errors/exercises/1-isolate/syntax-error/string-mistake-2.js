'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Unexpected string
    at evaller.onload

  location: line 63

  life cycle: creation phase 

  the mistake: using ('') three times in one string

  the fix(es): use ("")
*/

const quotesInQuotes = "remind yourself ''i can do this!'' at least once a day";
console.log(quotesInQuotes);
