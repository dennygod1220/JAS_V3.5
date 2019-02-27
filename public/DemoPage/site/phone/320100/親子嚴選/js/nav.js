//設定主選單PC 模式,RWD 模式
var ww = document.body.clientWidth;

$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	adjustMenu();
	menuHover();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 769) {
		$(".toggleMenu, .phone").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
		//最新文章則數
		$("#newPostsNum").val(1);
		//熱門部落客則數
		$("#hotBloggerNum").val(2);
	} 
	else if (ww >= 769) {
		$(".toggleMenu, .phone").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
		//最新文章則數
		$("#newPostsNum").val(2);
		//熱門部落客則數
		$("#hotBloggerNum").val(4);
	}	
}

// Go Top
$(document).ready(function() {
	// Show or hide the sticky footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});
	
	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();
		
		$('html, body').animate({scrollTop: 0}, 300);
	})
});

var menuHover = function (){
	var _ary = $('.nav-bar > .nav > li > a');
	$(_ary).hover(
	function (){
		var tmp_ary = $(this).attr('data-file').split(',');
		$(this).find('img').attr('src' , tmp_ary[1]);
	}
	,
	function (){
		var tmp_ary = $(this).attr('data-file').split(',');
		$(this).find('img').attr('src' , tmp_ary[0]);
	});
};