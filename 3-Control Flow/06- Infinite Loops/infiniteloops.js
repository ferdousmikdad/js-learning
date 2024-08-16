
// Infinite Loops

let i = 0;
while (i < 5) {
    console.log(i);
    i++; //if you comment out this line the infinite will start
}

// Here I comment out the i increment code (7 line)
// But if you forgot to do so, you end up creating an infinite loops
// because in the first iteration, i is 0. And it's less than 5.
// so we'll display an i on the console.

// Now, in the second iteration i is still 0, and less than 5.
// So, this loop could run forever. 