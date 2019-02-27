// JavaScript Document
//修復IE8 的Shadow Radius Border 問題
function srbFixForIE8(obj){
	if(obj.length == 0) return;
	var scode = 
'<table border="0" cellspacing="0" cellpadding="0" class="srb">'+
'  <tr>'+
'    <td class="srb_01"><img src="image/srb_01.png" /></td>'+
'    <td class="srb_02"><img src="image/srb_02.png" /></td>'+
'    <td class="srb_03"><img src="image/srb_03.png" /></td>'+
'  </tr>'+
'  <tr>'+
'    <td class="srb_04"><img src="image/srb_04.png" /></td>'+
'    <td class="srb_05">##tag##</td>'+
'    <td class="srb_06"><img src="image/srb_06.png" /></td>'+
'  </tr>'+
'  <tr>'+
'    <td class="srb_07"><img src="image/srb_07.png" /></td>'+
'    <td class="srb_08"><img src="image/srb_08.png" /></td>'+
'    <td class="srb_09"><img src="image/srb_09.png" /></td>'+
'  </tr>'+
'</table>';
	var newCode;
	var content = '';
	var tmpE;
	var parentE;
	//alert(obj.length);
	for(var i = 0;i<obj.length; i++){
		tmpE = document.createElement('DIV');
		//alert($(obj).eq(i).parent().html());
		
		content = $(tmpE).append($(obj).eq(i).clone()).html();
		newCode = scode;
		newCode = newCode.replace('##tag##',content);
		tmpE = document.createElement('DIV');
		$(tmpE).html(newCode);
		parentE = $(obj).eq(i).parent();
		$(obj).eq(i).remove();
		$(parentE).append($(tmpE).find('table').clone());
		//alert($(parentE).html());
		
	}
}