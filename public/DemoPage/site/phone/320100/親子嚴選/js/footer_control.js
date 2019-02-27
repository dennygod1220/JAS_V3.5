// JavaScript Document
/*
設定footer 的升降
*/

$(document).ready(function (){initFooter();});

var _footerBtn , _footerMask , _footerContent;
function initFooter(){
	_footerBtn = document.getElementById('openFooterBtn');
	_footerContent = document.getElementById('footerContent');
	_footerMask = document.getElementById('footerMask');
	
	var _onclick = function (){
		
		if(this.onComplete == true) return;
		this.onComplete = true;
		if(this.isClick == false){
			this.isClick = true;
			var defaultMaskHeight = $(_footerMask).height();
			var raiseHeight = $(_footerContent).height() - defaultMaskHeight - 15;
			this.contentRaiseSpace = raiseHeight;
			this.maskRaiseHeight = defaultMaskHeight;
			$(_footerBtn).find('a').css({'background-position':'left bottom'});//change icon
			$(_footerMask).css({'height':(raiseHeight + defaultMaskHeight) + 'px'});//extend mask range
			$(_footerMask).css({'top':(raiseHeight*-1) + 'px'});//move up mask
			$(_footerContent).css({'top':raiseHeight + 'px'});//set content in start position
			$(_footerBtn).animate({'top':((raiseHeight + 49)*-1) + 'px'});//animate btn raise up
			$(_footerContent).animate({'top':'0px'} , {complete: function() {_footerBtn.onComplete = false;}});//animate content raise up
		} else {
			this.isClick = false;
			$(_footerBtn).find('a').css({'background-position':'left top'});//restore icon
			$(_footerBtn).animate({'top':(49)*-1 + 'px'});//animate btn down to position
			$(_footerContent).animate({'top':this.contentRaiseSpace + 'px'} , {complete: function() 
			{
				_footerBtn.onComplete = false;
				$(_footerMask).css({'height':(_footerBtn.maskRaiseHeight) + 'px'});//restore mask range
				$(_footerMask).css({'top':'0px'});//restore mask position
				$(_footerContent).css({'top':'0px'});//restore content position
			}});//animate content down to position
		}
	};
	
	_footerBtn.isClick = false;
	_footerBtn.onComplete = false;
	_footerBtn.onclick = _onclick;
	_footerBtn.contentRaiseSpace = 0;//last time content raise height
	_footerBtn.maskRaiseHeight = 0;//last time mask raise
	
	
}
