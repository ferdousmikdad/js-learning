
// Logical Operators
// We use these operators to make decisions based on multiple conditions.
// We have three types of logical operators,

// 1- Logical AND (&&)

// ans.- Returns TRUE if both operands are TRUE
// console.log(true && true);
// now if either of these is false, the result will be false.
// One of them false or both of them false, the result will be false.

// console.log(false && false);
// Use case, 
// Imagine we want to build and application for approving loans.
// So we want to see if the applicant has high income and and good credit score,
// then they will be eligible for loans.make it to code from comments

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan)

// --------------------------
// 2- Logical OR (||)
// Returns TRUE if one of the operands is TRUE

// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan);


// --------------------------
// 3- Logical NOT (!)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

// TODO:it should be see again and again till understand the things
