
// Types of Functions

//  Performing a task
function person(name, lastName) {
    console.log ('Hello ' + name + ' ' + lastName);
    // All this concatenations are kind of ugly,
    // they're getting in the way
    // later in this course we will see the clean up this code.
}
person ('Ferdosu', 'Mikdad');

//  Calculating a value
function square(number) {
   return number * number;
}

console.log(square(2));

//Function is a set of statements that either performs a task,
//or calculates and returns a value.