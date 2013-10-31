!function($){

	$(function(){
		/* placeholder */
		 if (!("placeholder" in document.createElement("input"))) {
	    $('input[type='text'][placeholder]', 'textarea[placeholder]').each(function(){
	           $(this).val($(this).attr(placeholder));
	    });
	   	$(document.body).on({
	       "focus.placeholder" : function(){
	            if ($.trim($(this).val()) == $(this).attr("placeholder"))
	                $(this).val("");
	       },
	       "blur.placeholder" : function(){
	             if ($.trim($(this).val()) == "")
	                  $(this).val($(this).attr("placeholder"));
	        }
	   	}, 'input[type='text'][placeholder], textarea[placeholder]');
		}
	});
}(window.jQuery);