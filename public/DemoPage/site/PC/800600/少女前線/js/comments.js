//作者刪除留言
$('a[rel="del_comment"]').click(function(){
	if(confirm('確定要刪除此留言嗎？')){
		var cid = $(this).attr("cid");
		$.ajax({
			type: 'POST',
			url: '/comments/ajax_del_comment',
			data: {
				'id': cid
			},
			dataType: 'json',
			success: function(json){
				//alert(msg); return;
				if (json.status=='1') {
					$('a[cid="'+cid+'"]').parent().parent().parent().parent().fadeOut(300);
					toast(json.msg, 2000);
				} else {
					console.log(json.error);
				}
			}
		});
	}
	return false;
});

//check ok
$('a[rel="check_comment"]').click(function(){
	if(confirm('確定此留言已處理嗎？')){
		var cid = $(this).attr("cid");
		var $btn = $(this);
		$.ajax({
			type: 'POST',
			url: '/comments/ajax_update_status_ok',
			data: {
				'id': cid
			},
			dataType: 'json',
			success: function(json){
				//alert(msg); return;
				if (json.status=='1') {
					$btn.hide();
					toast(json.msg, 2000);
				} else {
					console.log(json.error);
				}
			}
		});
	}
	return false;
});
