$(function(){
    // 照片 resize
    var ratio;
    var w_width = $(window).width();
    var img     = $('.user img');
    img.css("height","").css("width","");
    img.each(function(key,value){
        var width  = $(this).width();
        var height = $(this).height();
        if(width > w_width){
            ratio = ((w_width-20)/width);
            width  = width*ratio;
            height = height*ratio;
            $(this).width(width);
            $(this).height(height);
        }
    });

    $("#content_form").submit(function(){
        if(!$("#content2").val()){
            alert('請輸入留言內容');
            return false;
        }else if($("#content2").val().length > 200){
            alert('留言內容超過字數限制');
            return false;
        }
    });

    $("#reply_content_form").submit(function(){
        if(!$("#reply_content").val()){
            alert('請輸入留言內容');
            return false;
        }else if($("#reply_content").val().length > 200){
            alert('留言內容超過字數限制');
            return false;
        }
    });

    function lastAdded(){
        var perpage = 20;
        var target = $(".message:hidden");
        if (target.length){
            target.slice(0,perpage).each(function(){
            }).slideDown();
        }
    }

    $('#gb_more').click(function(){
        var data_cnt = $(this).attr('total_cnt');
        var cnt = $(this).attr('ckcnt');
        lastAdded();
        $(this).attr('ckcnt', parseInt(cnt)+1);
        if((parseInt(cnt)+1) == Math.ceil(parseInt(data_cnt)/20)){
            $(this).hide();
        }
    });

    if(window.location.hash == '#guestbook') {
        $('html,body').animate({scrollTop:$('#guestbook').offset().top}, 800);
    }

    // lazy load
    $("article img").lazyload({
        effect : "show",
        failurelimit : 10,
        threshold    : 1500,
        placeholder: base_url + '/images/loader_logo.gif',
    });
});
