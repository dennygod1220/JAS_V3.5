// JavaScript Document
//基本設定
var Parenting = {mode:'' , eventMode:0};//最高層級物件
$(document).ready(function (){
	if(typeof window.addEventListener != "undefined"){
		Parenting.eventMode = 0;//addEventListener
	} else {
		Parenting.eventMode = 1;//attachEvent
	}
	$('.fancybox').fancybox();
	
	if(!Modernizr.touch){
		//於非手持裝置時
		raiseHint($('.raise').find('p'));
		$('.serviceLinks li').eq(5).css({'border-right':'none'});//調整<li><a href="#">隱私權保護</a></li>
	} else {
		//於手持裝置時
		$.cookie("pcwTestCookie","1"); //偵測是否啟用cookie
		if($.cookie("pcwTestCookie")==undefined){
			//瀏覽器未啟用cookie ，無行為
		} else {
			//瀏覽器有接受使用cookie
			if($.cookie('pcwViewType') == undefined){
				$.cookie('pcwViewType' , 'cell');//初次啟動
				Parenting.mode = 'cell';//設定為手機模式
			} else {
				//非初次啟動
				Parenting.mode = $.cookie('pcwViewType');//取得最後的值
			}
			initPCtoPhone();//初始化footer 處的切換手機+有/無RWD 功能
			if(Parenting.mode == 'cell'){
				disableMenuItemInPhone();//初始化主選單中的＂話題＂不開放在手機+RWD 環境下啟用
			}
		}
		
	}
});
$(window).resize(function(){
	$('.fb-comments iframe,.fb-comments span:first-child').css({'width':$('.wrapper').width()});
});//facebook comment width = 100%

/**
初始化主選單中的＂話題＂在手持裝置上，需切為無RWD 模式瀏覽
*/
function disableMenuItemInPhone(){
	var obj = $("[class*=goPC]");
	$(obj).attr('data-url' , $(obj).attr('href'));
	$(obj).attr('href' , 'javascript:alertInPhone();');		
}

/**
移除已經存在fancybox
*/
function killFancyBox(e){
	$.fancybox.close(true);
}
/**
初始化footer 的手機+有/無RWD 切換功能
*/
function initPCtoPhone(){
	var btn = $('.serviceLinks .last')[0];
	FxAddEventListener(btn , 'click' , switchPCtoPhone , false);	
	updateRwdStatus();
}
/**
手機+有/無RWD 切換功能
*/
function switchPCtoPhone(e){
	if($.cookie("pcwTestCookie")==undefined){
		alert("您的瀏覽器設定為不使用cookie，無法使用本功能！\n如欲使用請先啟用cookie並重整網頁！");
		return;
	}
	if(Parenting.mode == 'pc'){
		Parenting.mode = 'cell';
	} else {
		Parenting.mode = 'pc';
	}
	$.cookie('pcwViewType',Parenting.mode);
	location.reload();
	
}
/**
有/無RWD 的狀態更新
*/
function updateRwdStatus(){
	var btn = $('.serviceLinks .last')[0];
	var metaViewPort = $('meta[name=viewport]')[0];
	var link_ary = document.getElementsByTagName('LINK');
	var quick_ary = [];
	var pcView_str = 'initial-scale=1.0,user-scalable=1,width=1100';//無RWD 的viewport
	var phoneView_str = 'initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,width=device-width,user-scalable=1';//有RWD 的viewport
	var chk = 0;
	for(var i = 0;i<link_ary.length;i++){
		if(link_ary[i].href.indexOf('_rwd') > -1){
			chk++;
			quick_ary.push(link_ary[i]);
		}
	}
	if(chk == 0){
		return;
	}

	$(btn).css({'display':'inline-block'});
	if($.cookie('pcwViewType') == 'pc'){
		//在手機上模擬為無RWD的PC 瀏覽
		$(metaViewPort).attr('content' , pcView_str);
		$(quick_ary).remove();
		$(btn).find('.inPC').hide();
		$(btn).find('.inPhone').show();
	} else {
		//在手機上以RWD 瀏覽
		$(metaViewPort).attr('content' , phoneView_str);
		$(btn).find('.inPC').show();
		$(btn).find('.inPhone').hide();
	}
}


/*****************************************


	public function


*****************************************/
function FxAddEventListener(e_ref , event_str , handler , capture){
	if(Parenting.eventMode == 0){
		e_ref.addEventListener(event_str , handler , capture);
	} else {
		e_ref.attachEvent(event_str , handler);
	}
}
function FxRemoveEventListener(e_ref , event_str , handler , capture) {
	if(Parenting.eventMode == 0){
		e_ref.removeEventListener(event_str , handler , capture);
	} else {
		e_ref.detachEven(event_str , handler);
	}
};