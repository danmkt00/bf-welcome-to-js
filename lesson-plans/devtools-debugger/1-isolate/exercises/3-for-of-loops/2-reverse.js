'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;

alert(transformation);

let upwards = '';
for (let nextChar of backwards) {
  upwards = nextChar + upwards;
}

transformation = backwards + ' -> ' + upwards;

alert(transformation);

//or we can just use toReverse because it's already in the right order

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
