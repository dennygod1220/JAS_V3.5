$(function(){
    $('.list_icon,.setBox .setting').on('click',function(){
        if ( $(".mobile_page").css('position') == 'fixed'){
            $('.mobile_page').css({
                'transform': '',
                'transition-duration': '0.6s',
                '-webkit-transform': '',
                '-webkit-transition-duration': '0.6s',
                '-moz-transform': '',
                '-moz-transition-duration': '0.6s',
                '-o-transform': '',
                '-o-transition-duration': '0.6s',
                'position' : '',
            });
        }else{
            $('.mobile_page').css({
                'transform': 'translate3d(60%, 0, 0 )',
                'transition-duration': '0.6s',
                '-webkit-transform': 'translate3d(60%, 0, 0 )',
                '-webkit-transition-duration': '0.6s',
                '-moz-transform': 'translate3d(60%, 0, 0 )',
                '-moz-transition-duration': '0.6s',
                '-o-transform': 'translate3d(60%, 0, 0 )',
                '-o-transition-duration': '0.6s',
                'position' : 'fixed',
            });
            $(window).scrollTop(0);
        }
    });

    $('main').on('touchstart',function(){
        if ($(".mobile_page").css('position') == 'fixed'){
            $('.mobile_page').css({
                'transform': '',
                'transition-duration': '0.6s',
                '-webkit-transform': '',
                '-webkit-transition-duration': '0.6s',
                '-moz-transform': '',
                '-moz-transition-duration': '0.6s',
                '-o-transform': '',
                '-o-transition-duration': '0.6s',
                'position' : '',
            });
            return false;
        }
    });

    $("#m_slide").toggle(
        function(){
            $('#m_hide').slideDown();
        },
        function(){
            $('#m_hide').slideUp();
        }
    );

    // side search
    $("#search_bth").click(function(){
        $("#search_box").submit();
    });

    // top search
    $("#search_bth_main").click(function(){
        $("#search_box_main").submit();
    });

    $("#search_box_main,#search_box").submit(function(){
        if ($(this).find("input[id^=key_word]").val() == ''){
            return false;
        }else{
            return true;
        }
    });

    $("img").error(function(){
        $(this).unbind("error").attr("src", base_url + "/images/icon_280280.jpg");
    });
});
