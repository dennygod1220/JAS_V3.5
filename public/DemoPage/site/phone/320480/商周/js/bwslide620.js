$(window).on('load resize', function() {
  useSlider();
  findDotsTop();
});

function useSlider() {
    var $slider = $("#slider");

    if($(window).width() > 640) {
        $slider.responsiveSlides({
            auto: true,
            pager: true,
            nav: true,
            speed: 500,
            namespace: "slide",
            after: function(e) {
              calcPadding();
            }
        });

        calcPadding();
    }
    else {
      $slider.addClass('slide');
    }
}

// 計算 .slide .cap 的最大高度，帶入 .slide 的 padding-bottom
function calcPadding() {
  $('.slide').css('paddingBottom', $('.slide1_on .cap').height());
}

// 抓點點點的位置
function findDotsTop() {
  var dots = $('.slide_tabs'),
      dotTop = $('#slider img').outerHeight();
  dots.css('top', dotTop - 35).fadeIn();
}

// 第幾個是預設
function clickSlider(num) {
  $('.slide_tabs li').eq(num - 1).children('a').click();
}
