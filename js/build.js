$(document).ready(function(){

	function MouseHover($object, className){
   		$($object).mouseover(function() {
  		$(this).addClass(className);

		});
		$($object).mouseout(function() {
  		$(this).removeClass(className);
  		});
  
	};
MouseHover($('div.wrapper-item'),'border');
MouseHover($('.slide-triangle'),'color-orange');

		$('.wrapper-post').mouseover(function() {;
  		$(this).addClass('changeStyle');
  		$(this).find( 'p' ).addClass('changeColor');
  		$(this).find( '.stars' ).addClass('changeImageStar');

		});
		$('.wrapper-post').mouseout(function() {
  		$(this).removeClass('changeStyle');
  		$(this).find( 'p' ).removeClass('changeColor');
  		$(this).find( '.stars' ).removeClass('changeImageStar');
  		});
});