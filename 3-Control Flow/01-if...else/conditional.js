
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// if(condition) {
//     statements
// }
// else if (anotherCondition) {
//     statements
// }
// else if (yetAnotherCondition)
//     statement
// else statement

let hour = 20;

if (hour >= 6 && hour <12)
    console.log('Good Morning');
else if (hour >= 12 && hour <18 )
    console.log('Good afternoon');
else
    console.log('Good evening');