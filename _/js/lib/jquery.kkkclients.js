define(["jquery"], function($) {
  $.fn.kkkclients = function() {  		
  		var _move 	= $('<a href="#" id="right-triangle"></a>'),
  		_root 		= $(this),
  		_list 		= $(_root.find('ul'));
  		
  		slideSpeed 	= 0.6;
  		moving 		= false;

  		// init
  		_list.height(300);
      	_root.append(_move);
      	_root.find('li:odd').addClass('lower-part').css({'top': '125px','clip-path':'url(#hexagonal-mask-down)'}).find('img').css({'left':_root.width()});
      	_root.find('li:even').addClass('upper-part').css({'clip-path':'url(#hexagonal-mask-up)'}).find('img').css({'left':-_root.width()});
      	_root.find('li:nth-child(-n+2)').addClass('active').find('img').css({'left':0});

      	_move.on('click', function(e) {
      		e.preventDefault();

      		if(!moving) {
      			var upItem 			= _list.find('li.upper-part.active').find('img'),
	      			downItem 		= _list.find('li.lower-part.active').find('img'),
	      			nextUpperItem	= $(upItem).parent().nextAll('.upper-part:first').find('img'),
	      			nextLowerItem	= $(downItem).parent().nextAll('.lower-part:first').find('img'),
	      			tl 				= new TimelineLite();

	      		if(nextUpperItem.html() == undefined || nextLowerItem.html() == undefined) {
	      			nextUpperItem	= _list.find('.upper-part:first').find('img');
	      			nextLowerItem	= _list.find('.lower-part:first').find('img');
	      		}



	      		// init
	      		upItem.css({'left': 0});
	      		downItem.css({'left': 0});
	      		nextUpperItem.css({'left':-_root.width()});
	      		nextLowerItem.css({'left':_root.width()});
	      		moving = true;

	      		TweenLite.to(upItem, slideSpeed, {left:_root.width(), ease:Expo.easeIn});
	      		TweenLite.to(nextUpperItem, slideSpeed, {left:0, ease:Expo.easeIn, onStartParams:[upItem], onStart:function(item) {
	      			item.parent().removeClass('active');
				}, onCompleteParams:[nextUpperItem], onComplete:function(item){
					item.parent().addClass('active');
				}});
	      		TweenLite.to(downItem, slideSpeed-0.1, {left:-_root.width(), ease:Power4.easeIn, delay:0.2, });
	      		TweenLite.to(nextLowerItem, slideSpeed-0.1, {left:0, ease:Power4.easeIn, delay:0.2, onStartParams:[downItem], onStart:function (item) {
	      			item.parent().removeClass('active');
				}, onCompleteParams:[nextLowerItem], onComplete:function(item){
					item.parent().addClass('active');
					moving = false;
				}});
      		}      		
      	});
  };
});
