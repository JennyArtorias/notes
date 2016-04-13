var years = 35; // Javascript is a loosely typed language
var someText = "years old";

alert (years + someText);

// JAVA is a strongly typed language
// int years = 35;

//External file e.g

//<script src="test.js"></script>

//Functions

//{} ass data

function saySomething{}(
    // all statements go inside curly braces
    
    alert("this is a function")

)

//differiante call function vs statement is the difference.
//Tying functions to events.(mouse click)
saySomething(); //calling function 


var number1 = 7;
var number2 = 4;

var number1 = number1 + number2;

documnet.write(number1);

number1 +=number2;

// short hand version add number 2 to number1 and assign to number1 Compound operators

//incremental operator

number1++; //incremental

var number1 = 4 + 3 = 5;

// Multiple operators precedence same as math rules () for override priority
//Conditionals
if(Conditions){}

// examine if condition is true or not conditionals 
// true or false

// variable has a particular value or not
// == not* assignment operator examing variable = apple
var food = "Apple";
if(food == "Apple"){

alert("We ate some fruit specifically apple")}
else{
    
    alert("we ate something else")
};

// else statement executed if condition is false so if the value food does not equal to "Apple"

//else if allows for multiple condition
else if {food == "Meat"){}

    
else if (food == "Meat"){
    alert("We ate some Fast food");
}

else{
    
    alert
}
//If true execute if false go to if "else" statement.


//LOOPS
//testing a condition true or false -> execute code

// Test condition again different if and while loops 
// loop executes till condition is false then exits out


while(condition) {
    document.write("A statement has run");
}

var i = 1;
while(i < 5) {
    document.write("A statement has run");
i++
// Increment otherwise infinite loop
// check condition loop
}

