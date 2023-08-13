/*
In apps, we usually need to store some values and work with them throughout the program to make accessing them much more convenient.

We do this by using variables, which are containers for storing values.

Variables are created using the let keyword:*/
let name;
name = "james";

let age = 42;
//after 1 year
age = 18;

console.log(age);

const color = 'red';
console.log(color);
color = 'yellow'; //this will result in error

/*Variables
We have a rectangle with a height of 14 and a width of 8.

The given program should calculate and output the area of the rectangle, but the "width" variable is missing.

Task
Complete the program by creating the "width" variable with the value of 8.*/

let height = 14;

//your code goes here
let width = 8;

console.log(height*width);