var cwt_url='http://a.cw.com.tw/';

//--清除所有cookie
function DelAllCookie() {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(";");
    var thisCookie;
    for (var i = 0; i < arrCookie.length; i++) {
        thisCookie = arrCookie[i];
        var arrThisCookie = thisCookie.split("=");
        var thisCookieName; thisCookieName = arrThisCookie[0];
//alert(thisCookieName );
if (thisCookieName.indexOf("__")>0){
	//alert(thisCookieName );	
        document.cookie = thisCookieName + " =" + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}
	
    }
}
//--顯示廣告
function SetAdvert(val, usr, wcs) {
    //建立廣告元素
    //<div>
    //  <ins>
    //      <ins>
    //          <iframe/>
    //          <iframe/>[預覽]
    //      </ins>
    //  </ins>
    //</div>
    //<ul></ul>
    //<ul></ul>[預覽]
    var response_txt = "<div id=\"div" + val + "\">";
    response_txt += "<ins id=\"ins" + val + "\" style=\"border: currentColor; display: inline-table; position: relative;border: 0px; \">";
    response_txt += "<ins id=\"ins1" + val + "\" style=\"border: currentColor; display: block; position: relative;border: 0px; \">";
    response_txt += "</ins>";
    response_txt += "</ins>";
    response_txt += "</div>";
    response_txt += "<ul id='ul" + val + "'></ul>";

    var r = new response();
    //判斷是否為Google瀏覽器
    if (navigator.userAgent.search("Safari") > -1) {
        r.txt = '<div id=\"div_wrapper_' + val + '\" style=\"margin:0;\">';
        r.txt += response_txt;
        r.txt += '</div>';
    }
    else {
        r.txt = response_txt;
    }
    r.resw();

    var position = $('#div' + val).offset();
    var x = parseInt(position.left);
    var y = parseInt(position.top);
    var localUrl =  '';
    if (location.href.search('#!') != -1) {
	localUrl=location.href.split('#!')[0];
    }else if (location.href.search('#') != -1) {
	localUrl=location.href.split('#')[0];
    }else{
	localUrl=location.href;
    }

    $.getJSON(cwt_url+"Handler/Receive1.ashx?adid=" + val + "&x=" + x + "&y=" + y + "&usr=" + usr + "&url=" + localUrl + "&wcs=" + wcs + "&time=" + new Date().getTime() + "&callback=?", function (data) {
        //判斷是否為[Text素材]
        if (data.AdType == 'Text') {
            $('#div' + val).remove();
            $('#ul' + val).append(data.advert);
        }
        //判是素材是否為Null
        else if (data.advert == 'null') {
            //$('#ul' + val).remove();
            //$('#div' + val).remove();
            $('#div' + val).css('display', 'none');
            $('#div_wrapper_' + val).css('display', 'none');
            $('#ul' + val).css('display', 'none');
        }
        else {
            $('#div' + val).css('display', 'block');
            $('#div_wrapper_' + val).css('display', 'block');
            $('#ul' + val).css('display', 'block');
            //
            $('#ul' + val).remove();
            //判斷是否為Google/FireFox瀏覽器
            if (navigator.userAgent.search("Safari") > -1 || navigator.userAgent.search("Firefox") > -1) {
                $('#div' + val).css('display', 'inline-block');
            }
            //判斷是否為Google瀏覽器
            if (navigator.userAgent.search("Safari") > -1 && data.flash == 1) {
                //移除[div_wrapper_xxx]style
                $('#div_wrapper_' + val).removeAttr('style');
            }
            //判斷是否為[Image素材]
            if (data.AdType == "Image") {
                //更新[css display:block]
                $('#div' + val).css('display', 'block');
            }
            //判斷是否為Flash擴張素材
            if (data.flash == 1) {
                $('#div_wrapper_' + val).css('margin', '0');
            }
            //修正[ins/ins1]寬高            
            $('#ins' + val).width(parseInt(data.W)).height(parseInt(data.H));
            $('#ins1' + val).width(parseInt(data.W)).height(parseInt(data.H));
            $('#ins1' + val).append(data.advert);
        }
    });
}
//--計算點擊率
function SetClick(val, val1, val2, usr) {
    //val=AdListSeqId
    //val1=WebChannelSeqId
    //val2=AdSpacesSeqId
    //usr=usr    
    $(function () {
        $.getJSON(cwt_url+"Handler/ReceiveClick.ashx?AdSpacesSeqId=" + val2 + "&AdListSeqId=" + val + "&WebChannelSeqId=" + val1 + "&usr=" + usr + "&time=" + new Date().getTime() + "&callback=?", null);
    });
}
//--取得網址參數
function ReqQuest(val) {
    //val=網址參數
    var r = new request();
    return r.QueryString(val);
}
//--預覽
function ViewPage() {
    if (ReqQuest('ch') != '' && ReqQuest('url') != '') {
        var ch = ReqQuest('ch');
        var url = ReqQuest('url');
        var josn_url = cwt_url+'Handler/PreView_Receive.ashx';
        DelAllCookie();
        if (ReqQuest('adtype') == 'Text') {
            var ul = $('#ul' + ch);
            ul.empty().removeAttr('id');
            $.getJSON(josn_url + "?ch=" + ReqQuest('ch') + "&url=" + ReqQuest('url') + "&adtype=Text&seqid=" + ReqQuest('seqid') + "&time=" + new Date().getTime() + "&callback=?", function (data) {
                $('#div' + ch).remove();
                ul.append(data.advert);
            });
        }
        else {
            var w = ReqQuest('w');
            var h = ReqQuest('h');
            var ins = $('#ins' + ch);
            var ins1 = $('#ins1' + ch);
            //--
            ins.width(w).height(h);
            ins1.width(w).height(h).empty().removeAttr('id');
            //--
            $.getJSON(josn_url + "?adtype=" + ReqQuest('adtype') + "&url=" + ReqQuest('url') + "&time=" + new Date().getTime() + "&seqid=" + ReqQuest('seqid') + "&callback=?", function (data) {
                ins1.append(data.advert);
            
            if (ReqQuest('adtype') == 'Movie') {
                $('#div_wrapper_' + ch).removeAttr('style');
            }
            if (navigator.userAgent.search("Safari") > -1) {
                $('#div_wrapper_' + ch).css('display', 'block');
            }
            $('#div' + ch).css('display', 'block');
            });
        }
    }
}
//--暫停時間(秒)
function sleep(seconds) {
    var timer = new Date();
    var time = timer.getTime();
    do
        timer = new Date();
    while ((timer.getTime() - time) < (seconds * 1000));
}

DelAllCookie();