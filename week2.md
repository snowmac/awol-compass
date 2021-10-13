# Week 2, all about Javascript

# Recommended reading
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
https://www.w3schools.com/js/
https://javascript.info/first-steps

## What is Javascript?
triad for the web
html, css and javascript

html - markup, document text formatting
css - styling the web
javascript - variables, loops, data structures and logic

## Where is it run?
-Web Browser,
-Iphone, android
-embedded into robots
-on the server

## Why do we care?
We're going to build a mobile app using Javascript (React Native)

## What's the goal?
- To learn enough Javascript to build a real world app
- This week's goal is to learn javascript, variables, loops, conditional flow
- Highlevel, start learning react native in early October
(https://reactnative.dev/docs/tutorial)

## Basics

Javascript runs almost anywhere. It's a high level programming
language that converts into machine code (binary, 1's and 0's).

# To cover

x-var, let, const
x-conditional flow (if, else, switch)
x-operators
x-Data structures and types
x-Loops
x-Arrays
x-Methods/functions
-Inheritence (maybe later?)
-goof off (codepen)

# 0000000000000000000 ---------------------------------

var myString = "This is message to the world";
var myUserName = "Adam.bourg@gmail.com";
var password = "Password123";

var myFirstNumber = 1;
var myFirstNumber2 = 2;

var dec1 = 1.234;

var myFirstObj = {
// key, value pair
firstName: "Adam",
lastName: "Bourg",
age: 32
};

boolean = true / false
var myList = [
'banana',
'yogurt',
'toast',
'chipotle'
]

// Variables are not typed in Javascript
// String, Float, Dec, Int etc...

// 3 types of variables
var, let, const

var - original variable; 90s
--> hositing
let - var, scoped to the current function
const - constant; it can't change

const pi = 3.141528;
const apiKey = '324178942358975hkjrgfkbhjqa4rty987q34';

# Boolean, true false.

key, statement, body

var myFirstObject = {age:2};

// if statements, else if, else

if(myFirstObject.age >= 18) {
alert('you can join the army');
} else if(myFirstObject.age < 18 && myFirstObject.age >= 16 ) {
alert('you can drive');
} else {
alert('you have to walk everywhere');
}

const expr = 'Papayas';
switch (expr) {
case 'Oranges':
console.log('Oranges are $0.59 a pound.');
break;
case 'Mangoes':
case 'Papayas':
console.log('Mangoes and papayas are $2.79 a pound.');
// expected output: "Mangoes and papayas are $2.79 a pound."
break;
default:
console.log(`Sorry, we are out of ${expr}.`);
}


if(expr==="Oranges") {
console.log('Oranges are $0.59 a pound.');
} else if(
expr==="Mangoes" ||
expr==="Papayas"
) {
console.log('Mangoes and papayas are $2.79 a pound.');
} else {
console.log(`Sorry, we are out of ${expr}.`);
}

// operators
// =
var name = "adam";

// += concatenation
name += " Bourg";
name = name + " Bourg";

// comparision,
>, <, >=, <=, ==, ===
age > 18
age < 18
age >= 18
age <= 18

var age = "18";
age == 18; // true
age === 18; // false,

// ++ operator, --
var myInt = 1;

// ++ equal to:
myInt = myInt + 1;

// -- equal to:
myInt = myInt - 1;

////////////////////////////
var foodsIAteToday = [
'banana',
'yogurt',
'toast',
'burrito',
'water'
];

// loops,
// for, while, .each, .foreach
for(var index = 0; index < foodsIAteToday.length; index++) {
alert(foodsIAteToday[index]);
}

// loops, a more generic term for them are iterators
property aka "method or function" on that data type, eg arrays or objects
.forEach for arrays

// functions / methods
typically what we call 'behavior'
functions are first class, treated like values
function as a group of code.

function armyAgeChecker(age, name) {
if(age >= 18) {
console.log('you can join the army to drive a tank');
} else if(age < 18 && age >= 16 ) {
console.log('you can drive');
} else {
console.log('you have to walk every where');
}
}

var ages = [15, 15, 15, 15, 17, 15, 17, 16, 32];

// function name, named function
// object literal, attribute
{
name: 'adam',
armyAgeChecker: () => { }
}
// anonymous function, () => {} ; not named

ages.forEach((age) => {
if(age>15) {
alert('you can drive');
}
})

# High level
## We can simple functions to do things

Write a function to take a list (array) of random ages
0 to 35

var ages = [0, 5, 25, 30, 15, 17, 29, 35, 21, 3, 4]

Determine what kind of food they can eat
-> (0 to 3) would be mommy's milk or formula
-> (4-13) would be mac and cheese
-> (14 - 20) ramen noodles
-> anything else would steak (or fried tofu if your vegan)

look at each age in the list, and a print a result to the console
based on the age ranges above

console.log()

// variables
// loops
// conditionals
// methods

# Solution to above

var ages = [-1, 0, 5, 25, 30, 15, 17, 29, 35, 21, 3, 4];

function ageForFoodType(age) {
if(age <0) {
console.error('invalid age');
} else if(age>=0 && age <= 3) {
console.log('Drink mommys milk or formula')
} else if(age >= 4 && age <= 13) {
console.log('Eat mac and cheese');
} else if(age >= 14 && age <= 20) {
console.log('eat ramen')
} else {
console.log('lucky old person, eat steak (or tofu) for dinner');
}
}

ages.forEach(ageForFoodType);

