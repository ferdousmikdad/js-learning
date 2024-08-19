
// So far you learned about 3 kinds of loops in JavaScript
// for
// while
// do-while

// With all these loops we can repeat an action a number of times.

// We have two more loops

// For-in

const person = {
    name: 'Mikdad',
    age: 30
};

for (let key in person)
    console.log(key, person [key]);

// Dot Notation
// person.name

// Bracket Notation
// person['name']

// for-of
const colors = ['red' , 'green' , 'blue'];

for (let color of colors)
    console.log(color);