JQuery(window).load(function(){

	if (JQuery(window).width()<900) {
		JQuery('#nav').hide();
	};

	JQuery(window).resize(function(){
		var ancho = JQuery(window).width();
		if (ancho < 900) {
			JQuery('#nav').hide();
		}else{
			JQuery('#nav').show();
		}
	});

	JQuery('.opMenu').click(function(){
		JQuery('#nav').slideToggle();
	});
});