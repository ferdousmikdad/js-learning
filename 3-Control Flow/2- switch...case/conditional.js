
// Switch ... Case
// This statement is another way to handle conditional logic.
// This can sometimes be more readable and efficient than a series of 'if...else'

// Basic Syntax
// switch (expression) {
//   case value1:
    // Code to execute if expression === value1
    // break;
//   case value2:
    // Code to execute if expression === value2
    // break;
  // You can have as many case statements as needed
//   default:
    // Code to execute if none of the above cases match
// }


let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); 

// In this example, since 'day' is '3', the code under 'case 3'
// is executed, setting 'dayName' to ''Tuesday''.


// When to Use 'switch...case':
// 1- Multiple Values
// 2- Readability