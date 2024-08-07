
//Variables
//We use a variable to store data temporarily
//So we store our data somewhere, and give that memory location a name.
//And with this name, we can read the data at the given location in the future.
//Here's a metaphor. Think of the boxes you use to organize your stuff. You put your stuff in various boxes, and put a label on each box. With this, you can easily find your stuff. 
//A variable is like a box. What we put inside the box, is the value that we assign to a variable, that's the data, and the label that we put on the box is the name of our variable. 

//Now let's see this in code.

//before ES6, we use the var keyword to declare a variable. But there are issues with var as we will find out later in the course.

let name = 'Mikdad';
console.log(name);

//We have a few rules for naming these variables. Here are the rules, 
//1-Cannot be a reserved keyword
//2-Should be meaningful
//3-Cannot start with a number like (1name)
//4-Cannot contain a space or hyphen (-)
//5-Are case-sensitive

let fistName;

//Not that here I'm using camel notation, so the first letter of the first word should be lowercase, and the first letter of every word after should be upper case.

let firstName = 'Ferdous', lastName = 'Mikdad';

//You can use the variables in a single line together but the modern best practice is to declare each variable on a single line separately.

//So,

let fistName = 'Ferdous';
let lastName = 'Mikdad';
