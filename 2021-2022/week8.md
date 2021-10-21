# Welcome to week 8

We're going to take the first 30-60 minutes of today's class to run through an Agile Retrospective. 

# Today's goals

1. Gather feedback on where we stand on the course, what the group feels like we/(or Adam) could improve on (60 minutes)
2. Review what we've learned so far 
    (Group decision)


# The Agile Manifesto
We are uncovering better ways of developing
software by doing it and helping others do it.
Through this work we have come to value:

Individuals and interactions over processes and tools
Working software over comprehensive documentation
Customer collaboration over contract negotiation
Responding to change over following a plan

That is, while there is value in the items on
the right, we value the items on the left more.

See http://agilemanifesto.org/ 

# What is Agile? What is a retrospective? 

Here's a great explanation of a retrospective
https://www.atlassian.com/team-playbook/plays/retrospective

Here's what Agile means within the context of software development:

The 'manifesto':
https://www.agilealliance.org/agile101/the-agile-manifesto/

https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/

# Retro format

Please print, do not write in cursive. I cannot read cursive. 

A: Write down all the pluses and minuses (10 minutes)
B: Once done, we'll pile the notes together, all pluses in one section and minuses in another (3 minutes)
C: 3 randomly selected students will come up and organize the sticky notes and try to group them (10 minutes)
D: I will go up to the board and review the notes with the whole class (40 minutes)

# Retro details 

1. Write down all the good things that are happening within the context of the awol (These are the plus sign section)
    Examples: 
        I love it when I show Adam a problem and he doesn't know the answer but quickly solves it
2. Write down all the bad things that are happening within the context of the awol (these are the minuses)
    Examples:
        I wish Adam would slow down and give more chances to practice the code
        I wish we could go slower

# Specific questions to think about for feedback

1. How is the speed / pace of the content coming at you in the class? 
2. How is the content of the class? 
3. What could Adam do to improve the class? 
4. Would homework / out of class assignments help? 
5. Would you like practice problems or resources?

# Next steps: 

Action items from the sticky notes

# --------------------------------

Next: for the rest of today. 

Options:

1. Focus on Javascript
2. Focus on HTML
3. Focus on CSS

# ---------------------------------


# JS Outline: 
x-var, let, const
x-conditional flow (if, else, switch)
-operators
x-Data structures and types
-Loops
-Arrays
x-Methods/functions
-Inheritence (maybe later?)
x-Scope 
x-data types

# Scope
var -> function scope, via hositing
let -> Block scope
const -> Block scope

Scopes:
* Global is always available. Usefulness is for utility functions and browser specific APIs. Window
* Local scope 

https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11

# Boolean logic 

var compareOne = 1;
var compareTwo = '1'; 

A) 
if(compareOne == compareTwo) {
    console.log('hello world');
}

B) 
if(compareOne === compareTwo) {
    console.log('hello world');
}


== vs === 

== checking the values. 1 = '1', a = 'a', b != 'a' 
=== checks the values and data type.
    '1' != 1. 
    String != integer

# Data types
interger 
string 
boolean 
object
function
float

# Iterators

what are the different ways we could iterator through a list? 
var listOfStudents = [
    {
        name: "Isaiah", 
        age: 15, 
        dl: false, 
        gpa: 4.0
    },
    {
        name: "Robert", 
        age: 15, 
        dl: false, 
        gpa: 3.0
    },
    {
        name: "Tristen", 
        age: 15, 
        dl: false, 
        gpa: 3.4
    },
    {
        name: "Vandin", 
        age: 4, 
        dl: false, 
        gpa: 3.4
    }
]


write a function that computes the average GPA of the class. 
# Homework 

Using your own code pen, write a few functions that write to the console the following pieces of information given the dataset below: 

Function: 
1. The distinct number (count) of genders, and an alphabetized list of the unquie genders. 
    Example output: 
    { count: 3, genders: ["Male", "Female", "Non-binary"] }

2. A summary output of the data, minimum GPA value, max GPA and the average GPA 
    Math Library: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    Example output: 
    {  average: 3.2, min: 0.1, max: 4.0  }

3. Compute the average age of the students in all classes
    Example output: 
    16

4. Return a list with a count of students who have their drivers license (dl field):
    Example output: 
    { count: 1, students: ['Sydelle Strang'] }

