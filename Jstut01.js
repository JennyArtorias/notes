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

// getElementById method

SELECTORSSSS

<p id="para1"> Sometext for this tutorial </p>

<button onclick="changeStyle()>Submit</button>

//STACK . . . . 
function changeStyle(){
    var text = document.getElementById("para1").style.color ="blue"
}

1.Need to grab the element ID,. WE can do that with the getElementById method.

2. Once we have the id we are good to goand we can start to style the element with the style object which is another object int he dom

CSS
color 
border
margin

background-color
font-style
text-decoration
padding-left

Javascript //style object style.color

color
border
margin

backgroundColor // drop hypen in javascript
fontStyle
textDecoration

padding-left// padding keeps hypen in javascript 
border-left

e.g
var text = document.getElementById("para").style.backgroundColor="red";
var text = document.getElementById("para").style.fontStyle="italic";
altering css properties using javascript.


// getElementsByTag method

HTML

<p id="para1"> SOME text for this tutorial </p>
<p id="para1"> SOME text for this tutorial </p>
<p id="para1"> SOME text for this tutorial </p>
<p id="para1"> SOME text for this tutorial </p>

<button onclick="changeStyle()"> Hit Submit if you want to change all the text </button>


TAGS grabbing all tags not specific vs id

NODES LIST tag builds NODES list 0, 1 , 2 , 3  4 etc.... specify indivdual tag
stored in variable down there 

JAVASCRIPT

function changeStyle(){

    var paragraph = document.getElementByTagName("p"); // surround by quotes 4 paragraph nodes
    
    var changeParaText = paragraph[1].style.fontStyle="italic"; // NOde list -> arrays
    
    var changeParaText = paragraph[0].style.fontStyle="italic";
    var changeParaText = paragraph[1].style.fontStyle="italic";
    var changeParaText = paragraph[2].style.fontStyle="italic";
    var changeParaText = paragraph[3].style.fontStyle="italic";
    
    <-- LOOP i = index starting point , condition, incrementor/counter
    
    for(var i = 0; i < paragraph.length; i++  ){
        paragraph[i].style.fontStyle = "italic"; // i changeParaText
    
    
    }
    
    

}

getElementByClassName //TWO step process

1.Select the Element we want to target

    getElementById() - Select elements by their id = <p id="para"> text</p>
    getElementsByTagName() - Select elements by their tagName
    getElementsByClassName() - Select elements by their class name 
    
2. Change whatever is we want to change in the element

    CSS styles
    Change text
    Change images
    Validation
    Create new Pages
    Change internals


EGGGGG

<p class="para"> Some text for this tutorial </p>
<p class="para"> Some text for this tutorial </p>

<button onclick="changeStyle()">Hit submit to chang ethe text <button>



function changeStyle(){

var paragraph = document.getElementByClassName('para'); //Node list is key target. hold of all classes


var changeText = paragraph[0].style.color= "red";
var changeText = paragraph[1].style.color= "red";
}

loop(){

for(i = 0; i < paragraph.length; i++){
    paragraph[i].style.color="red";
}
}
// Replace content using innerHTML innerHTML property of object

var paragraph = document.getElementByClassName('para');

var changeText = paragraph[0].innerHTML = "New Text 1"
var changeText = paragraph[0].innerHTML = "New Text 2"

//

FUNCTIONS CALLBACK FUNCTIONS


Replace content using the innerHTML

<p class="para"> Old text 1 </p>
<p class="para"> Old text 2 </p>

<button onclick="changeStyle()">Hit submit for some new text</button>


------------------------------

function changeStyle(){

    var paragraph = document.getElementsByClassName('para');
    
    var changeText = paragraph[0].innerHTML = "New Text 01";
    var changeText = paragraph[1].innerHTML = "New Text 02";
    
    //property of our object not a method -> innerHTML

}

Reading content using innerHTML

<p class="para"> Hello there </p>  // 1 + 2 = 3 line
<p class="para"> from the Moon </p>
<p class="para"> </p>

<button onclick="changeStyle()">HIt submit to combine these words</button

---------------------------------------------------------------

function changeStyle() {

    var paragraph = document.getElementByClassName('para');
    
    var firstParaText = paragraph[0].innerHTML;
    var secondParaText = paragraph[1].innerHTML;
    
    var addThem = paragraph[2].innerHTML = firstParaText + SecondParaText ;


    var firstParaText = paragraph[0].innerHTML = "";
    var secondParaText = paragraph[1].innerHTML = "";
}

