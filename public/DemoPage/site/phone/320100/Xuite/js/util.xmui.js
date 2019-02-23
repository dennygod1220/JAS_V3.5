(function($, window) {
	/*================*
	   自定的特殊事件
	 *================*/
	(function() {
		/* safeVclick event 
		 * 在 vclick 事件觸發後馬上升起一個 div 檔住 syntheized click event，避免又觸發下面長出來的內容的click事件
		 */
		var $divShield;
		// implement div shield with special event
		$.event.special.safeVclick = {
			setup: function(data, namespaces) {
				// setup div sheild if it's not existed
				if(!$divShield) {
					$divShield = $('<div id="vclick-shield" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:gray;opacity: 0;z-index:9999;"></div>')
					.bind('click', function(e) {
						//stop any futher event propogation.
						return false;
					})
					.appendTo('body');
				}
			},

			// open shield when vclicked
			add: function(handleObj) {
				var oldHandler = handleObj.handler;
				// bind vlick event
				$(this).bind('vclick', function(e) {
					// put on shield
					$('#vclick-shield').show();
					// set timer to dismiss shield
					setTimeout(function() {
						$('#vclick-shield').hide();
					}, 1000);
					// call event handler
					handleObj.handler.apply(this, arguments);
				});

			}
		};
	})(jQuery, this);

	/*
	 * 取得視窗寬高
	 */
	$.getViewportSize = function() {
		var e = window, a = 'inner';
		if(!('innerWidth' in window)){
			a = 'client';
			e = document.documentElement || document.body;
		}
		return {
			width : e[ a+'Width' ],
			height : e[ a+'Height' ]
		};
	};

	$.getEnv = function() {
		if(window.location.href.match(/\:.*\.dev.xuite.net/))
			return 'dev';
		else if(window.location.href.match(/\:.*\.stage.xuite.net/))
			return 'stage';
		else
			return 'production';
	};

	$.getMobileHost = function() {
		var env = $.getEnv();
		if(env === 'production')
			return '//m.xuite.net';
		else
			return '//m.' + env + '.xuite.net';
	};

	$.redirectLogin = function(url) {
		// var loginBaseUrl = $.getMobileHost() + '/login.php?act=login&url=';
		var loginBaseUrl = $.getMobileHost() + '/login';
		// if(!url) {
		// 	url = window.location.href;
		// }
		// window.location.href = loginBaseUrl + encodeURIComponent(url);
		window.location.href = loginBaseUrl ;
	};

	$.redirectLogout = function(url) {
		var loginBaseUrl;
		if(window.location.href.match(/yo[a-zA-Z0-9\.]*\.xuite.net/) || window.location.href.match(/iamblack\.dev/)) {
			loginBaseUrl = window.location.protocol + "//" + window.location.hostname + '/modules/cht_member/logout.php?curl=';
			url = '/m/';
		} else
			loginBaseUrl = $.getMobileHost() + '/login.php?act=logout&url=';

		if(!url) {
			url = window.location.href;
		}
		window.location.href = loginBaseUrl + encodeURIComponent(url);
	};

	/*
	 * 顯示/隱藏畫面遮罩
	 * @param {string} mode show|hide
	 * @param {functino} callback 搭配 mode='show' 時傳入，在使用者touch/click 遮罩的時候觸發 callback
	 */
	$.blackCover = function(mode, callback) {
		if($('#xmui-black-cover').length <= 0) {
			$('<div id="xmui-black-cover"></div>').appendTo($('body')).hide().css({
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				background: 'black',
				opacity: '0.6',
				zIndex: '98'
			});
			/*
			$('#xmui-black-cover').bind('click.blackcover', function(e) {
				$.blackCover('hide');
			});
			*/
		}

		if(mode === 'show') {
			$('#xmui-black-cover').show();
			$(document).bind('touchmove.blackcover', function(e) { e.preventDefault();});

			// 如果有提供 callback，在使用者touch/click 遮罩的時候觸發 callback
			if(callback) {
				$('#xmui-black-cover').bind('click.blackcover_customcallback', callback);
			}
		} else if(mode === 'hide') {
			$('#xmui-black-cover').unbind('click.blackcover_customcallback');
			$('#xmui-black-cover').hide();
			$(document).unbind('touchmove.blackcover');
		}
	}

	/*
	 * 取得使用者目前位置
	 * 對取得的位置進行 cache，時間太近的話就不會重新抓位置
	 */
	$.getLocation = function(callback) {
		var TIMEOUT = 6; //seconds
		var EXPIRED_TIME = 10; //seconds
		if(window.navigator && window.navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function(position) {
					if(callback)
						callback({ok: true, location:position});
				},
				function(positionError) {
					var causes = ['沒有取得定位的權限', '無法取得定位', '時間內無法完成定位'];
					if(callback) {
						callback({ok: false, msg: causes[positionError.code - 1], positionError: positionError});
					}
				},
				{
					enableHighAccuracy: true,
					timeout: TIMEOUT * 1000,
					maximumAge: EXPIRED_TIME * 1000
				}
			);
		} else {
			callback({ok: false, msg: '瀏覽器不支援地理定位。'});
		}
	};

	/*
	 * 取得 url 中的 get 參數
	 */
	$.getVars = function() {
		var ret = {};
		var getStr = window.location.search.substring(1);
		if(getStr) {
			var gets = getStr.split('&');
			for (var i = 0; i < gets.length; i++) {
				var pair = gets[i].split('=');
				ret[pair[0]] = pair[1];
			}
		}
		return ret;
	};
})(jQuery, window);
