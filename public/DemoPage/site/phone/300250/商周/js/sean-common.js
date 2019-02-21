// 內頁，分享按鈕效果
$(function() {
	effectShare();
});
function effectShare() {
	var $window = $(window);
	var $share = $('.socialshare');
	var $pageBtn = $('.readthis').eq(0);

	// 螢幕小於480，且分享按鈕存在時才執行
	if($('body').has('.socialshare').length > 0 && $(window).width() <= 480) {
		shareOpacity();
		
		$window.on('scroll', function() {
			shareHide();
		});
	}

	// share按鈕在滑動時變淡
	function shareOpacity() {
		$window.on({
			'touchstart touchmove': function() {
				$share.css('opacity', '.38');
			},
			'touchend': function() {
				$share.css('opacity', '1');
			}
		});
	}

	// 分頁按鈕到螢幕頂部時，share按鈕隱藏
	function shareHide() {
		if($pageBtn.offset().top - $window.scrollTop() <= 0) {
			$share.addClass('-hide');
		}
		else {
			$share.removeClass('-hide');
		}
	}
}

// for IG
$(window).on('load', function() {
	setTimeout(function(){
		$('iframe.instagram-media').each(function() {
			$(this).css({
				'height': $(this).attr('height'),
				'position': 'initial'
			});
		});
	}, 1000);
});