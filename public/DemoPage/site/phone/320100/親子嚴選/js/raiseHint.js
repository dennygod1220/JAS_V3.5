// JavaScript Document
//啟動上浮式TIP
function raiseHint(j_ary){
	if(j_ary.length == 0) return;
	for(var i = 0;i<j_ary.length;i++){
		$(j_ary).eq(i).parent().hover(
		function (){
			$(this).find('.hint').animate({'bottom':'0px'} , 300);
		},
		function (){
			$(this).find('.hint').animate({'bottom':'-40px'} , 500);
		}
		);
	}
	//alert($(j_ary).eq(0).parent().html());
}