Function.prototype.method = function (name, func)
{
    if (!this.prototype[name])
    {
        this.prototype[name] = func;
    }
    return this;
};


Array.method('clean', function (deleteValue)
{
    for (var i = 0; i < this.length; i++)
    {
        if (this[i] == deleteValue)
        {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
});

String.method('startsWith', function (prefix)
{
    return (this.substr(0, prefix.length) === prefix);
});

String.method('endsWith', function (prefix)
{
    return (this.substr(this.length - suffix.length) === suffix);
});


String.method('contains', function (txt)
{
    return (this.indexOf(txt) >= 0);
});


//String.method('format', function ()
//{
//    if (arguments.length == 0)
//    {
//        return null;
//    }

//    var str = arguments[0];

//    for (var i = 1; i < arguments.length; i++)
//    {

//        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
//        str = str.replace(re, arguments[i]);
//    }
//    return str;
//});



var cookieHelper = {
    debug: false,
    cookieNames: ['WaitRead', 'MVWaitRead', 'NewsFontSize', 'ViewVote', 'MTopBannerStatus', "FloatVideo", "Privacy"],//定義cookie名稱
    expireDays: 1000,// 定義過期日期 no expired days
    array_Count: 30,// 定義最多30筆

    Log: function (msg)
    {
        if (this.debug && console.log)
            console.log(msg);
    },

    //取得目前環境使用的cookie名稱
    GetCookieName: function (cookieType)
    {
        this.Log('GetCookieName');
        this.Log(cookieType);
        var _cookieName;

        if (typeof cookieType === 'undefined' || !cookieType)
        {//沒有指定，抓系統預設
            _cookieName = this.cookieNames[0];
        }
        else
        {//有指定
            switch (cookieType)
            {
                case 1:
                    _cookieName = this.cookieNames[0];
                    break;
                case 2:
                    _cookieName = this.cookieNames[1];
                    break;
                case 3:
                    _cookieName = this.cookieNames[2];
                    break;
                case 4:
                    _cookieName = this.cookieNames[3];
                    break;
                case 5:
                    _cookieName = this.cookieNames[4];
                    break;
                case 6:
                    _cookieName = this.cookieNames[5];
                    break;
                case 7:
                    _cookieName = this.cookieNames[6];
                    break;
                default:
                    _cookieName = this.cookieNames[0];
                    break;
            }
        }

        this.Log('_cookieName : ' + _cookieName);
        return _cookieName;
    },
    GetGetWaitReadArray:function (cookieType)
    {
        var reval;
        try
        {
            this.Log('GetGetWaitReadArray');

            var sValue = $.cookie(this.GetCookieName(cookieType));
            this.Log('sValue : ' + sValue);

            if (sValue) {
                reval = sValue.split(",").clean();
            }
        }
        catch (e) {
            reval = [];
        }
        finally {
            return reval;
        }
    },
    //取得稍後再讀數量
    GetWaitReadCount: function (cookieType)
    {
        var _WaitReadCount = 0;
        try
        {
            this.Log('GetWaitReadCount');
            var sValue = $.cookie(this.GetCookieName(cookieType));
            this.Log('sValue : ' + sValue);

            if (sValue) {
                var ary = sValue.split(",");

                _WaitReadCount = ary.clean().length;
            }

            this.Log('_WaitReadCount : ' + _WaitReadCount);

        }
        catch (e) {
            _WaitReadCount = 0;
        }
        finally {
            return _WaitReadCount;
        }
    },

    SetWaitRead: function (szNewsID, cookieType)
    {
        //避免數字重覆
        this.Log('SetWaitRead');

        var sNewsID = "#" + szNewsID + "#";
        this.Log('sNewsID : ' + sNewsID);

        var sValue = $.cookie(this.GetCookieName(cookieType));//$.cookie(cookieName);//GetCookie("WaitRead");
        this.Log('sValue before : ' + sValue);

        //檢查是否已存在, 尚未存在Save Cookie
        if (sValue)
        {
            if (sValue.indexOf(sNewsID) != -1)
                return;
            //最多顯示30則
            var ary = sValue.split(",");
            if (ary.length >= this.array_Count)
            {
                ary.splice(this.array_Count - 1, ary.length - this.array_Count + 1); //從尾端切
            }
            ary.splice(0, 0, sNewsID);//加入新的在前端

            //ary.push(sNewsID);//append

            sValue = ary.join();
        }
        else
        {
            sValue = sNewsID;
        }

        this.Log('sValue after : ' + sValue);

        $.cookie(this.GetCookieName(cookieType), sValue, { expires: this.expireDays, path: '/' });

        return this;
    },

    ShowWaitRead: function (elem)
    {
        this.Log('ShowWaitRead');

        if (elem)
        {
            var total = 0;
            for (var i = 0; i < 1; i++)
            {
                total += this.GetWaitReadCount(i + 1);
            }
            this.Log('total : ' + total);

            elem.text(total);
        }
    },

    DelWaitRead: function (szNewsID, cookieType)
    {
        this.Log('DelWaitRead');

        var sNewsID = "#" + szNewsID + "#";
        this.Log('sNewsID : ' + sNewsID);

        var sValue = $.cookie(this.GetCookieName(cookieType));
        this.Log('sValue before : ' + sValue);

        if (sValue && sValue.indexOf(sNewsID) != -1)
        {
            var ary = sValue.split(",");
            for (var i = 0; i < ary.length; i++)
            {
                if (ary[i] == sNewsID)
                {
                    ary.splice(i, 1);
                    break;
                }
            }
            sValue = ary.join();

            this.Log('sValue after : ' + sValue);

            $.cookie(this.GetCookieName(cookieType), sValue, { expires: this.expireDays, path: '/' });
        }
        else
        {
            this.Log('sNewsID : ' + sNewsID + ' not Found');
        }

        return this;
    },

    DelWaitReadAll: function (cookieType)
    {
        this.Log('DelWaitReadAll');

        $.removeCookie(this.GetCookieName(cookieType), { path: '/' });
        return this;
    },
    SetNewsFontSize: function (fontSizeCss) {
        var cookieType = 3;
        this.Log('SetNewsFontSize');

        var fontSizeCss = fontSizeCss;
        this.Log('fontSizeCss : ' + fontSizeCss);

        var sValue = $.cookie(this.GetCookieName(cookieType));
        this.Log('sValue before : ' + sValue);

        //檢查是否已存在, 尚未存在Save Cookie
        sValue = fontSizeCss;
       
        this.Log('sValue after : ' + sValue);

        $.cookie(this.GetCookieName(cookieType), sValue, { expires: this.expireDays, path: '/' });

        return this;
    },
    GetNewsFontSize: function () {
        var cookieType = 3;
        var fontSize = "";
        try {
            this.Log('GetNewsFontSize');
            var sValue = $.cookie(this.GetCookieName(cookieType));
            this.Log('sValue : ' + sValue);

            if (sValue) {
                fontSize = sValue;
            }

            this.Log('fontSize : ' + fontSize);

        }
        catch (e) {
         
        }
        finally {
            return fontSize;
        }
    },
    SetViewVote: function (v) {
        var cookieType = 4;
        $.cookie(this.GetCookieName(cookieType), 1, { expires: this.expireDays, path: '/' });
        return this;
    },
    DelViewVote: function () {
        $.removeCookie(this.GetCookieName(4), { path: '/' });
        return this;
    },
    GetTopicScore: function (topicid) {
        var cookieName = "TopicID_" + topicid;
        var sValue = "";
        try {
            sValue = $.cookie(cookieName);
        }
        catch (e) {
            //console.log(e.message);
        }
        finally {
            return sValue;
        }
    },
    SetMobileTopBanner: function () {
        var cookieName = this.GetCookieName(5)
        var sValue = $.cookie(cookieName);

        //檢查是否已存在, 尚未存在Save Cookie
        if (sValue == null) {
            sValue =  false;
           
            var now = Date.now();
            console.log(now);

            $.cookie(cookieName, sValue, { expires: 1/12 , path: '/' });
        }

        return this;
    },
    GetMobileTopBanner: function () {
        var cookieName = this.GetCookieName(5)
        var sValue = "";
        try {
            sValue = $.cookie(cookieName);
        }
        catch (e) {
            //console.log(e.message);
        }
        finally {
            return sValue;
        }
    },
    SetFloatVideo: function (top, left) {
            this.Log('SetFloatVideo');
            var sValue = $.cookie(this.GetCookieName(6));
            this.Log('sValue before : ' + sValue);

            var style = { 'top': top, 'left': left };
            sValue = JSON.stringify(style);
            

            this.Log('sValue after : ' + sValue);

            $.cookie(this.GetCookieName(6), sValue, { expires: this.expireDays, path: '/' });

            return this;
        },
    GetFloatVideo: function () {
        var cookieName = this.GetCookieName(6)
        var sValue = "";
        try {
            var sValue = $.parseJSON($.cookie(cookieName));
        }
        catch (e) {
            //console.log(e.message);
        }
        finally {
            return sValue;
        }
    },
    SetClickPrivacy: function () {
        var cookieName = this.GetCookieName(7)
        var sValue = $.cookie(cookieName);

        //檢查是否已存在, 尚未存在Save Cookie
        if (sValue == null) {
            sValue = true;

            var now = Date.now();
            console.log(now);

            $.cookie(cookieName, sValue, { expires: 99999, path: '/' });
        }

        return this;
    },
    GetClickPrivacy: function () {
        var cookieName = this.GetCookieName(7)
        var sValue = "";
        try {
            sValue = $.cookie(cookieName);
        }
        catch (e) {
            //console.log(e.message);
        }
        finally {
            return sValue;
        }
    }
};