5. Generate a list of students grouped by grade, with count of students per grade:
    Example: 
    [{
        grade: 10,
        students: [
            {"name":"Simeon Noe","gender":"Non-binary","age":16,"gpa":2.0,"dl":false}
        ]
    ]}

var data = [{"name":"Simeon Noe","gender":"Non-binary","age":16,"gpa":2.0,"dl":false,"grade":10},
{"name":"Sydelle Strang","gender":"Agender","age":12,"gpa":4.0,"dl":true,"grade":8},
{"name":"Janine Giddens","gender":"Genderfluid","age":15,"gpa":3.8,"dl":false,"grade":6},
{"name":"Johnnie Kleisle","gender":"Genderqueer","age":12,"gpa":2.1,"dl":true,"grade":9},
{"name":"Aksel Dunseath","gender":"Polygender","age":10,"gpa":3.7,"dl":true,"grade":8},
{"name":"Jackson Newark","gender":"Female","age":16,"gpa":2.9,"dl":false,"grade":8},
{"name":"Leshia Sex","gender":"Genderqueer","age":13,"gpa":2.2,"dl":false,"grade":9},
{"name":"Mirilla Augustine","gender":"Genderqueer","age":10,"gpa":3.9,"dl":true,"grade":8},
{"name":"Richart Snowding","gender":"Bigender","age":13,"gpa":2.2,"dl":false,"grade":6},
{"name":"Clayborne Sainter","gender":"Female","age":15,"gpa":2.5,"dl":true,"grade":7},
{"name":"Janna Swarbrigg","gender":"Genderfluid","age":9,"gpa":1.9,"dl":true,"grade":9},
{"name":"Delores Spyvye","gender":"Genderqueer","age":18,"gpa":3.7,"dl":true,"grade":4},
{"name":"Borg Carthew","gender":"Female","age":17,"gpa":3.1,"dl":true,"grade":12},
{"name":"Deanne Shotboult","gender":"Genderfluid","age":11,"gpa":1.6,"dl":true,"grade":4},
{"name":"Fredelia Elsbury","gender":"Agender","age":9,"gpa":1.1,"dl":true,"grade":12},
{"name":"Witty Siemantel","gender":"Polygender","age":17,"gpa":3.9,"dl":false,"grade":12},
{"name":"Keir Kalderon","gender":"Genderqueer","age":10,"gpa":3.7,"dl":true,"grade":9},
{"name":"Kiel Sissot","gender":"Polygender","age":12,"gpa":3.6,"dl":true,"grade":9},
{"name":"Joey Facey","gender":"Bigender","age":18,"gpa":2.2,"dl":true,"grade":8},
{"name":"Mellisa Lunt","gender":"Agender","age":12,"gpa":2.3,"dl":true,"grade":6},
{"name":"Christalle Glanister","gender":"Non-binary","age":18,"gpa":1.5,"dl":false,"grade":5},
{"name":"Fabe Doberer","gender":"Non-binary","age":18,"gpa":3.1,"dl":false,"grade":9},
{"name":"Dodie Maffini","gender":"Genderqueer","age":12,"gpa":3.7,"dl":false,"grade":12},
{"name":"Edouard Kinkaid","gender":"Agender","age":10,"gpa":2.7,"dl":true,"grade":5},
{"name":"Nerty Boylin","gender":"Genderfluid","age":14,"gpa":2.6,"dl":false,"grade":12},
{"name":"Masha Flewan","gender":"Bigender","age":12,"gpa":2.9,"dl":true,"grade":6},
{"name":"Maisie Crus","gender":"Genderfluid","age":17,"gpa":1.3,"dl":true,"grade":5},
{"name":"Kessia Klamp","gender":"Polygender","age":16,"gpa":1.6,"dl":false,"grade":10},
{"name":"Stacy Thurlow","gender":"Genderqueer","age":16,"gpa":2.2,"dl":true,"grade":9},
{"name":"Cristi Airlie","gender":"Male","age":9,"gpa":1.1,"dl":true,"grade":4},
{"name":"Gonzalo Blain","gender":"Polygender","age":18,"gpa":1.5,"dl":true,"grade":9},
{"name":"Dyann Hurdidge","gender":"Genderfluid","age":9,"gpa":2.8,"dl":true,"grade":9},
{"name":"Monro Clilverd","gender":"Non-binary","age":11,"gpa":2.6,"dl":false,"grade":4},
{"name":"Modesta L'oiseau","gender":"Non-binary","age":9,"gpa":1.5,"dl":false,"grade":6},
{"name":"Rana Fitzsimon","gender":"Non-binary","age":10,"gpa":2.4,"dl":true,"grade":10},
{"name":"Andrea Meltetal","gender":"Genderqueer","age":17,"gpa":1.2,"dl":false,"grade":4},
{"name":"Shamus Depka","gender":"Polygender","age":9,"gpa":1.8,"dl":false,"grade":10},
{"name":"Nolana Standing","gender":"Male","age":14,"gpa":2.5,"dl":false,"grade":7},
{"name":"Felecia Buckeridge","gender":"Bigender","age":11,"gpa":2.4,"dl":true,"grade":10},
{"name":"Nanette Braidon","gender":"Agender","age":15,"gpa":1.2,"dl":false,"grade":7},
{"name":"Jehu McWhirter","gender":"Bigender","age":9,"gpa":1.4,"dl":true,"grade":5},
{"name":"Marlowe Hutchins","gender":"Genderfluid","age":17,"gpa":2.9,"dl":true,"grade":6},
{"name":"Tressa Barsam","gender":"Male","age":13,"gpa":2.8,"dl":false,"grade":7},
{"name":"Lelah De Morena","gender":"Genderfluid","age":14,"gpa":1.0,"dl":true,"grade":9},
{"name":"Larine Pybworth","gender":"Agender","age":11,"gpa":2.9,"dl":true,"grade":6},
{"name":"Horace Mingo","gender":"Non-binary","age":13,"gpa":1.4,"dl":true,"grade":8},
{"name":"Salomone Rowett","gender":"Non-binary","age":11,"gpa":2.8,"dl":true,"grade":4},
{"name":"Spense O'Fallon","gender":"Non-binary","age":15,"gpa":1.7,"dl":false,"grade":5},
{"name":"Dulcia Carnie","gender":"Agender","age":13,"gpa":3.8,"dl":false,"grade":9},
{"name":"Davidson Sifleet","gender":"Agender","age":13,"gpa":1.7,"dl":false,"grade":5},
{"name":"Larry Trussler","gender":"Polygender","age":14,"gpa":2.2,"dl":false,"grade":6},
{"name":"Trisha Calver","gender":"Male","age":15,"gpa":3.9,"dl":true,"grade":10},
{"name":"Frederico Swayte","gender":"Genderqueer","age":10,"gpa":1.9,"dl":true,"grade":9},
{"name":"Kennie Kneebone","gender":"Bigender","age":18,"gpa":3.9,"dl":true,"grade":4},
{"name":"Wally Durbyn","gender":"Agender","age":15,"gpa":3.4,"dl":true,"grade":10},
{"name":"Barn Nehls","gender":"Agender","age":13,"gpa":1.9,"dl":true,"grade":7},
{"name":"Dal Sappell","gender":"Genderqueer","age":14,"gpa":1.7,"dl":true,"grade":8},
{"name":"Rafa Summerfield","gender":"Female","age":17,"gpa":1.8,"dl":true,"grade":6},
{"name":"Ardyce Cattemull","gender":"Genderqueer","age":13,"gpa":2.8,"dl":true,"grade":11},
{"name":"Ancell Broadnicke","gender":"Non-binary","age":10,"gpa":1.5,"dl":false,"grade":6},
{"name":"Alyson Gaddes","gender":"Genderfluid","age":10,"gpa":1.9,"dl":true,"grade":11},
{"name":"Elle Taks","gender":"Polygender","age":12,"gpa":2.4,"dl":true,"grade":11},
{"name":"Sonnnie Pichan","gender":"Polygender","age":11,"gpa":3.6,"dl":true,"grade":8},
{"name":"Alicia Dallin","gender":"Non-binary","age":12,"gpa":3.1,"dl":false,"grade":8},
{"name":"Teddie Loach","gender":"Female","age":16,"gpa":2.4,"dl":false,"grade":7},
{"name":"Seka Pietesch","gender":"Genderqueer","age":9,"gpa":1.5,"dl":false,"grade":6},
{"name":"Tymon Vignaux","gender":"Non-binary","age":13,"gpa":3.8,"dl":false,"grade":10},
{"name":"Alikee Pohl","gender":"Polygender","age":18,"gpa":1.6,"dl":false,"grade":11},
{"name":"Adara Dominicacci","gender":"Non-binary","age":17,"gpa":1.7,"dl":false,"grade":7},
{"name":"Ralph Rosewarne","gender":"Bigender","age":17,"gpa":2.9,"dl":false,"grade":8},
{"name":"Ikey Downe","gender":"Genderfluid","age":12,"gpa":3.6,"dl":false,"grade":9},
{"name":"Nefen Oughtright","gender":"Polygender","age":16,"gpa":1.4,"dl":true,"grade":6},
{"name":"Grayce Barling","gender":"Non-binary","age":16,"gpa":2.8,"dl":false,"grade":10},
{"name":"Ciel Whitear","gender":"Genderqueer","age":16,"gpa":2.5,"dl":true,"grade":11},
{"name":"Bren Weekly","gender":"Genderqueer","age":14,"gpa":1.2,"dl":true,"grade":4},
{"name":"Egon Whorf","gender":"Bigender","age":18,"gpa":1.3,"dl":true,"grade":8},
{"name":"Hana Spacy","gender":"Female","age":16,"gpa":1.5,"dl":true,"grade":5},
{"name":"Cecilius Elgie","gender":"Genderqueer","age":11,"gpa":3.5,"dl":true,"grade":6},
{"name":"Cynthea Searby","gender":"Polygender","age":9,"gpa":1.7,"dl":false,"grade":6},
{"name":"Kassia Jodlkowski","gender":"Non-binary","age":15,"gpa":3.3,"dl":false,"grade":5},
{"name":"Alexandr Audry","gender":"Male","age":14,"gpa":1.1,"dl":true,"grade":6},
{"name":"Amelina Slateford","gender":"Agender","age":11,"gpa":1.7,"dl":false,"grade":12},
{"name":"Rudy Clifford","gender":"Genderfluid","age":14,"gpa":1.5,"dl":true,"grade":6},
{"name":"Quinn Weiner","gender":"Genderfluid","age":11,"gpa":2.3,"dl":true,"grade":10},
{"name":"Thorpe Lobell","gender":"Genderqueer","age":9,"gpa":1.5,"dl":false,"grade":9},
{"name":"Merilee Cadagan","gender":"Male","age":9,"gpa":3.3,"dl":false,"grade":7},
{"name":"Almeda Provis","gender":"Agender","age":12,"gpa":2.1,"dl":false,"grade":6},
{"name":"Gavan Plackstone","gender":"Agender","age":10,"gpa":2.8,"dl":false,"grade":4},
{"name":"Deena Climer","gender":"Polygender","age":18,"gpa":2.3,"dl":false,"grade":6},
{"name":"Owen Bodd","gender":"Male","age":12,"gpa":3.0,"dl":true,"grade":4},
{"name":"Giles McDunlevy","gender":"Genderqueer","age":16,"gpa":2.0,"dl":false,"grade":10},
{"name":"Irwinn Lesser","gender":"Polygender","age":17,"gpa":2.1,"dl":false,"grade":4},
{"name":"Elisabeth Frenchum","gender":"Non-binary","age":17,"gpa":3.2,"dl":false,"grade":11},
{"name":"Gregory Quigg","gender":"Polygender","age":16,"gpa":1.5,"dl":true,"grade":7},
{"name":"Chastity Bercevelo","gender":"Bigender","age":16,"gpa":2.5,"dl":false,"grade":10},
{"name":"Dex Gardner","gender":"Polygender","age":9,"gpa":2.9,"dl":false,"grade":6},
{"name":"Marlena Runham","gender":"Polygender","age":9,"gpa":3.2,"dl":false,"grade":5},
{"name":"Mace Dare","gender":"Agender","age":18,"gpa":2.6,"dl":true,"grade":11},
{"name":"Myles Seargeant","gender":"Female","age":13,"gpa":2.4,"dl":false,"grade":11},
{"name":"Teddie Jauncey","gender":"Genderqueer","age":15,"gpa":2.4,"dl":true,"grade":11}]; 
# Concepts to know:

1. Iterators / aka loops
    var num = 0
    for(var i = 0; i < data.length; i++) {
        num += data[i].gpa; 
    }

    var average = num / data.length 

2. Arrays and objects

3. console.log

