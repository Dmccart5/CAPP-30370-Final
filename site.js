/*    ON LOAD    */

console.log('Width: ',$(window).width())



/*    ON RESIZE   */


$(window).resize( function() {
    
   console.log('Width: ',$(window).width())
    
    });
    
    
/*    ON CLICK    */

$("img").on("click", function() {

	var $alt = $("img").attr("alt")
	console.log(alt);
	
	});
	
$("h1,h2,h3,h4,h5,h6").on("click", function() {

	var $text = $("img").attr("alt")
	console.log(alt);
	
	});