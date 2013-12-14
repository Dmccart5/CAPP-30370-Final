/*    ON LOAD    */

console.log('Width: ',$(window).width());



/*    ON RESIZE   */


$(window).resize( function() {
    
   console.log('Width: ',$(window).width())
    
    });
    
    
/*    ON CLICK    */

$(document).on('click', 'img', function() {

	var $this = $(this);
	console.log('Alt: ', $this.attr("alt"));
	console.log('Width: ', $this.width());
	console.log('Height: ', $this.height());
	
	});
	
$(document).on('click', 'h1,h2,h3,h4,h5,h6', function() {

    var $this = $(this);
    console.log('Text: ', $this.text());
    console.log('Color: ', $this.css('color'));
    console.log('Font Size: ', $this.css('font-size'));
	
	});
