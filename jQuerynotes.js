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