----------------------------------------------------------------

// CHANGING AN IMAGE

1. Select the element we want to target
getElementById() - select elements by their id = <p id = ara" > text </p>
getElementByTagName() = select elements by their tag name = <p id ="para">text</p>
getElementsByClassName() - select elements by their class name - <p class="para"> text</p>

2. Change whatever is we want to change in that element

CSS styles
Change text - innerHTML property
Change images -src property
Validation
Create new pages
Change internals

---------------------------------

<html>

    <p class="para"> Hello there </p> //Property inside p tag
    
    <img src="stalin.jpg" id="image"/> </br></br> // attribute img tag
    
    <button onclick="changeStyle()">Hit button to change image</button>
    
    </html>
    
    ATTRIBUTE/PROPERTY
    
    --------------------------------------
    

function changeStyle() {

    document.getElementById("image").src="lenin.jpg"; //SRC property access



}


----------------------------------------


INTRO to EVENTS

<html>

    <p id="para1"> Some text for this tutorial </p>
    
    <button onclick="changeColor()">Submit</button>
    
    </html>
    
    -----------------------------------------------------------
    
    1.Choose the element where we will place our event - in this case the button element 
    
    2. Choose the event we want to use ( in this coase on click)
    
    When the even hapens (yes something has to happen!
    )
    IN other words the click) our javascript
    function (which contains our code) is called by the onclick event.
    
    --------------------------------------------------------------
    
    User triggered event / Onload event -> e.g web page loads
    
    pick element -> choose type of event single event vs multiple events
    event triggers javascript function otherwise code just  sitting there 
    
    ---------------------------------------------------------------
    
    Javascript code
    
    ---------------------------------------------------------------
    the MOUSEOVER EVENT
    
    <html>
        <p id="para" onmouseover="changeBackground()" onmouseout="backToNormal()"> Some text for this tutorial </p>
        
        </html>
        
        --------------------------------------------------------
    
    
    function changeBackground(){
    
        var text = document.getElementById("para").style.backgroundColor = "red";
    
    
    }
    
    function changeBackToNormal(){
        
        var text = document.getElementById("para").style.backgroundColor = "";
    
    }
    -------------------------------------------------------------------


    CHANGE IMAGE WITH MOUSEOVER
    
-------------------------------------

<html>
    <img src="stalin.jpg" id="image" onmouseover="newPicture()" onmouseout="oldPicture()">
    
    </html>
    
    ---------------------------------------------------
    
    function newPicture(){
    
    document.getElementById("image").src="lenin.jpg"
    
    }
    
    function oldPicture(){
    
    document.getElementById("image").src="stalin.jpg"
    }
    
    
    ------------------------------------------------------------------------
    
    CREATING A NEW ELEMENT vs updating existing elements
    
    --------------------------------------------------------------------------
    <div id="main">
    <p>Dark souls I</p>
    <p>Dark souls II </p>
    </div>
    
    &nbsp&nbsp
    
    <button onclick="newParagraph()">Click if you want to read about another battle</button>
    
    ----------------------------------------------------------------------
    
    function newParagraph(){
    
1    var element = document.createElement("p") //CREATE element METHOD
     var main = document.getElementById("main");
    
2    main.appendchild('element');
    
3    //Empty element so far need to add text node everthing is a node. in hierachy

    var text = document.createTextNode("Dark souls III")
    
    //attach this text node to parent node
    
    element.appendChild(text); //appendChild method
    
    Remember to append nodes after creating them 
    
    
    
    }
    
    parent element child element. relationship logical maya add after last element.
    
    ----------------------------------------------------------------------

    
    Creating a NEW ELEMENT part 2 
    
    ---------------------------------------------------------------------
    
    function newParagraph() {
    
    // This creates a heading
    
    var elementH = document.getElementById("h2");
    
    var main = document.getElementById("main"); //don't need two mains
    
    
    main.appendChild(elementH);
    
    var textH = document.createTextNode("Dark Souls GAME");
    
    elementH.appendChild(textH);
    
    
    
    
    
    //This creates a paragraph
        var element = document.createElement("p");
        var main = document.getElementById("main");
        
        main.appendChild(element);
        
        var text = document.createTextNode("Dark Souls III");
        
        element.apendChild(text);
    
    
    
    }

--------------------------------------------------------------------

REMOVE ELEMENT

---------------------------------------------------------------------

<html>

&nbsp&nbsp
<button onclick="newParagraph()">Click if you want to read about antoher battle</button>

