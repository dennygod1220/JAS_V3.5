var ONEAD = {};
ONEAD.channel = 72;
ONEAD.volume = 0.02;
ONEAD.slot_limit = {width: 950, height: 390};
ONEAD.category = 'best';
ONEAD.slot_limit_multiple = {
  inread: {
    width: 640,
    height: 390
  }
};
ONEAD.response_freq = {start:1, step: 3};
ONEAD.response_freq_multiple = {
  'mobile-inread': "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50"
};
ONEAD.cmd = ONEAD.cmd || [];

if (typeof(ONEAD) !== "undefined"){
  ONEAD.uid = "1000071";
  ONEAD.external_url = "https://onead.onevision.com.tw/"; // base_url, post-slash is necessary
  ONEAD.wrapper = 'ONEAD_player_wrapper';
  ONEAD.wrapper_multiple = {
    instream: "ONEAD_player_wrapper",
    inread: "ONEAD_inread_wrapper",
    incover: "ONEAD_incover_wrapper"
  };
}
if (typeof window.isip_js == "undefined") {
  (function() {
    var src = 'https://ad-specs.guoshipartners.com/static/js/isip.js';
    var js = document.createElement('script');
    js.async = true;
    js.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    js.src = src;
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(js, node.nextSibling);
  })();
}

var ONEAD_check = '0';
ONEAD_on_get_response = function(param){
  if (param === null || param.pid === undefined) {
  }
  else {
    ONEAD_check = '1';
    var t = setInterval(function(){
      if (ONEAD_is_above(100)){}
    }, 1000);
  }
}
function changeADState(obj) {
  if (obj.newstate == 'COMPLETED' || obj.newstate == 'DELETED') {
    if (ONEAD.play_mode == 'incover') {
      ONEAD_cleanup(ONEAD.play_mode);
    }
    else {
      ONEAD_cleanup();
    }
  }
}