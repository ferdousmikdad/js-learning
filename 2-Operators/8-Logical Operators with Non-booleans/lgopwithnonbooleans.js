
// Logical operators with non-booleans

// Falsy (false) -it's not a boolean false
// What are these falsy values?
// undefined
// null
// number 0
// boolean false
// ''
// NaN

// Anything that is not falsy -> Truthy

// Short-circuiting

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);