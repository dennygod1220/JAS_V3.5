// JavaScript Document


$(function(){
    var len = 20; // 超過26個字以"..."取代
    $(".LimitTxt3, .Marquee_List h2").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
	
	
	var len = 20; // 超過26個字以"..."取代
    $(".Marquee_List h1").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
	
	
	
	var len = 20; // 超過26個字以"..."取代
    $(".News2_InT h1 a").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });



    var len = 40; // 超過40字以"..."取代
    $(".News2_InT b a").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });



});