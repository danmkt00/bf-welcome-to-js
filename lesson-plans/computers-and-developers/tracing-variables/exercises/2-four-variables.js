'use strict';

/* Four Variables

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// trace the program a few times with different values

/* 
declare let a
initialize a = "Blake"
*/

// let a = 'Pieter';
let a = 'Blake';
// let a = 'George';


/* 
declare let b
initialize a = "Schoenberg"
*/

//let b = 'Rabbit';
// let b = 'Wozzeck';
let b = 'Schoenberg';

/*
read a
operation (_ + _) (Blake +)
read b
operation (_ + _) (Blake + Schoenberg)
declare let c
initialize c = "Blake Schoenberg"
*/

let c = a + ' ' + b;


/*
read c
operation (_ + _) (hello + Blake Schoenberg)
declare let d
initialize d = "hello Blake Schoenberg"
*/

let d = 'hello ' + c;

/*
read d
log call = "hello Blake Schoenberg"
*/

console.log(d);

/*
read c
operation (_ + _) (good bye + Blake Schoenberg)
asign d = "good bye Blake Schoenberg"
*/

d = 'good bye ' + c;

/*
read d
log call = "good bye Blake Schoenberg"
*/

console.log(d);
