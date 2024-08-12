
// Equality Operators

// TODO: Strict Equality (Type + Value)
// That's mean both of them are number and same value (1)
console.log(1 === 1);
console.log('1' === 1);
// It will show false because here we're comparing a string to a number.
// So the types here do not match, that's why we'll get false.

// Now technically in JS we have another equality operator,
// that is indicated by 2 equal signs instead of 3

// TODO: Lose Equality
console.log(1 == 1);
console.log('1' == 1);
// In this case, this operator looks at the value on the left side.
// Here we have a string, 
// so it will automatically convert what we have on the right side, to a string, 

console.log(true == 1);


// What's the different between Strict and Lose?
// The strict equality operator ensure that both values have the same type and same value
// The lose equality operator doesn't care about the types matching, if the types don't match, it will convert the type of what we have on the right side to match what we have on teh left side.