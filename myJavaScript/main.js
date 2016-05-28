$(document).ready(function(){

	if($('.anystretch').length !== 0){
			$('.anystretch').children('img')[0].onload = function(){
			$('.anystretch').animate({opacity:1},2000);
		};
	}
	$('#header #main-nav ul.container li:last-child a').css('color','#DE7D76');
	$('#header #main-nav ul.container li:last-child').append('<i class="fa fa-heart" style="color:#DE7D76;padding-left:3px;"></i>');

});