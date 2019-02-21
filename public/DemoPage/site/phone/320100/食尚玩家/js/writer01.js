/*2017.11.07 fly*/
$(function() {
    /*程式開頭------------------------------------------------------------------------------------------------------------------------------------------------------------ */
    /*變數*/
    var
        cc,
        toggle,
        $window = $(window),
        $window_w = $(window).width(),
        $window_h = $(window).height(),
        $master = $('.master'),
        $hamburgers = $('.hamburgers'),
        $footer_arraw = $('.footer_arraw'),
        $footer_box = $('.footer_box'),
        $hll = $('.hamburgers_list li'),
        $hl1 = $('.hamburgers_list1'),
        $hhb = $('.header_hamburger_btn'),
        $hhb2 = $('.header_hamburger_btn2');

    // console.log('$window_h=' + $window_h);

    /*變數ed*/
    /*--內頁上下篇fixed-*/
    /*--控制打開關閉-*/
    var $nfn = $('.newsdetail_fixed_next'),
        $nfnl = $nfn.find('li'),
        $nfncon = $nfn.find('.contxt');


    $nfnl.each(function(i) {
        $nfnl.eq(i).find('.arraw').mouseover(function() {
            $nfnl.eq(i).find($nfncon).animate({ width: '320px' }, 250);
            $nfnl.eq(i).find('.arraw').animate({ opacity: 1 });

        });
        $nfnl.eq(i).mouseleave(function() {
            $nfnl.eq(i).find($nfncon).animate({ width: '0px' }, 250);
            $nfnl.eq(i).find('.arraw').animate({ opacity: 0.3 });
        });

    });
    /*--控制打開關閉-*/

    $window.scroll(function() {
        if ($window.scrollTop() > $content_top) {
            $nfn.css({ opacity: 1 });
        } else {
            $nfn.css({ opacity: 0 });
        }

    });
    /*--內頁上下篇fixed-ed*/

    /*--內頁社群fixed-*/

    var $nbcu = $('.newsdetail_box_community ul'),

        $content_top = $('.content').offset().top;



    $window.scroll(function() {

        if ($window.scrollTop() > $content_top + 50) {
            $nbcu.css({ opacity: 1 });
        } else {
            $nbcu.css({ opacity: 0 });
        }
    });
    /*--內頁社群fixed-ed*/

    /*子選單變換圖片*/

    $('.header_menu_nav li').each(function(i) {
        toggle = 0;

        $('.header_menu_nav li').eq(i).mouseover(function() {

            $('.header_menu_nav li').eq(i).find('img').attr("src", "https://cc.tvbs.com.tw/2017news/dev/images/menu-arraw-o.svg");
            $('.header_menu_nav li').eq(i).find('.header_menu_nav1').fadeIn(200);

        });

        $('.header_menu_nav li').eq(i).click(function() {
            toggle += 1;
            // console.log('toggle=' + toggle);

            if (toggle === 1) {
                $('.header_menu_nav li').eq(i).find('img').attr("src", "https://cc.tvbs.com.tw/2017news/dev/images/menu-arraw-o.svg");
                $('.header_menu_nav li').eq(i).find('.header_menu_nav1').fadeIn(200);
            } else if (toggle === 2) {
                $('.header_menu_nav li').eq(i).find('img').attr("src", "https://cc.tvbs.com.tw/2017news/dev/images/menu-arraw.svg");
                $('.header_menu_nav li').eq(i).find('.header_menu_nav1').fadeOut(100);
                toggle = 0;
            }
        });


        $('.header_menu_nav li').eq(i).find('.header_menu_nav1').mousedown(function() {
            $('.header_menu_nav li').eq(i).find('img').attr("src", "https://cc.tvbs.com.tw/2017news/dev/images/menu-arraw.svg");
            $('.header_menu_nav li').eq(i).find('.header_menu_nav1').fadeOut(100);
            toggle = 0;

        });

        $('.header_menu_nav li').eq(i).find('.foucs_child').mouseleave(function() {
            $('.header_menu_nav li').eq(i).find('img').attr("src", "https://cc.tvbs.com.tw/2017news/dev/images/menu-arraw.svg");
            $('.header_menu_nav li').eq(i).find('.header_menu_nav1').fadeOut(100);
            toggle = 0;
        });
    });
    /*子選單變換圖片*/

    /*主視覺影片控制*/
    var $cckl_len = $('.content_center_kv li').length;

    // console.log('$cckl_len=' + $cckl_len);

    function play() {
        callPlayer("cc", "playVideo");
    }
    var close_side_live = function() {
        $('#live_show li').find('.video').remove();
        $('#live_show li').find('.img1').css({ display: 'block' });
    }
    var close_keyview_live = function() {

        $('.content_center_kv li').find('.video').remove();
        $('.content_center_kv li').eq(0).css({ display: 'block' });
        $('.content_center_kv li').find('.img').css({ display: 'block' });
    }
    toggle = 0;
    /*主視覺*/
    $('#cover_video').click(function() {
        var videoId = $('#youtubemaxres').data('youtube-id');
        $(this).html('<div class="video"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/' + videoId + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
    });

    $('.thumbnailItem').click(function() {
        var videoId = $(this).find('img').data('youtube-id');
        // $('#cover_video').html('<div class="img"><div class="content_center_kv_list_mask_play"></div><img id="youtubemaxres" src="https://img.youtube.com/vi/'+videoId+'/maxresdefault.jpg" data-youtube-id="'+videoId+'"></div>');
        $('#cover_video').html('<div class="img"><div class="content_center_kv_list_mask_play"></div><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/' + videoId + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
        $('#cover_video').find('.content_center_kv_list_mask_play').remove();
    });
    setTimeout(function() {

        $('.live_small').on('click', function() {
            // var videoId = $(this).find('img').data('youtube-id');
            owlCarousel.trigger('next.owl.carousel');
            // $('#cover_video').html('<div class="img"><div class="content_center_kv_list_mask_play"></div><img id="youtubemaxres" src="https://img.youtube.com/vi/'+videoId+'/maxresdefault.jpg" data-youtube-id="'+videoId+'"></div>');
            // $('#cover_video').html('<div class="img"><div class="content_center_kv_list_mask_play"></div><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/'+videoId+'?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
            // $('#cover_video').find('.content_center_kv_list_mask_play').remove();
        });
    }, 2000);

    if (detectmob()) {
        $('.thumbnailItem').each(function() {
            var videoId = $(this).find('img').data('youtube-id');
            if (videoId == undefined) {
                var videoId = $(this).find('a').data('youtube-id');
            }
            //console.log(videoId);
            $(this).html('<div class="content_center_kv_list_mask2"></div><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>'+$(this).find('a').html());
        });
        $('#live_video').html('<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/' + $('#live_video img').data('youtube-id') + '" frameborder="0" allowfullscreen></iframe>');
    }
    /* $('.content_center_kv li').each(function(i) {

        if ($(window).width() >= 1023) {
            $('.content_center_kv_list li').eq(i).click(function() {
                $('.content_center_kv li').css({ display: 'none' });
                $('.content_center_kv li').find('.video').remove();
                $('.content_center_kv li').eq(i).css({ display: 'block' });
                $('.content_center_kv li').eq(i).find('.img').css({ display: 'none' });
                $('.content_center_kv li').eq(i).append(video_fn_pc[i]);

                close_side_live();

            });

            $('.content_center_kv li').eq(i).click(function() {
                $('.content_center_kv li').css({ display: 'none' });
                $('.content_center_kv li').find('.video').remove();
                $('.content_center_kv li').eq(i).css({ display: 'block' });
                $('.content_center_kv li').eq(i).find('.img').css({ display: 'none' });
                $('.content_center_kv li').eq(i).append(video_fn_pc[i]);
                close_side_live();
            });

            $('.content_center_kv_total').mouseleave(function() {
                // $('.content_center_kv li').css({ display: 'none' });
                // $('.content_center_kv li').find('.video').remove();
                // $('.content_center_kv li').eq(i).css({ display: 'block' });
                //  $('.content_center_kv li').find('.img').css({ display: 'block' });
            });

        } else {

            $('.content_center_kv_list li').eq(i).click(function() {
                toggle += 1;
                if (toggle === 1) {
                    console.log('toggle5=' + toggle);
                    $('.content_center_kv_list li').eq(i + 1).find('.img').css({ display: 'none' });
                    $('.content_center_kv_list li').eq(i + 1).append(video_fn[i]);
                    cc = setInterval(play, 500);
                } else {
                    $('.content_center_kv_list li').find('.video').remove();
                    $('.content_center_kv_list li').find('.img').css({ display: 'block' });
                    toggle = 0;
                }
            });

            $('.content_center_kv_total').mouseleave(function() {
                $('.content_center_kv_list li').find('.video').remove();
                $('.content_center_kv_list li').find('.img').css({ display: 'block' });
            });

            $('.content_center_kv_list li').find('.owl-dots').mousedown(function() {
                $('.content_center_kv_list li').find('.video').remove();
                $('.content_center_kv_list li').find('.img').css({ display: 'block' });
            });
        }
    }); */
    /*主視覺 ed*/

    /*直播主視覺*/

    /*直播主視覺*/


    /*直播塊*/
    var $lsl_len = $('#live_show li').length;

    // console.log('$lsl_len=' + $lsl_len);
    /*PC*/
    $('#live_show li').each(function(i) {

        $('#live_show li').eq(i).click(function() {
            $('#live_show li').find('.video').remove();
            $('#live_show li').find('.img1').css({ display: 'block' });
            $('#live_show li').eq(i).find('.img1').css({ display: 'none' });
            $('#live_show li').eq(i).find('.img').append(video_fn_pc[i]);
            close_keyview_live();
        });

        $('.sidebar_div').mouseleave(function() {
            // $('#live_show li').find('.video').remove();
            //    $('#live_show li').find('.img1').css({ display: 'block' });
        });
    });
    /*PC ed*/

    /*手機*/
    $('#live_show_mo li').each(function(i) {

        $('#live_show_mo li').eq(i).click(function() {
            $('#live_show_mo li').find('.video').remove();
            $('#live_show_mo li').find('.img1').css({ display: 'block' });
            $('#live_show_mo li').eq(i).find('.img1').css({ display: 'none' });
            $('#live_show_mo li').eq(i).find('.img').append(video_fn[i]);
        });

        $('.sidebar_div').mouseleave(function() {
            $('#live_show_mo li').find('.video').remove();
            $('#live_show_mo li').find('.img1').css({ display: 'block' });
        });
    });
    /*手機 ed*/
    /*直播塊*/

    /*影片陣列*/
    var video_fn_pc = [
        '<div class="video"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/ou2Wju7VTgY?autoplay=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/qb_CsR1yLdQ?autoplay=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/U3Y0YhmfeVM?autoplay=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/gVGY_lN6po4?autoplay=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/Omp3iGnn7Xk?autoplay=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%"  src="https://www.youtube.com/embed/h0hY9prUyxg?autoplay=1" frameborder="0" allowfullscreen></iframe></div>',
    ];
    var video_fn = [
        '<div class="video"><iframe width="100%" height="100%" id="cc"  src="https://www.youtube.com/embed/ou2Wju7VTgY?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%" id="cc"  src="https://www.youtube.com/embed/qb_CsR1yLdQ?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%" id="cc"  src="https://www.youtube.com/embed/U3Y0YhmfeVM?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%" id="cc"  src="https://www.youtube.com/embed/gVGY_lN6po4?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%" id="cc"  src="https://www.youtube.com/embed/Omp3iGnn7Xk?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>',
        '<div class="video"><iframe width="100%" height="100%" id="cc"  src="https://www.youtube.com/embed/h0hY9prUyxg?enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>',
    ];
    /*影片陣列 ed*/

    /*主視覺影片控制 ed*/


    /*--按鈕列固定包-*/

    var
        $fixed_bar = $('.fixed_bar'),
        $fixed_total = $fixed_bar.find('.total'),
        $fixed_bar_h = $('.fixed_bar').height(),
        $hmb = $('.header').find('.header_menu_bar'),
        $good_new_o = $('.good_news').offset().top;
		if($hmb)
        $hmb_top = $hmb.offset().top;
 
    cc = setInterval(fixed_bar_scroll, 0);

    function fixed_bar_scroll() {
   
        if ($window_w > 1000) {
            if ($window.scrollTop() >= $good_new_o + 50) {
                $fixed_total.fadeIn(300);
                $('.op').css({ opacity: 1 });
            } else {
                $fixed_total.fadeOut(0);
                $('.op').css({ opacity: 1 });
            }
        } else {
            if ($window.scrollTop()>=$hmb_top) {
                $fixed_total.css({display:'block'});
                $('.op').css({ opacity: 1 });
            } else if($window.scrollTop()<$hmb_top+100) {
                $fixed_total.css({display:'none'});
                $('.op').css({ opacity: 1 });
            }
        }
    }
    /*--按鈕列固定包- ed*/

    /*搜尋*/
    $(document).mouseup(function(e) {
        var container = $(".search_box");

        if ($('.header_search img').is(e.target)) {
            $('.search_box').toggleClass("show");
        }
        // if the target of the click isn't the container nor a descendant of the container
        else if (!container.is(e.target) && container.has(e.target).length === 0) {

            $('.search_box').removeClass("show");

        }
    });
    /*搜尋 ed*/

    /*呼叫漢堡*/
    $hhb.click(ham_go);
    $hhb2.click(ham_go);

    // $('.transparent_box').click(ham_go);

    // $(document).scroll(function(){
        // if(!$(".txt_box").is(":focus")){
            // $('html').css({ 'overflow-y': 'visible' });
            // $hhb2.find('img').attr("src", "https://cc.tvbs.com.tw/2017news/dev/images/hamburger_btn2.svg");
            // $hamburgers.css({ 'width': '0%' });
            // $master.css({ 'padding-left': '0%' });
            // $('.transparent_box').css({ display: 'none' });
        // }
    // });
	
	$('.transparent_box').on('touchstart click', function(e) {
        e.preventDefault();
        ham_go();
    });

    function ham_go() {
        $hamburgers.toggleClass("open_op");

        if ($hamburgers.hasClass("open_op")) {
            $('html').css({ 'overflow-y': 'hidden'});
            $('html').css({ 'position': 'fixed' });
            $hamburgers.css({'overflow-y':'scroll'});
            $hhb2.find('img').attr("src", "https://cc.tvbs.com.tw/2017news/dev/images/hamburger_btn2-o.svg");
            $hhb2.css({ transition: '0.3s' });
            $('.transparent_box').css({ display: 'block' });
            $hamburgers.css({ transition: '0.15s' });
            $master.css({ transition: '0.15s' });

            if ($window_w > 320) {
                $hamburgers.css({ 'width': '300px' });
                $master.css({ 'padding-left': '300px' });
            } else {
                $hamburgers.css({ 'width': '250px' });
                $master.css({ 'padding-left': '250px' });
            }

        } else {
            $('html').css({ 'overflow-y': 'visible' });
            $('html').css({ 'position': 'relative' });
			$hamburgers.css({'overflow-y':'hidden'});
            $hhb2.find('img').attr("src", "https://cc.tvbs.com.tw/2017news/dev/images/hamburger_btn2.svg");
            $hamburgers.css({ 'width': '0%' });
            $master.css({ 'padding-left': '0%' });
            $('.transparent_box').css({ display: 'none' });

        }
    }

    /*呼叫漢堡ed*/

    /*漢堡子選單*/
    $hll.each(function(i) {
        var toggle_op = 0;

        $hll.eq(i).click(function() {

            // console.log('toggle_op=' + toggle_op);
            $hll.find('.arraw').css({ 'transform': 'rotate(0deg)' });
            $hll.find($hl1).slideUp();
            toggle_op += 1;
            // console.log('toggle_op=' + toggle_op);
            if (toggle_op === 1) {
                $hll.eq(i).find('.arraw').css({ 'transform': 'rotate(90deg)' });
                $hll.eq(i).find($hl1).slideDown();

            } else {
                $hll.eq(i).find('.arraw').css({ 'transform': 'rotate(0deg)' });
                $hll.eq(i).find($hl1).slideUp();
                toggle_op = 0;

            }
        });
    });
    /*漢堡子選單ed*/
	
	
	
	
    /*呼叫footer*/
    /* toggle = 0;
    if (toggle === 0) {
        $footer_arraw.mouseover(function() {
            toggle += 1;
            $footer_arraw.css({ display: 'none' });
            $('.footer_arraw2').css({ display: 'block' });
            $footer_box.animate({ 'bottom': 0 });
            // console.log('toggle=' + toggle);

        });
    }


    $footer_box.mouseleave(function() {
        if (toggle > 0) {
            $footer_arraw.css({ display: 'block' });
            $('.footer_arraw2').css({ display: 'none' });
            $footer_box.animate({ 'bottom': '-360px' });
            toggle = 0;
        }
    }); */
	toggle = 0; 
	if (toggle === 0) { 
	$footer_arraw.mouseup(function() { 
	toggle += 1; 
	$footer_arraw.css({ display: 'none' }); 
	$('.footer_arraw2').css({ display: 'block' }); 
	$footer_box.animate({ 'bottom': 0 }); 
	// console.log('toggle=' + toggle); 

	$footer_box.prepend("<div id='footer_mask' style='width:100%;height:100vh;'></div>"); 
	}); 
	} 

	//關閉footer 
	$(".footer_arraw2.display_none").click(function() { 
	if (toggle > 0) { 
	$footer_arraw.css({ display: 'block' }); 
	$('.footer_arraw2').css({ display: 'none' }); 
	$footer_box.animate({ 'bottom': '-360px' }); 
	$("#footer_mask").remove(); 
	toggle = 0; 
	} 
	}); 

	//按下遮罩時收起footer 
	$(document).on("click", '#footer_mask', function(event) { 
	$(".footer_arraw2.display_none").click(); 
	}); 
	
	$('.special_bg .talk_b2,.master .header,.talk_kv').on('touchend', function(e){
		// setTimeout(function(){
			// if (!$footer_box.is(e.target)) {
				$footer_arraw.css({ display: 'block' });
				$('.footer_arraw2').css({ display: 'none' });
				$footer_box.animate({ 'bottom': '-360px' });
			// }
		// }, 1000);
	});
	
    /*呼叫footer ed*/

    /*滾動觸發 gotop*/
    var $ad32050_h = $('.ad_320x50_mo').height();

      
    $window.scroll(function() {

        if ($(window).width() > 747) {

            if ($window.scrollTop() > 50) {
                $('#back').css({ 'bottom': 0 });

            } else {
                $('#back').css({ 'bottom': '-100px' });
            }

        } else {
            if ($window.scrollTop() > 50) {
                $('#back').css({ 'bottom': $ad32050_h - 10 });
                $('.ad_320x50_mo').fadeIn(200);
                
                                
            } else {
                
                $('#back').css({ 'bottom': '-100px' });
                $('.ad_320x50_mo').fadeOut(100);
            }
                
         
        }

    });


    /*gotop*/
    var $el = $(scrollableElement('html', 'body'));
    var speed = 550;
    var $iconTOP = $('#back-img1');


    $($iconTOP).click(function(event) {
        event.preventDefault();
        $el.stop().animate({ scrollTop: -50 }, speed);


    });



    // 透過scrollTop檢測可用元素的函數// http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links#update4
    function scrollableElement() {
        var i, len, el, $el, scrollable;
        for (i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i];
            $el = $(el);
            if ($el.scrollTop() > 0) {

                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return [];
    }
    /*gotop ed*/
    /*滾動觸發 gotop ed*/

   
    /*議題包分享按鍵*/
    var show_share_box = function(i) {
        $(".share_box1").eq(i).find('.share_box').slideDown();
        $(".share_box1").find('.share_box').css({ right: '45px', top: '25px' });
        $(".share_box1").find('.more_div').find('.share_box').css({ left: '0', top: '25px' });
        $(".sb").find('.share_box').css({ left: '-30px', top: '25px' });
    }

    var issue_show_share_box_left = function(i) {
        $(".pack_div").eq(i).find('.pack_box.left .share_box1').find('.share_box').slideDown();
        $(".pack_div").eq(i).find('.pack_box.left .share_box1').find('.share_box').css({ right: '45px', top: '25px' });
        $(".pack_div").eq(i).find('.pack_box.left .share_box1').find('.more_div').find('.share_box').css({ left: '0', top: '25px' });
        $(".pack_div").eq(i).find('.pack_box.left .share_box1').find('.share_box').css({ left: '-30px', top: '25px' });
        // alert("left");
    }
    var issue_show_share_box_right = function(i) {
        $(".pack_div").eq(i).find('.pack_box.right .share_box1').find('.share_box').slideDown();
        $(".pack_div").eq(i).find('.pack_box.right .share_box1').find('.share_box').css({ right: '45px', top: '25px' });
        $(".pack_div").eq(i).find('.pack_box.right .share_box1').find('.more_div').find('.share_box').css({ left: '0', top: '25px' });
        $(".pack_div").eq(i).find('.pack_box.right .share_box1').find('.share_box').css({ left: '-30px', top: '25px' });
        // alert("right");
    }


    //議題包首頁分享  
    toggle = 0;
    if ($(".pack_div .pack_box").length > 0) {
        $(".share_box1").find('.share_box').hide();
        if ($(window).width() < 1023) {
            $(".pack_div").each(function(i) {
                //pack_box.left .share_icon click
                $(".pack_div").eq(i).find(".pack_box.left .share_box1 .share_icon").click(function(e) {
                    toggle += 1;
                    if (toggle === 1) {
                        issue_show_share_box_left(i);
                        $(".content").append("<div id='share_box_mask'></div>");
                    } else if (toggle === 2) {
                        $("#share_box_mask").remove();
                        toggle = 0;
                    }
                });
                //pack_box.right .share_icon click
                $(".pack_div").eq(i).find(".pack_box.right .share_box1 .share_icon").click(function(e) {
                    toggle += 1;
                    if (toggle === 1) {
                        issue_show_share_box_right(i);

                        $(".content").append("<div id='share_box_mask'></div>");
                    } else if (toggle === 2) {
                        $("#share_box_mask").remove();
                        toggle = 0;
                    }
                });
            });
        } else {
                 $(".share_box1").each(function(i) {
                $(".share_box1").find('.share_box').hide();

                if ($(window).width() > 1023) {
                    $(".share_box1").eq(i).find(".share_icon").mouseover(function() {
                        show_share_box(i);
                    });
                    $(".share_box1").eq(i).mouseleave(function() {
                        $(".share_box1").eq(i).find('.share_box').hide();
                        toggle = 0;
                    });
                    toggle = 0;

                } else {
                    $(".share_box1").eq(i).find(".share_icon").click(function(e) {
                        toggle += 1;
                        var target = $(e.target);
                        if (toggle === 1) {
                            show_share_box(target.index());
                            $(".content").append("<div id='share_box_mask'></div>");
                            // console.log("toggle = " + toggle);
                        } else if (toggle === 2) {
                            $(".share_box1").eq(target.index()).find('.share_box').hide();

                            $("#share_box_mask").remove();
                            // console.log("toggle = " + toggle);
                            toggle = 0;
                        }
                    });
                }
            });
        }
    }
    //其他頁面分享
    else {
        if ($(".share_icon").length > 0) {
            $(".share_box1").each(function(i) {
                $(".share_box1").find('.share_box').hide();

                if ($(window).width() > 1023) {
                    $(".share_box1").eq(i).find(".share_icon").mouseover(function() {
                        show_share_box(i);
                    });
                    $(".share_box1").eq(i).mouseleave(function() {
                        $(".share_box1").eq(i).find('.share_box').hide();
                        toggle = 0;
                    });
                    toggle = 0;

                } else {
                    $(".share_box1").eq(i).find(".share_icon").click(function(e) {
                        toggle += 1;
                        var target = $(e.target);
                        if (toggle === 1) {
                            show_share_box(target.index());
                            $(".content").append("<div id='share_box_mask'></div>");
                            // console.log("toggle = " + toggle);
                        } else if (toggle === 2) {
                            $(".share_box1").eq(target.index()).find('.share_box').hide();

                            $("#share_box_mask").remove();
                            // console.log("toggle = " + toggle);
                            toggle = 0;
                        }
                    });
                }
            });
        }
    }



    var plurk_desktop = function() {
        window.open('http://www.plurk.com/?qualifier=shares&status='.concat(encodeURIComponent(window.location.href)).concat(' ').concat('(').concat(encodeURIComponent(document.title)).concat(')'), "_blank");
    }


    var plurk_mobile = function() {
        window.open('http://www.plurk.com/m?qualifier=shares&content='.concat(encodeURIComponent(window.location.href)).concat(' ').concat('(').concat(encodeURIComponent(document.title)).concat(')'), "_blank");
    }

    // $(window).resize(function() {
    var bw = $(window).width();
    if (bw <= 768) {
        //mobile
        $(".plurk_link").click(function(event) {
            event.preventDefault();
            plurk_mobile();
        });
    } else {
        //desktop
        $(".plurk_link").click(function(event) {
            event.preventDefault();
            plurk_desktop();
        });
    }
    // }).trigger('resize');

    /*議題包分享按鍵 ed*/

    $(window).resize(function() {
        /*議題包分享UI在行動裝置時，按其他地方會關閉*/

        if ($(".pack_div .pack_box").length > 0) {
            $(document).on("click", '#share_box_mask', function() {
                toggle = 0;
                // console.log("toggle = " + toggle);
                $(".share_box").hide();
                $("#share_box_mask").remove();

            });
            $('.share_box ul li a').click(function(event) {
                toggle = 0;
                $(".share_box").hide();
                $("#share_box_mask").remove();
            });
        } else {
            if ($(".share_icon").length > 0) {
                if ($(window).width() < 1023) {

                    $(document).on("click", '#share_box_mask', function() {
                        toggle = 0;
                        // console.log("toggle = " + toggle);
                        $(".share_box").hide();
                        $("#share_box_mask").remove();
                    });
                    $('.share_box ul li a').click(function(event) {
                        toggle = 0;
                        $(".share_box").hide();
                        $("#share_box_mask").remove();
                    });
                }
            }
        }
    }).trigger('resize');
    /*議題包分享UI在行動裝置時，按其他地方會關閉 ed*/
    /*議題包華麗版分享按鍵*/

    $(".special_share_icon").click(function() {

        $('.special_share_div').toggleClass("open");
        if ($('.special_share_div').hasClass("open")) {
            if ($(window).width() > 1025) {
                $(".special_share_icon").css({ height: '146px' });
            } else {
                $(".special_share_icon").css({ height: '184px' });
            }
        } else {
            $(".special_share_icon").css({ height: '36px' });
            $('.special_share_div').removeClass("open");

        }
    });
    $(".special_share_icon").mouseover(function() {
        if ($(window).width() > 1025) {
            $(".special_share_icon").css({ height: '146px' });
        } else {
            $(".special_share_icon").css({ height: '184px' });
        }
    });
    $(".special_share_icon").mouseleave(function() {
        $(".special_share_icon").css({ height: '36px' });
        $('.special_share_div').removeClass("open");

    });



    /*議題包華麗版分享按鍵 ed*/
    
    /*蓋板廣告燈箱*/
    var $advertising_lightbox = $(".advertising_lightbox");
     $advertising_lightbox.click(function(){$(this).css({display:'none'});});
    /*蓋板廣告燈箱ed*/

    /*氣象開燈箱*/
    var $climate_lightbox = $(".climate_lightbox"),
        $climate_lightbox1 = $(".climate_lightbox1"),
        $header_climate_img = $(".header_climate"),
        $xx = $climate_lightbox.find('.xx');
    $header_climate_img.click(function() {
        $master.css({ 'height': $window_h });
        $climate_lightbox.fadeIn(100);

    });

    $xx.click(climate_close);
    $climate_lightbox1.click(climate_close);

    function climate_close() {
        $master.css({ 'height': 'auto' });
        $climate_lightbox.fadeOut(100);
        callPlayer("video", "stopVideo");
    }
    /*氣象開燈箱ed*/

    /*左右側欄floating---------------------------------------------------------------------------------------*/
    $window.resize(function() {

        $fixed_bar_h = $('.fixed_bar').height();
        $good_new_o = $('.good_news').offset().top;
        $hmb_top = $hmb.offset().top;
		if($('.good_news').offset()!=undefined){
			$good_new_o = $('.good_news').offset().top;
		}
		if($hmb.offset()!=undefined){
			$hmb_top = $hmb.offset().top;
		}
        $window_w = $(window).width();
        $window_h = $(window).height();
        $content_left_h = $content_left.height();
        $content_right_h = $content_right.height();
        $content_center_h = $content_center.height();
        $content_left2_h = $content_left2.height();
        // console.log('$r_box_w=' + $r_box_w);
        // console.log('中間高度=' + $content_center_h);
        // console.log('左邊高度=' + $content_left_h);
        // console.log('內頁高度=' + $content_left2_h);
        // console.log('右邊高度=' + $content_right_h);
        if($content_right_bottom)
        $content_right_bottom_o = $content_right_bottom.offset().top;
        if($content_left_bottom)
        $content_left_bottom_o = $content_left_bottom.offset().top;
        
        if($(window).width()==1024) {
            $r_box.css('width', 'auto');
            $r_box.css('position', 'relative');
			$l_box.css('width', 'auto');
            $l_box.css('position', 'relative');
        }
        content_left_scroll();
        $window.scroll(function() {
            content_left_scroll();
        });
    });
    var $content_center = $(".content_center"),
        $content_left = $(".content_left"),
        $content_left2 = $(".content_left2"),
        $content_left_w = $(".content_left_w"),
        $content_right = $(".content_right"),
        $r_box = $(".r_box"),
        $l_box = $(".l_box"),
        $r_box_w = $r_box.width(),
        $content_center_h = $content_center.height(),
        $content_right_h = $content_right.height(),
        $content_left_h = $content_left.height(),
        $content_left2_h = $content_left2.height();




    if ($content_left.length > 0) {
        var
            $content_left_bottom = $content_left.find('.bottom'),
            $content_left_bottom_o = $content_left_bottom.offset().top;
    }

    if ($content_right.length > 0) {
        var
            $content_right_bottom = $content_right.find('.bottom'),
            $content_right_bottom_o = $content_right_bottom.offset().top;
    }
	
    $window.scroll(function() {
		content_left_scroll();
    });

    function content_left_scroll() {
         // /*左欄*/
        if ($content_center_h > $content_left_h) {
            if ($(window).scrollTop() + window.innerHeight  >= $(".content_left").outerHeight() + $('.master .header').outerHeight() + $('.talk_kv').outerHeight() + 30 ) {
                $l_box.css({
                    position: 'fixed',
                    bottom: '30px',
                });
                $content_left_w.css({
                    width: $('.content_left').width(),
                    'margin-right': '30px',
                    float: 'left',
                    height: '1px'
                });
            } else {
                $l_box.css({
                    position: 'relative',
                    bottom: '0',
                });
                $content_left_w.css({
                    width: 'auto',
                    'margin-right': '0',
                    float: 'none',
                    height: '0'
                });
            }
            // if ($window_w > 1599) {
                // if ($window.scrollTop() + $window_h > $content_left_bottom_o + 30) {
                    // $l_box.css({
                        // position: 'fixed',
                        // bottom: '30px',
                    // });
                    // $content_left_w.css({
                        // width: '300px',
                        // 'margin-right': '30px',
                        // float: 'left',
                        // height: '1px'
                    // });
                // } else {
                    // $l_box.css({
                        // position: 'relative',
                        // bottom: '0',
                    // });
                    // $content_left_w.css({
                        // width: 'auto',
                        // 'margin-right': '0',
                        // float: 'none',
                        // height: '0'
                    // });
                // }
            // } else if ($window_w > 1365 && $window_w < 1600) {
                // if ($window.scrollTop() + $(window).height() > $content_left_bottom_o + 30) {
                    // $l_box.css({
                        // position: 'fixed',
                        // bottom: '30px',
                    // });
                    // $content_left_w.css({
                        // width: '300px',
                        // 'margin-right': '18px',
                        // float: 'left',
                        // height: '1px'
                    // });
                // } else {
                    // $l_box.css({
                        // position: 'relative',
                        // bottom: '0',
                    // });
                    // $content_left_w.css({
                        // width: 'auto',
                        // 'margin-right': '0',
                        // float: 'none',
                        // height: '0'
                    // });
                // }
            // }

        }
        /*左欄ed*/


        /*右欄*/
        if ($content_center_h > $content_right_h || $content_left2_h > $content_right_h) {
                var wwidth = '74.5%';
                if ($window_w > 1579) {
                    wwidth = '1560px';
                } else if ($window_w > 1345 && $window_w < 1579) {
                    wwidth = '1306px';
                } else if ($window_w > 1000 && $window_w < 1345) {
                    wwidth = '970px';
                }
                if ( $(window).scrollTop() + window.innerHeight >= $content_right.outerHeight() + $('.master .header').outerHeight() + $('.talk_kv').outerHeight() + 30 ) {
					$r_box.css({
                        width: wwidth,
                        position: 'fixed',
                        bottom: 0,
                    });
                    $content_right.css({
                        position: 'absolute',
                        right: 0,
                        bottom: '30px'
                    });
                } else {
                    $r_box.css({
                        width: 'auto',
                        position: 'relative',
                    });
                    $content_right.css({
                        position: 'relative',
                        bottom: '0'
                    });
                }
            // if ($window_w > 1579) {
                // if ($window.scrollTop() + $window_h > $content_right_bottom_o + 30) {
                    // $r_box.css({
                        // width: '1560px',
                        // position: 'fixed',
                        // bottom: 0,
                    // });
                    // $content_right.css({
                        // position: 'absolute',
                        // right: 0,
                        // bottom: '30px'
                    // });
                // } else {
                    // $r_box.css({
                        // width: 'auto',
                        // position: 'relative',
                    // });
                    // $content_right.css({
                        // position: 'relative',
                        // bottom: '0'
                    // });
                // }
            // } else if ($window_w > 1345 && $window_w < 1579) {
                // if ($window.scrollTop() + $window_h > $content_right_bottom_o + 30) {
                    // $r_box.css({
                        // width: '1306px',
                        // position: 'fixed',
                        // bottom: 0,
                    // });
                    // $content_right.css({
                        // position: 'absolute',
                        // right: 0,
                        // bottom: '30px'
                    // });
                // } else {
                    // $r_box.css({
                        // width: 'auto',
                        // position: 'relative',
                    // });
                    // $content_right.css({
                        // position: 'relative',
                        // bottom: '0'
                    // });
                // }
            // } else if ($window_w > 1000 && $window_w < 1345) {
                // if ($window.scrollTop() + $window_h > $content_right_bottom_o + 30) {
                    // $r_box.css({
                        // width: '970px',
                        // position: 'fixed',
                        // bottom: 0,
                    // });
                    // $content_right.css({
                        // position: 'absolute',
                        // right: 0,
                        // bottom: '30px'
                    // });
                // } else {
                    // $r_box.css({
                        // width: 'auto',
                        // position: 'relative',
                    // });
                    // $content_right.css({
                        // position: 'relative',
                        // bottom: '0'
                    // });
                // }
            // }

        }
        /*右欄 ed*/
    }


    /*左右側欄floating---------------------------------------------------------------------------------------ed*/

    /*行事曆*/
    // $("#datepicker").focus(function() { document.activeElement.blur(); });
    $(".showCalendar").click(function (event) {
        $("#datepicker").show();
        var visible = $("#datepicker").datepicker("widget").is(":visible");
        $("#datepicker").datepicker(visible ? "hide" : "show");
    })

    $("#datepicker").datepicker({
        
        onSelect: function(dateText, inst) {
        
            //$(".date").val(dateText);
            var date = new Date(dateText);
            var weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

            var weekday = weekdays[date.getDay()];
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();

            $('#sdayofweek').html(weekday);
            $('#sdate').html(month + '/' + day);
            $('#syear').html(year);

        },
        beforeShow: function(input, inst) {
            // $(inst).center() // not sure if this works
            if(detectmob()){
                $("html, body").scrollTop($("#datepicker").offset().top-90);
            }
        }
    });
    /*行事曆ed*/
    /*Smart Banner*/
    $('.smart_banner').find('.close').click(function() {
        $('.smart_banner').slideUp(200);

    });
    /*Smart Banner ed*/

    //字級大小
    $(".txt_level ul li").click(function() {
        //桌面版字級大小
        $(this).addClass('active').siblings().removeClass("active");
        if ($(window).width() > 1025) {
            if ($(this).index() == 0) {
                $(".h7").css({
                    "font-size": '16px',
                    "line-height": '30px'
                });
            } else if ($(this).index() == 1) {
                $(".h7").css({
                    "font-size": '18px',
                    "line-height": '32px'
                });
            } else if ($(this).index() == 2) {
                $(".h7").css({
                    "font-size": '20px',
                    "line-height": '34px'
                });
            }
        } else {
            //手機版字級大小
            if ($(this).index() == 0) {
                $(".h7").css({
                    "font-size": '16px',
                    "line-height": '26px'
                });
            } else if ($(this).index() == 1) {
                $(".h7").css({
                    "font-size": '18px',
                    "line-height": '28px'
                });
            } else if ($(this).index() == 2) {
                $(".h7").css({
                    "font-size": '20px',
                    "line-height": '30px'
                });
            }
        }
    });
    //字級大小 ed
    $("img.lazyimage").lazyload();
	
	$('.newsdetail_content img').css({width: "", height: "" });
	
	//GOOGLE搜尋機制開始
	var cx = '002254347943719830775:zrvabgc-cia';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
	
	//電腦搜尋點選放大鏡時
	$(".search_button").on('click', function(event)
	{
		event.preventDefault();
		$('#gsc-i-id1').val($('#search').val());
		$('button.gsc-search-button').click();
		setTimeout(function(){$('.gsc-adBlock iframe').ready(function(){$('.gsc-adBlock').remove()})},2000);
	});
	$(".search_button1").on('click', function(event)
	{
		event.preventDefault();
		$('#gsc-i-id1').val($(this).parent('.search_box1').find('.search1').val());
		$('button.gsc-search-button').click();
		setTimeout(function(){$('.gsc-adBlock iframe').ready(function(){$('.gsc-adBlock').remove()})},2000);
	});
	$(".search_button2").on('click', function(event)
	{
		event.preventDefault();
		$('#gsc-i-id1').val($(this).parent('.search_box1').find('.search2').val());
		$('button.gsc-search-button').click();
		setTimeout(function(){$('.gsc-adBlock iframe').ready(function(){$('.gsc-adBlock').remove()})},2000);
	});
	
	//電腦搜尋按下ENTER時
	$(".search").on('keyup',function(event) 
	{
	 if(event.keyCode==13)
	 { 	
	 $('#gsc-i-id1').val($(this).closest(".search").val());
	 $('button.gsc-search-button').click();
	  setTimeout(function(){$('.gsc-adBlock iframe').ready(function(){$('.gsc-adBlock').remove()})},2000);
	 }
	});
	$(".search1").on('keyup',function(event) 
	{
	 if(event.keyCode==13)
	 { 	
	 $('#gsc-i-id1').val($(this).closest(".search1").val());
	 $('button.gsc-search-button').click();
	  setTimeout(function(){$('.gsc-adBlock iframe').ready(function(){$('.gsc-adBlock').remove()})},2000);
	 }
	});
	$(".search2").on('keyup',function(event) 
	{
	 if(event.keyCode==13)
	 { 	
	 $('#gsc-i-id1').val($(this).closest(".search2").val());
	 $('button.gsc-search-button').click();
	  setTimeout(function(){$('.gsc-adBlock iframe').ready(function(){$('.gsc-adBlock').remove()})},2000);
	 }
	});
	
	//手機搜尋點選放大鏡時
	$(".search_button_mobile").click(function()
	{
	$('#gsc-i-id1').val($(".search_mobile").val());
	$('button.gsc-search-button').click();
	  setTimeout(function(){$('.gsc-adBlock iframe').ready(function(){$('.gsc-adBlock').remove()})},2000);
	});
	
	//手機搜尋按下ENTER時
	$(".search_mobile").on('keyup',function(event) 
	{
	 if(event.keyCode==13)
	 { 	
	 $('#gsc-i-id1').val($(".search_mobile").val());
	 $('button.gsc-search-button').click();
	  setTimeout(function(){$('.gsc-adBlock iframe').ready(function(){$('.gsc-adBlock').remove()})},2000);
	 }
	});
	
});

	function searchTag(event, id, keyword){
	  event.preventDefault();
      $('#gsc-i-id1').val(keyword);
	  $('button.gsc-search-button').click();
	  $.post('/api/recordProgramViewsCount', { programid: 1, tbl: 'keyword', keyword: keyword });
	  setTimeout(function(){$('.gsc-adBlock iframe').ready(function(){$('.gsc-adBlock').remove()})},2000);
	}
	
function detectmob() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    } else {
        return false;
    }
}




/*程式結尾------------------------------------------------------------------------------------------------------------------------------------------------------------ ed*/