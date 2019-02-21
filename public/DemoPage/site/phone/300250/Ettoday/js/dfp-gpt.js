/*DFP 同步式*/
var script0 = document.createElement("script");
script0.type = "text/javascript";
script0.async = true; //dfp async
script0.src = "https://www.googletagservices.com/tag/js/gpt.js";
document.head.appendChild(script0);

//dfp async
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/BlackBerry/);

if (isMobile) {//手機

}else{////非手機

	// 閒置廣告 =============================================================
	var myCountry = $.cookie("et_client_country");
	if (myCountry == "TW" || myCountry == "HK" || myCountry == "MO" || myCountry == "CN" || myCountry == "MY" || myCountry == "SG") { //台港澳中星馬
		if (window.location.href.indexOf("fashion") == -1 && window.location.href.indexOf("house") == -1 && window.location.href.indexOf("boba") == -1) { //非時尚, 且非房產, 且非播吧
			var script1 = document.createElement("script");
			script1.type = "text/javascript";
			script1.async = true;
			script1.src = "//static.ettoday.net/ad/idle-ad/idle-ad-970.js";
			document.head.appendChild(script1);
		}
	}

}

// Prebid =============================================================
var script4 = document.createElement("script");
script4.type = "text/javascript";
script4.src = "https://static.ettoday.net/ad/prebid/prebid.js";
document.head.appendChild(script4);

// CRITEO CDB =============================================================
var script2 = document.createElement("script");
script2.type = "text/javascript";
script2.async = true;
script2.src = "https://static.criteo.net/js/ld/publishertag.js";
document.head.appendChild(script2);
var CriteoAdUnits = { "placements": [
    /* Criteo Placements List */
    { "slotid": "criteo_783188", "zoneid": 783188 }, // EtToday - TW - CDB - SA - MOBILE - 300x250 Top
    { "slotid": "criteo_783189", "zoneid": 783189 }, // EtToday - TW - CDB - SA - MOBILE - 300x250 Bottom
    { "slotid": "criteo_1191499", "zoneid": 1191499 }, // EtToday - TW - CDB - SA - MOBILE - 300x250 Inread
    { "slotid": "criteo_806580", "zoneid": 806580 }, // EtToday - TW - CHB - SA - 300x250 (PC)
    { "slotid": "criteo_806581", "zoneid": 806581 }, // EtToday - TW - CHB - SA - 300x600 (PC)
    { "slotid": "criteo_845893", "zoneid": 845893 }, // EtToday - TW - CDB - SA - 300x250 - Bottom Right (PC)
    { "slotid": "criteo_943528", "zoneid": 943528 }, // EtToday - TW - CDB - SA - 300x250 - Article UP Left (PC)
    { "slotid": "criteo_1086335", "zoneid": 1086335 }, // EtToday - TW - CDB - SA - 300x250 - #2  (PC)
    { "slotid": "criteo_1086336", "zoneid": 1086336 }, // EtToday - TW - CDB - SA - 970x250 - Top (PC)
]};
window.Criteo = window.Criteo || {}; window.Criteo.events = window.Criteo.events || [];
var CriteoBids=CriteoBids||{},CriteoBidsReceived=function(){for(var t in CriteoAdUnits.placements){var e=CriteoAdUnits.placements[t],i=Criteo.GetBidsForAdUnit(e.slotid);CriteoBids[e.slotid]=i.length>0?i[0]:null}},CriteoDisplayAd=function(t,e,i){if(void 0===i&&(i=0),null!==CriteoBids[t])if(void 0===CriteoBids[t]&&null!==CriteoBids[t])100>i&&setTimeout(function(){CriteoDisplayAd(t,e,i+1)},200);else{var r=document.getElementById(t);if(r){var s=document.createElement("iframe");s.setAttribute("id",t+"_iframe"),s.setAttribute("frameborder","0"),s.setAttribute("allowtransparency","true"),s.setAttribute("hspace","0"),s.setAttribute("marginwidth","0"),s.setAttribute("marginheight","0"),s.setAttribute("scrolling","no"),s.setAttribute("vspace","0"),s.setAttribute("width",CriteoBids[t].width),s.setAttribute("height",CriteoBids[t].height),r.appendChild(s);var o='<script src="'+CriteoBids[t].displayUrl+'"></scr'+'ipt>',d=s.contentWindow.document;d.open(),d.write(o),d.close()}}else"function"==typeof e&&e()};
Criteo.events.push(function() { Criteo.RequestBids(CriteoAdUnits, CriteoBidsReceived, 2000); });

// UAM =============================================================
/*
//load the apstag.js library
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

//initialize the apstag.js library on the page to allow bidding
apstag.init({
     pubID: '57552ad3-75de-4d1f-b62b-734abb045091', 
     adServer: 'googletag'
});
apstag.fetchBids({
     slots: [{
         slotID: 'mw_inread', 
         slotName: '12656948/mw_inread', 
         sizes: [[300,250], [336,280]]
     },
     {
         slotID: 'pet_970x250', 
         slotName: '12656948/pet_970x250', 
         sizes: [[970,250]]
     }],
     timeout: 2e3
}, function(bids) {
     // set apstag targeting on googletag, then trigger the first DFP request in googletag's disableInitialLoad integration
     googletag.cmd.push(function(){
         apstag.setDisplayBids();
         googletag.pubads().refresh();
     });
});
*/

// =============================================================
// CSS 修正
var myHotTopicCss = '.block_1 .part_menu_3, .block_a .part_menu_3{display:none;}';
head = document.head || document.getElementsByTagName('head')[0];
myHotTopicStyle = document.createElement('style');

myHotTopicStyle.type = 'text/css';
myHotTopicStyle.appendChild(document.createTextNode(myHotTopicCss));
head.appendChild(myHotTopicStyle);	

$(function(){
	if($(".part_menu_3 a:contains('王令麟')").index() != -1 || $("#tag-cloud a:contains('王令麟')").index() != -1){
		$(".part_menu_3 a:contains('王令麟'), #tag-cloud a:contains('王令麟')").css({"visibility":"hidden","position":"absolute","bottom":"0"});
	}
	$(".block_1 .part_menu_3, .block_a .part_menu_3").show();
});