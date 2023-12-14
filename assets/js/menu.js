$(window).load(function(){

	if ($(window).width()<900) {
		$('#nav').hide();
	};

	$(window).resize(function(){
		var ancho = $(window).width();
		if (ancho < 900) {
			$('#nav').hide();
		}else{
			$('#nav').show();
		}
	});

	$('.opMenu').click(function(){
		$('#nav').slideToggle();
	});
});