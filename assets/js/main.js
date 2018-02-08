/* */
//$("a[rel^='prettyPhoto']").prettyPhoto(); // ativação do prettyphoto
$(document).ready(function() {
/*------ Script Tabs ------*/ 
$.tabControler({'tabs':'.abas','groups':'#eventos-caju'});	

/*------ Script Placeholder ------*/ 
	 if(!Modernizr.input.placeholder){

	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});
}
/*------ Script Barra-fixa ------*/ 
	var altura = window.innerHeight;
	
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >= altura) {
			jQuery(".fixed-bar").addClass("show");
		} else {
			jQuery(".fixed-bar").removeClass("show");
		}
	});

});
