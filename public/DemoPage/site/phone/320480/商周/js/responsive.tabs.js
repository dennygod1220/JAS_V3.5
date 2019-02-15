;(function($){
	$.fn.respTabs = function(options){
		var defaults = {
			startIndex		: 0,					           // 默認顯示第幾個
			activeClass 	: 'active',				       // active
			model			: 'tabs',				             // 插件模式: tabs 或 accordions
			responsive		: true,					         // rwd
			responsiveClass : 'responsive-tabs',	 // rwd class
			fnEvent			: 'click',				         // 觸發事件的類型，click 或 mouseover
			toggles 		: false,				           // 隱藏自身的切换，只在accordions模式有效
			hidenContent	: false					         // 默認隱藏Accordions内容，只在accordions模式有效
    }
    var options = $.extend(defaults, options);


		//核心部分代码
		return this.each(function() {
	    var self = $(this);
			var tabList = self.find('.tabs-list');
			var tabListItem = tabList.find('li');
			var tabContent = '';
			var accordionHandle = '';
			var firstLoad = true;

			switch(options.model) {
				case 'tabs':
					tabContent = self.children().children('.tab-content');
					break;
				case 'accordions':
					tabContent = self.children('.accordion-content');
					break;
			}

			// 執行功能
			var addRepsAccording = function() {
				self.addClass(options.responsiveClass);
				tabListItem.each(function(){
					var currentIndex = tabListItem.index($(this));
					var accordionActiveCLass = $(this).hasClass(options.activeClass)? options.activeClass : '';
					tabContent.eq(currentIndex).before('<div class="accordion-handle '+ accordionActiveCLass +'"><h4>'+ $(this).text() +'</h4><i></i></div>');
				});
			},
			showTabs = function(index){
				tabListItem.eq(index).addClass(options.activeClass).siblings('li').removeClass('active '+options.activeClass);
				tabContent.eq(index).show().siblings('.tab-content').hide();

				// active
				if( options.responsive ){
					accordionHandle = self.children().children('.accordion-handle');
					accordionHandle.eq(index).addClass(options.activeClass).siblings('.accordion-handle').removeClass('active '+options.activeClass);
				}
			},
			showAccording = function(index){
				accordionHandle = options.model == 'accordions' ? self.children('.accordion-handle') : self.children().children('.accordion-handle');
				accordionHandle.eq(index).addClass(options.activeClass).siblings('.accordion-handle').removeClass('active '+options.activeClass);
				tabContent.eq(index).slideDown().siblings('.tab-content, .accordion-content').slideUp();

				// active
				if( options.responsive && tabListItem.length ){
					tabListItem.eq(index).addClass(options.activeClass).siblings('li').removeClass('active '+options.activeClass);
				}
			},
			toggleAccording = function(index){
				accordionHandle = self.find('.accordion-handle');
				if( firstLoad ){
					accordionHandle.eq(index).addClass(options.activeClass).siblings('.accordion-handle').removeClass('active '+options.activeClass);
					tabContent.eq(index).slideDown().siblings('.tab-content, .accordion-content').slideUp('fast');
					firstLoad = false;
				}else{
					if( tabContent.eq(index).is(':hidden') ){
						tabContent.eq(index).slideDown();
						accordionHandle.eq(index).addClass(options.activeClass);
					}else{
						tabContent.eq(index).slideUp();
						accordionHandle.eq(index).removeClass('active '+options.activeClass);
					}
				}
			},
			// 隱藏According的内容
			hideAccordingContent = function(){
				tabContent.hide();
				accordionHandle.removeClass('active '+options.activeClass);
			}


			// 初始化函数
			_init = function(){
				if( options.model == 'tabs' ){
					if( options.responsive ) addRepsAccording();
					showTabs(options.startIndex);
					showAccording(options.startIndex);
				}else{
					if( options.toggles ){
						toggleAccording(options.startIndex);
	  				}else{
	  					showAccording(options.startIndex);
					}

					if( options.hidenContent ) hideAccordingContent();
				}
			}
			_init();

			tabListItem.bind( options.fnEvent, function(){
				var currentIndex = tabListItem.index($(this));
				showTabs(currentIndex);
			});

			accordionHandle.bind( 'click', function(){
				var currentIndex = accordionHandle.index($(this));

				if( options.toggles && options.model == 'accordions' ){
					toggleAccording(currentIndex);
				}else{
					showAccording(currentIndex);
				}
			});


	    });//end this.each

	}
})(jQuery);

// 首頁 .bwtabs 第一個增加 .more
function ulHeight() {

	var thumb_group = $('.bwtabs .tab-content > ul');
	var thumb_height = [];

	$.each(thumb_group, function() {
		thumb_height.push($(this).outerHeight());
	});

	// 從陣列裡面找到最小值
	var thumbMaxHeight = Math.max.apply(Math, thumb_height);

	$('.bwtabs .tab-content > ul').css({
		'minHeight': thumbMaxHeight,
		'maxHeight': thumbMaxHeight
	});
}
$(window).on('load resize', function() {
	if($(window).width() > 1024) {
		ulHeight();
	}
	else {
		$('.bwtabs .tab-content > ul').css({
			'minHeight': 'initial',
			'maxHeight': 'initial'
		});
	}
});
