$(document).ready(function() {

	// Parallax and scroll
	$(window).scroll(function(){
		//fix nav
		if($(window).scrollTop() >= ($('.home-banner').outerHeight() - $('.navbar').outerHeight())) $('.navbar').addClass('overlay');
		else $('.navbar').removeClass('overlay');
		//top background slide
		$('.home-banner').css('backgroundPosition', 'center ' + $(window).scrollTop()/5 + 'px');
		//Bottom background slide
		//var fromBottom = $('body').height() - $(window).scrollTop();
		//$('.bottom').css('backgroundPosition', 'center -' + fromBottom/5 + 'px');
		//Scroll top button
		if($(window).scrollTop() > 600){
			if(!$('.scrollup').length){
				$('<span class="glyphicon glyphicon-chevron-up scrollup"></span>').hide().appendTo('body').fadeIn().click(function(){
					$('html,body').animate({scrollTop:0}, 600);
				});
			}
		} else {
			if($('.scrollup').length){
				$('.scrollup').fadeOut(function(){ $(this).remove() });
			}
		}
	});
	
	// Init WOW script
	new WOW().init();

});