/* var i = 1;
while(i < 5){
i++;
}
// Key difference all the statements counter, condition, incrementer
for(var i = 1; i < 5; i++){
    document.write("a Statement has run");
}

//FUNCTION + IF statement

function batting(player, distance) {
if(distance <= 350 && distance > 0){ // && both conditions have to be true.
document.write(player + "hit the ball " );
}

else if (distance <= 0){
document.write(player + "strike out");
}
else{
document.write(player + "hit a home run);
}
}

batting("steve", 0); // Arguments passed through

// & conditional LOGICAL OPERATOR && two conditions


// Passing information into function 

// RETURN STATEMENT

return to what called it 
variable can call functions
variable can call into function

function add(x,y){
return result;

document.write(theResult);
var theResult = add(6,5); //Variable the Result called the function sent value back to result function boomerang
}// value is 30 

//GLOBAL AND LOCAL VARIABLES 

var name = "Henry"; // global variables

function printName() {
var name2="Sarah"; // local variable ONLY function can see local variable

document.write(name2)// part of functions instructions


}
printName(); // call function

document.write(name2);
//Nuance
var keeps it local in a function. If you don't decalre it becomes a global variable var name2="Sarah"
//Nuance

Global variables stay alive while page is loaded
Local variables disappear after done 

//PASS BY VALUE

function batting(player, distance) {

var more = player + " hit the ball " + distance + " feet" ;
document.write(more);

}

batting("steve", 351); // we pass in arguments to parameters


Pass by value <- these aren't the actual values that are passed into the parameters of the function. It is the COPY Of these values that get passed into function

// Javascript ARRAYS

var road = "stone"
var road2 = "dirt"

// arrays are variables that can hold MULTIPLE values
// ARRAY VARIABLE
// array defined = [] assigned
//each value has index start with 0 

var roads = ["stone", "dirt", "cement", "tar",];

//ACCESS values through index

var roadTravelled = road[1]
// roadTravelled assigned value road[1];

document.write(roadTravelled);

//UPDATE a array

roads[1] = "cobblestone"; // assign a new value of cobblestone reassigned value

var roads = []; // LONG hand way of creating a array 
CREATING EMPTY ARRAY array constructor?

roads[0] = "stone"
roads[1] = "dirt";
roads[2] = "cememnt";
roads[3] = "tar";

// JAVASCRIPT OBJECTS

CONCEPT

var orc = {
color: "green",
height: 5,
weight: 180

};

orc.height;

Standalone variables

var color = "green";
var height = 5;
var weight = 180

all variables together assigned together = something (object)

Multiple varialbes = assigned to 1 variable
Multiple variables should be related to 1 variable(object)

1. Variables inside an object are called properties
2. Real life objets have multiple properties
3. Use the "." to access an object's properties

Object.propertie

= -> :
; -> ,

properties 
name : value (pair)

Object vs array

var orc = {
color:"green",
height: 5,
weight: 180
};

differetn data types -> object -> remember name
Index -> arrays

Array

var orc = [
"green",
5,
180
];

properties -> describe orc
actions -> function

name : function keyword
yell:function(){
document.write("Orcs are the best!")}
}

orc.color;
orc.yell(); -> access method function

standalone functions

function yell {}
 // Flipped functions inside object and standalone objects

NOTE: FUNCTIONS INSIDE OBJCTS ARE CALLED METHODS

OBJECTS part 3 // Practical


var orc = {

hair: "green",
age: 26,
stomachFull: true,
eat: function(){
document.write("Yum Yum!");
}
};


var newAge = orc.age + 2;
orc.age = orc.age + 2; // same parallel
orc.eat(); // method execute 


//Constantly change properties in object custom objects
// Javascript predefined for us Objects

document.write(orc.age);

orc.stomachFull = false;

if (orc.stomachFull == true) {
orc.eat(); // if condition is true then execute statement
}

else{

document.write("not eating")
}

// Objects part 4

var orc = {

hair: "green", //string
age: 26, // numbers
stomachFull: false, //boolean


};

orc.hair= "purple";
orc.hair= 1;
orc.hair2 = "red"; // new propertie assigned value
delete orc.hair2; // DELETE property of object.
orc.hair2; // ADDING property without adding value.

document.write(orc.hair2);

//STRING OBJET

custom object 

GLOBAL OBJECTS

1. Objects that javascript provides that we can use
2. ALready written for us so we can just use their properties and methods

Preprovided written already for us

Standalone or primitive variables

var color = "green"; // String Object
var eight = 5; // Math Object and Number Object 

javascript provides object based on data type 

var hello = "Hello how are you doing";

document.write(hello);

// String Object in JavaScript



Once javascript determines its a string variable it takes the string object and wraps it around the variable

string. // not need not wrapped around string variable

hello = hello.toUpperCase(); // Uppercase
hello.toLowerCase(); // lowerCasae
hello.length;
hello.charAt(4) // Give us character at the 4th index
hello.replace("doing", "today");// replace doing with today
hello.bold;
hello.italic;

document.write(hello);


empty space = Space

//MATH object 

var number = 4.7;

var newNumber = 26 + Math.round(number); // Acces math object
var newNumber = 26 + Math.ceil(number); // up
var newNumber = 26 + Math.floor(number); // down

var number = Math.sqrt(16);


document.write(newNumber);

//MAth Object in Javascript

//DATE OBJECT 

var todayDate = new Date(); //new keyword create new objects reference object. Create a instance of Date" object. instance = copy

() -> constructor 

Current date and time system clock set at.

var useString = todayDate.toDateString(); //String format
todayDate.getYear(); // receiving what is arleady out there get think skyrim

todayDate.setYear(17); // Setting the date ourselves. passing value through parameter to alter the year.


document.write(todayDate);

//DOM DOM DOM DOM DOM DOM DOM DOM

parse then renders

then creates -> dom 


html code loaded first then creates the Document object model based on html code.

Dom allows us to use javascript code to access parts of the webpage

Html Document
DOM document

-> both documents 

different representations

Browser loads page

DOM is created - objects that we can use that represents the HTML. Objects are stored in the DOM.

The DOM allows s to use our javascript code to access parts of the web page.

HTML is a mark up language

Objects created for each tags 

Model => tree structure -> Relationships 

parent Child element

Document-> represents entire model all methods and properties 

Attributes / text
Nodes

Element node
attribute node
text node 

NODES are a type of OBJECT
HIERACHY

// 


