<br><br>
<button onclick="removeHeader()">Click here to remove section</button>



</html>

//html -> DOM -> javascript manipulation of DOM -> everything node -> relationship nodes
----------------------------------------------------------

var textH = document.creatTextNode("Dark Souls Game");
elementH.appendChild(textH);

//THis creates a paragraph

var element = document.createElement("p");
main.appendChild(element);

var text = document.createTextNode("Dark souls II");

element.appendChild(text);

==

function removeElements(){

    var elementH = document.getElementByTagName("h2")[2]; // BRACKETS TO SPECIFY POSITION 3rd heading
    
    //specify parent node we want to remove child noe from
    
    var parent = elementH.parentNode;   //property gets parentNode of headnode <div id= main> 
    
    // THIS IS LIKE ALEGEBRA FILL IN BLANKS CREATING EQUATIONS
    
    parent.removeChild(elementH);
    
    varelementP = document.getElementByTagName("p")[4];
    varparent = elementH.parentNode; //Reuse same object as many time as you can not needed)
    parent.removeChild(elementP);

}
 ----------------------------------------------------------
 
 CREATE ATTRIBUTE
 
 ----------------------------------------------------------
 
 ELEMENT NODES , TEXT NODES, ATTRIBUTE NODES big 3 
 
 ---------------------
 
 
 css
 
 #test{
 
 color: darkblue;
 }
 
 -------------------
 
 // THis creates a paragraph
 
 var element = document.createElement("p");
 
 main.appendChild(element);
 
 var text = document.creatTextNode("Dark souls III");
 
 element.appendChild(text);
 
 var pAttribute = document.createAttribute("id"); // Any attribute create attribute
 pAttribute.value = "test"; // setting id value 
 
 element.setAttributeNode(pAttribute); // method ()
 
 // SEting vs appending setting 
 attribute side ways part of the element techincially not a child
 
 
 
 
 function removeElements(){
 
 
    var elementH = document.getElementsByTagName("h2")[2];
    var parent = elementH.parentNode;
    
    parent.removeChild(elementH);
 }
 
 var elementP = document.getElementByTagName("p")[4];
 parent.removeChild(elementP);
 
 
 ---------------------------------------------------
 
 TRAVERSING THE DOM
 
 --------------------------------------------------
 
 Targeting elements by getelement ... 
 
 Different way to target elemnt 
 Use parent child relationship to TARGET element
 
 Moving parent to child -> downwards or sideways or upwards DOM hierachy visual
 
 DOM hierachy
 
 ----------------------------------------
  
  TRAVERSING DOWNWARDS HIERACHY
 <html>
 
 <div id="main">
    
    <p id="main02">Dark souls text</p>
    <p>Dark souls text</p>
    <p>Dark souls text</p>
    <p>Dark souls text</p>
    
    </div>
    
    &nbsp&nbsp
    
    <button onclick="changeText()">Click here to change some text</button>
    
    </html>
    
    -----
    attribute text , elements 
    
  function ChangeText(){
  
    var parent = document.getElementById("main");
    var child = parent.childNodes[3];  // USING A PROPERTY -> NODE list -> WHITE SPACE is a NODE -> ALL NODES 
    
    child.style.color = "blue";
    
    // var child = parent.childNode[3];
    
    var child = parent.firstElementChild; // ELEMENTS -> first, last
 
 
  }  
 
 -----------------------------------------------------------------------
 
 TRAVERSING THE DOM CHILD TO PARENT UPWARDS
 
 ------------------------------------------------------------------
 
 selecting child paragraph then target parent node
 
 -------------------------------------------------------------------
 
 
 function changeText(){
 
    var child = document.getElementById("p1");
    
    var parent = child.parentNode; //ONLy one parent no specify compared to downward traverse
    
    //parentNode or parentElement
    parent.style.color = "blue";
 
 
 
 
 }
 
 ----------------------------------------------------------------
 TRAVERSING THE DOM SIDEWAYS HIERACHY 
 -------------------------------------------------
 
 
 
 function change() {
 
    var para2 = document.getElementById('p2');
    var sibling = para2.nextElementSibling; // RIGHT -> 
    sibling.style.coor = "blue";
    
    etc
    
    var sibling = para2.previousElementSibling; // Left <----
    
    .previousSibling
    
    when you pull out ELEMENT then white space nodes count []
 
 
 
 
 }
 
 
 --------------------------------------------------
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





























