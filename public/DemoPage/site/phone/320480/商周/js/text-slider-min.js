!function($){$.fn.textSlider=function(e){var s=$(".js-text-slider li"),t=$(".js-text-slider-btn a"),a=0,n=s.length;0==a&&$(".js-text-slider-btn .prev").addClass("-unclick"),t.on("click",function(e){return e.preventDefault(),e.stopPropagation(),$(this).is(".next")&&n-2>=a?($(".js-text-slider-btn .prev").removeClass("-unclick"),s.eq(a).removeClass("fadeIn").addClass("fadeOut").hide(),s.eq(a+1).removeClass("fadeOut").addClass("fadeIn").show(),a==n-2&&$(this).addClass("-unclick"),a++):$(this).is(".prev")&&a>0?($(".js-text-slider-btn .next").removeClass("-unclick"),s.eq(a).removeClass("fadeIn").addClass("fadeOut").hide(),s.eq(a-1).removeClass("fadeOut").addClass("fadeIn").show(),1==a&&$(this).addClass("-unclick"),a--):void 0});var l;l=function(){$(".js-text-slider-btn .next").click()};var d=setInterval(l,e);$(".js-text-slider").hover(function(){clearInterval(d)},function(){d=setInterval(l,e)})}}(jQuery);