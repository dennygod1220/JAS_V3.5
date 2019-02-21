// 2017-11-06 Mobile 新增分頻機制

request_isip = function(resolve) {
  window.is_requesting_isip = true;
  var ONEAD = {};
  window.ONEAD = ONEAD;
  ONEAD.isDfpMode = true;
  (function() {
    var slot = document.getElementById('oneadMIRTag');

    var slots = ['div-mobile-inread'];
    for (var i = slots.length - 1; i >= 0; i--) {
      var s = document.createElement('div');
      s.id = slots[i];

      if (window.frameElement) {
        ONEAD.isDfpIframeMode = true;
        window.frameElement.parentNode.insertBefore(
          s,
          window.frameElement.parentNode.children[0]
        )
      } else {
        slot.appendChild(s);
      }
    }

  ONEAD.channel = 21; // 三立電視
  ONEAD.volume = 0.05; // range is 0 to 1 (float)
  ONEAD.slot_limit = { width: 1000, height: 440 };
  // optional(s)
  ONEAD.slot_limit_multiple = {
      inread: {
    width: 638,
    height: 390
      }
  };

    ONEAD.response_freq = {
      start: 1,
      step: 1
    };

  //分頻id
  ONEAD.category = window.oneadCategory;

  ONEAD.response_freq_multiple = {
    "mobile-inread": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50"
  };

  ONEAD.uid = "1000052";
  ONEAD.external_url = "//onead.onevision.com.tw/"; // base_url, post-slash is necessary
  ONEAD.wrapper = 'ONEAD_player_wrapper';
  ONEAD.wrapper_multiple = {
    instream: "ONEAD_player_wrapper", // equals to inpage
    inread: "ONEAD_inread_wrapper",
    incover: "ONEAD_incover_wrapper"
  };

    ONEAD.cmd = ONEAD.cmd || [];
    ONEAD.cmd.push(function() {
      ONEAD.ONEAD_slot('div-mobile-inread', 'mobile-inread');
    });

    // 這個函式名稱是固定的，廣告播放完畢會呼叫之
    if (parent.window.changeADState === undefined) {
      parent.window.changeADState = [];
    }
    parent.window.changeADState.push(function(obj) {
      if (obj.newstate == 'COMPLETED' || obj.newstate == 'DELETED') { //this is IP
        if (ONEAD.play_mode == 'incover') {
          // remove the dimming block
          ONEAD.ONEAD_cleanup(ONEAD.play_mode);
        } else {
          ONEAD.ONEAD_cleanup();
        }

        setTimeout(function() {
          slot.style.display = 'none';
        }, 400);
      }
    });

    if (parent.ONEAD_on_get_response === undefined) {
      parent.ONEAD_on_get_response = [];
    }
    parent.ONEAD_on_get_response.push(function(params) {
      if (params !== null) {
        slot.style.width = 'auto';
        slot.style.height = 'auto';
        slot.style.margin = '0 auto';
      } else {
        // 輪播廣告
      }
    });

    if (parent.window.ONEADs === undefined) {
      parent.window.ONEADs = [];
    }
    ONEAD.isip_index = parent.window.ONEADs.length;
    parent.window.ONEADs.push(ONEAD);

    if (ONEAD.isip_index != 0) {
      parent.window.ONEAD_is_window_onload = true;
    }

    (function() {
      var src = '//ad-specs.guoshipartners.com/static/js/isip.js';

      var js = document.createElement('script');
      js.async = true;
      js.onload = function() {
        if (ONEAD.isDfpIframeMode) {
          for (var k in parent.window) {
            if (k.indexOf('ONEAD_') !== -1) {
              window[k] = parent.window[k];
            }
          }
        }
        window.is_requesting_isip = false;
        resolve();
      };
      js.type = 'text/javascript';
      js.src = src;
      var node = document.getElementsByTagName('script')[0];
      node.parentNode.insertBefore(js, node.nextSibling); // insert after
    })();
  })();
};

var check_requesting_isip = function(window) {
  var resolve = function() {
    window.ONEAD_request_queue.shift();
    if (ONEAD_request_queue.length !== 0) {
      // window.is_requesting_isip = true;
      window.ONEAD_check_requesting_isip(window.frameElement === null ? parent.window : window);
    }
  };
  var request_isip = window.ONEAD_request_queue[0];
  request_isip(resolve);
};

window.ONEAD_request_queue = window.ONEAD_request_queue == undefined ? [] : window.ONEAD_request_queue;
if (window.ONEAD_request_queue.length == 0 && window.ONEAD_check_requesting_isip !== undefined && window.is_requesting_isip == false) {
  window.ONEAD_request_queue.push(request_isip);
  window.ONEAD_check_requesting_isip(window.frameElement === null ? parent.window : window);
} else {
  window.ONEAD_request_queue.push(request_isip);
}
if (window.ONEAD_check_requesting_isip === undefined) {
  window.ONEAD_check_requesting_isip = check_requesting_isip;
  window.ONEAD_check_requesting_isip(window.frameElement === null ? parent.window : window);
}
