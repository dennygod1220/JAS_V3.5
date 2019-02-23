(function($,undefined){if(typeof($.xmobj)==="undefined"){$.xmobj={}}$.xmobj.swipe=function(callback1,callback2){var swipe=this;this.slideContainer=null;this.wrapper=null;this.slides=null;this.distanceX=0;this.startX=0;this.startY=0;this.preferredWidth=0;this.preferredHeight=0;this.direction="";this.timer=null;this.timerCounter=0;this.isTouchStart=false;this.maxDistance=0;this.currentDistance=0;this.isNavBar=false;this.navBar=null;this.isTouchMove=false;this.wrapperWidth=320;this.leftFinish=callback1;this.rightFinish=callback2;this.timerResettingValue=null;this.currentSlide=0;this.initSwipe=function(wrapper,wrapperWidth){window.setTimeout(function(){window.scrollTo(0,1)},100);swipe.wrapper=wrapper;swipe.slideContainer=$(".slideContainer",$(swipe.wrapper)).get(0)||swipe.wrapper.getElementsByClassName("slideContainer")[0];swipe.slides=swipe.slideContainer.children;swipe.wrapperWidth=wrapperWidth;swipe.preferredWidth=swipe.wrapperWidth;swipe.slideContainer.style.width=swipe.slides.length*100+"%";swipe.maxDistance=swipe.slides.length*swipe.wrapperWidth;swipe.initEvents()},this.initNavBar=function(navbar){swipe.isNavBar=true;swipe.navBar=navbar;for(var n=0;n<navbar.length;n++){var navChild=$(navbar[n]).parent().find(".navscope");var navLeft=navChild.first();var navRight=navChild.last();navLeft.bind("click",function(){if(!(swipe.currentDistance==0)){swipe.moveRight()}});navRight.bind("click",function(){if(!(swipe.currentDistance==-(swipe.maxDistance-swipe.wrapperWidth))){swipe.moveLeft()}})}},this.initEvents=function(){swipe.wrapper.addEventListener=swipe.wrapper.addEventListener||swipe.wrapper.attachEvent;swipe.wrapper.addEventListener("mousedown",swipe.startHandler,false);swipe.wrapper.addEventListener("mousemove",swipe.moveHandler,false);swipe.wrapper.addEventListener("mouseup",swipe.endHandler,false);swipe.wrapper.addEventListener("touchstart",swipe.startHandler,false);swipe.wrapper.addEventListener("touchmove",swipe.moveHandler,false);swipe.wrapper.addEventListener("touchend",swipe.endHandler,false);window.addEventListener=window.addEventListener||window.attachEvent;window.addEventListener("orientationchange",swipe.orientationHandler,false);window.addEventListener("resize",swipe.orientationHandler,false)},this.orientationHandler=function(event){return(function(){clearTimeout(swipe.timerResettingValue);swipe.timerResettingValue=setTimeout(function(){var width=swipe.wrapper.clientWidth;swipe.maxDistance=swipe.slides.length*width;swipe.wrapperWidth=width;swipe.currentDistance=-(swipe.currentSlide*width);swipe.slideContainer.style.webkitTransform="translate3d("+swipe.currentDistance+"px, 0, 0)";swipe.slideContainer.style.MozTransform="translate3d("+swipe.currentDistance+"px, 0, 0)";swipe.slideContainer.style.msTransform="translateX("+swipe.currentDistance+"px)"},500)})()},this.startHandler=function(event){clearInterval(swipe.timer);swipe.startX=(event.touches)?event.touches[0].pageX:event.pageX;swipe.startY=(event.touches)?event.touches[0].pageY:event.pageY;swipe.timer=setInterval(function(){swipe.timerCounter++},10);swipe.isTouchStart=true;swipe.slideContainer.style.webkitTransitionDuration=0+"ms";swipe.slideContainer.style.MozTransitionDuration=0+"ms";swipe.slideContainer.style.msTransitionDuration=0+"ms"},this.moveHandler=function(event){var checkDdiffY=false;var moveX=(event.touches)?event.touches[0].pageX:event.pageX;var moveY=(event.touches)?event.touches[0].pageY:event.pageY;checkDiffY=Math.abs(moveY-swipe.startY)>Math.abs(moveX-swipe.startX);if(checkDiffY){clearInterval(swipe.timer);swipe.timerCounter=0;swipe.isTouchStart=false;swipe.distanceX=0;return}else{event.preventDefault()}if(swipe.isTouchStart){swipe.isTouchMove=true;swipe.distanceX=moveX-swipe.startX;swipe.slideContainer.style.webkitTransform="translate3d("+(swipe.distanceX+swipe.currentDistance)+"px, 0,0)";swipe.slideContainer.style.MozTransform="translate3d("+(swipe.distanceX+swipe.currentDistance)+"px, 0,0)";swipe.slideContainer.style.msTransform="translateX("+(swipe.distanceX+swipe.currentDistance)+"px)"}},this.endHandler=function(event){if(swipe.isTouchMove){clearInterval(swipe.timer);if(swipe.distanceX>0){swipe.direction="right"}if(swipe.distanceX<0){swipe.direction="left"}if((swipe.direction=="right"&&swipe.currentDistance==0)||(swipe.direction=="left"&&swipe.currentDistance==-(swipe.maxDistance-swipe.wrapperWidth))){swipe.comeBack()}else{if(swipe.timerCounter<30&&swipe.distanceX>10){swipe.moveRight()}else{if(swipe.timerCounter<30&&swipe.distanceX<-10){swipe.moveLeft()}else{if(swipe.distanceX<=-(swipe.preferredWidth/2)){swipe.moveLeft()}else{if(swipe.distanceX>=(swipe.preferredWidth/2)){swipe.moveRight()}else{swipe.comeBack()}}}}}swipe.timerCounter=0;swipe.isTouchStart=false;swipe.isTouchMove=false;swipe.distanceX=0}},this.moveLeft=function(){swipe.currentDistance+=-swipe.wrapperWidth;swipe.currentSlide=Math.abs(swipe.currentDistance/swipe.wrapperWidth);swipe.slideContainer.style.webkitTransitionDuration=0+"ms";swipe.slideContainer.style.MozTransitionDuration=0+"ms";swipe.slideContainer.style.msTransitionDuration=0+"ms";swipe.slideContainer.style.webkitTransform="translate3d("+swipe.currentDistance+"px, 0,0)";swipe.slideContainer.style.MozTransform="translate3d("+swipe.currentDistance+"px, 0,0)";swipe.slideContainer.style.msTransform="translateX("+swipe.currentDistance+"px)";if(swipe.isNavBar){var navs=swipe.navBar;for(var n=0;n<navs.length;n++){for(var i=0;i<navs.eq(n).children().length;i++){var nav=navs.eq(n);if(nav.children().eq(i).hasClass("active")&&i!==(nav.children().length-1)){nav.children().eq(i).removeClass("active");nav.children().eq(i+1).addClass("active");break}}}}if(typeof(swipe.leftFinish)=="function"){swipe.leftFinish()}},this.moveRight=function(){swipe.currentDistance+=swipe.wrapperWidth;swipe.currentSlide=Math.abs(swipe.currentDistance/swipe.wrapperWidth);swipe.slideContainer.style.webkitTransitionDuration=0+"ms";swipe.slideContainer.style.MozTransitionDuration=0+"ms";swipe.slideContainer.style.msTransitionDuration=0+"ms";swipe.slideContainer.style.webkitTransform="translate3d("+swipe.currentDistance+"px, 0,0)";swipe.slideContainer.style.MozTransform="translate3d("+swipe.currentDistance+"px, 0,0)";swipe.slideContainer.style.msTransform="translateX("+swipe.currentDistance+"px)";if(swipe.isNavBar){var navs=swipe.navBar;for(var n=0;n<navs.length;n++){for(var i=0;i<navs.eq(n).children().length;i++){var nav=navs.eq(n);if(nav.children().eq(i).hasClass("active")&&i!==0){nav.children().eq(i).removeClass("active");nav.children().eq(i-1).addClass("active");break}}}}if(typeof(swipe.rightFinish)=="function"){swipe.rightFinish()}},this.comeBack=function(){swipe.slideContainer.style.webkitTransitionDuration=0+"ms";swipe.slideContainer.style.MozTransitionDuration=0+"ms";swipe.slideContainer.style.msTransitionDuration=0+"ms";swipe.slideContainer.style.webkitTransitionTimingFunction="cubic-bezier(0.1, 0.57, 0.1, 1)";swipe.slideContainer.style.MozTransitionTimingFunction="cubic-bezier(0.1, 0.57, 0.1, 1)";swipe.slideContainer.style.msTransitionTimingFunction="cubic-bezier(0.1, 0.57, 0.1, 1)";swipe.slideContainer.style.webkitTransform="translate3d("+swipe.currentDistance+"px, 0,0)";swipe.slideContainer.style.MozTransform="translate3d("+swipe.currentDistance+"px, 0,0)";swipe.slideContainer.style.msTransform="translateX("+swipe.currentDistance+"px)"}}})(jQuery);