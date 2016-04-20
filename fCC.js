Free code camp notes 

Assignment always goes from right to left. Everything to the right of the = operator is resolved before the value is assigned to the variable to the left of the operator.

i++;

is the equivalent of

i = i + 1; // i++


Usage
In mathematics, a number can be checked even or odd by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even
            
            
            
            myVar = myVar + 5;

to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

myVar += 5; will add 5 to myVar.
            
            
            "your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.
            
            
            
            
" or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

Quotes are not the only characters that can be escaped inside a string. Here is a table of common escape sequences:

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	new line
\r	carriage return
\t	tab
\b	backspace
\f	form feed



In JavaScript, when the + operator is used with a String value, it is called the concatenation operator

 Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.
 
 
 
 Bracket notation is a way to get a character at a specific index within a string.
 
 In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

var myStr = "Bob";
myStr[0] = "J";
 
Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed

way to change myStr would be to assign it with a new string, like this:

var myStr = "Bob";
myStr = "Job";
 
var array = [1,2,3];
array[0]; // equals 1
var data = array[1];  // equals 2

Unlike strings, the entries of arrays are mutable and can be changed freely.

Example

var ourArray = [3,2,1];
ourArray[0] = 1; // equals [1,2,1]
 

One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of bracket refers to the entries in the outer-most array, and each subsequent level of brackets refers to the next level of entries inside.

Example

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];
arr[0]; // equals [1,2,3]
arr[1][2]; // equals 6
arr[3][0][1]; // equals 11
 

PUSH

An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameter and "pushes" it onto the end of the array.

var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]

pop vs shift last array vs first array

FUNCTION

In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}

You can call or invoke this function by using its name followed by parentheses, like this:

functionName();

PARAMETERS
----------------


Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}

We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal "Hello" and param2 will equal "World". Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.


















You can call or invoke this function by using its name followed by parentheses, like this:

VARIABLES 
----------------
    
    
    In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.
 
 
 
Local Scope and Functions
-------------
    
Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.
 
 
 Here is a function myTest with a local variable called loc.

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // "foo"
console.log(loc); // "undefined"
loc is not defined outside of the function.
 

Global vs Local Scope in Functions
-----------------------------------------
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
 
In this example:

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
The function myFun will return "Head" because the local version of the variable is present.
 
Return a Value from a Function with Return
    ----------------------------
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
 
 Example

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
plusThree takes an argument for num and returns a value equal to num + 3.


 Assignment with a Returned Value
 ---------------------------
If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);

will call sum function, which returns a value of 17 and assigns it to ourSum variable.

Understanding Boolean Values 
----------------------------
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive.


Use Conditional Logic with If Statements 
------------------------------------------
If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions because they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns "It was true". When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".

Comparison with the Equality Operator
-------------------------------------
There are many Comparison Operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value at the right of the operator to a variable in the left.

function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal".

In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. Once it does, however, it can compare terms as follows:

   1   ==  1    // true
   1   ==  2    // false
   1   == '1'   // true
  "3"  ==  3    // true
Instructions
 
 Comparison with the Strict Equality Operator
 ----------------------------------------
Strict equality (===) is the counterpart to the equality operator (==). Unlike the equality operator, strict equality tests both the data type and value of the compared elements.

Examples

3 === 3   // true
3 === '3' // false
 
Comparison with the Inequality Operator
-----------------------------
The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
 
 Comparison with the Strict Inequality Operator
                         ------------
The strict inequality operator (!==) is the opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

Examples

3 !== 3   // false
3 !== '3' // true
4 !== 3   // true
 
 Comparison with the Greater Than Operator
 ------------------------------
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than operator will convert data types of values while comparing.

Examples

 5 > 3   // true
 7 > '3' // true
 2 > 3   // false
'1' > 9  // false
Instructions
                           
                           Comparisons with the Logical And Operator
                           -----------
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return "Yes" if num is between 6 and 9 (6 and 9 included). The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
 
 Comparisons with the Logical Or Operator
 -------------------
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
 
Introducing Else If Statements
----------------------------
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
 
 
 
 
 
 
 
 