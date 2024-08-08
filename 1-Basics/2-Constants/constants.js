
//Use const for immutability, readability, error prevention, and block scope
//Using 'const' is a good practice when you know the value of a variable should not change, 
//as it promotes safer, more readable, and potentially more performant code.

// let interestRate = 0.3;
// interestRate = 1;

//Now if you log this on the console, We're going to see the new value,
// console.log(interestRate);

//So here, if we change let to const. Now interestRate will be constant.
// And we're going to see an error in the console on line 3,
// where we reassign interestRate. So let's have a look.

const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// So we cannot reassign a constant.

//TODO: if you don't need to reassign constant should be your default choice.
// TODO: Otherwise if you need to reassign a variable, use let.