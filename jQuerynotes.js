$(document).ready(function(){




}); 

document ready function, your code may run before your HTML is rendered, which would cause bugs.
make sure HTML rendered > javascript run