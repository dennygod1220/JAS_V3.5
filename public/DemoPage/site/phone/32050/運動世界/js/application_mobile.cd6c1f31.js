!function(N){var Q={},V={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};N.fn.bxSlider=function(e){if(0==this.length)return this;if(1<this.length)return this.each(function(){N(this).bxSlider(e)}),this;var d={},c=this;Q.el=this;var s=N(window).width(),n=N(window).height(),o=function(){d.settings=N.extend({},V,e),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=c.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=1<d.settings.minSlides||1<d.settings.maxSlides,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"==d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!=d.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return d.cssPrefix=e[i].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"==d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),c.data("origStyle",c.attr("style")),c.children(d.settings.slideSelector).each(function(){N(this).data("origStyle",N(this).attr("style"))}),t()},t=function(){c.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),d.viewport=c.parent(),d.loader=N('<div class="bx-loading" />'),d.viewport.prepend(d.loader),c.css({width:"horizontal"==d.settings.mode?100*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?c.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),u(),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:l()}),d.settings.pager||d.viewport.parent().css({margin:"0 auto 0px"}),d.children.css({float:"horizontal"==d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",h()),"horizontal"==d.settings.mode&&0<d.settings.slideMargin&&d.children.css("marginRight",d.settings.slideMargin),"vertical"==d.settings.mode&&0<d.settings.slideMargin&&d.children.css("marginBottom",d.settings.slideMargin),"fade"==d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:d.settings.slideZIndex,display:"block"})),d.controls.el=N('<div class="bx-controls" />'),d.settings.captions&&C(),d.active.last=d.settings.startSlide==v()-1,d.settings.video&&c.fitVids();var t=d.children.eq(d.settings.startSlide);"all"==d.settings.preloadImages&&(t=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.pager&&b(),d.settings.controls&&S(),d.settings.auto&&d.settings.autoControls&&w(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),r(t,a)},r=function(t,e){var i=t.find("img, iframe").length;if(0!=i){var s=0;t.find("img, iframe").each(function(){N(this).one("load",function(){++s==i&&e()}).each(function(){this.complete&&N(this).load()})})}else e()},a=function(){if(d.settings.infiniteLoop&&"fade"!=d.settings.mode&&!d.settings.ticker){var t="vertical"==d.settings.mode?d.settings.minSlides:d.settings.maxSlides,e=d.children.slice(0,t).clone().addClass("bx-clone"),i=d.children.slice(-t).clone().addClass("bx-clone");c.append(e).prepend(i)}d.loader.remove(),f(),"vertical"==d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(g()),c.redrawSlider(),d.settings.onSliderLoad(d.active.index),d.initialized=!0,d.settings.responsive&&N(window).bind("resize",j),d.settings.auto&&d.settings.autoStart&&q(),d.settings.ticker&&A(),d.settings.pager&&z(d.settings.startSlide),d.settings.controls&&D(),d.settings.touchEnabled&&!d.settings.ticker&&O()},g=function(){var t=0,e=N();if("vertical"==d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){var s=1==d.settings.moveSlides?d.active.index:d.active.index*p();for(e=d.children.eq(s),i=1;i<=d.settings.maxSlides-1;i++)e=s+i>=d.children.length?e.add(d.children.eq(i-1)):e.add(d.children.eq(s+i))}else e=d.children.eq(d.active.index);else e=d.children;return"vertical"==d.settings.mode?(e.each(function(){t+=N(this).outerHeight()}),0<d.settings.slideMargin&&(t+=d.settings.slideMargin*(d.settings.minSlides-1))):t=Math.max.apply(Math,e.map(function(){return N(this).outerHeight(!1)}).get()),t},l=function(){var t="100%";return 0<d.settings.slideWidth&&(t="horizontal"==d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),t},h=function(){var t=d.settings.slideWidth,e=d.viewport.width();return 0==d.settings.slideWidth||d.settings.slideWidth>e&&!d.carousel||"vertical"==d.settings.mode?t=e:1<d.settings.maxSlides&&"horizontal"==d.settings.mode&&(e>d.maxThreshold||e<d.minThreshold&&(t=(e-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides)),t},u=function(){var t=1;if("horizontal"==d.settings.mode&&0<d.settings.slideWidth)if(d.viewport.width()<d.minThreshold)t=d.settings.minSlides;else if(d.viewport.width()>d.maxThreshold)t=d.settings.maxSlides;else{var e=d.children.first().width();t=Math.floor(d.viewport.width()/e)}else"vertical"==d.settings.mode&&(t=d.settings.minSlides);return t},v=function(){var t=0;if(0<d.settings.moveSlides)if(d.settings.infiniteLoop)t=d.children.length/p();else for(var e=0,i=0;e<d.children.length;)++t,e=i+u(),i+=d.settings.moveSlides<=u()?d.settings.moveSlides:u();else t=Math.ceil(d.children.length/u());return t},p=function(){return 0<d.settings.moveSlides&&d.settings.moveSlides<=u()?d.settings.moveSlides:u()},f=function(){if(d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop){if("horizontal"==d.settings.mode){var t=d.children.last(),e=t.position();m(-(e.left-(d.viewport.width()-t.width())),"reset",0)}else if("vertical"==d.settings.mode){var i=d.children.length-d.settings.minSlides;e=d.children.eq(i).position();m(-e.top,"reset",0)}}else{e=d.children.eq(d.active.index*p()).position();d.active.index==v()-1&&(d.active.last=!0),null!=e&&("horizontal"==d.settings.mode?m(-e.left,"reset",0):"vertical"==d.settings.mode&&m(-e.top,"reset",0))}},m=function(t,e,i,s){if(d.usingCSS){var n="vertical"==d.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";c.css("-"+d.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(c.css(d.animProp,n),c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),M()})):"reset"==e?c.css(d.animProp,n):"ticker"==e&&(c.css("-"+d.cssPrefix+"-transition-timing-function","linear"),c.css(d.animProp,n),c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),m(s.resetValue,"reset",0),H()}))}else{var o={};o[d.animProp]=t,"slide"==e?c.animate(o,i,d.settings.easing,function(){M()}):"reset"==e?c.css(d.animProp,t):"ticker"==e&&c.animate(o,speed,"linear",function(){m(s.resetValue,"reset",0),H()})}},x=function(){for(var t="",e=v(),i=0;i<e;i++){var s="";d.settings.buildPager&&N.isFunction(d.settings.buildPager)?(s=d.settings.buildPager(i),d.pagerEl.addClass("bx-custom-pager")):(s=i+1,d.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+s+"</a></div>"}d.pagerEl.html(t)},b=function(){d.settings.pagerCustom?d.pagerEl=N(d.settings.pagerCustom):(d.pagerEl=N('<div class="bx-pager" />'),d.settings.pagerSelector?N(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),x()),d.pagerEl.on("click","a",P)},S=function(){d.controls.next=N('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=N('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click",T),d.controls.prev.bind("click",y),d.settings.nextSelector&&N(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&N(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=N('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},w=function(){d.controls.start=N('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=N('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=N('<div class="bx-controls-auto" />'),d.controls.autoEl.on("click",".bx-start",E),d.controls.autoEl.on("click",".bx-stop",k),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?N(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),I(d.settings.autoStart?"stop":"start")},C=function(){d.children.each(function(){var t=N(this).find("img:first").attr("title");null!=t&&(""+t).length&&N(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},T=function(t){d.settings.auto&&c.stopAuto(),c.goToNextSlide(),t.preventDefault()},y=function(t){d.settings.auto&&c.stopAuto(),c.goToPrevSlide(),t.preventDefault()},E=function(t){c.startAuto(),t.preventDefault()},k=function(t){c.stopAuto(),t.preventDefault()},P=function(t){d.settings.auto&&c.stopAuto();var e=N(t.currentTarget),i=parseInt(e.attr("data-slide-index"));i!=d.active.index&&c.goToSlide(i),t.preventDefault()},z=function(i){var t=d.children.length;return"short"==d.settings.pagerType?(1<d.settings.maxSlides&&(t=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(i+1+d.settings.pagerShortSeparator+t)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(t,e){N(e).find("a").eq(i).addClass("active")}))},M=function(){if(d.settings.infiniteLoop){var t="";0==d.active.index?t=d.children.eq(0).position():d.active.index==v()-1&&d.carousel?t=d.children.eq((v()-1)*p()).position():d.active.index==d.children.length-1&&(t=d.children.eq(d.children.length-1).position()),t&&("horizontal"==d.settings.mode?m(-t.left,"reset",0):"vertical"==d.settings.mode&&m(-t.top,"reset",0))}d.working=!1,d.settings.onSlideAfter(d.children.eq(d.active.index),d.oldIndex,d.active.index)},I=function(t){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[t]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},D=function(){1==v()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0==d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index==v()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},q=function(){0<d.settings.autoDelay?setTimeout(c.startAuto,d.settings.autoDelay):c.startAuto(),d.settings.autoHover&&c.hover(function(){d.interval&&(c.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(c.startAuto(!0),d.autoPaused=null)})},A=function(){var t=0;if("next"==d.settings.autoDirection)c.append(d.children.clone().addClass("bx-clone"));else{c.prepend(d.children.clone().addClass("bx-clone"));var e=d.children.first().position();t="horizontal"==d.settings.mode?-e.left:-e.top}m(t,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&!d.usingCSS&&d.viewport.hover(function(){c.stop()},function(){var t=0;d.children.each(function(){t+="horizontal"==d.settings.mode?N(this).outerWidth(!0):N(this).outerHeight(!0)});var e=d.settings.speed/t,i="horizontal"==d.settings.mode?"left":"top",s=e*(t-Math.abs(parseInt(c.css(i))));H(s)}),H()},H=function(t){speed=t||d.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==d.settings.autoDirection?e=c.find(".bx-clone").first().position():i=d.children.first().position();var s="horizontal"==d.settings.mode?-e.left:-e.top,n="horizontal"==d.settings.mode?-i.left:-i.top;m(s,"ticker",speed,{resetValue:n})},O=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart",W)},W=function(t){if(d.working)t.preventDefault();else{d.touch.originalPos=c.position();var e=t.originalEvent;d.touch.start.x=e.changedTouches[0].pageX,d.touch.start.y=e.changedTouches[0].pageY,d.viewport.bind("touchmove",L),d.viewport.bind("touchend",$)}},L=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-d.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-d.touch.start.y);if(s<3*i&&d.settings.preventDefaultSwipeX?t.preventDefault():i<3*s&&d.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=d.settings.mode&&d.settings.oneToOneTouch){var n=0;if("horizontal"==d.settings.mode){var o=e.changedTouches[0].pageX-d.touch.start.x;n=d.touch.originalPos.left+o}else{o=e.changedTouches[0].pageY-d.touch.start.y;n=d.touch.originalPos.top+o}m(n,"reset",0)}},$=function(t){d.viewport.unbind("touchmove",L);var e=t.originalEvent,i=0;if(d.touch.end.x=e.changedTouches[0].pageX,d.touch.end.y=e.changedTouches[0].pageY,"fade"==d.settings.mode){(s=Math.abs(d.touch.start.x-d.touch.end.x))>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto())}else{var s=0;"horizontal"==d.settings.mode?(s=d.touch.end.x-d.touch.start.x,i=d.touch.originalPos.left):(s=d.touch.end.y-d.touch.start.y,i=d.touch.originalPos.top),!d.settings.infiniteLoop&&(0==d.active.index&&0<s||d.active.last&&s<0)?m(i,"reset",200):Math.abs(s)>=d.settings.swipeThreshold?(s<0?c.goToNextSlide():c.goToPrevSlide(),c.stopAuto()):m(i,"reset",200)}d.viewport.unbind("touchend",$)},j=function(){var t=N(window).width(),e=N(window).height();(s!=t||n!=e)&&(s=t,n=e,c.redrawSlider(),d.settings.onSliderResize.call(c,d.active.index))};return c.goToSlide=function(t,e){if(!d.working&&d.active.index!=t)if(d.working=!0,d.oldIndex=d.active.index,d.active.index=t<0?v()-1:t>=v()?0:t,d.settings.onSlideBefore(d.children.eq(d.active.index),d.oldIndex,d.active.index),"next"==e?d.settings.onSlideNext(d.children.eq(d.active.index),d.oldIndex,d.active.index):"prev"==e&&d.settings.onSlidePrev(d.children.eq(d.active.index),d.oldIndex,d.active.index),d.active.last=d.active.index>=v()-1,d.settings.pager&&z(d.active.index),d.settings.controls&&D(),"fade"==d.settings.mode)d.settings.adaptiveHeight&&d.viewport.height()!=g()&&d.viewport.animate({height:g()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",d.settings.slideZIndex+1).fadeIn(d.settings.speed,function(){N(this).css("zIndex",d.settings.slideZIndex),M()});else{d.settings.adaptiveHeight&&d.viewport.height()!=g()&&d.viewport.animate({height:g()},d.settings.adaptiveHeightSpeed);var i=0,s={left:0,top:0};if(!d.settings.infiniteLoop&&d.carousel&&d.active.last)if("horizontal"==d.settings.mode){s=(o=d.children.eq(d.children.length-1)).position(),i=d.viewport.width()-o.outerWidth()}else{var n=d.children.length-d.settings.minSlides;s=d.children.eq(n).position()}else if(d.carousel&&d.active.last&&"prev"==e){var o,r=1==d.settings.moveSlides?d.settings.maxSlides-p():(v()-1)*p()-(d.children.length-d.settings.maxSlides);s=(o=c.children(".bx-clone").eq(r)).position()}else if("next"==e&&0==d.active.index)s=c.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1;else if(0<=t){var a=t*p();s=d.children.eq(a).position()}if(void 0!==s){var l="horizontal"==d.settings.mode?-(s.left-i):-s.top;m(l,"slide",d.settings.speed)}}},c.goToNextSlide=function(){if(d.settings.infiniteLoop||!d.active.last){var t=parseInt(d.active.index)+1;c.goToSlide(t,"next")}},c.goToPrevSlide=function(){if(d.settings.infiniteLoop||0!=d.active.index){var t=parseInt(d.active.index)-1;c.goToSlide(t,"prev")}},c.startAuto=function(t){d.interval||(d.interval=setInterval(function(){"next"==d.settings.autoDirection?c.goToNextSlide():c.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&1!=t&&I("stop"))},c.stopAuto=function(t){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&1!=t&&I("start"))},c.getCurrentSlide=function(){return d.active.index},c.getCurrentSlideElement=function(){return d.children.eq(d.active.index)},c.getSlideCount=function(){return d.children.length},c.redrawSlider=function(){d.children.add(c.find(".bx-clone")).outerWidth(h()),d.viewport.css("height",g()),d.settings.ticker||f(),d.active.last&&(d.active.index=v()-1),d.active.index>=v()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(x(),z(d.active.index))},c.destroySlider=function(){d.initialized&&(d.initialized=!1,N(".bx-clone",this).remove(),d.children.each(function(){null!=N(this).data("origStyle")?N(this).attr("style",N(this).data("origStyle")):N(this).removeAttr("style")}),null!=N(this).data("origStyle")?this.attr("style",N(this).data("origStyle")):N(this).removeAttr("style"),N(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.settings.controls&&d.pagerEl.remove(),N(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&N(window).unbind("resize",j))},c.reloadSlider=function(t){null!=t&&(e=t),c.destroySlider(),o()},o(),this}}(jQuery),function(E){E.slidebars=function(t){var e=E.extend({siteClose:!0,scrollLock:!1,disableOver:!1,hideControlClasses:!1},t),i=document.createElement("div").style,s=!1,n=!1;""!==i.MozTransition&&""!==i.WebkitTransition&&""!==i.OTransition&&""!==i.transition||(s=!0),""!==i.MozTransform&&""!==i.WebkitTransform&&""!==i.OTransform&&""!==i.transform||(n=!0);var o=navigator.userAgent,r=!1,a=!1;/Android/.test(o)?r=o.substr(o.indexOf("Android")+8,3):/(iPhone|iPod|iPad)/.test(o)&&(a=o.substr(o.indexOf("OS ")+3,3).replace("_",".")),(r&&r<3||a&&a<5)&&E("html").addClass("sb-static");var l=E("#sb-site, .sb-site-container");if(E(".sb-left").length)var d=E(".sb-left"),c=!1;if(E(".sb-right").length)var g=E(".sb-right"),h=!1;var u,v=!1,p=E(window).width(),f=E(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"),m=E(".sb-slide");function x(){!e.disableOver||"number"==typeof e.disableOver&&e.disableOver>=p?(v=!0,E("html").addClass("sb-init"),e.hideControlClasses&&f.removeClass("sb-hide"),b()):"number"==typeof e.disableOver&&e.disableOver<p&&(v=!1,E("html").removeClass("sb-init"),e.hideControlClasses&&f.addClass("sb-hide"),l.css("minHeight",""),(c||h)&&C())}function b(){l.css("minHeight",""),parseInt(l.css("height"),10)<parseInt(E("html").css("height"),10)&&l.css("minHeight",E("html").css("height")),d&&d.hasClass("sb-width-custom")&&d.css("width",d.attr("data-sb-width")),g&&g.hasClass("sb-width-custom")&&g.css("width",g.attr("data-sb-width")),d&&(d.hasClass("sb-style-push")||d.hasClass("sb-style-overlay"))&&d.css("marginLeft","-"+d.css("width")),g&&(g.hasClass("sb-style-push")||g.hasClass("sb-style-overlay"))&&g.css("marginRight","-"+g.css("width")),e.scrollLock&&E("html").addClass("sb-scroll-lock")}function S(t,e,i){var s;if(s=t.hasClass("sb-style-push")?l.add(t).add(m):t.hasClass("sb-style-overlay")?t:l.add(m),"translate"===u)"0px"===e?o():s.css("transform","translate( "+e+" )");else if("side"===u)"0px"===e?o():("-"===e[0]&&(e=e.substr(1)),s.css(i,"0px"),setTimeout(function(){s.css(i,e)},1));else if("jQuery"===u){"-"===e[0]&&(e=e.substr(1));var n={};n[i]=e,s.stop().animate(n,400)}function o(){s.removeAttr("style"),b()}}function w(t){function e(){v&&"left"===t&&d?(E("html").addClass("sb-active sb-active-left"),d.addClass("sb-active"),S(d,d.css("width"),"left"),setTimeout(function(){c=!0},400)):v&&"right"===t&&g&&(E("html").addClass("sb-active sb-active-right"),g.addClass("sb-active"),S(g,"-"+g.css("width"),"right"),setTimeout(function(){h=!0},400))}"left"===t&&d&&h||"right"===t&&g&&c?(C(),setTimeout(e,400)):e()}function C(t,e){(c||h)&&(c&&(S(d,"0px","left"),c=!1),h&&(S(g,"0px","right"),h=!1),setTimeout(function(){E("html").removeClass("sb-active sb-active-left sb-active-right"),d&&d.removeClass("sb-active"),g&&g.removeClass("sb-active"),void 0!==t&&(void 0===typeof e&&(e="_self"),window.open(t,e))},400))}function T(t){"left"===t&&d&&(c?C():w("left")),"right"===t&&g&&(h?C():w("right"))}function y(t,e){t.stopPropagation(),t.preventDefault(),"touchend"===t.type&&e.off("click")}x(),E(window).resize(function(){var t=E(window).width();p!==t&&(p=t,x(),c&&w("left"),h&&w("right"))}),s&&n?(u="translate",r&&r<4.4&&(u="side")):u="jQuery",this.slidebars={open:w,close:C,toggle:T,init:function(){return v},active:function(t){return"left"===t&&d?c:"right"===t&&g?h:void 0},destroy:function(t){"left"===t&&d&&(c&&C(),setTimeout(function(){d.remove(),d=!1},400)),"right"===t&&g&&(h&&C(),setTimeout(function(){g.remove(),g=!1},400))}},E(".sb-toggle-left").on("touchend click",function(t){y(t,E(this)),T("left")}),E(".sb-toggle-right").on("touchend click",function(t){y(t,E(this)),T("right")}),E(".sb-open-left").on("touchend click",function(t){y(t,E(this)),w("left")}),E(".sb-open-right").on("touchend click",function(t){y(t,E(this)),w("right")}),E(".sb-close").on("touchend click",function(t){if(E(this).is("a")||E(this).children().is("a")){if("click"===t.type){t.stopPropagation(),t.preventDefault();var e=E(this).is("a")?E(this):E(this).find("a");C(e.attr("href"),e.attr("target")?e.attr("target"):"_self")}}else y(t,E(this)),C()}),l.on("touchend click",function(t){e.siteClose&&(c||h)&&(y(t,E(this)),C())}),E(".sb-toggle-submenu").off("click").on("click",function(){$submenu=E(this).parent().children(".sb-submenu"),E(this).add($submenu).toggleClass("sb-submenu-active"),$submenu.hasClass("sb-submenu-active")?$submenu.slideDown(200):$submenu.slideUp(200)})}}(jQuery),function(t,e,i){void 0!==e.SV&&t.ajaxSetup({headers:e.SV.globalAjaxHeader})}(jQuery,this),function(e,t,i){e("[data-method]").append(function(){return"\n<form action='"+e(this).attr("href")+"' method='POST' style='display:none'>\n   <input type='hidden' name='_method' value='"+e(this).attr("data-method")+"'>\n</form>\n"}).removeAttr("href").attr("style","cursor:pointer;").on("click",function(t){e(this).find("form").submit()})}(jQuery),function(o){"use strict";var e='[data-dismiss="alert"]',s=function(t){o(t).on("click",e,this.close)};s.VERSION="3.2.0",s.prototype.close=function(t){var e=o(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,""));var s=o(i);function n(){s.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),s.length||(s=e.hasClass("alert")?e:e.parent()),s.trigger(t=o.Event("close.bs.alert")),t.isDefaultPrevented()||(s.removeClass("in"),o.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(150):n())};var t=o.fn.alert;o.fn.alert=function(i){return this.each(function(){var t=o(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new s(this)),"string"==typeof i&&e[i].call(t)})},o.fn.alert.Constructor=s,o.fn.alert.noConflict=function(){return o.fn.alert=t,this},o(document).on("click.bs.alert.data-api",e,s.prototype.close)}(jQuery),$(document).ready(function(){$.slidebars(),$(".bxslider").show().bxSlider({captions:!1,pager:!1}),$(".trace-counter").on("click",function(t){$.get($(this).data("counterurl"))})});