$(function(){
	$('.tabs a').click(function(){
		$(this).parents('tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parents().siblings().removeClass('active');
	}   var id = $(this).attr('href');
	$(id).removeClass('hide');
	$(this).parents().addClass('active');
	return false
});
});
	
   


/*$(function(){

	var hf = function(){ 
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	}

	$(window).bind('load resize', hf);

}); */