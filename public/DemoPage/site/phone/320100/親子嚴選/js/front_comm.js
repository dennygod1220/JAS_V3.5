$(window).load(function(){
	//重設廣告系統來的Banner寬高css 
	var aryAdNum = [61,45,21,23,28,32,64,63,62];
	for ( var adi=0;adi<aryAdNum.length;adi++ )
	{
		// console.log(aryAdNum[adi]);
		// console.log($("#div" + aryAdNum[adi] + " img"));
		$("#div" + aryAdNum[adi] + " img").css("width","100%").css("height","auto").css("max-width","100%");
	}	
});
$(document).keydown(function(e){
	if( e.keyCode==13 )
	{ 
		var isKeyword = $("#keyword").is(':focus');
		var isAuthor = $("#author_name").is(':focus');
		if ( (isKeyword==true && isAuthor==true) || (isKeyword==false && isAuthor==false) )
		{
			// console.log("no enter");
			return false; 
		}else
		{
			if ( isKeyword==true ){ searchArticle();}
			if ( isAuthor==true ){ searchAuthor();}
			return false; 
		}
	}
});
$(document).ready(function(){
	/*----------for RWD----------Start----------*/
	$("[class*=editor] img").css("width","").css("height",""); //取消editor內image的固定寬高 	
	/*----------for RWD----------End----------*/
	
	$("#goVote").click(function(){
		var res = $("#vote_list input[name=vitem]:checked").val();			
		if ( res==undefined )
		{
			alert("請選擇您要投票的項目！");
		}else
		{
			var ary = res.split("_");
			$.post(
				CDNTOWEB_URL + "ajax/ajax_vote.php",
				{
					bid : ary[0],
					aid : ary[1]
				},
				function (res)
				{
					switch (res[0])
					{
						case 0:
							alert(res[1]);
							break;
						case 1:
							alert("感謝您的投票！");
							showVote('result');
							break;
					}
					$("#vote_list input[name=vitem]").removeAttr("checked");
				},
				"json"
			);
		}
	});
	
	$("#searchArticle").click(function(){
		searchArticle();		
	});
	
	$("#searchAuthor").click(function(){
		searchAuthor();		
	});
	
	$("#saveProfile").click(function(){
		var msg="";
		var msg2="";
		
		var pic = $.trim($("#pic_hid").val());
		var nickname = $.trim($("#nickname").val());
		var edu = $.trim($("input[name=edu]:checked").val());
		var marriage = $.trim($("input[name=marriage]:checked").val());
		var is_children = $.trim($("input[name=is_children]:checked").val());
		var children = $.trim($("#children").val());
		var industry = $.trim($("input[name=industry]:checked").val());
		var industry_other = $.trim($("#industry_other").val());
		var income = $.trim($("input[name=income]:checked").val());
		var interest = $.trim($("input[name=interest]:checked").val());
		var interest_other = $.trim($("#interest_other").val());
		var birthYMList = "";
		
		if ( pic=="" ){ msg+="\n◎大頭照"; }
		if ( nickname=="" ){ msg+="\n◎暱稱"; }
		if ( edu=="" ){ msg+="\n◎教育程度"; }
		if ( marriage=="" ){ msg+="\n◎婚姻狀態"; }
		if ( is_children=="" )
		{ 
			msg+="\n◎子女"; 
		}else
		{
			if ( is_children==1 )
			{ 
				if ( children=="" )
				{
					msg2+="\n◎請輸入子女人數"; 
				}else
				{
					if ( isNaN(children)==true )
					{
						msg2+="\n◎子女人數請輸入數字"; 
					}else
					{
						var aryBirY = $("input[name^=birthday_y]");
						var aryBirM = $("select[name^=birthday_m]");
						// console.log(aryBirY);
						for ( var y=0;y<aryBirY.length;y++ )
						{							
							var thisY = $(aryBirY[y]).val();
							var thisM = $(aryBirM[y]).val();
							// console.log(thisY);
							if ( thisY=="" )
							{ 
								msg+="\n◎西元年-第" + (y+1) + "個"; 
							}else
							{
								if ( isNaN(thisY)==true )
								{ 
									msg2+="\n◎西元年-第" + (y+1) + "個 請輸入數字"; 
								}else
								{
									if ( thisY.length!=4 )
									{
										msg2+="\n◎西元年-第" + (y+1) + "個 請輸入4位數字西元年"; 
									}else
									{
										if ( thisY.substr(0,2)!="20" && thisY.substr(0,2)!="19" )
										{
											msg2+="\n◎西元年-第" + (y+1) + "個 格式錯誤！"; 
										}
									}
								}
							}
							
							if ( thisM=="" )
							{ 
								msg+="\n◎月份-第" + (y+1) + "個"; 
							}
							
							if ( birthYMList != "" ){ birthYMList += ","; }
							birthYMList += thisY + "_" + thisM;
							//console.log(birthYMList);
						}
					}
				}
			}
		}
		if ( industry=="" )
		{ 
			msg+="\n◎產業別"; 
		}else
		{
			if ( industry=="IDT99" && industry_other=="" ){ msg2+="\n◎產業別選其他請輸入產業別！"; }
		}
		if ( income=="" ){ msg+="\n◎個人年收入"; }
		if ( interest=="" )
		{ 
			msg+="\n◎興趣話題"; 
		}else
		{
			if ( interest=="ITF99" && interest_other=="" ){ msg2+="\n◎興趣話題選其他請輸入興趣話題！"; }
		}
		
		if ( msg!="" || msg2!="" )
		{
			if ( msg!="" ){ alert("以下欄位請勿空白：" + msg); }
			if ( msg2!="" ){ alert(msg2); }
		}else
		{
			$.post(
				CDNTOWEB_URL + "ajax/ajax_mbr_modify.php",
				{
					pic : pic,
					nickname : nickname,
					edu : edu,
					marriage : marriage,
					is_children : is_children,
					children : children,
					birthYMList : birthYMList,
					industry : industry,
					industry_other : industry_other,
					income : income,
					interest : interest,
					interest_other :interest_other
				},
				function (res)
				{
					switch (res[0])
					{
						case 0:
							alert(res[1]);
							break;
						case 1:
							alert("更新成功！");	
							location.href = "mbr_edit.php";
							break;
					}				
				},
				"json"
			);
		}
	});
	
	
});
		
	/**
	開啟我要推薦部落客網頁
	*/
	function pushBlogger(){
		$.fancybox.open({
			maxWidth	: '95%',
			maxHeight	: '95%',
			fitToView	: false,
			width		: '90%',
			// height		: 540,
			height		: 540,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			padding : 0,
			href: CDNTOWEB_URL + 'fancybox-recBlogger.php',
			type: 'iframe'
		});
	}
	/**
	開啟讓使用者設定是否切回手機+無RWD 模式的網頁
	*/
	function alertInPhone(){
		$.fancybox.open({
			maxWidth	: '95%',
			maxHeight	: 300,
			fitToView	: false,
			width		: '90%',
			height		: 250,
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			padding : 0,
			href: CDNTOWEB_URL + 'fancybox-alertInPhone.php',
			type: 'iframe'
		});
	}

	function goPage(pageNum)
	{
		$('#searchform #nowPage').val(pageNum);
		$('#searchform').submit();
	}
	
	function searchArticle()
	{
		var keyword = $.trim($("#keyword").val());
		if ( keyword=="" )
		{
			alert("請輸入關鍵字");			
		}else
		{
			gosearchTopArticle(keyword);			
			/*wordEncode(keyword,function(res){
				location.href = "blogger_list.php?ky=" + res;
			});	*/		
		}
		return false; 
	}

	function searchAuthor()
	{
		var author_name = $.trim($("#author_name").val());
		if ( author_name=="" )
		{
			alert("請輸入作者名稱");			
		}else
		{		
			gosearchTopAuthor(author_name);			
			/*wordEncode(author_name,function(res){
				location.href = "blogger_list.php?bn=" + res;
			});	*/		
		}
		return false; 
	}
	
	function gosearchTopArticle(keyword)
	{
		$("#searchform #nowPage").val("");
		$("#searchform #ky").val(keyword);
		$("#searchform #bn").val("");
		$("#searchform #b").val("");
		$("#searchform #tgn").val("");
		$("#searchform").submit();
	}
	
	function gosearchTopAuthor(author_name)
	{
		$("#searchform #nowPage").val("");
		$("#searchform #ky").val("");
		$("#searchform #bn").val(author_name);
		$("#searchform #b").val("");
		$("#searchform #tgn").val("");
		$("#searchform").submit();
	}
	/*
	function gosearchAuthor(b)
	{
		$("#searchform #nowPage").val("");
		$("#searchform #ky").val("");
		$("#searchform #bn").val("");
		$("#searchform #b").val(b);
		$("#searchform #tgn").val("");
		$("#searchform").submit();
	}
	*/
	function gosearchTag(t)
	{
		$("#searchform #nowPage").val("");
		$("#searchform #ky").val("");
		$("#searchform #bn").val("");
		$("#searchform #b").val("");
		$("#searchform #tgn").val(t);
		$("#searchform").submit();
	}
	
	function wordEncode(str,callback)
	{
		$.post(
			CDNTOWEB_URL + "ajax/ajax_encode.php",
			{
				word : str
			},
			function(res)
			{//console.log(res);
				callback(res);
			},
			"json"
		);
	}
	
	function getVoteResult(callback)
	{
		$("#vote_result ul").html("");
		$.post(
			CDNTOWEB_URL + "ajax/ajax_get_voteres.php",
			{},
			function (res)
			{
				// console.log(res);
				// console.log(res.length);
				var data = res[1];
				var html = "";				
				for ( var v=1;v<=res[0];v++)
				{
					html += '<li><span>' + data[v]["item"] + '</span><br /><span class="numBar"><span class="color" style="width:' + data[v]["percent"] + '%;"></span><span class="value">' + data[v]["percent"] + '%</span></span></li>';
				}
				$("#vote_result ul").html(html);
				if (callback!=undefined){ callback(); }
			},
			"json"
		);		
	}
	function showVote(blockName)
	{
		$("#vote_list").css("display","none");
		$("#vote_result").css("display","none");
		switch(blockName)
		{
			case "list":
				$("#vote_list").css("display","block");
				break;
			case "result":
				getVoteResult(function(){
					$("#vote_result").css("display","block");
				});
				break;
		}				
	}
	
	function fb_share(url,objCustomize)
	{
		var shareUrl = "";
		var openUrl = "";
		if ( url!="" ){ shareUrl = url; }else{ shareUrl = location.href; }
		//console.log(objCustomize);
		/*if ( objCustomize==undefined )
		{*/
			openUrl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(shareUrl);
		/*}else
		{
			openUrl = 'http://www.facebook.com/sharer.php?s=100&p[title]='+encodeURIComponent(objCustomize.title) + '&p[summary]=' + encodeURIComponent(objCustomize.description) + '&p[url]=' + encodeURIComponent(shareUrl) + '&p[images][0]=' + encodeURIComponent(objCustomize.image);
		}*/
		window.open(
		  openUrl,
		  'facebook-share-dialog', 
		  'width=626,height=436'); 
		return false;
	}
	
	function twitter_share(url,shareTitle)
	{
		//var shareTitle = "";
		var shareUrl = "";
		//if ( objCustomize.title!="" ){ shareTitle = objCustomize.title; }else{ shareTitle = document.title; }
		if ( shareTitle=="" ){ shareTitle = document.title + " " + $("meta[property='og:description']").attr("content"); }
		if ( url!="" ){ shareUrl = url; }else{ shareUrl = location.href; }
		
		window.open(
			'http://twitter.com/home/?status='.concat(encodeURIComponent(shareTitle)) .concat(' ') .concat(encodeURIComponent(shareUrl))
		);
		return false;
	}
	
	function gplus_share(url)
	{
		var shareUrl = "";
		if ( url!="" ){ shareUrl = url; }else{ shareUrl = location.href; }
		
		window.open(
		  'https://plus.google.com/share?url='+encodeURIComponent(shareUrl),
		  '', 
		  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		return false;
	}
	
	function weibo_share(url,shareTitle,shareImg)
	{
		var shareUrl = "";
		if ( shareTitle=="" ){shareTitle = document.title + " " + $("meta[property='og:description']").attr("content");}
		if ( shareImg=="" ){ shareImg = $("meta[property='og:image']").attr("content");}
		if ( url!="" ){ shareUrl = url; }else{ shareUrl = location.href; }
		
		var openUrl = "http://service.weibo.com/share/share.php?title=" +encodeURIComponent(shareTitle) + "&url=" + encodeURIComponent(shareUrl) + "&pic=" + encodeURIComponent(shareImg);
		window.open(
		  openUrl,
		  '', 
		  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		return false;
	}

	function line_share(url,shareTitle)
	{
		var shareUrl = "";
		if ( shareTitle=="" ){ shareTitle = document.title + " " + $("meta[property='og:description']").attr("content"); }
		if ( url!="" ){ shareUrl = url; }else{ shareUrl = location.href; }
		
		window.open(
			'http://line.naver.jp/R/msg/text/'.concat(encodeURIComponent(shareTitle)) .concat(' ') .concat(encodeURIComponent(shareUrl))
		);
		return false;
	}

	function SetMbrUploadify( ObjectID , maxWH , fileName , filePath ,OtherDelParam)
	{	
		$("#" + ObjectID).after("<input type='hidden' id='" + ObjectID + "_hid' name='" + ObjectID + "_hid' value='' >");		
		
		$("#" + ObjectID).uploadify({ 
			'multi'      : false,
			'method'      : 'post',
			'formData'    : { 
				'folder': UPLOAD_JQTMP_PATH,
				'maxWH' : maxWH 
			},				   
			'queueID'    : 'uploadPicQueue',    
			'uploader'    : WEB_URL + 'js/uploadify/uploadify.php',    
			'swf'  		  : WEB_URL + 'js/uploadify/uploadify.swf', 
			'auto' 		  : true , 
			'width'		  : "139" ,    
			'height'      : "37" ,  
			'buttonImage' : WEB_URL + 'js/uploadify/upload_photobt.png',
			'buttonText'  : "選擇圖檔" ,    
			'fileTypeExts':'*.png;*.gif;*.jpg;*.jpeg;*.ico',        
			'fileTypeDesc':'上傳圖檔(*.png;*.gif;*.jpg;*.jpeg;*.ico)', 			
			'onSWFReady'  : function(){
				//上傳按鈕hover樣式替換	
				$("#" + ObjectID).hover(
					function(){
						$("#" + ObjectID + "-button").css("background-image","url(\"" + WEB_URL + "js/uploadify/upload_photobt_hover.png\")");
					},
					function(){
						$("#" + ObjectID + "-button").css("background-image","url(\"" + WEB_URL + "js/uploadify/upload_photobt.png\")");
					}
				);
				if ( fileName!="" )
				{//修改頁且有圖
					//顯示圖片
					$("#" + ObjectID + "_img").attr("src",filePath + fileName); 						
					//將檔名存入隱藏欄位 
					$("#" + ObjectID + "_hid").val(fileName);					
				}				
			},			
			'onUploadSuccess'  : function(file, data, response) {
				  // console.log(data);				  
				  obj = JSON.parse(data);
				  // console.log(obj);
				  if ( obj.result=="0" )
				  {
					alert("您所選擇檔案太大或發生其他錯誤！\n圖檔限制最大只可上傳2M，若已確定圖檔小於2M仍發生錯誤請洽網站管理員！");					
				  }else
				  {				
					//顯示上傳成功圖片
					$("#" + ObjectID + "_img").attr("src",UPLOAD_JQTMP_PATH + obj.filename); 						
					//將上傳成功回傳的檔名存入隱藏欄位 
					$("#" + ObjectID + "_hid").val(obj.filename);					
				  }			  
				}			
		});			
	}