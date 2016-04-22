$(document).ready(function(){




}); 

document ready function, your code may run before your HTML is rendered, which would cause bugs.
make sure HTML rendered > javascript run

jQuery selectrs an HTML ELEMENT -> selector then does something to that element 

$ < -- selector

eg


.addClass() function -> jQuery add class to an element HTML 

class well by using the $(".well") selector.

add.Class("x y") multiple classes

$("button").....
$(".class")....
$("#id")........


Now you know three ways of targeting elements: by type: $("button"), by class: $(".btn"), and by id $("#target1").

jQuery's removeClass() function.

We can also change the CSS of an HTML element directly with jQuery.

---------------
jQuery has a function called .css() that allows you to change the CSS of an element.

Here's how we would change its color to blue:

$("#target1").css("color", "blue");

adjust property of elements e.g button disabled .prop(); $("button").prop("disabled", true);

-------

.html() add HTML TAGS / TEXT within an element

$("h3").html("<em>jQuery Playground</em>");
-------------------------------------
.text() -> only add TEXT no alter tags


----------

.remove() that will remove an HTML element entirely
$("").remove() -> remove target element or "selector"
--------------

jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element.


select HTML elements -> appendTo() another HTML element

$("selector").appendTo("selector");
------------------------
