
// Bitwise Operators 
// 1 = 00000001 (decimal system)
// 2 = 00000010
// 3 = 00000011
// R = 00000000

// bitwise operators in JS are are similar to logical operators

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

// Imagine we want to implement an access control system. 
// So the users have these permissions, read, write or execute.
// 00000100
// 00000110
// 00000111
// Number (1) shown the permission of read, write or execute.

// How we can implement these access control system, using bitwise operators
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);
