'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/
console.log('Third variable method: ');
let a = 'y'; //declare and initialize
let b = 'x'; //declare and initialize
let t = ''; //declare and initialize

console.log(a, b, t); //show a,b,t in the console (y, x, )

t = a; //asssign t
a = b; //asssign a     //swaping places values of a and b using t variable
b = t; //asssign b

console.log(a, b, t); //show a,b,t in the console (x, y, y)

// what did you do in this program?
// - change places of two variables using the third

// what are the final values of `a` and `b`?
// - a = x, b = y

// how are they changed from the initial values
// - they changed places

// is it possible to swap a and b without using t? 
// - i think there is, but it's the most common way

 
