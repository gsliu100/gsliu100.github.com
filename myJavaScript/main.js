$(document).ready(function(){

	if($('.anystretch').length !== 0){
			$('.anystretch').children('img')[0].onload = function(){
			$('.anystretch').animate({opacity:1},2000);
		};
	}
	$('#header #main-nav ul.container li:last-child a').css('color','#F44336');
	$('#header #main-nav ul.container li:last-child').append('<i class="fa fa-heart" style="color:#F44336;padding-left:3px;"></i>');

});