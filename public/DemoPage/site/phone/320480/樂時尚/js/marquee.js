$(function(){
	var $marqueeUl = $('.top-marquee ul'),
		$marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
		_height = $('.top-marquee').height() * -1,
		scrollSpeed = 600,
		timer,
		speed = 3000 + scrollSpeed;
 
	$marqueeli.hover(function(){
		clearTimeout(timer);
	}, function(){
		timer = setTimeout(showad, speed);
	});
 
	function showad(){
		var _now = $marqueeUl.position().top / _height;
		_now = (_now + 1) % $marqueeli.length;
 
		$marqueeUl.animate({
			top: _now * _height
		}, scrollSpeed, function(){
			if(_now == $marqueeli.length / 2){
				$marqueeUl.css('top', 0);
			}
		});
		timer = setTimeout(showad, speed);
	}
 
	timer = setTimeout(showad, speed);

});