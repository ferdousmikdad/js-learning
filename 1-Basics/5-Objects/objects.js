
//Reference Types
//Objects, Array, Function

// Objects
// What is an object?
// An object in JavaScript and other programming languages is like an object in real life. 
// Think of a person. A person has name, age, address and so on.
// These are the properties of a person. 
// You have the same concept in JavaScript

// When we're dealing with multiple related variables, we can put these variables inside of an object. For example, here we 

// let name = 'Ferdous';
// let age = 26;
// name and age are properties for a person object.
let person = {
    name: 'Ferdous',
    age: 26
}; // This is object syntax

// Now, there are two ways to work with these 
// 1- Dot Notation.
// Let's say we want to change the name of this person,
person.name = 'Mikdad';

// Bracket Notation
let selection = 'name';
person[selection] = 'Miku';

// Bracket notation has it's own uses, 
// sometimes, you don't know th name of the target property until the run time.


console.log(person.name); // It should be your default choice.

// If this is confusing, don't worry, we're going to see this again in the future. 