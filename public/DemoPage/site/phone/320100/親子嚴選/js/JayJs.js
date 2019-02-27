//--模枋Response.Write
var response = function () {
    this.txt = '';
    this.reswl = function () {
        document.write(this.txt);
        document.write("<br>");
    };
    this.resw = function () {
        document.write(this.txt);
    };
};
//--註冊JS
var regjs = function () {
    this.type = 'text/javascript';
    this.src = null;
    this.txt = null;
    this.register = function (d) {
        var js = document.createElement("script");
        if (this.type != null)
            js.type = this.type;
        if (this.txt != null)
            js.innerHTML = this.txt;
        if (this.src != null)
            js.src = this.src;
        if (d != 'body')
            document.getElementsByTagName(d)[0].appendChild(js);
        else
            document.body.appendChild(js);
    };
};
//--動態生成Controls
var control = function () {
    this.type = null;
    this.id = null;
    this.name = null;
    this.value = null;
    this.style = null;
    this.Add = function (ctl) {
        var a = document.createElement(ctl);
        if (this.type != null)
            a.type = this.type;
        if (this.id != null)
            a.id = this.id;
        if (this.name != null)
            a.name = this.name;
        if (this.value != null)
            a.value = this.value;
        if (this.style != null)
            a.style = this.style;
        return a;
    }
    this.appendChild = function (d, c) {
        d.appendChild(c);
    }
};
//--模仿Request.QueryString["x"]
var request = function () {
    this.QueryString = function (name) {
        var AllVars = window.location.search.substring(1);
        var Vars = AllVars.split("&");
        for (i = 0; i < Vars.length; i++) {
            var Var = Vars[i].split("=");
            if (Var[0] == name) return Var[1];
        }
        return "";
    }
};
//--Ajax
AddAntiForgeryToken = function (data) {
    data.__RequestVerificationToken = $('input[name=__RequestVerificationToken]').val();
    return data;
};

//--JavaScript Ajax
var Js_Ajax = function () {
    this.xmlHttp = '';
    this.createXMLHttpRequest = function () {
        if (window.XMLHttpRequest) { // 如果是 Mozilla, Safari,...
            xmlHttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // 如果是 IE
            try {
                // IE 又分成新版和舊版的，其處理方式也不同
                // 新版的 IE，目前 IE 9 OK
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    // 舊版的 IE
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) { }
            }
        }
    };
    this.AjaxGet = function (ajaxPage, reqstring) {
        this.createXMLHttpRequest();
        var url = ajaxPage + "?";
        if (reqstring != '')
            url += reqstring + "&time=" + new Date().getTime();
        else
            url += "time=" + new Date().getTime();
        xmlHttp.onreadystatechange = this.AjaxAction;
        xmlHttp.open("GET", url);
        xmlHttp.send(null);
    };
    this.AjaxPost = function (ajaxPage, reqstring) {
        this.createXMLHttpRequest();
        var url = ajaxPage + "?time=" + new Date().getTime();
        var ReqString = reqstring;
        xmlHttp.open("POST", url)
        xmlHttp.onreadystatechange = this.AjaxAction;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttp.send(ReqString);
    };
    this.AjaxAction = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            alert(xmlHttp.responseText);
        }
        else
            alert(xmlHttp.readyState + '|' + xmlHttp.status);
    };
    //Use Method AjaxGet
    //Js_Ajax.prototype.AjaxAction = function() {
    //    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    //        var c = new control();
    //        var a = c.Add('img');
    //        a.src = xmlHttp.responseText;
    //        var d = document.getElementById('advert_test');
    //        d.innerHTML = '';
    //        c.appendChild(d, a);
    //    }
    //}
    //var j = new Js_Ajax();
    //j.AjaxGet('http://192.168.1.13:98/Advert_Handler.ashx');

    this.createCORSRequest = function () {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            xhr = null;
        }
        return xhr;
    };
    //Use Method createCORSRequest
    //var request = createCORSRequest("get", url);
    //if (request) {
    //  request.onload = function() {
    //  alert(request.responseText);
    //  };
    //  request.send();
    //}
};


//change write ajax
(function ($) {
    var ajax = $.ajax,
        pendingRequests = {},
        synced = [],
        syncedData = [],
        ajaxRunning = [];
    $.ajax = function (settings) {
        // create settings for compatibility with ajaxSetup
        settings = jQuery.extend(settings, jQuery.extend({}, jQuery.ajaxSettings, settings));
        var port = settings.port;
        switch (settings.mode) {
            case "abort":
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                return pendingRequests[port] = ajax.apply(this, arguments);
            case "queue":
                var _old = settings.complete;
                settings.complete = function () {
                    if (_old) {
                        _old.apply(this, arguments);
                    }
                    if (jQuery([ajax]).queue("ajax" + port).length > 0) {
                        jQuery([ajax]).dequeue("ajax" + port);
                    } else {
                        ajaxRunning[port] = false;
                    }
                };
                jQuery([ajax]).queue("ajax" + port, function () {
                    ajax(settings);
                });
                if (jQuery([ajax]).queue("ajax" + port).length == 1 && !ajaxRunning[port]) {
                    ajaxRunning[port] = true;
                    jQuery([ajax]).dequeue("ajax" + port);
                }
                return;
            case "sync":
                var pos = synced.length;
                synced[pos] = {
                    error: settings.error,
                    success: settings.success,
                    complete: settings.complete,
                    done: false
                };
                syncedData[pos] = {
                    error: [],
                    success: [],
                    complete: []
                };
                settings.error = function () { syncedData[pos].error = arguments; };
                settings.success = function () { syncedData[pos].success = arguments; };
                settings.complete = function () {
                    syncedData[pos].complete = arguments;
                    synced[pos].done = true;
                    if (pos == 0 || !synced[pos - 1])
                        for (var i = pos; i < synced.length && synced[i].done; i++) {
                            if (synced[i].error) synced[i].error.apply(jQuery, syncedData[i].error);
                            if (synced[i].success) synced[i].success.apply(jQuery, syncedData[i].success);
                            if (synced[i].complete) synced[i].complete.apply(jQuery, syncedData[i].complete);
                            synced[i] = null;
                            syncedData[i] = null;
                        }
                };
        }
        return ajax.apply(this, arguments);
    };
})(jQuery);
