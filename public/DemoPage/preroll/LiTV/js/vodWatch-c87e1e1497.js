! function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(o, r, function (t) {
        return e[t]
      }.bind(null, r));
    return o
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 201)
}([function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function e(t, n, o) {
      null === t && (t = Function.prototype);
      var r = Object.getOwnPropertyDescriptor(t, n);
      if (void 0 === r) {
        var i = Object.getPrototypeOf(t);
        return null === i ? void 0 : e(i, n, o)
      }
      if ("value" in r) return r.value;
      var a = r.get;
      return void 0 !== a ? a.call(o) : void 0
    },
    i = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(103)),
    a = new(function (e) {
      function t() {
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, i.default.EventEmitter), o(t, [{
        key: "one",
        value: function (e, n) {
          r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "once", this).call(this, e, n)
        }
      }, {
        key: "off",
        value: function (e, n) {
          r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "off", this) ? r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "off", this).call(this, e, n) : r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeListener", this).call(this, e, n)
        }
      }, {
        key: "trigger",
        value: function () {
          r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "emit", this).apply(this, arguments)
        }
      }]), t
    }());
  t.default = a
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(2)),
    r = new function () {
      var e = new Array,
        t = null,
        n = {},
        r = !1;
      $(window).on("unload", function () {
        r = !0
      }), this.get = function (t, n, o, r) {
        e.push({
          param: t,
          succCallback: n,
          failCallback: o,
          cache: r,
          type: "common"
        }), e.length <= 1 && a(t, n, o, i, r)
      }, this.getZlib = function (t, n, o, r) {
        e.push({
          param: t,
          succCallback: n,
          failCallback: o,
          cache: r,
          type: "zlib"
        }), e.length <= 1 && s(t, n, o, i, r)
      }, this.abortAll = function () {
        e = new Array, t && 4 != t.readyState && t.abort()
      };
      var i = function t(n, o) {
          if (c.complete(JSON.stringify(n), o), e.shift(), !(e.length <= 0)) {
            var r = e[0],
              i = r.param,
              l = r.succCallback,
              u = r.failCallback,
              d = r.cache;
            "zlib" == r.type ? s(i, l, u, t, d) : a(i, l, u, t, d)
          }
        },
        a = function (e, i, a, s, l) {
          if (c.start(JSON.stringify(e)), 1 == l) {
            var u = JSON.stringify(e),
              d = n[u];
            if (d) {
              if (d = o.default.deepClone(d), "function" == typeof i) try {
                i(e, d)
              } catch (t) {
                console.error(e, t)
              }
              return void s(e, d)
            }
          }
          var f = null,
            p = "json",
            h = "application/json",
            v = "",
            m = {},
            g = function (e) {
              e.setRequestHeader("X-Ajax-call", "true"), e.setRequestHeader("browser_type", v)
            };
          e.dataType && (p = e.dataType), e.contentType && (h = e.contentType), e.browserType && (v = e.browserType), e.headers && (m = e.headers), e.beforeSend && (g = e.beforeSend), t = $.ajax({
            async: !0,
            type: e.selectMethod,
            url: e.url,
            dataType: p,
            contentType: h,
            data: e.request,
            cache: !1,
            headers: m,
            beforeSend: g,
            success: function (t) {
              if (f = t, 1 == l) {
                var r = JSON.stringify(e);
                n[r] = o.default.deepClone(t)
              }
              if ("function" == typeof i) try {
                i(e, t)
              } catch (t) {
                console.error(e, t)
              }
            },
            error: function (t, n, o) {
              if ("abort" != t.statusText && (0 == r && console.error("ajax error", e, t, n, o), "function" == typeof a)) try {
                a(e, t, n, o)
              } catch (t) {
                console.error(e, t)
              }
            },
            complete: function (t, n) {
              s(e, f, t, n)
            }
          })
        },
        s = function (e, o, i, a, s) {
          if (c.start(JSON.stringify(e)), 1 == s) {
            var d = JSON.stringify(e),
              f = n[d];
            if (f) {
              if ("function" == typeof o) try {
                o(e, f)
              } catch (t) {
                console.error(e, t)
              }
              return void a(e, f)
            }
          }
          var p = null;
          t = $.ajax({
            async: !0,
            type: "GET",
            url: e,
            dataType: "text",
            contentType: "text/plain",
            cache: !0,
            beforeSend: function (e) {
              e.overrideMimeType("text/plain; charset=x-user-defined")
            },
            success: function (t) {
              if (t = l(t), t = u(t), t = JSON.parse(t), p = t, 1 == s) {
                var r = JSON.stringify(e);
                n[r] = t
              }
              if ("function" == typeof o) try {
                o(e, t)
              } catch (t) {
                console.error(e, t)
              }
            },
            error: function (t, n, o) {
              if ("abort" != t.statusText && (0 == r && console.error("ajax error", e, t, n, o), "function" == typeof i)) try {
                i(e, t, n, o)
              } catch (t) {
                console.error(e, t)
              }
            },
            complete: function (t, n) {
              a(e, p, t, n)
            }
          })
        },
        l = function (e) {
          for (var t = e.length, n = new Uint8Array(t), o = 0; o < t; o++) n[o] = 255 & e.charCodeAt(o);
          return n
        },
        u = function (e) {
          return pako.inflate(e, {
            to: "string"
          })
        },
        c = new function () {
          var e = null;
          this.start = function (t) {
            litv.debug && (e = (new Date).getTime(), console.group(t, "..."), console.groupEnd())
          }, this.complete = function (t, n) {
            if (litv.debug) {
              var o = (new Date).getTime() - e;
              console.group(t, "complete"), console.log("response", n), console.log("consumption", o), console.groupEnd()
            }
          }
        }
    };
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    i = d(n(1)),
    a = (d(n(13)), d(n(5))),
    s = d(n(51)),
    l = d(n(79)),
    u = d(n(15)),
    c = d(n(81));

  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var f = new(function () {
    function e() {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e)
    }
    return r(e, [{
      key: "googleTrackConversion",
      value: function (e) {
        ! function e(t, n) {
          "undefined" != typeof google_trackConversion ? google_trackConversion({
            google_conversion_id: 939397563,
            google_conversion_language: "en",
            google_conversion_format: "3",
            google_conversion_color: "ffffff",
            google_conversion_label: t,
            google_remarketing_only: !1
          }) : n < 10 && setTimeout(function () {
            e(t, ++n)
          }, 100)
        }(e, 0)
      }
    }, {
      key: "getAuthStatus",
      value: function (e) {
        i.default.get({
          url: "/member/ajax/getAuthentication",
          selectMethod: "GET",
          request: {}
        }, function (t, n) {
          "function" == typeof e && e(n)
        }, null)
      }
    }, {
      key: "getHeaderMeta",
      value: function (e) {
        i.default.get({
          url: "/ajax/getHeaderMeta",
          selectMethod: "GET",
          request: {}
        }, function (t, n) {
          "function" == typeof e && e(n)
        }, null, !0)
      }
    }, {
      key: "getHeaderHtml",
      value: function (e) {
        var t = this;
        i.default.get({
          url: "/ajax/getHeader",
          selectMethod: "GET",
          dataType: "text",
          request: {}
        }, function (n, o) {
          o = t.ascii2native(o), "function" == typeof e && e(o)
        }, null, !0)
      }
    }, {
      key: "getFooterHtml",
      value: function (e) {
        var t = this;
        i.default.get({
          url: "/ajax/getFooter",
          selectMethod: "GET",
          dataType: "text",
          request: {}
        }, function (n, o) {
          o = t.ascii2native(o), "function" == typeof e && e(o)
        }, null, !0)
      }
    }, {
      key: "getUserStatusInfo",
      value: function (e) {
        i.default.get({
          url: "/member/getUserStatusInfo",
          selectMethod: "GET",
          request: {}
        }, function (t, n) {
          "function" == typeof e && e(n)
        }, null)
      }
    }, {
      key: "getUserProfile",
      value: function (e) {
        i.default.get({
          url: "/member/ajax/getUIUser",
          selectMethod: "GET",
          request: {}
        }, function (t, n) {
          "function" == typeof e && e(n)
        }, null)
      }
    }, {
      key: "getBuildNumber",
      value: function (e) {
        i.default.get({
          url: "/system/ajax/getBuildNumber",
          selectMethod: "GET",
          request: {}
        }, function (t, n) {
          var o = n.buildNumber;
          "function" == typeof e && e(o)
        }, null, !0)
      }
    }, {
      key: "deepClone",
      value: function (e) {
        if (null == e) return null;
        if ("number boolean string undefined".indexOf((void 0 === e ? "undefined" : o(e)).toLowerCase()) >= 0) return e;
        if (e instanceof Array) {
          for (var t = [], n = 0; n < e.length; n++) t.push(this.deepClone(e[n]));
          return t
        }
        var r = new Object;
        for (var i in e) r[i] = this.deepClone(e[i]);
        return r
      }
    }, {
      key: "getAjaxTime",
      value: function (e) {
        i.default.get({
          url: "/system/ajax/getTime",
          selectMethod: "GET",
          request: {}
        }, function (t, n) {
          e(n)
        }, null)
      }
    }, {
      key: "nextTack",
      value: function (e) {
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, requestAnimationFrame ? "function" == typeof e && requestAnimationFrame(e) : "function" == typeof e && setTimeout(e, 16)
      }
    }, {
      key: "getBrowserType",
      value: function () {
        var e = "";
        return 1 == a.default.detectIsAndroid() ? e = "mobile_android" : 1 == a.default.detectIsIOS() && (e = "mobile_ios"), e
      }
    }, {
      key: "getAjaxBrowserType",
      value: function () {
        var e = sessionStorage.getItem("sponsorName"),
          t = this.getBrowserType();
        return e && (e = atob(e), t = "mobile_android" == t ? "mobile_" + e + "_android" : "mobile_ios" == t ? "mobile_" + e + "_ios" : e), t
      }
    }, {
      key: "getIpData",
      value: function (e) {
        var t = {
            url: "https://api.ipify.org?format=jsonp&callback=?",
            selectMethod: "GET",
            request: {},
            dataType: "jsonp"
          },
          n = (new Date).getTime();
        litv.debug && (console.group(JSON.stringify(t), "..."), console.groupEnd()), $.getJSON(t.url, function (o) {
          if (litv.debug) {
            var r = (new Date).getTime() - n;
            console.group(JSON.stringify(t), "complete"), console.log("response", o), console.log("consumption", r), console.groupEnd()
          }
          "function" == typeof e && e(o)
        })
      }
    }, {
      key: "native2ascii",
      value: function (e) {
        e = e.split("");
        for (var t = "", n = 0; n < e.length; n++) {
          var o = Number(e[n].charCodeAt(0));
          if (o.toString(16), o > 127) {
            var r = o.toString(16);
            t += "\\u" + (r = new String("0000").substring(r.length, 4) + r)
          } else t += e[n]
        }
        return t
      }
    }, {
      key: "ascii2native",
      value: function (e) {
        for (var t = (e = e.split("\\u"))[0], n = 1; n < e.length; n++) {
          var o = e[n];
          t += String.fromCharCode(parseInt("0x" + o.substring(0, 4))), o.length > 4 && (t += o.substring(4, o.length))
        }
        return t
      }
    }, {
      key: "randomElementByArray",
      value: function (e) {
        if (Array.isArray(e)) {
          var t = e.length;
          return e[Math.floor(Math.random() * (t - 0)) + 0]
        }
      }
    }, {
      key: "getTVApp",
      value: function (e) {
        i.default.get({
          url: "/system/ajax/getTVApp",
          selectMethod: "GET",
          request: {}
        }, function (t, n) {
          "function" == typeof e && e(n)
        }, null, !0)
      }
    }, {
      key: "extend",
      value: function (e) {
        function t() {
          return e.apply(this, arguments)
        }
        return t.toString = function () {
          return e.toString()
        }, t
      }(function () {
        var e = arguments[0],
          t = !1,
          n = 0,
          o = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], e = arguments[1], n++);
        for (var r = function (n) {
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t && "[object Object]" === Object.prototype.toString.call(n[o]) ? e[o] = extend(!0, e[o], n[o]) : e[o] = n[o])
          }; n < o; n++) r(arguments[n]);
        return e
      })
    }, {
      key: "bubbleSort",
      value: function (e, t) {
        var n = null;
        if (Array.isArray(e)) n = e;
        else {
          if ("object" != (void 0 === e ? "undefined" : o(e))) return void console.error("Array.isArray(obj) = false || typeof obj != 'object'");
          for (var r in n = new Array, e) {
            var i = e[r];
            n.push(i)
          }
        }
        for (var a = n.length; a > 1;) {
          a--;
          for (var s = 0; s < a; s++) {
            var l = n[s],
              u = n[s + 1];
            if (t && (l = l[t], u = u[t]), l > u) {
              var c = n[s];
              n[s] = n[s + 1], n[s + 1] = c
            }
          }
        }
        return n
      }
    }, {
      key: "binarySearch",
      value: function (e, t, n) {
        var o = t.length,
          r = 0,
          i = 0,
          a = 0;
        do {
          r = i;
          var s = e,
            l = t[i];
          if (n && (s = s[n], l = l[n], s = parseInt(s), l = parseInt(l)), l > s) o = i + 1, i -= a;
          else if (l == s) return i;
          i += a = Math.floor((o - i) / 2)
        } while (r !== i);
        return -1
      }
    }, {
      key: "objectKeysToCamelCase",
      value: function (e) {
        var t = this,
          n = {};
        return (0, s.default)(e, function (e, o) {
          ((0, l.default)(e) || (0, u.default)(e)) && (e = t.objectKeysToCamelCase(e)), n[(0, c.default)(o)] = e
        }), n
      }
    }]), e
  }());
  t.default = f
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(6)),
    i = new(function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.isPosterBannerDownload = !1
      }
      return o(e, [{
        key: "getFromElement",
        value: function (e) {
          return void 0 !== e.fromElement ? e.fromElement : void 0 !== e.relatedTarget ? e.relatedTarget : null
        }
      }, {
        key: "getToElement",
        value: function (e) {
          if (void 0 !== e.toElement) return e.toElement;
          if (void 0 !== e.relatedTarget) {
            if (null != e.relatedTarget) return e.relatedTarget;
            if (void 0 !== e.currentTarget) return e.currentTarget
          }
          return null
        }
      }, {
        key: "findElementByClass",
        value: function (e, t) {
          var n = $(e.target);
          if (0 == n.hasClass(t))
            for (;;) {
              if (1 == (n = n.parent()).hasClass(t)) return n;
              if (n.length <= 0) return null
            }
          return n
        }
      }, {
        key: "getFilenameFromBackgroundImage",
        value: function (e) {
          var t = (e = $(e)).css("background-image");
          if (t) {
            var n = t.replace(/^url\(['"]?(.+?)['"]?\)/, "$1"),
              o = n.getFilename(n);
            if (o) return o
          }
          return null
        }
      }, {
        key: "getPosterBannerStyle",
        value: function () {
          if (1 != this.isPosterBannerDownload) {
            var e = document.getElementsByTagName("head")[0],
              t = document.createElement("link");
            t.href = r.default.getDomain() + "/promo/posterBannerStyle/posterBannerStyle.css?rand=" + Math.random(), t.type = "text/css", t.rel = "stylesheet", t.media = "all", e.appendChild(t), this.isPosterBannerDownload = !0
          }
        }
      }, {
        key: "getEventAttribute",
        value: function (e, t) {
          if (!e) return null;
          if (!t) return null;
          for (var n = $(e.target), o = n.attr(t); null == o;) {
            if ((n = n.parent()).length <= 0) return null;
            o = n.attr(t)
          }
          return o
        }
      }, {
        key: "getVodStarView",
        value: function (e) {
          var t = parseInt(e) / 2;
          t = Math.floor(t);
          for (var n = e % 2, o = new Array, r = 1; r <= 5; r++) r <= t ? o.push("<div class='score_star full'></div>") : r == t + 1 && n >= 1 ? o.push("<div class='score_star half'></div>") : o.push("<div class='score_star empty'></div>");
          return o.join("")
        }
      }]), e
    }());
  t.default = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = a(n(0)),
    i = a(n(30));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function () {
    function e() {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.DIALOG_SHOW_EVENT = "dialogCommon.showEvent", this.DIALOG_DISMISS_EVENT = "dialogCommon.dismissEvent", this.DIALOG_EXIT_CLICK_EVENT = "dialogCommon.exitClickEvent"
    }
    return o(e, [{
      key: "show",
      value: function (e) {
        var t = this;
        t.param = e || {};
        var n = {
          key: "customize",
          title: t.param.dialogTitle,
          content: t.param.dialogHtml,
          closeButton: t.param.dialogCloseBtn,
          callback: function (e, n, o) {
            "cancel" == e && t.exitClick()
          }
        };
        (new i.default).renderCustomizeAlert(n), r.default.emit(this.DIALOG_SHOW_EVENT)
      }
    }, {
      key: "dismiss",
      value: function () {
        $(".alert_module").attr("class", "alert_module"), i.default.dissmiss(), r.default.emit(this.DIALOG_DISMISS_EVENT)
      }
    }, {
      key: "exitClick",
      value: function () {
        $(".alert_module").attr("class", "alert_module"), i.default.dissmiss(), r.default.emit(this.DIALOG_EXIT_CLICK_EVENT), r.default.emit(this.DIALOG_DISMISS_EVENT)
      }
    }]), e
  }();
  t.default = s
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = new(function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.deviceType = this.detectIsMobile() ? "mobile" : "pc"
      }
      return o(e, [{
        key: "detectIsMobile",
        value: function () {
          return new RegExp("IPHONE|IPAD|ANDROID").test(navigator.userAgent.toUpperCase())
        }
      }, {
        key: "detectIsIOS",
        value: function () {
          return new RegExp("IPHONE|IPAD").test(navigator.userAgent.toUpperCase())
        }
      }, {
        key: "detectIsAndroid",
        value: function () {
          return new RegExp("ANDROID").test(navigator.userAgent.toUpperCase())
        }
      }]), e
    }());
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(44)),
    i = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return o(e, [{
        key: "getDetail",
        value: function (e) {
          return e || (e = window.location.href), r.default.parse(e, !0)
        }
      }, {
        key: "getUrlParam",
        value: function (e) {
          var t = window.location.href,
            n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
          return n && n[1] ? n[1] : null
        }
      }, {
        key: "replaceUrlParam",
        value: function (e, t) {
          var n = window.location.href,
            o = new RegExp("[\\?&](" + e + "=[^&#]*)").exec(n);
          o ? n = n.replace(o[1], e + "=" + t) : -1 != n.indexOf("?") && -1 != n.indexOf("&") ? n += "&" + e + "=" + t : -1 != n.indexOf("?") ? n.indexOf("?") >= n.length - 1 ? n += e + "=" + t : n += "&" + e + "=" + t : n += "?" + e + "=" + t, window.history.replaceState({}, document.title, n)
        }
      }, {
        key: "removeUrlParam",
        value: function (e) {
          var t = window.location.href,
            n = new RegExp("([\\?](" + e + "=[^&#]*[&]?)|([&]" + e + "=[^&#]*))").exec(t),
            o = null;
          n && (n[2] ? o = n[2] : n[3] && (o = n[3])), o && (t = t.replace(o, ""), window.history.replaceState({}, document.title, t))
        }
      }, {
        key: "getOrigin",
        value: function () {
          var e = window.location.protocol + "//" + window.location.hostname,
            t = window.location.port;
          return t && (e += ":" + t), e
        }
      }, {
        key: "getDomain",
        value: function () {
          var e = window.location.href,
            t = new RegExp("^(http|https):\\/\\/[^\\/]+", "i"),
            n = e.match(t);
          return n && -1 != n[0].indexOf("https://www.litv.tv") ? n[0] : "https://staging-web.svc.litv.tv"
        }
      }, {
        key: "getType",
        value: function () {
          return -1 != this.getDomain().indexOf("https://www.litv.tv") ? "production" : "staging"
        }
      }, {
        key: "getFilename",
        value: function (e) {
          var t = new RegExp("\\/([^\\/?]+)[^\\/]*$"),
            n = e.match(t);
          return n && n.length > 1 ? n[1] : null
        }
      }, {
        key: "getQueryString",
        value: function (e) {
          return a(e).queryString
        }
      }, {
        key: "getQuerys",
        value: function (e) {
          var t = a(e);
          return s(t)
        }
      }, {
        key: "getHash",
        value: function (e) {
          return a(e).hash
        }
      }, {
        key: "getUrlStructure",
        value: function (e) {
          return a(e)
        }
      }, {
        key: "excludeQuerysURL",
        value: function (e, t) {
          var n = a(t),
            o = excludeQuerysCore(e, n),
            r = [];
          for (var i in o) void 0 === o[i] ? r.push(i) : r.push(i + "=" + o[i]);
          return r.length > 0 ? n.url + "?" + r.join("&") : n.url
        }
      }, {
        key: "retentionQuerysURL",
        value: function (e, t) {
          var n = a(t),
            o = s(n),
            r = [];
          for (var i in e) void 0 === o[e[i]] ? r.push(e[i]) : r.push(e[i] + "=" + o[e[i]]);
          return r.length > 0 ? n.url + "?" + r.join("&") : n.url
        }
      }, {
        key: "changeQueryValue",
        value: function (e, t, n) {
          var o = a(n),
            r = s(o);
          r[e] = t;
          var i = [];
          for (var l in r) void 0 === r[l] ? i.push(l) : i.push(l + "=" + r[l]);
          return i.length > 0 ? o.url + "?" + i.join("&") : o.url
        }
      }, {
        key: "getFilenameFromUrl",
        value: function (e) {
          var t = new RegExp("\\/([^\\/?]+)[^\\/]*$"),
            n = e.match(t);
          return n && n.length > 1 ? n[1] : null
        }
      }, {
        key: "getCdnStatic",
        value: function () {
          return "staging" == this.getType() ? "https://cdnstatic-staging.svc.litv.tv" : "https://cdnstatic.svc.litv.tv"
        }
      }]), e
    }(),
    a = function (e) {
      e || (e = window.location.href);
      var t = e.split("?"),
        n = [];
      return t[1] ? n = t[1].split("#") : n[0] = null, {
        url: t[0],
        queryString: n[0],
        hash: n[1] || null
      }
    },
    s = function (e) {
      if (e.queryString) {
        for (var t = {}, n = e.queryString.split("&"), o = 0, r = n.length; o < r; o++)
          if ("" != n[o]) {
            var i = n[o].split("=");
            t[i[0]] = i[1]
          } return t
      }
      return {}
    },
    l = new i;
  t.default = l
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = s(n(1)),
    i = s(n(2)),
    a = s(n(22));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  window.litv = window.litv || {};
  var l = new(function () {
    function e() {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e)
    }
    return o(e, [{
      key: "isLive",
      value: function (e) {
        var t = e.contentType;
        return "channel" == t || "vod-channel" == t || "playout-channel" == t
      }
    }, {
      key: "checkChannelTrialStatus",
      value: function (e) {
        r.default.get({
          url: "/channel/ajax/getTrialStatus",
          selectMethod: "GET",
          request: {}
        }, function (t, n) {
          "function" == typeof e && e(n)
        }, null)
      }
    }, {
      key: "isPlayerExist",
      value: function (e) {
        var t = !1;
        return 1 == e.playerView.getFlowplayerSection().hasClass("is-ready") && (t = !0), t
      }
    }, {
      key: "isOnlyAssetId",
      value: function (e) {
        var t = !1;
        return !e.contentId && e.assetId && (t = !0), t
      }
    }, {
      key: "isVodEntryPoint",
      value: function (e) {
        var t = !1;
        return e.groupId && "0" != e.groupId || e.videoType || (t = !0), t
      }
    }, {
      key: "isRulePlayList",
      value: function (e) {
        return !(0 != e.isSeries || !e.ruleId)
      }
    }, {
      key: "getBsmPkgCategory",
      value: function (e) {
        for (var t = e.packageInfo.bsmPkgCategories, n = 0; n < t.length; n++) {
          var o = t[n],
            r = o.purchaseType;
          if (r && "X" != r) return o
        }
        return null
      }
    }, {
      key: "channelRecordToServer",
      value: function (e) {
        l.isLive(e) && e.isAuthenticated && i.default.getUserProfile(function (n) {
          var o = (new a.default).getResult(),
            r = "https://cwh.svc.litv.tv/channel/log/";
          r = r + n.accountId + "/" + e.contentId + "/" + e.no + "/LTWEB00/" + o.browser.name, fetch(r, {
            headers: new Headers({
              "Content-Type": "application/json"
            })
          }).then(function (e) {
            litv.debug && (console.group("channel record send to server"), console.log("url => ", r), console.groupEnd(), t(n))
          })
        });
        var t = function (e) {
          var t = "https://cwh.svc.litv.tv/channel/getClientLog/" + e.accountId;
          fetch(t).then(function (e) {
            e.text().then(function (e) {
              console.group("channel record update from server"), console.log("url => ", t), console.log(e), console.groupEnd()
            })
          })
        }
      }
    }]), e
  }());
  t.default = l
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = c(n(9)),
    i = c(n(4)),
    a = c(n(106)),
    s = c(n(112)),
    l = c(n(0)),
    u = c(n(35));

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var d = function (e) {
      function t() {
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, i.default), o(t, [{
        key: "show",
        value: function (e) {
          (e = e || {}).dialogTitle = "<div class='login_dialog_title'>登入</div>", e.dialogHtml = r.default.getHtml(),
            function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("login");
          var n = $(".alert_box .login_view");
          f(n, e), h(n, e), r.default.setContent(n, e), r.default.setAction(n), p.init(n), ga("send", "event", "account", "pageview", "login")
        }
      }]), t
    }(),
    f = function (e, t) {
      (0, u.default)("login", t.descKey, e.find(".content_title"))
    },
    p = new function () {
      var e = this,
        t = null;
      this.init = function (n) {
        t = n, l.default.off(r.default.LOGIN_SUCCESS_EVENT, e.succ), l.default.off(r.default.LOGIN_FAIL_EVENT, e.fail), l.default.off(v.DIALOG_DISMISS_EVENT, e.end), l.default.on(r.default.LOGIN_SUCCESS_EVENT, e.succ), l.default.on(r.default.LOGIN_FAIL_EVENT, e.fail), l.default.on(v.DIALOG_DISMISS_EVENT, e.end)
      }, this.succ = function () {
        v.dismiss()
      }, this.fail = function () {
        t.parent(".alert_content").scrollTop(0)
      }, this.end = function () {
        t = null, l.default.off(r.default.LOGIN_SUCCESS_EVENT, e.succ), l.default.off(r.default.LOGIN_FAIL_EVENT, e.fail), l.default.off(v.DIALOG_DISMISS_EVENT, e.end)
      }
    },
    h = function (e, t) {
      e.find(".register_btn").click(function (e) {
        v.dismiss(), a.default.show(t)
      }), e.find(".forget_password").click(function (e) {
        v.dismiss(), s.default.show(t)
      })
    },
    v = new d;
  t.default = v
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    i = s(n(0)),
    a = s(n(33));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.LOGIN_SUCCESS_EVENT = "loginCommon.loginSuccessEvent", this.LOGIN_FAIL_EVENT = "loginCommon.loginFailEvent"
      }
      return r(e, [{
        key: "getHtml",
        value: function () {
          var e = new Array;
          return e.push("<div class='login_view'>"), e.push("<form class='login_form method='post' action='/j_spring_security_check'>"), e.push("<div class='content_title'></div>"), e.push("<div class='error_message'></div>"), e.push("<div class='id_text'>會員帳號</div>"), e.push("<input class='id_input' type='text' name='j_username' placeholder='請輸入手機號碼'>"), e.push("<div class='j_username_hint'>請輸入帳號 / 手機號碼</div>"), e.push("<div class='password_text_section'>"), e.push("<a class='forget_password'>忘記密碼？</a>"), e.push("<div class='password_text'>密碼</div>"), e.push("</div>"), e.push("<input class='pw_input' type='password' name='j_password' placeholder='請輸入密碼'>"), e.push("<div class='j_password_hint'>請輸入密碼</div>"), e.push("<div class='pw_show_section'>"), e.push("<input class='show_pw_chkbox' type='checkbox'>"), e.push("<div class='show_pw_text'>顯示密碼</div>"), e.push("</div>"), e.push("<input type='submit' class='login_btn' value='登入'>"), e.push("<div class='register_section'>"), e.push("<div class='register_promote_title'>還不是會員嗎？</div>"), e.push("<div class='register_btn' data-targetName='register'>免費註冊</div>"), e.push("</div>"), e.push("</form>"), e.push("</div>"), e.join("")
        }
      }, {
        key: "setContent",
        value: function (e, t) {
          "object" == o(t.user) && (t.user.username && e.find(".login_form .id_input").val(t.user.username), t.user.password && e.find(".login_form .pw_input").val(t.user.password), delete t.user)
        }
      }, {
        key: "setAction",
        value: function (e) {
          var t = e.find(".login_form .submit_btn"),
            n = e.find(".login_form .show_pw_chkbox");
          t.mouseover(function (t) {
            e.find(t.target).addClass("hover")
          }), t.mouseout(function (t) {
            e.find(t.target).removeClass("hover")
          }), e.find(".login_form").submit(function (t) {
            try {
              u(e)
            } catch (e) {
              console.error(e)
            }
            t.preventDefault()
          }), n.change(function (t) {
            1 == n.prop("checked") ? e.find(".login_form .pw_input").attr("type", "text") : e.find(".login_form .pw_input").attr("type", "password")
          })
        }
      }]), e
    }(),
    u = function (e) {
      if (1 == c(e)) {
        e.find(".login_form");
        var t = {
          name: e.find(".login_form .id_input").val(),
          password: e.find(".login_form .pw_input").val()
        };
        (0, a.default)(t, function (t, n) {
          if ("success" == n) ga("send", "event", "account", "logined", "complete_login"), i.default.emit(d.LOGIN_SUCCESS_EVENT);
          else {
            var o = e.find(".login_form .error_message");
            o.addClass("active"), o.html("<div>帳號或密碼錯誤！</div>"), i.default.emit(d.LOGIN_FAIL_EVENT)
          }
        }, function (t) {
          var n = e.find(".login_form .error_message");
          n.addClass("active"), n.html("<div>連線錯誤！</div>"), i.default.emit(d.LOGIN_FAIL_EVENT)
        })
      }
    },
    c = function (e) {
      var t = e.find(".login_form .error_message");
      t.html(""), t.removeClass("active");
      var n = !0;
      return e.find(".login_form .id_input").val() ? (e.find(".login_form .id_input").removeClass("highlight"), e.find(".login_form .j_username_hint").removeClass("active")) : (e.find(".login_form .id_input").addClass("highlight"), e.find(".login_form .j_username_hint").addClass("active"), n = !1), e.find(".login_form .pw_input").val() ? (e.find(".login_form .pw_input").removeClass("highlight"), e.find(".login_form .j_password_hint").removeClass("active")) : (e.find(".login_form .pw_input").addClass("highlight"), e.find(".login_form .j_password_hint").addClass("active"), n = !1), n
    },
    d = new l;
  t.default = d
}, function (e, t, n) {
  "use strict";
  var o = n(20),
    r = n(62),
    i = n(63),
    a = o ? o.toStringTag : void 0;
  e.exports = function (e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? r(e) : i(e)
  }
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  e.exports = function (e) {
    return null != e && "object" == (void 0 === e ? "undefined" : o(e))
  }
}, function (e, t, n) {
  "use strict";
  var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  o = function () {
    return this
  }();
  try {
    o = o || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (o = window)
  }
  e.exports = o
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = new(function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return o(e, [{
        key: "contructor",
        value: function () {}
      }, {
        key: "importJSFile",
        value: function (e, t, n) {
          var o = document.getElementsByTagName("head")[0],
            r = document.createElement("script");
          r.type = "text/javascript", r.src = e, r.crossorigin = "anonymous", "function" == typeof t && (r.onreadystatechange = t, r.onload = t), "function" == typeof n && (r.onerror = n), o.appendChild(r)
        }
      }, {
        key: "importCSSFile",
        value: function (e, t, n) {
          var o = document.getElementsByTagName("head")[0],
            r = document.createElement("link");
          r.href = e, r.type = "text/css", r.rel = "stylesheet", r.media = "all", "function" == typeof t && (r.onreadystatechange = t, r.onload = t), "function" == typeof n && (r.onerror = n), o.appendChild(r)
        }
      }, {
        key: "importJSByList",
        value: function (e, t) {
          var n = this,
            o = 0;
          ! function r() {
            if (o >= e.length) "function" == typeof t && t();
            else {
              var i = e[o];
              n.importJSFile(i, r, r), o++
            }
          }()
        }
      }, {
        key: "importCSSByList",
        value: function (e, t) {
          var n = this,
            o = 0;
          ! function r() {
            if (o >= e.length) "function" == typeof t && t();
            else {
              var i = e[o];
              n.importCSSFile(i, r, r), o++
            }
          }()
        }
      }]), e
    }());
  t.default = r
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function () {
        return e.l
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function () {
        return e.i
      }
    }), e.webpackPolyfill = 1), e
  }
}, function (e, t, n) {
  "use strict";
  var o = Array.isArray;
  e.exports = o
}, function (e, t, n) {
  "use strict";
  var o = n(83);
  e.exports = function (e) {
    return null == e ? "" : o(e)
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(1)),
    r = new function () {
      var e = this;
      e.isRunning = !1, this.set = function (t, n, r) {
        e.isRunning = !0;
        var i = {
          url: t.action,
          selectMethod: t.method,
          dataType: "json",
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          request: t.data
        };
        o.default.get(i, function (o, r) {
          e.isRunning = !1, "function" == typeof n && n(t, r)
        }, function () {
          e.isRunning = !1, "function" == typeof r && r(t)
        }, !1)
      }
    };
  t.default = r
}, function (e, t, n) {
  "use strict";
  (function (n) {
    var o, r, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /*!
     * Lazy Load - JavaScript plugin for lazy loading images
     *
     * Copyright (c) 2007-2017 Mika Tuupola
     *
     * Licensed under the MIT license:
     *   http://www.opensource.org/licenses/mit-license.php
     *
     * Project home:
     *   https://appelsiini.net/projects/lazyload
     *
     * Version: 2.0.0-beta.2
     *
     */
    ! function (n, s) {
      "object" === a(t) ? e.exports = s(n) : (r = [], o = s(n), void 0 === (i = "function" == typeof o ? o.apply(t, r) : o) || (e.exports = i))
    }(void 0 !== n ? n : (void 0).window || (void 0).global, function (e) {
      var t = {
          src: "data-src",
          srcset: "data-srcset",
          selector: ".lazyload"
        },
        n = function e() {
          var t = {},
            n = !1,
            o = 0,
            r = arguments.length;
          "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (n = arguments[0], o++);
          for (var i = function (o) {
              for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n && "[object Object]" === Object.prototype.toString.call(o[r]) ? t[r] = e(!0, t[r], o[r]) : t[r] = o[r])
            }; o < r; o++) i(arguments[o]);
          return t
        };

      function o(e, o) {
        this.settings = n(t, o || {}), this.images = e || document.querySelectorAll(this.settings.selector), this.observer = null, this.init()
      }
      if (o.prototype = {
          init: function () {
            if (e.IntersectionObserver) {
              var t = this;
              this.observer = new IntersectionObserver(function (e) {
                e.forEach(function (e) {
                  if (e.intersectionRatio > 0) {
                    t.observer.unobserve(e.target);
                    var n = e.target.getAttribute(t.settings.src),
                      o = e.target.getAttribute(t.settings.srcset);
                    "img" === e.target.tagName.toLowerCase() ? (n && (e.target.src = n), o && (e.target.srcset = o)) : e.target.style.backgroundImage = "url(" + n + ")"
                  }
                })
              }, {
                root: null,
                rootMargin: "0px",
                threshold: [0]
              }), this.images.forEach(function (e) {
                t.observer.observe(e)
              })
            } else this.loadImages()
          },
          loadAndDestroy: function () {
            this.settings && (this.loadImages(), this.destroy())
          },
          loadImages: function () {
            if (this.settings) {
              var e = this;
              this.images.forEach(function (t) {
                var n = t.getAttribute(e.settings.src),
                  o = t.getAttribute(e.settings.srcset);
                "img" === t.tagName.toLowerCase() ? (n && (t.src = n), o && (t.srcset = o)) : t.style.backgroundImage = "url(" + n + ")"
              })
            }
          },
          destroy: function () {
            this.settings && (this.observer.disconnect(), this.settings = null)
          }
        }, e.lazyload = function (e, t) {
          return new o(e, t)
        }, e.jQuery) {
        var r = e.jQuery;
        r.fn.lazyload = function (e) {
          return (e = e || {}).attribute = e.attribute || "data-src", new o(r.makeArray(this), e), this
        }
      }
      return o
    })
  }).call(this, n(12))
}, function (e, t) {
  (function (t) {
    e.exports = t
  }).call(this, {})
}, function (e, t, n) {
  "use strict";
  var o = n(23).Symbol;
  e.exports = o
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = s(n(1)),
    i = s(n(7)),
    a = s(n(2));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return o(e, [{
        key: "programInfo",
        value: function (e, t) {
          var n = {
            url: "/vod/ajax/getProgramInfo",
            selectMethod: "GET",
            request: {
              contentId: e
            },
            browserType: a.default.getAjaxBrowserType()
          };
          r.default.get(n, function (e, n) {
            var o = n.midroll.timeCodes;
            if (Array.isArray(o))
              for (var r = 0; r < o.length; r++) o[r] = 1e3 * o[r];
            "function" == typeof t && t(n)
          }, null, !0)
        }
      }, {
        key: "targetProgramInfo",
        value: function (e, t) {
          var n = this;
          n.programInfo(e, function (e) {
            0 == i.default.isVodEntryPoint(e) ? "function" == typeof t && t(e) : function (e) {
              var o = {
                url: "/vod/ajax/getTargetVod",
                selectMethod: "GET",
                request: {
                  contentId: e.contentId
                },
                browserType: a.default.getAjaxBrowserType()
              };
              r.default.get(o, function (o, r) {
                0 == i.default.isVodEntryPoint(r.uiVod) ? n.programInfo(r.uiVod.contentId, t) : function (e) {
                  0 != e.isSeries ? n.seriesTree(e.seriesId, function (o) {
                    if (1 == o.hasSeasons) {
                      var r = o.seasons[e.season].episode;
                      if (Array.isArray(r) && r.length > 0) {
                        var i = r[0];
                        n.programInfo(i.contentId, t)
                      } else "function" == typeof t && t(e)
                    } else {
                      var a = o.seasons[0].episode;
                      if (Array.isArray(a) && a.length > 0) {
                        var s = a[0];
                        n.programInfo(s.contentId, t)
                      } else "function" == typeof t && t(e)
                    }
                  }) : "function" == typeof t && t(e)
                }(e)
              }, null, !0)
            }(e)
          }, !1)
        }
      }, {
        key: "focusTree",
        value: function (e, t) {
          var n = {
            url: "/vod/ajax/getFocusTree",
            selectMethod: "GET",
            request: {
              seriesId: e.seriesId
            }
          };
          r.default.get(n, function (n, o) {
            o = function (t) {
              var n = t.seasons;
              if (t.hasSeasons)
                for (var o = 0; o < n.length; o++) {
                  var r = n[o];
                  r.seasonName ? r.seasonName = r.seasonName : r.seasonName = "第" + r.season + "季"
                } else {
                  var i = 42;
                  1 == e.isSpecial ? i = 15 : "show" == e.contentType && (i = 30);
                  var s = n[0],
                    l = s.episode,
                    u = parseInt(l.length / i);
                  n = new Array, l.length % i > 0 && u++;
                  for (var c = 0; c < u; c++) {
                    for (var d = new Array, f = i * c; f < i * (c + 1); f++) f < l.length && d.push(l[f]);
                    var p = a.default.deepClone(s);
                    p.episode = d, p.seasonName = d[0].episodeName + " - " + d[d.length - 1].episodeName, n.push(p)
                  }
                }
              return t.seasons = n, t
            }(o), "function" == typeof t && t(o)
          }, null, !0)
        }
      }, {
        key: "teasers",
        value: function (e, t) {
          this.seriesTree(e, function (e) {
            e.seasons = function (e) {
              for (var t = new Array, n = 0; n < e.length; n++) {
                for (var o = e[n], r = o.episode, i = new Array, a = 0; a < r.length; a++) {
                  var s = r[a];
                  "F" != s.videoType && i.push(s)
                }
                o.episode = i, t.push(o)
              }
              return t
            }(e.seasons), "function" == typeof t && t(e)
          })
        }
      }, {
        key: "recommands",
        value: function (e, t) {
          var n = {
            url: "/vod/ajax/getRelatedProgram",
            selectMethod: "GET",
            request: {
              contentType: e.contentType,
              contentId: e.contentId
            }
          };
          r.default.get(n, function (e, n) {
            "function" == typeof t && t(n)
          }, null, !0)
        }
      }, {
        key: "ranks",
        value: function (e, t) {
          var n = {
            url: "/vod/ajax/getRank",
            selectMethod: "GET",
            request: {
              contentType: e
            }
          };
          r.default.get(n, function (e, n) {
            "function" == typeof t && t(n)
          }, null, !0)
        }
      }, {
        key: "rulePlays",
        value: function (e, t, n) {
          var o = {
            url: "/vod/ajax/getPlayListData",
            selectMethod: "GET",
            request: {
              ruleId: e.ruleId
            }
          };
          r.default.get(o, function (o, r) {
            var i = d(o);
            i && 1 != n ? "function" == typeof t && t(i) : (r = function (t) {
              if (!Array.isArray(t) || t.length <= 0) return null;
              var n = function () {
                var e = null;
                return e = localStorage.getItem("litv_ent_record"), e = JSON.parse(e), localStorage.removeItem("litv_ent_record"), e
              }();
              if (n) {
                if (e.contentId == n.contentId) return t;
                var o = null;
                t = t.filter(function (e, t, r) {
                  return e.contentId != n.contentId || (o = n, !1)
                }), o && t.push(o)
              }
              return t
            }(r = function (t) {
              return !Array.isArray(t) || t.length <= 0 ? null : ((t = t.filter(function (t, n, o) {
                return t.contentId != e.contentId
              })).sort(function () {
                return .5 - Math.random()
              }), t.unshift(e), t)
            }(r)), c(o, r), "function" == typeof t && t(r))
          }, null, !0)
        }
      }, {
        key: "nextRulePlayItem",
        value: function (e, t) {
          window.localStorage.setItem("litv_ent_record", JSON.stringify(e)), this.rulePlays(e, function (n) {
            if (Array.isArray(n) || "function" != typeof t) {
              for (var o = 0; o < n.length - 1; o++) {
                var r = n[o];
                if (e.contentId == r.contentId && "function" == typeof t) return void t(n[o + 1])
              }
              "function" == typeof t && t(null)
            } else t(null)
          })
        }
      }, {
        key: "seriesTree",
        value: function (e, t) {
          var n = {
            url: "/vod/ajax/getSeriesTree",
            selectMethod: "GET",
            request: {
              seriesId: e
            }
          };
          r.default.get(n, function (e, n) {
            "function" == typeof t && t(n)
          }, null, !0)
        }
      }, {
        key: "positiveFilms",
        value: function (e, t) {
          this.seriesTree(e.seriesId, function (n) {
            n = function (t) {
              for (var n = t.seasons, o = new Array, r = 0; r < n.length; r++) {
                for (var i = n[r], s = i.episode, l = new Array, u = 0; u < s.length; u++) {
                  var c = s[u];
                  "F" == c.videoType && l.push(c)
                }
                l.length > 0 && (i.episode = l, o.push(i))
              }
              if (o.length <= 0) return t.seasons = o, t;
              if (t.hasSeasons)
                for (var d = 0; d < o.length; d++) {
                  var f, p = o[d],
                    h = p.episode;
                  f = 0 == p.isFinale ? "（更新至第" + h[h.length - 1].episode + "集）" : "（全" + h.length + "集）", p.seasonName ? p.seasonName = p.seasonName + f : p.seasonName = "第" + p.season + "季" + f
                } else {
                  var v = 42;
                  1 == e.isSpecial ? v = 15 : "show" == e.contentType && (v = 30);
                  var m = o[0],
                    g = m.episode,
                    y = parseInt(g.length / v);
                  o = new Array, g.length % v > 0 && y++;
                  for (var _ = 0; _ < y; _++) {
                    for (var b = new Array, w = v * _; w < v * (_ + 1); w++) w < g.length && b.push(g[w]);
                    var E = a.default.deepClone(m);
                    E.episode = b, E.seasonName = b[0].episodeName + " - " + b[b.length - 1].episodeName, o.push(E)
                  }
                }
              return t.seasons = o, t
            }(n), "function" == typeof t && t(n)
          })
        }
      }, {
        key: "nextEpisode",
        value: function (e, t) {
          var n = function (t) {
            var n = t.seasons;
            if (!Array.isArray(n) || n.length <= 0) return null;
            for (var o = 0; o < n.length; o++)
              for (var r = n[o].episode, i = 0; i < r.length; i++) {
                var a = r[i];
                if (e.contentId == a.contentId) {
                  if (!(i >= r.length - 1)) return r[i + 1];
                  if (o < n.length - 1) return n[o + 1].episode[0]
                }
              }
            return null
          };
          "F" == e.videoType ? this.positiveFilms(e, function (e) {
            var o = n(e);
            "function" == typeof t && t(o)
          }) : this.teasers(e.seriesId, function (e) {
            var o = n(e);
            "function" == typeof t && t(o)
          })
        }
      }, {
        key: "crumbView",
        value: function (e, t) {
          var n = {
            url: "/vod/ajax/getBreadCrumbInfo",
            selectMethod: "GET",
            request: {
              contentType: e.contentType,
              providerId: e.providerId,
              categoryId: e.categoryId,
              title: e.title
            }
          };
          r.default.get(n, function (e, n) {
            for (var o = new Array(""), r = 0; r < n.length; r++) null != n[r] && (r <= 0 && o.push("<a class='link entypo-house' href='/' target='_blank'></a>"), n[r].label && (o.push("<a class='link' href=" + n[r].url + " target='_blank'>" + n[r].label + "</a>"), o.push("<a class='link'>&nbsp>&nbsp</a>")));
            o.push("<a class='link prevent_control_by_player'>" + e.request.title + "</a>"), o = o.join(""), "function" == typeof t && t(o)
          }, null, !0)
        }
      }, {
        key: "categoryProgram",
        value: function (e, t) {
          var n = {
            url: "/vod/ajax/getCategoryProgram",
            selectMethod: "GET",
            request: {
              contentType: e.contentType,
              categoryId: e.categoryId,
              sort: e.sort
            }
          };
          r.default.get(n, function (e, n) {
            "function" == typeof t && t(n)
          }, null, !0)
        }
      }]), e
    }(),
    u = {},
    c = function (e, t) {
      var n = JSON.stringify(e);
      u[n] = t
    },
    d = function (e) {
      var t = JSON.stringify(e);
      return u[t]
    },
    f = new l;
  t.default = f
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /*!
     * UAParser.js v0.7.19
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
     * Dual licensed under GPLv2 or MIT
     */
    ! function (i, a) {
      var s = "model",
        l = "name",
        u = "type",
        c = "vendor",
        d = "version",
        f = "mobile",
        p = "tablet",
        h = {
          extend: function (e, t) {
            var n = {};
            for (var o in e) t[o] && t[o].length % 2 == 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
            return n
          },
          has: function (e, t) {
            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
          },
          lowerize: function (e) {
            return e.toLowerCase()
          },
          major: function (e) {
            return "string" === (void 0 === e ? "undefined" : r(e)) ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
          },
          trim: function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
          }
        },
        v = {
          rgx: function (e, t) {
            for (var n, o, i, a, s, l, u = 0; u < t.length && !s;) {
              var c = t[u],
                d = t[u + 1];
              for (n = o = 0; n < c.length && !s;)
                if (s = c[n++].exec(e))
                  for (i = 0; i < d.length; i++) l = s[++o], "object" === (void 0 === (a = d[i]) ? "undefined" : r(a)) && a.length > 0 ? 2 == a.length ? "function" == r(a[1]) ? this[a[0]] = a[1].call(this, l) : this[a[0]] = a[1] : 3 == a.length ? "function" !== r(a[1]) || a[1].exec && a[1].test ? this[a[0]] = l ? l.replace(a[1], a[2]) : void 0 : this[a[0]] = l ? a[1].call(this, l, a[2]) : void 0 : 4 == a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : void 0) : this[a] = l || void 0;
              u += 2
            }
          },
          str: function (e, t) {
            for (var n in t)
              if ("object" === r(t[n]) && t[n].length > 0) {
                for (var o = 0; o < t[n].length; o++)
                  if (h.has(t[n][o], e)) return "?" === n ? void 0 : n
              } else if (h.has(t[n], e)) return "?" === n ? void 0 : n;
            return e
          }
        },
        m = {
          browser: {
            oldsafari: {
              version: {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }
            }
          },
          device: {
            amazon: {
              model: {
                "Fire Phone": ["SD", "KF"]
              }
            },
            sprint: {
              model: {
                "Evo Shift 4G": "7373KT"
              },
              vendor: {
                HTC: "APA",
                Sprint: "Sprint"
              }
            }
          },
          os: {
            windows: {
              version: {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2000: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
              }
            }
          }
        },
        g = {
          browser: [
            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
            [l, d],
            [/(opios)[\/\s]+([\w\.]+)/i],
            [
              [l, "Opera Mini"], d
            ],
            [/\s(opr)\/([\w\.]+)/i],
            [
              [l, "Opera"], d
            ],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
            [l, d],
            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
            [
              [l, "IE"], d
            ],
            [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
            [
              [l, "Edge"], d
            ],
            [/(yabrowser)\/([\w\.]+)/i],
            [
              [l, "Yandex"], d
            ],
            [/(puffin)\/([\w\.]+)/i],
            [
              [l, "Puffin"], d
            ],
            [/(focus)\/([\w\.]+)/i],
            [
              [l, "Firefox Focus"], d
            ],
            [/(opt)\/([\w\.]+)/i],
            [
              [l, "Opera Touch"], d
            ],
            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
            [
              [l, "UCBrowser"], d
            ],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [
              [l, /_/g, " "], d
            ],
            [/(micromessenger)\/([\w\.]+)/i],
            [
              [l, "WeChat"], d
            ],
            [/(brave)\/([\w\.]+)/i],
            [
              [l, "Brave"], d
            ],
            [/(qqbrowserlite)\/([\w\.]+)/i],
            [l, d],
            [/(QQ)\/([\d\.]+)/i],
            [l, d],
            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
            [l, d],
            [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
            [l, d],
            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
            [l, d],
            [/(MetaSr)[\/\s]?([\w\.]+)/i],
            [l],
            [/(LBBROWSER)/i],
            [l],
            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
            [d, [l, "MIUI Browser"]],
            [/;fbav\/([\w\.]+);/i],
            [d, [l, "Facebook"]],
            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
            [l, d],
            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
            [d, [l, "Chrome Headless"]],
            [/\swv\).+(chrome)\/([\w\.]+)/i],
            [
              [l, /(.+)/, "$1 WebView"], d
            ],
            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
            [
              [l, /(.+(?:g|us))(.+)/, "$1 $2"], d
            ],
            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
            [d, [l, "Android Browser"]],
            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
            [l, d],
            [/(dolfin)\/([\w\.]+)/i],
            [
              [l, "Dolphin"], d
            ],
            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
            [
              [l, "Chrome"], d
            ],
            [/(coast)\/([\w\.]+)/i],
            [
              [l, "Opera Coast"], d
            ],
            [/fxios\/([\w\.-]+)/i],
            [d, [l, "Firefox"]],
            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
            [d, [l, "Mobile Safari"]],
            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
            [d, l],
            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [
              [l, "GSA"], d
            ],
            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [l, [d, v.str, m.browser.oldsafari.version]],
            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
            [l, d],
            [/(navigator|netscape)\/([\w\.-]+)/i],
            [
              [l, "Netscape"], d
            ],
            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
            [l, d]
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
            [
              ["architecture", "amd64"]
            ],
            [/(ia32(?=;))/i],
            [
              ["architecture", h.lowerize]
            ],
            [/((?:i[346]|x)86)[;\)]/i],
            [
              ["architecture", "ia32"]
            ],
            [/windows\s(ce|mobile);\sppc;/i],
            [
              ["architecture", "arm"]
            ],
            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
            [
              ["architecture", /ower/, "", h.lowerize]
            ],
            [/(sun4\w)[;\)]/i],
            [
              ["architecture", "sparc"]
            ],
            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
            [
              ["architecture", h.lowerize]
            ]
          ],
          device: [
            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
            [s, c, [u, p]],
            [/applecoremedia\/[\w\.]+ \((ipad)/],
            [s, [c, "Apple"],
              [u, p]
            ],
            [/(apple\s{0,1}tv)/i],
            [
              [s, "Apple TV"],
              [c, "Apple"]
            ],
            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
            [c, s, [u, p]],
            [/(kf[A-z]+)\sbuild\/.+silk\//i],
            [s, [c, "Amazon"],
              [u, p]
            ],
            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
            [
              [s, v.str, m.device.amazon.model],
              [c, "Amazon"],
              [u, f]
            ],
            [/android.+aft([bms])\sbuild/i],
            [s, [c, "Amazon"],
              [u, "smarttv"]
            ],
            [/\((ip[honed|\s\w*]+);.+(apple)/i],
            [s, c, [u, f]],
            [/\((ip[honed|\s\w*]+);/i],
            [s, [c, "Apple"],
              [u, f]
            ],
            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
            [c, s, [u, f]],
            [/\(bb10;\s(\w+)/i],
            [s, [c, "BlackBerry"],
              [u, f]
            ],
            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
            [s, [c, "Asus"],
              [u, p]
            ],
            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
            [
              [c, "Sony"],
              [s, "Xperia Tablet"],
              [u, p]
            ],
            [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
            [s, [c, "Sony"],
              [u, f]
            ],
            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
            [c, s, [u, "console"]],
            [/android.+;\s(shield)\sbuild/i],
            [s, [c, "Nvidia"],
              [u, "console"]
            ],
            [/(playstation\s[34portablevi]+)/i],
            [s, [c, "Sony"],
              [u, "console"]
            ],
            [/(sprint\s(\w+))/i],
            [
              [c, v.str, m.device.sprint.vendor],
              [s, v.str, m.device.sprint.model],
              [u, f]
            ],
            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
            [c, s, [u, p]],
            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
            [c, [s, /_/g, " "],
              [u, f]
            ],
            [/(nexus\s9)/i],
            [s, [c, "HTC"],
              [u, p]
            ],
            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
            [s, [c, "Huawei"],
              [u, f]
            ],
            [/(microsoft);\s(lumia[\s\w]+)/i],
            [c, s, [u, f]],
            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
            [s, [c, "Microsoft"],
              [u, "console"]
            ],
            [/(kin\.[onetw]{3})/i],
            [
              [s, /\./g, " "],
              [c, "Microsoft"],
              [u, f]
            ],
            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
            [s, [c, "Motorola"],
              [u, f]
            ],
            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
            [s, [c, "Motorola"],
              [u, p]
            ],
            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
            [
              [c, h.trim],
              [s, h.trim],
              [u, "smarttv"]
            ],
            [/hbbtv.+maple;(\d+)/i],
            [
              [s, /^/, "SmartTV"],
              [c, "Samsung"],
              [u, "smarttv"]
            ],
            [/\(dtv[\);].+(aquos)/i],
            [s, [c, "Sharp"],
              [u, "smarttv"]
            ],
            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
            [
              [c, "Samsung"], s, [u, p]
            ],
            [/smart-tv.+(samsung)/i],
            [c, [u, "smarttv"], s],
            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
            [
              [c, "Samsung"], s, [u, f]
            ],
            [/sie-(\w*)/i],
            [s, [c, "Siemens"],
              [u, f]
            ],
            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
            [
              [c, "Nokia"], s, [u, f]
            ],
            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
            [s, [c, "Acer"],
              [u, p]
            ],
            [/android.+([vl]k\-?\d{3})\s+build/i],
            [s, [c, "LG"],
              [u, p]
            ],
            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
            [
              [c, "LG"], s, [u, p]
            ],
            [/(lg) netcast\.tv/i],
            [c, s, [u, "smarttv"]],
            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
            [s, [c, "LG"],
              [u, f]
            ],
            [/android.+(ideatab[a-z0-9\-\s]+)/i],
            [s, [c, "Lenovo"],
              [u, p]
            ],
            [/linux;.+((jolla));/i],
            [c, s, [u, f]],
            [/((pebble))app\/[\d\.]+\s/i],
            [c, s, [u, "wearable"]],
            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
            [c, s, [u, f]],
            [/crkey/i],
            [
              [s, "Chromecast"],
              [c, "Google"]
            ],
            [/android.+;\s(glass)\s\d/i],
            [s, [c, "Google"],
              [u, "wearable"]
            ],
            [/android.+;\s(pixel c)[\s)]/i],
            [s, [c, "Google"],
              [u, p]
            ],
            [/android.+;\s(pixel( [23])?( xl)?)\s/i],
            [s, [c, "Google"],
              [u, f]
            ],
            [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
            [
              [s, /_/g, " "],
              [c, "Xiaomi"],
              [u, f]
            ],
            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
            [
              [s, /_/g, " "],
              [c, "Xiaomi"],
              [u, p]
            ],
            [/android.+;\s(m[1-5]\snote)\sbuild/i],
            [s, [c, "Meizu"],
              [u, p]
            ],
            [/(mz)-([\w-]{2,})/i],
            [
              [c, "Meizu"], s, [u, f]
            ],
            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
            [s, [c, "OnePlus"],
              [u, f]
            ],
            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
            [s, [c, "RCA"],
              [u, p]
            ],
            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
            [s, [c, "Dell"],
              [u, p]
            ],
            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
            [s, [c, "Verizon"],
              [u, p]
            ],
            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
            [
              [c, "Barnes & Noble"], s, [u, p]
            ],
            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
            [s, [c, "NuVision"],
              [u, p]
            ],
            [/android.+;\s(k88)\sbuild/i],
            [s, [c, "ZTE"],
              [u, p]
            ],
            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
            [s, [c, "Swiss"],
              [u, f]
            ],
            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
            [s, [c, "Swiss"],
              [u, p]
            ],
            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
            [s, [c, "Zeki"],
              [u, p]
            ],
            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
            [
              [c, "Dragon Touch"], s, [u, p]
            ],
            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
            [s, [c, "Insignia"],
              [u, p]
            ],
            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
            [s, [c, "NextBook"],
              [u, p]
            ],
            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
            [
              [c, "Voice"], s, [u, f]
            ],
            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
            [
              [c, "LvTel"], s, [u, f]
            ],
            [/android.+;\s(PH-1)\s/i],
            [s, [c, "Essential"],
              [u, f]
            ],
            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
            [s, [c, "Envizen"],
              [u, p]
            ],
            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
            [c, s, [u, p]],
            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
            [s, [c, "MachSpeed"],
              [u, p]
            ],
            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
            [c, s, [u, p]],
            [/android.+[;\/]\s*TU_(1491)\s+build/i],
            [s, [c, "Rotor"],
              [u, p]
            ],
            [/android.+(KS(.+))\s+build/i],
            [s, [c, "Amazon"],
              [u, p]
            ],
            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
            [c, s, [u, p]],
            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
            [
              [u, h.lowerize], c, s
            ],
            [/(android[\w\.\s\-]{0,9});.+build/i],
            [s, [c, "Generic"]]
          ],
          engine: [
            [/windows.+\sedge\/([\w\.]+)/i],
            [d, [l, "EdgeHTML"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
            [l, d],
            [/rv\:([\w\.]{1,9}).+(gecko)/i],
            [d, l]
          ],
          os: [
            [/microsoft\s(windows)\s(vista|xp)/i],
            [l, d],
            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
            [l, [d, v.str, m.os.windows.version]],
            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
            [
              [l, "Windows"],
              [d, v.str, m.os.windows.version]
            ],
            [/\((bb)(10);/i],
            [
              [l, "BlackBerry"], d
            ],
            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
            [l, d],
            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
            [
              [l, "Symbian"], d
            ],
            [/\((series40);/i],
            [l],
            [/mozilla.+\(mobile;.+gecko.+firefox/i],
            [
              [l, "Firefox OS"], d
            ],
            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
            [l, d],
            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
            [
              [l, "Chromium OS"], d
            ],
            [/(sunos)\s?([\w\.\d]*)/i],
            [
              [l, "Solaris"], d
            ],
            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
            [l, d],
            [/(haiku)\s(\w+)/i],
            [l, d],
            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
            [
              [d, /_/g, "."],
              [l, "iOS"]
            ],
            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
            [
              [l, "Mac OS"],
              [d, /_/g, "."]
            ],
            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
            [l, d]
          ]
        },
        y = function e(t, n) {
          if ("object" === (void 0 === t ? "undefined" : r(t)) && (n = t, t = void 0), !(this instanceof e)) return new e(t, n).getResult();
          var o = t || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
            a = n ? h.extend(g, n) : g;
          return this.getBrowser = function () {
            var e = {
              name: void 0,
              version: void 0
            };
            return v.rgx.call(e, o, a.browser), e.major = h.major(e.version), e
          }, this.getCPU = function () {
            var e = {
              architecture: void 0
            };
            return v.rgx.call(e, o, a.cpu), e
          }, this.getDevice = function () {
            var e = {
              vendor: void 0,
              model: void 0,
              type: void 0
            };
            return v.rgx.call(e, o, a.device), e
          }, this.getEngine = function () {
            var e = {
              name: void 0,
              version: void 0
            };
            return v.rgx.call(e, o, a.engine), e
          }, this.getOS = function () {
            var e = {
              name: void 0,
              version: void 0
            };
            return v.rgx.call(e, o, a.os), e
          }, this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function () {
            return o
          }, this.setUA = function (e) {
            return o = e, this
          }, this
        };
      y.VERSION = "0.7.19", y.BROWSER = {
        NAME: l,
        MAJOR: "major",
        VERSION: d
      }, y.CPU = {
        ARCHITECTURE: "architecture"
      }, y.DEVICE = {
        MODEL: s,
        VENDOR: c,
        TYPE: u,
        CONSOLE: "console",
        MOBILE: f,
        SMARTTV: "smarttv",
        TABLET: p,
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
      }, y.ENGINE = {
        NAME: l,
        VERSION: d
      }, y.OS = {
        NAME: l,
        VERSION: d
      }, "undefined" !== r(t) ? ("undefined" !== r(e) && e.exports && (t = e.exports = y), t.UAParser = y) : "function" === r(n(104)) && n(19) ? void 0 === (o = function () {
        return y
      }.call(t, n, t, e)) || (e.exports = o) : i && (i.UAParser = y);
      var _ = i && (i.jQuery || i.Zepto);
      if ("undefined" !== (void 0 === _ ? "undefined" : r(_)) && !_.ua) {
        var b = new y;
        _.ua = b.getResult(), _.ua.get = function () {
          return b.getUA()
        }, _.ua.set = function (e) {
          b.setUA(e);
          var t = b.getResult();
          for (var n in t) _.ua[n] = t[n]
        }
      }
    }("object" === ("undefined" == typeof window ? "undefined" : r(window)) ? window : void 0)
  }).call(this, n(14)(e))
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = n(24),
    i = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
    a = r || i || Function("return this")();
  e.exports = a
}, function (e, t, n) {
  "use strict";
  (function (t) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = "object" == (void 0 === t ? "undefined" : n(t)) && t && t.Object === Object && t;
    e.exports = o
  }).call(this, n(12))
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t) {
    return function (n) {
      return e(t(n))
    }
  }
}, function (e, t, n) {
  "use strict";
  var o = n(74),
    r = n(25);
  e.exports = function (e) {
    return null != e && r(e.length) && !o(e)
  }
}, function (e, t, n) {
  "use strict";
  var o = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
  e.exports = function (e) {
    return o.test(e)
  }
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  n(39), n(42);
  var r = d(n(6)),
    i = d(n(13)),
    a = (d(n(50)), d(n(5)), d(n(2))),
    s = d(n(102)),
    l = d(n(22)),
    u = d(n(105)),
    c = d(n(0));

  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  window.litv = window.litv || {},
    function () {
      try {
        localStorage.setItem("test", "test")
      } catch (e) {
        $(document).ready(function () {
          var e = document.createElement("div");
          e.innerHTML = "網頁載入失敗. 您的瀏覽器Cookie功能已關閉, 請至瀏覽器設定頁面開啟此功能，並重新整理此頁面。", e.className = "tip float_msg", document.body.appendChild(e)
        }), console.error(e)
      }
    }(),
    function () {
      var e = {
          Chrome: 39,
          Firefox: 42,
          IE: 11
        },
        t = (new l.default).getResult(),
        n = "windows xp" === (t.os.name + " " + t.os.version).toLowerCase(),
        o = t.browser.name,
        r = parseInt(t.browser.major),
        i = !(e.hasOwnProperty(o) && e[o] > r);
      if (litv.BrowserSupportedInfo = {
          isSupported: i,
          isXP: n,
          browserName: o,
          browserVersion: r,
          uaInfo: t
        }, !1 === litv.BrowserSupportedInfo.isSupported) {
        var a = document.createElement("div");
        a.innerHTML = "偵測到您的瀏覽器版本過舊，無法得到優質的觀影體驗，請升級瀏覽器版本，或改用 " + (litv.BrowserSupportedInfo.isXP ? "Firefox 42 以上版本。" : "Chrome、Firefox 等其他瀏覽器。"), a.className = "tip float_msg", document.body.appendChild(a)
      }
    }(),
    function (e, t, n, o, r) {
      e[o] = e[o] || [], e[o].push({
        "gtm.start": (new Date).getTime(),
        event: "gtm.js"
      });
      var i = t.getElementsByTagName(n)[0],
        a = t.createElement(n);
      a.async = !0, a.src = "https://www.googletagmanager.com/gtm.js?id=GTM-W7X4MT", i.parentNode.insertBefore(a, i)
    }(window, document, "script", "dataLayer"),
    function (e, t, n, o, r, i, a) {
      e.GoogleAnalyticsObject = "ga", e.ga = e.ga || function () {
        (e.ga.q = e.ga.q || []).push(arguments)
      }, e.ga.l = 1 * new Date, i = t.createElement(n), a = t.getElementsByTagName(n)[0], i.async = 1, i.src = "//www.google-analytics.com/analytics.js", a.parentNode.insertBefore(i, a)
    }(window, document, "script"), ga("create", "UA-59507085-1", "auto"), ga("require", "linkid", "linkid.js"), ga("require", "displayfeatures"), ga("require", "ec"), ga("require", "GTM-MTSNDZQ"), ga("send", "pageview"),
    function () {
      var e = null,
        t = 0;
      "object" == ("undefined" == typeof g_YWA_funcs ? "undefined" : o(g_YWA_funcs)) ? g_YWA_funcs.doPageView(): e = setInterval(function () {
        "object" == ("undefined" == typeof g_YWA_funcs ? "undefined" : o(g_YWA_funcs)) ? (g_YWA_funcs.doPageView(), clearInterval(e)) : t > 10 && clearInterval(e), t++
      }, 100)
    }(),
    function () {
      try {
        var e = r.default.getUrlParam("sponsorName");
        "2" == e && (e = btoa("acer")), r.default.removeUrlParam("sponsorName"), e && atob(e) && (sessionStorage.setItem("sponsorName", e), sessionStorage.setItem("register_sponsor", e))
      } catch (e) {
        console.error(e)
      }
    }(), litv.debug = !1, "true" == sessionStorage.getItem("litv_debug") && (litv.debug = !0), litv.debug || "true" == r.default.getUrlParam("litv_debug") && (litv.debug = !0, sessionStorage.setItem("litv_debug", !0)), r.default.removeUrlParam("litv_debug"), i.default.importJSFile("/system.js", function () {
      s.default.show()
    }),
    function () {
      var e = null,
        t = 0;
      litv.enableMobile = !0;
      var n = function () {
        var e = litv.BrowserSupportedInfo.uaInfo;
        if ("iOS" == e.os.name) {
          var t = e.os.version.split(".")[0];
          (t = parseInt(t)) < 10 && (litv.enableMobile = !1)
        } else if ("Android" == e.os.name);
        else if ("Safari" == e.browser.name) {
          var n = parseInt(e.browser.major);
          isNaN(n) && (litv.enableMobile = !1)
        }
      };
      litv.BrowserSupportedInfo ? n() : (clearInterval(e), e = setInterval(function () {
        litv.BrowserSupportedInfo ? (clearInterval(e), n()) : t >= 20 && clearInterval(e), t++
      }, 100))
    }(),
    function () {
      var e = (new Date).getTime(),
        t = localStorage.getItem("ip_data"),
        n = function () {
          a.default.getIpData(function (t) {
            litv.ipData = t, litv.ipData.time = e, localStorage.setItem("ip_data", JSON.stringify(litv.ipData))
          })
        };
      if (t) {
        var o = 0;
        (t = JSON.parse(t)).time && (o = parseInt(t.time)), e - o >= 36e5 ? n() : litv.ipData = t
      } else n()
    }(), a.default.getBuildNumber(function (e) {
      e && (litv.buildNumber = e)
    }),
    function () {
      var e = 0,
        t = "",
        n = $(window);
      n.scroll(function () {
        var o = n.scrollTop(),
          r = Math.abs(o - e);
        o > e ? (n.trigger("scrolldown", [r]), "scrolldown" != t && (t = "scrolldown", n.trigger("scrolldownOne"))) : (n.trigger("scrollup", [r]), "scrollup" != t && (t = "scrollup", n.trigger("scrollupOne"))), e = o
      })
    }(),
    function () {
      var e = r.default.getDetail();
      litv.urlDetail = e
    }(),
    function () {
      var e = new Array;
      c.default.on(u.default.EVENT.SHOW, function (t, n) {
        if (t == u.default && (1 == litv.debug && (console.group("rightFloatPoster.EVENT.SHOW"), console.log("target => ", t), console.log("arg =>", n), console.groupEnd()), "undefined" != typeof ga)) {
          if (-1 != e.indexOf(n.index)) return;
          e.push(n.index);
          var o = n.item[n.type],
            i = r.default.getDetail();
          o = r.default.getFilenameFromUrl(o), ga("ec:addPromo", {
            id: o,
            name: i.pathname + "_right_float_poster_container"
          }), ga("send", "event", "Promo", "impression", i.pathname + "_right_float_poster_container", {
            nonInteraction: !0
          })
        }
      }), c.default.on(u.default.EVENT.DISMISS, function (e, t) {
        e == u.default && 1 == litv.debug && (console.group("rightFloatPoster.EVENT.DISMISS"), console.log("target => ", e), console.log("arg =>", t), console.groupEnd())
      }), c.default.on(u.default.EVENT.CLICK, function (e, t) {
        if (e == u.default && (1 == litv.debug && (console.group("rightFloatPoster.EVENT.CLICK"), console.log("target => ", e), console.log("arg =>", t), console.groupEnd()), "undefined" != typeof ga)) {
          var n = t.item[t.type],
            o = r.default.getDetail();
          ga("ec:addPromo", {
            id: n,
            name: o.pathname + "_right_float_poster_container"
          }), ga("ec:setAction", "promo_click"), ga("send", "event", "Promo", "click", o.pathname + "_right_float_poster_container")
        }
      })
    }()
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    i = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(5));

  function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var s = function () {
    function e() {
      a(this, e)
    }
    return r(e, [{
      key: "renderCustomizeAlert",
      value: function (e) {
        var t = new l(e);
        p.init(t.getParam)
      }
    }], [{
      key: "dissmiss",
      value: function () {
        var e = document.querySelectorAll(".alert_module");
        if (e.length > 0)
          for (var t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t])
      }
    }]), e
  }();
  t.default = s;
  var l = function () {
      function e(t) {
        a(this, e), this.config = t
      }
      return r(e, [{
        key: "getParam",
        get: function () {
          var e = {
              class: {
                module: "alert_module", bg: "alert_bg", box: "alert_box", head: "alert_head", dialog: "alert_dialog", content: "alert_content", foot: "alert_foot", close: "alert_close", iframe: "alert_iframe", confirm: "alert_confirm", cancel: "alert_cancel", customizeBtn: "customize_btn", image: "alert_image", input: "alert_input", middle: "alert_middle"
              },
              param: {
                key: "defaults",
                style: {},
                width: "",
                height: "",
                boxClass: "default",
                type: null,
                title: "",
                dialog: "",
                content: "",
                confirm: !1,
                confirmText: "確認",
                confirmClass: "alert_confirm",
                cancel: !1,
                cancelText: "取消",
                cancelClass: "alert_cancel",
                customizeButton: "",
                closeButton: !0,
                callback: function (e) {
                  "cancel" == e && exitAlert()
                },
                iframeUrl: "",
                iframeWidth: "",
                iframeHeight: "",
                iframeFullScreen: !1,
                value: "",
                background: "",
                image: null,
                imageClass: null,
                input: !1,
                inputType: "text",
                inputClass: "alert_input",
                inputPlaceHolder: "",
                containerResizeBreakPoint: {}
              }
            },
            t = {},
            n = void 0;
          if ("string" == typeof this.config)
            for (var r = this.config.replace(/\s/g, "").split(","), i = 0; i < r.length; i += 2) t[r[i]] = r[i + 1];
          else {
            if ("object" != o(this.config)) return console.warn("Unexpected type of argument."), !1;
            Array.isArray(this.config) || (t = this.config)
          }
          t && (n = d.booleanToString(t));
          var a = e.param;
          for (var s in a) a.hasOwnProperty(s) && void 0 !== n[s] && (a[s] = n[s]);
          return e
        }
      }]), e
    }(),
    u = function (e) {
      if (null == e) return !0;
      if (e.length > 0) return !1;
      if (0 === e.length) return !0;
      if ("object" !== (void 0 === e ? "undefined" : o(e))) return !0;
      for (var t in e)
        if (hasOwnProperty.call(e, t)) return !1;
      return !0
    },
    c = {
      osVersion: function () {
        return (new UAParser).getResult().os.version
      },
      iosVersion: function () {
        var e = i.default.detectIsMobile() ? "mobile" : "pc",
          t = i.default.detectIsIOS();
        return !("pc" == e || !t) && this.osVersion.split(".")[0]
      }
    },
    d = {
      booleanToString: function (e) {
        if ("object" == (void 0 === e ? "undefined" : o(e)) && "[object Array]" != Object.prototype.toString.call(e)) {
          for (var t in e)
            if ("string" == typeof e[t]) {
              var n = e[t];
              "true" === n.toLowerCase() && (e[t] = !0), "false" === n.toLowerCase() && (e[t] = !1)
            } return e
        }
      }
    },
    f = {
      view: [],
      renderParam: {},
      renderClass: {},
      combination: function (e) {
        return this.view.length > 0 && (this.view = []), this.renderParam = e.param, this.renderClass = e.class, this.init(), this.view = this.view.join(""), this.view
      },
      init: function () {
        this.view.push('<div class="' + this.renderClass.bg + '"></div>'), this.view.push('<div class="' + this.renderClass.box + '">'), "customize" == this.renderClass.key ? this.customizeChild() : this.defaultChild(), this.view.push("</div>")
      },
      defaultChild: function () {
        if (this.renderParam.closeButton && this.view.push('<i class="' + this.renderClass.close + '"></i>'), this.renderParam.iframeUrl) {
          var e = "";
          this.renderParam.iframeFullScreen && (e = "allowfullscreen mozallowfullscreen webkitallowfullscreen"), this.view.push('<iframe src="' + this.renderParam.iframeUrl + '" class="' + this.renderClass.iframe + '" ' + e + "></iframe>")
        }
        this.view.push('<div class="' + this.renderClass.head + '">' + this.renderParam.title + "</div>"), this.renderParam.image && this.view.push('<img class="' + this.renderClass.image + '"/>'), this.view.push('<div class="' + this.renderClass.middle + '">'), this.view.push('<div class="' + this.renderClass.content + '"></div>'), this.view.push('<p class="' + this.renderClass.dialog + '">' + this.renderParam.dialog + "</p>"), this.renderParam.input && this.view.push('<input type="' + this.renderParam.inputType + '" class="' + this.renderParam.inputClass + '" maxlength="10" placeholder="' + this.renderParam.inputPlaceHolder + '" />'), this.view.push("</div>"), (this.renderParam.cancel || this.renderParam.confirm) && (this.view.push('<div class="' + this.renderClass.foot + '">'), this.view.push('<div class="' + this.renderClass.customizeBtn + '"></div>'), this.renderParam.cancel && this.view.push('<button class="' + this.renderParam.cancelClass + '">' + this.renderParam.cancelText + "</button>"), this.renderParam.confirm && this.view.push('<button class="' + this.renderParam.confirmClass + '">' + this.renderParam.confirmText + "</button>"), this.view.push("</div>"))
      },
      customizeChild: function () {
        this.renderParam.closeButton && this.view.push('<i class="' + this.renderClass.close + '"></i>'), this.renderClass.value && this.view.push("" + this.renderParam.value)
      }
    },
    p = {
      frag: document.createDocumentFragment(),
      params: {},
      alertDOM: {},
      viewAppend: function () {
        var e = document.createElement("div");
        return e.className = this.params.class.module, e.innerHTML = f.combination(this.params), e
      },
      viewActive: function (e) {
        var t = this.viewAppend();
        this.frag.appendChild(t), "function" == typeof e && e()
      },
      init: function (e) {
        var t = this;
        t.params = e, t.viewActive(function () {
          document.body.appendChild(t.frag), t.binding()
        })
      },
      binding: function () {
        var e = {},
          t = [],
          n = this.params.class,
          o = this.params.param;
        for (var r in n) n.hasOwnProperty(r) && (e[r] = document.querySelector("." + n[r]));
        var a = function (n) {
            if (!(u(e) && t.length > 0)) {
              for (var o = void 0, r = window.innerWidth, i = "", a = t.sort(function (e, t) {
                  return t - e
                }), s = 0; s < a.length; s++) r <= a[s] && (o = n[a[s]]);
              for (var l in o) o.hasOwnProperty(l) && (i += l + ":" + o[l] + ";");
              e.box.removeAttribute("style"), i && e.box.setAttribute("style", i), e.box.style.display = "inline-block"
            }
          },
          s = function (e) {
            var t = void 0,
              r = void 0;
            switch (e.target.className) {
              case o.confirmClass:
                t = "confirm";
                break;
              case o.cancelClass:
              case n.close:
                t = "cancel";
                break;
              case n.bg:
                t = n.bg;
                break;
              case o.inputClass:
                t = "input", r = e.target.value;
                break;
              case n.iframe:
                t = "load";
                break;
              default:
                r = e.target.value, t = e.target.className
            }
            r ? o.callback(t, r, e) : o.callback(t, e)
          };
        if (o.style) {
          var l = o.style;
          for (var d in l) l.hasOwnProperty(d) && (e.style[k] = l[k])
        }
        if (e.bg.style.display = "block", e.box.style.display = "inline-block", o.width && (e.box.style.width = o.width), o.height && (e.box.style.height = o.height), o.background && (e.box.style.background = o.background), o.boxClass && (i.default.detectIsIOS() ? e.box.className += " " + o.boxClass + " ios" : e.box.className += " " + o.boxClass), o.content.length > 0 && (e.content.innerHTML = o.content), o.iframeUrl && (e.iframe.style.display = "block", o.iframeHeight && (e.iframe.style.height = o.iframeHeight), o.iframeWidth && (e.iframe.style.width = o.iframeWidth), i.default.detectIsIOS() && (e.iframe.scrolling = "no", e.iframe.style.height = "calc(101%)", e.iframe.overflowY = "scroll", "11" == c.iosVersion() && (e.iframe.style.position = "absolute", e.module.style.position = "absolute", e.box.style.position = "absolute"))), e.input && e.input.addEventListener("change", s, !1), e.content && e.content.addEventListener("change", s, !1), e.foot && e.foot.addEventListener("click", s, !1), e.bg && e.bg.addEventListener("click", s, !1), e.close && e.close.addEventListener("click", s, !1), e.iframe && e.iframe.addEventListener("load", s, !1), !u(o.containerResizeBreakPoint)) {
          var f = o.containerResizeBreakPoint;
          for (var p in f) f.hasOwnProperty(p) && t.push(p);
          a(f), window.addEventListener("resize", function () {
            a(f)
          })
        }
      }
    }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = null,
    i = new(function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return o(e, [{
        key: "start",
        value: function (e) {
          var t = 0;
          clearInterval(r), "undefined" != typeof FB ? FB.XFBML.parse() : r = setInterval(function () {
            "undefined" != typeof FB ? (FB.XFBML.parse(), clearInterval(r)) : t > 10 && clearInterval(r), t++
          }, 100)
        }
      }]), e
    }());
  t.default = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(3)),
    r = new function () {
      var e = 0;
      this.get = function () {
        return e++
      }
    };
  t.default = function (e) {
    var t = this;
    t.isShow = !1, e.balloon = t, this.show = function (o) {
      $(".balloon").remove();
      var r = new Array;
      r.push("<div class='balloon'>"), r.push("<div class='balloon_arrow_section'>"), r.push("<div class='arrow'></div>"), r.push("</div>"), r.push("<div class='balloon_content_section'></div>"), r.push("</div>"), r = r.join(""), $("body").append(r), s();
      var a = $(".balloon");
      $(".balloon .balloon_content_section").html(o), l(e), a.attr("data_balloon_id", t.ballonTagId), a.mouseenter(n), a.mouseleave(i), $(e.target).off("mouseleave", i), $(e.target).mouseleave(i), $(window).off("resize", l), $(window).resize(l), t.isShow = !0
    }, this.dismiss = function () {
      $(e.target).off("mouseleave", i), $(window).off("resize", l), $(".balloon").remove(), t.isShow = !1
    };
    var n = function (t) {
        e.enterCallback(t, e)
      },
      i = function (t) {
        !0 === a(t) && e.leaveCallback(t, e)
      },
      a = function (e) {
        var n = o.default.getEventAttribute({
          target: o.default.getToElement(e)
        }, "data_balloon_id");
        return (n = parseInt(n)) !== t.ballonTagId
      },
      s = function () {
        var t = $(".balloon .balloon_content_section");
        $(".balloon .balloon_arrow_section .arrow").css("border-color", "transparent transparent " + e.backgroundColor + " transparent"), t.css("background-color", e.backgroundColor), t.css("box-shadow", "0px 0px 20px " + e.borderColor)
      },
      l = function () {
        var t = $(e.target),
          n = t.width(),
          o = t.height(),
          r = t.offset(),
          i = t.css("border-top-width");
        i = i.replace("px", ""), i = parseInt(i);
        var a = t.css("border-bottom-width");
        a = a.replace("px", ""), a = parseInt(a);
        var s = $(".balloon"),
          l = s.width(),
          c = r.top + o + i + a,
          d = r.left + n / 2 - l / 2;
        s.css("top", c), s.css("left", d), u(t, s)
      },
      u = function (t, n) {
        var o = t.offset(),
          r = t.width(),
          i = n.width(),
          a = $("body").width(),
          s = n.css("left");
        s = s.replace("px", "");
        var l = (s = parseInt(s)) + i,
          u = $(".balloon .balloon_arrow_section .arrow");
        if (u.css("margin-left", "auto"), u.css("margin-right", "auto"), s < 0 ? (n.css("left", o.left), u.css("margin-left", e.overflowArrowPosition.left)) : l > a && (n.css("left", o.left + r - i), u.css("margin-right", e.overflowArrowPosition.right)), s = (s = n.css("left")).replace("px", ""), l = (s = parseInt(s)) + i, s < 0 || l > a) {
          var c = (a - i) / 2,
            d = u.outerWidth();
          n.css("left", c), u.css("margin-right", "auto"), u.css("margin-left", o.left + r / 2 - d / 2 - c)
        }
      };
    t.ballonTagId = r.get(), $(e.target).attr("data_balloon_id", t.ballonTagId), $(e.target).on(e.action, function (t) {
      e.actionCallback(t, e)
    })
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(n(1));
  t.default = function (e, t, n) {
    var r = {
      url: "/j_spring_security_check",
      selectMethod: "POST",
      request: {
        j_username: e.name,
        j_password: e.password,
        _spring_security_remember_me: "on"
      },
      dataType: "text",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8"
    };
    o.default.get(r, t, n, !1)
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = l(n(108)),
    i = l(n(4)),
    a = l(n(110)),
    s = l(n(0));

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var u = function (e) {
      function t() {
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, i.default), o(t, [{
        key: "show",
        value: function (e) {
          (e = e || {}).dialogTitle = "<div class='passcode_dialog_title'>輸入通行碼</div>", e.dialogHtml = r.default.getHtml(),
            function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("passcode");
          var n = $(".alert_box .passcode_view");
          r.default.setContent(n, e), r.default.setAction(n, e), r.default.check(n, e), c.init(n)
        }
      }]), t
    }(),
    c = new function () {
      var e = this,
        t = null;
      this.init = function (n) {
        t = n, s.default.off(r.default.PASSCODE_SUCCESS_EVENT, e.succ), s.default.off(r.default.PASSCODE_FAIL_EVENT, e.fail), s.default.off(d.DIALOG_DISMISS_EVENT, e.end), s.default.on(r.default.PASSCODE_SUCCESS_EVENT, e.succ), s.default.on(r.default.PASSCODE_FAIL_EVENT, e.fail), s.default.on(d.DIALOG_DISMISS_EVENT, e.end)
      }, this.succ = function (e) {
        d.dismiss(), a.default.show(e)
      }, this.fail = function () {
        t.parent(".alert_content").scrollTop(0)
      }, this.end = function () {
        t = null, s.default.off(r.default.PASSCODE_SUCCESS_EVENT, e.succ), s.default.off(r.default.PASSCODE_FAIL_EVENT, e.fail), s.default.off(d.DIALOG_DISMISS_EVENT, e.end)
      }
    },
    d = new u;
  t.default = d
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = i(n(1)),
    r = i(n(6));

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.default = function (e, t, n) {
    ! function (e) {
      o.default.get({
        url: "/system/ajax/getDialogDescConfig",
        selectMethod: "GET",
        request: {}
      }, function (t, n) {
        "function" == typeof e && e(n)
      }, null, !0)
    }(function (o) {
      var i = o[e],
        a = i.keys,
        s = i.paths,
        l = "";
      t && (l = a[t]), l || (l = a[s[r.default.getDetail().pathname]]), l || (l = a.default), l && n.html(l)
    })
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = a(n(1)),
    i = a(n(0));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.SEARCH_RESULT_SUBMIT_EVENT = "searchCommon.searchResultSubmitEvent"
      }
      return o(e, [{
        key: "setRecommand",
        value: function (e, t) {
          d(function (n) {
            var o = c(n);
            e.html(o), l(t)
          })
        }
      }]), e
    }(),
    l = function (e) {
      e.off("submit", u), e.on("submit", {
        form: e
      }, u)
    },
    u = function (e) {
      e.preventDefault();
      var t = e.data.form,
        n = new Array;
      n.push("<form class='most_remove_tag ' method='" + t.attr("method") + "' action='" + t.attr("action") + "' target='" + t.attr("target") + "'>"), n.push("<input name='search_input' value=" + encodeURIComponent(t.find("[name='search_input']").val()) + " />"), n.push("</form>"), n = n.join(""), $("body").append(n), $("form.most_remove_tag").submit(), $("form.most_remove_tag").remove(), i.default.emit(f.SEARCH_RESULT_SUBMIT_EVENT)
    },
    c = function (e) {
      for (var t = new Array, n = 0; n < e.length; n++) {
        var o = e[n];
        t.push("<a class='search_recommand_item' href='/vod/" + o.contentType + "/content.do?id=" + o.contentId + "' target='_blank'>"), t.push("\t<div class='item_index'>" + (n + 1) + "</div>"), t.push("\t<div class='item_name'>" + o.title + "</div>"), t.push("</a>")
      }
      return t.join("")
    },
    d = function (e) {
      r.default.get({
        url: "/search/ajax/getHotSearch",
        selectMethod: "GET",
        request: {}
      }, function (t, n) {
        "function" == typeof e && e(n)
      }, null, !0)
    },
    f = new s;
  t.default = f
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
    }
    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t
    }
  }();
  ! function (e) {
    e && e.__esModule
  }(n(1));
  var r = new(function () {
    function e() {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e)
    }
    return o(e, [{
      key: "insertZeroBefore",
      value: function (e) {
        return (e = parseInt(e)) < 10 && (e = "0" + e), e
      }
    }, {
      key: "getFormatDay",
      value: function (e) {
        var t = e.getDay(),
          n = "";
        return 0 === t ? n = "星期日" : 1 === t ? n = "星期一" : 2 === t ? n = "星期二" : 3 === t ? n = "星期三" : 4 === t ? n = "星期四" : 5 === t ? n = "星期五" : 6 === t && (n = "星期六"), n
      }
    }, {
      key: "getFormatTimeByMilliSeconds",
      value: function (e) {
        var t = (e = parseInt(e)) / 36e5,
          n = e / 6e4 % 60,
          o = e / 1e3 % 60;
        t = Math.floor(t), n = Math.floor(n), o = Math.floor(o);
        var r = function (e) {
          var t = "";
          return e < 10 ? t = "0" + e : e >= 10 && (t = String(e)), t
        };
        return {
          hours: t = r(t),
          minutes: n = r(n),
          seconds: o = r(o),
          wholeTime: t + ":" + n + ":" + o
        }
      }
    }]), e
  }());
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = c(n(2)),
    r = c(n(159)),
    i = c(n(160)),
    a = c(n(161)),
    s = c(n(3)),
    l = c(n(0)),
    u = c(n(5));

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var d = {
      LARGE: "remoteView.size.large",
      SMALL: "remoteView.size.small"
    },
    f = {
      KEYIN: "remoteView.event.keyin"
    };
  t.default = function (e) {
    var t = this;
    t.SIZE = o.default.extend({}, d), t.EVENT = o.default.extend({}, f);
    var n = e.container,
      c = e.hiddenByIdle,
      p = null,
      h = null,
      v = new a.default(n),
      m = null;
    this.show = function () {
      if (!(n.children(".remote_control_section, .remote_control_message").length > 0)) {
        var e = A();
        n.append(e), v.start(), _(), w(), b(), $(window).off("resize", y), $(window).on("resize", y), 1 == c && (u.default.detectIsMobile() ? (g.touchend(), $(window).off("touchend", g.touchend), $(window).on("touchend", g.touchend), $(window).off("touchstart", g.touchstart), $(window).on("touchstart", g.touchstart), $(window).off("touchmove", g.touchmove), $(window).on("touchmove", g.touchmove)) : (g.mouseup(), $(window).off("mouseup", g.mouseup), $(window).on("mouseup", g.mouseup), $(window).off("mousedown", g.mousedown), $(window).on("mousedown", g.mousedown), $(window).off("mousemove", g.mousemove), $(window).on("mousemove", g.mousemove)))
      }
    }, this.dismiss = function () {
      var e = n.children(".remote_control_section, .remote_control_message");
      e.length <= 0 || (e.remove(), v.end(), E(), clearTimeout(h), $(window).off("resize", y), 1 == c && (u.default.detectIsMobile() ? ($(window).off("touchend", g.touchend), $(window).off("touchstart", g.touchstart), $(window).off("touchmove", g.touchmove)) : ($(window).off("mouseup", g.mouseup), $(window).off("mousedown", g.mousedown), $(window).off("mousemove", g.mousemove))))
    }, this.message = function (e) {
      if (e) {
        var t = n.children(".remote_control_message");
        t.html(e), t.removeClass("hidden"), clearTimeout(m), m = setTimeout(function () {
          t.addClass("hidden")
        }, 3e3)
      }
    }, Object.defineProperty(t, "size", {
      set: function (e) {
        var t = n.children(".remote_control_section");
        t.length <= 0 || t.attr("data-size", e)
      }
    }), Object.defineProperty(t, "exist", {
      get: function () {
        var e = !1;
        return n.children(".remote_control_section").length > 0 && (e = !0), e
      }
    });
    var g = new function () {
        var e = null,
          t = !1;
        this.touchstart = function () {
          o(), r()
        }, this.touchend = function () {
          o(), r()
        }, this.touchmove = function () {
          o()
        }, this.mousedown = function () {
          t = !0, o()
        }, this.mouseup = function () {
          t = !1, o(), r()
        }, this.mousemove = function () {
          t || (o(), r())
        };
        var o = function () {
            var t = n.children(".remote_control_section");
            t.length <= 0 || (clearTimeout(e), t.removeClass("hidden"))
          },
          r = function () {
            var t = n.children(".remote_control_section");
            t.length <= 0 || (e = setTimeout(function () {
              var e = t.find(".remote_control_tiems");
              e.hasClass("show") && (t.find(".remote_control_icon").addClass("show"), e.removeClass("show"), S()), t.addClass("hidden")
            }, 5e3))
          }
      },
      y = function () {
        clearTimeout(p), p = setTimeout(function () {
          var e = n.children(".remote_control_section"),
            t = e.find(".remote_control_icon"),
            o = e.find(".remote_control_tiems"),
            r = o.find(".remote_header .remote_input_section .number_display_section");
          t.addClass("show"), o.removeClass("show"), e.removeAttr("data-left"), e.removeAttr("data-top"), r.html(""), _(), b()
        }, 300)
      },
      _ = function () {
        var e = $(window).width();
        t.size = e < 1024 ? t.SIZE.SMALL : t.SIZE.LARGE
      },
      b = function () {
        var e = n.children(".remote_control_section"),
          t = $(window).width(),
          o = $(window).height(),
          r = t - e.outerWidth() + "px",
          i = (o - e.outerHeight()) / 2 + "px";
        e.css("left", r), e.css("top", i)
      },
      w = function () {
        var e = n.children(".remote_control_section"),
          t = (e.find(".remote_control_icon"), e.find(".remote_control_tiems")),
          o = (t.find(".remote_header .remote_input_section .number_display_section"), t.find(".exit_icon")),
          r = t.find(".item_btn");
        k.init(), e.on("dblclick", k.remoteViewClick), e.on("click", k.remoteViewClick), l.default.on(v.EVENT.CLICK, k.remoteControlIconClick), o.on("click", k.exitIconClick), u.default.detectIsMobile() ? (r.on("touchstart", k.itemBtnsMousedown), r.on("touchend", k.itemBtnsMouseup)) : (r.on("mousedown", k.itemBtnsMousedown), r.on("mouseup", k.itemBtnsMouseup), r.on("mouseleave", k.itemBtnsMouseleave))
      },
      E = function () {
        var e = n.children(".remote_control_section"),
          t = (e.find(".remote_control_icon"), e.find(".remote_control_tiems")),
          o = (t.find(".remote_header .remote_input_section .number_display_section"), t.find(".exit_icon")),
          r = t.find(".item_btn");
        e.off("dblclick", k.remoteViewClick), e.off("click", k.remoteViewClick), l.default.off(v.EVENT.CLICK, k.remoteControlIconClick), o.off("click", k.exitIconClick), u.default.detectIsMobile() ? (r.off("touchstart", k.itemBtnsMousedown), r.off("touchend", k.itemBtnsMouseup)) : (r.off("mousedown", k.itemBtnsMousedown), r.off("mouseup", k.itemBtnsMouseup), r.off("mouseleave", k.itemBtnsMouseleave))
      },
      k = new function () {
        var e = null,
          t = null,
          o = null,
          r = null;
        this.init = function () {
          e = n.children(".remote_control_section"), t = e.find(".remote_control_icon"), o = e.find(".remote_control_tiems"), r = o.find(".remote_header .remote_input_section .number_display_section"), o.find(".exit_icon"), o.find(".item_btn")
        }, this.remoteViewClick = function (e) {
          e.stopPropagation()
        }, this.remoteControlIconClick = function (e) {
          e == v && (t.removeClass("show"), o.addClass("show"), S())
        }, this.exitIconClick = function (e) {
          clearTimeout(h), r.html(""), t.addClass("show"), o.removeClass("show"), S()
        }, this.itemBtnsMousedown = function (e) {
          var t = s.default.getEventAttribute(e, "data-number");
          "+" != t && "-" != t || (T(t), i(t))
        }, this.itemBtnsMouseup = function (e) {
          var t = s.default.getEventAttribute(e, "data-number");
          if (clearTimeout(h), /\d/.test(t)) C(t);
          else {
            if ("+" == t || "-" == t) return;
            T(t)
          }
        }, this.itemBtnsMouseleave = function (e) {
          var t = s.default.getEventAttribute(e, "data-number");
          "+" != t && "-" != t || clearTimeout(h)
        };
        var i = function e(t) {
          clearTimeout(h), h = setTimeout(function () {
            T(t), e(t)
          }, 300)
        }
      },
      C = function (e) {
        var o = n.children(".remote_control_section").find(".remote_control_tiems").find(".remote_header .remote_input_section .number_display_section"),
          r = o.html();
        (r || "0" != e) && (r += e, o.html(r), h = setTimeout(function () {
          l.default.emit(t.EVENT.KEYIN, t, r), o.html("")
        }, 2500))
      },
      T = function (e) {
        var o = n.children(".remote_control_section").find(".remote_control_tiems").find(".remote_header .remote_input_section .number_display_section"),
          r = o.html();
        if ("d" == e) {
          if (!r) return;
          r = r.substring(0, r.length - 1), o.html(r), h = setTimeout(function () {
            l.default.emit(t.EVENT.KEYIN, t, r), o.html("")
          }, 2500)
        } else if ("e" == e) {
          if (!r) return;
          l.default.emit(t.EVENT.KEYIN, t, r), o.html(""), r = ""
        } else "+" != e && "-" != e && "b" != e || (l.default.emit(t.EVENT.KEYIN, t, e), o.html(""), r = "")
      },
      S = function () {
        var e = n.children(".remote_control_section"),
          t = e.attr("data-left"),
          o = e.attr("data-top");
        if (t && o) return e.css("left", t), e.css("top", o), e.removeAttr("data-left"), void e.removeAttr("data-top");
        var r = e.position().left,
          i = r + e.outerWidth(),
          a = e.position().top,
          s = a + e.outerHeight(),
          l = $(window).width(),
          u = $(window).height(),
          c = r,
          d = a;
        e.attr("data-left", r + "px"), e.attr("data-top", a + "px"), r < 0 ? c = "0px" : i > l && (c = l - e.outerWidth() + "px"), a < 0 ? d = "0px" : s > u && (d = u - e.outerHeight() + "px"), e.css("left", c), e.css("top", d)
      },
      A = function () {
        var e = new Array;
        e.push("<div class='remote_control_section'>"), e.push("  <a class='remote_control_icon show'>"), e.push("      <div class='image'></div>"), e.push("  </a>"), e.push("  <div class='remote_control_tiems'>"), e.push("      <div class='remote_header'>"), e.push("          <div class='remote_title'>選台器</div>"), e.push("          <div class='remote_input_section'>"), e.push("              <a class='delete_btn item_btn' data-number='d'></a>"), e.push("              <div class='number_display_section'></div>"), e.push("          </div>"), e.push("      </div>"), e.push("      <div class='large_size_control'>"), e.push("          <div class='left_section'>");
        for (var t = r.default.left, n = 0; n < t.length; n++) {
          var o = t[n];
          e.push("<a class='item_btn' data-number='" + o.number + "'>"), e.push("  <div class='item_btn_text'>" + o.text + "</div>"), e.push("</a>")
        }
        e.push("          </div>"), e.push("          <div class='right_section'>");
        for (var a = r.default.right, s = 0; s < a.length; s++) {
          var l = a[s];
          e.push("<a class='item_btn' data-number='" + l.number + "'>"), e.push("  <div class='item_btn_text'>" + l.text + "</div>"), e.push("</a>")
        }
        e.push("          </div>"), e.push("      </div>"), e.push("      <div class='small_size_control'>"), e.push("          <div class='top_section'>");
        for (var u = i.default.top, c = 0; c < u.length; c++) {
          var d = u[c];
          e.push("<a class='item_btn' data-number='" + d.number + "'>"), e.push("  <div class='item_btn_text'>" + d.text + "</div>"), e.push("</a>")
        }
        e.push("          </div>"), e.push("          <div class='bottom_section'>");
        for (var f = i.default.bottom, p = 0; p < f.length; p++) {
          var h = f[p];
          e.push("<a class='item_btn' data-number='" + h.number + "'>"), e.push("  <div class='item_btn_text'>" + h.text + "</div>"), e.push("</a>")
        }
        return e.push("          </div>"), e.push("      </div>"), e.push("      <a class='exit_icon'></a>"), e.push("  </div>"), e.push("</div>"), e.push("<div class='remote_control_message hidden'></div>"), e.join("")
      }
  }
}, function (e, t, n) {
  "use strict";
  e.exports = n(40).polyfill()
}, function (e, t, n) {
  "use strict";
  (function (o, r) {
    var i, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.5+7f2b526d
     */
    ! function (o, r) {
      "object" === s(t) && void 0 !== e ? e.exports = r() : void 0 === (a = "function" == typeof (i = r) ? i.call(t, n, t, e) : i) || (e.exports = a)
    }(0, function () {
      function e(e) {
        return "function" == typeof e
      }
      var t = Array.isArray ? Array.isArray : function (e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        },
        n = 0,
        i = void 0,
        a = void 0,
        l = function (e, t) {
          v[n] = e, v[n + 1] = t, 2 === (n += 2) && (a ? a(m) : g())
        },
        u = "undefined" != typeof window ? window : void 0,
        c = u || {},
        d = c.MutationObserver || c.WebKitMutationObserver,
        f = "undefined" == typeof self && void 0 !== o && "[object process]" === {}.toString.call(o),
        p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

      function h() {
        var e = setTimeout;
        return function () {
          return e(m, 1)
        }
      }
      var v = new Array(1e3);

      function m() {
        for (var e = 0; e < n; e += 2)(0, v[e])(v[e + 1]), v[e] = void 0, v[e + 1] = void 0;
        n = 0
      }
      var g = void 0;

      function y(e, t) {
        var n = this,
          o = new this.constructor(w);
        void 0 === o[b] && j(o);
        var r = n._state;
        if (r) {
          var i = arguments[r - 1];
          l(function () {
            return R(r, o, i, n._result)
          })
        } else M(n, o, e, t);
        return o
      }

      function _(e) {
        if (e && "object" === (void 0 === e ? "undefined" : s(e)) && e.constructor === this) return e;
        var t = new this(w);
        return I(t, e), t
      }
      g = f ? function () {
        return o.nextTick(m)
      } : d ? function () {
        var e = 0,
          t = new d(m),
          n = document.createTextNode("");
        return t.observe(n, {
            characterData: !0
          }),
          function () {
            n.data = e = ++e % 2
          }
      }() : p ? function () {
        var e = new MessageChannel;
        return e.port1.onmessage = m,
          function () {
            return e.port2.postMessage(0)
          }
      }() : void 0 === u ? function () {
        try {
          var e = Function("return this")().require("vertx");
          return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function () {
            i(m)
          } : h()
        } catch (e) {
          return h()
        }
      }() : h();
      var b = Math.random().toString(36).substring(2);

      function w() {}
      var E = void 0,
        k = 1,
        C = 2,
        T = {
          error: null
        };

      function S(e) {
        try {
          return e.then
        } catch (e) {
          return T.error = e, T
        }
      }

      function A(t, n, o) {
        n.constructor === t.constructor && o === y && n.constructor.resolve === _ ? function (e, t) {
          t._state === k ? O(e, t._result) : t._state === C ? x(e, t._result) : M(t, void 0, function (t) {
            return I(e, t)
          }, function (t) {
            return x(e, t)
          })
        }(t, n) : o === T ? (x(t, T.error), T.error = null) : void 0 === o ? O(t, n) : e(o) ? function (e, t, n) {
          l(function (e) {
            var o = !1,
              r = function (e, t, n, o) {
                try {
                  e.call(t, n, o)
                } catch (e) {
                  return e
                }
              }(n, t, function (n) {
                o || (o = !0, t !== n ? I(e, n) : O(e, n))
              }, function (t) {
                o || (o = !0, x(e, t))
              }, e._label);
            !o && r && (o = !0, x(e, r))
          }, e)
        }(t, n, o) : O(t, n)
      }

      function I(e, t) {
        e === t ? x(e, new TypeError("You cannot resolve a promise with itself")) : function (e) {
          var t = void 0 === e ? "undefined" : s(e);
          return null !== e && ("object" === t || "function" === t)
        }(t) ? A(e, t, S(t)) : O(e, t)
      }

      function P(e) {
        e._onerror && e._onerror(e._result), L(e)
      }

      function O(e, t) {
        e._state === E && (e._result = t, e._state = k, 0 !== e._subscribers.length && l(L, e))
      }

      function x(e, t) {
        e._state === E && (e._state = C, e._result = t, l(P, e))
      }

      function M(e, t, n, o) {
        var r = e._subscribers,
          i = r.length;
        e._onerror = null, r[i] = t, r[i + k] = n, r[i + C] = o, 0 === i && e._state && l(L, e)
      }

      function L(e) {
        var t = e._subscribers,
          n = e._state;
        if (0 !== t.length) {
          for (var o = void 0, r = void 0, i = e._result, a = 0; a < t.length; a += 3) o = t[a], r = t[a + n], o ? R(n, o, r, i) : r(i);
          e._subscribers.length = 0
        }
      }

      function R(t, n, o, r) {
        var i = e(o),
          a = void 0,
          s = void 0,
          l = void 0,
          u = void 0;
        if (i) {
          if ((a = function (e, t) {
              try {
                return e(t)
              } catch (e) {
                return T.error = e, T
              }
            }(o, r)) === T ? (u = !0, s = a.error, a.error = null) : l = !0, n === a) return void x(n, new TypeError("A promises callback cannot return that same promise."))
        } else a = r, l = !0;
        n._state !== E || (i && l ? I(n, a) : u ? x(n, s) : t === k ? O(n, a) : t === C && x(n, a))
      }
      var N = 0;

      function j(e) {
        e[b] = N++, e._state = void 0, e._result = void 0, e._subscribers = []
      }
      var D = function () {
          function e(e, n) {
            this._instanceConstructor = e, this.promise = new e(w), this.promise[b] || j(this.promise), t(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), 0 === this._remaining && O(this.promise, this._result))) : x(this.promise, new Error("Array Methods must be provided an Array"))
          }
          return e.prototype._enumerate = function (e) {
            for (var t = 0; this._state === E && t < e.length; t++) this._eachEntry(e[t], t)
          }, e.prototype._eachEntry = function (e, t) {
            var n = this._instanceConstructor,
              o = n.resolve;
            if (o === _) {
              var r = S(e);
              if (r === y && e._state !== E) this._settledAt(e._state, t, e._result);
              else if ("function" != typeof r) this._remaining--, this._result[t] = e;
              else if (n === V) {
                var i = new n(w);
                A(i, e, r), this._willSettleAt(i, t)
              } else this._willSettleAt(new n(function (t) {
                return t(e)
              }), t)
            } else this._willSettleAt(o(e), t)
          }, e.prototype._settledAt = function (e, t, n) {
            var o = this.promise;
            o._state === E && (this._remaining--, e === C ? x(o, n) : this._result[t] = n), 0 === this._remaining && O(o, this._result)
          }, e.prototype._willSettleAt = function (e, t) {
            var n = this;
            M(e, void 0, function (e) {
              return n._settledAt(k, t, e)
            }, function (e) {
              return n._settledAt(C, t, e)
            })
          }, e
        }(),
        V = function () {
          function t(e) {
            this[b] = N++, this._result = this._state = void 0, this._subscribers = [], w !== e && ("function" != typeof e && function () {
              throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }(), this instanceof t ? function (e, t) {
              try {
                t(function (t) {
                  I(e, t)
                }, function (t) {
                  x(e, t)
                })
              } catch (t) {
                x(e, t)
              }
            }(this, e) : function () {
              throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }())
          }
          return t.prototype.catch = function (e) {
            return this.then(null, e)
          }, t.prototype.finally = function (t) {
            var n = this.constructor;
            return e(t) ? this.then(function (e) {
              return n.resolve(t()).then(function () {
                return e
              })
            }, function (e) {
              return n.resolve(t()).then(function () {
                throw e
              })
            }) : this.then(t, t)
          }, t
        }();
      return V.prototype.then = y, V.all = function (e) {
        return new D(this, e).promise
      }, V.race = function (e) {
        var n = this;
        return t(e) ? new n(function (t, o) {
          for (var r = e.length, i = 0; i < r; i++) n.resolve(e[i]).then(t, o)
        }) : new n(function (e, t) {
          return t(new TypeError("You must pass an array to race."))
        })
      }, V.resolve = _, V.reject = function (e) {
        var t = new this(w);
        return x(t, e), t
      }, V._setScheduler = function (e) {
        a = e
      }, V._setAsap = function (e) {
        l = e
      }, V._asap = l, V.polyfill = function () {
        var e = void 0;
        if (void 0 !== r) e = r;
        else if ("undefined" != typeof self) e = self;
        else try {
          e = Function("return this")()
        } catch (e) {
          throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var t = e.Promise;
        if (t) {
          var n = null;
          try {
            n = Object.prototype.toString.call(t.resolve())
          } catch (e) {}
          if ("[object Promise]" === n && !t.cast) return
        }
        e.Promise = V
      }, V.Promise = V, V
    })
  }).call(this, n(41), n(12))
}, function (e, t, n) {
  "use strict";
  var o, r, i = e.exports = {};

  function a() {
    throw new Error("setTimeout has not been defined")
  }

  function s() {
    throw new Error("clearTimeout has not been defined")
  }

  function l(e) {
    if (o === setTimeout) return setTimeout(e, 0);
    if ((o === a || !o) && setTimeout) return o = setTimeout, setTimeout(e, 0);
    try {
      return o(e, 0)
    } catch (t) {
      try {
        return o.call(null, e, 0)
      } catch (t) {
        return o.call(this, e, 0)
      }
    }
  }! function () {
    try {
      o = "function" == typeof setTimeout ? setTimeout : a
    } catch (e) {
      o = a
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : s
    } catch (e) {
      r = s
    }
  }();
  var u, c = [],
    d = !1,
    f = -1;

  function p() {
    d && u && (d = !1, u.length ? c = u.concat(c) : f = -1, c.length && h())
  }

  function h() {
    if (!d) {
      var e = l(p);
      d = !0;
      for (var t = c.length; t;) {
        for (u = c, c = []; ++f < t;) u && u[f].run();
        f = -1, t = c.length
      }
      u = null, d = !1,
        function (e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
          try {
            r(e)
          } catch (t) {
            try {
              return r.call(null, e)
            } catch (t) {
              return r.call(this, e)
            }
          }
        }(e)
    }
  }

  function v(e, t) {
    this.fun = e, this.array = t
  }

  function m() {}
  i.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    c.push(new v(e, t)), 1 !== c.length || d || l(h)
  }, v.prototype.run = function () {
    this.fun.apply(null, this.array)
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (e) {
    return []
  }, i.binding = function (e) {
    throw new Error("process.binding is not supported")
  }, i.cwd = function () {
    return "/"
  }, i.chdir = function (e) {
    throw new Error("process.chdir is not supported")
  }, i.umask = function () {
    return 0
  }
}, function (e, t, n) {
  "use strict";
  n(43), e.exports = self.fetch.bind(self)
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Headers = u, t.Request = m, t.Response = y, t.fetch = w;
  var o = {
    searchParams: "URLSearchParams" in self,
    iterable: "Symbol" in self && "iterator" in Symbol,
    blob: "FileReader" in self && "Blob" in self && function () {
      try {
        return new Blob, !0
      } catch (e) {
        return !1
      }
    }(),
    formData: "FormData" in self,
    arrayBuffer: "ArrayBuffer" in self
  };
  if (o.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
    i = ArrayBuffer.isView || function (e) {
      return e && r.indexOf(Object.prototype.toString.call(e)) > -1
    };

  function a(e) {
    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
    return e.toLowerCase()
  }

  function s(e) {
    return "string" != typeof e && (e = String(e)), e
  }

  function l(e) {
    var t = {
      next: function () {
        var t = e.shift();
        return {
          done: void 0 === t,
          value: t
        }
      }
    };
    return o.iterable && (t[Symbol.iterator] = function () {
      return t
    }), t
  }

  function u(e) {
    this.map = {}, e instanceof u ? e.forEach(function (e, t) {
      this.append(t, e)
    }, this) : Array.isArray(e) ? e.forEach(function (e) {
      this.append(e[0], e[1])
    }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
      this.append(t, e[t])
    }, this)
  }

  function c(e) {
    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0
  }

  function d(e) {
    return new Promise(function (t, n) {
      e.onload = function () {
        t(e.result)
      }, e.onerror = function () {
        n(e.error)
      }
    })
  }

  function f(e) {
    var t = new FileReader,
      n = d(t);
    return t.readAsArrayBuffer(e), n
  }

  function p(e) {
    if (e.slice) return e.slice(0);
    var t = new Uint8Array(e.byteLength);
    return t.set(new Uint8Array(e)), t.buffer
  }

  function h() {
    return this.bodyUsed = !1, this._initBody = function (e) {
      this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : o.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : o.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : o.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : o.arrayBuffer && o.blob && function (e) {
        return e && DataView.prototype.isPrototypeOf(e)
      }(e) ? (this._bodyArrayBuffer = p(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e)) ? this._bodyArrayBuffer = p(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
    }, o.blob && (this.blob = function () {
      var e = c(this);
      if (e) return e;
      if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      if (this._bodyFormData) throw new Error("could not read FormData body as blob");
      return Promise.resolve(new Blob([this._bodyText]))
    }, this.arrayBuffer = function () {
      return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(f)
    }), this.text = function () {
      var e = c(this);
      if (e) return e;
      if (this._bodyBlob) return function (e) {
        var t = new FileReader,
          n = d(t);
        return t.readAsText(e), n
      }(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
        for (var t = new Uint8Array(e), n = new Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
        return n.join("")
      }(this._bodyArrayBuffer));
      if (this._bodyFormData) throw new Error("could not read FormData body as text");
      return Promise.resolve(this._bodyText)
    }, o.formData && (this.formData = function () {
      return this.text().then(g)
    }), this.json = function () {
      return this.text().then(JSON.parse)
    }, this
  }
  u.prototype.append = function (e, t) {
    e = a(e), t = s(t);
    var n = this.map[e];
    this.map[e] = n ? n + ", " + t : t
  }, u.prototype.delete = function (e) {
    delete this.map[a(e)]
  }, u.prototype.get = function (e) {
    return e = a(e), this.has(e) ? this.map[e] : null
  }, u.prototype.has = function (e) {
    return this.map.hasOwnProperty(a(e))
  }, u.prototype.set = function (e, t) {
    this.map[a(e)] = s(t)
  }, u.prototype.forEach = function (e, t) {
    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
  }, u.prototype.keys = function () {
    var e = [];
    return this.forEach(function (t, n) {
      e.push(n)
    }), l(e)
  }, u.prototype.values = function () {
    var e = [];
    return this.forEach(function (t) {
      e.push(t)
    }), l(e)
  }, u.prototype.entries = function () {
    var e = [];
    return this.forEach(function (t, n) {
      e.push([n, t])
    }), l(e)
  }, o.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
  var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

  function m(e, t) {
    var n = (t = t || {}).body;
    if (e instanceof m) {
      if (e.bodyUsed) throw new TypeError("Already read");
      this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new u(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
    } else this.url = String(e);
    if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new u(t.headers)), this.method = function (e) {
        var t = e.toUpperCase();
        return v.indexOf(t) > -1 ? t : e
      }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(n)
  }

  function g(e) {
    var t = new FormData;
    return e.trim().split("&").forEach(function (e) {
      if (e) {
        var n = e.split("="),
          o = n.shift().replace(/\+/g, " "),
          r = n.join("=").replace(/\+/g, " ");
        t.append(decodeURIComponent(o), decodeURIComponent(r))
      }
    }), t
  }

  function y(e, t) {
    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new u(t.headers), this.url = t.url || "", this._initBody(e)
  }
  m.prototype.clone = function () {
    return new m(this, {
      body: this._bodyInit
    })
  }, h.call(m.prototype), h.call(y.prototype), y.prototype.clone = function () {
    return new y(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new u(this.headers),
      url: this.url
    })
  }, y.error = function () {
    var e = new y(null, {
      status: 0,
      statusText: ""
    });
    return e.type = "error", e
  };
  var _ = [301, 302, 303, 307, 308];
  y.redirect = function (e, t) {
    if (-1 === _.indexOf(t)) throw new RangeError("Invalid status code");
    return new y(null, {
      status: t,
      headers: {
        location: e
      }
    })
  };
  var b = t.DOMException = self.DOMException;
  try {
    new b
  } catch (e) {
    t.DOMException = b = function (e, t) {
      this.message = e, this.name = t;
      var n = Error(e);
      this.stack = n.stack
    }, b.prototype = Object.create(Error.prototype), b.prototype.constructor = b
  }

  function w(e, t) {
    return new Promise(function (n, r) {
      var i = new m(e, t);
      if (i.signal && i.signal.aborted) return r(new b("Aborted", "AbortError"));
      var a = new XMLHttpRequest;

      function s() {
        a.abort()
      }
      a.onload = function () {
        var e = {
          status: a.status,
          statusText: a.statusText,
          headers: function (e) {
            var t = new u;
            return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (e) {
              var n = e.split(":"),
                o = n.shift().trim();
              if (o) {
                var r = n.join(":").trim();
                t.append(o, r)
              }
            }), t
          }(a.getAllResponseHeaders() || "")
        };
        e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
        var t = "response" in a ? a.response : a.responseText;
        n(new y(t, e))
      }, a.onerror = function () {
        r(new TypeError("Network request failed"))
      }, a.ontimeout = function () {
        r(new TypeError("Network request failed"))
      }, a.onabort = function () {
        r(new b("Aborted", "AbortError"))
      }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && o.blob && (a.responseType = "blob"), i.headers.forEach(function (e, t) {
        a.setRequestHeader(t, e)
      }), i.signal && (i.signal.addEventListener("abort", s), a.onreadystatechange = function () {
        4 === a.readyState && i.signal.removeEventListener("abort", s)
      }), a.send(void 0 === i._bodyInit ? null : i._bodyInit)
    })
  }
  w.polyfill = !0, self.fetch || (self.fetch = w, self.Headers = u, self.Request = m, self.Response = y)
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = n(45),
    i = n(46);

  function a() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
  }
  t.parse = b, t.resolve = function (e, t) {
    return b(e, !1, !0).resolve(t)
  }, t.resolveObject = function (e, t) {
    return e ? b(e, !1, !0).resolveObject(t) : t
  }, t.format = function (e) {
    return i.isString(e) && (e = b(e)), e instanceof a ? e.format() : a.prototype.format.call(e)
  }, t.Url = a;
  var s = /^([a-z0-9.+-]+:)/i,
    l = /:[0-9]*$/,
    u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
    d = ["'"].concat(c),
    f = ["%", "/", "?", ";", "#"].concat(d),
    p = ["/", "?", "#"],
    h = /^[+a-z0-9A-Z_-]{0,63}$/,
    v = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    m = {
      javascript: !0,
      "javascript:": !0
    },
    g = {
      javascript: !0,
      "javascript:": !0
    },
    y = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0
    },
    _ = n(47);

  function b(e, t, n) {
    if (e && i.isObject(e) && e instanceof a) return e;
    var o = new a;
    return o.parse(e, t, n), o
  }
  a.prototype.parse = function (e, t, n) {
    if (!i.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + (void 0 === e ? "undefined" : o(e)));
    var a = e.indexOf("?"),
      l = -1 !== a && a < e.indexOf("#") ? "?" : "#",
      c = e.split(l);
    c[0] = c[0].replace(/\\/g, "/");
    var b = e = c.join(l);
    if (b = b.trim(), !n && 1 === e.split("#").length) {
      var w = u.exec(b);
      if (w) return this.path = b, this.href = b, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t ? _.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
    }
    var E = s.exec(b);
    if (E) {
      var k = (E = E[0]).toLowerCase();
      this.protocol = k, b = b.substr(E.length)
    }
    if (n || E || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var C = "//" === b.substr(0, 2);
      !C || E && g[E] || (b = b.substr(2), this.slashes = !0)
    }
    if (!g[E] && (C || E && !y[E])) {
      for (var T, S, A = -1, I = 0; I < p.length; I++) - 1 !== (P = b.indexOf(p[I])) && (-1 === A || P < A) && (A = P);
      for (-1 !== (S = -1 === A ? b.lastIndexOf("@") : b.lastIndexOf("@", A)) && (T = b.slice(0, S), b = b.slice(S + 1), this.auth = decodeURIComponent(T)), A = -1, I = 0; I < f.length; I++) {
        var P; - 1 !== (P = b.indexOf(f[I])) && (-1 === A || P < A) && (A = P)
      } - 1 === A && (A = b.length), this.host = b.slice(0, A), b = b.slice(A), this.parseHost(), this.hostname = this.hostname || "";
      var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!O)
        for (var x = this.hostname.split(/\./), M = (I = 0, x.length); I < M; I++) {
          var L = x[I];
          if (L && !L.match(h)) {
            for (var R = "", N = 0, j = L.length; N < j; N++) L.charCodeAt(N) > 127 ? R += "x" : R += L[N];
            if (!R.match(h)) {
              var D = x.slice(0, I),
                V = x.slice(I + 1),
                q = L.match(v);
              q && (D.push(q[1]), V.unshift(q[2])), V.length && (b = "/" + V.join(".") + b), this.hostname = D.join(".");
              break
            }
          }
        }
      this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = r.toASCII(this.hostname));
      var F = this.port ? ":" + this.port : "",
        U = this.hostname || "";
      this.host = U + F, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
    }
    if (!m[k])
      for (I = 0, M = d.length; I < M; I++) {
        var B = d[I];
        if (-1 !== b.indexOf(B)) {
          var $ = encodeURIComponent(B);
          $ === B && ($ = escape(B)), b = b.split(B).join($)
        }
      }
    var H = b.indexOf("#"); - 1 !== H && (this.hash = b.substr(H), b = b.slice(0, H));
    var z = b.indexOf("?");
    if (-1 !== z ? (this.search = b.substr(z), this.query = b.substr(z + 1), t && (this.query = _.parse(this.query)), b = b.slice(0, z)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), y[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      F = this.pathname || "";
      var G = this.search || "";
      this.path = F + G
    }
    return this.href = this.format(), this
  }, a.prototype.format = function () {
    var e = this.auth || "";
    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
    var t = this.protocol || "",
      n = this.pathname || "",
      o = this.hash || "",
      r = !1,
      a = "";
    this.host ? r = e + this.host : this.hostname && (r = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (a = _.stringify(this.query));
    var s = this.search || a && "?" + a || "";
    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== r ? (r = "//" + (r || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : r || (r = ""), o && "#" !== o.charAt(0) && (o = "#" + o), s && "?" !== s.charAt(0) && (s = "?" + s), t + r + (n = n.replace(/[?#]/g, function (e) {
      return encodeURIComponent(e)
    })) + (s = s.replace("#", "%23")) + o
  }, a.prototype.resolve = function (e) {
    return this.resolveObject(b(e, !1, !0)).format()
  }, a.prototype.resolveObject = function (e) {
    if (i.isString(e)) {
      var t = new a;
      t.parse(e, !1, !0), e = t
    }
    for (var n = new a, o = Object.keys(this), r = 0; r < o.length; r++) {
      var s = o[r];
      n[s] = this[s]
    }
    if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
    if (e.slashes && !e.protocol) {
      for (var l = Object.keys(e), u = 0; u < l.length; u++) {
        var c = l[u];
        "protocol" !== c && (n[c] = e[c])
      }
      return y[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
    }
    if (e.protocol && e.protocol !== n.protocol) {
      if (!y[e.protocol]) {
        for (var d = Object.keys(e), f = 0; f < d.length; f++) {
          var p = d[f];
          n[p] = e[p]
        }
        return n.href = n.format(), n
      }
      if (n.protocol = e.protocol, e.host || g[e.protocol]) n.pathname = e.pathname;
      else {
        for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()););
        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), n.pathname = h.join("/")
      }
      if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
        var v = n.pathname || "",
          m = n.search || "";
        n.path = v + m
      }
      return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }
    var _ = n.pathname && "/" === n.pathname.charAt(0),
      b = e.host || e.pathname && "/" === e.pathname.charAt(0),
      w = b || _ || n.host && e.pathname,
      E = w,
      k = n.pathname && n.pathname.split("/") || [],
      C = (h = e.pathname && e.pathname.split("/") || [], n.protocol && !y[n.protocol]);
    if (C && (n.hostname = "", n.port = null, n.host && ("" === k[0] ? k[0] = n.host : k.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), w = w && ("" === h[0] || "" === k[0])), b) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, k = h;
    else if (h.length) k || (k = []), k.pop(), k = k.concat(h), n.search = e.search, n.query = e.query;
    else if (!i.isNullOrUndefined(e.search)) return C && (n.hostname = n.host = k.shift(), (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(), n.host = n.hostname = P.shift())), n.search = e.search, n.query = e.query, i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
    if (!k.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
    for (var T = k.slice(-1)[0], S = (n.host || e.host || k.length > 1) && ("." === T || ".." === T) || "" === T, A = 0, I = k.length; I >= 0; I--) "." === (T = k[I]) ? k.splice(I, 1) : ".." === T ? (k.splice(I, 1), A++) : A && (k.splice(I, 1), A--);
    if (!w && !E)
      for (; A--; A) k.unshift("..");
    !w || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""), S && "/" !== k.join("/").substr(-1) && k.push("");
    var P, O = "" === k[0] || k[0] && "/" === k[0].charAt(0);
    return C && (n.hostname = n.host = O ? "" : k.length ? k.shift() : "", (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(), n.host = n.hostname = P.shift())), (w = w || n.host && k.length) && !O && k.unshift(""), k.length ? n.pathname = k.join("/") : (n.pathname = null, n.path = null), i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
  }, a.prototype.parseHost = function () {
    var e = this.host,
      t = l.exec(e);
    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
  }
}, function (e, t, n) {
  "use strict";
  (function (e, o) {
    var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function (a) {
      var s = "object" == i(t) && t && !t.nodeType && t,
        l = "object" == i(e) && e && !e.nodeType && e,
        u = "object" == (void 0 === o ? "undefined" : i(o)) && o;
      u.global !== u && u.window !== u && u.self !== u || (a = u);
      var c, d, f = 2147483647,
        p = 36,
        h = 1,
        v = 26,
        m = 38,
        g = 700,
        y = 72,
        _ = 128,
        b = "-",
        w = /^xn--/,
        E = /[^\x20-\x7E]/,
        k = /[\x2E\u3002\uFF0E\uFF61]/g,
        C = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
        T = p - h,
        S = Math.floor,
        A = String.fromCharCode;

      function I(e) {
        throw RangeError(C[e])
      }

      function P(e, t) {
        for (var n = e.length, o = []; n--;) o[n] = t(e[n]);
        return o
      }

      function O(e, t) {
        var n = e.split("@"),
          o = "";
        return n.length > 1 && (o = n[0] + "@", e = n[1]), o + P((e = e.replace(k, ".")).split("."), t).join(".")
      }

      function x(e) {
        for (var t, n, o = [], r = 0, i = e.length; r < i;)(t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < i ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? o.push(((1023 & t) << 10) + (1023 & n) + 65536) : (o.push(t), r--) : o.push(t);
        return o
      }

      function M(e) {
        return P(e, function (e) {
          var t = "";
          return e > 65535 && (t += A((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + A(e)
        }).join("")
      }

      function L(e) {
        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : p
      }

      function R(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
      }

      function N(e, t, n) {
        var o = 0;
        for (e = n ? S(e / g) : e >> 1, e += S(e / t); e > T * v >> 1; o += p) e = S(e / T);
        return S(o + (T + 1) * e / (e + m))
      }

      function j(e) {
        var t, n, o, r, i, a, s, l, u, c, d = [],
          m = e.length,
          g = 0,
          w = _,
          E = y;
        for ((n = e.lastIndexOf(b)) < 0 && (n = 0), o = 0; o < n; ++o) e.charCodeAt(o) >= 128 && I("not-basic"), d.push(e.charCodeAt(o));
        for (r = n > 0 ? n + 1 : 0; r < m;) {
          for (i = g, a = 1, s = p; r >= m && I("invalid-input"), ((l = L(e.charCodeAt(r++))) >= p || l > S((f - g) / a)) && I("overflow"), g += l * a, !(l < (u = s <= E ? h : s >= E + v ? v : s - E)); s += p) a > S(f / (c = p - u)) && I("overflow"), a *= c;
          E = N(g - i, t = d.length + 1, 0 == i), S(g / t) > f - w && I("overflow"), w += S(g / t), g %= t, d.splice(g++, 0, w)
        }
        return M(d)
      }

      function D(e) {
        var t, n, o, r, i, a, s, l, u, c, d, m, g, w, E, k = [];
        for (m = (e = x(e)).length, t = _, n = 0, i = y, a = 0; a < m; ++a)(d = e[a]) < 128 && k.push(A(d));
        for (o = r = k.length, r && k.push(b); o < m;) {
          for (s = f, a = 0; a < m; ++a)(d = e[a]) >= t && d < s && (s = d);
          for (s - t > S((f - n) / (g = o + 1)) && I("overflow"), n += (s - t) * g, t = s, a = 0; a < m; ++a)
            if ((d = e[a]) < t && ++n > f && I("overflow"), d == t) {
              for (l = n, u = p; !(l < (c = u <= i ? h : u >= i + v ? v : u - i)); u += p) E = l - c, w = p - c, k.push(A(R(c + E % w, 0))), l = S(E / w);
              k.push(A(R(l, 0))), i = N(n, g, o == r), n = 0, ++o
            }++ n, ++t
        }
        return k.join("")
      }
      if (c = {
          version: "1.3.2",
          ucs2: {
            decode: x,
            encode: M
          },
          decode: j,
          encode: D,
          toASCII: function (e) {
            return O(e, function (e) {
              return E.test(e) ? "xn--" + D(e) : e
            })
          },
          toUnicode: function (e) {
            return O(e, function (e) {
              return w.test(e) ? j(e.slice(4).toLowerCase()) : e
            })
          }
        }, "object" == i(n(19)) && n(19)) void 0 === (r = function () {
        return c
      }.call(t, n, t, e)) || (e.exports = r);
      else if (s && l)
        if (e.exports == s) l.exports = c;
        else
          for (d in c) c.hasOwnProperty(d) && (s[d] = c[d]);
      else a.punycode = c
    }(void 0)
  }).call(this, n(14)(e), n(12))
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  e.exports = {
    isString: function (e) {
      return "string" == typeof e
    },
    isObject: function (e) {
      return "object" === (void 0 === e ? "undefined" : o(e)) && null !== e
    },
    isNull: function (e) {
      return null === e
    },
    isNullOrUndefined: function (e) {
      return null == e
    }
  }
}, function (e, t, n) {
  "use strict";
  t.decode = t.parse = n(48), t.encode = t.stringify = n(49)
}, function (e, t, n) {
  "use strict";

  function o(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  e.exports = function (e, t, n, i) {
    t = t || "&", n = n || "=";
    var a = {};
    if ("string" != typeof e || 0 === e.length) return a;
    var s = /\+/g;
    e = e.split(t);
    var l = 1e3;
    i && "number" == typeof i.maxKeys && (l = i.maxKeys);
    var u = e.length;
    l > 0 && u > l && (u = l);
    for (var c = 0; c < u; ++c) {
      var d, f, p, h, v = e[c].replace(s, "%20"),
        m = v.indexOf(n);
      m >= 0 ? (d = v.substr(0, m), f = v.substr(m + 1)) : (d = v, f = ""), p = decodeURIComponent(d), h = decodeURIComponent(f), o(a, p) ? r(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
    }
    return a
  };
  var r = Array.isArray || function (e) {
    return "[object Array]" === Object.prototype.toString.call(e)
  }
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = function (e) {
      switch (void 0 === e ? "undefined" : o(e)) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return ""
      }
    };
  e.exports = function (e, t, n, l) {
    return t = t || "&", n = n || "=", null === e && (e = void 0), "object" === (void 0 === e ? "undefined" : o(e)) ? a(s(e), function (o) {
      var s = encodeURIComponent(r(o)) + n;
      return i(e[o]) ? a(e[o], function (e) {
        return s + encodeURIComponent(r(e))
      }).join(t) : s + encodeURIComponent(r(e[o]))
    }).join(t) : l ? encodeURIComponent(r(l)) + n + encodeURIComponent(r(e)) : ""
  };
  var i = Array.isArray || function (e) {
    return "[object Array]" === Object.prototype.toString.call(e)
  };

  function a(e, t) {
    if (e.map) return e.map(t);
    for (var n = [], o = 0; o < e.length; o++) n.push(t(e[o], o));
    return n
  }
  var s = Object.keys || function (e) {
    var t = [];
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
    return t
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(1)),
    i = new(function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return o(e, [{
        key: "get",
        value: function (e, t) {
          r.default.get({
            url: "/resources/gulp-dest/rev/rev-manifest.json",
            selectMethod: "GET",
            request: {}
          }, function (n, o) {
            var r = o[e];
            r || (r = e), "function" == typeof t && t(r)
          }, null, !0)
        }
      }]), e
    }());
  t.default = i
}, function (e, t, n) {
  "use strict";
  var o = n(52),
    r = n(53),
    i = n(77),
    a = n(15);
  e.exports = function (e, t) {
    return (a(e) ? o : r)(e, i(t))
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t) {
    for (var n = -1, o = null == e ? 0 : e.length; ++n < o && !1 !== t(e[n], n, e););
    return e
  }
}, function (e, t, n) {
  "use strict";
  var o = n(54),
    r = n(76)(o);
  e.exports = r
}, function (e, t, n) {
  "use strict";
  var o = n(55),
    r = n(57);
  e.exports = function (e, t) {
    return e && o(e, t, r)
  }
}, function (e, t, n) {
  "use strict";
  var o = n(56)();
  e.exports = o
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return function (t, n, o) {
      for (var r = -1, i = Object(t), a = o(t), s = a.length; s--;) {
        var l = a[e ? s : ++r];
        if (!1 === n(i[l], l, i)) break
      }
      return t
    }
  }
}, function (e, t, n) {
  "use strict";
  var o = n(58),
    r = n(71),
    i = n(27);
  e.exports = function (e) {
    return i(e) ? o(e) : r(e)
  }
}, function (e, t, n) {
  "use strict";
  var o = n(59),
    r = n(60),
    i = n(15),
    a = n(64),
    s = n(66),
    l = n(67),
    u = Object.prototype.hasOwnProperty;
  e.exports = function (e, t) {
    var n = i(e),
      c = !n && r(e),
      d = !n && !c && a(e),
      f = !n && !c && !d && l(e),
      p = n || c || d || f,
      h = p ? o(e.length, String) : [],
      v = h.length;
    for (var m in e) !t && !u.call(e, m) || p && ("length" == m || d && ("offset" == m || "parent" == m) || f && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || s(m, v)) || h.push(m);
    return h
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t) {
    for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n);
    return o
  }
}, function (e, t, n) {
  "use strict";
  var o = n(61),
    r = n(11),
    i = Object.prototype,
    a = i.hasOwnProperty,
    s = i.propertyIsEnumerable,
    l = o(function () {
      return arguments
    }()) ? o : function (e) {
      return r(e) && a.call(e, "callee") && !s.call(e, "callee")
    };
  e.exports = l
}, function (e, t, n) {
  "use strict";
  var o = n(10),
    r = n(11);
  e.exports = function (e) {
    return r(e) && "[object Arguments]" == o(e)
  }
}, function (e, t, n) {
  "use strict";
  var o = n(20),
    r = Object.prototype,
    i = r.hasOwnProperty,
    a = r.toString,
    s = o ? o.toStringTag : void 0;
  e.exports = function (e) {
    var t = i.call(e, s),
      n = e[s];
    try {
      e[s] = void 0;
      var o = !0
    } catch (e) {}
    var r = a.call(e);
    return o && (t ? e[s] = n : delete e[s]), r
  }
}, function (e, t, n) {
  "use strict";
  var o = Object.prototype.toString;
  e.exports = function (e) {
    return o.call(e)
  }
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      r = n(23),
      i = n(65),
      a = "object" == o(t) && t && !t.nodeType && t,
      s = a && "object" == o(e) && e && !e.nodeType && e,
      l = s && s.exports === a ? r.Buffer : void 0,
      u = (l ? l.isBuffer : void 0) || i;
    e.exports = u
  }).call(this, n(14)(e))
}, function (e, t, n) {
  "use strict";
  e.exports = function () {
    return !1
  }
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = /^(?:0|[1-9]\d*)$/;
  e.exports = function (e, t) {
    var n = void 0 === e ? "undefined" : o(e);
    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
  }
}, function (e, t, n) {
  "use strict";
  var o = n(68),
    r = n(69),
    i = n(70),
    a = i && i.isTypedArray,
    s = a ? r(a) : o;
  e.exports = s
}, function (e, t, n) {
  "use strict";
  var o = n(10),
    r = n(25),
    i = n(11),
    a = {};
  a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) {
    return i(e) && r(e.length) && !!a[o(e)]
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return function (t) {
      return e(t)
    }
  }
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      r = n(24),
      i = "object" == o(t) && t && !t.nodeType && t,
      a = i && "object" == o(e) && e && !e.nodeType && e,
      s = a && a.exports === i && r.process,
      l = function () {
        try {
          return a && a.require && a.require("util").types || s && s.binding && s.binding("util")
        } catch (e) {}
      }();
    e.exports = l
  }).call(this, n(14)(e))
}, function (e, t, n) {
  "use strict";
  var o = n(72),
    r = n(73),
    i = Object.prototype.hasOwnProperty;
  e.exports = function (e) {
    if (!o(e)) return r(e);
    var t = [];
    for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
    return t
  }
}, function (e, t, n) {
  "use strict";
  var o = Object.prototype;
  e.exports = function (e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || o)
  }
}, function (e, t, n) {
  "use strict";
  var o = n(26)(Object.keys, Object);
  e.exports = o
}, function (e, t, n) {
  "use strict";
  var o = n(10),
    r = n(75);
  e.exports = function (e) {
    if (!r(e)) return !1;
    var t = o(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
  }
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  e.exports = function (e) {
    var t = void 0 === e ? "undefined" : o(e);
    return null != e && ("object" == t || "function" == t)
  }
}, function (e, t, n) {
  "use strict";
  var o = n(27);
  e.exports = function (e, t) {
    return function (n, r) {
      if (null == n) return n;
      if (!o(n)) return e(n, r);
      for (var i = n.length, a = t ? i : -1, s = Object(n);
        (t ? a-- : ++a < i) && !1 !== r(s[a], a, s););
      return n
    }
  }
}, function (e, t, n) {
  "use strict";
  var o = n(78);
  e.exports = function (e) {
    return "function" == typeof e ? e : o
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return e
  }
}, function (e, t, n) {
  "use strict";
  var o = n(10),
    r = n(80),
    i = n(11),
    a = Function.prototype,
    s = Object.prototype,
    l = a.toString,
    u = s.hasOwnProperty,
    c = l.call(Object);
  e.exports = function (e) {
    if (!i(e) || "[object Object]" != o(e)) return !1;
    var t = r(e);
    if (null === t) return !0;
    var n = u.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && l.call(n) == c
  }
}, function (e, t, n) {
  "use strict";
  var o = n(26)(Object.getPrototypeOf, Object);
  e.exports = o
}, function (e, t, n) {
  "use strict";
  var o = n(82),
    r = n(93)(function (e, t, n) {
      return t = t.toLowerCase(), e + (n ? o(t) : t)
    });
  e.exports = r
}, function (e, t, n) {
  "use strict";
  var o = n(16),
    r = n(86);
  e.exports = function (e) {
    return r(o(e).toLowerCase())
  }
}, function (e, t, n) {
  "use strict";
  var o = n(20),
    r = n(84),
    i = n(15),
    a = n(85),
    s = o ? o.prototype : void 0,
    l = s ? s.toString : void 0;
  e.exports = function e(t) {
    if ("string" == typeof t) return t;
    if (i(t)) return r(t, e) + "";
    if (a(t)) return l ? l.call(t) : "";
    var n = t + "";
    return "0" == n && 1 / t == -1 / 0 ? "-0" : n
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t) {
    for (var n = -1, o = null == e ? 0 : e.length, r = Array(o); ++n < o;) r[n] = t(e[n], n, e);
    return r
  }
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = n(10),
    i = n(11);
  e.exports = function (e) {
    return "symbol" == (void 0 === e ? "undefined" : o(e)) || i(e) && "[object Symbol]" == r(e)
  }
}, function (e, t, n) {
  "use strict";
  var o = n(87)("toUpperCase");
  e.exports = o
}, function (e, t, n) {
  "use strict";
  var o = n(88),
    r = n(28),
    i = n(90),
    a = n(16);
  e.exports = function (e) {
    return function (t) {
      t = a(t);
      var n = r(t) ? i(t) : void 0,
        s = n ? n[0] : t.charAt(0),
        l = n ? o(n, 1).join("") : t.slice(1);
      return s[e]() + l
    }
  }
}, function (e, t, n) {
  "use strict";
  var o = n(89);
  e.exports = function (e, t, n) {
    var r = e.length;
    return n = void 0 === n ? r : n, !t && n >= r ? e : o(e, t, n)
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t, n) {
    var o = -1,
      r = e.length;
    t < 0 && (t = -t > r ? 0 : r + t), (n = n > r ? r : n) < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
    for (var i = Array(r); ++o < r;) i[o] = e[o + t];
    return i
  }
}, function (e, t, n) {
  "use strict";
  var o = n(91),
    r = n(28),
    i = n(92);
  e.exports = function (e) {
    return r(e) ? i(e) : o(e)
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return e.split("")
  }
}, function (e, t, n) {
  "use strict";
  var o = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    r = "\\ud83c[\\udffb-\\udfff]",
    i = "[^\\ud800-\\udfff]",
    a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    l = "(?:" + o + "|" + r + ")?",
    u = "[\\ufe0e\\ufe0f]?" + l + "(?:\\u200d(?:" + [i, a, s].join("|") + ")[\\ufe0e\\ufe0f]?" + l + ")*",
    c = "(?:" + [i + o + "?", o, a, s, "[\\ud800-\\udfff]"].join("|") + ")",
    d = RegExp(r + "(?=" + r + ")|" + c + u, "g");
  e.exports = function (e) {
    return e.match(d) || []
  }
}, function (e, t, n) {
  "use strict";
  var o = n(94),
    r = n(95),
    i = n(98),
    a = RegExp("['’]", "g");
  e.exports = function (e) {
    return function (t) {
      return o(i(r(t).replace(a, "")), e, "")
    }
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t, n, o) {
    var r = -1,
      i = null == e ? 0 : e.length;
    for (o && i && (n = e[++r]); ++r < i;) n = t(n, e[r], r, e);
    return n
  }
}, function (e, t, n) {
  "use strict";
  var o = n(96),
    r = n(16),
    i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
  e.exports = function (e) {
    return (e = r(e)) && e.replace(i, o).replace(a, "")
  }
}, function (e, t, n) {
  "use strict";
  var o = n(97)({
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "Ç": "C",
    "ç": "c",
    "Ð": "D",
    "ð": "d",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "Ñ": "N",
    "ñ": "n",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "Ý": "Y",
    "ý": "y",
    "ÿ": "y",
    "Æ": "Ae",
    "æ": "ae",
    "Þ": "Th",
    "þ": "th",
    "ß": "ss",
    "Ā": "A",
    "Ă": "A",
    "Ą": "A",
    "ā": "a",
    "ă": "a",
    "ą": "a",
    "Ć": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "Ď": "D",
    "Đ": "D",
    "ď": "d",
    "đ": "d",
    "Ē": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ę": "E",
    "Ě": "E",
    "ē": "e",
    "ĕ": "e",
    "ė": "e",
    "ę": "e",
    "ě": "e",
    "Ĝ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ģ": "G",
    "ĝ": "g",
    "ğ": "g",
    "ġ": "g",
    "ģ": "g",
    "Ĥ": "H",
    "Ħ": "H",
    "ĥ": "h",
    "ħ": "h",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "Į": "I",
    "İ": "I",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "į": "i",
    "ı": "i",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "ĸ": "k",
    "Ĺ": "L",
    "Ļ": "L",
    "Ľ": "L",
    "Ŀ": "L",
    "Ł": "L",
    "ĺ": "l",
    "ļ": "l",
    "ľ": "l",
    "ŀ": "l",
    "ł": "l",
    "Ń": "N",
    "Ņ": "N",
    "Ň": "N",
    "Ŋ": "N",
    "ń": "n",
    "ņ": "n",
    "ň": "n",
    "ŋ": "n",
    "Ō": "O",
    "Ŏ": "O",
    "Ő": "O",
    "ō": "o",
    "ŏ": "o",
    "ő": "o",
    "Ŕ": "R",
    "Ŗ": "R",
    "Ř": "R",
    "ŕ": "r",
    "ŗ": "r",
    "ř": "r",
    "Ś": "S",
    "Ŝ": "S",
    "Ş": "S",
    "Š": "S",
    "ś": "s",
    "ŝ": "s",
    "ş": "s",
    "š": "s",
    "Ţ": "T",
    "Ť": "T",
    "Ŧ": "T",
    "ţ": "t",
    "ť": "t",
    "ŧ": "t",
    "Ũ": "U",
    "Ū": "U",
    "Ŭ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ų": "U",
    "ũ": "u",
    "ū": "u",
    "ŭ": "u",
    "ů": "u",
    "ű": "u",
    "ų": "u",
    "Ŵ": "W",
    "ŵ": "w",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Ź": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "ź": "z",
    "ż": "z",
    "ž": "z",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Œ": "Oe",
    "œ": "oe",
    "ŉ": "'n",
    "ſ": "s"
  });
  e.exports = o
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return function (t) {
      return null == e ? void 0 : e[t]
    }
  }
}, function (e, t, n) {
  "use strict";
  var o = n(99),
    r = n(100),
    i = n(16),
    a = n(101);
  e.exports = function (e, t, n) {
    return e = i(e), void 0 === (t = n ? void 0 : t) ? r(e) ? a(e) : o(e) : e.match(t) || []
  }
}, function (e, t, n) {
  "use strict";
  var o = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  e.exports = function (e) {
    return e.match(o) || []
  }
}, function (e, t, n) {
  "use strict";
  var o = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  e.exports = function (e) {
    return o.test(e)
  }
}, function (e, t, n) {
  "use strict";
  var o = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    r = "[" + o + "]",
    i = "\\d+",
    a = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
    s = "[^\\ud800-\\udfff" + o + i + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
    l = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    c = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
    d = "(?:" + a + "|" + s + ")",
    f = "(?:" + c + "|" + s + ")",
    p = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
    h = "[\\ufe0e\\ufe0f]?" + p + "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", l, u].join("|") + ")[\\ufe0e\\ufe0f]?" + p + ")*",
    v = "(?:" + ["[\\u2700-\\u27bf]", l, u].join("|") + ")" + h,
    m = RegExp([c + "?" + a + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [r, c, "$"].join("|") + ")", f + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [r, c + d, "$"].join("|") + ")", c + "?" + d + "+(?:['’](?:d|ll|m|re|s|t|ve))?", c + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", i, v].join("|"), "g");
  e.exports = function (e) {
    return e.match(m) || []
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = s(n(4)),
    i = s(n(1)),
    a = s(n(0));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function (e) {
      function t() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var e = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.MESSAGE_CENTER_BTN_CLICK_EVENT = "messageCenterDialog.messageCenterBtnClickEvent", e
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, r.default), o(t, [{
        key: "show",
        value: function () {
          var e = function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this),
            n = d();
          c(n += "LTWEB00.json", function (t) {
            if (t && t.id) {
              var n = localStorage.getItem("message_center");
              if (n && (n = JSON.parse(n)), n && n.id == t.id) {
                if ("error" == t.level) {
                  var o = (new Date).getTime();
                  if (o - sessionStorage.getItem("notice_time") >= 6e4) {
                    var r = {};
                    r.dialogTitle = t.title, r.dialogHtml = f(t), e.call(p, r), $(".alert_module").addClass("messageCenter"), u(), sessionStorage.setItem("notice_time", o)
                  }
                }
              } else {
                var i = (new Date).getTime(),
                  a = {};
                a.dialogTitle = t.title, a.dialogHtml = f(t), e.call(p, a), $(".alert_module").addClass("messageCenter"), u(), localStorage.setItem("message_center", JSON.stringify(t)), sessionStorage.setItem("notice_time", i)
              }
            }
          })
        }
      }]), t
    }(),
    u = function () {
      $(".alert_box .message_center_dialog").find("btn").click(function (e) {
        a.default.emit(p.MESSAGE_CENTER_BTN_CLICK_EVENT)
      })
    },
    c = function (e, t) {
      var n = {
        url: e,
        selectMethod: "GET"
      };
      i.default.get(n, function (e, n) {
        t(n)
      }, null, !0)
    },
    d = function () {
      var e = Math.floor(Math.random() * BulletinProfileUrls.length);
      return BulletinProfileUrls[e]
    },
    f = function (e) {
      var t = new Array;
      return t.push("<div class='message_center_dialog'>"), t.push("\t<div class='message'>" + e.message + "</div>"), t.push("\t<img class='img' src='" + d() + e.img + "' />"), t.push("\t<a class='btn' target='_self' href='" + e.uri + "'>" + e.uri_caption + "</>"), t.push("</div>"), t.join("")
    },
    p = new l;
  t.default = p
}, function (e, t, n) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };

  function r() {
    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
  }

  function i(e) {
    return "function" == typeof e
  }

  function a(e) {
    return "object" === (void 0 === e ? "undefined" : o(e)) && null !== e
  }

  function s(e) {
    return void 0 === e
  }
  e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function (e) {
    if (! function (e) {
        return "number" == typeof e
      }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
    return this._maxListeners = e, this
  }, r.prototype.emit = function (e) {
    var t, n, o, r, l, u;
    if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
      if ((t = arguments[1]) instanceof Error) throw t;
      var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
      throw c.context = t, c
    }
    if (s(n = this._events[e])) return !1;
    if (i(n)) switch (arguments.length) {
      case 1:
        n.call(this);
        break;
      case 2:
        n.call(this, arguments[1]);
        break;
      case 3:
        n.call(this, arguments[1], arguments[2]);
        break;
      default:
        r = Array.prototype.slice.call(arguments, 1), n.apply(this, r)
    } else if (a(n))
      for (r = Array.prototype.slice.call(arguments, 1), o = (u = n.slice()).length, l = 0; l < o; l++) u[l].apply(this, r);
    return !0
  }, r.prototype.addListener = function (e, t) {
    var n;
    if (!i(t)) throw TypeError("listener must be a function");
    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (n = s(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
  }, r.prototype.on = r.prototype.addListener, r.prototype.once = function (e, t) {
    if (!i(t)) throw TypeError("listener must be a function");
    var n = !1;

    function o() {
      this.removeListener(e, o), n || (n = !0, t.apply(this, arguments))
    }
    return o.listener = t, this.on(e, o), this
  }, r.prototype.removeListener = function (e, t) {
    var n, o, r, s;
    if (!i(t)) throw TypeError("listener must be a function");
    if (!this._events || !this._events[e]) return this;
    if (r = (n = this._events[e]).length, o = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
    else if (a(n)) {
      for (s = r; s-- > 0;)
        if (n[s] === t || n[s].listener && n[s].listener === t) {
          o = s;
          break
        } if (o < 0) return this;
      1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
    }
    return this
  }, r.prototype.removeAllListeners = function (e) {
    var t, n;
    if (!this._events) return this;
    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
    if (0 === arguments.length) {
      for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
      return this.removeAllListeners("removeListener"), this._events = {}, this
    }
    if (i(n = this._events[e])) this.removeListener(e, n);
    else if (n)
      for (; n.length;) this.removeListener(e, n[n.length - 1]);
    return delete this._events[e], this
  }, r.prototype.listeners = function (e) {
    return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
  }, r.prototype.listenerCount = function (e) {
    if (this._events) {
      var t = this._events[e];
      if (i(t)) return 1;
      if (t) return t.length
    }
    return 0
  }, r.listenerCount = function (e, t) {
    return e.listenerCount(t)
  }
}, function (e, t) {
  e.exports = function () {
    throw new Error("define cannot be used indirect")
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = s(n(1)),
    r = s(n(6)),
    i = s(n(0)),
    a = s(n(2));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = {
      SHOW: "rightFloatPoster.Show",
      DISMISS: "rightFloatPoster.Dismiss",
      CLICK: "rightFloatPoster.Click"
    },
    u = new function () {
      var e = this;
      e.EVENT = a.default.extend({}, l);
      var t = null,
        n = null,
        s = new Promise(function (e, t) {
          e()
        });
      this.show = function () {
        e.dismiss(), s = (s = (s = (s = (s = (s = s.then(g)).then(m)).then(f)).then(u)).then(c)).then(d)
      }, this.dismiss = function () {
        if (e.config) {
          var t = $(".right_float_poster_container"),
            n = e.config,
            o = n.items,
            r = t.attr("data-item-id"),
            a = o[r],
            s = n.type;
          t.remove(), e.config = null, i.default.emit(e.EVENT.DISMISS, e, {
            index: r,
            item: a,
            type: s
          })
        }
      };
      var u = function () {
          var t = e.config;
          if (t) {
            var n = $(".right_float_poster_container"),
              o = n.find(".right_float_poster_exit_icon");
            n.click(function (o) {
              var r = n.attr("data-item-id"),
                a = t.items[r],
                s = t.type;
              i.default.emit(e.EVENT.CLICK, e, {
                index: r,
                item: a,
                type: s
              })
            }), o.click(function (t) {
              t.preventDefault(), t.stopPropagation(), e.dismiss()
            })
          }
        },
        c = function () {
          var t = e.config;
          if (t) {
            var n = $(".right_float_poster_container"),
              o = 0,
              r = "center";
            t.margin && (o = t.margin), t.position && (r = t.position), n.attr("data-position", r), o && ("top" != r && "bottom" != r || n.css(r, o))
          }
        },
        d = function () {
          var n = e.config;
          if (n) {
            var o = n.duration;
            o && (clearTimeout(t), t = setTimeout(function () {
              e.dismiss()
            }, o))
          }
        },
        f = function () {
          var t = e.config;
          if (t) {
            if ($(".right_float_poster_container").length <= 0) {
              var n = $("body"),
                o = v(t);
              n.append(o)
            }
            s = (s = s.then(h)).then(p)
          }
        },
        p = function () {
          var t = e.config;
          if (t) {
            var o = $(".right_float_poster_container"),
              r = t.items,
              i = t.refresh;
            r.length > 1 && (i || (i = 5e3), clearTimeout(n), n = setTimeout(function () {
              var e = o.attr("data-item-id");
              e >= r.length - 1 ? e = 0 : e++, r[e], o.attr("data-item-id", e), f()
            }, i))
          }
        },
        h = function () {
          return new Promise(function (t, n) {
            var o = e.config,
              r = $(".right_float_poster_container"),
              a = o.items,
              s = r.attr("data-item-id"),
              l = a[s];
            l.clickUrl && r.attr("href", l.clickUrl);
            var u = null;
            $(window).width() > 1024 ? l.imgUrl && (u = l.imgUrl, o.type = "imgUrl") : l.mImgUrl && (u = l.mImgUrl, o.type = "mImgUrl");
            var c = r.find(".right_float_poster_img");
            if (u && o.type) {
              var d = new Image;
              r.removeClass("hide"), c.attr("src", u), d.src = c.attr("src"), d.onload = function () {
                i.default.emit(e.EVENT.SHOW, e, {
                  index: s,
                  item: l,
                  type: o.type
                }), t()
              }, d.onerror = function () {
                n("setImgAndClick fail.")
              }
            } else r.addClass("hide"), c.removeAttr("src"), t()
          })
        },
        v = function () {
          var t = e.config,
            n = new Array;
          return t.className ? n.push("<a class='right_float_poster_container " + t.className + "' data-item-id='0' target='_blank'>") : n.push("<a class='right_float_poster_container' data-item-id='0' target='_blank'>"), n.push("<img class='right_float_poster_img'>"), 0 != t.closeBtn && n.push("<div class='right_float_poster_exit_icon'></div>"), n.push("</a>"), n.join("")
        },
        m = function (t) {
          var n = r.default.getDetail().pathname,
            o = t.paths,
            i = t.keys[o[n]];
          i && (e.config = i)
        },
        g = function () {
          return new Promise(function (e, t) {
            o.default.get({
              type: "GET",
              url: "/service/ajax/getRFPosterConfig",
              request: {}
            }, function (t, n) {
              e(n)
            }, function () {
              t("getRFPosterConfig fail.")
            }, !0)
          })
        }
    };
  u.show(), t.default = u
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = c(n(107)),
    i = c(n(4)),
    a = c(n(8)),
    s = c(n(34)),
    l = c(n(0)),
    u = c(n(35));

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var d = function (e) {
      function t() {
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, i.default), o(t, [{
        key: "show",
        value: function (e) {
          (e = e || {}).dialogTitle = "<div class='register_dialog_title'>註冊</div>", e.dialogHtml = r.default.getHtml(),
            function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("register");
          var n = $(".alert_box .register_view");
          f(n, e), h(n, e), r.default.setContent(n, e), r.default.setAction(n, e), p.init(n), ga("send", "event", "account", "pageview", "register")
        }
      }]), t
    }(),
    f = function (e, t) {
      (0, u.default)("register", t.descKey, e.find(".register_hint"))
    },
    p = new function () {
      var e = this,
        t = null;
      this.init = function (n) {
        t = n, l.default.off(r.default.REGISTER_SUCCESS_EVENT, e.succ), l.default.off(r.default.REGISTER_FAIL_EVENT, e.fail), l.default.off(v.DIALOG_DISMISS_EVENT, e.end), l.default.on(r.default.REGISTER_SUCCESS_EVENT, e.succ), l.default.on(r.default.REGISTER_FAIL_EVENT, e.fail), l.default.on(v.DIALOG_DISMISS_EVENT, e.end)
      }, this.succ = function (e) {
        v.dismiss(), s.default.show(e)
      }, this.fail = function () {
        t.parent(".alert_content").scrollTop(0)
      }, this.end = function () {
        t = null, l.default.off(r.default.REGISTER_SUCCESS_EVENT, e.succ), l.default.off(r.default.REGISTER_FAIL_EVENT, e.fail), l.default.off(v.DIALOG_DISMISS_EVENT, e.end)
      }
    },
    h = function (e, t) {
      e.find(".back_login_btn").click(function (e) {
        v.dismiss(), a.default.show(t)
      })
    },
    v = new d;
  t.default = v
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = a(n(0)),
    i = a(n(17));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.REGISTER_SUCCESS_EVENT = "registerCommon.registerSuccessEvent", this.REGISTER_FAIL_EVENT = "registerCommon.registerFailEvent"
      }
      return o(e, [{
        key: "getHtml",
        value: function () {
          var e = new Array;
          e.push("<div class='register_view'>"), e.push("\t<form class='register_form' method='get' action='/member/ajax/register.do'>"), e.push("\t\t<div class='register_hint'></div>"), e.push("\t\t<div class='error_message'></div>"), e.push("\t\t<div class='id_text'>手機號碼</div>"), e.push("\t\t<input type='tel' name='username' class='id_input' placeholder='請輸入手機號碼' maxlength=10 />"), e.push("\t\t<div class='id_hint'>手機號碼必填</div>"), e.push("\t\t<div class='year_sex_section'>"), e.push("\t\t\t<div class='year_section'>"), e.push("\t\t\t\t<div class='year_text'>出生年(西元)</div>"), e.push("\t\t\t\t<select class='year_selector' name='bornYear'>");
          for (var t = (new Date).getFullYear(), n = t - 100, o = n; o < t; o++) o == n ? (e.push("<option value=''></option>"), e.push("<option value='" + o + "'>" + o + "及更早</option>")) : e.push("<option value='" + o + "'>" + o + "</option>");
          return e.push("\t\t\t\t</select>"), e.push("\t\t\t\t<div class='bornYear_hint'>請選擇出生年</div>"), e.push("\t\t\t</div>"), e.push("\t\t\t<div class='sex_section'>"), e.push("\t\t\t\t<div class='sex_text'>性別</div>"), e.push("\t\t\t\t<div class='sex_selector_section'>"), e.push("\t\t\t\t\t<div class='radio_section'>"), e.push("\t\t\t\t\t\t<input id='male_radio_btn' class='sex_radio_btn' type='radio' name='sex' value='male'/>"), e.push("\t\t\t\t\t\t<input id='female_radio_btn' class='sex_radio_btn' type='radio' name='sex' value='female'/>"), e.push("\t\t\t\t\t</div>"), e.push("\t\t\t\t\t<div class='btn_section'>"), e.push("\t\t\t\t\t\t<label for='male_radio_btn' class='man sex_btn'>男生</label>"), e.push("\t\t\t\t\t\t<label for='female_radio_btn' class='female sex_btn'>女生</label>"), e.push("\t\t\t\t\t</div>"), e.push("\t\t\t\t</div>"), e.push("\t\t\t\t<div class='sex_hint'>請選擇性別</div>"), e.push("\t\t\t</div>"), e.push("\t\t</div>"), e.push("\t\t<div class='verify_code_text'>驗證碼</div>"), e.push("\t\t<input type='text' name='code' class='verify_code_input' placeholder='請輸入下方驗證碼' maxlength=4 />"), e.push("\t\t<div class='verify_code_hint'>驗證碼必填</div>"), e.push("\t\t<div class='verify_image_section'>"), e.push("\t\t\t<img class='verfy_image' src='/code/captcha-image?85'>"), e.push("\t\t\t<div class='image_refresh'>重新產生驗證碼</div>"), e.push("\t\t</div>"), e.push("\t\t<div class='agreement_section'>"), e.push("\t\t\t<div class='agree_contract_text'>"), e.push("\t\t\t註冊即表示同意 LiTV <a class='agree_contract' href='/contract.do' target='_blank'>服務條款</a> 與訂閱優惠資訊"), e.push("\t\t\t</div>"), e.push("\t\t</div>"), e.push("\t    <input type='submit' class='register_btn' value='註冊' />"), e.push("\t\t<div class='register_promote_title'>已經是會員了？<span class='back_login_btn'>由此登入</span></div>"), e.push("\t</form>"), e.push("</div>"), e.join("")
        }
      }, {
        key: "setContent",
        value: function (e, t) {
          t.user && (t.user.username && e.find(".id_input").val(t.user.username), t.user.bornYear && e.find(".year_selector").val(t.user.bornYear), t.user.sex && (e.find(".sex_radio_btn[value=" + t.user.sex + "]").prop("checked", !0), e.find(".sex_selector_section .btn_section .sex_btn").removeClass("active"), "male" == t.user.sex ? e.find(".sex_selector_section .btn_section .man.sex_btn").addClass("active") : "female" == t.user.sex && e.find(".sex_selector_section .btn_section .female.sex_btn").addClass("active")))
        }
      }, {
        key: "setAction",
        value: function (e) {
          e.find(".register_form").submit(function (t) {
            t.preventDefault(), l(e)
          });
          var t = e.find(".sex_btn");
          t.click(function (n) {
            t.removeClass("active");
            var o = e.find(n.target);
            o.addClass("active"), 1 == o.hasClass("man") ? e.find(".sex_selector_section .radio_section .sex_radio_btn[value=male]").prop("checked", !0) : 1 == o.hasClass("female") && e.find(".sex_selector_section .radio_section .sex_radio_btn[value=female]").prop("checked", !0)
          }), e.find(".id_input").keydown(function (e) {
            return 8 == e.keyCode || e.keyCode >= 46 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || 9 == e.keyCode || 37 == e.keyCode || 39 == e.keyCode
          }), e.find(".image_refresh").click(function (t) {
            var n = e.find(".verfy_image");
            n.hide(), n.attr("src", "/code/captcha-image?" + Math.floor(100 * Math.random())), n.fadeIn()
          })
        }
      }]), e
    }(),
    l = function (e) {
      if (1 == u(e)) {
        var t = e.find(".register_form"),
          n = t.attr("action"),
          o = t.attr("method"),
          a = sessionStorage.getItem("register_sponsor");
        if (a && (a = atob(a)), 0 == i.default.isRunning) {
          var s = {
            username: t.find(".id_input").val(),
            bornYear: t.find(".year_selector").val(),
            sex: t.find(".sex_radio_btn:checked").val(),
            code: t.find(".verify_code_input").val()
          };
          a && (s.sponsor_name = a), console.log(s);
          var l = {
            action: n,
            method: o,
            data: {
              jsonStr: JSON.stringify(s)
            }
          };
          i.default.set(l, function (t, n) {
            var o = {},
              i = !1;
            if (n.length > 0)
              for (var a = 0; a < n.length; a++)
                for (var l in n[a])
                  if (3 != l) {
                    var u = e.find(".error_message");
                    u.append("<div>" + n[a][l] + "</div>"), u.addClass("active"), i = !0
                  } else o.msg = n[a][l];
            i ? r.default.emit(c.REGISTER_FAIL_EVENT) : (ga("send", "event", "account", "registered", "complete_register"), o.user = s, r.default.emit(c.REGISTER_SUCCESS_EVENT, o))
          }, function (e) {
            r.default.emit(c.REGISTER_FAIL_EVENT)
          })
        }
      }
    },
    u = function (e) {
      var t = e.find(".error_message");
      t.html(""), t.removeClass("active");
      var n = e.find(".id_input"),
        o = e.find(".id_hint"),
        r = e.find(".verify_code_input"),
        i = e.find(".verify_code_hint"),
        a = e.find(".year_selector"),
        s = e.find(".bornYear_hint"),
        l = a.find("option"),
        u = e.find(".sex_radio_btn"),
        c = e.find(".sex_hint"),
        d = !0;
      n.removeClass("highlight"), o.removeClass("active"), r.removeClass("highlight"), i.removeClass("active"), a.removeClass("highlight"), s.removeClass("active"), u.removeClass("highlight"), c.removeClass("active"), n.val() || (n.addClass("highlight"), o.addClass("active"), d = !1), r.val() || (r.addClass("highlight"), i.addClass("active"), d = !1), l.prop("selected") && (a.addClass("highlight"), s.addClass("active"), d = !1);
      for (var f = !1, p = 0; p < u.length; p++) $(u[p]).prop("checked") && (f = !0);
      return f || (u.addClass("highlight"), c.addClass("active"), d = !1), d
    },
    c = new s;
  t.default = c
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    i = l(n(17)),
    a = l(n(109)),
    s = l(n(0));

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var u = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.PASSCODE_SUCCESS_EVENT = "passcodeCommon.passcodeSuccessEvent", this.PASSCODE_FAIL_EVENT = "passcodeCommon.passcodeFailEvent"
      }
      return r(e, [{
        key: "getHtml",
        value: function () {
          var e = new Array;
          return e.push("<div class='passcode_view'>"), e.push("\t<form class='passcode_form' method='get' action='/member/ajax/passcode.do'>"), e.push("\t\t<div class='passcode_hint'>通行碼已傳送至以下手機號碼</div>"), e.push("\t\t<div class='id_hint'></div>"), e.push("\t\t<div class='error_message'></div>"), e.push("\t\t<div class='passcode_text_section'>"), e.push("\t\t\t<div class='resend_btn'>重新取得通行碼</div>"), e.push("\t\t\t<div class='second_section'>"), e.push("\t\t\t\t<div class='second'></div>"), e.push("\t\t\t\t<div class='second_text'>秒</div>"), e.push("\t\t\t</div>"), e.push("\t\t\t<div class='passcode_text'>通行碼</div>"), e.push("\t\t\t<div class='passcode_text_hint'>(8位數)</div>"), e.push("\t\t</div>"), e.push("\t\t<input class='passcode_input' type='password' name='passcode' placeholder='請輸入 8 位數驗證碼' autocomplete='off' maxlength='8'>"), e.push("\t\t<div class='passcode_input_hint'>請輸入通行碼</div>"), e.push("\t\t<div class='passcode_show_section'>"), e.push("\t\t\t<input class='show_passcode_chkbox' type='checkbox'>"), e.push("\t\t\t<div class='show_passcode_text'>顯示密碼</div>"), e.push("\t\t</div>"), e.push("\t\t<input type='submit' value='送出' class='send_passcode_btn'>"), e.push("\t</form>"), e.push("</div>"), e.join("")
        }
      }, {
        key: "setContent",
        value: function (e, t) {
          if (t.msg) {
            var n = e.find(".error_message");
            n.addClass("active"), n.html(t.msg)
          }
          t.user && e.find(".id_hint").html(t.user.username)
        }
      }, {
        key: "setAction",
        value: function (e, t) {
          e.find(".passcode_form").submit(function (n) {
            n.preventDefault(), c(e, t)
          });
          var n = e.find(".show_passcode_chkbox");
          n.change(function (t) {
            var o = n.prop("checked"),
              r = e.find(".passcode_input");
            o ? r.attr("type", "text") : r.attr("type", "password")
          }), e.find(".resend_btn").click(function (n) {
            a.default.start(e, t)
          })
        }
      }, {
        key: "check",
        value: function (e, t) {
          a.default.check(e, t)
        }
      }]), e
    }(),
    c = function (e, t) {
      if (1 == f(e) && "object" == o(t.user)) {
        var n = e.find(".passcode_form"),
          r = n.attr("action"),
          a = n.attr("method"),
          l = sessionStorage.getItem("register_sponsor");
        if (l && (t.user.sponsor_name = l), t.user.passcode = e.find(".passcode_input").val(), 0 == i.default.isRunning) {
          var u = {
            action: r,
            method: a,
            data: {
              jsonStr: JSON.stringify(t.user)
            }
          };
          i.default.set(u, function (n, o) {
            var r = !1;
            if (o.length > 0) {
              for (var i = e.find(".error_message"), a = 0; a < o.length; a++) i.append("<div>" + o[a] + "</div>");
              i.addClass("active"), r = !0
            }
            r ? s.default.emit(p.PASSCODE_FAIL_EVENT) : (d(), s.default.emit(p.PASSCODE_SUCCESS_EVENT, t))
          })
        }
      }
    },
    d = function () {
      window.google_conversion_id = 939397563, window.google_conversion_language = "en", window.google_conversion_format = "3", window.google_conversion_color = "ffffff", window.google_conversion_label = "cGEiCNPkqmEQu6P4vwM", window.google_remarketing_only = !1, $("body").contents().filter(function () {
        8 == this.nodeType && -1 != $(this)[0].data.indexOf("\x3c!-- Google Code for &#21152;&#20837;&#26371;&#21729; Conversion Page --\x3e") && $(this).remove()
      }), $("script").filter("[src='//www.googleadservices.com/pagead/conversion.js']").remove(), $("noscript").find("img[src='//www.googleadservices.com/pagead/conversion/939397563/?label=cGEiCNPkqmEQu6P4vwM&amp;guid=ON&amp;script=0']").remove(), $("body").append("\x3c!-- Google Code for &#21152;&#20837;&#26371;&#21729; Conversion Page --\x3e"), $("body").append("<script type='text/javascript' src='//www.googleadservices.com/pagead/conversion.js'><\/script>")
    },
    f = function (e) {
      var t = e.find(".error_message");
      t.html(""), t.removeClass("active");
      var n = !1;
      return e.find(".passcode_input").val() ? (e.find(".passcode_text_hint").removeClass("active"), e.find(".passcode_input").removeClass("highlight"), n = !0) : (e.find(".passcode_input_hint").addClass("active"), e.find(".passcode_input").addClass("highlight")), n
    },
    p = new u;
  t.default = p
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(1)),
    i = null,
    a = null,
    s = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return o(e, [{
        key: "check",
        value: function (e, t) {
          if (0 == u() || a > 0) {
            var n = e.find(".error_message"),
              o = e.find(".resend_btn"),
              r = e.find(".second_section");
            n.removeClass("active"), o.addClass("disable"), r.addClass("active"), c(function (e) {
              r.find(".second").html(e), e <= 0 && (o.removeClass("disable"), r.removeClass("active"))
            })
          }
        }
      }, {
        key: "start",
        value: function (e, t) {
          if (!(a > 0)) {
            var n = e.find(".error_message"),
              o = e.find(".resend_btn"),
              r = e.find(".second_section");
            0 == l() ? (n.addClass("active"), n.html("<h4>重新取得通行碼超過限制</h4>若無法收取通行碼或通行碼無法使用，請於30分鐘後重試或撥打客服專線：（02）7707-0708"), o.addClass("disable"), r.removeClass("active")) : (n.removeClass("active"), o.addClass("disable"), r.addClass("active"), d(t), c(function (e) {
              r.find(".second").html(e), e <= 0 && (o.removeClass("disable"), r.removeClass("active"))
            }))
          }
        }
      }]), e
    }(),
    l = function () {
      var e = localStorage.getItem("passcode_record_list");
      if (!e) return !0;
      if ((e = JSON.parse(e)).length < 3) return !0;
      var t = (new Date).getTime(),
        n = e[e.length - 3];
      return t - (n = parseInt(n)) > 18e5
    },
    u = function () {
      var e = localStorage.getItem("passcode_record_list");
      if (!e) return !0;
      if ((e = JSON.parse(e)).length < 1) return !0;
      var t = (new Date).getTime(),
        n = e[e.length - 1];
      return t - (n = parseInt(n)) > 4e4 || (a = Math.ceil(40 - (t - n) / 1e3), !1)
    },
    c = function (e) {
      var t = localStorage.getItem("passcode_record_list"),
        n = (new Date).getTime();
      (t = t ? JSON.parse(t) : new Array).push(n), t = JSON.stringify(t), localStorage.setItem("passcode_record_list", t), a <= 0 && (a = 40), "function" == typeof e && e(a), clearInterval(i), i = setInterval(function () {
        --a <= 0 && clearInterval(i), "function" == typeof e && e(a)
      }, 1e3)
    },
    d = function (e) {
      var t = {
        url: "/member/ajax/getPasscode",
        selectMethod: "GET",
        request: {
          username: e.user.username
        }
      };
      r.default.get(t)
    },
    f = new s;
  t.default = f
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = s(n(111)),
    i = s(n(4)),
    a = s(n(0));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function (e) {
      function t() {
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, i.default), o(t, [{
        key: "show",
        value: function (e) {
          (e = e || {}).dialogTitle = "<div class='reset_pw_dialog_title'>重設密碼</div>", e.dialogHtml = r.default.getHtml(),
            function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("reset_pw");
          var n = $(".alert_box .reset_pw_view");
          r.default.setAction(n, e), u.init(n)
        }
      }]), t
    }(),
    u = new function () {
      var e = this,
        t = null;
      this.init = function (n) {
        t = n, a.default.off(r.default.RESET_PASSWORD_SUCCESS_EVENT, e.succ), a.default.off(r.default.RESET_PASSWORD_CANCEL_EVENT, e.succ), a.default.off(r.default.RESET_PASSWORD_FAIL_EVENT, e.fail), a.default.off(c.DIALOG_DISMISS_EVENT, e.end), a.default.on(r.default.RESET_PASSWORD_SUCCESS_EVENT, e.succ), a.default.on(r.default.RESET_PASSWORD_CANCEL_EVENT, e.succ), a.default.on(r.default.RESET_PASSWORD_FAIL_EVENT, e.fail), a.default.on(c.DIALOG_DISMISS_EVENT, e.end)
      }, this.succ = function () {
        c.dismiss()
      }, this.fail = function () {
        t.parent(".alert_content").scrollTop(0)
      }, this.end = function () {
        t = null, a.default.off(r.default.RESET_PASSWORD_SUCCESS_EVENT, e.succ), a.default.off(r.default.RESET_PASSWORD_CANCEL_EVENT, e.succ), a.default.off(r.default.RESET_PASSWORD_FAIL_EVENT, e.fail), a.default.off(c.DIALOG_DISMISS_EVENT, e.end)
      }
    },
    c = new l;
  t.default = c
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    i = u(n(0)),
    a = u(n(17)),
    s = u(n(33)),
    l = u(n(9));

  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var c = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.RESET_PASSWORD_SUCCESS_EVENT = "resetPWCommon.resetPWSuccessEvent", this.RESET_PASSWORD_CANCEL_EVENT = "resetPWCommon.resetPWCancelEvent", this.RESET_PASSWORD_FAIL_EVENT = "resetPWCommon.resetPWFailEvent"
      }
      return r(e, [{
        key: "getHtml",
        value: function () {
          var e = new Array;
          return e.push("<div class='reset_pw_view'>"), e.push("\t<form class='reset_pw_form' method='get' action='/member/ajax/resetPW.do'>"), e.push("\t\t<div class='reset_pw_hint'>密碼預設為通行碼，為確保帳號安全，請重設密碼</div>"), e.push("\t\t<div class='error_message'></div>"), e.push("\t\t<div class='reset_pw_text_section'>"), e.push("\t\t\t<div class='reset_pw_text'>新密碼</div>"), e.push("\t\t\t<div class='reset_pw_text_hint'>(8個字元以上的英文或數字)</div>"), e.push("\t\t</div>"), e.push("\t\t<input class='reset_pw_input' type='password' name='newpassword' placeholder='請輸入新密碼' autocomplete='off'>"), e.push("\t\t<div class='reset_pw_input_hint'>請輸入密碼</div>"), e.push("\t\t<div class='confirm_pw_text'>再次確認密碼</div>"), e.push("\t\t<input class='confirm_pw_input' type='password' name='newpassword2' autocomplete='off'>"), e.push("\t\t<div class='confirm_pw_hint'>請輸入密碼</div>"), e.push("\t\t<div class='pw_show_section'>"), e.push("\t\t\t<input class='show_pw_chkbox' type='checkbox'>"), e.push("\t\t\t<div class='show_pw_text'>顯示密碼</div>"), e.push("\t\t</div>"), e.push("\t\t<div class='btn_section'>"), e.push("\t\t\t<div class='cancel_btn'>不重設</div>"), e.push("\t\t\t<input type='submit' class='confirm_btn' value='確認新密碼' />"), e.push("\t\t</div>"), e.push("\t</form>"), e.push("</div>"), e.join("")
        }
      }, {
        key: "setAction",
        value: function (e, t) {
          e.find(".reset_pw_form").submit(function (n) {
            n.preventDefault(), d(e, t)
          }), e.find(".show_pw_chkbox").change(function (t) {
            var n = e.find(".show_pw_chkbox").prop("checked"),
              o = e.find(".reset_pw_input"),
              r = e.find(".confirm_pw_input");
            1 == n ? (o.attr("type", "text"), r.attr("type", "text")) : (o.attr("type", "password"), r.attr("type", "password"))
          }), e.find(".cancel_btn").click(function (e) {
            i.default.emit(h.RESET_PASSWORD_CANCEL_EVENT), f({
              name: t.user.username,
              password: t.user.passcode
            })
          })
        }
      }]), e
    }(),
    d = function (e, t) {
      if (1 == p(e) && "object" == o(t.user)) {
        var n = e.find(".reset_pw_form"),
          r = n.attr("action"),
          s = n.attr("method");
        if (t.user.newpassword = e.find(".reset_pw_input").val(), t.user.newpassword2 = e.find(".confirm_pw_input").val(), 0 == a.default.isRunning) {
          var l = {
            action: r,
            method: s,
            data: {
              jsonStr: JSON.stringify(t.user)
            }
          };
          a.default.set(l, function (n, o) {
            var r = !1;
            if (o.length > 0) {
              for (var a = e.find(".error_message"), s = 0; s < o.length; s++) a.append("<div>" + o[s] + "</div>");
              a.addClass("active"), r = !0
            }
            r ? i.default.emit(h.RESET_PASSWORD_FAIL_EVENT) : (i.default.emit(h.RESET_PASSWORD_SUCCESS_EVENT, t), f({
              name: t.user.username,
              password: t.user.newpassword
            }))
          })
        }
      }
    },
    f = function (e) {
      (0, s.default)(e, function (e, t) {
        "success" == t ? i.default.emit(l.default.LOGIN_SUCCESS_EVENT) : i.default.emit(l.default.LOGIN_FAIL_EVENT)
      }, function () {
        i.default.emit(l.default.LOGIN_FAIL_EVENT)
      })
    },
    p = function (e) {
      var t = e.find(".error_message");
      t.html(""), t.removeClass("active");
      var n = e.find(".reset_pw_input"),
        o = e.find(".reset_pw_input_hint"),
        r = e.find(".confirm_pw_input"),
        i = e.find(".confirm_pw_hint"),
        a = !0;
      return n.removeClass("highlight"), o.removeClass("active"), r.removeClass("highlight"), i.removeClass("active"), n.val() || (n.addClass("highlight"), o.addClass("active"), a = !1), r.val() || (r.addClass("highlight"), i.addClass("active"), a = !1), a
    },
    h = new c;
  t.default = h
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = u(n(4)),
    i = u(n(113)),
    a = u(n(8)),
    s = u(n(34)),
    l = u(n(0));

  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var c = function (e) {
      function t() {
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, r.default), o(t, [{
        key: "show",
        value: function (e) {
          (e = e || {}).dialogTitle = "<div class='forget_password_dialog_title'>忘記密碼</div>", e.dialogHtml = i.default.getHtml(),
            function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("forget_pw");
          var n = $(".alert_box .forget_pw_view");
          f(n, e), i.default.setAction(n), d.init(n)
        }
      }]), t
    }(),
    d = new function () {
      var e = this,
        t = null;
      this.init = function (n) {
        t = n, l.default.off(i.default.FORGET_PW_SUCCESS_EVENT, e.succ), l.default.off(i.default.FORGET_PW_FAIL_EVENT, e.fail), l.default.off(p.DIALOG_DISMISS_EVENT, e.end), l.default.on(i.default.FORGET_PW_SUCCESS_EVENT, e.succ), l.default.on(i.default.FORGET_PW_FAIL_EVENT, e.fail), l.default.on(p.DIALOG_DISMISS_EVENT, e.end)
      }, this.succ = function (e) {
        p.dismiss(), s.default.show(e)
      }, this.fail = function () {
        t.parent(".alert_content").scrollTop(0)
      }, this.end = function () {
        t = null, l.default.off(i.default.FORGET_PW_SUCCESS_EVENT, e.succ), l.default.off(i.default.FORGET_PW_FAIL_EVENT, e.fail), l.default.off(p.DIALOG_DISMISS_EVENT, e.end)
      }
    },
    f = function (e, t) {
      e.find(".cancel_btn").click(function (e) {
        p.dismiss(), a.default.show(t)
      })
    },
    p = new c;
  t.default = p
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = a(n(17)),
    i = a(n(0));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.FORGET_PW_SUCCESS_EVENT = "forgetPWCommon.forgetPWSuccessEvent", this.FORGET_PW_FAIL_EVENT = "forgetPWCommon.forgetPWFailEvent"
      }
      return o(e, [{
        key: "getHtml",
        value: function () {
          var e = new Array;
          return e.push("<div class='forget_pw_view'>"), e.push("<form class='forget_pw_form' method='get' action='/member/ajax/forgetPW.do'>"), e.push("<div class='forget_pw_hint'>請輸入您的手機號碼。</div>"), e.push("<div class='error_message'></div>"), e.push("<div class='id_text'>手機號碼</div>"), e.push("<input class='id_input' type='tel' name='username' placeholder='請輸入手機號碼' maxlength='10'/>"), e.push("<div class='id_hint'>手機號碼</div>"), e.push("<div class='verify_code_text'>驗證碼</div>"), e.push("<input class='verify_code_input' type='text' name='code' placeholder='請輸入下方驗證碼' />"), e.push("<div class='verify_code_hint'>驗證碼</div>"), e.push("<div class='verify_image_section'>"), e.push("<img class='verfy_image' src='/code/captcha-image?85'>"), e.push("<div class='image_refresh'>重新產生驗證碼</div>"), e.push("</div>"), e.push("<div class='btn_section'>"), e.push("<div class='cancel_btn'>取消</div>"), e.push("<input type='submit' class='confirm_btn' value='送出' />"), e.push("</div>"), e.push("</form>"), e.push("</div>"), e.join("")
        }
      }, {
        key: "setAction",
        value: function (e) {
          e.find(".confirm_btn").click(function (t) {
            t.preventDefault(), l(e)
          }), e.find(".image_refresh").click(function (t) {
            var n = e.find(".verfy_image");
            n.hide(), n.attr("src", "/code/captcha-image?" + Math.floor(100 * Math.random())), n.fadeIn()
          }), e.find(".id_input").keydown(function (e) {
            return 8 == e.keyCode || e.keyCode >= 46 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || 9 == e.keyCode || 37 == e.keyCode || 39 == e.keyCode
          })
        }
      }]), e
    }(),
    l = function (e) {
      if (1 == u(e)) {
        var t = e.find(".forget_pw_form"),
          n = t.attr("action"),
          o = t.attr("method"),
          a = {
            username: t.find(".id_input").val(),
            code: t.find(".verify_code_input").val()
          };
        if (0 == r.default.isRunning) {
          var s = {
            action: n,
            method: o,
            data: {
              jsonStr: JSON.stringify(a)
            }
          };
          r.default.set(s, function (t, n) {
            var o = {},
              r = !1;
            if (n.length > 0)
              for (var s = 0; s < n.length; s++)
                for (var l in n[s])
                  if (3 != l) {
                    var u = e.find(".error_message");
                    u.append("<div>" + n[s][l] + "</div>"), u.addClass("active"), r = !0
                  } else o.msg = n[s][l];
            r ? i.default.emit(c.FORGET_PW_FAIL_EVENT) : (o.user = a, i.default.emit(c.FORGET_PW_SUCCESS_EVENT, o))
          })
        }
      }
    },
    u = function (e) {
      var t = e.find(".error_message");
      t.html(""), t.removeClass("active");
      var n = e.find(".id_input"),
        o = e.find(".id_hint"),
        r = e.find(".verify_code_input"),
        i = e.find(".verify_code_hint"),
        a = !0;
      return n.removeClass("highlight"), o.removeClass("active"), r.removeClass("highlight"), i.removeClass("active"), n.val() || (n.addClass("highlight"), o.addClass("active"), a = !1), r.val() || (r.addClass("highlight"), i.addClass("active"), a = !1), a
    },
    c = new s;
  t.default = c
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = p(n(2)),
    i = p(n(115)),
    a = p(n(116)),
    s = p(n(117)),
    l = p(n(120)),
    u = p(n(121)),
    c = p(n(122)),
    d = p(n(9)),
    f = p(n(0));

  function p(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var h = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.HEADER_RESIZE_EVENT = "header.headerResizeEvent", this.HEADER_REPOSITION_EVENT = "header.headerRepositionEvent"
      }
      return o(e, [{
        key: "init",
        value: function (e) {
          var t = this;
          E(e, function () {
            var e = $("header[data-litv-header]");
            w(0), g.set(), b(), i.default.set(), a.default.set(), "false" != e.attr("data-op-main-enable") && s.default.set(), "false" != e.attr("data-op-menu-enable") && l.default.set(), t.setFocus(), v.init()
          })
        }
      }, {
        key: "setFocus",
        value: function (e) {
          if (e || (e = m(e)), e) {
            var t = $("header[data-litv-header]");
            if (!t.html()) return t.attr("data-op-focus-main-path", e.main), void t.attr("data-op-focus-sub-path", e.sub);
            if ("false" != t.attr("data-op-main-enable")) {
              s.default.setFocus(e);
              var n = l.default.setFocus(e);
              "false" != t.attr("data-op-submenu-enable") && (u.default.set(n), u.default.setFocus(e))
            }
          }
        }
      }]), e
    }(),
    v = new function () {
      var e = null,
        t = 0;
      this.init = function () {
        e = $("header[data-litv-header]"), n(), $(window).off("scrolldown", o), $(window).off("scrollup", r), $(window).on("scrolldown", o), $(window).on("scrollup", r)
      };
      var n = function () {
          var t = e.find(".header_container");
          t.mouseenter(function (e) {
            for (var n = t.children(), o = n.filter(".center_section, .bottom_section"), r = 0, a = 0; a < n.length; a++) r += n.eq(a)[0].offsetHeight;
            t.css("height", r), o.css("top", ""), i(r)
          })
        },
        o = function (t, n) {
          for (var o = e.find(".header_container"), r = o.children(), a = r.filter(".center_section, .bottom_section"), s = r.not(".center_section, .bottom_section"), l = 0, u = ($(window).scrollTop(), 0); u < s.length; u++) l += s.eq(u)[0].offsetHeight;
          var c = 0;
          c = o[0].offsetHeight - n;
          var d = a.css("top");
          if (d = parseInt(d), d -= n, c <= l) {
            c = l;
            for (var f = 0, p = 0; p < a.length; p++) f += a.eq(p)[0].offsetHeight;
            d = -1 * f
          }
          o.css("height", c), a.css("top", d), i(c)
        },
        r = function (t, n) {
          for (var o = e.find(".header_container"), r = o.children(), a = r.filter(".center_section, .bottom_section"), s = 0, l = $(window).scrollTop(), u = 0; u < r.length; u++) s += r.eq(u)[0].offsetHeight;
          var c = 0,
            d = a.css("top");
          d = parseInt(d), l <= 0 ? (c = "", d = "") : (d += n, (c = o[0].offsetHeight + n) >= s && (c = s, d = "")), o.css("height", c), a.css("top", d), i("" == c ? s : c)
        },
        i = function (e) {
          if (t != e) {
            t = e;
            for (var n = $("[data-attr-reposition-by-header]"), o = 0; o < n.length; o++) {
              var r = n.eq(o),
                i = r.attr("data-attr-reposition-by-header");
              r.css(i, e)
            }
            f.default.emit(k.HEADER_REPOSITION_EVENT, e)
          }
        }
    },
    m = function (e) {
      if (e) return e;
      var t = $("header[data-litv-header]"),
        n = t.attr("data-op-focus-main-path"),
        o = t.attr("data-op-focus-sub-path");
      return n && (e = {
        main: n,
        sub: o
      }), e
    },
    g = new function () {
      this.set = function () {
        var n = $("header[data-litv-header]");
        "false" == n.attr("data-op-main-enable") && "false" == n.attr("data-op-menu-enable") && "false" == n.attr("data-promo-header") || (r.default.getAuthStatus(function (e) {
          "false" != n.attr("data-op-main-enable") && s.default.loginStatus(e), "false" != n.attr("data-op-menu-enabl") && l.default.loginStatus(e), "false" != n.attr("data-promo-header") && c.default.loginStatus(e)
        }), f.default.off(d.default.LOGIN_SUCCESS_EVENT, e), f.default.off(d.default.LOGIN_FAIL_EVENT, t), f.default.on(d.default.LOGIN_SUCCESS_EVENT, e), f.default.on(d.default.LOGIN_FAIL_EVENT, t))
      };
      var e = function () {
          s.default.loginStatus(!0), l.default.loginStatus(!0), c.default.loginStatus(!0)
        },
        t = function () {
          s.default.loginStatus(!1), l.default.loginStatus(!1), c.default.loginStatus(!1)
        }
    },
    y = null,
    _ = null,
    b = function () {
      var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      y && (y.disconnect(), y = null);
      var t = $("header[data-litv-header]").find(".header_container");
      t.length <= 0 || (y = new e(w)).observe(t[0], {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
      })
    },
    w = function (e) {
      var t;
      t = "number" != typeof e ? 300 : e, clearTimeout(_), _ = setTimeout(function () {
        for (var e = $("header[data-litv-header]"), t = e.find(".header_container").children(), n = 0, o = 0; o < t.length; o++) n += t.eq(o)[0].offsetHeight;
        if (k.height != n) {
          k.height = n;
          for (var r = $("[data-attr-resize-by-header]"), i = 0; i < r.length; i++) {
            var a = r.eq(i),
              l = a.attr("data-attr-resize-by-header");
            a.css(l, n)
          }
          s.default.setHeaderHeight(n), u.default.setHeaderHeight(n), "false" != e.attr("data-op-placeholder-enable") && e.css("height", n), f.default.emit(k.HEADER_RESIZE_EVENT, n)
        }
      }, t)
    },
    E = function (e, t) {
      var n = $("header[data-litv-header]");
      n.length <= 0 || (n.html() && 1 != e ? t() : r.default.getHeaderHtml(function (e) {
        n.html(e), t()
      }))
    },
    k = new h;
  k.init(), t.default = k
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = i(n(13)),
    r = i(n(1));

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var a = new function () {
    this.set = function () {
      "eWFob28=" == sessionStorage.getItem("sponsorName") ? (e.set(), t.set(), $("html").attr("id", "Stencil")) : e.blank()
    };
    var e = new function () {
        var e = null,
          t = null,
          n = null;
        this.set = function () {
          e = $("header .header_container .sponsor_section .pc"), t = $("header .header_container .sponsor_section .mobile"), o(), $(window).off("resize", o), $(window).on("resize", o)
        }, this.blank = function () {
          e = $("header .header_container .sponsor_section .pc"), t = $("header .header_container .sponsor_section .mobile"), e.html(""), t.html("")
        };
        var o = function () {
            clearTimeout(n), n = setTimeout(function () {
              var e = $(window).width();
              i(e > 1024 ? "pc" : "mobile")
            }, 300)
          },
          i = function (n) {
            if ("pc" == n) {
              if (e.html()) return e.find("a, form").attr("target", "_blank"), void t.html("");
              a("/resources/gulp-dest/meta/yahoo_header.html", e, t)
            } else {
              if (t.html()) return t.find("a, form").attr("target", "_blank"), void e.html("");
              a("/resources/gulp-dest/meta/yahoo_mobile_header.html", t, e)
            }
          },
          a = function (e, t, n) {
            var o = {
              url: e,
              selectMethod: "GET",
              request: {},
              dataType: "html",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8"
            };
            r.default.get(o, function (e, n) {
              t.html(n), t.find("a, form").attr("target", "_blank")
            }, null, !0), n.html("")
          }
      },
      t = new function () {
        var e = ["/resources/gulp-dest/css/yahoo/styles-ltr-66a731be59.css", "/resources/gulp-dest/css/yahoo/pcHeader-deb52e26ff.css"],
          t = ["https://s.yimg.com/ud/fontserver/0.2.15/Mobiv2-rollup.css", "/resources/gulp-dest/css/yahoo/mobileHeader-8fb28418b9.css"],
          n = null;
        this.set = function () {
          r(), $(window).off("resize", r), $(window).on("resize", r)
        };
        var r = function () {
            clearTimeout(n), n = setTimeout(function () {
              $(window).width() > 1024 ? (a(t), i(e)) : (a(e), i(t))
            }, 300)
          },
          i = function (e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              $("link[href='" + n + "']").length <= 0 && o.default.importCSSFile(n)
            }
          },
          a = function (e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              $("link[href='" + n + "']").remove()
            }
          }
      }
  };
  t.default = a
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(29), a(n(1));
  var o = a(n(5)),
    r = a(n(3)),
    i = a(n(2));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = new function () {
      this.set = function () {
        "pc" != o.default.deviceType && 0 != u() && i.default.getHeaderMeta(function (e) {
          var t = $("header .header_container .app_section"),
            n = d(e);
          t.html(n), c(t), l(t)
        })
      }
    },
    l = function (e) {
      var t = e.find(".app_header_container .center_section .star"),
        n = t.attr("data-star");
      if (n) {
        n = parseInt(n);
        var o = r.default.getVodStarView(n);
        t.html(o)
      }
    },
    u = function () {
      var e = localStorage.getItem("appDownloadContent");
      return !e || (new Date).getTime() - e >= 864e5 && (localStorage.removeItem("appDownloadContent"), !0)
    },
    c = function (e) {
      e.find(".exit_icon").click(function (t) {
        t.preventDefault(), t.stopPropagation();
        var n = (new Date).getTime();
        e.html(""), localStorage.setItem("appDownloadContent", n)
      })
    },
    d = function (e) {
      var t = e.app,
        n = t.downloadBtn.url.android,
        r = t.star.android;
      o.default.detectIsIOS() && (n = t.downloadBtn.url.ios, r = t.star.ios);
      var i = new Array;
      return i.push("<a class='app_header_container headerappDownload' target='_blank' href='" + n + "'>"), 1 == t.closeBtn && i.push("<div class='exit_icon appDownloadCloseBtn'></div>"), i.push("\t<div class='left_section'>"), i.push("\t\t<img class='logo' src=" + t.logo + " />"), i.push("\t</div>"), i.push("\t<div class='right_section'>"), i.push("\t\t<div class='download_btn'>" + t.downloadBtn.name + "</div>"), i.push("\t</div>"), i.push("\t<div class='center_section'>"), t.title && i.push("<div class='title'>" + t.title + "</div>"), t.subtitle && i.push("<div class='subtitle'>" + t.subtitle + "</div>"), r && i.push("<div class='star' data-star='" + r + "'></div>"), i.push("\t</div>"), i.push("</a>"), i.join("")
    };
  t.default = s
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = c(n(36)),
    r = (c(n(9)), c(n(2))),
    i = c(n(118)),
    a = (c(n(32)), c(n(3))),
    s = c(n(8)),
    l = c(n(119)),
    u = c(n(0));

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var d = {
      SET_MOBILE_META: "topHeader.setMobileMeta"
    },
    f = new function () {
      var e = this;
      e.EVENT = r.default.extend({}, d), this.set = function () {
        var o = $("header[data-litv-header] .header_container .top_section");
        v.set(o), p(o), u.default.off(e.EVENT.SET_MOBILE_META, t), u.default.once(e.EVENT.SET_MOBILE_META, t), $(window).off("resize", n), $(window).on("resize", n), n()
      }, this.setHeaderHeight = function (e) {
        $(".header_search_recommand").remove(), $(".header_personal_balloon").remove()
      }, this.loginStatus = function (t) {
        var n = $("header[data-litv-header] .header_container .top_section").find(".right_section .personal_center");
        t ? n.html("個人中心") : n.html("登入/註冊"), e.login = t, h.set(), l.default.loginStatus(t)
      }, this.setFocus = function (e) {
        e && l.default.setFocus(e)
      };
      var t = function () {
          l.default.setMeta()
        },
        n = function () {
          $(window).width() <= 1024 && u.default.emit(e.EVENT.SET_MOBILE_META)
        }
    },
    p = function (e) {
      var t = e.find(".right_section .hamburger_btn");
      t.off("click"), t.on("click", l.default.set)
    },
    h = new function () {
      this.set = function () {
        var t = $("header[data-litv-header] .header_container .top_section");
        e(t)
      };
      var e = function (e) {
          var n = e.find(".right_section .personal_center");
          n.off("mouseenter"), n.off("mouseleave"), n.on("mouseenter", function (n) {
            if (!($(".header_personal_balloon").length > 0)) {
              var r = function () {
                var e = new Array;
                return e.push("<div class='header_personal_balloon'>"), e.push("\t<div class='balloon_arrow_section'>"), e.push("\t\t<div class='arrow'></div>"), e.push("\t</div>"), e.push("\t<div class='balloon_content_section' data-login='" + f.login + "'>"), e.push("\t\t<button class='login_btn' data-targetName='login'>登入 │ 註冊</button>"), e.push("\t\t<div class='user_id_logout'>"), e.push("\t\t\t<a class='logout_btn prevent_control_by_player' href='/j_spring_security_logout'>登出</a>"), e.push("\t\t\t<div class='user_id'></div>"), e.push("\t\t</div>"), e.push("\t\t<div class='segment'></div>"), e.push("\t\t<a href='/member/watchRecord.do?to=memberInfo' class='watchrecode' data-desc-key='watchRecord'>觀看記錄</a>"), e.push("\t\t<a href='/member/memberInfo.do' class='member' data-desc-key='memberInfo'>會員資料</a>"), e.push("\t\t<a href='/member/coupon.do?to=purchaseInfo' class='coupon' data-desc-key='coupon'>啟用兌換券</a>"), e.push("\t\t<a href='https://support.litv.tv/' target='_blank' class='faq'>常見問題</a>"), e.push("\t\t<a href='/member/memberInfo.do' class='more' data-desc-key='moreMemberIfo'>更多個人中心功能</a>"), e.push("\t</div>"), e.push("</div>"), e.join("")
              }();
              $("body").append(r),
                function (e) {
                  var t = e.find(".right_section .personal_center"),
                    n = t.width(),
                    o = t.height(),
                    r = t.offset(),
                    i = t.css("border-top-width");
                  i = i.replace("px", ""), i = parseInt(i);
                  var a = t.css("border-bottom-width");
                  a = a.replace("px", ""), a = parseInt(a);
                  var s = $(".header_personal_balloon"),
                    l = s.outerWidth(),
                    u = r.top + o + i + a - $(window).scrollTop(),
                    c = r.left + n / 2 - l / 2;
                  s.css("top", u), s.css("left", c)
                }(e), o(), t()
            }
          }), n.on("mouseleave", function (e) {
            var t = a.default.getToElement(e),
              n = !1;
            (t = $(t)).hasClass("header_personal_balloon") || (n = !0), n && (n = (t = t.parents(".header_personal_balloon")).length <= 0), n && $(".header_personal_balloon").remove()
          })
        },
        t = function () {
          var e = $(".header_personal_balloon"),
            t = e.find(".balloon_content_section"),
            o = e.find(".balloon_content_section .login_btn"),
            r = t.find(".watchrecode, .member, .coupon, .more");
          o.click(function (e) {
            s.default.show()
          }), r.click(function (e) {
            if (!f.login) {
              e.preventDefault();
              var t = $(e.target);
              s.default.show({
                descKey: t.attr("data-desc-key")
              }), n.set(e), u.default.off(s.default.DIALOG_DISMISS_EVENT, n.dismiss), u.default.on(s.default.DIALOG_DISMISS_EVENT, n.dismiss)
            }
          }), e.mouseleave(function (e) {
            var t = a.default.getToElement(e),
              n = !1;
            (t = $(t)).hasClass("personal_center") || (n = !0), n && (n = (t = t.parents(".personal_center")).length <= 0), n && $(".header_personal_balloon").remove()
          })
        },
        n = new function () {
          var e = null;
          this.set = function (t) {
            e = t
          }, this.dismiss = function () {
            if (f.login) {
              var t = a.default.getEventAttribute(e, "href");
              location.href = t
            }
            u.default.off(s.default.DIALOG_DISMISS_EVENT, n.dismiss)
          }
        },
        o = function () {
          var e = $(".header_personal_balloon .balloon_content_section .user_id_logout .user_id");
          f.login ? r.default.getUserStatusInfo(function (t) {
            e.html("您好，" + t.displayName)
          }) : e.html("")
        }
    },
    v = new function () {
      var e = null,
        t = null;
      this.set = function (e) {
        r(e), n({
          data: {
            container: e
          }
        }), $(window).off("resize", n), $(window).on("resize", {
          container: e
        }, n)
      };
      var n = function (e) {
          var n = e.data.container;
          clearTimeout(t), s(), t = setTimeout(function () {
            var e = n.find(".left_section .search_section"),
              t = e.find(".search_form"),
              o = e.find(".search_dialog_btn");
            t.width() > e.width() ? (o.removeClass("hide"), t.addClass("hide")) : (o.addClass("hide"), t.removeClass("hide"))
          }, 300)
        },
        r = function (t) {
          var n = t.find(".left_section .search_section .search_form"),
            r = n.find(".search_input_container .search_input"),
            l = t.find(".left_section .search_section .search_dialog_btn");
          r.off("focus"), r.off("blur"), l.off("click"), r.on("focus", function () {
            clearTimeout(e), a(n);
            var t = $(".header_search_recommand .recommands");
            o.default.setRecommand(t, n)
          }), r.on("blur", function () {
            clearTimeout(e), e = setTimeout(s, 300)
          }), l.on("click", function (e) {
            i.default.show()
          })
        },
        a = function (e) {
          s();
          var t = e.find(".search_input_container .search_input"),
            n = t.offset().left,
            o = t.outerWidth(),
            r = t.outerHeight(),
            i = t.offset().top + r - $(window).scrollTop(),
            a = l();
          $("body").append(a);
          var u = $(".header_search_recommand");
          u.css("position", "fixed"), u.css("top", i), u.css("left", n), u.css("width", o)
        },
        s = function () {
          $(".header_search_recommand").remove()
        },
        l = function () {
          var e = new Array;
          return e.push("<div class='header_search_recommand'>"), e.push("\t<div class='title'>熱門搜尋：</div>"), e.push("\t<div class='recommands'></div>"), e.push("</div>"), e.join("")
        }
    };
  t.default = f
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = s(n(4)),
    i = s(n(36)),
    a = s(n(0));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function (e) {
      function t() {
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, r.default), o(t, [{
        key: "show",
        value: function (e) {
          (e = e || {}).dialogTitle = "<div class='search_dialog_title'>搜尋</div>", e.dialogHtml = c(),
            function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("search");
          var n = $(".alert_box .search_dialog_view");
          i.default.setRecommand(n.find(".search_recommand_items"), n.find(".search_dialog_form")), u.init()
        }
      }]), t
    }(),
    u = new function () {
      var e = this;
      this.init = function (t) {
        a.default.off(i.default.SEARCH_RESULT_SUBMIT_EVENT, e.submit), a.default.off(d.DIALOG_DISMISS_EVENT, e.end), a.default.on(i.default.SEARCH_RESULT_SUBMIT_EVENT, e.submit), a.default.on(d.DIALOG_DISMISS_EVENT, e.end)
      }, this.submit = function () {
        d.dismiss()
      }, this.end = function () {
        a.default.off(i.default.SEARCH_RESULT_SUBMIT_EVENT, e.submit), a.default.off(d.DIALOG_DISMISS_EVENT, e.end)
      }
    },
    c = function () {
      var e = new Array;
      return e.push("<div class='search_dialog_view'>"), e.push("\t<form class='search_dialog_form' method='get' action='/search/search.do'>"), e.push("\t\t<input class='search_btn' type='submit' value='' />"), e.push("\t\t<div class='search_input_container'>"), e.push("\t\t\t<input class='search_input' name='search_input' type='text' placeholder='請輸入片名或演員' required autocomplete='off' />"), e.push("\t\t</div>"), e.push("\t</form>"), e.push("\t<div class='search_recommand_title'>熱門搜尋：</div>"), e.push("\t<div class='search_recommand_items'></div>"), e.push("</div>"), e.join("")
    },
    d = new l;
  window.searchDialog = d, t.default = d
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = s(n(2)),
    r = s(n(8)),
    i = s(n(3)),
    a = s(n(0));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = new function () {
    var e = this,
      t = null;
    this.set = function () {
      if ($(".mobile_header_container").remove(), e.meta && "boolean" == typeof e.login) {
        var t = $("body"),
          o = d(e.meta, e.login);
        t.append(o), c(e.login), l(), s(e.path), n(), $(window).off("resize", n), $(window).on("resize", n)
      }
    }, this.setMeta = function () {
      o.default.getHeaderMeta(function (t) {
        e.meta = t
      })
    }, this.setFocus = function (t) {
      e.path = t
    }, this.loginStatus = function (t) {
      e.login = t
    };
    var n = function () {
        clearTimeout(t), t = setTimeout(function () {
          var e = $(window).width(),
            t = $(".mobile_header_container");
          e > 1024 && t.length > 0 && t.remove()
        }, 300)
      },
      s = function (e) {
        var t = $(".mobile_header_container .left_section .main"),
          n = t.find(".item");
        if (t.removeClass("has_more"), e)
          for (var o = 0; o < n.length; o++) {
            var r = n.eq(o);
            if (-1 != r.attr("href").indexOf(e.main)) {
              r.parents(".main").addClass("has_more");
              break
            }
          }
      },
      l = function () {
        var t = $(".mobile_header_container"),
          n = t.find(".left_section"),
          o = n.find(".main"),
          s = n.find(".main .item .arrow"),
          l = n.find(".login_status .logout"),
          c = o.find(".item"),
          d = o.find(".sub .subItems");
        t.click(function (e) {
          t.remove()
        }), n.click(function (e) {
          e.stopPropagation()
        }), s.click(function (e) {
          e.preventDefault(), e.stopPropagation();
          var t = $(e.target).parents(".main");
          t.hasClass("has_more") ? t.removeClass("has_more") : (o.removeClass("has_more"), t.addClass("has_more"))
        }), l.click(function () {
          $(".mobile_header_container").remove(), r.default.show()
        }), c.click(function (t) {
          "true" == i.default.findElementByClass(t, "item").attr("data-is-auth") && 0 == e.login && (t.preventDefault(), $(".mobile_header_container").remove(), r.default.show(), u.set(t), a.default.off(r.default.DIALOG_DISMISS_EVENT, u.dismiss), a.default.on(r.default.DIALOG_DISMISS_EVENT, u.dismiss))
        }), d.click(function (t) {
          "true" == i.default.findElementByClass(t, "subItems").attr("data-is-auth") && 0 == e.login && (t.preventDefault(), $(".mobile_header_container").remove(), r.default.show(), u.set(t), a.default.off(r.default.DIALOG_DISMISS_EVENT, u.dismiss), a.default.on(r.default.DIALOG_DISMISS_EVENT, u.dismiss))
        })
      },
      u = new function () {
        var t = null;
        this.set = function (e) {
          t = e
        }, this.dismiss = function () {
          if (e.login) {
            var n = i.default.getEventAttribute(t, "href");
            location.href = n
          }
          a.default.off(r.default.DIALOG_DISMISS_EVENT, u.dismiss)
        }
      },
      c = function (e) {
        var t = $(".mobile_header_container .left_section .login_status .login .user_id");
        e ? o.default.getUserStatusInfo(function (e) {
          t.html(e.displayName)
        }) : t.html("")
      },
      d = function (e, t) {
        var n = new Array;
        n.push("<div class='mobile_header_container' data-login='" + t + "'>"), n.push("\t<div class='left_section'>"), n.push("<div class='login_status'>"), n.push("\t<button class='logout'>登入 │ 註冊</button>"), n.push("\t<div class='login'>"), n.push("\t\t<div class='user_id'></div>"), n.push("\t\t<a class='logout_btn prevent_control_by_player' href='/j_spring_security_logout'>登出</a>"), n.push("\t</div>"), n.push("</div>");
        for (var o = e.blocks, r = 0; r < o.length; r++)
          for (var i = o[r], a = 0; a < i.length; a++) {
            var s = i[a];
            if (-1 != s.showDevices.indexOf("mobile")) {
              var l = s.submenuItems;
              if (n.push("<div class='divider'></div>"), n.push("<div class='main'>"), n.push("\t<a class='item' href='" + s.href + "' target='" + s.target + "' title='" + s.title + "' data-category='" + s.category + "' data-is-auth='" + s.isAuth + "'>"), l.length > 0 && n.push("<div class='arrow down'></div>"), n.push("\t\t<img class='icon' src='" + s.iconImage + "' />"), n.push("\t\t<div class='text'>" + s.name + "</div>"), n.push("\t</a>"), l.length > 0) {
                n.push("<div class='sub' data-category='" + s.category + "'>");
                for (var u = 0; u < l.length; u++) {
                  var c = l[u];
                  n.push("<div class='divider'></div>"), n.push("<a class='subItems' href='" + c.href + "' target='" + c.target + "' title='" + c.title + "' data-is-auth='" + s.isAuth + "' data-submenu-type='" + c.submenuType + "' data-submenu-id='" + c.submenuId + "'>" + c.name + "</a>")
                }
                n.push("</div>")
              }
              n.push("</div>")
            }
          }
        return n.push("\t</div>"), n.push("</div>"), n.join("")
      }
  };
  t.default = l
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = a(n(3)),
    r = (a(n(9)), a(n(2)), a(n(8))),
    i = a(n(0));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = new function () {
      var e = this;
      this.set = function () {
        var e = $("header[data-litv-header] .header_container .center_section");
        t(e)
      }, this.setFocus = function (e) {
        var t = $("header[data-litv-header] .header_container .center_section .item");
        if (t.removeClass("focus"), !e.main) return null;
        for (var n = 0; n < t.length; n++) {
          var o = t.eq(n),
            r = o.attr("href");
          if (r && -1 != r.indexOf(e.main)) {
            o.addClass("focus");
            break
          }
        }
        for (var i = 0; i < t.length; i++) {
          var a = t.eq(i);
          if (a.hasClass("focus")) return a.attr("data-category")
        }
        return null
      }, this.loginStatus = function (t) {
        e.login = t
      };
      var t = function (t) {
        t.find(".item").click(function (t) {
          "true" != o.default.findElementByClass(t, "item").attr("data-is-auth") || e.login || (t.preventDefault(), r.default.show(), l.set(t), i.default.off(r.default.DIALOG_DISMISS_EVENT, l.dismiss), i.default.on(r.default.DIALOG_DISMISS_EVENT, l.dismiss))
        })
      }
    },
    l = new function () {
      var e = null;
      this.set = function (t) {
        e = t
      }, this.dismiss = function () {
        if (s.login) {
          var t = o.default.getEventAttribute(e, "href");
          location.href = t
        }
        i.default.off(r.default.DIALOG_DISMISS_EVENT, l.dismiss)
      }
    };
  t.default = s
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = new function () {
      var e = null;
      this.set = function (e) {
        var n = $("header[data-litv-header] .header_container .bottom_section"),
          o = n.find(".category_section");
        if (n.removeClass("active"), o.removeClass("active"), e) {
          var r = o.filter("[data-category='" + e + "']").eq(0);
          r.length > 0 && (n.addClass("active"), r.addClass("active"), t(), $(window).off("resize", t), $(window).on("resize", t))
        }
      }, this.setHeaderHeight = function (e) {
        $(".header_more_item_balloon").remove()
      }, this.setFocus = function (e) {
        var t = $("header[data-litv-header] .header_container .bottom_section .category_section");
        if (t.find(".item").removeClass("focus"), e.sub)
          for (var n = t.filter(".active").find(".item"), o = 0; o < n.length; o++) {
            var r = n.eq(o),
              i = r.attr("href");
            if (i && -1 != i.indexOf(e.sub)) {
              r.addClass("focus");
              break
            }
          }
      };
      var t = function () {
          clearTimeout(e), e = setTimeout(function () {
            var e = $("header[data-litv-header] .header_container .bottom_section .category_section.active");
            if (!(e.length <= 0)) {
              var t = e.find(".item"),
                o = t.not(".more"),
                r = t.filter(".more"),
                i = e.offset().top,
                a = new Array;
              o.addClass("active"), r.removeClass("active");
              for (var s = 0; s < o.length; s++) {
                var l = o.eq(s);
                l.offset().top > i && a.push(l)
              }
              for (var u = 0; u < a.length; u++) a[u].removeClass("active");
              if (a.length > 0) {
                var c = a[0],
                  d = o.index(c) - 1,
                  f = o.eq(d);
                f.removeClass("active"), r.addClass("active"), a.unshift(f), n(a)
              }
            }
          }, 300)
        },
        n = function (e) {
          var t = $("header[data-litv-header] .header_container .bottom_section"),
            n = t.find(".category_section.active .item.more");
          n.off("mouseenter"), n.on("mouseenter", function (o) {
            var i = t.css("top");
            (i = parseInt(i)) || r.show(n, e)
          })
        }
    },
    r = new function () {
      var e = this;
      this.show = function (e, r) {
        $(".header_more_item_balloon").remove();
        var i = $("body"),
          a = n(r);
        i.append(a), o(e), t()
      }, this.dismiss = function () {
        $(".header_more_item_balloon").remove(), $(window).off("scrolldown", e.dismiss)
      };
      var t = function () {
          var t = $(".header_more_item_balloon"),
            n = t.find(".blank");
          t.mouseleave(function (t) {
            e.dismiss()
          }), n.mouseenter(function (t) {
            e.dismiss()
          }), $(window).off("scrolldown", e.dismiss), $(window).on("scrolldown", e.dismiss)
        },
        n = function (e) {
          var t = new Array,
            n = "";
          e.length >= 6 ? n = "style='column-count: 2;'" : e.length >= 12 && (n = "style='column-count: 3;'"), t.push("<div class='header_more_item_balloon'>"), t.push("\t<div class='blank'></div>"), t.push("\t<div class='tab'>"), t.push("\t\t<div class='text'>更多</div>"), t.push("\t\t<div class='icon'></div>"), t.push("\t</div>"), t.push("\t<div class='items' " + n + ">");
          for (var o = 0; o < e.length; o++) {
            var r = e[o];
            t.push(r.prop("outerHTML"))
          }
          return t.push("\t</div>"), t.push("</div>"), t.join("")
        },
        o = function (e) {
          e.width(), e.height();
          var t = e.offset(),
            n = $(".header_more_item_balloon"),
            o = t.top - $(window).scrollTop(),
            r = $(window).width() - t.left - e.outerWidth();
          n.css("top", o), n.css("right", r)
        }
    };
  t.default = o
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = i(n(8)),
    r = i(n(2));

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var a = new function () {
    var e = this;
    this.loginStatus = function (n) {
      var o = $("header[data-litv-header] .header_container .promo_section"),
        i = o.find(".personal_center"),
        a = o.find(".user_info");
      n ? (r.default.getUserStatusInfo(function (e) {
        a.html(e.displayName)
      }), i.html("登出")) : i.html("登入/註冊"), e.login = n, t(n)
    };
    var t = function (e) {
        var t = $("header[data-litv-header] .header_container .promo_section").find(".personal_center");
        t.off("click"), t.on("click", function () {
          n(e)
        })
      },
      n = function (e) {
        e ? location.href = "/j_spring_security_logout" : o.default.show()
      }
  };
  t.default = a
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = l(n(2)),
    i = l(n(31)),
    a = l(n(1)),
    s = l(n(0));

  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var u = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.FOOTER_RESIZE_EVENT = "footer.footerrResizeEvent"
      }
      return o(e, [{
        key: "init",
        value: function () {
          v(function () {
            p(), f(), i.default.start(), h()
          })
        }
      }]), e
    }(),
    c = null,
    d = null,
    f = function () {
      var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      c && (c.disconnect(), c = null);
      var t = $("footer[data-litv-footer]");
      t.length <= 0 || (c = new e(p)).observe(t[0], {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
      })
    },
    p = function () {
      clearTimeout(d), d = setTimeout(function () {
        var e = $("footer[data-litv-footer]").outerHeight();
        if (m.height != e) {
          m.height = e;
          for (var t = $("[data-attr-resize-by-footer]"), n = 0; n < t.length; n++) {
            var o = t.eq(n),
              r = o.attr("data-attr-resize-by-footer");
            o.css(r, e)
          }
          s.default.emit(m.FOOTER_RESIZE_EVENT, e)
        }
      }, 300)
    },
    h = function () {
      var e = $("footer[data-litv-footer] .footer_container .sponsor_disclaimer");
      if ("eWFob28=" != sessionStorage.getItem("sponsorName")) return e.removeClass("active"), void e.html("");
      a.default.get({
        url: "/resources/gulp-dest/meta/yahoo_footer.html",
        selectMethod: "GET",
        request: {},
        dataType: "html",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8"
      }, function (t, n) {
        e.addClass("active"), e.html(n)
      }, null, !0)
    },
    v = function (e) {
      var t = $("footer[data-litv-footer]");
      t.length <= 0 || (t.find(".footer_container").length > 0 ? e() : r.default.getFooterHtml(function (n) {
        t.html(n), e()
      }))
    },
    m = new u;
  m.init(), t.default = m
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = p(n(126)),
    r = p(n(7)),
    i = p(n(21)),
    a = p(n(133)),
    s = p(n(125)),
    l = p(n(134)),
    u = p(n(135)),
    c = p(n(127)),
    d = p(n(136)),
    f = p(n(128));

  function p(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var h = new function () {
    var e = new Array;
    this.setParam = function (n) {
      var o = new t;
      return o.setParam(n), e.push(o), o
    }, this.setContentFocus = function (t) {
      for (var n = 0; n < e.length; n++) e[n].setContentFocus(t)
    }, this.ec = new function () {
      this.start = function (t) {
        for (var n = 0; n < e.length; n++) e[n].ec.start(t)
      }, this.end = function () {
        for (var t = 0; t < e.length; t++) e[t].ec.end()
      }
    };
    var t = function () {
      var e = this,
        t = null,
        n = null,
        p = [];
      this.setParam = function (t) {
        e.param = t, h(), v()
      }, this.setContentFocus = function (e) {
        for (var t = 0; t < p.length; t++) {
          var n = p[t];
          "function" == typeof n.setFocus && n.setFocus(e)
        }
      }, this.setTabFocus = function (n) {
        "string" == typeof n && (n = e.param.types.indexOf(n)), -1 != n ? t.setFocus(n) : t.setFocus(0)
      }, this.ec = new function () {
        this.start = function (r) {
          var i = e.param.types.indexOf("merchandise");
          if (-1 != i) {
            for (var a = 0; a < e.param.types.length; a++)
              if (1 == t.getContainer(a).tab.hasClass("focus")) {
                o.set(a);
                break
              } n.setData(r), t.show(i), e.setTabFocus(i), t.setMouseEnterCallback(function (e) {
              o.set(-1)
            })
          }
        }, this.end = function () {
          var t = o.get();
          t >= 0 && e.setTabFocus(t)
        };
        var o = new function () {
          var e = -1;
          this.set = function (t) {
            e = t
          }, this.get = function () {
            return e
          }
        }
      };
      var h = function () {
          t = o.default.setParam({
            container: $(e.param.container),
            size: e.param.types.length
          })
        },
        v = function () {
          for (var n = 0; n < e.param.types.length; n++) {
            var o = t.getContainer(n);
            (0, g[e.param.types[n]])(n, o)
          }
        },
        m = function (n, o, r) {
          "" == o.html() && t.setHide(n), e.setTabFocus(e.param.focusType)
        },
        g = {
          episode: function (t, n) {
            var o = e.param.data;
            if (r.default.isRulePlayList(o)) {
              var a = g.rulePlayList;
              return e.param.focusType = "episode", void a(t, n)
            }
            var l = n.tab,
              u = n.content;
            l.html(o.episodeGroupTitle), i.default.positiveFilms(o, function (n) {
              n.contentType = o.contentType;
              var r = s.default.setParam({
                container: u,
                data: n,
                episodeMode: e.param.episodeMode,
                clickCallback: function (t) {
                  "function" == typeof e.param.clickCallback && e.param.clickCallback("episode", t)
                }
              });
              p.push(r), m(t, u), r.setFocus(o)
            })
          },
          attention: function (t, n) {
            var o = e.param.data;
            i.default.focusTree(o, function (r) {
              var i = n.tab,
                a = n.content;
              i.html("看點");
              var s = l.default.setParam({
                container: a,
                data: r,
                clickCallback: function (t) {
                  "function" == typeof e.param.clickCallback && e.param.clickCallback("attention", t)
                }
              });
              p.push(s), m(t, a), s.setFocus(o)
            })
          },
          teaser: function (t, n) {
            var o = e.param.data;
            i.default.teasers(o.seriesId, function (r) {
              r.contentType = o.contentType;
              var i = n.tab,
                a = n.content;
              i.html("預告花絮");
              var s = u.default.setParam({
                container: a,
                data: r,
                clickCallback: function (t) {
                  "function" == typeof e.param.clickCallback && e.param.clickCallback("teaser", t)
                }
              });
              p.push(s), m(t, a), s.setFocus(o)
            })
          },
          moreFree: function (t, n) {
            var o = e.param.data;
            i.default.recommands(o, function (e) {
              var o = n.tab,
                r = n.content;
              o.html(e[0].name), c.default.setParam({
                container: r,
                data: e
              }), m(t, r)
            })
          },
          rank: function (t, n) {
            var o = e.param.data;
            i.default.ranks(o.contentType, function (e) {
              var o = n.tab,
                r = n.content;
              o.html("排行榜"), d.default.setParam({
                container: r,
                data: e
              }), m(t, r)
            })
          },
          merchandise: function (e, t) {
            var o = t.tab,
              r = t.content;
            o.html("週邊商品"), n = a.default.setParam({
              tab: o,
              container: r
            }), m(e, r)
          },
          rulePlayList: function (t, n) {
            var o = e.param.data;
            i.default.rulePlays(o, function (r) {
              var i = n.tab,
                a = n.content;
              i.html("播放清單");
              var s = f.default.setParam({
                container: a,
                data: r,
                clickCallback: function (t) {
                  "function" == typeof e.param.clickCallback && e.param.clickCallback("episode", t)
                }
              });
              p.push(s), m(t, a), s.setFocus(o)
            })
          }
        }
    }
  };
  t.default = h
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = r(n(3));

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  r(n(18));
  var i = new function () {
    this.type = {
      imageMode: {
        type: "imageMode"
      },
      episodeMode: {
        type: "episodeMode"
      }
    };
    var e = new Array;
    this.setParam = function (n) {
      var r = new t;
      return r.setParam(n), e.push(r), o.default.getPosterBannerStyle(), r
    }, this.setFocus = function (t) {
      for (var n = 0; n < e.length; n++) e[n].setFocus(t)
    };
    var t = function () {
      var e = this;
      this.setParam = function (t) {
        e.param = t;
        var n = $(t.container),
          o = u(e.param.data, e.param.episodeMode);
        n.html(o), "" != n.html() && (r(), n.find(".img.lazyload").lazyload())
      }, this.setFocus = function (o) {
        $(e.param.container), l(o.contentId), n(), t(o)
      };
      var t = function (t) {
          var n = $(e.param.container),
            o = n.find(".title_charge");
          if (n.find(".episode").filter(".focus").length <= 0) o.html("");
          else {
            var r = e.param.data,
              i = r.seasons,
              a = new Array;
            if (!(i.length <= 1)) {
              if (0 == r.hasSeasons) a = i[0].posterBanners;
              else if (1 == r.hasSeasons) {
                for (var s = t.season, l = null, u = 0; u < i.length; u++) {
                  var c = i[u];
                  s == c.season && (l = c)
                }
                l && (a = l.posterBanners)
              }
              o.html(""), o.append("<div class='title'>" + t.title + "</div>");
              for (var d = 0; d < a.length; d++) {
                var f = a[d];
                o.append("<div class='charge poster_banner_episode_tag' data-poster-banner='" + f + "'></div>")
              }
            }
          }
        },
        n = function () {
          window.setTimeout(function () {
            var t = $(e.param.container).find(".player_episode_view"),
              n = t.find(".episode").filter(".focus");
            if (!(n.length <= 0)) {
              var o = t.offset().top,
                r = t.outerHeight(),
                i = t.scrollTop(),
                a = n.offset().top - o + i;
              (a -= (r - n.outerHeight()) / 2) < 0 && (a = 0), t.stop().animate({
                scrollTop: a
              }, 1e3, "swing")
            }
          }, 300)
        },
        r = function () {
          $(e.param.container), s(), a()
        },
        a = function () {
          var t = $(e.param.container).find(".episode_section .episode"),
            r = e.param.data.seasons;
          t.mouseenter(function (e) {
            o.default.findElementByClass(e, "episode").addClass("hover")
          }), t.mouseleave(function (e) {
            o.default.findElementByClass(e, "episode").removeClass("hover")
          }), t.click(function (t) {
            var i = o.default.getEventAttribute(t, "data-season-id"),
              a = o.default.getEventAttribute(t, "data-episode-id"),
              s = o.default.getEventAttribute(t, "data-content-id"),
              u = r[i].episode[a];
            l(s), n(), void 0 !== e.param.clickCallback && (t.preventDefault(), e.param.clickCallback(u))
          })
        },
        s = function () {
          var t = $(e.param.container),
            n = t.find(".group_category"),
            r = t.find(".episode_section");
          n.mouseover(function (e) {
            var t = o.default.getEventAttribute(e, "data-season-id");
            n.filter("[data-season-id='" + t + "']").addClass("hover")
          }), n.mouseout(function (e) {
            var t = o.default.getEventAttribute(e, "data-season-id");
            n.filter("[data-season-id='" + t + "']").removeClass("hover")
          }), n.click(function (e) {
            var t = o.default.getEventAttribute(e, "data-season-id"),
              i = n.filter("[data-season-id='" + t + "']"),
              a = r.filter("[data-season-id='" + t + "']");
            !0 === i.hasClass("focus") ? (i.removeClass("focus"), a.removeClass("focus")) : !1 === i.hasClass("focus") && (n.removeClass("focus"), r.removeClass("focus"), i.addClass("focus"), a.addClass("focus"))
          })
        },
        l = function (t) {
          var n = $(e.param.container),
            r = n.find(".group_category"),
            i = n.find(".episode_section");
          r.removeClass("focus"), i.removeClass("focus"), i.find(".episode").removeClass("focus");
          var a = i.find(".episode[data-content-id=" + t + "]").addClass("focus");
          if (a.length > 0) {
            var s = o.default.getEventAttribute({
              target: a
            }, "data-season-id");
            r.filter("[data-season-id='" + s + "']").addClass("focus"), i.filter("[data-season-id='" + s + "']").addClass("focus")
          }
          i.length <= 1 && i.addClass("focus")
        },
        u = function (e, t) {
          var n = e.seasons;
          if (!Array.isArray(n) || n.length <= 0) return "";
          var o = new Array;
          if (o.push("<div class='player_episode_view'>"), o.push("<div class='title_charge'>"), n.length <= 1) {
            o.push("<div class='title'>" + e.title + "</div>");
            for (var r = e.posterBanners, a = 0; a < r.length; a++) {
              var s = r[a];
              o.push("<div class='charge poster_banner_episode_tag' data-poster-banner='" + s + "'></div>")
            }
          }
          o.push("</div>");
          for (var l = 0; l < n.length; l++) {
            var u = n[l],
              c = u.episode;
            if (!(c.length <= 0)) {
              var d = u.posterBanners;
              if (n.length <= 1 ? o.push("<div class='group_category' data-season-id=" + l + " title='" + u.seasonName + "' style='display: none;'>") : n.length > 1 && o.push("<div class='group_category' data-season-id=" + l + " title='" + u.seasonName + "'>"), o.push("<div class='group_name'>" + u.seasonName + "</div>"), o.push("<div class='group_toggle_icon'></div>"), o.push("</div>"), n.length <= 1 ? o.push("<div class='episode_section' data-season-id=" + l + " style='display: block;'>") : n.length > 1 && o.push("<div class='episode_section' data-season-id=" + l + ">"), "show" == e.contentType || "blessedlife" == e.contentType || t == i.type.imageMode)
                for (var f = 0; f < c.length; f++) {
                  var p = c[f],
                    h = "/vod/" + e.contentType + "/content.do?content_id=" + p.contentId;
                  o.push("<a href=" + h + " data-season-id=" + l + " data-episode-id=" + f + " data-content-id=" + p.contentId + " class='episode show' title=" + e.title + p.secondaryMark + "線上看>"), o.push("<div class='poster'>"), o.push("<img class='img lazyload ga_player_episode' data-src='" + p.videoImage + "' />");
                  for (var v = 0; v < d.length; v++) d[v], o.push("<div class='poster_banner_episode_triangle_icon' data-poster-banner='" + d + "' data-charge-mode='" + p.chargeMode + "'></div>");
                  o.push("<div class='play_icon ga_player_episode'></div>"), p.originalDate && o.push("<div class='date'>" + p.originalDate + "</div>"), o.push("</div>"), o.push("<div class='vod_title'>" + p.secondaryMark + "</div>"), o.push("</a>")
                } else
                  for (var m = 0; m < c.length; m++) {
                    var g = c[m],
                      y = "/vod/" + e.contentType + "/content.do?content_id=" + g.contentId;
                    o.push("<a href = " + y + " div data-season-id=" + l + " data-episode-id=" + m + " data-content-id=" + g.contentId + " class='episode' title=" + e.title + g.secondaryMark + "線上看>"), o.push("<div class='text ga_player_episode'>" + g.episodeName + "</div>");
                    for (var _ = 0; _ < d.length; _++) {
                      var b = d[_];
                      o.push("<div class='poster_banner_episode_icon' data-poster-banner='" + b + "' data-charge-mode='" + g.chargeMode + "'></div>")
                    }
                    o.push("</a>")
                  }
              o.push("</div>")
            }
          }
          return o.push("</div>"), o.join("")
        }
    }
  };
  t.default = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(3)),
    r = new function () {
      var e = new Array;
      this.setParam = function (n) {
        var o = new t;
        return o.setParam(n), e.push(o), o
      };
      var t = function () {
        var e = this;
        this.setParam = function (n) {
          e.param = n;
          var o = $(e.param.container),
            r = c(e.param);
          o.html(r), u(), t(), $(window).off("resize", t), $(window).on("resize", t)
        }, this.setHide = function (t) {
          var n = $(e.param.container).find(".common_tabs_section .common_tabs .tab_cell").eq(t),
            o = n.next(".common_tabs_section .common_tabs .tab_devision");
          n.addClass("hide"), o.addClass("hide"), a(), 1 == n.hasClass("focus") && e.setFocus(t)
        }, this.show = function (t) {
          var n = $(e.param.container).find(".common_tabs_section .common_tabs .tab_cell").eq(t),
            o = n.prev(".common_tabs_section .common_tabs .tab_devision");
          n.removeClass("hide"), o.removeClass("hide"), a()
        }, this.setFocus = function (t) {
          var n = $(e.param.container),
            o = n.find(".common_tabs_section .common_tabs .tab_cell"),
            a = n.find(".common_tabs_section .common_tab_contents .tab_content"),
            s = o.eq(t),
            l = a.eq(t);
          if (0 == s.hasClass("hide")) o.removeClass("focus"), s.addClass("focus"), a.removeClass("focus"), l.addClass("focus"), r(), i();
          else
            for (var u = 0; u < o.length; u++)
              if (0 == (s = o.eq(u)).hasClass("hide")) {
                window.setTimeout(function () {
                  e.setFocus(u)
                }, 0);
                break
              }
        }, this.getContainer = function (t) {
          var n = $(e.param.container);
          return {
            tab: n.find(".common_tabs_section .common_tabs .tab_cell").eq(t),
            content: n.find(".common_tabs_section .common_tab_contents .tab_content").eq(t)
          }
        }, this.setMouseEnterCallback = function (t) {
          e.param.mouseEnterCallback = t
        };
        var t = function () {
            window.setTimeout(function () {
              n(), a(), r(), i()
            }, 500)
          },
          n = function () {
            if (0 != l()) {
              var t = $(e.param.container).find(".common_tabs_section .common_tabs_container .slide_section");
              0 != t.position().left && t.css("left", "0px")
            }
          },
          r = function () {
            if (0 != l()) {
              var t = $(e.param.container),
                n = t.find(".common_tabs_section .common_tabs .tab_cell").filter(".focus");
              if (n.length > 0 && 0 == n.hasClass("hide")) {
                var o = t.find(".common_tabs_section .common_tabs_container .common_tabs"),
                  r = t.find(".common_tabs_section .common_tabs_container .slide_section"),
                  i = o.offset().left,
                  a = i + o.width(),
                  s = n.offset().left,
                  u = s + n.width(),
                  c = 0;
                s < a && u > a ? c = a - u : s >= a ? c = a - s - n.width() : s < i && u > i ? c = i - s : u <= i && (c = i - u + n.width()), 0 != c && (c = r.position().left + c, r.css("left", c + "px"))
              }
            }
          },
          i = function () {
            if (0 != l()) {
              for (var t = $(e.param.container), n = t.find(".common_tabs_section .common_tabs_container .common_tabs"), o = t.find(".common_tabs_section .common_tabs_container .tab_cell"), r = n.offset().left, i = r + n.width(), a = 0, s = 0, u = 0; u < o.length; u++) {
                var c = o.eq(u);
                if (0 == c.hasClass("hide")) {
                  a = c.offset().left;
                  break
                }
              }
              for (var d = o.length - 1; d >= 0; d--) {
                var f = o.eq(d);
                if (0 == f.hasClass("hide")) {
                  s = f.offset().left + f.width();
                  break
                }
              }
              var p = t.find(".common_tabs_section .common_tabs_container .arrow_left"),
                h = t.find(".common_tabs_section .common_tabs_container .arrow_right");
              r > a ? p.addClass("more") : p.removeClass("more"), i < s ? h.addClass("more") : h.removeClass("more")
            }
          },
          a = function () {
            var t = $(e.param.container),
              n = t.find(".common_tabs_section .common_tabs .tab_cell"),
              o = t.find(".common_tabs_section .common_tabs_container .common_tabs"),
              r = t.find(".common_tabs_section .common_tabs_container .arrow_right, .common_tabs_section .common_tabs_container .arrow_left");
            r.addClass("hide");
            for (var i = 0, a = 0, s = o.offset().left, l = o.offset().left + o.width(), u = 0; u < n.length; u++)
              if (0 == n.eq(u).hasClass("hide")) {
                i = n.eq(u).offset().left;
                break
              } for (var c = n.length - 1; c >= 0; c--)
              if (0 == n.eq(c).hasClass("hide")) {
                a = n.eq(c).offset().left + n.eq(c).width();
                break
              }(i < s || a > l) && r.removeClass("hide")
          },
          s = function (t) {
            var n = $(e.param.container),
              o = n.find(".common_tabs_section .common_tabs .tab_cell"),
              r = n.find(".common_tabs_section .common_tabs_container .common_tabs"),
              a = n.find(".common_tabs_section .common_tabs_container .slide_section"),
              s = r.offset().left,
              l = r.offset().left + r.width(),
              u = 0;
            if ("+" == t)
              for (var c = 0; c < o.length; c++) {
                var d = o.eq(c);
                if (0 == d.hasClass("hide")) {
                  var f = d.offset().left,
                    p = f + d.width();
                  if (f < l && p > l) {
                    u = l - p;
                    break
                  }
                  if (f >= l) {
                    u = l - f - d.width();
                    break
                  }
                }
              } else if ("-" == t)
                for (var h = o.length - 1; h >= 0; h--) {
                  var v = o.eq(h);
                  if (0 == v.hasClass("hide")) {
                    var m = v.offset().left,
                      g = m + v.width();
                    if (m < s && g > s) {
                      u = s - m;
                      break
                    }
                    if (g <= s) {
                      u = s - g + v.width();
                      break
                    }
                  }
                }
            0 != u && (u = a.position().left + u, a.animate({
              left: u + "px"
            }, 100, function () {
              i()
            }))
          },
          l = function () {
            return 1 != $(".common_tabs_section .common_tabs_container .arrow_left, .common_tabs_section .common_tabs_container .arrow_right").hasClass("hide")
          },
          u = function () {
            var t = $(e.param.container),
              n = t.find(".common_tabs_section .common_tabs .tab_cell");
            n.mouseenter(function (t) {
              var r = o.default.findElementByClass(t, "tab_cell"),
                i = n.index(r);
              e.setFocus(i), "function" == typeof e.param.mouseEnterCallback && e.param.mouseEnterCallback(i)
            }), t.find(".common_tabs_section .common_tabs_container .arrow_left").click(function (e) {
              s("-")
            }), t.find(".common_tabs_section .common_tabs_container .arrow_right").click(function (e) {
              s("+")
            })
          },
          c = function (e) {
            var t = new Array;
            t.push("<div class='common_tabs_section'>"), t.push("<div class='common_tabs_container'>"), t.push("<div class='arrow_right'></div>"), t.push("<div class='arrow_left'></div>"), t.push("<div class='common_tabs'>"), t.push("<div class='slide_section'>");
            for (var n = 0; n < e.size; n++) t.push("<div class='tab_cell'></div>"), n < e.size - 1 && t.push("<div class='tab_devision'></div>");
            t.push("</div>"), t.push("</div>"), t.push("</div>"), t.push("<div class='common_tab_contents'>");
            for (var o = 0; o < e.size; o++) t.push("<div class='tab_content'></div>");
            return t.push("</div>"), t.push("</div>"), t.join("")
          }
      }
    };
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = r(n(3));

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  r(n(18)), window.litv = window.litv || {};
  var i = new function () {
    this.setParam = function (t) {
      var n = new e;
      return n.setParam(t), n
    };
    var e = function () {
      var e = this;
      this.setParam = function (o) {
        e.param = o;
        var r = $(e.param.container),
          i = n(e.param.data);
        r.html(i), r.html() && (t(e.param.data), r.find(".img.lazyload").lazyload(), litv.launchNativeAd && litv.launchNativeAd())
      };
      var t = function (t) {
          var n = $(e.param.container).find(".more_free_vod");
          n.mouseenter(function (e) {
            o.default.findElementByClass(e, "more_free_vod").addClass("hover")
          }), n.mouseleave(function (e) {
            o.default.findElementByClass(e, "more_free_vod").removeClass("hover")
          }), n.click(function (n) {
            if ("function" == typeof e.param.clickCallback) {
              var r = o.default.getEventAttribute(n, "data-id"),
                i = t[0].vodList;
              n.preventDefault(), e.param.clickCallback(i[r])
            }
          })
        },
        n = function (e) {
          var t = new Array,
            n = (e = e[0]).vodList;
          t.push("<div class='player_recommand_view'>");
          for (var o = 0; o < n.length; o++) {
            var r = n[o],
              i = "/vod/" + r.contentType + "/content.do?content_id=" + r.contentId;
            if ("l" == e.programPublishPicsType) t.push("<a class='more_free_vod landscape' title='" + r.title + "' href='" + i + "' data-id=" + o + ">"), t.push("<div class='vod_poster'>"), t.push("<img class='img lazyload ga_player_recommand' data-src=" + r.videoImage + " />"), t.push("<div class='play_icon ga_player_recommand'></div>"), t.push("</div>"), t.push("<div class='vod_title'>" + r.title + "</div>");
            else {
              if (t.push("<a class='more_free_vod' title='" + r.title + "' href='" + i + "' data-id=" + o + ">"), t.push("<div class='vod_poster'>"), t.push("<img class='img lazyload ga_player_recommand' data-src=" + r.imageFile + " />"), r.posterBanner)
                for (var a = 0; a < r.posterBanner.length; a++) {
                  var s = r.posterBanner[a];
                  t.push("<div class='poster_banner_poster_icon' data-poster-banner='" + s + "'></div>")
                }
              t.push("<div class='play_icon ga_player_recommand'></div>"), t.push("</div>"), r.score ? (t.push("<div class='vod_score'>" + r.score + "</div>"), t.push("<div class='vod_title'>" + r.title + "</div>")) : t.push("<div class='vod_title'>" + r.title + "</div>"), "movie" == r.contentType ? t.push("<div class='vod_display_count'>" + r.commentary + "</div>") : t.push("<div class='vod_display_count'>" + r.displayCount + "</div>")
            }
            t.push("</a>")
          }
          return t.push("</div>"), t.join("")
        }
    }
  };
  t.default = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = r(n(3));

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  r(n(18));
  var i = new function () {
    var e = new Array;
    this.setParam = function (n) {
      var o = new t;
      return o.setParam(n), e.push(o), o
    }, this.setFocus = function (t) {
      for (var n = 0; n < e.length; n++) e[n].setFocus(t)
    };
    var t = function () {
      var e = this;
      this.setParam = function (t) {
        e.param = t;
        var o = $(t.container),
          i = n(e.param.data);
        o.html(i), o.html() && (r(e.param.data), o.find(".img.lazyload").lazyload())
      }, this.setFocus = function (n) {
        var o = $(e.param.container).find(".episode"),
          r = n.contentId;
        if (r) {
          var i = o.filter("[data-content-id='" + r + "']");
          o.removeClass("focus"), i.addClass("focus"), t()
        }
      };
      var t = function () {
          window.setTimeout(function () {
            var t = $(e.param.container).find(".player_rule_play_list"),
              n = t.find(".episode").filter(".focus");
            if (!(n.length <= 0)) {
              var o = t.offset().top,
                r = t.outerHeight(),
                i = t.scrollTop(),
                a = n.offset().top - o + i;
              (a -= (r - n.outerHeight()) / 2) < 0 && (a = 0), t.stop().animate({
                scrollTop: a
              }, 1e3, "swing")
            }
          }, 300)
        },
        n = function (e) {
          if (0 == Array.isArray(e) || e.length <= 0) return "";
          var t = new Array;
          t.push("<div class='player_rule_play_list'>");
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            t.push("<a class='episode' href='/vod/" + o.contentType + "/content.do?content_id=" + o.contentId + "' data-content-id=" + o.contentId + " title='" + o.title + "'>"), t.push("\t<div class='poster'>"), t.push("\t\t<img class='img lazyload' data-src='" + o.videoImage + "' />"), t.push("\t\t<div class='play_icon'></div>"), t.push("\t</div>"), t.push("\t<h2 class='title'>" + o.title + "</h2>"), t.push("</a>")
          }
          return t.push("</div>"), t.join("")
        },
        r = function (t) {
          var n = $(e.param.container).find(".episode");
          n.mouseenter(function (e) {
            o.default.findElementByClass(e, "episode").addClass("hover")
          }), n.mouseleave(function (e) {
            o.default.findElementByClass(e, "episode").removeClass("hover")
          }), n.click(function (r) {
            r.preventDefault();
            var i = o.default.findElementByClass(r, "episode"),
              a = n.index(i),
              s = t[a];
            e.setFocus(s), "function" == typeof e.param.clickCallback && e.param.clickCallback(s)
          })
        }
    }
  };
  t.default = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(1)),
    r = function () {
      var e = "locBookmark",
        t = [],
        n = 35;
      return function (e) {
        e && (t = JSON.parse(e))
      }(localStorage[e]), {
        add: function (n, r, i, a, s, l, u, c) {
          var d = {};
          d.contentType = n, d.seriesId = r, d.season = i, d.episode = a, d.videoType = s, d.groupId = l, d.timestamp = u, d.saveTime = +new Date, d.completed = c || !1;
          var f = function (e) {
            for (var n = 0, o = t.length; n < o; n++)
              if (t[n].seriesId == e) return n;
            return -1
          }(r); - 1 == f ? t.unshift(d) : t[f].saveTime < d.saveTime && (t.splice(f, 1), t.unshift(d)),
            function (t) {
              try {
                localStorage[e] = JSON.stringify(t)
              } catch (e) {
                console.log(e.stack)
              }
            }(t),
            function (e, t) {
              var n = {
                url: "/vod/setBookmark",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                dataType: "json",
                request: d
              };
              void 0 !== o.default && o.default.get(n, function (e, t) {}, null, !1)
            }()
        },
        del: function (e, t) {
          ! function (e, t) {
            var n = {
              url: "/vod/delBookmarks",
              dataType: "json",
              request: {
                seriesIds: e
              }
            };
            void 0 !== o.default && o.default.get(n, function (e, n) {
              "function" == typeof t && t(n)
            }, null, !1)
          }(e, t)
        },
        find: function (e, t) {
          ! function (e, t) {
            var n = {
              url: "/vod/getBookmarkItem",
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              dataType: "text",
              request: {
                seriesId: e
              }
            };
            void 0 !== o.default && o.default.get(n, function (e, n) {
              t(n)
            }, function () {
              t(null)
            }, !1)
          }(e, function (e) {
            t(e)
          })
        },
        getLocalProgramList: function (e, r, i) {
          ! function (e) {
            void 0 !== o.default && o.default.get({
              url: "/vod/getBookmarkAmount",
              dataType: "json",
              request: null
            }, function (t, n) {
              e(n)
            }, function () {
              e(n)
            }, !1)
          }(function (a) {
            n = a, t.length > n && (t = t.slice(0, n)),
              function (e, t, n) {
                var r = {
                  url: "/vod/getMultipleProgramByList",
                  dataType: "json",
                  contentType: "application/json",
                  selectMethod: "POST",
                  request: JSON.stringify(e)
                };
                void 0 !== o.default && o.default.get(r, function (e, n) {
                  t(n)
                }, function (e, t, o, r) {
                  n(t, o, r)
                }, !1)
              }(function (e) {
                if (e) {
                  for (var n = [], o = 0, r = t.length; o < r; o++) t[o].contentType == e && n.push(t[o]);
                  return n
                }
                return t
              }(e), r, i)
          })
        },
        getServerProgramList: function (e, t, n) {
          ! function (e, t, n) {
            var r = {
              url: "/vod/getMultipleProgramByContentType",
              dataType: "json",
              request: {
                contentType: e || null
              }
            };
            void 0 !== o.default && o.default.get(r, function (e, n) {
              t(n)
            }, function (e, t, o, r) {
              n(t, o, r)
            }, !1)
          }(e, t, n)
        }
      }
    }();
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = s(n(2)),
    r = (s(n(7)), s(n(131))),
    i = s(n(145)),
    a = s(n(146));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.default = function (e) {
    var t = this,
      n = new Promise(function (e, t) {
        e()
      });
    t.callbackObj = null, t.playoutChannel = new i.default(e), t.vodChannel = new a.default(e), this.get = function (e, o, i) {
      e || (e = ""), n = n.then(function () {
        if (null == t.callbackObj || e != t.callbackObj.bsmPkgCategory) return new Promise(function (t, n) {
          r.default.getChannelLine(e, function (e) {
            t(e)
          })
        });
        if (0 != i) {
          var n = t.callbackObj.channelLine;
          n = k(n)
        }
        "function" == typeof o && o(t.callbackObj)
      }).then(function (t) {
        if (t) return new Promise(function (n, o) {
          r.default.getVodChannelPrograms(t.scheduleHash, function (e) {
            t = l(t, e), t = u(t), t = c(t), t = d(t), t = f(t), n(t)
          }, e)
        })
      }).then(function (t) {
        if (t) return new Promise(function (n, o) {
          r.default.getVodChannelDescription(t.descriptionHash, function (e) {
            t = s(t, e), n(t)
          }, e)
        })
      }).then(function (t) {
        if (t) return new Promise(function (n, o) {
          r.default.getEPGChannelLine(function (e) {
            n({
              channelLine: t,
              epgChannelLine: e
            })
          }, e)
        })
      }).then(function (n) {
        if (n) return new Promise(function (a, s) {
          r.default.getEPGChannelCategory(function (r) {
            t.callbackObj = {}, t.callbackObj.channelLine = p(n.channelLine, n.epgChannelLine, r), 0 != i && (t.callbackObj.channelLine = k(t.callbackObj.channelLine)), t.callbackObj.channelMap = b(t.callbackObj.channelLine), t.callbackObj.channelCategory = w(t.callbackObj.channelLine, r), t.callbackObj.channelNoMap = E(t.callbackObj.channelLine), t.callbackObj.bsmPkgCategory = e, "function" == typeof o && o(t.callbackObj), a()
          }, e)
        })
      })
    }, this.refresh = function (e, n) {
      t.get(e, function (e) {
        var t = e.channelLine;
        t = k(t, !0), "function" == typeof n && n(e)
      }, !1)
    }, this.next = function (e, n, o) {
      var r = n.focusIndex,
        i = n.nextIndex;
      t.get(e, function (e) {
        var a = e.channelMap;
        "vod-channel" == (n = a[n.contentId]).contentType ? (n.focusIndex = r, n.nextIndex = i, n = t.vodChannel.next(n)) : "playout-channel" == n.contentType && (n.focusIndex = r, n.nextIndex = i, n = t.playoutChannel.next(n)), "function" == typeof o && o(n, e)
      })
    }, this.focus = function (e, n, o, r) {
      t.get(e, function (e) {
        var i = e.channelMap;
        "vod-channel" == (o = i[o.contentId]).contentType ? o = t.vodChannel.focus(n, o) : "playout-channel" == o.contentType && (o = t.playoutChannel.focus(n, o)), "function" == typeof r && r(o, e)
      })
    };
    var s = function (e, t) {
        for (var n = e.channels, o = 0; o < n.length; o++) {
          var r = n[o];
          if ("vod-channel" == r.contentType || "playout-channel" == r.contentType)
            for (var i = r.station.programs, a = 0; a < i.length; a++) {
              var s = i[a],
                l = t[s.content_id];
              s.description = l
            }
        }
        return e
      },
      l = function (e, t) {
        for (var n = e.channels, o = 0; o < n.length; o++) {
          var r = n[o],
            i = r.stationId;
          if (i) {
            var a = t[i];
            a && (r.station = a)
          }
        }
        return e
      },
      u = function (e) {
        for (var t = e.channels, n = JSON.parse(e.liads), o = 0; o < t.length; o++) {
          var r = t[o],
            i = r.liadId;
          r.liads = n[i]
        }
        return e
      },
      c = function (e) {
        for (var t = e.channels, n = e.packageInfos, o = 0; o < t.length; o++) {
          var r = t[o],
            i = r.packageInfoId;
          r.packageInfo = n[i]
        }
        return e
      },
      d = function (e) {
        for (var t = e.channels, n = 0; n < t.length; n++) {
          var o = t[n];
          if ("vod-channel" == o.contentType || "playout-channel" == o.contentType) {
            var r = o.station,
              i = r.programs;
            r.start_time = 1e3 * r.start_time, r.total_length = 1e3 * r.total_length;
            for (var a = 0; a < i.length; a++) {
              var s = i[a];
              s.p_start && (s.p_start = 1e3 * parseInt(s.p_start)), s.length = 1e3 * parseInt(s.length), s.time_codes || (s.time_codes = new Array);
              for (var l = s.time_codes, u = 0; u < l.length; u++) l[u] = 1e3 * parseInt(l[u]);
              s.timecode_duration || (s.timecode_duration = new Array);
              for (var c = s.timecode_duration, d = 0; d < c.length; d++) c[d] = 1e3 * parseInt(c[d])
            }
          }
        }
        return e
      },
      f = function (e) {
        for (var t = e.channels, n = {}, o = 0; o < t.length; o++) {
          var r = t[o];
          n[r.contentId] = r
        }
        return e.list = t, e.map = n, e
      },
      p = function (e, t, n) {
        var o = null;
        return o = h(e, t), o = v(e, o), o = m(t, o), o = g(n, o), o = y(o), _(o)
      },
      h = function (e, t) {
        for (var n = e.map, o = t.Channels, r = new Array, i = 0; i < o.length; i++) {
          var a = o[i];
          n[a.CdnCode] && r.push(a)
        }
        for (var s in n) {
          var l = n[s];
          "vod-channel" != l.contentType && "playout-channel" != l.contentType || r.push(l)
        }
        return r
      },
      v = function (e, t) {
        for (var n = e.map, o = 0; o < t.length; o++) {
          var r = t[o],
            i = n[r.CdnCode];
          for (var a in i) r[a] || (r[a] = i[a])
        }
        return t
      },
      m = function (e, t) {
        for (var n = e.Programs, o = 0; o < t.length; o++) {
          var r = t[o].Schedule;
          if (r)
            for (var i = 0; i < r.length; i++) {
              var a = r[i],
                s = n[a.ProgramId];
              a.program = s
            }
        }
        return t
      },
      g = function (e, t) {
        for (var n = new Array, r = 0; r < t.length; r++) {
          var i = t[r],
            a = null;
          a = "vod-channel" == i.contentType || "playout-channel" == i.contentType ? i.epgCategories : i.Categories;
          for (var s = !1, l = 0; l < a.length; l++) {
            var u = a[l],
              c = e[u];
            c ? (s = !0, a[l] = c, a[l].key = u) : a[l] = null, a[l] && (a[l] = o.default.deepClone(a[l]))
          }
          0 != s && n.push(t[r])
        }
        return n
      },
      y = function (e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if ("channel" == n.contentType) {
            var o = Math.floor(2 * Math.random()),
              r = StaticCdnUrls[o];
            n.picture = r + "logo_litv_" + n.CdnCode + "_pc.png"
          }
        }
        return e
      },
      _ = function (e) {
        return e.sort(function (e, t) {
          return parseInt(e.no) - parseInt(t.no)
        })
      },
      b = function (e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          var o = e[n];
          t[o.contentId] = o
        }
        return t
      },
      w = function (e, t) {
        for (var n in t) t[n].channelList = new Array;
        for (var o = 0; o < e.length; o++) {
          var r, i = e[o];
          r = "vod-channel" == i.contentType || "playout-channel" == i.contentType ? i.epgCategories : i.Categories;
          for (var a = 0; a < r.length; a++)
            if (r[a]) {
              var s = r[a].key;
              t[s] && t[s].channelList.push(i)
            }
        }
        var l = new Array;
        for (var u in t) l.push(t[u]);
        return l.sort(function (e, t) {
          return (e = parseInt(e.MenuOrder)) - parseInt(t.MenuOrder)
        })
      },
      E = function (e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          var o = e[n];
          t[o.no] = o
        }
        return t
      },
      k = function (e, n) {
        for (var o = 0; o < e.length; o++) {
          var r = e[o];
          if ("channel" == r.contentType) {
            var i = r.Schedule;
            if (!i) continue;
            for (var a = (new Date).getTime(), s = !1, l = 1; l < i.length; l++)
              if (Date.parse(i[l].AirDateTime) > a) {
                s = !0, r.Schedule = i.slice(l - 1, i.length);
                break
              } 0 == s && (r.Schedule = null)
          } else "vod-channel" == r.contentType ? r = 1 == n ? t.vodChannel.refresh(r) : t.vodChannel.get(r) : "playout-channel" == r.contentType && (r = 1 == n ? t.playoutChannel.refresh(r) : t.playoutChannel.get(r))
        }
        return e
      }
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = a(n(1)),
    i = (a(n(144)), a(n(2)), a(n(6)));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  window.litv = window.litv || {};
  var s = new(function () {
    function e() {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e)
    }
    return o(e, [{
      key: "costructor",
      value: function () {}
    }, {
      key: "getChannelLine",
      value: function (e, t) {
        var n = {
          url: "/channel/ajax/getLineup",
          selectMethod: "GET",
          request: {
            bsmPkgCategory: e
          }
        };
        r.default.get(n, function (e, n) {
          "function" == typeof t && t(n)
        }, null)
      }
    }, {
      key: "getVodChannelPrograms",
      value: function (e, t, n) {
        var o = "";
        if ("yahoo" == n || "sport" == n) o = "staging" == i.default.getType() ? "https://staging-fino.svc.litv.tv/vod_channel/schedule.json.zlib." : "https://fino.svc.litv.tv/vod_channel/schedule.json.zlib.";
        else {
          var a = EpgApiConfig.vodChannelSchedule;
          o = a[Math.floor(Math.random() * (a.length - 1))] + ".zlib." + e
        }
        r.default.getZlib(o, function (e, n) {
          "function" == typeof t && t(n)
        })
      }
    }, {
      key: "getVodChannelDescription",
      value: function (e, t, n) {
        var o = "";
        if ("yahoo" == n || "sport" == n) o = "staging" == i.default.getType() ? "https://staging-fino.svc.litv.tv/vod_channel/descriptionV2.json.zlib." : "https://fino.svc.litv.tv/vod_channel/descriptionV2.json.zlib.";
        else {
          var a = EpgApiConfig.vodChannelDescription;
          o = a[Math.floor(Math.random() * (a.length - 1))] + ".zlib." + e
        }
        r.default.getZlib(o, function (e, n) {
          n = function (e) {
            for (var t = e.contentIds, n = e.descriptions, o = {}, r = 0; r < t.length; r++)
              for (var i = t[r], a = 0; a < i.length; a++) o[i[a]] = n[r];
            return o
          }(n), "function" == typeof t && t(n)
        })
      }
    }, {
      key: "getEPGChannelLine",
      value: function (e, t) {
        var n;
        n = "staging" == i.default.getType() ? "https://staging-fino.svc.litv.tv/litvpc/ScheduleAllWithMediumPrograms.json.zlib" : "https://fino.svc.litv.tv/litvpc/ScheduleAllWithMediumPrograms.json.zlib", r.default.getZlib(n, function (t, n) {
          "function" == typeof e && e(n)
        })
      }
    }, {
      key: "getEPGChannelCategory",
      value: function (e, t) {
        if ("yahoo" == t || "sport" == t) {
          var n;
          n = "staging" == i.default.getType() ? "https://staging-fino.svc.litv.tv/ag2018/meta/StationCategories.json.zlib" : "https://fino.svc.litv.tv/ag2018/meta/StationCategories.json.zlib", r.default.getZlib(n, function (t, n) {
            "function" == typeof e && e(n)
          })
        } else {
          var o;
          o = "staging" == i.default.getType() ? "https://staging-fino.svc.litv.tv/litvpc/StationCategories.json.zlib" : "https://fino.svc.litv.tv/litvpc/StationCategories.json.zlib", r.default.getZlib(o, function (t, n) {
            "function" == typeof e && e(n)
          })
        }
      }
    }]), e
  }());
  t.default = s
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = c(n(32)),
    r = c(n(31)),
    i = c(n(21)),
    a = c(n(6)),
    s = (c(n(13)), c(n(1))),
    l = c(n(5)),
    u = c(n(7));

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.default = function () {
    var e = this;
    this.setParam = function (t) {
      e.param = t;
      var o = $(e.param.container),
        i = p();
      o.html(i), e.setContent(e.param.data), n(e.param.data), c(), r.default.start()
    }, this.setContent = function (n) {
      var o = $(e.param.container).find(".common_player_section"),
        r = o.find(".title_section .vod_title"),
        a = o.find(".title_section .vod_secondary_mark"),
        s = o.find(".breadcrumb_section"),
        c = s.find(".breadcrumb"),
        d = s.find(".promote_text");
      if (!n) return r.addClass("hide"), a.addClass("hide"), s.addClass("hide"), c.addClass("hide"), d.addClass("hide"), void o.removeAttr("data-content-id");
      n.contentId ? o.attr("data-content-id", n.contentId) : o.removeAttr("data-content-id");
      var f;
      (f = u.default.isLive(n) ? n.no + "&nbsp;&nbsp;" + n.title : n.title) ? (r.removeClass("hide"), r.html(f)) : r.addClass("hide");
      var p = "";
      if (u.default.isLive(n)) {
        if ("channel" == n.contentType) {
          if (Array.isArray(n.Schedule) && n.Schedule.length > 0) {
            var h = n.Schedule[0].program;
            p = h.SubTitle ? h.Title + " - " + h.SubTitle : h.Title
          }
        } else if ("playout-channel" == n.contentType || "vod-channel" == n.contentType) {
          var v = n.focusProgram;
          p = v.title ? v.title + " - " + v.subtitle : v.subtitle
        }
      } else p = n.secondaryMark;
      p ? (a.removeClass("hide"), a.html(p)) : a.addClass("hide");
      var m = function () {
        1 == c.hasClass("hide") && 1 == d.hasClass("hide") ? s.addClass("hide") : "pc" != l.default.deviceType ? 0 == d.hasClass("hide") && (s.removeClass("hide"), c.addClass("hide")) : s.removeClass("hide")
      };
      u.default.isLive(n) ? (c.addClass("hide"), m()) : i.default.crumbView(n, function (e) {
        c.removeClass("hide"), c.html(e), m()
      }), t(function (e) {
        var t = e[n.contentType];
        t ? (d.removeClass("hide"), d.html(t.text), d.attr("href", t.url), m()) : (d.addClass("hide"), m())
      })
    }, this.getFlowplayerSection = function () {
      return $(e.param.container).find(".flowplayer_section")
    }, this.setPlayerMask = function (t) {
      var n = $(e.param.container),
        o = n.find(".common_player_section .player_section .player_mask"),
        r = n.find(".common_player_section .player_mask .mask_msg");
      o.css("background-image", ""), o.removeClass("show"), o.attr("data-mask-type", ""), o.off("click"), r.html(""), r.removeClass("show"), s.default.get({
        type: "GET",
        url: "/service/ajax/getPlayerMaskConfig",
        request: {}
      }, function (e, n) {
        ! function (e) {
          if (t) {
            var n = e[t.key],
              i = n.url,
              s = t.msg;
            i && o.css("background-image", "url(" + a.default.getDomain() + i + ")"), s && r.html(s), o.addClass("show"), r.addClass("show"), o.attr("data-mask-type", t.key), o.on("click", function (e) {
              var o = t.clickCallback;
              "function" == typeof o && o(t, n)
            })
          }
        }(n)
      }, null, !0)
    }, this.setOnlyPlayer = function (t) {
      var n = $(e.param.container).find(".common_player_section");
      t ? n.addClass("onlyPlayer") : n.removeClass("onlyPlayer")
    };
    var t = function (e) {
        s.default.get({
          url: "/vod/ajax/getPlayerTopText",
          selectMethod: "GET",
          request: {}
        }, function (t, n) {
          "function" == typeof e && e(n)
        }, null, !0)
      },
      n = function () {
        var t = $(e.param.container);
        t.find(".common_player_section .social_section .fb_share").click(function (t) {
          1 == Array.isArray(e.param.shareKeys) && FB.ui({
            method: "share",
            href: a.default.retentionQuerysURL(e.param.shareKeys)
          }, function (e) {})
        }), t.find(".common_player_section .social_section .fb_message").click(function (e) {
          var t = $(".fb-comments > *");
          if (t.length > 0) {
            var n = t.offset().top;
            $("html, body").animate({
              scrollTop: n
            }, "slow")
          }
        });
        var n = new o.default({
          target: t.find(".common_player_section .social_section .url_share"),
          action: "click",
          actionCallback: function (e, t) {
            t.balloon.show(f()), d(n)
          },
          enterCallback: function (e, t) {},
          leaveCallback: function (e, t) {
            t.balloon.dismiss()
          },
          overflowArrowPosition: {
            left: "5px",
            right: "5px"
          },
          backgroundColor: "#fff",
          borderColor: "rgba(0, 0, 0, 0.5)"
        })
      },
      c = function () {
        var e = $(".fb-comments");
        if (e.length <= 0) $(".common_player_section .social_section .fb_message").css("display", "none");
        else {
          for (var t = new Array, n = 0; n < e.length; n++) {
            for (var o = e.eq(n).parents(), r = 0; r < o.length; r++) {
              var i = o.eq(r);
              if ("none" == i.css("display") || "hidden" == i.css("visibility")) {
                t[n] = !1;
                break
              }
            }
            0 != t[n] && (t[n] = !0)
          } - 1 != t.indexOf(!0) ? $(".common_player_section .social_section .fb_message").css("display", "") : $(".common_player_section .social_section .fb_message").css("display", "none")
        }
      },
      d = function (e) {
        $(".copy_balloon > input").focus(), $(".copy_balloon > input").select(), $(".copy_balloon .exit_icon").click(function (t) {
          e.dismiss()
        })
      },
      f = function () {
        var t = new Array;
        return t.push("<div class='copy_balloon'>"), t.push("<input type='text' value=" + a.default.retentionQuerysURL(e.param.shareKeys) + " />"), t.push("<div class='description'>按Ctrl-C複製連結</div>"), t.push("<div class='exit_icon'></div>"), t.push("</div>"), t.join("")
      },
      p = function () {
        var e = new Array;
     //    return e.push("<div class='common_player_section'>"), e.push("<div class='breadcrumb_section hide'>"), e.push("<a class='promote_text hide' href='https://goo.gl/LMrWeW' target='_blank'>4K 電視盒，LiTV 會員獨家 35 折！</a>"), e.push("<div class='breadcrumb'></div>"), e.push("</div>"), e.push("<div class='title_section'>"), e.push("<div class='vod_title'></div>"), e.push("<div class='vod_secondary_mark'></div>"), e.push("</div>"), e.push("<div class='player_section'>"), e.push("<div class='flowplayer_section'></div>"), e.push("<div class='player_mask'></div>"), e.push("</div>"), e.push("<div class='social_section'>"), e.push("<div class='left_section'>"), e.push("<div class='fb_message'>"), e.push("<div class='message_icon'></div>"), e.push("<div class='message_text'>留言</div>"), e.push("</div>"), e.push("<div class='fb_share' title='分享至facebook'></div>"), e.push("<div class='url_share' title='複製連結'></div>"), e.push("<a class='line_btn_m' href=' http://hyperurl.co/addline' target='_blank' title='加Line好友'></a>"), e.push("</div>"), e.push("<div class='fb-like' data-href='https://www.facebook.com/LiTVfans?fref=ts' data-send='false' data-width='150' data-show-faces='false' data-layout='button_count'></div>"), e.push("<a class='line_btn_p' href=' http://hyperurl.co/addline' target='_blank' title='加Line好友'></a>"), e.push("<a class='download_App ga_web_player_app_download' href='http://hyperurl.co/litvwebplayer' target='_blank' title='LiTV App下載'></a>"), e.push("</div>"), e.push("</div>"), e.join("")
     return e.push("<div class='common_player_section'>"), e.push("<div class='breadcrumb_section hide'>"), e.push("<a class='promote_text hide' href='https://goo.gl/LMrWeW' target='_blank'>4K 電視盒，LiTV 會員獨家 35 折！</a>"), e.push("<div class='breadcrumb'></div>"), e.push("</div>"), e.push("<div class='title_section'>"), e.push("<div class='vod_title'></div>"), e.push("<div class='vod_secondary_mark'></div>"), e.push("</div>"), e.push("<div class='player_section'>"), e.push("     <div class='flowplayer_section'><script>function afterClickforceVad() {alert('Hello')}</script><ins class='clickforcepreroll' data-ad-zone='8251' data-ad-width='100%' data-ad-height='100%'></ins><script type='text/javascript' src='//cdn.doublemax.net/js/cfvast.js'></script></div>"), e.push("<div class='player_mask'></div>"), e.push("</div>"), e.push("<div class='social_section'>"), e.push("<div class='left_section'>"), e.push("<div class='fb_message'>"), e.push("<div class='message_icon'></div>"), e.push("<div class='message_text'>留言</div>"), e.push("</div>"), e.push("<div class='fb_share' title='分享至facebook'></div>"), e.push("<div class='url_share' title='複製連結'></div>"), e.push("<a class='line_btn_m' href=' http://hyperurl.co/addline' target='_blank' title='加Line好友'></a>"), e.push("</div>"), e.push("<div class='fb-like' data-href='https://www.facebook.com/LiTVfans?fref=ts' data-send='false' data-width='150' data-show-faces='false' data-layout='button_count'></div>"), e.push("<a class='line_btn_p' href=' http://hyperurl.co/addline' target='_blank' title='加Line好友'></a>"), e.push("<a class='download_App ga_web_player_app_download' href='http://hyperurl.co/litvwebplayer' target='_blank' title='LiTV App下載'></a>"), e.push("</div>"), e.push("</div>"), e.join("")
     // return e.push('<script>function afterClickforceVad() {alert("Hello")}</script>'),e.push('<ins class="clickforcepreroll" data-ad-zone="8251" data-ad-width="100%" data-ad-height="100%"></ins>'),e.push('<script type="text/javascript" src="//cdn.doublemax.net/js/cfvast.js"></script>'), e.join("")
     // <div class='flowplayer_section'><script>function afterClickforceVad() {alert("Hello")}</script><ins class="clickforcepreroll" data-ad-zone="8251" data-ad-width="100%" data-ad-height="100%"></ins><script type="text/javascript" src="//cdn.doublemax.net/js/cfvast.js"></script></div>
      }
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = new function () {
    var e = new Array;
    this.setParam = function (n) {
      var o = new t;
      return o.setParam(n), e.push(o), o
    }, this.setData = function (t) {
      for (var n = 0; n < e.length; n++) e[n].setData(t)
    };
    var t = function () {
      var e = this;
      this.setParam = function (o) {
        e.param = o;
        var r = $(e.param.container),
          i = n(e.param.data);
        r.html(i), "" != r.html() && t(e.param.data)
      }, this.setData = function (t) {
        e.param.data = t, e.setParam(e.param)
      };
      var t = function (t) {
          if (e.param.clickCallback, !t) return "";
          $(".merchandise_container .merchandise_item").click(function (n) {
            "function" == typeof e.param.clickCallback && (n.preventDefault(), e.param.clickCallback(t))
          })
        },
        n = function (e) {
          if (!e) return "";
          var t = new Array;
          return t.push("<div class='merchandise_container'>"), t.push("<a class='merchandise_item' target='_blank' href='" + e.clickUrl + "'>"), t.push("<img src='" + e.url + "' />"), t.push("</a>"), t.push("</div>"), t.join("")
        }
    }
  };
  t.default = o
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = i(n(3)),
    r = i(n(37));

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var a = new function () {
    var e = new Array;
    this.setParam = function (n) {
      var o = new t;
      return o.setParam(n), e.push(o), o
    }, this.setFocus = function (t) {
      for (var n = 0; n < e.length; n++) e[n].setFocus(t)
    };
    var t = function () {
      var e = this;
      this.setParam = function (t) {
        e.param = t;
        var o = $(e.param.container),
          r = s(e.param.data);
        o.html(r), "" != o.html && n()
      }, this.setFocus = function (n) {
        if (e.param.data) {
          var r = $(e.param.container),
            i = r.find(".player_attention_title_block"),
            a = r.find(".player_attention_content_block"),
            s = r.find(".player_episode_block");
          i.removeClass("focus"), a.removeClass("focus"), s.removeClass("focus");
          var l = s.filter("[data-content-id=" + n.contentId + "]"),
            u = o.default.getEventAttribute({
              target: l
            }, "data-season-id"),
            c = o.default.getEventAttribute({
              target: l
            }, "data-episode-id");
          null != u && null != c && (i.eq(u).addClass("focus"), a.eq(u).addClass("focus"), l.addClass("focus")), a.length <= 1 && a.addClass("focus"), t()
        }
      };
      var t = function () {
          window.setTimeout(function () {
            var t = $(e.param.container).find(".player_attention_view"),
              n = t.find(".player_episode_block").filter(".focus");
            if (!(n.length <= 0)) {
              var o = t.outerHeight(),
                r = n.outerHeight(),
                i = n.position().top - (o - r) / 2 + t.scrollTop();
              i < 0 && (i = 0), t.stop().animate({
                scrollTop: i
              }, 1e3, "swing")
            }
          }, 300)
        },
        n = function () {
          i(), a()
        },
        i = function () {
          var t = $(e.param.container),
            n = t.find(".player_attention_title_block");
          n.mouseover(function (e) {
            var t = o.default.getEventAttribute(e, "data-season-id");
            n.eq(t).addClass("hover")
          }), n.mouseout(function (e) {
            var t = o.default.getEventAttribute(e, "data-season-id");
            n.eq(t).removeClass("hover")
          }), n.click(function (e) {
            var r = o.default.getEventAttribute(e, "data-season-id"),
              i = n.eq(r),
              a = t.find(".player_attention_content_block");
            1 == i.hasClass("focus") ? (n.removeClass("focus"), a.removeClass("focus")) : 0 == i.hasClass("focus") && (n.removeClass("focus"), a.removeClass("focus"), i.addClass("focus"), a.eq(r).addClass("focus"))
          })
        },
        a = function () {
          var t = $(e.param.container),
            n = t.find(".player_attention_item_block");
          n.mouseover(function (e) {
            var n = o.default.getEventAttribute(e, "data-content-id"),
              r = o.default.getEventAttribute(e, "data-focus-id");
            t.find(".player_episode_block[data-content-id=" + n + "] .player_attention_item_block[data-focus-id=" + r + "]").addClass("hover")
          }), n.mouseout(function (e) {
            var n = o.default.getEventAttribute(e, "data-content-id"),
              r = o.default.getEventAttribute(e, "data-focus-id");
            t.find(".player_episode_block[data-content-id=" + n + "] .player_attention_item_block[data-focus-id=" + r + "]").removeClass("hover")
          }), n.click(function (t) {
            var n = o.default.getEventAttribute(t, "data-season-id"),
              r = o.default.getEventAttribute(t, "data-episode-id"),
              i = o.default.getEventAttribute(t, "data-focus-id"),
              a = o.default.getEventAttribute(t, "data-content-id"),
              s = e.param.data;
            e.setFocus({
              contentId: a
            });
            var l = {
              focusId: i,
              data: s.seasons[n].episode[r]
            };
            void 0 !== e.param.clickCallback && e.param.clickCallback(l)
          })
        },
        s = function (e) {
          var t = e.seasons;
          if (t.length <= 0) return "";
          for (var n = new Array, o = 0; o < t.length; o++) {
            for (var i = t[o], a = i.episode, s = new Array, l = 0; l < a.length; l++) {
              var u = a[l];
              u.focus.length && s.push(u)
            }
            s.length && n.push(i)
          }
          if (n.length <= 0) return "";
          var c = new Array;
          c.push("<div class='player_attention_view'>");
          for (var d = 0; d < n.length; d++) {
            var f = n[d];
            t.length <= 1 ? c.push("<div class='player_attention_title_block' style='display: none;' data-season-id=" + d + ">") : t.length > 1 && c.push("<div class='player_attention_title_block' data-season-id=" + d + ">"), c.push("<div class='text'>" + f.seasonName + "</div>"), c.push("<div class='icon'></div>"), c.push("</div>"), c.push("<div class='player_attention_content_block' data-season-id=" + d + ">");
            for (var p = f.episode, h = 0; h < p.length; h++) {
              var v = p[h];
              c.push("<div class='player_episode_block' data-season-id=" + d + " data-episode-id=" + h + " data-content-id=" + v.contentId + ">"), c.push("<div class='player_episode_title'>" + v.secondaryMark + "</div>");
              for (var m = v.focus, g = 0; g < m.length; g++) {
                var y = m[g];
                c.push("<div class='player_attention_item_block' title='" + y.description + "' data-focus-id=" + g + ">"), c.push("<div class='icon'></div>");
                var _ = 1e3 * y.startTime;
                c.push("<div class='position'>" + r.default.getFormatTimeByMilliSeconds(_).wholeTime + "</div>"), c.push("<div class='description'>" + y.description + "</div>"), c.push("</div>")
              }
              c.push("</div>")
            }
            c.push("</div>")
          }
          return c.push("</div>"), c.join("")
        }
    }
  };
  t.default = a
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(3)),
    r = new function () {
      var e = new Array;
      this.setParam = function (n) {
        var o = new t;
        return o.setParam(n), e.push(o), o
      }, this.setFocus = function (t) {
        for (var n = 0; n < e.length; n++) e[n].setFocus(t)
      };
      var t = function () {
        var e = this;
        this.setParam = function (t) {
          e.param = t;
          var o = $(e.param.container),
            i = r(e.param.data);
          o.html(i), o.html() && (n(e.param.data), o.find("img.lazyload").lazyload())
        }, this.setFocus = function (n) {
          var o = $(e.param.container),
            r = n.contentId,
            i = o.find(".teaser_vod"),
            a = i.filter("[data-content-id=" + r + "]");
          i.removeClass("focus"), a.addClass("focus"), t()
        };
        var t = function () {
            window.setTimeout(function () {
              var t = $(e.param.container).find(".player_teaser_view"),
                n = t.find(".teaser_vod").filter(".focus");
              if (!(n.length <= 0)) {
                var o = t.outerHeight(),
                  r = n.outerHeight(),
                  i = n.position().top - (o - r) / 2 + t.scrollTop();
                i < 0 && (i = 0), t.stop().animate({
                  scrollTop: i
                }, 1e3, "swing")
              }
            }, 300)
          },
          n = function (t) {
            var n = $(e.param.container).find(".teaser_vod");
            n.mouseenter(function (e) {
              o.default.findElementByClass(e, "teaser_vod").addClass("hover")
            }), n.mouseleave(function (e) {
              o.default.findElementByClass(e, "teaser_vod").removeClass("hover")
            }), n.click(function (n) {
              n.preventDefault();
              var r = o.default.getEventAttribute(n, "data-season-id"),
                i = o.default.getEventAttribute(n, "data-episode-id"),
                a = t.seasons[r].episode[i];
              e.setFocus(a), "function" == typeof e.param.clickCallback && e.param.clickCallback(a)
            })
          },
          r = function (e) {
            var t = e.seasons;
            if (t <= 0) return "";
            var n = !1,
              o = new Array;
            o.push("<div class='player_teaser_view'>");
            for (var r = 0; r < t.length; r++)
              for (var i = t[r].episode, a = 0; a < i.length; a++) {
                var s = i[a];
                n = !0, o.push("<a class='teaser_vod' href='/vod/" + e.contentType + "/content.do?content_id=" + s.contentId + "' data-content-id=" + s.contentId + " data-season-id=" + r + " data-episode-id=" + a + ">"), o.push("<div class='vod_poster'>"), o.push("<img class='img lazyload' data-src='" + s.videoImage + "' />"), o.push("<div class='play_icon'></div>"), o.push("</div>"), o.push("<div class='vod_title'>" + s.episodeName + "</div>"), o.push("</a>")
              }
            return o.push("</div>"), o = o.join(""), 0 == n ? "" : o
          }
      }
    };
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = r(n(3));

  function r(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  r(n(18));
  var i = new function () {
    var e = new Array;
    this.setParam = function (n) {
      var o = new t;
      return o.setParam(n), e.push(o), o
    };
    var t = function () {
      var e = this;
      this.setParam = function (o) {
        e.param = o;
        var i = $(e.param.container),
          a = r(e.param.data);
        i.html(a), "p" == e.param.data.programPublishPicsType ? (t(), $(window).off("resize", t), $(window).on("resize", t)) : i.find(".vod_rank_text").eq(0).css("display", "none"), i.html() && (n(e.param.data), i.find(".img.lazyload").lazyload())
      };
      var t = function (t) {
          window.setTimeout(function () {
            var t = $(e.param.container);
            t.actual("width") < 435 ? (t.find(".vod_rank_poster").eq(3).css("display", "none"), t.find(".vod_rank_text").eq(0).css("display", "block")) : (t.find(".vod_rank_poster").eq(3).css("display", "block"), t.find(".vod_rank_text").eq(0).css("display", "none"))
          }, 1e3)
        },
        n = function (t) {
          var n = $(e.param.container);
          n.find(".vod_rank_poster").mouseenter(function (e) {
            o.default.findElementByClass(e, "vod_rank_poster").addClass("hover")
          }), n.find(".vod_rank_poster").mouseleave(function (e) {
            o.default.findElementByClass(e, "vod_rank_poster").removeClass("hover")
          }), n.find(".vod_rank_text").mouseenter(function (e) {
            o.default.findElementByClass(e, "vod_rank_text").addClass("hover")
          }), n.find(".vod_rank_text").mouseleave(function (e) {
            o.default.findElementByClass(e, "vod_rank_text").removeClass("hover")
          }), n.find(".vod_rank_poster, .vod_rank_text").click(function (n) {
            if ("function" == typeof e.param.clickCallback) {
              var r = o.default.getEventAttribute(n, "data-id"),
                i = t.vodList[r];
              n.preventDefault(), e.param.clickCallback(i)
            }
          })
        },
        r = function (e) {
          var t = e.vodList,
            n = new Array;
          if (0 == t.length) return "";
          var o = function () {
            return "p" == e.programPublishPicsType ? 2 : 1
          };
          n.push("<div class='player_rank_view'>");
          for (var r = 0; r <= o() && r < t.length; r++) {
            var i = "/vod/" + t[r].contentType + "/content.do?content_id=" + t[r].contentId;
            "p" == e.programPublishPicsType ? n.push("<a class='vod_rank_poster' href='" + i + "' data-content-id=" + t[r].contentId + " data-id=" + r + " title='" + t[r].title + "'>") : n.push("<a class='vod_rank_poster show' href='" + i + "' data-content-id=" + t[r].contentId + " data-id=" + r + " title='" + t[r].title + "'>"), n.push("<div class='poster'>"), "p" == e.programPublishPicsType ? n.push("<img class='img lazyload' data-src='" + t[r].imageFile + "' />") : n.push("<img class='img lazyload' data-src='" + t[r].videoImage + "' />"), n.push("<div class='number'>" + (r + 1) + "</div>"), n.push("<div class='play_icon'></div>"), n.push("</div>"), n.push("<div class='title_score_section'>"), t[r].score && n.push("<div class='score'>" + t[r].score + "</div>"), n.push("<div class='title'>" + t[r].title + "</div>"), n.push("</div>"), n.push("</a>")
          }
          t.length > 0 && n.push("<div class='vod_rank_segment'></div>");
          for (var a = o(); a < t.length; a++) {
            var s = "/vod/" + t[a].contentType + "/content.do?id=" + t[a].contentId;
            n.push("<a class='vod_rank_text' href='" + s + "' data-content-id=" + t[a].contentId + " data-id=" + a + " title='" + t[a].title + "'>"), n.push("<div class='number'>" + (a + 1) + "</div>"), n.push("<div class='title'>" + t[a].title + "</div>"), n.push("</a>")
          }
          return n.push("</div>"), n.join("")
        }
    }
  };
  t.default = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = O(n(7)),
    r = O(n(138)),
    i = O(n(1)),
    a = O(n(2)),
    s = O(n(129)),
    l = O(n(142)),
    u = O(n(143)),
    c = O(n(5)),
    d = (O(n(124)), O(n(130))),
    f = O(n(147)),
    p = O(n(8)),
    h = O(n(6)),
    v = O(n(9)),
    m = O(n(21)),
    g = O(n(148)),
    y = O(n(149)),
    _ = O(n(150)),
    b = O(n(152)),
    w = O(n(0)),
    E = O(n(153)),
    k = O(n(13)),
    C = O(n(154)),
    T = O(n(155)),
    S = O(n(156)),
    A = O(n(157)),
    I = O(n(163)),
    P = O(n(22));

  function O(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  window.litv = window.litv || {},
    function () {
      var e = (new P.default).getResult();
      "Windows" == e.os.name ? "XP" == e.os.version && "Chrome" == e.browser.name && g.default.show() : "Android" == e.os.name && ("Chrome WebView" == e.browser.name ? g.default.show() : "Samsung Browser" == e.browser.name && g.default.show())
    }();
  var x = !1,
    M = !1;
  k.default.importJSByList(["//redir.adap.tv/redir/javascript/lightintegration.js", "//imasdk.googleapis.com/js/sdkloader/ima3.js"], function () {
    x = !0
  }), k.default.importCSSByList(["/resources/gulp-dest/libs/litvplayer/lib/flowplayer.commercial-7.2.7/skin/skin-73e23365d5.css", "/resources/gulp-dest/libs/litvplayer/dist/LiTVPlayer-03ca6efce5.css"], function () {
    M = !0
  });
  var L = {
    IMPRESSION: "callPlayer.impressionEvent",
    RESUME: "callPlayer.resumeEvent",
    PAUSE: "callPlayer.pauseEvent",
    STOP: "callPlayer.stopEvent",
    ENDED: "callPlayer.endedEvent",
    ERROR: "callPlayer.errorEvent",
    LINEAR_AD_MEDIA_START: "callPlayer.linearAdMediaStartEvent",
    LINEAR_AD_MEDIA_COMPLETE: "callPlayer.linearAdMediaCompleteEvent",
    PAUSE_FOR_AD: "callPlayer.pauseForAdEvent",
    RESUME_FOR_AD: "callPlayer.resumeForAdEvent",
    CLICK_SKIP: "callPlayer.clickSkipEvent",
    PREPARE_CALLBACK: "callPlayer.prepareCallbackEvent",
    MASK_CHANGE_CALLBACK: "callPlayer.maskChangeCallbackEvent",
    MASK_CLICK_CALLBACK: "callPlayer.maskClickCallbackEvent",
    EC_START: "callPlayer.ecStartEvent",
    EC_END: "callPlayer.ecEndEvent",
    FULLSCREEN: "callPlayer.fullscreen",
    FULLSCREEN_EXIT: "callPlayer.fullscreenExit",
    CLICK_PAUSE_BANNER: "callPlayer.clickPauseBanner",
    PAUSE_BANNER_IMPRESSION: "callPlayer.pauseBannerImpression",
    CLICK_LOGO: "callPlayer.clickLogo",
    REMOTE_KEYIN: "callPlayer.remoteKeyin"
  };
  t.default = function (e) {
    var t = this;
    t.channelItems = new d.default(this), t.playerView = e, t.program = null, t.video = null, t.EVENT = a.default.extend({}, L);
    var n = null,
      g = new l.default,
      k = new C.default(this),
      P = null,
      O = new T.default(this),
      R = !0,
      N = new A.default(this),
      j = new I.default;
    litv.callPlayers = litv.callPlayers || new Array, litv.callPlayers.push(t), t.setSrc = function (r) {
      if (t.program = r, w.default.off(N.EVENT.KEYIN, V.remoteKeyin), w.default.on(N.EVENT.KEYIN, V.remoteKeyin), j.pushWatchRecord(r), clearTimeout(P), x && M)
        if (R) P = setTimeout(function () {
          R = !1, t.setSrc(r)
        }, 500);
        else {
          R = !0, n || (n = b.default.create(e.getFlowplayerSection()[0])), t.program && t.video && (_.default.percent(t), (0, S.default)(t)), t.video = null;
          var i = ae(t);
          new Promise(function (e, n) {
            1 == i ? m.default.programInfo(t.program.contentId, function (n) {
              for (var o in t.program) n[o] || (n[o] = t.program[o]);
              t.program = n, ie(), 1 == litv.enableMobile ? e() : t.mask.appDL()
            }) : (ie(), "staging" == h.default.getType() && (o.default.isLive(r) ? N.show() : N.dismiss()), 1 == litv.enableMobile ? e() : t.mask.appDL())
          }).then(function () {
            return new Promise(function (e, n) {
              re(t) ? W(t, function (t) {
                e(t)
              }) : (t.mask.shelves(), V.prepareCallback())
            })
          }).then(function (e) {
            return new Promise(function (r, i) {
              e && ne(t, function (e) {
                if (t.video = e, e && e.fullpath) {
                  var i = X(t);
                  o.default.isLive(t.program) ? (D.start(), n.setSrc(i), t.mask.hide(), g.init(), k.start(), o.default.channelRecordToServer(t.program)) : r(i)
                } else Q(t);
                V.prepareCallback()
              })
            })
          }).then(function (e) {
            G(t.program, function (o) {
              o && (e.startTime = o.timestamp), D.start(), n.setSrc(e), t.mask.hide(), g.init(), k.start()
            })
          })
        }
      else P = setTimeout(function () {
        t.setSrc(r)
      }, 100)
    }, t.play = function () {
      n.play()
    }, t.pause = function () {
      n.pause()
    }, t.seek = function (e, o) {
      var r = !1;
      return o.contentId ? o.contentId == t.program.contentId && (n.seek(e), r = !0) : o.assetId && o.assetId == t.program.assetId && (n.seek(e), r = !0), r
    }, t.stop = function () {
      n.stop(), k.stop()
    }, t.mute = function (e) {
      n.mute(e)
    }, t.volume = function (e) {
      n.volume(e)
    }, t.fullscreen = function (e) {
      n.fullscreen(e)
    }, t.displayEndAd = function (e, t) {
      arguments.length ? n.assignImage(e, t) : n.displayEndAd(), k.stop()
    }, t.mask = new function () {
      this.hide = function () {
        r()
      }, this.outSideRegion = function () {
        r({
          key: "outsideRegion",
          clickCallback: n
        })
      }, this.trial = function () {
        o.default.isLive(t.program) && r({
          key: "channelTrial",
          clickCallback: n
        })
      }, this.purchase = function () {
        if (c.default.detectIsMobile() && 1 != litv.enableMobile) r({
          key: "appDownload",
          clickCallback: n
        });
        else {
          var e = o.default.getBsmPkgCategory(t.program);
          r({
            key: e.image,
            clickCallback: n
          })
        }
      }, this.login = function () {
        c.default.detectIsMobile() && 1 != litv.enableMobile ? r({
          key: "appDownload",
          clickCallback: n
        }) : o.default.isLive(t.program) ? r({
          key: "channelLogin",
          clickCallback: n
        }) : r({
          key: "vodLogin",
          clickCallback: n
        })
      }, this.multipleStreaming = function () {
        z(t.program), r({
          key: "multipleStream",
          clickCallback: n
        })
      }, this.adBlock = function () {
        r({
          key: "adblock",
          clickCallback: n
        })
      }, this.idleOverHours = function () {
        z(t.program), r({
          key: "idleOverHours",
          clickCallback: n
        })
      }, this.appDL = function () {
        r({
          key: "appDownload",
          clickCallback: n
        })
      }, this.parental = function () {
        c.default.detectIsMobile() ? r({
          key: "mobileParental",
          clickCallback: n
        }) : r({
          key: "pcParental",
          clickCallback: n
        })
      }, this.watchDevice = function () {
        var e = t.program.watchDevices;
        "pc" == deviceType ? -1 == e.indexOf("TV") || -1 == e.indexOf("PHONE") && -1 == e.indexOf("PAD") ? -1 != e.indexOf("TV") ? r({
          key: "watchDeviceTVByPC",
          clickCallback: n
        }) : -1 == e.indexOf("PHONE") && -1 == e.indexOf("PAD") || r({
          key: "watchDeviceMobileByPC",
          clickCallback: n
        }) : r({
          key: "watchDeviceTVMobileByPC",
          clickCallback: n
        }) : -1 != e.indexOf("TV") && -1 != e.indexOf("PC") ? r({
          key: "watchDeviceTVPCByMobile",
          clickCallback: n
        }) : -1 != e.indexOf("PC") ? r({
          key: "watchDevicePCByMobile",
          clickCallback: n
        }) : -1 != e.indexOf("TV") && r({
          key: "watchDeviceTVByMobile",
          clickCallback: n
        })
      }, this.shelves = function () {
        r({
          key: "shelves",
          clickCallback: n
        })
      }, this.notAvailable = function () {
        r({
          key: "notAvailable",
          clickCallback: n
        })
      }, this.error = function (e) {
        r({
          key: "playerError",
          msg: "Error Code: " + e,
          clickCallback: n
        })
      };
      var n = function (e, n) {
          K(t, e, n)
        },
        r = function (n) {
          n ? (e.setPlayerMask(n), F(t), t.fullscreen(!1), t.stop()) : e.setPlayerMask(), V.maskChangeCallback(n)
        }
    }, Object.defineProperty(t, "currentTime", {
      get: function () {
        return n.currentTime
      }
    }), Object.defineProperty(t, "volumeLevel", {
      get: function () {
        return n.volumeLevel
      }
    }), Object.defineProperty(t, "currentInfo", {
      get: function () {
        return n.currentInfo
      }
    }), new function () {
      this.start = function () {
        o(), e()
      }, this.stop = function () {
        o()
      };
      var e = function () {
          appSync.subscrible(t.program), w.default.on(appSync.EVENT.REAL_TIME_DATA, r)
        },
        o = function () {
          appSync.unsubscribe(), w.default.off(appSync.EVENT.REAL_TIME_DATA, r)
        },
        r = function (e, t) {
          t && e == appSync && (1 == t.status ? n.displayMidrolls(!0) : 0 == t.status && n.stopLinearAd())
        }
    };
    var D = new function () {
        this.start = function () {
          t(), e()
        }, this.stop = function () {
          t()
        };
        var e = function () {
            n.on(n.EVENT.IMPRESSION, V.impression), n.on(n.EVENT.RESUME, V.resume), n.on(n.EVENT.PAUSE, V.pause), n.on(n.EVENT.STOP, V.stop), n.on(n.EVENT.ENDED, V.ended), n.on(n.EVENT.ERROR, V.error), n.on(n.EVENT.LINEAR_AD_MEDIA_START, V.linearAdMediaStart), n.on(n.EVENT.LINEAR_AD_MEDIA_COMPLETE, V.linearAdMediaComplete), n.on(n.EVENT.PAUSE_FOR_AD, V.pauseForAd), n.on(n.EVENT.RESUM_FOR_AD, V.resumeForAd), n.on(n.EVENT.CLICK_SKIP, V.clickSkip), n.on(n.EVENT.FULLSCREEN, V.fullscreen), n.on(n.EVENT.FULLSCREEN_EXIT, V.fullscreenExit), n.on(n.EVENT.CLICK_PAUSE_BANNER, V.clickPauseBanner), n.on(n.EVENT.PAUSE_BANNER_IMPRESSION, V.pauseBannerImpression), n.on(n.EVENT.CLICK_LOGO, V.clickLogo)
          },
          t = function () {
            n.off(n.EVENT.IMPRESSION, V.impression), n.off(n.EVENT.RESUME, V.resume), n.off(n.EVENT.PAUSE, V.pause), n.off(n.EVENT.STOP, V.stop), n.off(n.EVENT.ENDED, V.ended), n.off(n.EVENT.ERROR, V.error), n.off(n.EVENT.LINEAR_AD_MEDIA_START, V.linearAdMediaStart), n.off(n.EVENT.LINEAR_AD_MEDIA_COMPLETE, V.linearAdMediaComplete), n.off(n.EVENT.PAUSE_FOR_AD, V.pauseForAd), n.off(n.EVENT.RESUM_FOR_AD, V.resumeForAd), n.off(n.EVENT.CLICK_SKIP, V.clickSkip), n.off(n.EVENT.FULLSCREEN, V.fullscreen), n.off(n.EVENT.FULLSCREEN_EXIT, V.fullscreenExit), n.off(n.EVENT.CLICK_PAUSE_BANNER, V.clickPauseBanner), n.off(n.EVENT.PAUSE_BANNER_IMPRESSION, V.pauseBannerImpression), n.off(n.EVENT.CLICK_LOGO, V.clickLogo)
          }
      },
      V = new function () {
        this.impression = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.impression"), console.log("callPlayer =>", t), console.groupEnd()), O.start(), q.start(), _.default.impression(t), _.default.comScore(t), o.default.isLive(t.program) ? g.onVmxContentLive(t) : g.onVmxContentVod(t), $(document).off("visibilitychange", B), $(window).off("beforeunload", U), $(document).on("visibilitychange", {
            callPlayer: t
          }, B), $(window).on("beforeunload", {
            callPlayer: t
          }, U), w.default.emit(t.EVENT.IMPRESSION, t)
        }, this.resume = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.resume"), console.log("callPlayer =>", t), console.groupEnd()), w.default.emit(t.EVENT.RESUME, t)
        }, this.pause = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.pause"), console.log("callPlayer =>", t), console.groupEnd()), z(t.program), w.default.emit(t.EVENT.PAUSE, t)
        }, this.stop = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.stop"), console.log("callPlayer =>", t), console.groupEnd()), q.stop(), O.stop(), (0, S.default)(t), $(document).off("visibilitychange", B), $(window).off("beforeunload", U), w.default.emit(t.EVENT.STOP, t)
        }, this.ended = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.ended"), console.log("callPlayer =>", t), console.groupEnd()), D.stop(), q.stop(), O.stop(), _.default.complete(t), g.onStop(), (0, S.default)(t), $(document).off("visibilitychange", B), $(window).off("beforeunload", U), t.program.currentTime = 0, z(t.program), w.default.emit(t.EVENT.ENDED, t)
        }, this.error = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.error"), console.log("callPlayer =>", t), console.groupEnd()), q.stop(), O.stop(), t.mask.error(), (0, S.default)(t), $(document).off("visibilitychange", B), $(window).off("beforeunload", U), w.default.emit(t.EVENT.ERROR, t)
        }, this.linearAdMediaStart = function (e, n) {
          1 == litv.debug && (console.group("callPlayer.callbacks.linearAdMediaStart"), console.log("callPlayer =>", t), console.log("event =>", e), console.log("duration =>", n), console.groupEnd());
          var o = t.program,
            r = e.trunkType;
          "channel" == o.contentType ? "jingle" != r && g.onLiveAd(n / 1e3) : "prerolls" == r ? g.onPrerollAd(n) : "midrolls" == r ? g.onMidrollAd(n) : "postrolls" == r && g.onPostrollAd(n), u.default.start(), w.default.emit(t.EVENT.LINEAR_AD_MEDIA_START, t, e, n)
        }, this.linearAdMediaComplete = function (e) {
          1 == litv.debug && (console.group("callPlayer.callbacks.linearAdMediaComplete"), console.log("callPlayer =>", t), console.log("event =>", e), console.groupEnd());
          var n = e.trunkType;
          "postroll" != n && "jingle" != n && g.onStop(), u.default.stop(), w.default.emit(t.EVENT.LINEAR_AD_MEDIA_COMPLETE, t, e)
        }, this.pauseForAd = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.pauseForAd"), console.log("callPlayer =>", t), console.groupEnd()), g.onStop(), w.default.emit(t.EVENT.PAUSE_FOR_AD, t)
        }, this.resumeForAd = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.resumeForAd"), console.log("callPlayer =>", t), console.groupEnd()), o.default.isLive(t.program) ? g.onVmxContentLive(t) : g.onVmxContentVod(t), w.default.emit(t.EVENT.RESUME_FOR_AD, t)
        }, this.clickSkip = function (e) {
          1 == litv.debug && (console.group("callPlayer.callbacks.clickSkip"), console.log("callPlayer =>", t), console.groupEnd()), E.default.show({
            clickThrough: e.href
          }), w.default.emit(t.EVENT.CLICK_SKIP, t)
        }, this.prepareCallback = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.prepareCallback"), console.log("callPlayer =>", t), console.groupEnd()), F(t), w.default.emit(t.EVENT.PREPARE_CALLBACK, t)
        }, this.maskChangeCallback = function (e) {
          1 == litv.debug && (console.group("callPlayer.callbacks.maskChangeCallback"), console.log("callPlayer =>", t), console.log("mask =>", e), console.groupEnd()), w.default.emit(t.EVENT.MASK_CHANGE_CALLBACK, t, e)
        }, this.maskClickCallback = function (e, n) {
          1 == litv.debug && (console.group("callPlayer.callbacks.maskClickCallback"), console.log("callPlayer =>", t), console.log("mask =>", e), console.log("action =>", n), console.groupEnd()), w.default.emit(t.EVENT.MASK_CLICK_CALLBACK, t, e, n)
        }, this.fullscreen = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.fullscreen"), console.log("callPlayer =>", t), console.groupEnd()), w.default.emit(t.EVENT.FULLSCREEN, t)
        }, this.fullscreenExit = function () {
          1 == litv.debug && (console.group("callPlayer.callbacks.fullscreenExit"), console.log("callPlayer =>", t), console.groupEnd()), w.default.emit(t.EVENT.FULLSCREEN_EXIT, t)
        }, this.clickPauseBanner = function (e) {
          1 == litv.debug && (console.group("callPlayer.callbacks.clickPauseBanner"), console.log("callPlayer =>", t), console.log("data", e), console.groupEnd());
          var n = t.program;
          ga("ec:addPromo", {
            id: e.title,
            name: n.contentType + "_" + n.title,
            creative: n.title
          }), ga("ec:setAction", "promo_click"), ga("send", "event", "Promo", "click", n.contentType + "_PauseBN"), w.default.emit(t.EVENT.CLICK_PAUSE_BANNER, t, e)
        }, this.pauseBannerImpression = function (e) {
          1 == litv.debug && (console.group("callPlayer.callbacks.pauseBannerImpression"), console.log("callPlayer =>", t), console.log("data", e), console.groupEnd());
          var n = t.program;
          ga("ec:addPromo", {
            id: e.title,
            name: n.contentType + "_" + n.title,
            creative: n.title
          }), ga("send", "event", "Promo", "impression", n.contentType + "_PauseBN"), w.default.emit(t.EVENT.PAUSE_BANNER_IMPRESSION, t, e)
        }, this.clickLogo = function (e) {
          1 == litv.debug && (console.group("callPlayer.callbacks.clickLogo"), console.log("callPlayer =>", t), console.log("data", e), console.groupEnd());
          var n = t.program;
          ga("ec:addPromo", {
            id: e.title,
            name: "Playerlogo",
            creative: n.title
          }), ga("ec:setAction", "promo_click"), ga("send", "event", "Promo", "click", "Playerlogo"), w.default.emit(t.EVENT.CLICK_LOGO, t, e)
        }, this.remoteKeyin = function (e, n) {
          if (1 == litv.debug && (console.group("callPlayer.callbacks.remoteKeyin"), console.log("obj =>", e), console.log("number", n), console.groupEnd()), e == N) {
            var o = null;
            if (/\d+/.test(n)) o = t.channelItems.callbackObj.channelNoMap[n];
            else if ("+" == n) {
              var r = t.channelItems.callbackObj.channelLine,
                i = j.getRemoteRecords(),
                s = null;
              (s = i[1]) || (s = i[0]);
              var l = a.default.binarySearch(s, r, "no");
              (l += 1) >= r.length && (l = 0), o = r[l]
            } else if ("-" == n) {
              var u = t.channelItems.callbackObj.channelLine,
                c = j.getRemoteRecords(),
                d = null;
              (d = c[1]) || (d = c[0]);
              var f = a.default.binarySearch(d, u, "no");
              (f -= 1) < 0 && (f = u.length - 1), o = u[f]
            } else "b" == n && (o = j.getWatchRecord()) && j.pushWatchRecord(o);
            o ? (j.pushRemoteRecord(o), N.message(o.no + " " + o.title), w.default.emit(t.EVENT.REMOTE_KEYIN, t, o)) : N.message("查無此台")
          }
        }
      },
      q = new function () {
        var e = null;
        this.start = function () {
          o(), n()
        }, this.stop = function () {
          o()
        };
        var n = function () {
            e = setInterval(function () {
              t.currentTime > 0 && (t.program.currentTime = t.currentTime)
            }, 1e3)
          },
          o = function () {
            clearInterval(e)
          }
      },
      F = function (t) {
        var n = t.program;
        if ("boolean" != typeof n.autoPosition || 0 != n.autoPosition) {
          var o = e.getFlowplayerSection();
          if ((o = o.parents(".common_player_section")).length > 0) {
            var r, i = $(window).width(),
              a = $(window).height(),
              s = o.offset().top;
            r = a > 768 ? (a - o.height()) / 2 : i <= a ? (a - o.height()) / 2 : a - o.height(), setTimeout(function () {
              $("html,body").stop().animate({
                scrollTop: s - r
              }, "slow")
            }, 500)
          }
        }
      },
      U = function (e) {
        var t = e.data.callPlayer;
        z(t.program), _.default.percent(t);
        for (var n = (new Date).getTime(), o = 0; o < Number.POSITIVE_INFINITY; o++)
          if ((new Date).getTime() - n > 500) return
      },
      B = function (e) {
        if ("hidden" == document.visibilityState) {
          var t = e.data.callPlayer;
          z(t.program)
        }
        "ios" == c.default.deviceType && H(e)
      },
      H = function (e) {
        "hidden" == document.visibilityState && t.pause()
      },
      z = function (e) {
        if (1 != o.default.isLive(e) && "ent" != e.contentType && 1 != o.default.isOnlyAssetId(e) && 1 == e.isAuthenticated && 1 != e.onAd) {
          var t = -1;
          e.currentTime && (t = e.currentTime),
            function (t) {
              var n = !1;
              e.bookmark = t, t || (n = !0), s.default.add(e.contentType, e.seriesId, e.season || "", e.episode || "", e.videoType || null, e.groupId || null, t, n)
            }(-1 != t ? t : 0)
        }
      },
      G = function (e, t) {
        0 == e.bookmark || e.bookmark ? t(null) : e.seriesId && 1 == e.isAuthenticated ? s.default.find(e.seriesId, function (n) {
          n ? (n = JSON.parse(n), e.episode == n.episode && e.season == n.season && e.videoType == n.videoType && e.groupId == n.groupId ? t(n) : t(null)) : t(null)
        }) : t(null)
      },
      W = function (e, n) {
        var r = e.program;
        if (1 != o.default.isLive(r))
          if ("限制級" != r.rank || litv.isEighteen) n(!0);
          else {
            var i = function e() {
                litv.isEighteen = !0, w.default.off(f.default.PARENTAL_CONTROL_CONFIRM_EVENT, e), w.default.off(f.default.PARENTAL_CONTROL_CANCEL_EVENT, a), n(!0)
              },
              a = function e() {
                c.default.detectIsMobile() && 1 != litv.enableMobile && t.mask.appDL(), w.default.off(f.default.PARENTAL_CONTROL_CONFIRM_EVENT, i), w.default.off(f.default.PARENTAL_CONTROL_CANCEL_EVENT, e), V.prepareCallback(), n(!1)
              };
            t.mask.parental(), f.default.show(), w.default.off(f.default.PARENTAL_CONTROL_CONFIRM_EVENT, i), w.default.on(f.default.PARENTAL_CONTROL_CONFIRM_EVENT, i), w.default.off(f.default.PARENTAL_CONTROL_CANCEL_EVENT, a), w.default.on(f.default.PARENTAL_CONTROL_CANCEL_EVENT, a)
          }
        else n(!0)
      },
      K = function (e, t, n) {
        var o = e.program,
          i = n.action;
        "login" == i ? p.default.show() : "purchase" == i ? (r.default.startPoup(o, function (t) {
          "play" == t.status && e.setSrc(o)
        }), ga("ec:addPromo", {
          id: "PlayCard",
          name: "PlayCard"
        }), ga("ec:setAction", "promo_click"), ga("send", "event", "Promo", "click", "PlayCard", {
          nonInteraction: !0
        })) : "trial" == i ? (y.default.show(), w.default.off(y.default.CHANNEL_TRIAL_SUCCESS_EVENT, J), w.default.on(y.default.CHANNEL_TRIAL_SUCCESS_EVENT, J)) : "play" == i ? (o = Y(o), e.setSrc(o)) : "app" == i && window.open("http://hyperurl.co/litvplayercard", "_blank"), V.maskClickCallback(t, n)
      },
      Y = function (e) {
        return "vod-channel" == e.contentType ? e = t.channelItems.vodChannel.get(e) : "playout-channel" == e.contentType ? e = t.channelItems.playoutChannel.get(e) : 0 == o.default.isLive(e) && (e.bookmark = e.currentTime), e
      },
      J = function (e) {
        if (e.error) t.mask.error(e.error.errorMessage);
        else {
          var n = t.program;
          t.setSrc(n)
        }
      },
      Q = function (e) {
        var t = e.program,
          n = e.video,
          r = function () {
            o.default.getBsmPkgCategory(t) ? e.mask.purchase() : e.mask.notAvailable()
          };
        n && "vod.error.outsideregionerror" === n.errorMessage ? e.mask.outSideRegion() : n && Z(t) ? e.mask.watchDevice() : 1 == t.isAuthenticated ? 1 == o.default.isLive(t) && t.trial ? o.default.checkChannelTrialStatus(function (n) {
          t.trialPermission = !0, 1 == n ? e.mask.trial() : r()
        }) : r() : e.mask.login()
      },
      Z = function (e) {
        var t = !1;
        return e.watchDevices ? (c.default.detectIsMobile() ? -1 == e.watchDevices.indexOf("PHONE") ? t = !0 : -1 == e.watchDevices.indexOf("PAD") && (t = !0) : -1 == e.watchDevices.indexOf("PC") && (t = !0), t) : t
      },
      X = function (e) {
        var t = e.program,
          n = e.video,
          r = {
            autoPlay: !0
          };
        if (r.src = n.fullpath, r.startTime = t.bookmark, r.startTime && (r.startTime = parseInt(r.startTime)), "string" == typeof t.liads ? r.liadMeta = JSON.parse(t.liads) : (t.liads || (t.liads = {}), r.liadMeta = t.liads), r.playAds = n.playAds, "channel" == t.contentType) r.assetId = t.contentId;
        else if ("vod-channel" == t.contentType) {
          var i = t.focusProgram;
          r.assetId = i.asset_id
        } else r.assetId = t.assetId;
        if ("vod-channel" == t.contentType || "playout-channel" == t.contentType) {
          var a = t.focusProgram;
          r.midrollTimeCodes = a.time_codes, r.midrollTimecodeDuration = a.timecode_duration
        } else if ("channel" != t.contentType && t.midroll) {
          var s = t.midroll.timeCodes;
          !o.default.isOnlyAssetId(t) && Array.isArray(s) && (r.midrollTimeCodes = s)
        }
        if ("playout-channel" == t.contentType) {
          var l = t.focusProgram;
          r.programEndTime = l.p_end
        }
        return "channel" == t.contentType ? r.mediaMode = "live" : "vod-channel" == t.contentType || "playout-channel" == t.contentType ? r.mediaMode = "simulation_live" : r.mediaMode = "vod", r.keepPlayingAd = ee(t), r.midrollBeforeStart = t.midrollBeforeStart, r.midrollBeforeStartDuration = t.midrollBeforeStartDuration, r.adUrlReplacement = te(e), r.now = (new Date).getTime(), 1 == t.muted && (r.muted = !0), 1 == litv.debug && (console.group("callPlayer.setSrc()"), console.log("obj => ", r), console.log("string =>", JSON.stringify(r)), console.groupEnd()), e.src = r, r
      },
      ee = function (e) {
        return !o.default.isLive(e)
      },
      te = function (e) {
        var t = e.program,
          n = (e.video, new Array),
          o = new Array,
          r = new Array;
        if (t.country)
          for (var i = 0; i < t.country.length; i++) {
            var a = t.country[i].group;
            a && o.push(a)
          }
        if (o = o.join(","), t.category)
          for (var s = 0; s < t.category.length; s++) {
            var l = t.category[s].group;
            l && r.push(l)
          }
        return r = r.join(","), n.push({
          target: new RegExp("%5Bcountries%5D", "ig"),
          newValue: encodeURIComponent(o)
        }), n.push({
          target: new RegExp("%5Bgenres%5D", "ig"),
          newValue: encodeURIComponent(r)
        }), n.push({
          target: new RegExp("\\[CONTENT_ID\\]", "ig"),
          newValue: encodeURIComponent(t.contentId)
        }), litv.ipData && n.push({
          target: new RegExp("\\[IPADDRESS\\]", "ig"),
          newValue: encodeURIComponent(litv.ipData.ip)
        }), "channel" == t.contentType && n.push({
          target: new RegExp("\\[CDN_CODE\\]", "ig"),
          newValue: encodeURIComponent(t.CdnCode)
        }), "playout-channel" == t.contentType && n.push({
          target: new RegExp("\\[ASSET_ID\\]", "ig"),
          newValue: encodeURIComponent(t.focusProgram.asset_id)
        }), n
      },
      ne = function (e, t) {
        var n = e.program;
        new Promise(function (e, t) {
          a.default.getAuthStatus(function (t) {
            n.isAuthenticated = t, 1 == t || "pc" != c.default.deviceType && 1 != litv.enableMobile || (w.default.off(v.default.LOGIN_SUCCESS_EVENT, oe), w.default.on(v.default.LOGIN_SUCCESS_EVENT, oe)), e(t)
          })
        }).then(function (e) {
          return new Promise(function (r, a) {
            var s = {};
            if ("channel" == n.contentType) "F" == n.chargeMode ? s.url = e ? "/channel/ajax/getMainUrl" : "/channel/ajax/getMainUrlNoAuth" : s.url = "/channel/ajax/getMainUrl", s.selectMethod = "GET", s.request = {
              contentId: n.contentId,
              contentType: n.contentType
            };
            else if ("vod-channel" == n.contentType || "playout-channel" == n.contentType) {
              var l = n.focusProgram;
              "F" == n.chargeMode ? s.url = e ? "/channel/ajax/getMainUrl" : "/channel/ajax/getMainUrlNoAuth" : s.url = "/channel/ajax/getMainUrl", s.selectMethod = "GET", s.request = {
                contentId: n.contentId + "#" + l.asset_id,
                contentType: n.contentType
              }
            } else o.default.isOnlyAssetId(n) ? s.url = e ? "/vod/ajax/getMainUrl" : "/vod/ajax/getMainUrlNoAuth" : "F" == n.chargeMode ? s.url = e ? "/vod/ajax/getMainUrl" : "/vod/ajax/getMainUrlNoAuth" : s.url = "/vod/ajax/getMainUrl", s.selectMethod = "POST", s.request = {
              assetId: n.assetId,
              watchDevices: n.watchDevices
            }, s.request = JSON.stringify(s.request);
            s.url ? i.default.get(s, function (e, n) {
              "function" == typeof t && t(n)
            }) : "function" == typeof t && t(null)
          })
        })
      },
      oe = function () {
        var e = t.program;
        e = Y(t.program), t.setSrc(e)
      },
      re = function (e) {
        return "X" != e.program.chargeMode
      },
      ie = function () {
        ga(function (e) {
          var t = e.get("&dl");
          if (t) {
            var n = h.default.getDetail(t),
              o = n.query.content_id,
              r = n.query.asset_id;
            o ? h.default.getUrlParam("content_id") != o && (ga("set", "location", location.href), ga("send", "pageview")) : r ? h.default.getUrlParam("asset_id") != r && (ga("set", "location", location.href), ga("send", "pageview")) : n.href != location.href && (ga("set", "location", location.href), ga("send", "pageview"))
          }
        })
      },
      ae = function (e) {
        if (sessionStorage.getItem("sponsorName")) {
          var t = e.program.contentId,
            n = sessionStorage.getItem("sponsor_content_id");
          if (n)
            if (t) {
              if (t != n) return se()
            } else se();
          else t ? sessionStorage.setItem("sponsor_content_id", e.program.contentId) : se()
        }
        return !1
      },
      se = function () {
        return !1
      }
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = s(n(2)),
    r = s(n(30)),
    i = s(n(6)),
    a = s(n(139));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = new function () {
    var e, t = window.location,
      n = t.origin,
      s = function (t, n, o) {
        var i;
        "init" == n && (i = "/purchase/popupPackageInfo?id=" + t.categoryId + "&chtbackurl=" + encodeURIComponent(t.chtbackurl) + "&content_id=" + t.contentId), "complate" == n && (i = t.status ? "/purchase/popupPurchaseComplete?id=" + t.content_id + "&mPgId=" + t.mPgId + "&mPy=" + t.mPy + "&aa-result=" + t.aa_result + "&aa-uid=" + t.aa_uid + "&aa-otpw=" + t.aa_otpw + "&aa-fee=" + t.aa_fee + "&aa-authority=" + t.aa_authority + "&aa-others=" + t.aa_others + "&aa-cporderno=" + t.aa_cporderno + "&ApproveCode=" + t.ApproveCode + "&PAN=" + t.PAN + "&aa-errorCode=" + t.aa_errorCode + "&BankCode=" + t.BankCode + "&content_id=" + t.content_id : "/purchase/popupPackageInfo?id=" + t.mClId + "&chtbackurl=" + encodeURIComponent(window.location.href) + "&content_id=" + t.content_id + "&chtfail=" + t.chtfail + "&aaErrorCode=" + t.aa_errorCode);
        var a = {
          iframeUrl: i,
          width: "1024px",
          height: "90%",
          boxClass: "alert_purchase",
          callback: function (t, n, i) {
            "cancel" == t && (r.default.dissmiss(), e && "function" == typeof o && o(e)), "load" == t && $(".alert_purchase").length > 0 && $(".alert_purchase").addClass("iframe_load")
          }
        };
        (new r.default).renderCustomizeAlert(a)
      };
    this.startPoup = function (e, n) {
      var o, r = function (e) {
        for (var t = e.packageInfo.bsmPkgCategories, n = 0; n < t.length; n++) {
          var o = t[n],
            r = o.purchaseType;
          if ("SVOD" == r || "TVOD" == r) return o
        }
        return {}
      }(e).categoryId;
      "TVOD" == r ? function (e, t) {
        window.alert && a.default.show({
          contentId: e.contentId,
          categoryId: e.categoryId,
          enable: !1,
          title: e.title,
          callback: function (e) {
            var n = e.status;
            "play" == n ? t(e) : "success" == n && (e.status = "play", t(e))
          }
        }), $(".alert_box").css("width", "700px")
      }(o = {
        contentId: e.contentId,
        categoryId: r,
        title: e.title
      }, function (e) {
        "function" == typeof n && n(e)
      }) : r && (o = {
        categoryId: r,
        chtbackurl: t.href,
        contentId: e.contentId
      }, s(o, "init", function (e) {
        var t;
        "success" == e && (t = {
          status: "play"
        }), "function" == typeof n && n(t)
      }))
    }, this.checkChtStatus = function () {
      var e, o = t.search;
      if (t.href, o.indexOf("chtfail") >= 0 && o.indexOf("chtsuccess") < 0) {
        var r = i.default.getQuerys();
        e = {
          status: !1,
          chtfail: r.chtfail,
          mClId: r.mClId,
          content_id: r.mCtId,
          aa_errorCode: r["aa-errorCode"],
          aa_result: r["aa-result"],
          aa_others: r["aa-others"]
        }, s(e, "complate"), i.default.getQuerys(t.href);
        var a = i.default.getQuerys(window.location.href);
        window.history.replaceState({}, 0, n + t.pathname + "?brc_id=" + a.brc_id + "&id=" + a.id)
      } else {
        if (!(o.indexOf("chtsuccess") >= 0 && o.indexOf("chtfail") < 0)) return;
        var l = i.default.getQuerys();
        e = {
          status: !0,
          mClId: l.mClId,
          mPgId: l.mPgId,
          mPy: l.mPy,
          aa_result: l["aa-result"],
          aa_uid: l["aa-uid"],
          aa_otpw: l["aa-otpw"],
          aa_fee: l["aa-fee"],
          aa_authority: l["aa-authority"],
          aa_others: l["aa-others"],
          aa_cporderno: l["aa-cporderno"],
          ApproveCode: l.ApproveCode,
          PAN: l.PAN,
          aa_errorCode: l.aaErrorCode,
          BankCode: l.BankCode,
          content_id: l.mCtId
        }, s(e, "complate"), i.default.getQuerys(t.href);
        var u = i.default.getQuerys(window.location.href);
        window.history.replaceState({}, 0, n + t.pathname + "?brc_id=" + u.brc_id + "&id=" + u.id)
      }
    }, this.startMessageCenter = function () {
      window.addEventListener("message", function (t) {
        var r, i = t.data;
        if (t.origin == n) {
          try {
            r = JSON.parse(i)
          } catch (e) {
            return
          }
          var a = r.type;
          if ("CHT_FORM" == a && ($("body").append(r.data), o.default.nextTack(function () {
              document.getElementById("lt_phrchase_cht_form").submit()
            })), "PURCHASE_RESULT" == a) {
            if (r.data) {
              var s = $("title")[0].innerText,
                l = $(".alert_iframe")[0].contentWindow,
                u = {
                  type: "PAGE_INFO",
                  location: window.location.href,
                  title: s
                };
              l.postMessage(JSON.stringify(u), "*")
            }! function (t) {
              t.status && (e = t.status)
            }({
              status: "success"
            })
          } else if ("GET_POSITION" == a) {
            var c = document.querySelector(".alert_box"),
              d = c.clientHeight,
              f = c.scrollTop;
            document.querySelector(".alert_iframe").contentWindow.postMessage(JSON.stringify({
              type: "POST_POSITION",
              height: d,
              scrollTop: f
            }), "*")
          }
        }
      })
    }
  };
  l.startMessageCenter(), l.checkChtStatus(), t.default = l
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = a(n(1)),
    r = a(n(140)),
    i = a(n(141));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function () {
    var e = function (e, t) {
        var n = e.note ? e.note.replace(/\\n/g, "<br/>") : "",
          o = e.title ? e.title : "",
          r = e.packageName ? e.packageName : "",
          i = e.price ? e.price : "",
          a = '<div class="purchase_info">' + (t ? '<div class="title_result">感謝您本次的消費，租借的影片可立即觀看。</div>' : '<div class="title">1.確認訂購內容：</div>') + '<table class="purchase_form" cellpadding="0" cellspacing="0"><thead><tr><th width="10%">NO.</th><th width="45%">品項</th><th width="15%">訂購項目</th><th width="15%">總價</th></tr></thead><tbody><tr><td data-title="No.">1</td><td data-title="品項">' + o + '</td><td data-title="訂購項目">' + r + '</td><td data-title="總價">' + i + '</td></tr></tbody></table><div class="total_price">本次消費金額總計：<b class="highlight">' + i + "</b> 元</div></div>";
        return t ? '<div class="alert_card">' + a + (t ? '<div class="hint_result"><span class="noHighLight">貼心叮嚀：</span><br>' + n + "</div>" : '<div class="hint_result noHighLight">貼心叮嚀：<br>' + n + "</div>") + "</div>" : '<div class="alert_card"><div class="hint">※ 已付款租借之影片，請於48小時內觀賞完畢，期間內可無限次觀賞。</div>' + a + '<div class="credit_info"><div class="title">2.填寫以下信用卡資料：</div><div class="credit_card" data-credit-key="alert_credit_card"></div></div></div>'
      },
      t = function (e) {
        return '<div class="pop"></div><div class="over_alert">' + close + '<div class="over_title">' + title + '</div><div class="over_message over_leftMessage"><div class="' + errorDetailClassName + '">' + errorStatus + errorMessage + '</div></div><div class="over_bottom">' + button + "</div></div>"
      },
      n = function (e, n, o, r) {
        "function" == typeof r && r({
          status: "unfinished",
          contentId: n
        });
        var i = document.querySelector(".alert_credit"),
          a = i.querySelector(".over_credit"),
          l = i.querySelector(".alert_box"),
          c = i.querySelector(".init_load"),
          d = document.createElement("div");
        d.className = "over_credit", d.innerHTML = t(), a || i.appendChild(d), d.addEventListener("click", function (t) {
          switch (t.target.className) {
            case "over_close":
            case "over_retry":
              d.style.display = "none", l.className = "alert_box", c.style.display = "inline", s(e);
              break;
            case "over_cancel":
              d.style.display = "none", l.className = "alert_box", u();
              break;
            default:
              d.style.display = "inline-block"
          }
        }, !1)
      },
      a = function (t, n, o, a, s) {
        n.title = s;
        var l = document.querySelector(".alert_credit");
        r.default.showCustomize({
          width: "700px",
          height: "610px",
          content: e(n),
          callback: function (e, r, i) {
            "confirm" == e && (function (e) {
              var t = document.querySelector(".alert_credit"),
                n = t.querySelector(".load_credit"),
                o = document.createElement("div");
              o.className = "load_credit", o.innerHTML = '<div class="pop"></div><div class="load_alert"><div class="load_title">線上刷卡</div><span class="highlight">連線進行信用卡授權中，請勿關閉或重整視窗</span><img src="/resources/image/loading.gif" style="margin: 20px auto 0; display: block;" /></div>', n || t.appendChild(o)
            }(), f.getCredit(function (e) {
              c(e, t, n, o, a)
            })), "cancel" == e && (o({
              status: "unfinished",
              contentId: t
            }), u())
          }
        }, l);
        var d = n.note ? n.note.replace(/\\n/g, "<br/>") : "",
          f = new i.default("alert_credit_card", d)
      },
      s = function (e) {
        var t = document.querySelector(".init_load"),
          i = setTimeout(function () {
            var o = document.querySelector(".alert_box");
            t.style.display = "none", o.className += " brightness", n(e), document.querySelector(".over_credit").style.display = "inline-block"
          }, 6e4),
          s = {
            url: "/purchase/ajax/getRecommendPackageInfo",
            selectMethod: "GET",
            request: {
              catalogId: e.categoryId
            }
          };
        o.default.get(s, function (n, o) {
          clearTimeout(i), r.default.exitAlert(), a(e.contentId, o, e.callback, e.enable, e.title), t.style.display = "none"
        }, function (n) {
          e.callback({
            error: n,
            contentId: e.contentId
          }), t.style.display = "none"
        }, !0)
      },
      l = function (n, i, a, s, l) {
        var c = document.querySelector(".load_credit"),
          d = setTimeout(function () {
            var e, n, o, r, i = document.querySelector(".alert_box");
            c.style.display = "none", i.className += " brightness", e = document.querySelector(".alert_credit"), n = e.querySelector(".over_purchase"), o = e.querySelector(".alert_box"), (r = document.createElement("div")).className = "over_purchase", r.innerHTML = t(), n || e.appendChild(r), r.addEventListener("click", function (e) {
              switch (e.target.className) {
                case "over_close_purchase":
                  r.style.display = "none", o.className = "alert_box";
                  break;
                case "btn_over":
                  window.location = "/member/consumptionRecord.do";
                  break;
                default:
                  r.style.display = "inline-block"
              }
            }, !1), document.querySelector(".over_purchase").style.display = "inline-block"
          }, 6e4);
        ! function () {
          var t = {
              payMethod: "CREDIT",
              cardType: n.cardType,
              cardNumber1: n.cardNumber[0],
              cardNumber2: n.cardNumber[1],
              cardNumber3: n.cardNumber[2],
              cardNumber4: n.cardNumber[3],
              month: n.validDate.month,
              year: n.validDate.year,
              invoiceDonation: n.donateInvoice,
              chkCode: n.checkNumber,
              packageId: a.packageId,
              itemId: i
            },
            f = {
              url: "/purchase/ajax/sendPurchase",
              selectMethod: "POST",
              request: JSON.stringify(t)
            };
          o.default.get(f, function (t, n) {
            clearTimeout(d), n.isSuccess ? (function (e, t) {
              var n = t.packageId,
                o = t.packageName,
                r = (e.payType, e.payTypeName),
                i = e.amount,
                a = e.purchaseId,
                s = t.title;
              ga("ec:addProduct", {
                id: n,
                name: o,
                category: r,
                variant: o + "_" + s,
                price: i,
                quantity: 1
              }), ga("ec:setAction", "purchase", {
                id: a,
                revenue: i
              }), ga("send", "pageview", "/purchase/purchaseComplete.do?mPy=Playcard")
            }(n, a), function (t, n, o, i) {
              var a = document.querySelector(".alert_credit"),
                s = a.querySelector(".alert_box"),
                l = document.createElement("div");
              if (s.className = "alert_box", l.className = "credit_succeed", a.appendChild(l), i) var c = '<div class="success_bottom"><button class="finish_credit">完成</button><button class="play_credit">播放影片</button></div>';
              r.default.showCustomize({
                width: "700px",
                height: "610px",
                customizeButton: c || '<div class="success_bottom"><button class="play_credit">播放影片</button></div>',
                content: e(n, !0),
                callback: function (e, n, r) {
                  "finish_credit" == e && (o({
                    status: "success",
                    contentId: t
                  }), u()), "play_credit" == e && (o({
                    status: "play",
                    contentId: t
                  }), u()), "cancel" == e && (o({
                    status: "success",
                    contentId: t
                  }), u())
                }
              }, l)
            }(i, a, s, l)) : (function (e, t, n, o) {
              "function" == typeof o && o({
                status: "fail",
                contentId: t
              });
              var r = document.querySelector(".alert_credit"),
                i = r.querySelector(".fail_credit"),
                a = r.querySelector(".alert_box"),
                s = document.createElement("div");
              s.className = "fail_credit", s.innerHTML = function (e) {
                return '<div class="pop"></div><div class="fail_alert"><div class="fail_close"></div><div class="fail_title">購買失敗</div><div class="fail_message"><div class="fail_order">訂購編號：' + e.purchaseId + '</div><div style="margin-top: 1em;text-indent:-5em; margin-left:5.5em;">錯誤訊息：' + e.errorMessage + '</div><div style="margin-top:0.6em;margin-left:0.5em">代&emsp;&emsp;碼：' + e.errorCode + '</div></div><div class="fail_bottom"><button class="btn_fail">確認</button></div></div>'
              }(e), i || r.appendChild(s), s.addEventListener("click", function (e) {
                switch (e.target.className) {
                  case "fail_close":
                  case "btn_fail":
                    s.style.display = "none", a.className = "alert_box";
                    break;
                  default:
                    s.style.display = "inline-block"
                }
              }, !1)
            }(n, i, 0, s), document.querySelector(".fail_credit").style.display = "inline-block"), c.style.display = "none"
          }, function (e) {
            s({
              error: e,
              contentId: i
            }), c.style.display = "none"
          }, !0)
        }()
      },
      u = function () {
        var e = document.querySelector(".alert_credit");
        r.default.exitAlert(function () {
          document.body.removeChild(e)
        })
      },
      c = function (e, t, n, o, r) {
        var i = document.querySelector(".alert_box"),
          a = document.querySelector(".load_credit");
        e.check.isSucceed && (a.style.display = "inline-block", i.className += " brightness", l(e.data, t, n, o, r))
      };
    return {
      show: function (e) {
        var t = document.createElement("div");
        t.className = "alert_credit", document.body.appendChild(t), a(e.contentId, {}, e.callback);
        var n = document.createElement("div");
        n.className = "init_load", n.innerHTML = '<div class="pop"></div><img src="/resources/image/loading.gif" style="margin: 20px auto 0; display: block;" />', t.appendChild(n), s(e), ga("ec:setAction", "checkout", {
          step: 2
        }), ga("send", "event", "purchase導購", "checkout", "Step 2", {
          nonInteraction: !0
        }), ga("ec:setAction", "checkout", {
          step: 3
        }), ga("send", "event", "purchase導購", "checkout", "Step 3", {
          nonInteraction: !0
        })
      },
      close: u
    }
  }();
  t.default = s
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = function () {
      var e = "alert_bg",
        t = "alert_close",
        n = "alert_iframe",
        i = {
          style: {},
          width: null,
          height: null,
          boxClass: "",
          type: null,
          title: "",
          dialog: "",
          content: "",
          confirm: !0,
          confirmText: "確認",
          confirmClass: "alert_confirm",
          cancel: !0,
          cancelText: "取消",
          cancelClass: "alert_cancel",
          customizeButton: "",
          closeButton: !0,
          callback: function (e) {
            "confirm" == e && r("confirm"), "cancel" == e && Alert.exitAlert()
          },
          iframe: "",
          background: "",
          image: null,
          imageClass: null,
          input: !1,
          inputType: null,
          inputClass: "alert_input",
          responsiveStyle: []
        },
        a = document.createDocumentFragment(),
        s = document.createElement("div");
      s.className = "alert_module", s.innerHTML = '<div class="alert_bg"></div><div class="alert_box"><iframe class="alert_iframe"></iframe><div class="alert_close"></div><div class="alert_head"></div><img class="alert_image"><div class="alert_middle"><div class="alert_content"></div><p class="alert_dialog"></p><input class="alert_input" type="text" maxlength="10" /></div><div class="alert_foot"><div class="customize_btn"></div><button class="alert_cancel"></button><button class="alert_confirm"></button></div></div>';
      var l = function () {
        a.appendChild(s)
      };
      0 == a.childElementCount && l();
      var u, c, d, f, p = function () {},
        h = {
          module: a.querySelector(".alert_module"),
          bg: a.querySelector(".alert_bg"),
          box: a.querySelector(".alert_box"),
          head: a.querySelector(".alert_head"),
          dialog: a.querySelector(".alert_dialog"),
          content: a.querySelector(".alert_content"),
          foot: a.querySelector(".alert_foot"),
          close: a.querySelector(".alert_close"),
          iframe: a.querySelector(".alert_iframe"),
          confirm: a.querySelector(".alert_confirm"),
          cancel: a.querySelector(".alert_cancel"),
          customizeBtn: a.querySelector(".customize_btn"),
          image: a.querySelector(".alert_image"),
          input: a.querySelector(".alert_input")
        },
        v = function () {
          h.input.addEventListener("change", b, !1), h.content.addEventListener("change", b, !1), h.foot.addEventListener("click", b, !1), h.bg.addEventListener("click", b, !1), h.close.addEventListener("click", b, !1), h.iframe.addEventListener("load", b, !1)
        },
        m = function (e) {
          var t = null;
          switch (o(e[0])) {
            case "string":
              (t = {}).title = e[0], t.dialog = e[1], t.callback = e[2], t.confirm = e[3], t.cancel = e[4];
              break;
            case "object":
              if (Array.isArray(e[0])) return console.warn("Incorrect type of argument!!");
              t = {
                style: e[0].style,
                width: e[0].width,
                height: e[0].height,
                boxClass: e[0].boxClass,
                title: e[0].title,
                dialog: e[0].dialog,
                content: e[0].content,
                confirm: e[0].confirm,
                cancel: e[0].cancel,
                confirmText: e[0].confirmText,
                cancelText: e[0].cancelText,
                confirmClass: e[0].confirmClass,
                cancelClass: e[0].cancelClass,
                callback: e[0].callback,
                customizeButton: e[0].customizeButton,
                closeButton: e[0].closeButton,
                iframe: e[0].iframe,
                background: e[0].background,
                image: e[0].image,
                imageClass: e[0].imageClass,
                input: e[0].input,
                inputType: e[0].inputType,
                inputClass: e[0].inputClass,
                responsiveStyle: e[0].responsiveStyle
              };
              break;
            default:
              return console.warn("Unexpected type of argument!!"), !1
          }
          return t
        },
        g = function (e) {
          return u = e.callback || i.callback, {
            style: e.style || i.style,
            width: e.width || i.width,
            height: e.height || i.height,
            boxClass: e.boxClass || i.boxClass,
            title: e.title || i.title,
            dialog: e.dialog || i.dialog,
            content: e.content || i.content,
            confirm: "boolean" == typeof e.confirm ? e.confirm : i.confirm,
            cancel: "boolean" == typeof e.cancel ? e.cancel : i.cancel,
            confirmText: e.confirmText || i.confirmText,
            cancelText: e.cancelText || i.cancelText,
            confirmClass: e.confirmClass || i.confirmClass,
            cancelClass: e.cancelClass || i.cancelClass,
            customizeButton: e.customizeButton || i.customizeButton,
            closeButton: "boolean" == typeof e.closeButton ? e.closeButton : i.closeButton,
            iframe: e.iframe || i.iframe,
            background: e.background || i.background,
            image: e.image || i.image,
            imageClass: e.imageClass || i.imageClass,
            input: "boolean" == typeof e.input ? e.input : i.input,
            inputType: e.inputType || i.inputType,
            inputClass: e.inputClass || i.inputClass,
            responsiveStyle: e.responsiveStyle || i.responsiveStyle
          }
        },
        y = function () {
          return new RegExp("IPHONE|IPAD").test(navigator.userAgent.toUpperCase())
        },
        _ = function (e) {
          for (var t in h.bg || (h = {
              module: f.querySelector(".alert_module"),
              bg: f.querySelector(".alert_bg"),
              box: f.querySelector(".alert_box"),
              head: f.querySelector(".alert_head"),
              dialog: f.querySelector(".alert_dialog"),
              content: f.querySelector(".alert_content"),
              foot: f.querySelector(".alert_foot"),
              close: f.querySelector(".alert_close"),
              iframe: f.querySelector(".alert_iframe"),
              confirm: f.querySelector(".alert_confirm"),
              cancel: f.querySelector(".alert_cancel"),
              customizeBtn: f.querySelector(".customize_btn"),
              image: f.querySelector(".alert_image"),
              input: f.querySelector(".alert_input")
            }), document.body.classList ? document.body.classList.add("alert_body") : document.body.className += " alert_body", e.style) e.style.hasOwnProperty(t) && (h.box.style[t] = e.style[t]);
          h.bg.style.display = "block", h.box.style.display = "block";
          var n = [],
            o = ["width", "height", "background"].reduce(function (t, n) {
              if (e[n]) {
                var o = t || {};
                return o[n] = e[n], o
              }
              return t
            }, null);
          null != o && n.push({
            style: o
          }), n = n.concat(e.responsiveStyle || []), p = function (e, t) {
            if (0 == (t || []).length) return function () {};
            var n = 0,
              o = document.createElement("style");
            document.head.appendChild(o);
            var r = o.sheet;
            return t.forEach(function (e) {
                var t = function (e, t) {
                  var n = "%s %o",
                    o = "",
                    r = t.screenSize;
                  if (r) {
                    if (!(o = function (e) {
                        var t = {
                          "<=": "max",
                          ">=": "min"
                        } [(/[><]=/.exec(e) || [""])[0]];
                        if (!t) return "";
                        var n = (/\d+.+/.exec(e) || [""])[0];
                        return n ? "@media only screen and (" + t + "-width: " + n + ")" : ""
                      }(r))) return "";
                    n = "%m { %s %o }"
                  }
                  var i = function (e) {
                    var t = "{";
                    for (var n in e) e.hasOwnProperty(n) && ("" === e[n] && (e[n] = '""'), t += n + ":" + e[n] + ";");
                    return t + "}"
                  }(t.style);
                  return n.replace("%m", o).replace("%s", ".alert_module .alert_box").replace("%o", i)
                }(0, e);
                t && r.insertRule(t, n++)
              }),
              function () {
                for (; n--;) r.deleteRule(0);
                document.head.removeChild(o)
              }
          }(0, n), h.box.className = "alert_box " + e.boxClass, h.head.innerHTML = e.title, h.confirm.innerHTML = e.confirmText, h.confirm.className = e.confirmClass, h.cancel.innerHTML = e.cancelText, h.cancel.className = e.cancelClass, h.image.className = e.imageClass, h.dialog.innerHTML = e.dialog, h.input.className = e.inputClass, e.content.length > 0 ? (h.input.style.display = "none", h.dialog.style.display = "none", h.content.innerHTML = e.content) : (h.input.style.display = "inline", h.dialog.style.display = "inline", h.content.innerHTML = null), e.input ? (h.input.style.display = "inline", h.input.focus()) : h.input.style.display = "none", e.confirm ? h.confirm.style.display = "inline" : h.confirm.style.display = "none", e.cancel ? h.cancel.style.display = "inline" : h.cancel.style.display = "none", e.confirm || e.cancel || (h.foot.style.display = "none"), e.customizeButton ? (h.confirm.style.display = "none", h.cancel.style.display = "none", h.customizeBtn.innerHTML = e.customizeButton) : h.customizeBtn.innerHTML = "", e.closeButton ? h.close.style.display = "inline-block" : h.close.style.display = "none", e.iframe.length > 0 ? (h.iframe.style.display = "block", h.iframe.src = e.iframe, y() && (h.iframe.style.height = "calc(101%)", h.box.overflowY = "scroll"), y() && "11" == window.BrowserSupportedInfo.uaInfo.os.version.split(".")[0] && (h.iframe.style.position = "absolute", h.module.style.position = "absolute", h.box.style.position = "absolute")) : h.iframe.style.display = "none", e.image ? (h.image.style.display = "inline", h.image.src = e.image) : h.image.style.display = "none"
        },
        b = function (o) {
          var r = null;
          switch (o.target.className) {
            case c.confirmClass:
              r = "confirm";
              break;
            case c.cancelClass:
            case t:
              r = "cancel";
              break;
            case e:
              r = e;
              break;
            case c.inputClass:
              r = "input", d = o.target.value;
              break;
            case n:
              r = "load";
              break;
            default:
              d = o.target.value, r = o.target.className
          }
          u(r, d, o)
        };
      return {
        showAlert: function (e) {
          if ("string" != typeof arguments[0]) return console.warn("Incorrect method!! You should use showCustomize instead");
          l(), document.body.appendChild(a);
          var t = m(arguments);
          t.confirm = !1, t.cancel = !1, t.height = "150px", c = g(t), _(c), v()
        },
        showConfirm: function (e) {
          if ("string" != typeof arguments[0]) return console.warn("Incorrect method!! You should use showCustomize instead");
          l(), document.body.appendChild(a);
          var t = m(arguments);
          c = g(t), _(c), v()
        },
        showPrompt: function (e) {
          if ("string" != typeof arguments[0]) return console.warn("Incorrect method!! You should use showCustomize instead");
          l(), document.body.appendChild(a);
          var t = m(arguments);
          t.input = !0, c = g(t), _(c), v()
        },
        showCustomize: function (e) {
          if ("object" !== o(arguments[0])) return console.warn("Incorrect method , Wrong configuration!!");
          f = arguments[1] || document.body, l(), f.appendChild(a);
          var t = m(arguments);
          c = g(t), _(c), v()
        },
        exitAlert: function (e) {
          "function" == typeof e && e(), document.body.classList ? document.body.classList.remove("alert_body") : document.body.className = " ", d = void 0, c = i, e = i.callback, h.input.value = null, (f = f || document.body).removeChild(h.module), f = void 0, p()
        }
      }
    }();
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e, t) {
    if (!(this instanceof Object)) return new Credit(e, t);
    var n = '<div class="info_block"><div class="wrapper"><div class="row row_left"><p>貼心叮嚀：</p></div><div class="row row_right">' + t + '</div></div><div class="wrapper"><div class="row row_left"><p>安全加密：</p></div><div class="row row_right">本公司採用 SSL 256 bits 安全加密機制，直接傳送銀行取得授權，不經人工處理，敬請安心付款。</div></div></div>',
      o = document.createElement("div");
    o.className = "credit_container", o.innerHTML = '<div class="card_block"><div class="wrapper"><div class="row row_left"><p>卡號：</p></div><div class="row row_right"><input class="card_number" id="card_number" type="tel" maxlength="19" placeholder="0000 0000 0000 0000" autocomplete="cc-number"><label id="credit_hint" class="input_hint"></label><img class="card_img" src="/resources/image/cards.jpg"></div></div><div class="wrapper"><div class="row row_left"><p>有效期限：</p></div><div class="row row_right"><select class="card_date" name="month" id="card_date_month"><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><p>月</p><select class="card_date" name="year" id="card_date_year"></select><p>年</p></div></div><div class="wrapper"><div class="row row_left"><p>檢核碼(背面三碼)：</p></div><div class="row row_right"><input class="card_check" type="tel" maxlength="3" autocomplete="cc-csc"><label id="check_hint" class="input_hint"></label></div></div></div><div class="check_block"><div class="wrapper"><div class="row row_left"><p>自動扣款同意書：</p></div><div class="row row_right"><label><input class="auto_pay" type="checkbox">我同意每月自動扣款</label><span id="auto_hint" class="input_hint"></span><a id="pay_more" class="card_more">瞭解更多 &raquo;</a><ol id="show_pay_more" class="card_show_more"><li>1. 本人同意以「每月自動扣款」方式購買此服務，並委託貴公司於服務到期前三天自本人信用卡帳戶自動扣款支付「每期應繳費用」。</li><li>2. 若遇信用卡換發、補發、升級，致卡號或有效期限變更、信用卡停卡，或因法院查封及其他原因，導致無法扣抵同意人應繳費用之全額時，貴公司得不經催告於服務到期時逕行終止本服務。</li><li>3. 如欲終止自動扣款服務，本人會電洽貴公司客服人員辦理：(02)7707-0708</li></ol></div></div><div class="wrapper"><div class="row row_left"><p>發票捐贈：</p></div><div class="row row_right"><label><span class="card_invoice"><input class="no_donate_invoic" type="radio" name="card_invoice" value="false" checked><p>不捐贈</p></span></label><label><span class="card_invoice"><input class="donate_invoic" type="radio" name="card_invoice" value="true"><p>財團法人伊甸社會福利基金會</p></span></label><a id="invoice_more" class="card_more">瞭解更多 &raquo;</a>    <ol id="show_invoice_more" class="card_show_more"><li>1. 根據財政部令台財稅字第 0952400194 號 「電子發票實施作業要點」，本公司開立電子發票，不主動寄核准文號： 財北國稅松山營業字第 1000011813 號)</li><li>2. 選擇發票捐贈者，一經開立即無法再換開發票。</li><li>3. 選擇不捐贈者，請務必確認會員註冊資訊填寫正確，以利通知發票中獎訊息，並提供中獎發票作為兌獎憑證。</li><li>4. 若欲索取二聯式紙本發票或三聯式發票 (需統編者)，請洽客服專線 (02)7707-0708 辦理。</li></ol></div></div></div>' + n;
    var r = document.createDocumentFragment();
    if (r.appendChild(o), this.credit_card = document.querySelector("[data-credit-key=" + e + "]") || !1, this.credit_card) {
      if (0 == this.credit_card.childElementCount) {
        this.credit_card.appendChild(r);
        var i = JSON.parse(this.credit_card.getAttribute("data-auto")),
          a = this.credit_card.querySelector(".check_block").children[0];
        i || (a.style.display = "none");
        var s = this.credit_card.querySelector(".donate_invoic"),
          l = this.credit_card.querySelector(".no_donate_invoic");
        s.name += " " + e, l.name += " " + e, this.getYearOption(), this.eventListener()
      }
    } else console.warn("Wrong data-credit-key value !!")
  };
  o.prototype = {
    constructor: o,
    nextInput: function (e) {
      var t = this.credit_card.querySelector("#credit_hint"),
        n = this.credit_card.querySelector("#check_hint"),
        o = this.credit_card.querySelector(".card_date"),
        r = this.credit_card.querySelector(".card_check"),
        i = (this.credit_card.querySelector("#card_date_month"), this.credit_card.querySelector("#card_date_year"));
      e.target.nextElementSibling, "card_number" == e.target.className && (t.innerHTML = "", e.target.value.length >= e.target.maxLength && o.focus()), "card_date" == e.target.className && ("card_date_month" == e.target.id && i.focus(), "card_date_year" == e.target.id && r.focus()), "card_check" == e.target.className && (n.innerHTML = "")
    },
    checkIsNumber: function (e) {
      if ("" == e) return e;
      var t = e.match(/\d/g);
      return null != t ? e = t.join("").substring(0, 19) : ""
    },
    formatCardNumber: function (e) {
      return e.replace(/(\d{4})(?=\d)/g, "$1 ")
    },
    toggle_more: function (e) {
      var t = null;
      switch (e.target.id) {
        case "pay_more":
          t = this.credit_card.querySelector("#show_pay_more");
          break;
        case "invoice_more":
          t = this.credit_card.querySelector("#show_invoice_more")
      }
      t && ("inline-block" == t.style.display ? this.slideUp(t) : this.slideDown(t))
    },
    eventListener: function () {
      var e = this;
      this.credit_card.addEventListener("change", function (t) {
        e.nextInput(t)
      }, !1), this.credit_card.addEventListener("input", function (t) {
        var n = t.target.value,
          o = e.checkIsNumber(n);
        "card_number" == t.target.id && (o = e.formatCardNumber(o)), n != o && (t.target.value = o), e.nextInput(t)
      }, !1), this.credit_card.addEventListener("click", function (t) {
        e.toggle_more(t)
      }, !1)
    },
    getYearOption: function () {
      for (var e = this.credit_card.querySelector("#card_date_year"), t = (new Date).getFullYear(), n = [], o = document.createDocumentFragment(), r = 0; r < 15; r++) {
        var i = t + r;
        n.push({
          text: i,
          value: i
        });
        var a = document.createElement("option");
        a.text = n[r].text, a.value = n[r].value, o.appendChild(a)
      }
      e.appendChild(o)
    },
    enableAutoPay: function (e) {
      e = "boolean" != typeof e || e, this.credit_card.querySelector(".check_block").children[0].style.display = e ? "" : "none"
    },
    getCredit: function (e) {
      var t = {
          cardNumber: this.getCard(),
          cardType: this.getCardType(),
          validDate: this.getValid(),
          checkNumber: this.getCheckNumber(),
          donateInvoice: this.getInvoice()
        },
        n = [];
      this.check().cardError && n.push({
        error: "cardError",
        errorType: this.check().cardError
      }), this.check().checkError && n.push({
        error: "checkError",
        errorType: this.check().checkError
      }), this.check().autoPayError || n.push({
        error: "autoPayError"
      });
      var o = {
        data: t,
        check: {
          isSucceed: this.check().checkResult,
          error: n
        }
      };
      return e && e(o), o
    },
    getCard: function () {
      return (this.credit_card.querySelector("#card_number").value || "").split(" ")
    },
    getCardType: function () {
      return "5" == this.credit_card.querySelector(".card_number").value.charAt(0) ? "MASTER" : "VISA"
    },
    getValid: function () {
      var e = this.credit_card.querySelector("#card_date_month"),
        t = this.credit_card.querySelector("#card_date_year");
      return {
        month: e.value,
        year: t.value
      }
    },
    getCheckNumber: function () {
      return this.credit_card.querySelector(".card_check").value
    },
    getAutoPay: function () {
      var e = this.credit_card.querySelector(".check_block").children[0],
        t = this.credit_card.querySelector(".auto_pay");
      return !e.style.display && t.checked
    },
    getInvoice: function () {
      return !!this.credit_card.querySelector(".donate_invoic").checked
    },
    check: function () {
      var e, t = !0,
        n = !0,
        o = (this.getCard(), this.getCheckNumber()),
        r = this.getAutoPay(),
        i = this.credit_card.querySelector(".check_block"),
        a = this.credit_card.querySelector(".card_number"),
        s = this.credit_card.querySelector(".card_check"),
        l = this.credit_card.querySelector(".auto_pay"),
        u = this.credit_card.querySelector("#credit_hint"),
        c = this.credit_card.querySelector("#check_hint"),
        d = this.credit_card.querySelector("#auto_hint"),
        f = i.children[0];
      return u.innerHTML = "", c.innerHTML = "", f.style.display || (d.innerHTML = "", r || (d.innerHTML = " ※ 請勾選同意，即可付款。", l.focus(), t = !1, n = !1)), 0 == o.length ? (c.innerHTML = "請輸入檢查碼", s.focus(), t = !1, e = "number") : o.length < 3 && (c.innerHTML = "請檢查格式", s.focus(), t = !1, e = "format"), 0 == a.value.length ? (u.innerHTML = "請輸入卡號", s.focus(), t = !1, e = "number") : 0 == /\d{4} \d{4} \d{4} \d{4}/.test(a.value) && (u.innerHTML = "請檢查格式", t = !1, e = "format"), {
        checkResult: t,
        cardError: void 0,
        checkError: e,
        autoPayError: n
      }
    },
    slideDown: function (e, t) {
      var n = (t || 300) / 30,
        o = document.createElement("div"),
        r = e.parentNode;
      o.setAttribute("style", "height: 0px; overflow:hidden"), r.insertBefore(o, e), r.removeChild(e), o.appendChild(e), e.style.display = "inline-block";
      var i = e.offsetHeight,
        a = i / n,
        s = setInterval(function () {
          var t = o.offsetHeight;
          t + a < i ? o.style.height = t + a + "px" : (o.removeChild(e), r.insertBefore(e, o), r.removeChild(o), clearInterval(s))
        }, 30)
    },
    slideUp: function (e, t) {
      var n = (t || 300) / 30,
        o = e.offsetHeight,
        r = document.createElement("div"),
        i = e.parentNode;
      r.setAttribute("style", "height: " + o + "px; overflow:hidden"), i.insertBefore(r, e), i.removeChild(e), r.appendChild(e);
      var a = o / n,
        s = setInterval(function () {
          var t = r.offsetHeight;
          t - a > 0 ? r.style.height = t - a + "px" : (e.style.display = "none", r.removeChild(e), i.insertBefore(e, r), i.removeChild(r), clearInterval(s))
        }, 30)
    }
  }, t.default = o
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(7));

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  window.litv = window.litv || {};
  var a = function e() {
      i(this, e), this.station = "*null", this.publisher = "*null", this.program = "*null", this.episodeTitle = "*null", this.season = "*null", this.episode = "*null", this.genre = "*null", this.tmsId = "*null", this.adFlag = "*null", this.completeEpisode = "*null", this.digitalAirDate = "*null", this.tvAirDate = "*null", this.assetId = "*null", this.clipLength = 0, this.c3 = "*null", this.c4 = "*null", this.c5 = "03", this.c6 = "*null"
    },
    s = function () {
      function e() {
        i(this, e), this.streamingTag = null
      }
      return o(e, [{
        key: "init",
        value: function () {
          litv.debug && (console.group("vmx.init()"), console.log("method =>", "init"), console.log("action =>", "new ns_.StreamingTag(arg0)"), console.log("arg0 =>", {
            customerC2: "18986219"
          }), console.groupEnd()), this.streamingTag = new ns_.StreamingTag({
            customerC2: "18986219"
          })
        }
      }, {
        key: "onPrerollAd",
        value: function (e) {
          litv.debug && (console.group("vmx.onPrerollAd()"), console.log("method =>", "onPrerollAd"), console.log("action =>", "streamingTag.playVideoAdvertisement(arg0, arg1)"), console.log("arg0 =>", {
            ns_st_cl: e
          }), console.log("arg1 =>", ns_.StreamingTag.AdType.LinearOnDemandPreRoll), console.groupEnd()), e *= 1e3, this.streamingTag.playVideoAdvertisement({
            ns_st_cl: e
          }, ns_.StreamingTag.AdType.LinearOnDemandPreRoll)
        }
      }, {
        key: "onMidrollAd",
        value: function (e) {
          litv.debug && (console.group("vmx.onMidrollAd()"), console.log("method =>", "onMidrollAd"), console.log("action =>", "streamingTag.playVideoAdvertisement(arg0, arg1)"), console.log("arg0 =>", {
            ns_st_cl: e
          }), console.log("arg1 =>", ns_.StreamingTag.AdType.LinearOnDemandMidRoll), console.groupEnd()), e *= 1e3, this.streamingTag.playVideoAdvertisement({
            ns_st_cl: e
          }, ns_.StreamingTag.AdType.LinearOnDemandMidRoll)
        }
      }, {
        key: "onPostrollAd",
        value: function (e) {
          litv.debug && (console.group("vmx.onPostrollAd()"), console.log("method =>", "onPostrollAd"), console.log("action =>", "streamingTag.playVideoAdvertisement(arg0, arg1)"), console.log("arg0 =>", {
            ns_st_cl: e
          }), console.log("arg1 =>", ns_.StreamingTag.AdType.LinearOnDemandPostRoll), console.groupEnd()), e *= 1e3, this.streamingTag.playVideoAdvertisement({
            ns_st_cl: e
          }, ns_.StreamingTag.AdType.LinearOnDemandPostRoll)
        }
      }, {
        key: "onLiveAd",
        value: function (e) {
          litv.debug && (console.group("vmx.onLiveAd()"), console.log("method =>", "onLiveAd"), console.log("action =>", "streamingTag.playVideoAdvertisement(arg0, arg1)"), console.log("arg0 =>", {
            ns_st_cl: e
          }), console.log("arg1 =>", ns_.StreamingTag.AdType.LinearLive), console.groupEnd()), e *= 1e3, this.streamingTag.playVideoAdvertisement({
            ns_st_cl: e
          }, ns_.StreamingTag.AdType.LinearLive)
        }
      }, {
        key: "onOtherAd",
        value: function (e) {
          e *= 1e3, this.streamingTag.playVideoAdvertisement({
            ns_st_cl: e
          }, ns_.StreamingTag.AdType.Other)
        }
      }, {
        key: "onLive",
        value: function (e) {
          var t = {
            ns_st_st: e.station,
            ns_st_pu: e.publisher,
            ns_st_pr: e.program,
            ns_st_ep: e.episodeTitle,
            ns_st_sn: e.season,
            ns_st_en: e.episode,
            ns_st_ge: e.genre,
            ns_st_ti: e.tmsId,
            ns_st_ddt: e.digitalAirDate,
            ns_st_tdt: e.tvAirDate,
            ns_st_ci: e.assetId,
            ns_st_cl: e.clipLength,
            ns_st_ia: e.adFlag,
            ns_st_ce: e.completeEpisode,
            c3: e.c3,
            c4: e.c4,
            c6: e.c6
          };
          litv.debug && (console.group("vmx.onLive()"), console.log("method =>", "onLive"), console.log("action =>", "streamingTag.playVideoContentPart(arg0, arg1)"), console.log("arg0 =>", t), console.log("arg1 =>", ns_.StreamingTag.ContentType.Live), console.groupEnd()), this.streamingTag.playVideoContentPart(t, ns_.StreamingTag.ContentType.Live)
        }
      }, {
        key: "onVOD",
        value: function (e) {
          var t = {
            ns_st_st: e.station,
            ns_st_pu: e.publisher,
            ns_st_pr: e.program,
            ns_st_ep: e.episodeTitle,
            ns_st_sn: e.season,
            ns_st_en: e.episode,
            ns_st_ge: e.genre,
            ns_st_ti: e.tmsId,
            ns_st_ddt: e.digitalAirDate,
            ns_st_tdt: e.tvAirDate,
            ns_st_ci: e.assetId,
            ns_st_cl: e.clipLength,
            ns_st_ia: e.adFlag,
            ns_st_ce: e.completeEpisode,
            c3: e.c3,
            c4: e.c4,
            c6: e.c6
          };
          litv.debug && (console.group("vmx.onVOD()"), console.log("method =>", "onVOD"), console.log("action =>", "streamingTag.playVideoContentPart(arg0, arg1)"), console.log("arg0 =>", t), console.log("arg1 =>", ns_.StreamingTag.ContentType.LongFormOnDemand), console.groupEnd()), this.streamingTag.playVideoContentPart(t, ns_.StreamingTag.ContentType.LongFormOnDemand)
        }
      }, {
        key: "onBumper",
        value: function (e) {
          var t = {
            ns_st_st: e.station,
            ns_st_pu: e.publisher,
            ns_st_pr: e.program,
            ns_st_ep: e.episodeTitle,
            ns_st_sn: e.season,
            ns_st_en: e.episode,
            ns_st_ge: e.genre,
            ns_st_ti: e.tmsId,
            ns_st_ddt: e.digitalAirDate,
            ns_st_tdt: e.tvAirDate,
            ns_st_ci: e.assetId,
            ns_st_cl: e.clipLength,
            ns_st_ia: e.adFlag,
            ns_st_ce: e.completeEpisode,
            c3: e.c3,
            c4: e.c4,
            c6: e.c6
          };
          this.streamingTag.playVideoContentPart(t, ns_.StreamingTag.ContentType.Bumper)
        }
      }, {
        key: "onOther",
        value: function (e) {
          var t = {
            ns_st_st: e.station,
            ns_st_pu: e.publisher,
            ns_st_pr: e.program,
            ns_st_ep: e.episodeTitle,
            ns_st_sn: e.season,
            ns_st_en: e.episode,
            ns_st_ge: e.genre,
            ns_st_ti: e.tmsId,
            ns_st_ddt: e.digitalAirDate,
            ns_st_tdt: e.tvAirDate,
            ns_st_ci: e.assetId,
            ns_st_cl: e.clipLength,
            ns_st_ia: e.adFlag,
            ns_st_ce: e.completeEpisode,
            c3: e.c3,
            c4: e.c4,
            c6: e.c6
          };
          this.streamingTag.playVideoContentPart(t, ns_.StreamingTag.ContentType.Other)
        }
      }, {
        key: "onStop",
        value: function () {
          litv.debug && (console.group("vmx.onStop()"), console.log("method =>", "onStop"), console.log("action =>", "streamingTag.stop()"), console.groupEnd()), this.streamingTag.stop()
        }
      }, {
        key: "onVmxContentLive",
        value: function (e) {
          var t = e.program,
            n = new a;
          "channel" == t.contentType ? (t.title && (n.station = t.title), Array.isArray(t.provider) && t.provider[0] && t.provider[0].name && (n.publisher = t.provider[0].name), Array.isArray(t.Schedule) && t.Schedule[0] && t.Schedule[0].program && (t.Schedule[0].program.Title && (n.program = t.Schedule[0].program.Title), t.Schedule[0].program.SubTitle && (n.episodeTitle = t.Schedule[0].program.SubTitle)), Array.isArray(t.Categories) && t.Categories[0] && t.Categories[0].Name && (n.genre = t.Categories[0].Name), n.assetId = t.contentId, n.completeEpisode = "1", n.c3 = t.contentType) : "vod-channel" != t.contentType && "playout-channel" != t.contentType || (n.station = "LiTV", Array.isArray(t.provider) && t.provider[0] && (n.publisher = t.provider[0].name), n.program = t.focusProgram.title, n.episodeTitle = t.focusProgram.subtitle, n.genre = t.genres[0].name, n.assetId = t.focusProgram.content_id, n.completeEpisode = "1", n.c3 = t.contentType), this.onLive(n)
        }
      }, {
        key: "onVmxContentVod",
        value: function (e) {
          var t = e.program,
            n = new a;
          if (0 == r.default.isOnlyAssetId(t)) {
            var o = 60 * t.length * 1e3;
            o && !isNaN(o) || (o = 3e4), n.station = "LiTV", t.provider && t.provider.name && (n.publisher = t.provider.name), n.program = t.title, t.secondaryMark && (n.episodeTitle = t.secondaryMark), t.season && (n.season = t.season), n.episode = t.episode, t.category[0] && (n.genre = t.category[0].name), n.assetId = t.contentId, n.clipLength = o, "F" == t.videoType && (n.completeEpisode = "1"), n.c3 = t.contentType
          } else n.station = "LiTV", n.publisher = "LiTV", n.program = null, n.episodeTitle = null, n.season = null, n.episode = null, n.genre = null, n.tmsId = null, n.assetId = t.assetId, n.clipLength = 0, n.c3 = null;
          this.onVOD(n)
        }
      }]), e
    }();
  t.default = s
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = null,
    i = new(function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return o(e, [{
        key: "start",
        value: function () {
          this.stop(), (r = {}).tag = new Array, r.target = new Array;
          for (var e = $("a"), t = 0; t < e.length; t++) {
            var n = e.eq(t);
            if (!n.hasClass("prevent_control_by_player") && n.parents(".flowplayer_section").length <= 0) {
              var o = n.attr("target");
              r.tag.push(n), r.target.push(o), n.attr("target", "_blank")
            }
          }
        }
      }, {
        key: "stop",
        value: function () {
          if (clearTimeout(null), r) {
            for (var e = r.tag, t = r.target, n = 0; n < e.length; n++) {
              var o = e[n];
              t[n] ? o.attr("target", t[n]) : o.removeAttr("target")
            }
            r = null
          }
        }
      }]), e
    }());
  t.default = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(1));
  ! function () {
    try {
      return void new Uint8Array(1)
    } catch (e) {
      console.error(e)
    }

    function e(e, t) {
      return this.slice(e, t)
    }

    function t(e, t) {
      arguments.length < 2 && (t = 0);
      for (var n = 0, o = e.length; n < o; ++n, ++t) this[t] = 255 & e[n]
    }

    function n(n) {
      var r;
      if ("number" == typeof n) {
        r = new Array(n);
        for (var i = 0; i < n; ++i) r[i] = 0
      } else r = n.slice(0);
      return r.subarray = e, r.buffer = r, r.byteLength = r.length, r.set = t, "object" === (void 0 === n ? "undefined" : o(n)) && n.buffer && (r.buffer = n.buffer), r
    }
    window.Uint8Array = n, window.Uint32Array = n, window.Int32Array = n
  }();
  var i = function () {
    function e() {
      return EpgApiConfig.apiUrls[Math.random() * EpgApiConfig.apiUrls.length >> 0]
    }

    function t(e) {
      return EpgApiConfig.apiPath[e]
    }

    function n(e, t, n) {
      null != e || (e = new Date), null != t || (t = 3), null != n || (n = 0);
      var o = function (e, t, n) {
        var o = e.getTime();
        return new Date(o += 60 * t * 60 * 24 * 1e3 + 60 * n * 60 * 1e3)
      }(e = function (e) {
        return e.setMinutes(30 * (e.getMinutes() / 30 >> 0)), e.setSeconds(0), e.setMilliseconds(0), e
      }(e), t, n);
      return {
        startDate: e.toISOString(),
        endDate: o.toISOString()
      }
    }

    function o(e, t, n, o) {
      void 0 === o && (o = {
        url: e,
        success: t,
        error: n
      }), r.default.getZlib(e, function (e, n) {
        t.apply(null, [n, o])
      }, function (e) {
        "function" == typeof n && n.apply(null, [response, o])
      })
    }
    return {
      getDataByUrl: o,
      getChannelList: function (n, r) {
        return "function" != typeof n ? null : o(e() + t("channelList"), n, r, {
          success: n,
          error: r
        })
      },
      getScheduleAll: function (r, i, a, s, l) {
        if ("function" != typeof s) return null;
        var u = n(r, i, a);
        return o(e() + t("scheduleAll") + "/" + u.startDate + "/" + u.endDate, s, l, {
          startDate: r,
          days: i,
          hours: a,
          success: s,
          error: l
        })
      },
      getScheduleAllWithPrograms: function (r, i, a, s, l) {
        if ("function" != typeof s) return null;
        var u = n(r, i, a);
        return o(e() + t("scheduleAllWithPrograms") + "/" + u.startDate + "/" + u.endDate, s, l, {
          startDate: r,
          days: i,
          hours: a,
          success: s,
          error: l
        })
      },
      getProgram: function (n, r, i) {
        return "function" != typeof r ? null : o(e() + t("program") + "/" + n, r, i, {
          programId: n,
          success: r,
          error: i
        })
      },
      getScheduleAllWithMediumPrograms: function (r, i, a, s, l) {
        if ("function" != typeof s) return null;
        var u = n(r, i, a);
        o(e() + t("scheduleAllWithMediumPrograms") + "/" + u.startDate + "/" + u.endDate, s, l, {
          startDate: r,
          days: i,
          hours: a,
          success: s,
          error: l
        })
      },
      getStationCategories: function (n, o) {
        var i = e() + t("stationCategories");
        r.default.getZlib(i, n, o)
      }
    }
  }();
  t.default = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = a(n(7)),
    i = a(n(2));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.callPlayer = t
      }
      return o(e, [{
        key: "get",
        value: function (e) {
          return u(e)
        }
      }, {
        key: "refresh",
        value: function (e) {
          if (1 == r.default.isPlayerExist(this.callPlayer)) {
            var t = this.callPlayer.program;
            if (t.contentId == e.contentId && u(i.default.deepClone(e)).focusIndex != t.focusIndex) {
              var n = e.station.programs;
              return e.focusIndex = t.focusIndex, e.nextIndex = t.nextIndex, e.focusProgram = n[t.focusIndex], e.bookmark = 0, e.midrollBeforeStart = !1, e.midrollBeforeStartDuration = 0, e
            }
          }
          return u(e)
        }
      }, {
        key: "next",
        value: function (e) {
          var t = e.nextIndex;
          t <= 0 && (e = l(t, e));
          var n = e.station.programs,
            o = n[t],
            r = t + 1;
          return r >= n.length && (r = 0), e.focusIndex = t, e.nextIndex = r, e.focusProgram = o, e.bookmark = 0, e.midrollBeforeStart = !1, e.midrollBeforeStartDuration = 0, e
        }
      }, {
        key: "focus",
        value: function (e, t) {
          var n = (t = l(e, t)).station.programs,
            o = n[e],
            r = e + 1;
          return r >= n.length && (r = 0), t.focusIndex = e, t.nextIndex = r, t.focusProgram = o, t.bookmark = 0, t.midrollBeforeStart = !1, t.midrollBeforeStartDuration = 0, t
        }
      }]), e
    }(),
    l = function (e, t) {
      for (var n = (t = c(t)).station.programs, o = n[e], r = (new Date).getTime() - o.p_start, i = 0; i < n.length; i++) {
        var a = n[i];
        a.p_end = a.p_end + r
      }
      return t
    },
    u = function (e) {
      var t = (e = c(e)).station.programs,
        n = (new Date).getTime();
      e.focusIndex = 0, e.nextIndex = 0, e.focusProgram = null, e.bookmark = 0, e.midrollBeforeStart = !1, e.midrollBeforeStartDuration = 0;
      for (var o = 0; o < t.length; o++) {
        var r = t[o];
        if (n >= r.p_start && n < r.p_end) {
          e.focusIndex = o;
          break
        }
      }
      e.nextIndex = e.focusIndex + 1, e.nextIndex >= t.length && (e.nextIndex = 0), e.focusProgram = t[e.focusIndex], e.bookmark = n - e.focusProgram.p_start;
      for (var i = 0; i < e.focusProgram.time_codes.length; i++) {
        var a = e.focusProgram.time_codes[i],
          s = e.focusProgram.timecode_duration[i];
        a + s <= e.bookmark && (e.bookmark = e.bookmark - s)
      }
      for (var l = 0; l < e.focusProgram.time_codes.length; l++) {
        var u = e.focusProgram.time_codes[l],
          d = u + e.focusProgram.timecode_duration[l];
        if (e.bookmark >= u && e.bookmark < d) {
          e.midrollBeforeStart = !0, e.midrollBeforeStartDuration = d - e.bookmark;
          break
        }
      }
      return e
    },
    c = function (e) {
      for (var t = e.station.programs, n = 0; n < t.length; n++) {
        var o = t[n];
        if (n < t.length - 1) o.p_end = t[n + 1].p_start;
        else {
          for (var r = o.timecode_duration, i = 0, a = 0; a < r.length; a++) i += r[a];
          o.p_end = o.p_start + o.length + i
        }
      }
      return e
    };
  t.default = s
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = a(n(7)),
    i = a(n(2));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.callPlayer = t
      }
      return o(e, [{
        key: "get",
        value: function (e) {
          return l(e)
        }
      }, {
        key: "refresh",
        value: function (e) {
          if (1 == r.default.isPlayerExist(this.callPlayer)) {
            var t = this.callPlayer.program;
            if (t.contentId == e.contentId && l(i.default.deepClone(e)).focusIndex != t.focusIndex) {
              var n = e.station.programs;
              return e.focusIndex = t.focusIndex, e.nextIndex = t.nextIndex, e.focusProgram = n[e.focusIndex], e.bookmark = 0, e
            }
          }
          return l(e)
        }
      }, {
        key: "next",
        value: function (e) {
          var t = e.station.programs,
            n = e.nextIndex,
            o = t[n],
            r = n + 1;
          return r >= t.length && (r = 0), e.focusIndex = n, e.nextIndex = r, e.focusProgram = o, e.bookmark = 0, e
        }
      }, {
        key: "focus",
        value: function (e, t) {
          var n = t.station.programs,
            o = n[e],
            r = e + 1;
          return r >= n.length && (r = 0), t.focusIndex = e, t.nextIndex = r, t.focusProgram = o, t.bookmark = 0, t
        }
      }]), e
    }(),
    l = function (e) {
      var t = e.station,
        n = t.programs,
        o = t.total_length;
      if (!o) {
        o = 0;
        for (var r = 0; r < n.length; r++) o += n[r].length;
        t.total_length = o
      }
      var i = t.start_time,
        a = ((new Date).getTime() - i) % o,
        s = 0,
        l = 0;
      o = 0;
      for (var u = 0; u < n.length; u++) {
        var c = n[u].length;
        if ((o += c) > a) {
          s = u, l = c - (o - a);
          break
        }
      }
      var d = s + 1;
      return d >= n.length && (d = 0), e.focusIndex = s, e.nextIndex = d, e.bookmark = l, e.focusProgram = n[s], e
    };
  t.default = s
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = a(n(4)),
    i = a(n(0));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = function (e) {
      function t() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var e = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.PARENTAL_CONTROL_CONFIRM_EVENT = "parentalControlDialog.parentalControlConfirmEvent", e.PARENTAL_CONTROL_CANCEL_EVENT = "parentalControlDialog.parentalControlCancelEvent", e
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, r.default), o(t, [{
        key: "show",
        value: function (e) {
          (e = e || {}).dialogTitle = "", e.dialogHtml = u(), e.dialogCloseBtn = !1,
            function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("parental_control");
          var n = $(".alert_box .parental_control_view");
          l(n)
        }
      }]), t
    }(),
    l = function (e) {
      e.find(".confirm_btn").click(function (e) {
        i.default.emit(c.PARENTAL_CONTROL_CONFIRM_EVENT), c.dismiss()
      }), e.find(".cancel_btn").click(function (e) {
        i.default.emit(c.PARENTAL_CONTROL_CANCEL_EVENT), c.dismiss()
      })
    },
    u = function () {
      var e = new Array;
      return e.push("<div class='parental_control_view'>"), e.push("\t<div class='top_section'>"), e.push("\t\t<div class='restricted_logo'></div>"), e.push("\t\t<div class='desc_section'>"), e.push("\t\t\t<div class='desc_title'>若您未滿 18 歲請勿觀賞！</div>"), e.push("\t\t\t<div class='desc_text'>本類商品為限制級商品，限 18 歲以上使用者可瀏覽及購買。LiTV 線上影視網站內容依據台灣網路內容分級辦法處理，年滿 18 歲以上或連當地國家法定年齡人士；且願接受本站內容及各項條款方可觀賞</div>"), e.push("\t\t</div>"), e.push("\t</div>"), e.push("\t<div class='bottom_section'>"), e.push("\t\t<div class='left'>"), e.push("\t\t\t<button class='cancel_btn'>我未滿十八歲</button>"), e.push("\t\t</div>"), e.push("\t\t<div class='right'>"), e.push("\t\t\t<button class='confirm_btn'>我已滿十八歲</button>"), e.push("\t\t</div>"), e.push("\t</div>"), e.push("</div>"), e.join("")
    },
    c = new s;
  t.default = c
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = s(n(4)),
    i = s(n(3)),
    a = s(n(5));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function (e) {
      function t() {
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, r.default), o(t, [{
        key: "show",
        value: function (e) {
          if (c()) {
            (e = e || {}).dialogTitle = "<div class='browser_not_support_dialog_title'>建議更換瀏覽器</div>", "pc" == a.default.deviceType ? e.dialogHtml = d("pc") : e.dialogHtml = d("mobile"),
              function e(t, n, o) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === r) {
                  var i = Object.getPrototypeOf(t);
                  return null === i ? void 0 : e(i, n, o)
                }
                if ("value" in r) return r.value;
                var a = r.get;
                return void 0 !== a ? a.call(o) : void 0
              }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("browser_not_support");
            var n = $(".alert_box .browser_not_support_view");
            u(n)
          }
        }
      }]), t
    }(),
    u = function (e) {
      e.find(".chk_box").click(function (e) {
        var t = i.default.findElementByClass(e, "chk_box");
        if (t.hasClass("selected")) localStorage.removeItem("litv_browser_not_support"), t.removeClass("selected");
        else {
          var n = (new Date).getTime();
          localStorage.setItem("litv_browser_not_support", n), t.addClass("selected")
        }
      })
    },
    c = function () {
      var e = !0,
        t = (new Date).getTime(),
        n = localStorage.getItem("litv_browser_not_support");
      return n ? ((t = parseInt(t)) - (n = parseInt(n)) < 6048e5 && (e = !1), e) : e
    },
    d = function (e) {
      var t = new Array;
      return t.push("<div class='browser_not_support_view'>"), t.push("<div class='desc'>為了給您更優質的觀影體驗，請參考下列建議：</div>"), "pc" == e ? (t.push("<div class='desc'>1. Windows XP 用戶，請改用 Firefox 42 以上版本</div>"), t.push("<a class='link' target='_blank' href='https://moztw.org/firefox/'>下載Firefox最新版本 >></a>"), t.push("<a class='link' target='_blank' href='https://www.google.com.tw/chrome/browser/desktop/index.html'>下載Chrome最新版本>></a>")) : t.push("<a class='link' target='_blank' href='https://www.google.com.tw/chrome/browser/desktop/index.html'>下載Chrome最新版本>></a>"), t.push("<div class='chk_section'>"), t.push("<div class='chk_box'></div>"), t.push("<div class='chk_text'>7日內不再提醒</div>"), t.push("</div>"), t.push("</div>"), t.join("")
    },
    f = new l;
  t.default = f
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = s(n(4)),
    i = s(n(1)),
    a = s(n(0));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function (e) {
      function t() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var e = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.CHANNEL_TRIAL_SUCCESS_EVENT = "channelTrialDialog.channelTrialSuccessEvent", e.CHANNEL_TRIAL_FAIL_EVENT = "channelTrialDialog.channelTrialFialEvent", e
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, r.default), o(t, [{
        key: "show",
        value: function (e) {
          (e = e || {}).dialogTitle = "<div class='channel_trial_dialog_title'>開始體驗</div>", e.dialogHtml = u(),
            function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("channel_trial");
          var n = $(".alert_box .channel_trial_view");
          c(n)
        }
      }]), t
    }(),
    u = function () {
      var e = new Array;
      return e.push("<div class='channel_trial_view'>"), e.push("\t<div class='terms_chkbox_hint'>請閱讀體驗條款並勾選同意框！！</div>"), e.push("\t<div class='channel_trial_middle'>"), e.push("\t\t<input class='terms_chkbox' type='checkbox' />"), e.push("\t\t<div class='terms_description'>我已閱讀並同意「</div>"), e.push("\t\t<a class='terms_link' href='/channel/experienceTerms.do' target='_blank'>體驗條款</a>"), e.push("\t\t<div class='terms_description'>」</div>"), e.push("\t\t<div class='terms_description star'>*</div>"), e.push("\t</div>"), e.push("\t<div class='confirm_btn'>確認</div>"), e.push("</div>"), e.join("")
    },
    c = function (e) {
      e.find(".confirm_btn").click(function (t) {
        1 == e.find(".terms_chkbox").prop("checked") ? (e.find(".terms_chkbox_hint").removeClass("active"), d()) : e.find(".terms_chkbox_hint").addClass("active")
      }), e.find(".terms_description").click(function (t) {
        var n = e.find(".terms_chkbox");
        1 == n.prop("checked") ? n.prop("checked", !1) : n.prop("checked", !0)
      })
    },
    d = function () {
      i.default.get({
        url: "/channel/ajax/startTrial",
        selectMethod: "GET",
        request: {}
      }, function (e, t) {
        a.default.emit(f.CHANNEL_TRIAL_SUCCESS_EVENT, t), f.dismiss()
      }, function () {
        a.default.emit(f.CHANNEL_TRIAL_FAIL_EVENT)
      })
    },
    f = new l;
  t.default = f
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = s(n(7)),
    i = s(n(0)),
    a = s(n(151));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return o(e, [{
        key: "impression",
        value: function (e) {
          var t = e.program,
            n = e.video,
            o = "",
            i = "",
            a = "",
            s = "",
            l = "",
            u = "",
            f = "",
            p = "";
          n && (r.default.isOnlyAssetId(t) ? (o = "AD", a = t.assetId, l = "", u = "", f = "", p = d(t, n), c(o, a, l, u, f, p, "vod-impression")) : "channel" == t.contentType ? (i = t.no, a = t.title, s = t.contentId, p = d(t, n), ga("send", "event", i + "|" + a + "|" + s, p, "channel-impression")) : (o = t.contentType, a = t.title, l = t.season ? t.season : "", u = t.episode ? t.episode : "", f = t.videoType ? t.videoType : "", p = d(t, n), c(o, a, l, u, f, p, "vod-impression")))
        }
      }, {
        key: "complete",
        value: function (e) {
          var t = e.program,
            n = e.video,
            o = "",
            i = "",
            a = "",
            s = "",
            l = "",
            u = "";
          if (r.default.isOnlyAssetId(t)) o = "AD", i = t.assetId, a = "", s = "", l = "", u = d(t, n), c(o, i, a, s, l, u, "vod-completed");
          else {
            if ("channel" == t.contentType) return;
            o = t.contentType, i = t.title, a = t.season ? t.season : "", s = t.episode ? t.episode : "", l = t.videoType ? t.videoType : "", u = d(t, n), c(o, i, a, s, l, u, "vod-completed")
          }
        }
      }, {
        key: "percent",
        value: function (e) {
          var t = e.program,
            n = e.video,
            o = "",
            i = "",
            a = "",
            s = "",
            l = "",
            u = "",
            f = 0,
            p = "";
          r.default.isOnlyAssetId(t) || "channel" != t.contentType && (e.currentTime < 3e5 || (o = t.contentType, i = t.title, a = t.season ? t.season : "", s = t.episode ? t.episode : "", l = t.videoType ? t.videoType : "", u = d(t, n), f = e.currentTime, p = e.currentInfo, c(o, i, a, s, l, u, "vod-" + p.percentage + "%", f)))
        }
      }, {
        key: "comScore",
        value: function (e) {
          var t = e.program;
          i.default.off(a.default.COMSCORE_IMPORT_COMPLETE_EVENT, u), i.default.on(a.default.COMSCORE_IMPORT_COMPLETE_EVENT, u), a.default.start(t)
        }
      }]), e
    }(),
    u = function (e) {
      var t = e.contentType;
      COMSCORE.beacon({
        c1: 1,
        c2: "18986219",
        c3: t,
        c5: "03"
      })
    },
    c = function (e, t, n, o, r, i, a, s) {
      /^(vod-)(\d)+[%]$/.test(a) ? ga("send", "event", e + "|" + t + "|" + n + "|" + o + "|" + r, i, a, s) : ga("send", "event", e + "|" + t + "|" + n + "|" + o + "|" + r, i, a)
    },
    d = function (e, t) {
      return r.default.isOnlyAssetId(e) ? "Brand" : 1 == e.isAuthenticated ? 1 == t.playAds ? "登入" : "登入|付費" : "路人"
    },
    f = new l;
  t.default = f
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(0)),
    i = null,
    a = new(function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.COMSCORE_IMPORT_COMPLETE_EVENT = "comscore.comscoreImportCompleteEvent", this.COMSCORE_IMPORT_FAIL_EVENT = "comscore.comscoreImportFailEvent"
      }
      return o(e, [{
        key: "start",
        value: function (e) {
          var t = this;
          if ("undefined" == typeof COMSCORE) {
            window._comscore = window._comscore || [], _comscore.push({
                c1: "2",
                c2: "18986219",
                options: {
                  url_append: "comscorekw=" + e.contentType
                }
              }),
              function () {
                var e = document.createElement("script"),
                  t = document.getElementsByTagName("script")[0];
                e.async = !0, e.src = ("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js", t.parentNode.insertBefore(e, t)
              }();
            var n = 0;
            clearInterval(i), i = setInterval(function () {
              window.COMSCORE ? (clearInterval(i), r.default.emit(t.COMSCORE_IMPORT_COMPLETE_EVENT, e)) : n >= 10 && (clearInterval(i), r.default.emit(t.COMSCORE_IMPORT_FAIL_EVENT)), n++
            }, 100)
          } else r.default.emit(t.COMSCORE_IMPORT_COMPLETE_EVENT, e)
        }
      }]), e
    }());
  t.default = a
}, function (e, t, n) {
  "use strict";
  (function (e) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
    /*!
     * LiTVPlayer.js
     * version: 1.0.24
     * author: Elson Yeh (elson.yeh@tgc-taiwan.com.tw)
     * update: 11/22/2018, 6:35:37 PM
     */
    function r(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function i(e, t) {
      return e(t = {
        exports: {}
      }, t.exports), t.exports
    }
    var a = Math.ceil,
      s = Math.floor,
      l = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? s : a)(e)
      },
      u = function (e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
      },
      c = i(function (e) {
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
      }),
      d = i(function (e) {
        var t = e.exports = {
          version: "2.5.6"
        };
        "number" == typeof __e && (__e = t)
      }),
      f = (d.version, function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
      }),
      p = function (e, t, n) {
        if (f(e), void 0 === t) return e;
        switch (n) {
          case 1:
            return function (n) {
              return e.call(t, n)
            };
          case 2:
            return function (n, o) {
              return e.call(t, n, o)
            };
          case 3:
            return function (n, o, r) {
              return e.call(t, n, o, r)
            }
        }
        return function () {
          return e.apply(t, arguments)
        }
      },
      h = function (e) {
        return "object" === (void 0 === e ? "undefined" : n(e)) ? null !== e : "function" == typeof e
      },
      v = function (e) {
        if (!h(e)) throw TypeError(e + " is not an object!");
        return e
      },
      m = function (e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      },
      g = !m(function () {
        return 7 != Object.defineProperty({}, "a", {
          get: function () {
            return 7
          }
        }).a
      }),
      y = c.document,
      _ = h(y) && h(y.createElement),
      b = function (e) {
        return _ ? y.createElement(e) : {}
      },
      w = !g && !m(function () {
        return 7 != Object.defineProperty(b("div"), "a", {
          get: function () {
            return 7
          }
        }).a
      }),
      E = function (e, t) {
        if (!h(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !h(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !h(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !h(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
      },
      k = Object.defineProperty,
      C = {
        f: g ? Object.defineProperty : function (e, t, n) {
          if (v(e), t = E(t, !0), v(n), w) try {
            return k(e, t, n)
          } catch (e) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e
        }
      },
      T = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        }
      },
      S = g ? function (e, t, n) {
        return C.f(e, t, T(1, n))
      } : function (e, t, n) {
        return e[t] = n, e
      },
      A = {}.hasOwnProperty,
      I = function (e, t) {
        return A.call(e, t)
      },
      P = function e(t, n, o) {
        var r, i, a, s = t & e.F,
          l = t & e.G,
          u = t & e.S,
          f = t & e.P,
          h = t & e.B,
          v = t & e.W,
          m = l ? d : d[n] || (d[n] = {}),
          g = m.prototype,
          y = l ? c : u ? c[n] : (c[n] || {}).prototype;
        for (r in l && (o = n), o)(i = !s && y && void 0 !== y[r]) && I(m, r) || (a = i ? y[r] : o[r], m[r] = l && "function" != typeof y[r] ? o[r] : h && i ? p(a, c) : v && y[r] == a ? function (e) {
          var t = function (t, n, o) {
            if (this instanceof e) {
              switch (arguments.length) {
                case 0:
                  return new e;
                case 1:
                  return new e(t);
                case 2:
                  return new e(t, n)
              }
              return new e(t, n, o)
            }
            return e.apply(this, arguments)
          };
          return t.prototype = e.prototype, t
        }(a) : f && "function" == typeof a ? p(Function.call, a) : a, f && ((m.virtual || (m.virtual = {}))[r] = a, t & e.R && g && !g[r] && S(g, r, a)))
      };
    P.F = 1, P.G = 2, P.S = 4, P.P = 8, P.B = 16, P.W = 32, P.U = 64, P.R = 128;
    var O = P,
      x = S,
      M = {},
      L = {}.toString,
      R = function (e) {
        return L.call(e).slice(8, -1)
      },
      N = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == R(e) ? e.split("") : Object(e)
      },
      j = function (e) {
        return N(u(e))
      },
      D = Math.min,
      V = function (e) {
        return e > 0 ? D(l(e), 9007199254740991) : 0
      },
      q = Math.max,
      F = Math.min,
      U = i(function (e) {
        var t = c["__core-js_shared__"] || (c["__core-js_shared__"] = {});
        (e.exports = function (e, n) {
          return t[e] || (t[e] = void 0 !== n ? n : {})
        })("versions", []).push({
          version: d.version,
          mode: "pure",
          copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
      }),
      B = 0,
      $ = Math.random(),
      H = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++B + $).toString(36))
      },
      z = U("keys"),
      G = function (e) {
        return z[e] || (z[e] = H(e))
      },
      W = function (e, t, n) {
        var o = j(e),
          r = V(o.length),
          i = function (e, t) {
            return (e = l(e)) < 0 ? q(e + t, 0) : F(e, t)
          }(n, r);
        for (; r > i; i++)
          if (i in o && o[i] === t) return i || 0;
        return -1
      },
      K = G("IE_PROTO"),
      Y = function (e, t) {
        var n, o = j(e),
          r = 0,
          i = [];
        for (n in o) n != K && I(o, n) && i.push(n);
        for (; t.length > r;) I(o, n = t[r++]) && (~W(i, n) || i.push(n));
        return i
      },
      J = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
      Q = Object.keys || function (e) {
        return Y(e, J)
      },
      Z = g ? Object.defineProperties : function (e, t) {
        v(e);
        for (var n, o = Q(t), r = o.length, i = 0; r > i;) C.f(e, n = o[i++], t[n]);
        return e
      },
      X = c.document,
      ee = X && X.documentElement,
      te = G("IE_PROTO"),
      ne = function () {},
      oe = function () {
        var e, t = b("iframe"),
          n = J.length;
        for (t.style.display = "none", ee.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), oe = e.F; n--;) delete oe.prototype[J[n]];
        return oe()
      },
      re = Object.create || function (e, t) {
        var n;
        return null !== e ? (ne.prototype = v(e), n = new ne, ne.prototype = null, n[te] = e) : n = oe(), void 0 === t ? n : Z(n, t)
      },
      ie = i(function (e) {
        var t = U("wks"),
          n = c.Symbol,
          o = "function" == typeof n;
        (e.exports = function (e) {
          return t[e] || (t[e] = o && n[e] || (o ? n : H)("Symbol." + e))
        }).store = t
      }),
      ae = C.f,
      se = ie("toStringTag"),
      le = function (e, t, n) {
        e && !I(e = n ? e : e.prototype, se) && ae(e, se, {
          configurable: !0,
          value: t
        })
      },
      ue = {};
    S(ue, ie("iterator"), function () {
      return this
    });
    var ce = function (e) {
        return Object(u(e))
      },
      de = G("IE_PROTO"),
      fe = Object.prototype,
      pe = Object.getPrototypeOf || function (e) {
        return e = ce(e), I(e, de) ? e[de] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? fe : null
      },
      he = ie("iterator"),
      ve = !([].keys && "next" in [].keys()),
      me = function () {
        return this
      },
      ge = function (e, t, n, o, r, i, a) {
        ! function (e, t, n) {
          e.prototype = re(ue, {
            next: T(1, n)
          }), le(e, t + " Iterator")
        }(n, t, o);
        var s, l, u, c = function (e) {
            if (!ve && e in h) return h[e];
            switch (e) {
              case "keys":
              case "values":
                return function () {
                  return new n(this, e)
                }
            }
            return function () {
              return new n(this, e)
            }
          },
          d = t + " Iterator",
          f = "values" == r,
          p = !1,
          h = e.prototype,
          v = h[he] || h["@@iterator"] || r && h[r],
          m = v || c(r),
          g = r ? f ? c("entries") : m : void 0,
          y = "Array" == t && h.entries || v;
        if (y && (u = pe(y.call(new e))) !== Object.prototype && u.next && le(u, d, !0), f && v && "values" !== v.name && (p = !0, m = function () {
            return v.call(this)
          }), a && (ve || p || !h[he]) && S(h, he, m), M[t] = m, M[d] = me, r)
          if (s = {
              values: f ? m : c("values"),
              keys: i ? m : c("keys"),
              entries: g
            }, a)
            for (l in s) l in h || x(h, l, s[l]);
          else O(O.P + O.F * (ve || p), t, s);
        return s
      },
      ye = function (e, t) {
        var n, o, r = String(u(e)),
          i = l(t),
          a = r.length;
        return i < 0 || i >= a ? "" : (n = r.charCodeAt(i)) < 55296 || n > 56319 || i + 1 === a || (o = r.charCodeAt(i + 1)) < 56320 || o > 57343 ? r.charAt(i) : r.slice(i, i + 2)
      };
    ge(String, "String", function (e) {
      this._t = String(e), this._i = 0
    }, function () {
      var e, t = this._t,
        n = this._i;
      return n >= t.length ? {
        value: void 0,
        done: !0
      } : (e = ye(t, n), this._i += e.length, {
        value: e,
        done: !1
      })
    });
    var _e = function (e, t) {
      return {
        value: t,
        done: !!e
      }
    };
    ge(Array, "Array", function (e, t) {
      this._t = j(e), this._i = 0, this._k = t
    }, function () {
      var e = this._t,
        t = this._k,
        n = this._i++;
      return !e || n >= e.length ? (this._t = void 0, _e(1)) : _e(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), M.Arguments = M.Array;
    for (var be = ie("toStringTag"), we = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), Ee = 0; Ee < we.length; Ee++) {
      var ke = we[Ee],
        Ce = c[ke],
        Te = Ce && Ce.prototype;
      Te && !Te[be] && S(Te, be, ke), M[ke] = M.Array
    }
    var Se = function (e, t, n) {
        for (var o in t) n && e[o] ? e[o] = t[o] : S(e, o, t[o]);
        return e
      },
      Ae = function (e, t, n, o) {
        if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
        return e
      },
      Ie = function (e, t, n, o) {
        try {
          return o ? t(v(n)[0], n[1]) : t(n)
        } catch (t) {
          var r = e.return;
          throw void 0 !== r && v(r.call(e)), t
        }
      },
      Pe = ie("iterator"),
      Oe = Array.prototype,
      xe = function (e) {
        return void 0 !== e && (M.Array === e || Oe[Pe] === e)
      },
      Me = ie("toStringTag"),
      Le = "Arguments" == R(function () {
        return arguments
      }()),
      Re = function (e) {
        var t, n, o;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
          try {
            return e[t]
          } catch (e) {}
        }(t = Object(e), Me)) ? n : Le ? R(t) : "Object" == (o = R(t)) && "function" == typeof t.callee ? "Arguments" : o
      },
      Ne = ie("iterator"),
      je = d.getIteratorMethod = function (e) {
        if (null != e) return e[Ne] || e["@@iterator"] || M[Re(e)]
      },
      De = i(function (e) {
        var t = {},
          n = {},
          o = e.exports = function (e, o, r, i, a) {
            var s, l, u, c, d = a ? function () {
                return e
              } : je(e),
              f = p(r, i, o ? 2 : 1),
              h = 0;
            if ("function" != typeof d) throw TypeError(e + " is not iterable!");
            if (xe(d)) {
              for (s = V(e.length); s > h; h++)
                if ((c = o ? f(v(l = e[h])[0], l[1]) : f(e[h])) === t || c === n) return c
            } else
              for (u = d.call(e); !(l = u.next()).done;)
                if ((c = Ie(u, f, l.value, o)) === t || c === n) return c
          };
        o.BREAK = t, o.RETURN = n
      }),
      Ve = ie("species"),
      qe = function (e) {
        var t = "function" == typeof d[e] ? d[e] : c[e];
        g && t && !t[Ve] && C.f(t, Ve, {
          configurable: !0,
          get: function () {
            return this
          }
        })
      },
      Fe = i(function (e) {
        var t = H("meta"),
          o = C.f,
          r = 0,
          i = Object.isExtensible || function () {
            return !0
          },
          a = !m(function () {
            return i(Object.preventExtensions({}))
          }),
          s = function (e) {
            o(e, t, {
              value: {
                i: "O" + ++r,
                w: {}
              }
            })
          },
          l = e.exports = {
            KEY: t,
            NEED: !1,
            fastKey: function (e, o) {
              if (!h(e)) return "symbol" == (void 0 === e ? "undefined" : n(e)) ? e : ("string" == typeof e ? "S" : "P") + e;
              if (!I(e, t)) {
                if (!i(e)) return "F";
                if (!o) return "E";
                s(e)
              }
              return e[t].i
            },
            getWeak: function (e, n) {
              if (!I(e, t)) {
                if (!i(e)) return !0;
                if (!n) return !1;
                s(e)
              }
              return e[t].w
            },
            onFreeze: function (e) {
              return a && l.NEED && i(e) && !I(e, t) && s(e), e
            }
          }
      }),
      Ue = (Fe.KEY, Fe.NEED, Fe.fastKey, Fe.getWeak, Fe.onFreeze, function (e, t) {
        if (!h(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
      }),
      Be = C.f,
      $e = Fe.fastKey,
      He = g ? "_s" : "size",
      ze = function (e, t) {
        var n, o = $e(t);
        if ("F" !== o) return e._i[o];
        for (n = e._f; n; n = n.n)
          if (n.k == t) return n
      },
      Ge = {
        getConstructor: function (e, t, n, o) {
          var r = e(function (e, i) {
            Ae(e, r, t, "_i"), e._t = t, e._i = re(null), e._f = void 0, e._l = void 0, e[He] = 0, null != i && De(i, n, e[o], e)
          });
          return Se(r.prototype, {
            clear: function () {
              for (var e = Ue(this, t), n = e._i, o = e._f; o; o = o.n) o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
              e._f = e._l = void 0, e[He] = 0
            },
            delete: function (e) {
              var n = Ue(this, t),
                o = ze(n, e);
              if (o) {
                var r = o.n,
                  i = o.p;
                delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[He]--
              }
              return !!o
            },
            forEach: function (e) {
              Ue(this, t);
              for (var n, o = p(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                for (o(n.v, n.k, this); n && n.r;) n = n.p
            },
            has: function (e) {
              return !!ze(Ue(this, t), e)
            }
          }), g && Be(r.prototype, "size", {
            get: function () {
              return Ue(this, t)[He]
            }
          }), r
        },
        def: function (e, t, n) {
          var o, r, i = ze(e, t);
          return i ? i.v = n : (e._l = i = {
            i: r = $e(t, !0),
            k: t,
            v: n,
            p: o = e._l,
            n: void 0,
            r: !1
          }, e._f || (e._f = i), o && (o.n = i), e[He]++, "F" !== r && (e._i[r] = i)), e
        },
        getEntry: ze,
        setStrong: function (e, t, n) {
          ge(e, t, function (e, n) {
            this._t = Ue(e, t), this._k = n, this._l = void 0
          }, function () {
            for (var e = this._k, t = this._l; t && t.r;) t = t.p;
            return this._t && (this._l = t = t ? t.n : this._t._f) ? _e(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, _e(1))
          }, n ? "entries" : "values", !n, !0), qe(t)
        }
      },
      We = Array.isArray || function (e) {
        return "Array" == R(e)
      },
      Ke = (ie("species"), C.f),
      Ye = function (e, t, n) {
        for (var o = ce(e), r = N(o), i = p(t, n, 3), a = V(r.length), s = 0, l = void 0; a > s; s++) s in r && i(r[s], s, o);
        return l
      };
    ! function (e, t, n, o, r, i) {
      var a = c[e],
        s = a,
        l = s && s.prototype,
        u = {};
      g && "function" == typeof s && l.forEach && !m(function () {
        (new s).entries().next()
      }) ? (s = t(function (t, n) {
        Ae(t, s, e, "_c"), t._c = new a, null != n && De(n, !0, t.set, t)
      }), Ye("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (e) {
        var t = "add" == e || "set" == e;
        e in l && S(s.prototype, e, function (n, o) {
          Ae(this, s, e);
          var r = this._c[e](0 === n ? 0 : n, o);
          return t ? this : r
        })
      }), Ke(s.prototype, "size", {
        get: function () {
          return this._c.size
        }
      })) : (s = o.getConstructor(t, e, !0, "set"), Se(s.prototype, n), Fe.NEED = !0), le(s, e), u[e] = s, O(O.G + O.W + O.F, u), o.setStrong(s, e, !0)
    }("Map", function (e) {
      return function () {
        return e(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      get: function (e) {
        var t = Ge.getEntry(Ue(this, "Map"), e);
        return t && t.v
      },
      set: function (e, t) {
        return Ge.def(Ue(this, "Map"), 0 === e ? 0 : e, t)
      }
    }, Ge), O(O.P + O.R, "Map", {
      toJSON: function () {
        if ("Map" != Re(this)) throw TypeError("Map#toJSON isn't generic");
        return function (e, t) {
          var n = [];
          return De(e, !1, n.push, n, void 0), n
        }(this)
      }
    }), O(O.S, "Map", { of: function () {
        for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
        return new this(t)
      }
    }), O(O.S, "Map", {
      from: function (e) {
        var t, n, o, r, i = arguments[1];
        return f(this), (t = void 0 !== i) && f(i), null == e ? new this : (n = [], t ? (o = 0, r = p(i, arguments[2], 2), De(e, !1, function (e) {
          n.push(r(e, o++))
        })) : De(e, !1, n.push, n), new this(n))
      }
    });
    var Je = d.Map,
      Qe = r(i(function (e) {
        e.exports = {
          default: Je,
          __esModule: !0
        }
      })),
      Ze = r(i(function (e, t) {
        t.__esModule = !0, t.default = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
      }));
    O(O.S + O.F * !g, "Object", {
      defineProperty: C.f
    });
    var Xe = d.Object,
      et = function (e, t, n) {
        return Xe.defineProperty(e, t, n)
      },
      tt = i(function (e) {
        e.exports = {
          default: et,
          __esModule: !0
        }
      }),
      nt = r(tt),
      ot = r(i(function (e, t) {
        t.__esModule = !0;
        var n = function (e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(tt);
        t.default = function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, n.default)(e, r.key, r)
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        }()
      })),
      rt = function (e, t, n) {
        t in e ? C.f(e, t, T(0, n)) : e[t] = n
      },
      it = ie("iterator"),
      at = !1;
    try {
      [7][it]().return = function () {
        at = !0
      }
    } catch (e) {}
    var st = function (e, t) {
      if (!t && !at) return !1;
      var n = !1;
      try {
        var o = [7],
          r = o[it]();
        r.next = function () {
          return {
            done: n = !0
          }
        }, o[it] = function () {
          return r
        }, e(o)
      } catch (e) {}
      return n
    };
    O(O.S + O.F * !st(function (e) {}), "Array", {
      from: function (e) {
        var t, n, o, r, i = ce(e),
          a = "function" == typeof this ? this : Array,
          s = arguments.length,
          l = s > 1 ? arguments[1] : void 0,
          u = void 0 !== l,
          c = 0,
          d = je(i);
        if (u && (l = p(l, s > 2 ? arguments[2] : void 0, 2)), null == d || a == Array && xe(d))
          for (n = new a(t = V(i.length)); t > c; c++) rt(n, c, u ? l(i[c], c) : i[c]);
        else
          for (r = d.call(i), n = new a; !(o = r.next()).done; c++) rt(n, c, u ? Ie(r, l, [o.value, c], !0) : o.value);
        return n.length = c, n
      }
    });
    var lt, ut, ct, dt = d.Array.from,
      ft = i(function (e) {
        e.exports = {
          default: dt,
          __esModule: !0
        }
      }),
      pt = r(ft),
      ht = r(i(function (e, t) {
        t.__esModule = !0;
        var n = function (e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(ft);
        t.default = function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
            return o
          }
          return (0, n.default)(e)
        }
      })),
      vt = ie("species"),
      mt = function (e, t) {
        var n, o = v(e).constructor;
        return void 0 === o || null == (n = v(o)[vt]) ? t : f(n)
      },
      gt = c.process,
      yt = c.setImmediate,
      _t = c.clearImmediate,
      bt = c.MessageChannel,
      wt = c.Dispatch,
      Et = 0,
      kt = {},
      Ct = function () {
        var e = +this;
        if (kt.hasOwnProperty(e)) {
          var t = kt[e];
          delete kt[e], t()
        }
      },
      Tt = function (e) {
        Ct.call(e.data)
      };
    yt && _t || (yt = function (e) {
      for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
      return kt[++Et] = function () {
        ! function (e, t, n) {
          switch (t.length) {
            case 0:
              return e();
            case 1:
              return e(t[0]);
            case 2:
              return e(t[0], t[1]);
            case 3:
              return e(t[0], t[1], t[2]);
            case 4:
              return e(t[0], t[1], t[2], t[3])
          }
          e.apply(n, t)
        }("function" == typeof e ? e : Function(e), t)
      }, lt(Et), Et
    }, _t = function (e) {
      delete kt[e]
    }, "process" == R(gt) ? lt = function (e) {
      gt.nextTick(p(Ct, e, 1))
    } : wt && wt.now ? lt = function (e) {
      wt.now(p(Ct, e, 1))
    } : bt ? (ct = (ut = new bt).port2, ut.port1.onmessage = Tt, lt = p(ct.postMessage, ct, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (lt = function (e) {
      c.postMessage(e + "", "*")
    }, c.addEventListener("message", Tt, !1)) : lt = "onreadystatechange" in b("script") ? function (e) {
      ee.appendChild(b("script")).onreadystatechange = function () {
        ee.removeChild(this), Ct.call(e)
      }
    } : function (e) {
      setTimeout(p(Ct, e, 1), 0)
    });
    var St, At, It, Pt, Ot = {
        set: yt,
        clear: _t
      },
      xt = Ot.set,
      Mt = c.MutationObserver || c.WebKitMutationObserver,
      Lt = c.process,
      Rt = c.Promise,
      Nt = "process" == R(Lt),
      jt = {
        f: function (e) {
          return new function (e) {
            var t, n;
            this.promise = new e(function (e, o) {
              if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
              t = e, n = o
            }), this.resolve = f(t), this.reject = f(n)
          }(e)
        }
      },
      Dt = function (e) {
        try {
          return {
            e: !1,
            v: e()
          }
        } catch (e) {
          return {
            e: !0,
            v: e
          }
        }
      },
      Vt = c.navigator,
      qt = Vt && Vt.userAgent || "",
      Ft = function (e, t) {
        if (v(e), h(t) && t.constructor === e) return t;
        var n = jt.f(e);
        return (0, n.resolve)(t), n.promise
      },
      Ut = Ot.set,
      Bt = function () {
        var e, t, n, o = function () {
          var o, r;
          for (Nt && (o = Lt.domain) && o.exit(); e;) {
            r = e.fn, e = e.next;
            try {
              r()
            } catch (o) {
              throw e ? n() : t = void 0, o
            }
          }
          t = void 0, o && o.enter()
        };
        if (Nt) n = function () {
          Lt.nextTick(o)
        };
        else if (!Mt || c.navigator && c.navigator.standalone)
          if (Rt && Rt.resolve) {
            var r = Rt.resolve(void 0);
            n = function () {
              r.then(o)
            }
          } else n = function () {
            xt.call(c, o)
          };
        else {
          var i = !0,
            a = document.createTextNode("");
          new Mt(o).observe(a, {
            characterData: !0
          }), n = function () {
            a.data = i = !i
          }
        }
        return function (o) {
          var r = {
            fn: o,
            next: void 0
          };
          t && (t.next = r), e || (e = r, n()), t = r
        }
      }(),
      $t = c.TypeError,
      Ht = c.process,
      zt = Ht && Ht.versions,
      Gt = zt && zt.v8 || "",
      Wt = c.Promise,
      Kt = "process" == Re(Ht),
      Yt = function () {},
      Jt = At = jt.f,
      Qt = !! function () {
        try {
          var e = Wt.resolve(1),
            t = (e.constructor = {})[ie("species")] = function (e) {
              e(Yt, Yt)
            };
          return (Kt || "function" == typeof PromiseRejectionEvent) && e.then(Yt) instanceof t && 0 !== Gt.indexOf("6.6") && -1 === qt.indexOf("Chrome/66")
        } catch (e) {}
      }(),
      Zt = function (e) {
        var t;
        return !(!h(e) || "function" != typeof (t = e.then)) && t
      },
      Xt = function (e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          Bt(function () {
            for (var o = e._v, r = 1 == e._s, i = 0, a = function (t) {
                var n, i, a, s = r ? t.ok : t.fail,
                  l = t.resolve,
                  u = t.reject,
                  c = t.domain;
                try {
                  s ? (r || (2 == e._h && nn(e), e._h = 1), !0 === s ? n = o : (c && c.enter(), n = s(o), c && (c.exit(), a = !0)), n === t.promise ? u($t("Promise-chain cycle")) : (i = Zt(n)) ? i.call(n, l, u) : l(n)) : u(o)
                } catch (e) {
                  c && !a && c.exit(), u(e)
                }
              }; n.length > i;) a(n[i++]);
            e._c = [], e._n = !1, t && !e._h && en(e)
          })
        }
      },
      en = function (e) {
        Ut.call(c, function () {
          var t, n, o, r = e._v,
            i = tn(e);
          if (i && (t = Dt(function () {
              Kt ? Ht.emit("unhandledRejection", r, e) : (n = c.onunhandledrejection) ? n({
                promise: e,
                reason: r
              }) : (o = c.console) && o.error && o.error("Unhandled promise rejection", r)
            }), e._h = Kt || tn(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
        })
      },
      tn = function (e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
      },
      nn = function (e) {
        Ut.call(c, function () {
          var t;
          Kt ? Ht.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({
            promise: e,
            reason: e._v
          })
        })
      },
      on = function (e) {
        var t = this;
        t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), Xt(t, !0))
      },
      rn = function e(t) {
        var n, o = this;
        if (!o._d) {
          o._d = !0, o = o._w || o;
          try {
            if (o === t) throw $t("Promise can't be resolved itself");
            (n = Zt(t)) ? Bt(function () {
              var r = {
                _w: o,
                _d: !1
              };
              try {
                n.call(t, p(e, r, 1), p(on, r, 1))
              } catch (e) {
                on.call(r, e)
              }
            }): (o._v = t, o._s = 1, Xt(o, !1))
          } catch (e) {
            on.call({
              _w: o,
              _d: !1
            }, e)
          }
        }
      };
    Qt || (Wt = function (e) {
      Ae(this, Wt, "Promise", "_h"), f(e), St.call(this);
      try {
        e(p(rn, this, 1), p(on, this, 1))
      } catch (e) {
        on.call(this, e)
      }
    }, (St = function (e) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = Se(Wt.prototype, {
      then: function (e, t) {
        var n = Jt(mt(this, Wt));
        return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Kt ? Ht.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && Xt(this, !1), n.promise
      },
      catch: function (e) {
        return this.then(void 0, e)
      }
    }), It = function () {
      var e = new St;
      this.promise = e, this.resolve = p(rn, e, 1), this.reject = p(on, e, 1)
    }, jt.f = Jt = function (e) {
      return e === Wt || e === Pt ? new It(e) : At(e)
    }), O(O.G + O.W + O.F * !Qt, {
      Promise: Wt
    }), le(Wt, "Promise"), qe("Promise"), Pt = d.Promise, O(O.S + O.F * !Qt, "Promise", {
      reject: function (e) {
        var t = Jt(this);
        return (0, t.reject)(e), t.promise
      }
    }), O(O.S + !0 * O.F, "Promise", {
      resolve: function (e) {
        return Ft(this === Pt ? Wt : this, e)
      }
    }), O(O.S + O.F * !(Qt && st(function (e) {
      Wt.all(e).catch(Yt)
    })), "Promise", {
      all: function (e) {
        var t = this,
          n = Jt(t),
          o = n.resolve,
          r = n.reject,
          i = Dt(function () {
            var n = [],
              i = 0,
              a = 1;
            De(e, !1, function (e) {
              var s = i++,
                l = !1;
              n.push(void 0), a++, t.resolve(e).then(function (e) {
                l || (l = !0, n[s] = e, --a || o(n))
              }, r)
            }), --a || o(n)
          });
        return i.e && r(i.v), n.promise
      },
      race: function (e) {
        var t = this,
          n = Jt(t),
          o = n.reject,
          r = Dt(function () {
            De(e, !1, function (e) {
              t.resolve(e).then(n.resolve, o)
            })
          });
        return r.e && o(r.v), n.promise
      }
    }), O(O.P + O.R, "Promise", {
      finally: function (e) {
        var t = mt(this, d.Promise || c.Promise),
          n = "function" == typeof e;
        return this.then(n ? function (n) {
          return Ft(t, e()).then(function () {
            return n
          })
        } : e, n ? function (n) {
          return Ft(t, e()).then(function () {
            throw n
          })
        } : e)
      }
    }), O(O.S, "Promise", {
      try: function (e) {
        var t = jt.f(this),
          n = Dt(e);
        return (n.e ? t.reject : t.resolve)(n.v), t.promise
      }
    });
    var an = d.Promise,
      sn = r(i(function (e) {
        e.exports = {
          default: an,
          __esModule: !0
        }
      })),
      ln = {
        f: Object.getOwnPropertySymbols
      },
      un = {
        f: {}.propertyIsEnumerable
      },
      cn = Object.assign,
      dn = !cn || m(function () {
        var e = {},
          t = {},
          n = Symbol(),
          o = "abcdefghijklmnopqrst";
        return e[n] = 7, o.split("").forEach(function (e) {
          t[e] = e
        }), 7 != cn({}, e)[n] || Object.keys(cn({}, t)).join("") != o
      }) ? function (e, t) {
        for (var n = ce(e), o = arguments.length, r = 1, i = ln.f, a = un.f; o > r;)
          for (var s, l = N(arguments[r++]), u = i ? Q(l).concat(i(l)) : Q(l), c = u.length, d = 0; c > d;) a.call(l, s = u[d++]) && (n[s] = l[s]);
        return n
      } : cn;
    O(O.S + O.F, "Object", {
      assign: dn
    });
    var fn = d.Object.assign,
      pn = r(i(function (e) {
        e.exports = {
          default: fn,
          __esModule: !0
        }
      })),
      hn = function (e, t) {
        var n = (d.Object || {})[e] || Object[e],
          o = {};
        o[e] = t(n), O(O.S + O.F * m(function () {
          n(1)
        }), "Object", o)
      };
    hn("getPrototypeOf", function () {
      return function (e) {
        return pe(ce(e))
      }
    });
    var vn = d.Object.getPrototypeOf,
      mn = i(function (e) {
        e.exports = {
          default: vn,
          __esModule: !0
        }
      }),
      gn = r(mn),
      yn = {
        f: ie
      },
      _n = yn.f("iterator"),
      bn = i(function (e) {
        e.exports = {
          default: _n,
          __esModule: !0
        }
      });
    r(bn);
    var wn = C.f,
      En = function (e) {
        var t = d.Symbol || (d.Symbol = {});
        "_" == e.charAt(0) || e in t || wn(t, e, {
          value: yn.f(e)
        })
      },
      kn = J.concat("length", "prototype"),
      Cn = {
        f: Object.getOwnPropertyNames || function (e) {
          return Y(e, kn)
        }
      },
      Tn = Cn.f,
      Sn = {}.toString,
      An = "object" == ("undefined" == typeof window ? "undefined" : n(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      In = {
        f: function (e) {
          return An && "[object Window]" == Sn.call(e) ? function (e) {
            try {
              return Tn(e)
            } catch (e) {
              return An.slice()
            }
          }(e) : Tn(j(e))
        }
      },
      Pn = Object.getOwnPropertyDescriptor,
      On = {
        f: g ? Pn : function (e, t) {
          if (e = j(e), t = E(t, !0), w) try {
            return Pn(e, t)
          } catch (e) {}
          if (I(e, t)) return T(!un.f.call(e, t), e[t])
        }
      },
      xn = Fe.KEY,
      Mn = On.f,
      Ln = C.f,
      Rn = In.f,
      Nn = c.Symbol,
      jn = c.JSON,
      Dn = jn && jn.stringify,
      Vn = ie("_hidden"),
      qn = ie("toPrimitive"),
      Fn = {}.propertyIsEnumerable,
      Un = U("symbol-registry"),
      Bn = U("symbols"),
      $n = U("op-symbols"),
      Hn = Object.prototype,
      zn = "function" == typeof Nn,
      Gn = c.QObject,
      Wn = !Gn || !Gn.prototype || !Gn.prototype.findChild,
      Kn = g && m(function () {
        return 7 != re(Ln({}, "a", {
          get: function () {
            return Ln(this, "a", {
              value: 7
            }).a
          }
        })).a
      }) ? function (e, t, n) {
        var o = Mn(Hn, t);
        o && delete Hn[t], Ln(e, t, n), o && e !== Hn && Ln(Hn, t, o)
      } : Ln,
      Yn = function (e) {
        var t = Bn[e] = re(Nn.prototype);
        return t._k = e, t
      },
      Jn = zn && "symbol" == n(Nn.iterator) ? function (e) {
        return "symbol" == (void 0 === e ? "undefined" : n(e))
      } : function (e) {
        return e instanceof Nn
      },
      Qn = function (e, t, n) {
        return e === Hn && Qn($n, t, n), v(e), t = E(t, !0), v(n), I(Bn, t) ? (n.enumerable ? (I(e, Vn) && e[Vn][t] && (e[Vn][t] = !1), n = re(n, {
          enumerable: T(0, !1)
        })) : (I(e, Vn) || Ln(e, Vn, T(1, {})), e[Vn][t] = !0), Kn(e, t, n)) : Ln(e, t, n)
      },
      Zn = function (e, t) {
        v(e);
        for (var n, o = function (e) {
            var t = Q(e),
              n = ln.f;
            if (n)
              for (var o, r = n(e), i = un.f, a = 0; r.length > a;) i.call(e, o = r[a++]) && t.push(o);
            return t
          }(t = j(t)), r = 0, i = o.length; i > r;) Qn(e, n = o[r++], t[n]);
        return e
      },
      Xn = function (e, t) {
        if (e = j(e), t = E(t, !0), e !== Hn || !I(Bn, t) || I($n, t)) {
          var n = Mn(e, t);
          return !n || !I(Bn, t) || I(e, Vn) && e[Vn][t] || (n.enumerable = !0), n
        }
      },
      eo = function (e) {
        for (var t, n = Rn(j(e)), o = [], r = 0; n.length > r;) I(Bn, t = n[r++]) || t == Vn || t == xn || o.push(t);
        return o
      },
      to = function (e) {
        for (var t, n = e === Hn, o = Rn(n ? $n : j(e)), r = [], i = 0; o.length > i;) !I(Bn, t = o[i++]) || n && !I(Hn, t) || r.push(Bn[t]);
        return r
      };
    zn || (x((Nn = function () {
      if (this instanceof Nn) throw TypeError("Symbol is not a constructor!");
      var e = H(arguments.length > 0 ? arguments[0] : void 0);
      return g && Wn && Kn(Hn, e, {
        configurable: !0,
        set: function t(n) {
          this === Hn && t.call($n, n), I(this, Vn) && I(this[Vn], e) && (this[Vn][e] = !1), Kn(this, e, T(1, n))
        }
      }), Yn(e)
    }).prototype, "toString", function () {
      return this._k
    }), On.f = Xn, C.f = Qn, Cn.f = In.f = eo, un.f = function (e) {
      var t = Fn.call(this, e = E(e, !0));
      return !(this === Hn && I(Bn, e) && !I($n, e)) && (!(t || !I(this, e) || !I(Bn, e) || I(this, Vn) && this[Vn][e]) || t)
    }, ln.f = to, yn.f = function (e) {
      return Yn(ie(e))
    }), O(O.G + O.W + O.F * !zn, {
      Symbol: Nn
    });
    for (var no = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), oo = 0; no.length > oo;) ie(no[oo++]);
    for (var ro = Q(ie.store), io = 0; ro.length > io;) En(ro[io++]);
    O(O.S + O.F * !zn, "Symbol", {
      for: function (e) {
        return I(Un, e += "") ? Un[e] : Un[e] = Nn(e)
      },
      keyFor: function (e) {
        if (!Jn(e)) throw TypeError(e + " is not a symbol!");
        for (var t in Un)
          if (Un[t] === e) return t
      },
      useSetter: function () {
        Wn = !0
      },
      useSimple: function () {
        Wn = !1
      }
    }), O(O.S + O.F * !zn, "Object", {
      create: function (e, t) {
        return void 0 === t ? re(e) : Zn(re(e), t)
      },
      defineProperty: Qn,
      defineProperties: Zn,
      getOwnPropertyDescriptor: Xn,
      getOwnPropertyNames: eo,
      getOwnPropertySymbols: to
    }), jn && O(O.S + O.F * (!zn || m(function () {
      var e = Nn();
      return "[null]" != Dn([e]) || "{}" != Dn({
        a: e
      }) || "{}" != Dn(Object(e))
    })), "JSON", {
      stringify: function (e) {
        for (var t, n, o = [e], r = 1; arguments.length > r;) o.push(arguments[r++]);
        if (n = t = o[1], (h(t) || void 0 !== e) && !Jn(e)) return We(t) || (t = function (e, t) {
          if ("function" == typeof n && (t = n.call(this, e, t)), !Jn(t)) return t
        }), o[1] = t, Dn.apply(jn, o)
      }
    }), Nn.prototype[qn] || S(Nn.prototype, qn, Nn.prototype.valueOf), le(Nn, "Symbol"), le(Math, "Math", !0), le(c.JSON, "JSON", !0), En("asyncIterator"), En("observable");
    var ao = d.Symbol,
      so = i(function (e) {
        e.exports = {
          default: ao,
          __esModule: !0
        }
      });
    r(so);
    var lo = i(function (e, t) {
        t.__esModule = !0;
        var o = a(bn),
          r = a(so),
          i = "function" == typeof r.default && "symbol" === n(o.default) ? function (e) {
            return void 0 === e ? "undefined" : n(e)
          } : function (e) {
            return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : void 0 === e ? "undefined" : n(e)
          };

        function a(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        t.default = "function" == typeof r.default && "symbol" === i(o.default) ? function (e) {
          return void 0 === e ? "undefined" : i(e)
        } : function (e) {
          return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
        }
      }),
      uo = r(lo),
      co = r(i(function (e, t) {
        t.__esModule = !0;
        var n = function (e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(lo);
        t.default = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t
        }
      })),
      fo = function (e, t) {
        if (v(e), !h(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
      },
      po = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, n) {
          try {
            (n = p(Function.call, On.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
          } catch (e) {
            t = !0
          }
          return function (e, o) {
            return fo(e, o), t ? e.__proto__ = o : n(e, o), e
          }
        }({}, !1) : void 0),
        check: fo
      };
    O(O.S, "Object", {
      setPrototypeOf: po.set
    });
    var ho = d.Object.setPrototypeOf,
      vo = i(function (e) {
        e.exports = {
          default: ho,
          __esModule: !0
        }
      });
    r(vo), O(O.S, "Object", {
      create: re
    });
    var mo = d.Object,
      go = function (e, t) {
        return mo.create(e, t)
      },
      yo = i(function (e) {
        e.exports = {
          default: go,
          __esModule: !0
        }
      }),
      _o = r(yo),
      bo = r(i(function (e, t) {
        t.__esModule = !0;
        var n = i(vo),
          o = i(yo),
          r = i(lo);

        function i(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        t.default = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, r.default)(t)));
          e.prototype = (0, o.default)(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (n.default ? (0, n.default)(e, t) : e.__proto__ = t)
        }
      })),
      wo = On.f;
    hn("getOwnPropertyDescriptor", function () {
      return function (e, t) {
        return wo(j(e), t)
      }
    });
    var Eo = d.Object,
      ko = function (e, t) {
        return Eo.getOwnPropertyDescriptor(e, t)
      },
      Co = i(function (e) {
        e.exports = {
          default: ko,
          __esModule: !0
        }
      });
    r(Co);
    var To = r(i(function (e, t) {
      t.__esModule = !0;
      var n = r(mn),
        o = r(Co);

      function r(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      t.default = function e(t, r, i) {
        null === t && (t = Function.prototype);
        var a = (0, o.default)(t, r);
        if (void 0 === a) {
          var s = (0, n.default)(t);
          return null === s ? void 0 : e(s, r, i)
        }
        if ("value" in a) return a.value;
        var l = a.get;
        return void 0 !== l ? l.call(i) : void 0
      }
    }));
    ! function (e, t) {
      function n(e) {
        this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }, this.isIntersecting = !!e.intersectionRect;
        var t = this.boundingClientRect,
          n = t.width * t.height,
          o = this.intersectionRect,
          r = o.width * o.height;
        this.intersectionRatio = n ? r / n : this.isIntersecting ? 1 : 0
      }

      function o(e, t) {
        var n = t || {};
        if ("function" != typeof e) throw new Error("callback must be a function");
        if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = function (e, t) {
          var n = null;
          return function () {
            n || (n = setTimeout(function () {
              e(), n = null
            }, t))
          }
        }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function (e) {
          return e.value + e.unit
        }).join(" ")
      }

      function r(e, t, n, o) {
        "function" == typeof e.addEventListener ? e.addEventListener(t, n, o || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
      }

      function i(e, t, n, o) {
        "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, o || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
      }

      function a(e, t) {
        var n = Math.max(e.top, t.top),
          o = Math.min(e.bottom, t.bottom),
          r = Math.max(e.left, t.left),
          i = Math.min(e.right, t.right),
          a = i - r,
          s = o - n;
        return a >= 0 && s >= 0 && {
          top: n,
          bottom: o,
          left: r,
          right: i,
          width: a,
          height: s
        }
      }

      function s(e) {
        var t;
        try {
          t = e.getBoundingClientRect()
        } catch (e) {}
        return t ? (t.width && t.height || (t = {
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          width: t.right - t.left,
          height: t.bottom - t.top
        }), t) : {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }
      }

      function l(e, t) {
        for (var n = t; n;) {
          if (n == e) return !0;
          n = u(n)
        }
        return !1
      }

      function u(e) {
        var t = e.parentNode;
        return t && 11 == t.nodeType && t.host ? t.host : t
      }
      "IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype ? "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function () {
          return this.intersectionRatio > 0
        }
      }) : (o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.USE_MUTATION_OBSERVER = !0, o.prototype.observe = function (e) {
        if (!this._observationTargets.some(function (t) {
            return t.element == e
          })) {
          if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
          this._registerInstance(), this._observationTargets.push({
            element: e,
            entry: null
          }), this._monitorIntersections(), this._checkForIntersections()
        }
      }, o.prototype.unobserve = function (e) {
        this._observationTargets = this._observationTargets.filter(function (t) {
          return t.element != e
        }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
      }, o.prototype.disconnect = function () {
        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
      }, o.prototype.takeRecords = function () {
        var e = this._queuedEntries.slice();
        return this._queuedEntries = [], e
      }, o.prototype._initThresholds = function (e) {
        var t = e || [0];
        return Array.isArray(t) || (t = [t]), t.sort().filter(function (e, t, n) {
          if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
          return e !== n[t - 1]
        })
      }, o.prototype._parseRootMargin = function (e) {
        var t = (e || "0px").split(/\s+/).map(function (e) {
          var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
          if (!t) throw new Error("rootMargin must be specified in pixels or percent");
          return {
            value: parseFloat(t[1]),
            unit: t[2]
          }
        });
        return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
      }, o.prototype._monitorIntersections = function () {
        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        }))))
      }, o.prototype._unmonitorIntersections = function () {
        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
      }, o.prototype._checkForIntersections = function () {
        var t = this._rootIsInDom(),
          o = t ? this._getRootRect() : {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
          };
        this._observationTargets.forEach(function (r) {
          var i = r.element,
            a = s(i),
            l = this._rootContainsTarget(i),
            u = r.entry,
            c = t && l && this._computeTargetAndRootIntersection(i, o),
            d = r.entry = new n({
              time: e.performance && performance.now && performance.now(),
              target: i,
              boundingClientRect: a,
              rootBounds: o,
              intersectionRect: c
            });
          u ? t && l ? this._hasCrossedThreshold(u, d) && this._queuedEntries.push(d) : u && u.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
      }, o.prototype._computeTargetAndRootIntersection = function (n, o) {
        if ("none" != e.getComputedStyle(n).display) {
          for (var r = s(n), i = u(n), l = !1; !l;) {
            var c = null,
              d = 1 == i.nodeType ? e.getComputedStyle(i) : {};
            if ("none" == d.display) return;
            if (i == this.root || i == t ? (l = !0, c = o) : i != t.body && i != t.documentElement && "visible" != d.overflow && (c = s(i)), c && !(r = a(c, r))) break;
            i = u(i)
          }
          return r
        }
      }, o.prototype._getRootRect = function () {
        var e;
        if (this.root) e = s(this.root);
        else {
          var n = t.documentElement,
            o = t.body;
          e = {
            top: 0,
            left: 0,
            right: n.clientWidth || o.clientWidth,
            width: n.clientWidth || o.clientWidth,
            bottom: n.clientHeight || o.clientHeight,
            height: n.clientHeight || o.clientHeight
          }
        }
        return this._expandRectByRootMargin(e)
      }, o.prototype._expandRectByRootMargin = function (e) {
        var t = this._rootMarginValues.map(function (t, n) {
            return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
          }),
          n = {
            top: e.top - t[0],
            right: e.right + t[1],
            bottom: e.bottom + t[2],
            left: e.left - t[3]
          };
        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
      }, o.prototype._hasCrossedThreshold = function (e, t) {
        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
          o = t.isIntersecting ? t.intersectionRatio || 0 : -1;
        if (n !== o)
          for (var r = 0; r < this.thresholds.length; r++) {
            var i = this.thresholds[r];
            if (i == n || i == o || i < n != i < o) return !0
          }
      }, o.prototype._rootIsInDom = function () {
        return !this.root || l(t, this.root)
      }, o.prototype._rootContainsTarget = function (e) {
        return l(this.root || t, e)
      }, o.prototype._registerInstance = function () {}, o.prototype._unregisterInstance = function () {}, e.IntersectionObserver = o, e.IntersectionObserverEntry = n)
    }(window, document);
    var So = {
        AD_ERROR: "ad_error",
        AD_PROGRESS: "ad_progress",
        AD_REPORT: "ad_report",
        AD_REQUEST: "ad_request",
        AD_STREAM_COMPLETE: "ad_stream_complete",
        BEFORE_RESUME: "beforeresume",
        BEFORE_SEEK: "beforeseek",
        BUFFER: "buffer",
        CLICK_LOGO: "click_logo",
        CLICK_PAUSE_BANNER: "click_pause_banner",
        CLICK_SKIP: "click_skip",
        DISABLE: "disable",
        ENDED: "ended",
        ERROR: "error",
        FILM_FINISH: "film_finish",
        FLASH_DISABLED: "flashdisabled",
        FULLSCREEN: "fullscreen",
        FULLSCREEN_EXIT: "fullscreen-exit",
        IMPRESSION: "impression",
        IN_VIEWPORT: "in_viewport",
        LINEAR_AD_MEDIA_COMPLETE: "linear_ad_media_complete",
        LINEAR_AD_MEDIA_START: "linear_ad_media_start",
        LOAD: "load",
        MULTIPLE_ACCOUNT_USING: "multiple_account_using",
        MUTE: "mute",
        NONLINEAR_AD_MEDIA_COMPLETE: "nonlinear_ad_media_complete",
        NONLINEAR_AD_MEDIA_START: "nonlinear_ad_media_start",
        OUT_VIEWPORT: "out_viewport",
        PAUSE: "pause",
        PAUSE_BANNER_IMPRESSION: "pause_banner_impression",
        PAUSE_FOR_AD: "pause_for_ad",
        PROGRESS: "progress",
        QUALITY: "quality",
        QUALITY_MEUN_OPEN: "quality_meun_open",
        READY: "ready",
        RESUM_FOR_AD: "resum_for_ad",
        RESUME: "resume",
        SEEK: "seek",
        SHUTDOWN: "shutdown",
        SPEED: "speed",
        STOP: "stop",
        UNLOAD: "unload",
        VOLUME: "volume"
      },
      Ao = i(function (e, t) {
        /*!
         * UAParser.js v0.7.18
         * Lightweight JavaScript-based User-Agent string parser
         * https://github.com/faisalman/ua-parser-js
         *
         * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
         * Dual licensed under GPLv2 or MIT
         */
        ! function (o, r) {
          var i = "model",
            a = "name",
            s = "type",
            l = "vendor",
            u = "version",
            c = "mobile",
            d = "tablet",
            f = {
              extend: function (e, t) {
                var n = {};
                for (var o in e) t[o] && t[o].length % 2 == 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
                return n
              },
              has: function (e, t) {
                return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
              },
              lowerize: function (e) {
                return e.toLowerCase()
              },
              major: function (e) {
                return "string" === (void 0 === e ? "undefined" : n(e)) ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
              },
              trim: function (e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
              }
            },
            p = {
              rgx: function (e, t) {
                for (var o, r, i, a, s, l, u = 0; u < t.length && !s;) {
                  var c = t[u],
                    d = t[u + 1];
                  for (o = r = 0; o < c.length && !s;)
                    if (s = c[o++].exec(e))
                      for (i = 0; i < d.length; i++) l = s[++r], "object" === (void 0 === (a = d[i]) ? "undefined" : n(a)) && a.length > 0 ? 2 == a.length ? "function" == n(a[1]) ? this[a[0]] = a[1].call(this, l) : this[a[0]] = a[1] : 3 == a.length ? "function" !== n(a[1]) || a[1].exec && a[1].test ? this[a[0]] = l ? l.replace(a[1], a[2]) : void 0 : this[a[0]] = l ? a[1].call(this, l, a[2]) : void 0 : 4 == a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : void 0) : this[a] = l || void 0;
                  u += 2
                }
              },
              str: function (e, t) {
                for (var o in t)
                  if ("object" === n(t[o]) && t[o].length > 0) {
                    for (var r = 0; r < t[o].length; r++)
                      if (f.has(t[o][r], e)) return "?" === o ? void 0 : o
                  } else if (f.has(t[o], e)) return "?" === o ? void 0 : o;
                return e
              }
            },
            h = {
              browser: {
                oldsafari: {
                  version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                  }
                }
              },
              device: {
                amazon: {
                  model: {
                    "Fire Phone": ["SD", "KF"]
                  }
                },
                sprint: {
                  model: {
                    "Evo Shift 4G": "7373KT"
                  },
                  vendor: {
                    HTC: "APA",
                    Sprint: "Sprint"
                  }
                }
              },
              os: {
                windows: {
                  version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2000: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                  }
                }
              }
            },
            v = {
              browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                [a, u],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [
                  [a, "Opera Mini"], u
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                  [a, "Opera"], u
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                [a, u],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                  [a, "IE"], u
                ],
                [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                [
                  [a, "Edge"], u
                ],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                  [a, "Yandex"], u
                ],
                [/(puffin)\/([\w\.]+)/i],
                [
                  [a, "Puffin"], u
                ],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [
                  [a, "UCBrowser"], u
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                  [a, /_/g, " "], u
                ],
                [/(micromessenger)\/([\w\.]+)/i],
                [
                  [a, "WeChat"], u
                ],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                [a, u],
                [/(QQ)\/([\d\.]+)/i],
                [a, u],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                [a, u],
                [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                [a, u],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                [a, u],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                [a],
                [/(LBBROWSER)/i],
                [a],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                [u, [a, "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                [u, [a, "Facebook"]],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                [u, [a, "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [
                  [a, /(.+)/, "$1 WebView"], u
                ],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [
                  [a, /(.+(?:g|us))(.+)/, "$1 $2"], u
                ],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                [u, [a, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                [a, u],
                [/(dolfin)\/([\w\.]+)/i],
                [
                  [a, "Dolphin"], u
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                  [a, "Chrome"], u
                ],
                [/(coast)\/([\w\.]+)/i],
                [
                  [a, "Opera Coast"], u
                ],
                [/fxios\/([\w\.-]+)/i],
                [u, [a, "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                [u, [a, "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                [u, a],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [
                  [a, "GSA"], u
                ],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [a, [u, p.str, h.browser.oldsafari.version]],
                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                [a, u],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                  [a, "Netscape"], u
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                [a, u]
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                  ["architecture", "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                  ["architecture", f.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                  ["architecture", "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                  ["architecture", "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                  ["architecture", /ower/, "", f.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                  ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                  ["architecture", f.lowerize]
                ]
              ],
              device: [
                [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                [i, l, [s, d]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                [i, [l, "Apple"],
                  [s, d]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                  [i, "Apple TV"],
                  [l, "Apple"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                [l, i, [s, d]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                [i, [l, "Amazon"],
                  [s, d]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                  [i, p.str, h.device.amazon.model],
                  [l, "Amazon"],
                  [s, c]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                [i, l, [s, c]],
                [/\((ip[honed|\s\w*]+);/i],
                [i, [l, "Apple"],
                  [s, c]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                [l, i, [s, c]],
                [/\(bb10;\s(\w+)/i],
                [i, [l, "BlackBerry"],
                  [s, c]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                [i, [l, "Asus"],
                  [s, d]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                  [l, "Sony"],
                  [i, "Xperia Tablet"],
                  [s, d]
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                [i, [l, "Sony"],
                  [s, c]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                [l, i, [s, "console"]],
                [/android.+;\s(shield)\sbuild/i],
                [i, [l, "Nvidia"],
                  [s, "console"]
                ],
                [/(playstation\s[34portablevi]+)/i],
                [i, [l, "Sony"],
                  [s, "console"]
                ],
                [/(sprint\s(\w+))/i],
                [
                  [l, p.str, h.device.sprint.vendor],
                  [i, p.str, h.device.sprint.model],
                  [s, c]
                ],
                [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                [l, i, [s, d]],
                [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                [l, [i, /_/g, " "],
                  [s, c]
                ],
                [/(nexus\s9)/i],
                [i, [l, "HTC"],
                  [s, d]
                ],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                [i, [l, "Huawei"],
                  [s, c]
                ],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                [l, i, [s, c]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                [i, [l, "Microsoft"],
                  [s, "console"]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                  [i, /\./g, " "],
                  [l, "Microsoft"],
                  [s, c]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                [i, [l, "Motorola"],
                  [s, c]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                [i, [l, "Motorola"],
                  [s, d]
                ],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                  [l, f.trim],
                  [i, f.trim],
                  [s, "smarttv"]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [i, /^/, "SmartTV"],
                  [l, "Samsung"],
                  [s, "smarttv"]
                ],
                [/\(dtv[\);].+(aquos)/i],
                [i, [l, "Sharp"],
                  [s, "smarttv"]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                  [l, "Samsung"], i, [s, d]
                ],
                [/smart-tv.+(samsung)/i],
                [l, [s, "smarttv"], i],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                [
                  [l, "Samsung"], i, [s, c]
                ],
                [/sie-(\w*)/i],
                [i, [l, "Siemens"],
                  [s, c]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [
                  [l, "Nokia"], i, [s, c]
                ],
                [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                [i, [l, "Acer"],
                  [s, d]
                ],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                [i, [l, "LG"],
                  [s, d]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                  [l, "LG"], i, [s, d]
                ],
                [/(lg) netcast\.tv/i],
                [l, i, [s, "smarttv"]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                [i, [l, "LG"],
                  [s, c]
                ],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                [i, [l, "Lenovo"],
                  [s, d]
                ],
                [/linux;.+((jolla));/i],
                [l, i, [s, c]],
                [/((pebble))app\/[\d\.]+\s/i],
                [l, i, [s, "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                [l, i, [s, c]],
                [/crkey/i],
                [
                  [i, "Chromecast"],
                  [l, "Google"]
                ],
                [/android.+;\s(glass)\s\d/i],
                [i, [l, "Google"],
                  [s, "wearable"]
                ],
                [/android.+;\s(pixel c)\s/i],
                [i, [l, "Google"],
                  [s, d]
                ],
                [/android.+;\s(pixel xl|pixel)\s/i],
                [i, [l, "Google"],
                  [s, c]
                ],
                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                [
                  [i, /_/g, " "],
                  [l, "Xiaomi"],
                  [s, c]
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                  [i, /_/g, " "],
                  [l, "Xiaomi"],
                  [s, d]
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                [i, [l, "Meizu"],
                  [s, d]
                ],
                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                [i, [l, "OnePlus"],
                  [s, c]
                ],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                [i, [l, "RCA"],
                  [s, d]
                ],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                [i, [l, "Dell"],
                  [s, d]
                ],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                [i, [l, "Verizon"],
                  [s, d]
                ],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [
                  [l, "Barnes & Noble"], i, [s, d]
                ],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                [i, [l, "NuVision"],
                  [s, d]
                ],
                [/android.+;\s(k88)\sbuild/i],
                [i, [l, "ZTE"],
                  [s, d]
                ],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                [i, [l, "Swiss"],
                  [s, c]
                ],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                [i, [l, "Swiss"],
                  [s, d]
                ],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                [i, [l, "Zeki"],
                  [s, d]
                ],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [
                  [l, "Dragon Touch"], i, [s, d]
                ],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                [i, [l, "Insignia"],
                  [s, d]
                ],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                [i, [l, "NextBook"],
                  [s, d]
                ],
                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [
                  [l, "Voice"], i, [s, c]
                ],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [
                  [l, "LvTel"], i, [s, c]
                ],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                [i, [l, "Envizen"],
                  [s, d]
                ],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                [l, i, [s, d]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                [i, [l, "MachSpeed"],
                  [s, d]
                ],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                [l, i, [s, d]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                [i, [l, "Rotor"],
                  [s, d]
                ],
                [/android.+(KS(.+))\s+build/i],
                [i, [l, "Amazon"],
                  [s, d]
                ],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                [l, i, [s, d]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [
                  [s, f.lowerize], l, i
                ],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                [i, [l, "Generic"]]
              ],
              engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                [u, [a, "EdgeHTML"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                [a, u],
                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                [u, a]
              ],
              os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                [a, u],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                [a, [u, p.str, h.os.windows.version]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                  [a, "Windows"],
                  [u, p.str, h.os.windows.version]
                ],
                [/\((bb)(10);/i],
                [
                  [a, "BlackBerry"], u
                ],
                [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                [a, u],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [
                  [a, "Symbian"], u
                ],
                [/\((series40);/i],
                [a],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                  [a, "Firefox OS"], u
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                [a, u],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                  [a, "Chromium OS"], u
                ],
                [/(sunos)\s?([\w\.\d]*)/i],
                [
                  [a, "Solaris"], u
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                [a, u],
                [/(haiku)\s(\w+)/i],
                [a, u],
                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                [
                  [u, /_/g, "."],
                  [a, "iOS"]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                  [a, "Mac OS"],
                  [u, /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
                [a, u]
              ]
            },
            m = function e(t, r) {
              if ("object" === (void 0 === t ? "undefined" : n(t)) && (r = t, t = void 0), !(this instanceof e)) return new e(t, r).getResult();
              var i = t || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                a = r ? f.extend(v, r) : v;
              return this.getBrowser = function () {
                var e = {
                  name: void 0,
                  version: void 0
                };
                return p.rgx.call(e, i, a.browser), e.major = f.major(e.version), e
              }, this.getCPU = function () {
                var e = {
                  architecture: void 0
                };
                return p.rgx.call(e, i, a.cpu), e
              }, this.getDevice = function () {
                var e = {
                  vendor: void 0,
                  model: void 0,
                  type: void 0
                };
                return p.rgx.call(e, i, a.device), e
              }, this.getEngine = function () {
                var e = {
                  name: void 0,
                  version: void 0
                };
                return p.rgx.call(e, i, a.engine), e
              }, this.getOS = function () {
                var e = {
                  name: void 0,
                  version: void 0
                };
                return p.rgx.call(e, i, a.os), e
              }, this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU()
                }
              }, this.getUA = function () {
                return i
              }, this.setUA = function (e) {
                return i = e, this
              }, this
            };
          m.VERSION = "0.7.18", m.BROWSER = {
            NAME: a,
            MAJOR: "major",
            VERSION: u
          }, m.CPU = {
            ARCHITECTURE: "architecture"
          }, m.DEVICE = {
            MODEL: i,
            VENDOR: l,
            TYPE: s,
            CONSOLE: "console",
            MOBILE: c,
            SMARTTV: "smarttv",
            TABLET: d,
            WEARABLE: "wearable",
            EMBEDDED: "embedded"
          }, m.ENGINE = {
            NAME: a,
            VERSION: u
          }, m.OS = {
            NAME: a,
            VERSION: u
          }, e.exports && (t = e.exports = m), t.UAParser = m;
          var g = o && (o.jQuery || o.Zepto);
          if ("undefined" !== (void 0 === g ? "undefined" : n(g))) {
            var y = new m;
            g.ua = y.getResult(), g.ua.get = function () {
              return y.getUA()
            }, g.ua.set = function (e) {
              y.setUA(e);
              var t = y.getResult();
              for (var n in t) g.ua[n] = t[n]
            }
          }
        }("object" === ("undefined" == typeof window ? "undefined" : n(window)) ? window : o)
      }),
      Io = (Ao.UAParser, function () {
        return function (e) {
          return function () {
            return new sn(function (t, n) {
              ! function e(t, n, o) {
                var r = void 0 === t ? "undefined" : uo(t);
                "string" == r ? n(t) : function (e) {
                  return !!e && ("object" === (void 0 === e ? "undefined" : uo(e)) || "function" == typeof e) && "function" == typeof e.then
                }(t) ? t.then(n).catch(o) : "function" == r ? e(t(), n, o) : o("type error")
              }(e, t, n)
            })
          }
        }
      }()),
      Po = function () {
        for (var e = window.requestAnimationFrame && window.requestAnimationFrame.bind(window), t = ["webkit", "moz"], n = 0; n < t.length && !e; ++n) e = window[t[n] + "RequestAnimationFrame"].bind(window);
        if (!e) {
          var o = 0;
          e = function (e) {
            var t = Date.now || (new Date).getTime(),
              n = Math.max(o + 16, t);
            return setTimeout(function () {
              e(o = n)
            }, n - t)
          }
        }
        return function () {
          return new sn(function (t) {
            return e(t)
          })
        }
      }(),
      Oo = function (e) {
        var t = !1,
          n = !1;

        function o() {
          t || n || (e.conf.keyboard = !1, n = !0)
        }
        return {
          stop: o,
          resume: function () {
            !t && n && (e.conf.keyboard = !0, n = !1)
          },
          setMode: function (e) {
            "live" == e || "simulation_live" == e ? (o(), t = !0) : t = !1
          }
        }
      },
      xo = void 0,
      Mo = void 0;

    function Lo() {
      return Math.random().toString(32).substring(2)
    }

    function Ro(e) {
      var t = Lo();
      e.querySelector("linearGradient").id = t, e.querySelector("path.st0").style.fill = "url(#" + t + ")"
    }
    void 0 !== document.hidden ? (xo = "hidden", Mo = "visibilitychange") : void 0 !== document.msHidden ? (xo = "msHidden", Mo = "msvisibilitychange") : void 0 !== document.webkitHidden && (xo = "webkitHidden", Mo = "webkitvisibilitychange");
    var No = function () {
        try {
          var e = (new Ao).getResult(),
            t = e.browser.name.toLowerCase(),
            n = e.browser.major,
            o = e.os.name.toLowerCase().slice(0, 3),
            r = e.os.version;
          if (/^mobile\ /i.test(t) && (t = t.replace(/^mobile\ /i, "")), t.length > 3) {
            var i = t.split("");
            t = i[0] + i[1] + i[i.length - 1]
          }
          if (r.indexOf(".") > -1) {
            var a = r.split(".");
            r = a[0] + a[1]
          }
          return t + n + o + r
        } catch (e) {
          return console.error(e), ""
        }
      }(),
      jo = function () {
        var e = -1;
        return {
          get: function () {
            return 1 + (e = ++e % 99999)
          }
        }
      }(),
      Do = function () {
        function e() {
          Ze(this, e), this.events = {}
        }
        return ot(e, [{
          key: "on",
          value: function (e, t, n, o) {
            void 0 === this.events[e] && (this.events[e] = []), 1 == n ? this.events[e].unshift(t) : this.events[e].push({
              fn: t,
              once: o || !1
            })
          }
        }, {
          key: "one",
          value: function (e, t, n) {
            this.on(e, t, n, !0)
          }
        }, {
          key: "off",
          value: function (e, t) {
            if (this.events.hasOwnProperty(e)) {
              for (var n = this.events[e], o = n.length; o--;) n[o].fn === t && n.splice(o, 1);
              0 === this.events[e].length && (this.events[e] = null, delete this.events[e])
            }
          }
        }, {
          key: "trigger",
          value: function (e, t) {
            for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) o[r - 2] = arguments[r];
            var i = this,
              a = this.events[e],
              s = {};
            return a instanceof Array && a.length > 0 && (s = this.createEvent(e, t), a.concat().reduce(function (t, n) {
              if (!1 === t) return !1;
              try {
                var r, a = (r = n.fn).call.apply(r, [null, s].concat(o));
                return 1 == n.once && i.off(e, n.fn), a
              } catch (e) {
                return console.error(e), !0
              }
            }, !0)), s
          }
        }, {
          key: "createEvent",
          value: function (e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (n instanceof Event) return this.setUpGatter(n, "type", e), "function" != typeof n.getCarryInfo && (n.getCarryInfo = function () {
              return null
            }), n;
            var o = document.createEvent("Event");
            for (var r in o.initEvent(e, !1, !0), o.preventDefault = function () {
                t.setUpGatter(o, "defaultPrevented", !0)
              }, o.getCarryInfo = function () {
                return n
              }, n)
              if (n.hasOwnProperty(r)) {
                if ("type" === r) throw 'Cannot be converted to "Event" because the "type" field cannot be replaced.';
                o[r] = n[r]
              } return o
          }
        }, {
          key: "setUpGatter",
          value: function (e, t, n) {
            nt ? nt(e, t, {
              get: function () {
                return n
              },
              configurable: !0
            }) : e.__defineGetter__(t, function () {
              return n
            })
          }
        }]), e
      }(),
      Vo = {
        data: "",
        uid: null,
        position: "MC",
        is_logo: !1,
        is_linear: !0,
        click_through: "",
        duration: 0,
        enable_countdown: !1
      },
      qo = function (e) {
        function t(e) {
          Ze(this, t);
          var n = co(this, (t.__proto__ || gn(t)).call(this));
          return n.houseImageAd = e, n.uids = [], n.removeAll = n.removeAll.bind(n), n
        }
        return bo(t, Do), ot(t, [{
          key: "assign",
          value: function (e) {
            var n = this,
              o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            "string" == typeof e && (e = {
              data: e
            }), "boolen" != typeof e.disableControl && (e.disableControl = o);
            var r = e.uid || Lo();
            e.uid = r, this.uids.push(r);
            var i = pn({}, Vo, e),
              a = this.houseImageAd.adsRequest(i);
            return a.onPauseRequested(function (e) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", n).call(n, "PauseRequested", i)
            }).onAdMediaComplete(function (e) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", n).call(n, "AdMediaComplete", i)
            }), a.close = function () {
              this.houseImageAd.remove(r), this.uids = this.uids.filter(function (e) {
                return r !== e
              }), a.destroy(), a = null
            }.bind(this), a
          }
        }, {
          key: "removeAll",
          value: function () {
            var e = this;
            this.uids.forEach(function (t) {
              e.houseImageAd.remove(t)
            }), this.uids = []
          }
        }, {
          key: "on",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "on", this).apply(this, arguments), this
          }
        }, {
          key: "one",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "one", this).apply(this, arguments), this
          }
        }, {
          key: "off",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "off", this).apply(this, arguments), this
          }
        }]), t
      }(),
      Fo = function (e) {
        function t(e) {
          Ze(this, t);
          var n = co(this, (t.__proto__ || gn(t)).call(this));
          n.time = 0, n.clickFn = function () {};
          var o = document.createElement("A");
          return o.classList.add("countdown"), o.classList.add("hide"), o.innerHTML = "<span id='countdownCount'></span><span>免看廣告</span>", o.addEventListener("click", function (e) {
            e.preventDefault(), n.clickFn(), n.trigger("click", {
              href: o.href
            })
          }), n.view = o, n.countView = o.querySelector("#countdownCount"), e.appendChild(o), n
        }
        return bo(t, Do), ot(t, [{
          key: "start",
          value: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
            this.time = e, this.countView.textContent = e, this.view.href = t, this.view.classList.remove("hide"), this.clickFn = n
          }
        }, {
          key: "progress",
          value: function (e) {
            e != this.time && (this.time = e, this.countView.textContent = e)
          }
        }, {
          key: "end",
          value: function () {
            this.view.classList.add("hide"), this.view.removeAttribute("href"), this.time = 0, this.clickFn = function () {}
          }
        }]), t
      }();
    hn("keys", function () {
      return function (e) {
        return Q(ce(e))
      }
    });
    var Uo = d.Object.keys,
      Bo = r(i(function (e) {
        e.exports = {
          default: Uo,
          __esModule: !0
        }
      })),
      $o = "function" == typeof fetch ? fetch.bind() : function (e, t) {
        return t = t || {}, new Promise(function (n, o) {
          var r = new XMLHttpRequest;
          for (var i in r.open(t.method || "get", e), t.headers) r.setRequestHeader(i, t.headers[i]);

          function a() {
            var e, t = [],
              n = [],
              o = {};
            return r.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function (r, i, a) {
              t.push(i = i.toLowerCase()), n.push([i, a]), e = o[i], o[i] = e ? e + "," + a : a
            }), {
              ok: 1 == (r.status / 200 | 0),
              status: r.status,
              statusText: r.statusText,
              url: r.responseURL,
              clone: a,
              text: function () {
                return Promise.resolve(r.responseText)
              },
              json: function () {
                return Promise.resolve(r.responseText).then(JSON.parse)
              },
              blob: function () {
                return Promise.resolve(new Blob([r.response]))
              },
              headers: {
                keys: function () {
                  return t
                },
                entries: function () {
                  return n
                },
                get: function (e) {
                  return o[e.toLowerCase()]
                },
                has: function (e) {
                  return e.toLowerCase() in o
                }
              }
            }
          }
          r.withCredentials = "include" == t.credentials, r.onload = function () {
            n(a())
          }, r.onerror = o, r.send(t.body)
        })
      },
      Ho = function (e) {
        function t() {
          Ze(this, t);
          var e = co(this, (t.__proto__ || gn(t)).call(this)),
            n = e;
          return e.channel = new(function () {
            function e() {
              Ze(this, e)
            }
            return ot(e, [{
              key: "onRequest",
              value: function (e) {
                return n.one("Request", e), this
              }
            }, {
              key: "onPauseRequested",
              value: function (e) {
                return n.one("PauseRequested", e), this
              }
            }, {
              key: "onAdMediaStart",
              value: function (e) {
                return n.on("AdMediaStart", e), this
              }
            }, {
              key: "onAdMediaComplete",
              value: function (e) {
                return n.on("AdMediaComplete", e), this
              }
            }, {
              key: "onImpression",
              value: function (e) {
                return n.one("Impression", e), this
              }
            }, {
              key: "onCompleted",
              value: function (e) {
                return n.one("Completed", e), this
              }
            }, {
              key: "onError",
              value: function (e) {
                return n.on("Error", e), this
              }
            }, {
              key: "onAbort",
              value: function (e) {
                return n.on("Abort", e), this
              }
            }, {
              key: "onClick",
              value: function (e) {
                return n.on("Click", e), this
              }
            }, {
              key: "onCountdownStart",
              value: function (e) {
                return n.one("CountdownStart", e), this
              }
            }, {
              key: "onCountdownProgress",
              value: function (e) {
                return n.on("CountdownProgress", e), this
              }
            }, {
              key: "onCountdownEnd",
              value: function (e) {
                return n.one("CountdownEnd", e), this
              }
            }, {
              key: "onClickSkip",
              value: function (e) {
                return n.on("ClickSkip", e), this
              }
            }, {
              key: "onLoaded",
              value: function (e) {
                return n.one("Loaded", e), this
              }
            }, {
              key: "onRequestResume",
              value: function (e) {
                return n.on("RequestResume", e), this
              }
            }, {
              key: "onPause",
              value: function (e) {
                return n.on("Pause", e), this
              }
            }, {
              key: "onResume",
              value: function (e) {
                return n.on("Resume", e), this
              }
            }]), e
          }()), e
        }
        return bo(t, Do), ot(t, [{
          key: "getChannel",
          value: function () {
            return this.channel
          }
        }, {
          key: "destroy",
          value: function () {
            this.events = {}
          }
        }]), t
      }(),
      zo = un.f,
      Go = function (e) {
        for (var t, n = j(e), o = Q(n), r = o.length, i = 0, a = []; r > i;) zo.call(n, t = o[i++]) && a.push(n[t]);
        return a
      };
    O(O.S, "Object", {
      values: function (e) {
        return Go(e)
      }
    });
    var Wo = d.Object.values,
      Ko = r(i(function (e) {
        e.exports = {
          default: Wo,
          __esModule: !0
        }
      }));

    function Yo(e) {
      this.name = this.constructor.name, e instanceof Error ? this.message = e.message : this.message = String(e), "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(this.message).stack
    }
    Yo.prototype = _o(Error.prototype);
    var Jo = function (e) {
        function t(e) {
          Ze(this, t);
          var n = void 0,
            o = void 0,
            r = void 0;
          if ("function" == typeof e.getErrorCode) {
            var i = t.convert(e);
            n = i.code, o = i.message, r = i.reportType
          } else n = e.code, o = e.message, r = e.reportType;
          var a = co(this, (t.__proto__ || gn(t)).call(this, o));
          return a.code = n, a.reportType = r, a
        }
        return bo(t, Yo), ot(t, null, [{
          key: "convert",
          value: function (e) {
            var t = e.getErrorCode(),
              n = Ko(Qo.codes).find(function (e) {
                return e.code == t
              }) || {
                message: e.getMessage(),
                reportType: "error"
              },
              o = n.message,
              r = n.reportType;
            return {
              code: t,
              message: o || e.getMessage(),
              reportType: r
            }
          }
        }]), t
      }(),
      Qo = function () {
        function e() {
          Ze(this, e)
        }
        return ot(e, null, [{
          key: "codes",
          get: function () {
            return {
              ADS_REQUEST_NETWORK_ERROR: {
                code: 1012,
                get reportType() {
                  return navigator.userAgent.indexOf("Windows") > -1 && (navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("NET") > -1 || navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("Trident") > -1) ? "error" : "blocked"
                }
              },
              VAST_ASSET_NOT_FOUND: {
                code: 1007,
                reportType: "noAd"
              },
              VAST_EMPTY_RESPONSE: {
                code: 1009,
                reportType: "noAd"
              },
              UNKNOWN_AD_RESPONSE: {
                code: 1010,
                reportType: "noAd"
              },
              VAST_NO_ADS_AFTER_WRAPPER: {
                code: 303,
                reportType: "noAd"
              },
              SCHEMA_MISMATCH: {
                code: 9404,
                message: "Schema not recognized.",
                reportType: "schemaError"
              },
              MEDIA_TYPE_MISMATCH: {
                code: 9406,
                message: "Media type not acceptable.",
                reportType: "schemaError"
              },
              DUPLICATE_AD: {
                code: 9901,
                message: "Ad id duplicate.",
                reportType: "duplicateAd"
              },
              IMA_SDK_LOST: {
                code: 9903,
                message: "ima sdk lost.",
                reportType: "blocked"
              },
              HOUSE_AD_IMAGE_ASSET_NOT_FOUND: {
                code: 9905,
                message: "house ad image asset not found.",
                reportType: "error"
              },
              HOUSE_AD_VIDEO_ERROR: {
                code: 9907,
                message: "house ad video error.",
                reportType: "error"
              },
              GET_HOUSE_AD_URL_ERROR: {
                code: 9908,
                message: "get house ad url error.",
                reportType: "error"
              },
              OS_TOO_OLD: {
                code: 9910,
                message: "operating system is too old.",
                reportType: "error"
              },
              CUSTOM_TIMEOUT: {
                code: 9912,
                message: "It took too long time to load ad.",
                reportType: "error"
              }
            }
          }
        }]), e
      }(),
      Zo = function (e) {
        function t(e, n, o) {
          Ze(this, t);
          var r = co(this, (t.__proto__ || gn(t)).call(this));
          r.cdiStaticUrls = {
            s: ["https://cdnstatic-staging.svc.litv.tv/"],
            p: ["https://cdnstatic.svc.litv.tv/"]
          }, /\/staging-/.test(window.location.href) ? r.cdiStaticUrls = r.cdiStaticUrls.s : r.cdiStaticUrls = r.cdiStaticUrls.p, r.adsRequestCancelOperator = {};
          var i = n.offsetWidth / n.offsetHeight;
          return r.imagePool = new Xo(e, n, o, i), r.isPaused = !1, r
        }
        return bo(t, Do), ot(t, [{
          key: "adsRequestAbort",
          value: function (e) {
            var t = this;
            if (e) {
              var n = new RegExp("^" + e + "\\.");
              Bo(this.adsRequestCancelOperator).filter(function (e) {
                return n.test(e)
              }).forEach(function (e) {
                t.adsRequestCancelOperator[e](), delete t.adsRequestCancelOperator[e]
              })
            } else {
              for (var o in this.adsRequestCancelOperator) {
                if (!this.adsRequestCancelOperator.hasOwnProperty(o)) return;
                this.adsRequestCancelOperator[o]()
              }
              this.adsRequestCancelOperator = {}
            }
          }
        }, {
          key: "adsRequest",
          value: function (e) {
            var t = this,
              n = Lo();
            0 == e.is_linear && 0 == e.is_logo ? n = "NB." + n : 1 == e.is_linear && (n = "LA." + n);
            var o = new Ho;
            o.on("Impression", function (e) {
              t.trigger("impression", e)
            }), o.on("Click", function (e) {
              t.trigger("click", e)
            }), o.on("AdMediaComplete", function (e) {
              o.destroy(), o = null
            });
            var r = !1;
            return this.adsRequestCancelOperator[n] = function () {
              r = !0, o.destroy(), o = null
            }, sn.resolve().then(function () {
              var i = /\:\/\//.test(e.data) ? e.data : t.cdiStaticUrls[Math.random() * t.cdiStaticUrls.length >> 0] + "/" + e.data;
              t.testImage(i).then(function (i) {
                r || (o.trigger("Loaded", {
                  meta: i
                }, "HouseImageAd"), t.imagePool.createImage(e, i, o, t.isPaused), delete t.adsRequestCancelOperator[n])
              }).catch(function (e) {
                o.trigger("Error", {
                  error: pn({
                    innerError: e
                  }, Qo.codes.HOUSE_AD_IMAGE_ASSET_NOT_FOUND)
                }, "HouseImageAd"), delete t.adsRequestCancelOperator[n]
              }), o.trigger("Request", {
                requestInfo: {
                  url: i
                }
              }, "HouseImageAd")
            }), o.getChannel()
          }
        }, {
          key: "testImage",
          value: function (e) {
            return /\.svg/.test(e) ? $o(e).then(function (e) {
              return e.text()
            }).then(function (t) {
              var n = (new window.DOMParser).parseFromString(t, "text/xml");
              (n = n.documentElement).style.width = 0, n.style.height = 0, document.body.appendChild(n);
              var o = n.getBBox();
              return document.body.removeChild(n), {
                url: e,
                width: Math.round(o.x + o.width),
                height: Math.round(o.y + o.height)
              }
            }) : new sn(function (t, n) {
              var o = new Image;

              function r() {
                t({
                  url: e,
                  width: o.width,
                  height: o.height
                }), o.removeEventListener("load", r), o.removeEventListener("error", i), o = null
              }

              function i(e) {
                n(e), o.removeEventListener("load", r), o.removeEventListener("error", i), o = null
              }
              o.addEventListener("load", r), o.addEventListener("error", i), o.src = e
            })
          }
        }, {
          key: "closeNonLinearBanner",
          value: function () {
            this.adsRequestAbort("NB"), this.imagePool.closeNonLinearBanner()
          }
        }, {
          key: "remove",
          value: function (e) {
            this.imagePool.remove(e)
          }
        }, {
          key: "stop",
          value: function () {
            this.adsRequestAbort(), this.imagePool.removeAll()
          }
        }, {
          key: "stopLinearAd",
          value: function () {
            this.adsRequestAbort("LA"), this.imagePool.closeLinearBanner()
          }
        }, {
          key: "pause",
          value: function () {
            this.isPaused = !0, this.imagePool.pause()
          }
        }, {
          key: "resume",
          value: function () {
            this.isPaused = !1, this.imagePool.resume()
          }
        }]), t
      }(),
      Xo = function () {
        function e(t, n, o, r) {
          Ze(this, e), this.pool = [], this.logoContainer = t, this.nonlinearImageContainer = n, this.linearImageContainer = o, this.nonlinearContainerRatio = r
        }
        return ot(e, [{
          key: "createImageEl",
          value: function (e, t, n, o, r, i, a, s, l) {
            var u = this,
              c = document.createElement("DIV");
            c.classList.add("c_image"), c.classList.add((n || "MC").toLowerCase()), o ? c.classList.add("trademark") : c.classList.add("internal_banner");
            var d = "";
            if (d = 1 == o || !o && !r ? '<img src="' + t + '" class="image_content" />' : '<div class="image_div image_content" style="background-image:url(\'' + t + "')\"></div>", s && (d = '<a href="' + s + '" target="_blank">' + d + "</a>"), c.innerHTML = d, !o && !r) {
              c.classList.add("nonlinear_ad"), c.style.maxWidth = i + "px", c.style.maxHeight = a + "px";
              var f = i / a;
              c.style.width = "calc(" + i / (a * this.nonlinearContainerRatio) * 100 + "% - " + 7 * f + "em)";
              var p = document.createElement("A");
              p.classList.add("banner_close_btn"), p.href = "javascript:void(0);", p.onclick = function () {
                return u.remove(e)
              }, c.appendChild(p)
            }
            return c.querySelector(".image_content").addEventListener("click", l), c
          }
        }, {
          key: "createImage",
          value: function (e, t, n, o) {
            var r = this,
              i = {
                paused: o
              },
              a = e.uid || Lo(),
              s = this.onClickImage(n, e, i),
              l = this.createImageEl(a, t.url, e.position, e.is_logo, e.is_linear, t.width, t.height, e.click_through, s),
              u = e.is_logo ? this.logoContainer : e.is_linear ? this.linearImageContainer : this.nonlinearImageContainer;
            u.appendChild(l), u.classList.add("ad_impression");
            var c = e.duration || Math.ceil(Math.max((e.end_time || 0) - +new Date, 0) / 1e3);
            n.trigger("AdMediaStart", {
              duration: c
            }, "HouseImageAd"), 1 == e.is_linear && n.trigger("PauseRequested", {}, "HouseImageAd"), n.trigger("Impression", pn(e, {
              file_name: e.data.replace(/^.*[\\\/]/, "")
            }), "HouseImageAd");
            var d = function () {},
              f = function () {},
              p = null;
            if (c > 0) {
              var h = c;
              1 == e.enable_countdown ? (n.trigger("CountdownStart", {
                time: h,
                clickFunction: function () {
                  return n.trigger("ClickSkip", {}, "HouseImageAd")
                }
              }), f = function () {
                p = setInterval(function () {
                  i.paused = !1, 0 == --h ? (clearInterval(p), n.trigger("CountdownEnd"), r.remove(a)) : n.trigger("CountdownProgress", {
                    time: h
                  })
                }, 1e3), n.trigger("Resume", {}, "HouseImageAd")
              }) : f = function () {
                p = setInterval(function () {
                  i.paused = !1, 0 == --h && (clearInterval(p), r.remove(a))
                }, 1e3)
              }, 0 == i.paused && f(), d = function () {
                i.paused = !0, clearInterval(p), p = null, n.trigger("Pause", {}, "HouseImageAd")
              }
            } else n.trigger("Completed", {}, "HouseImageAd");
            var v = this.pool.filter(function (t) {
              return t.position === e.position && t.isLinear === e.is_linear && t.isLogo === e.is_logo
            });
            v.length > 0 && v[v.length - 1].el.classList.add("hide"), i.uid = a, i.el = l, i.container = u, i.position = e.position, i.timerId = p, i.adsChannel = n, i.onClickImage = s, i.isLinear = e.is_linear, i.isLogo = e.is_logo, i.pause = d, i.resume = f, this.pool.push(i)
          }
        }, {
          key: "remove",
          value: function (e) {
            var t = this.pool.find(function (t) {
              return t.uid === e
            });
            if (t) {
              this.pool = this.pool.filter(function (e) {
                return e !== t
              });
              var n = this.pool.filter(function (e) {
                return e.position === t.position && e.isLinear === t.isLinear && e.isLogo === t.isLogo
              });
              n.length > 0 ? n[n.length - 1].el.classList.remove("hide") : t.container.classList.remove("ad_impression"), this.removeImage(t)
            }
          }
        }, {
          key: "removeImage",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e.timerId && (clearInterval(e.timerId), e.timerId = null);
            var n = e.el.querySelector(".banner_close_btn");
            n && (n.onclick = null), e.el.querySelector(".image_content").removeEventListener("click", e.onClickImage), e.container.removeChild(e.el), e.el = null, e.container = null, e.onClickImage = null, t ? e.adsChannel.trigger("Abort") : e.adsChannel.trigger("Completed", {}, "HouseImageAd"), e.adsChannel.trigger("AdMediaComplete", {}, "HouseImageAd"), e.adsChannel.destroy(), e.adsChannel = null
          }
        }, {
          key: "removeAll",
          value: function () {
            var e = this;
            this.pool.forEach(function (t) {
              t.container.classList.remove("ad_impression"), e.removeImage(t, !0)
            }), this.pool = []
          }
        }, {
          key: "onClickImage",
          value: function (e, t, n) {
            return function (o) {
              if (1 == n.paused) return e.trigger("RequestResume", {}, "HouseImageAd"), o.preventDefault(), o.stopImmediatePropagation(), void o.stopPropagation();
              e.trigger("Click", pn(t, {
                file_name: t.data.replace(/^.*[\\\/]/, "")
              }), "HouseImageAd")
            }
          }
        }, {
          key: "closeNonLinearBanner",
          value: function () {
            var e = this.pool.filter(function (e) {
              return 0 == e.isLinear && 0 == e.isLogo
            });
            if (!(e.length < 1)) {
              var t = e[e.length - 1];
              this.remove(t.uid)
            }
          }
        }, {
          key: "closeLinearBanner",
          value: function () {
            var e = this;
            this.pool.forEach(function (t) {
              1 == t.isLinear && e.remove(t.uid)
            })
          }
        }, {
          key: "pause",
          value: function () {
            this.pool.forEach(function (e) {
              return e.pause()
            })
          }
        }, {
          key: "resume",
          value: function () {
            this.pool.forEach(function (e) {
              return e.resume()
            })
          }
        }]), e
      }(),
      er = d.JSON || (d.JSON = {
        stringify: JSON.stringify
      }),
      tr = function (e) {
        return er.stringify.apply(er, arguments)
      },
      nr = r(i(function (e) {
        e.exports = {
          default: tr,
          __esModule: !0
        }
      })),
      or = 2147483647,
      rr = 36,
      ir = 1,
      ar = 26,
      sr = 38,
      lr = 700,
      ur = 72,
      cr = 128,
      dr = "-",
      fr = /^xn--/,
      pr = /[\x2E\u3002\uFF0E\uFF61]/g,
      hr = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      },
      vr = rr - ir,
      mr = Math.floor,
      gr = String.fromCharCode;

    function yr(e) {
      throw new RangeError(hr[e])
    }

    function _r(e, t) {
      for (var n = e.length, o = []; n--;) o[n] = t(e[n]);
      return o
    }

    function br(e, t) {
      var n = e.split("@"),
        o = "";
      return n.length > 1 && (o = n[0] + "@", e = n[1]), o + _r((e = e.replace(pr, ".")).split("."), t).join(".")
    }

    function wr(e) {
      return _r(e, function (e) {
        var t = "";
        return e > 65535 && (t += gr((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + gr(e)
      }).join("")
    }

    function Er(e) {
      return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : rr
    }

    function kr(e, t, n) {
      var o = 0;
      for (e = n ? mr(e / lr) : e >> 1, e += mr(e / t); e > vr * ar >> 1; o += rr) e = mr(e / vr);
      return mr(o + (vr + 1) * e / (e + sr))
    }

    function Cr(e) {
      var t, n, o, r, i, a, s, l, u, c, d = [],
        f = e.length,
        p = 0,
        h = cr,
        v = ur;
      for ((n = e.lastIndexOf(dr)) < 0 && (n = 0), o = 0; o < n; ++o) e.charCodeAt(o) >= 128 && yr("not-basic"), d.push(e.charCodeAt(o));
      for (r = n > 0 ? n + 1 : 0; r < f;) {
        for (i = p, a = 1, s = rr; r >= f && yr("invalid-input"), ((l = Er(e.charCodeAt(r++))) >= rr || l > mr((or - p) / a)) && yr("overflow"), p += l * a, !(l < (u = s <= v ? ir : s >= v + ar ? ar : s - v)); s += rr) a > mr(or / (c = rr - u)) && yr("overflow"), a *= c;
        v = kr(p - i, t = d.length + 1, 0 == i), mr(p / t) > or - h && yr("overflow"), h += mr(p / t), p %= t, d.splice(p++, 0, h)
      }
      return wr(d)
    }
    var Tr = function (e) {
        return br(e, function (e) {
          return fr.test(e) ? Cr(e.slice(4).toLowerCase()) : e
        })
      },
      Sr = function (e) {
        function t(e) {
          Ze(this, t);
          var n = co(this, (t.__proto__ || gn(t)).call(this));
          return n.container = e, n.callbackId = "fpCallback" + ("" + Math.random()).slice(3, 15), n.api = null, n.pollInterval = null, n.currentTime = 0, n._volumeLevel = 1, n._volumeLevel_2 = 1, n._muted = !1, n._paused = !0, n._dataset = {}, n
        }
        return bo(t, Do), ot(t, [{
          key: "createFlashPlayer",
          value: function (e) {
            var t = this;
            e = this.escapeURL(e);
            var n = {
                hostname: Tr(window.location.hostname),
                url: e,
                callback: this.callbackId,
                autoplay: !0,
                initialVolume: this._volumeLevel,
                rtmp: "rtmp://cdn.flowplayer.org"
              },
              o = this.embed(this.swfHls, n, this.container);
            this.api = o, window[this.callbackId] = function (e, n) {
              switch (e) {
                case "ready":
                  o.__volume(t._volumeLevel), t.trigger("ready");
                  break;
                case "pause":
                  t._paused = !0, t.trigger("pause");
                  break;
                case "play":
                  t._paused = !1, t.trigger("play");
                  break;
                case "resume":
                  t._paused = !1, t.trigger("resume");
                  break;
                case "finish":
                  clearInterval(t.pollInterval), t.trigger("finish");
                  break;
                case "error":
                  t.trigger("error", {
                    target: {
                      error: n
                    }
                  });
                  break;
                case "click":
                  t.trigger("click")
              }
            }
          }
        }, {
          key: "load",
          value: function (e) {
            var t = this;
            null == this.api ? this.createFlashPlayer(e) : this.api.__play(e, !0), clearInterval(this.pollInterval), this.pollInterval = setInterval(function () {
              if (t.api) {
                var e = t.api.__status ? t.api.__status() : null;
                e && t.currentTime != e.time && (t.currentTime = e.time, t.trigger("timeupdate"))
              }
            }, 250)
          }
        }, {
          key: "stop",
          value: function () {
            clearInterval(this.pollInterval), this.pause()
          }
        }, {
          key: "escapeURL",
          value: function (e) {
            return e.replace(/&amp;/g, "%26").replace(/&/g, "%26").replace(/=/g, "%3D")
          }
        }, {
          key: "embed",
          value: function (e, t, n) {
            var o = "obj" + ("" + Math.random()).slice(2, 15),
              r = '<object class="fp-engine" id="' + o + '" name="' + o + '" ',
              i = navigator.userAgent.indexOf("MSIE") > -1;
            r += i ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' : ' data="' + e + '" type="application/x-shockwave-flash">';
            var a = {
              width: "100%",
              height: "100%",
              allowscriptaccess: "always",
              wmode: "opaque",
              quality: "high",
              flashvars: "",
              movie: e + (i ? "?" + o : ""),
              name: o,
              bgcolor: "#333333"
            };
            Bo(t).forEach(function (e) {
              a.flashvars += e + "=" + t[e] + "&"
            }), Bo(a).forEach(function (e) {
              r += '<param name="' + e + '" value="' + a[e] + '"/>'
            }), r += "</object>";
            var s = document.createElement("DIV");
            s.innerHTML = r;
            var l = s.firstChild;
            return n.appendChild(l), l
          }
        }, {
          key: "play",
          value: function () {
            this.resume()
          }
        }, {
          key: "pause",
          value: function () {
            this.api && this.api.__pause()
          }
        }, {
          key: "resume",
          value: function () {
            this.api && this.api.__resume()
          }
        }, {
          key: "destroy",
          value: function () {}
        }, {
          key: "volume",
          get: function () {
            return this._volumeLevel
          },
          set: function (e) {
            this._volumeLevel = this._volumeLevel_2 = e, this._muted = !1, this.api && this.api.__volume(e)
          }
        }, {
          key: "muted",
          get: function () {
            return this._muted
          },
          set: function (e) {
            this.api && (1 == e && 0 == this._muted ? (this._volumeLevel = 0, this.api.__volume(0), this._muted = !0) : 0 == e && 1 == this._muted && (this._volumeLevel = this._volumeLevel_2, this.api.__volume(this._volumeLevel), this._muted = !1))
          }
        }, {
          key: "duration",
          get: function () {
            return this.api.__status().duration
          }
        }, {
          key: "paused",
          get: function () {
            return this._paused
          }
        }, {
          key: "dataset",
          get: function () {
            return this._dataset
          }
        }]), t
      }(),
      Ar = function () {
        function e(t, n, o) {
          Ze(this, e), this.container = t, this.contentPlayerProxy = n, this.adsSessionChannel = null, this.adsRequestAbort = function () {}, this.hls = null, this.player = null, this.source = null, this.volume = -1, this.muted = !1, this.isPaused = !1, this.isStarted = !1, this.triggerUserAction = this.triggerUserAction.bind(this), this.triggerPlay = this.triggerPlay.bind(this), this.onCanplay = this.onCanplay.bind(this), this.onEnded = this.onEnded.bind(this), this.onError = this.onError.bind(this), this.onTimeupdate = this.onTimeupdate.bind(this), this.onClickVideo = this.onClickVideo.bind(this), this.onPause = this.onPause.bind(this), this.onResume = this.onResume.bind(this), this.triggerPauseTimerId = null, this.urlConfig = {
            s: ["https://s-proxy01.svc.litv.tv/cdi/v2/rpc", "https://s-proxy01.svc.litv.tv/cdi/v2/rpc"],
            p: ["https://twproxy01.svc.litv.tv/cdi/v2/rpc", "https://twproxy02.svc.litv.tv/cdi/v2/rpc", "https://twproxy03.svc.litv.tv/cdi/v2/rpc"]
          }, /\/staging-/.test(window.location.href) || /\/s-/.test(window.location.href) || /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/.test(window.location.href) ? this.urlConfig = this.urlConfig.s : this.urlConfig = this.urlConfig.p, this.enableCountdown = null, this.playerEngines = null;
          var r = navigator.userAgent.toLowerCase();
          this.needHlsJs = !(/iP(hone|od|ad)/i.test(r) || /Safari/.exec(r) && !/Chrome/.exec(r)), this.useFlash = !1, 1 != this.needHlsJs || window.Hls.isSupported() && !o.isXP && !o.isVista || (this.useFlash = !0), this.triggerUserAction = this.triggerUserAction(), this.createPlayer(t)
        }
        return ot(e, [{
          key: "createPlayer",
          value: function (e) {
            var t = this;
            if (0 == this.useFlash) {
              this.hls = new Hls;
              var n = document.createElement("video");
              n.classList.add("house_video"), n.setAttribute("webkit-playsinline", "true"), n.setAttribute("playsinline", "true");
              var o = document.createElement("source");
              n.appendChild(o), n.addEventListener("canplay", this.onCanplay), n.addEventListener("ended", this.onEnded), n.addEventListener("error", this.onError), n.addEventListener("timeupdate", this.onTimeupdate), n.addEventListener("click", this.onClickVideo), n.addEventListener("pause", this.onPause), n.addEventListener("play", this.onResume), e.appendChild(n), this.player = n, this.source = o, this.hls.on(Hls.Events.ERROR, function (e, n) {
                t.onError({
                  target: {
                    error: n
                  }
                })
              }), this.hls.on(Hls.Events.MANIFEST_PARSED, function (e, n) {
                t.hls.attachMedia(t.player), t.triggerPlay()
              })
            } else this.player = new Sr(e), this.player.on("ready", this.triggerPlay), this.player.on("finish", this.onEnded), this.player.on("timeupdate", this.onTimeupdate), this.player.on("click", this.onClickVideo), this.player.on("error", this.onError), this.player.on("pause", this.onPause), this.player.on("resume", this.onResume)
          }
        }, {
          key: "setUpVolume",
          value: function () {
            this.muted = this.contentPlayerProxy.muted, this.volume = this.muted ? 1 : this.contentPlayerProxy.volume;
            var e = this.muted ? 0 : this.volume;
            this.player.volume = e, this.player.muted = this.muted
          }
        }, {
          key: "onCanplay",
          value: function () {
            "hls.js" !== this.playerEngines && this.triggerPlay()
          }
        }, {
          key: "triggerPlay",
          value: function () {
            0 == this.isPaused && this.play()
          }
        }, {
          key: "play",
          value: function () {
            var e = this;
            this.isStarted = !0;
            var t = this.player.play();
            void 0 !== t && "function" == typeof t.then ? t.then(function () {
              return e.onPlaySuccess()
            }).catch(function (t) {
              console.warn("played fail", t), e.adsSessionChannel.trigger("Error", {
                error: pn({
                  innerError: t
                }, Qo.codes.HOUSE_AD_VIDEO_ERROR)
              }, "HouseVideoAd")
            }) : this.onPlaySuccess()
          }
        }, {
          key: "onPlaySuccess",
          value: function () {
            var e = this;
            this.container.classList.add("ad_impression");
            var t = this.player.duration >> 0;
            this.adsSessionChannel.trigger("PauseRequested", {}, "HouseVideoAd"), this.adsSessionChannel.trigger("AdMediaStart", {
              duration: t
            }, "HouseVideoAd"), this.adsSessionChannel.trigger("Impression", {}, "HouseVideoAd"), 1 == this.enableCountdown && this.adsSessionChannel.trigger("CountdownStart", {
              time: t,
              clickFunction: function () {
                return e.adsSessionChannel.trigger("ClickSkip", {}, "HouseVideoAd")
              }
            })
          }
        }, {
          key: "onEnded",
          value: function () {
            clearInterval(this.triggerPauseTimerId), 1 == this.enableCountdown && this.adsSessionChannel.trigger("CountdownEnd"), this.adsSessionChannel.trigger("Completed", {}, "HouseVideoAd"), this.adsSessionChannel.trigger("AdMediaComplete", {}, "HouseVideoAd"), this.stopPlayer(), this.adsSessionChannel.destroy(), this.adsSessionChannel = null
          }
        }, {
          key: "onError",
          value: function (e) {
            var t = {
                error: pn({
                  innerError: e.target.error
                }, Qo.codes.HOUSE_AD_VIDEO_ERROR)
              },
              n = (((e || {}).target || {}).error || {}).fatal;
            t.fatal = n, !1 === n ? (console.warn("onError", e), null !== this.adsSessionChannel && this.adsSessionChannel.trigger("Error", t, "HouseVideoAd")) : (console.error("onError", e), this.stopPlayer(), null !== this.adsSessionChannel && (this.adsSessionChannel.trigger("Error", t, "HouseVideoAd"), this.adsSessionChannel.trigger("AdMediaComplete", {}, "HouseVideoAd"), this.adsSessionChannel.destroy(), this.adsSessionChannel = null))
          }
        }, {
          key: "stopPlayer",
          value: function () {
            return null != this.player && (this.player.pause(), "hls.js" == this.playerEngines ? this.hls.detachMedia() : "native" == this.playerEngines ? (this.source.src = "", this.source.removeAttribute("type"), this.player.load()) : "flash" == this.playerEngines && this.player.stop(), this.container.classList.remove("ad_impression"), !0)
          }
        }, {
          key: "onTimeupdate",
          value: function () {
            this.enableCountdown && this.adsSessionChannel && this.adsSessionChannel.trigger("CountdownProgress", {
              time: this.player.duration - this.player.currentTime >> 0
            })
          }
        }, {
          key: "onClickVideo",
          value: function (e) {
            if (this.player.paused) this.adsSessionChannel.trigger("RequestResume", {}, "HouseVideoAd");
            else {
              var t = this.player.dataset.clickThrough;
              void 0 !== t && "" !== t && window.open(t, "_blank").focus(), this.adsSessionChannel.trigger("Click", e, "HouseVideoAd")
            }
          }
        }, {
          key: "onPause",
          value: function (e) {
            var t = this;
            this.triggerPauseTimerId = setTimeout(function () {
              t.adsSessionChannel && t.adsSessionChannel.trigger("Pause", {
                innerEvent: e
              }, "HouseVideoAd")
            }, 12)
          }
        }, {
          key: "onResume",
          value: function (e) {
            this.adsSessionChannel && this.adsSessionChannel.trigger("Resume", {
              innerEvent: e
            }, "HouseVideoAd")
          }
        }, {
          key: "getAdURLs",
          value: function (e) {
            return $o(this.urlConfig[Math.random() * this.urlConfig.length >> 0], {
              method: "POST",
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
              },
              body: nr({
                id: jo.get(),
                jsonrpc: "2.0",
                method: "LoadService.GetAdURLs",
                params: {
                  AssetId: e,
                  DeviceType: "pc"
                }
              })
            }).then(function (e) {
              if (!e.ok) throw new Error(e.statusText);
              return e.json()
            }).then(function (e) {
              if (e.error) {
                var t = new Error(e.error.message);
                throw t.code = e.error.code, t
              }
              return {
                url: e.result.AssetURLs[0],
                more: e.result
              }
            })
          }
        }, {
          key: "adsRequest",
          value: function (e) {
            var t = this;
            this.adsRequestAbort(), this.setUpVolume(), this.player.dataset.clickThrough = e.click_through || "", this.enableCountdown = e.enable_countdown;
            var n = e.data;
            this.adsSessionChannel && this.adsSessionChannel.destroy(), this.adsSessionChannel = new Ho;
            var o = !1;
            return this.adsRequestAbort = function () {
              o = !0
            }, sn.resolve().then(function () {
              t.getAdURLs(n).then(function (e) {
                o || (t.adsSessionChannel.trigger("Loaded", {
                  meta: e.more
                }, "HouseVideoAd"), t.load(e.url))
              }).catch(function (e) {
                console.log(e), t.adsSessionChannel.trigger("Error", {
                  error: pn({
                    innerError: e
                  }, Qo.codes.GET_HOUSE_AD_URL_ERROR)
                })
              }), t.adsSessionChannel.trigger("Request", {
                requestInfo: {
                  assetId: n
                }
              }, "HouseVideoAd")
            }), this.adsSessionChannel.getChannel()
          }
        }, {
          key: "load",
          value: function (e) {
            1 == this.useFlash ? (this.player.load(e), this.playerEngines = "flash") : /\.m3u8/.test(e) ? this.needHlsJs ? (this.playerEngines = "hls.js", this.hls.loadSource(e)) : (this.playerEngines = "native", this.source.src = e, this.source.type = "application/x-mpegurl", this.player.load()) : /\.mp4/.test(e) && (this.playerEngines = "native", this.source.src = e, this.source.type = "video/mp4", this.player.load())
          }
        }, {
          key: "pause",
          value: function () {
            this.isPaused = !0, 1 == this.isStarted && this.player.pause()
          }
        }, {
          key: "resume",
          value: function () {
            this.isPaused = !1, 0 == this.isStarted ? this.play() : this.player.play()
          }
        }, {
          key: "stop",
          value: function () {
            this.adsRequestAbort(), this.stopPlayer() && null != this.adsSessionChannel && this.adsSessionChannel.trigger("Abort")
          }
        }, {
          key: "mute",
          value: function (e) {
            e !== this.muted && (this.muted = e, null != this.player && (1 == e ? (this.volume = this.player.volume, this.player.volume = 0) : this.player.volume = this.volume, this.player.muted = e))
          }
        }, {
          key: "setVolume",
          value: function (e) {
            this.volume = e, null != this.player && (this.player.volume = e)
          }
        }, {
          key: "getVolume",
          value: function () {
            return null == this.player ? this.volume : this.player.volume
          }
        }, {
          key: "triggerUserAction",
          value: function () {
            var e = !1;
            return function () {
              if (1 != e) {
                e = !0;
                var t = this.player.play();
                t && "function" == typeof t.catch && t.catch(function (e) {
                  return console.warn(e)
                })
              }
            }
          }
        }]), e
      }(),
      Ir = function (e) {
        function t(e, n, o) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8e3;
          Ze(this, t);
          var i = co(this, (t.__proto__ || gn(t)).call(this));
          i.isOldWindows = o.isXP || o.isVista, i.adsRequestSessions = [], i.volumeSetted = !1, i.muted = !1, i.volume = -1, i.isPaused = !1, i.extraReplacement = [], i.autoPlayState = {
            autoplayAllowed: !0,
            autoplayRequiresMuted: !1
          }, i.requestTimeoutMS = r, i.vpaidMode = "ENABLE", localStorage.getItem("lp_vpaidMode") && (i.vpaidMode = localStorage.getItem("lp_vpaidMode"));
          try {
            google.ima
          } catch (e) {
            return console.error('May have "ad block"'), i.adsRequest = i.adsRequestWhenAdBlock, co(i)
          }
          return "INSECURE" == i.vpaidMode ? google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE) : google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLE), google.ima.settings.setLocale("zh-TW"), i.adContainer = e, i.contentPlayerProxy = n, i.adDisplayContainer = new google.ima.AdDisplayContainer(e), i.adDisplayContainer.initialize(), i.onAdsManagerLoaded = i.onAdsManagerLoaded(n).bind(i), i.adsLoader = new google.ima.AdsLoader(i.adDisplayContainer), i.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, i.onAdsManagerLoaded, !1), i.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, i.onAdsLoaderError.bind(i), !1), i.triggerUserAction = i.triggerUserAction(), i
        }
        return bo(t, Do), ot(t, [{
          key: "onAdsManagerLoaded",
          value: function (e) {
            return function (t) {
              var n = new google.ima.AdsRenderingSettings;
              n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.bitrate = -1, n.enablePreloading = !0, n.loadVideoTimeout = 8e3;
              var o = t.getAdsManager(e, n),
                r = this.adContainer.offsetWidth,
                i = this.adContainer.offsetHeight,
                a = e.isFullscreen ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL,
                s = this.adsRequestSessions.find(function (e) {
                  return !e.hasAdsManager
                });
              void 0 !== s && s.setAdsManager(o, r, i, a)
            }
          }
        }, {
          key: "onAdsLoaderError",
          value: function (e) {
            var t = new Jo(e.getError());
            this.adsRequestSessions[0] && this.adsRequestSessions[0].triggerChannel("Error", {
              error: t
            }, "IMA"), this.sessionComplete(e)
          }
        }, {
          key: "sessionComplete",
          value: function (e) {
            var t = this.adsRequestSessions.shift();
            this.adsRequestSessions.length > 0 && this.adsRequestSessions[0].request(), t && t.destroy()
          }
        }, {
          key: "onPauseRequested",
          value: function (e) {
            this.adContainer.classList.add("ad_impression"), 1 == this.adsRequestSessions.length && this.adsRequestSessions[0].triggerChannel("PauseRequested", e, "IMA")
          }
        }, {
          key: "onImpression",
          value: function (e) {
            this.adsRequestSessions[0].triggerChannel("Impression", e, "IMA")
          }
        }, {
          key: "onAllAdsCompleted",
          value: function (e) {
            1 == this.adsRequestSessions.length && (this.adContainer.classList.remove("ad_impression"), this.adsRequestSessions[0].triggerChannel("Completed", e, "IMA")), this.sessionComplete(e)
          }
        }, {
          key: "onAdsManagerError",
          value: function (e) {
            1 == this.adsRequestSessions.length && this.adContainer.classList.remove("ad_impression"), this.sessionComplete(e)
          }
        }, {
          key: "adsRequestWhenAdBlock",
          value: function () {
            var e = new Ho;
            return sn.resolve().then(function () {
              var t = new Jo(Qo.codes.IMA_SDK_LOST);
              e.trigger("Error", {
                error: t
              }, "IMA"), e.destroy()
            }), e.getChannel()
          }
        }, {
          key: "buildUpAdTagUrl",
          value: function (e) {
            var t = String(+new Date),
              n = encodeURIComponent(location.href),
              o = encodeURIComponent(navigator.userAgent),
              r = e.replace(/\[timestamp\]/, t).replace(/\[CACHEBUSTING\]/, t).replace(/\[CACHE_BREAKER\]/, t).replace(/\[pageurl\]/, n).replace(/\[referrer_url\]/, n).replace(/\[description_url\]/, n).replace(/\[urlencodedpageURL\]/, n).replace(/\[EMBEDDING_PAGE_URL\]/, n).replace(/\[urlencodedvideoURL\]/, n).replace(/\[playerwidth\]/, this.adContainer.offsetWidth).replace(/\[playerheight\]/, this.adContainer.offsetHeight).replace(/\[osversion\]/, encodeURIComponent(navigator.appVersion)).replace(/\[ua\]/, o).replace(/\[useragent\]/, o).replace(/\[networkconnectiontype\]/, "u").replace(/\[cellcarrier\]/, "litv");
            return this.extraReplacement.forEach(function (e) {
              r = r.replace(e.target, e.newValue)
            }), r
          }
        }, {
          key: "notifyContentComplete",
          value: function () {
            return this.adsLoader && this.adsLoader.contentComplete(), this
          }
        }, {
          key: "adsRequest",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            this.notifyContentComplete();
            var n = new google.ima.AdsRequest;
            e.isAdsResponse ? n.adsResponse = e.data : e.doNotReplace ? n.adTagUrl = e.data : n.adTagUrl = this.buildUpAdTagUrl(e.data), this.volumeSetted || (this.muted = this.contentPlayerProxy.muted, this.volume = .5 * (this.muted ? 1 : this.contentPlayerProxy.volume), this.volumeSetted = !0);
            var o = this.muted ? 0 : this.volume,
              r = new Pr(this.adsLoader, n, this.adContainer, e.enable_countdown, o, this.isPaused, t, e.adSource, this.autoPlayState, this.requestTimeoutMS);
            return r.one("PauseRequested", this.onPauseRequested.bind(this)), r.one("Impression", this.onImpression.bind(this)), r.one("AllAdsCompleted", this.onAllAdsCompleted.bind(this)), r.one("Error", this.onAdsManagerError.bind(this)), this.adsRequestSessions.push(r), 1 == this.adsRequestSessions.length && sn.resolve().then(r.request), r.getChannel()
          }
        }, {
          key: "resize",
          value: function () {
            var e = this.adsRequestSessions[0];
            if (void 0 !== e) {
              var t = this.adContainer.offsetWidth,
                n = this.adContainer.offsetHeight,
                o = this.contentPlayerProxy.isFullscreen;
              e.resize(t, n, o ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
            }
            return this
          }
        }, {
          key: "pause",
          value: function () {
            this.isPaused = !0, 0 != this.adsRequestSessions.length && this.adsRequestSessions[0].pause()
          }
        }, {
          key: "resume",
          value: function () {
            this.isPaused = !1, 0 != this.adsRequestSessions.length && this.adsRequestSessions[0].resume()
          }
        }, {
          key: "stop",
          value: function () {
            0 != this.adsRequestSessions.length && (this.adsRequestSessions[0].stop(), this.adsRequestSessions.forEach(function (e) {
              e.destroy()
            }), this.adsRequestSessions = [], this.adContainer.classList.remove("ad_impression"))
          }
        }, {
          key: "mute",
          value: function (e) {
            var t = this;
            e !== this.muted && (this.muted = e, 0 != this.adsRequestSessions.length && (1 == e ? (this.volume = this.adsRequestSessions[0].getVolume(), this.adsRequestSessions.forEach(function (e) {
              e.setVolume(0)
            })) : this.adsRequestSessions.forEach(function (e) {
              e.setVolume(t.volume)
            })))
          }
        }, {
          key: "setVolume",
          value: function (e) {
            this.volume = e, 0 != this.adsRequestSessions.length && this.adsRequestSessions.forEach(function (t) {
              t.setVolume(e)
            })
          }
        }, {
          key: "getVolume",
          value: function () {
            return 0 == this.adsRequestSessions.length ? this.volume : this.adsRequestSessions[0].getVolume()
          }
        }, {
          key: "triggerUserAction",
          value: function () {
            var e = !1;
            return function () {
              1 != e && (e = !0, this.autoPlayState.autoplayAllowed = !0, this.autoPlayState.autoplayAllowed = !1, pt(this.adContainer.querySelectorAll("video")).map(function (e) {
                return e.play()
              }).filter(function (e) {
                return Boolean(e)
              }).forEach(function (e) {
                return e.catch(function (e) {
                  return console.warn(e)
                })
              }))
            }
          }
        }, {
          key: "setExcludeAdIds",
          value: function (e) {
            var t = this;
            return {
              adsRequest: function (n) {
                return t.adsRequest(n, e)
              },
              pause: this.pause.bind(this),
              resume: this.resume.bind(this)
            }
          }
        }, {
          key: "setReplacement",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            Array.isArray(e) ? this.extraReplacement = e : this.extraReplacement = []
          }
        }, {
          key: "setAutoPlayState",
          value: function (e) {
            this.autoPlayState = e
          }
        }, {
          key: "getCurrentAdInfo",
          value: function () {
            return this.adsRequestSessions.length > 0 ? this.adsRequestSessions[0].getAdInfo() : null
          }
        }, {
          key: "setVpaidModeToInsecure",
          value: function () {
            this.vpaidMode = "INSECURE", localStorage.setItem("lp_vpaidMode", "INSECURE"), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE)
          }
        }, {
          key: "setVpaidModeToEnable",
          value: function () {
            this.vpaidMode = "ENABLE", localStorage.setItem("lp_vpaidMode", "ENABLE"), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLE)
          }
        }, {
          key: "getVpaidMode",
          value: function () {
            return this.vpaidMode
          }
        }]), t
      }(),
      Pr = function (e) {
        function t(e, n, o, r, i, a, s, l, u, c) {
          Ze(this, t);
          var d = co(this, (t.__proto__ || gn(t)).call(this));
          d.adsLoader = e, d.adsRequest = n, d.adContainer = o, d.enableCountdown = r, d.adsManager = null, d.request = d.request.bind(d), d.adInfo = null, d.onClickSkip = d.onClickSkip.bind(d), d.requestResume = d.requestResume.bind(d), d.adsSessionChannel = new Ho, d.volume = i, d.isPaused = a, d.excludeAdIds = s, d.isStarted = !1, d.width = 0, d.height = 0, d.viewMode = google.ima.ViewMode.NORMAL, d.adSource = (l || "").toUpperCase(), d.autoPlayState = u, d.requestTimeoutMS = c, d.timeoutId = null;
          var f = {};
          return f[google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED] = d.onPauseRequested.bind(d), f[google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED] = d.onResumeRequested.bind(d), f[google.ima.AdEvent.Type.IMPRESSION] = d.onImpression.bind(d), f[google.ima.AdEvent.Type.ALL_ADS_COMPLETED] = d.onAllAdsCompleted.bind(d), f[google.ima.AdErrorEvent.Type.AD_ERROR] = d.onAdsManagerError.bind(d), f[google.ima.AdEvent.Type.STARTED] = d.onStarted.bind(d), f[google.ima.AdEvent.Type.LOADED] = d.onLoaded.bind(d), f[google.ima.AdEvent.Type.CLICK] = d.onClick.bind(d), f[google.ima.AdEvent.Type.AD_BREAK_READY] = null, f[google.ima.AdEvent.Type.AD_METADATA] = null, f[google.ima.AdEvent.Type.COMPLETE] = null, f[google.ima.AdEvent.Type.DURATION_CHANGE] = null, f[google.ima.AdEvent.Type.FIRST_QUARTILE] = null, f[google.ima.AdEvent.Type.INTERACTION] = null, f[google.ima.AdEvent.Type.LINEAR_CHANGED] = null, f[google.ima.AdEvent.Type.LOG] = null, f[google.ima.AdEvent.Type.MIDPOINT] = null, f[google.ima.AdEvent.Type.PAUSED] = d.onPuase.bind(d), f[google.ima.AdEvent.Type.RESUMED] = d.onResume.bind(d), f[google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED] = null, f[google.ima.AdEvent.Type.SKIPPED] = null, f[google.ima.AdEvent.Type.THIRD_QUARTILE] = null, f[google.ima.AdEvent.Type.USER_CLOSE] = null, f[google.ima.AdEvent.Type.VOLUME_CHANGED] = null, f[google.ima.AdEvent.Type.VOLUME_MUTED] = null, d.managerEvents = d.setUpManagerEvents(f, d.decorationEventListener), d.checkRemainingTimeId = null, d
        }
        return bo(t, Do), ot(t, [{
          key: "onPauseRequested",
          value: function () {
            return function (e) {
              this.terminationTimeout();
              var t = ["getAd", "getDuration"].reduce(function (e, t) {
                return -1 !== e && e && e[t] ? e[t]() : -1
              }, e);
              this.trigger("PauseRequested", {
                innerEvent: e
              }), this.triggerChannel("AdMediaStart", {
                duration: t
              }, "IMA")
            }.bind(this)
          }
        }, {
          key: "onResumeRequested",
          value: function () {
            return function (e) {
              this.triggerChannel("AdMediaComplete", {}, "IMA")
            }.bind(this)
          }
        }, {
          key: "onImpression",
          value: function () {
            return function (e) {
              this.trigger("Impression", {
                innerEvent: e
              })
            }.bind(this)
          }
        }, {
          key: "onAllAdsCompleted",
          value: function () {
            return function (e) {
              this.terminationTimeout(), this.trigger("AllAdsCompleted", {
                innerEvent: e
              })
            }.bind(this)
          }
        }, {
          key: "onAdsManagerError",
          value: function () {
            return function (e) {
              this.terminationTimeout();
              var t = new Jo(e.getError());
              this.triggerError(t)
            }.bind(this)
          }
        }, {
          key: "onStarted",
          value: function () {
            var e = !1;
            return function (t) {
              var n = this;
              if (!e && this.enableCountdown) {
                if (t.getAd().isLinear()) {
                  var o = !1,
                    r = this.adsManager.getRemainingTime() >> 0;
                  r > -1 && (o = !0, this.triggerChannel("CountdownStart", {
                    time: r,
                    clickFunction: this.onClickSkip
                  })), this.checkRemainingTimeId = setInterval(function () {
                    (r = n.adsManager.getRemainingTime() >> 0) > -1 ? (o || (n.triggerChannel("CountdownStart", {
                      time: r,
                      clickFunction: n.onClickSkip
                    }), o = !0), n.triggerChannel("CountdownProgress", {
                      time: r
                    })) : (clearInterval(n.checkRemainingTimeId), n.checkRemainingTimeId = null, o && n.triggerChannel("CountdownEnd"))
                  }, 500)
                }
                e = !0
              }
            }.bind(this)
          }
        }, {
          key: "onLoaded",
          value: function () {
            return function (e) {
              var t = e.getAd().getAdId() + "##" + e.getAd().getCreativeId();
              if ("AOL" != this.adSource && this.excludeAdIds.includes(t)) {
                var n = new Jo(Qo.codes.DUPLICATE_AD);
                this.triggerError(n)
              } else this.adsManager.setVolume(this.volume), 0 == this.isPaused ? (this.isStarted = !0, this.adsManager.start()) : this.adsManager.pause(), this.adInfo = this.exportAdInfo(e.getAd()), this.triggerChannel("Loaded", {
                adId: t,
                meta: this.adInfo,
                innerEvent: e
              }, "IMA")
            }.bind(this)
          }
        }, {
          key: "onClick",
          value: function () {
            return function (e) {
              this.triggerChannel("Click", {
                innerEvent: e
              }, "IMA")
            }.bind(this)
          }
        }, {
          key: "onPuase",
          value: function () {
            return function (e) {
              this.adContainer.addEventListener("click", this.requestResume, !0), this.triggerChannel("Pause", {
                innerEvent: e
              }, "IMA")
            }.bind(this)
          }
        }, {
          key: "onResume",
          value: function () {
            return function (e) {
              this.adContainer.removeEventListener("click", this.requestResume, !0), this.triggerChannel("Resume", {
                innerEvent: e
              }, "IMA")
            }.bind(this)
          }
        }, {
          key: "onClickSkip",
          value: function () {
            this.triggerChannel("ClickSkip", {}, "IMA")
          }
        }, {
          key: "requestResume",
          value: function (e) {
            e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.triggerChannel("RequestResume", {}, "IMA")
          }
        }, {
          key: "exportAdInfo",
          value: function (e) {
            for (var t in e)
              if (e.hasOwnProperty(t) && "object" === uo(e[t]) && "adId" in e[t]) return pn({}, e[t])
          }
        }, {
          key: "decorationEventListener",
          value: function (e) {
            return "function" == typeof e && (e = e()),
              function (t) {
                "function" == typeof e && e.apply(this, arguments)
              }
          }
        }, {
          key: "setUpManagerEvents",
          value: function (e, t) {
            var n = this,
              o = {};
            return Bo(e).forEach(function (r) {
              o[r] = t(e[r]).bind(n)
            }), o
          }
        }, {
          key: "triggerChannel",
          value: function (e) {
            for (var t, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
            (t = this.adsSessionChannel).trigger.apply(t, [e].concat(o))
          }
        }, {
          key: "triggerError",
          value: function (e) {
            this.triggerChannel("Error", {
              error: e
            }, "IMA"), this.trigger("Error", {
              error: e
            })
          }
        }, {
          key: "getChannel",
          value: function () {
            return this.adsSessionChannel.getChannel()
          }
        }, {
          key: "setTerminationTime",
          value: function () {
            var e = this;
            this.requestTimeoutMS < 0 || (this.timeoutId = setTimeout(function () {
              null != e.adsManager && e.adsManager.stop();
              var t = new Jo(Qo.codes.CUSTOM_TIMEOUT);
              e.triggerError(t)
            }, this.requestTimeoutMS))
          }
        }, {
          key: "terminationTimeout",
          value: function () {
            null != this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null)
          }
        }, {
          key: "request",
          value: function () {
            if (1 == this.isOldWindows && "AOL" == this.adSource) {
              var e = new Jo(Qo.codes.OS_TOO_OLD);
              return this.triggerError(e), this
            }
            var t = this.adContainer.offsetWidth,
              n = this.adContainer.offsetHeight;
            return this.adsRequest.linearAdSlotWidth = t, this.adsRequest.linearAdSlotHeight = n, this.adsRequest.nonLinearAdSlotWidth = t, this.adsRequest.nonLinearAdSlotHeight = n, this.adsRequest.setAdWillAutoPlay(this.autoPlayState.autoplayAllowed), this.adsRequest.setAdWillPlayMuted(this.autoPlayState.autoplayRequiresMuted), this.adsLoader.requestAds(this.adsRequest), this.setTerminationTime(), this.triggerChannel("Request", {
              requestInfo: this.adsRequest
            }, "IMA"), this
          }
        }, {
          key: "setAdsManager",
          value: function (e, t, n, o) {
            if (null != this.adsManager) throw "Repeat execution";
            for (var r in this.managerEvents) this.managerEvents.hasOwnProperty && e.addEventListener(r, this.managerEvents[r], !1);
            return e.init(t, n, o), "AOL" == this.adSource && e.start(), this.width = t, this.height = n, this.viewMode = o, this.adsManager = e, this
          }
        }, {
          key: "resize",
          value: function (e, t, n) {
            return this.width = e, this.height = t, this.viewMode = n, null != this.adsManager && this.adsManager.resize(e, t, n), this
          }
        }, {
          key: "pause",
          value: function () {
            this.isPaused = !0, 1 == this.isStarted && this.adsManager.pause()
          }
        }, {
          key: "resume",
          value: function () {
            this.isPaused = !1, 0 == this.isStarted ? (this.isStarted = !0, this.adsManager.start()) : (this.adsManager.resume(), this.triggerChannel("Resume", {}, "IMA"))
          }
        }, {
          key: "stop",
          value: function () {
            return null != this.adsManager && (this.adsManager.stop(), this.triggerChannel("Abort")), this
          }
        }, {
          key: "setVolume",
          value: function (e) {
            return null != this.adsManager && (this.volume = e, this.adsManager.setVolume(e)), this
          }
        }, {
          key: "getVolume",
          value: function () {
            return this.volume
          }
        }, {
          key: "getAdInfo",
          value: function () {
            return this.adInfo
          }
        }, {
          key: "destroy",
          value: function () {
            if (this.terminationTimeout(), null != this.checkRemainingTimeId && (clearInterval(this.checkRemainingTimeId), this.triggerChannel("CountdownEnd")), this.events = {}, null != this.adsManager) {
              for (var e in this.managerEvents) this.managerEvents.hasOwnProperty && this.adsManager.removeEventListener(e, this.managerEvents[e], !1);
              this.adsManager.discardAdBreak(), this.adsManager.destroy(), this.adsManager = null
            }
            null != this.adsSessionChannel && (this.adsSessionChannel.destroy(), this.adsSessionChannel = null), this.managerEvents = null, this.adsLoader = null, this.adsRequest = null, this.adContainer = null, this.adInfo = null
          }
        }, {
          key: "hasAdsManager",
          get: function () {
            return null != this.adsManager
          }
        }]), t
      }(),
      Or = ie("iterator"),
      xr = d.isIterable = function (e) {
        var t = Object(e);
        return void 0 !== t[Or] || "@@iterator" in t || M.hasOwnProperty(Re(t))
      },
      Mr = i(function (e) {
        e.exports = {
          default: xr,
          __esModule: !0
        }
      });
    r(Mr);
    var Lr = d.getIterator = function (e) {
        var t = je(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return v(t.call(e))
      },
      Rr = i(function (e) {
        e.exports = {
          default: Lr,
          __esModule: !0
        }
      }),
      Nr = r(Rr),
      jr = r(i(function (e, t) {
        t.__esModule = !0;
        var n = r(Mr),
          o = r(Rr);

        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        t.default = function (e, t) {
          if (Array.isArray(e)) return e;
          if ((0, n.default)(Object(e))) return function (e, t) {
            var n = [],
              r = !0,
              i = !1,
              a = void 0;
            try {
              for (var s, l = (0, o.default)(e); !(r = (s = l.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
            } catch (e) {
              i = !0, a = e
            } finally {
              try {
                !r && l.return && l.return()
              } finally {
                if (i) throw a
              }
            }
            return n
          }(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }));
    hn("getOwnPropertyNames", function () {
      return In.f
    });
    var Dr = d.Object,
      Vr = function (e) {
        return Dr.getOwnPropertyNames(e)
      },
      qr = r(i(function (e) {
        e.exports = {
          default: Vr,
          __esModule: !0
        }
      })),
      Fr = function () {
        function e(t) {
          Ze(this, e), this.list = (t || []).concat(), this.breaked = null, this.aborted = null, this.stoped = !1, this.qu = [], this.unsubscribeList = []
        }
        return ot(e, [{
          key: "add",
          value: function (e) {
            return this.list.push(e), this
          }
        }, {
          key: "do",
          value: function (e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              n = function (e) {
                return function (t) {
                  return new sn(function (n) {
                    e(t), n(t)
                  })
                }
              }(e),
              o = this.qu[this.qu.length - 1];
            return o && "multiple" == o.type && t ? (o.do = o.do || [], o.do.push(n)) : this.qu.push({
              fn: n,
              type: "general"
            }), this
          }
        }, {
          key: "transform",
          value: function (e) {
            return this.qu.push({
              fn: function (e) {
                return function (t) {
                  return sn.resolve(e(t))
                }
              }(e),
              type: "general"
            }), this
          }
        }, {
          key: "map",
          value: function (e) {
            return this.qu.push({
              fn: function (e) {
                return function (t) {
                  return sn.resolve(t.map(e))
                }
              }(e),
              type: "general"
            }), this
          }
        }, {
          key: "filter",
          value: function (e) {
            return this.qu.push({
              fn: function (e) {
                return function (t) {
                  return sn.resolve(t.filter(e))
                }
              }(e),
              type: "general"
            }), this
          }
        }, {
          key: "takeUntilFromFilter",
          value: function (e, t) {
            return this.filter(e).takeWhile(function (e) {
              return e.length > 0
            }, t)
          }
        }, {
          key: "inCase",
          value: function (e, t, n) {
            return this.qu.push({
              fn: function (e, t, n) {
                return function (o) {
                  return sn.resolve(e(o) ? t(o) : n(o))
                }
              }(e, t, n),
              type: "general"
            }), this
          }
        }, {
          key: "count",
          value: function (e) {
            return this.qu.push({
              fn: function (e) {
                return function (t) {
                  return sn.resolve([t.filter(e).length, t])
                }
              }(e),
              type: "general"
            }), this
          }
        }, {
          key: "takeWhile",
          value: function (e, t) {
            var n = this.qu[this.qu.length - 1];
            return n && "multiple" == n.type ? (n.takeWhile = n.takeWhile || [], n.takeWhile.push(function (t, n) {
              return !!e(t)
            })) : this.qu.push({
              fn: function (e, n) {
                return function (o, r) {
                  return new sn(function (i) {
                    e(o) ? i(o) : n._stop(void 0 !== r ? r : o, t)
                  })
                }
              }(e, this),
              type: "general"
            }), this
          }
        }, {
          key: "takeUntilFromEventPattern",
          value: function (e, t) {
            var n = this,
              o = function e() {
                n._stop(null, null, !0), t(e)
              };
            return this.qu.push({
              fn: function (r) {
                return e(o), n.unsubscribeList.push(function () {
                  return t(o)
                }), sn.resolve(r)
              },
              type: "general"
            }), this
          }
        }, {
          key: "concat",
          value: function () {
            return this.qu.push({
              fn: (e = this, function (t) {
                var n = this;
                return new sn(function (o, r) {
                  var i = n,
                    a = [],
                    s = t.concat();
                  if (0 != s.length) {
                    s.push(function () {
                      return sn.resolve()
                    });
                    var l = s.shift(),
                      u = !1;
                    s.reduce(function (t, n) {
                      return t.then(function (t) {
                        return e.stoped || u ? sn.resolve() : (a.push(t), i.takeWhile.every(function (e) {
                          return e(t, a)
                        }) ? (i.do.forEach(function (e) {
                          return e(t)
                        }), n(t)) : (u = !0, sn.resolve()))
                      })
                    }, l()).then(function (e) {
                      o(a)
                    }, function (e) {
                      return r(e)
                    })
                  } else o(a)
                })
              }),
              type: "multiple",
              do: [],
              takeWhile: []
            }), this;
            var e
          }
        }, {
          key: "merge",
          value: function () {
            return this.qu.push({
              fn: (e = this, function (t) {
                var n = this;
                return new sn(function (o, r) {
                  var i = n,
                    a = [],
                    s = t,
                    l = s.length;
                  if (0 != l) {
                    var u = !1;
                    s.forEach(function (t, n) {
                      t().then(function (t) {
                        e.stoped || u || (a[n] = t, i.takeWhile.every(function (e) {
                          return e(t, a)
                        }) ? (i.do.forEach(function (e) {
                          return e(t)
                        }), a.filter(function (e) {
                          return !0
                        }).length === l && o(a)) : (u = !0, o(a)))
                      }, function (e) {
                        return r(e)
                      })
                    })
                  } else o(a)
                })
              }),
              type: "multiple",
              do: [],
              takeWhile: []
            }), this;
            var e
          }
        }, {
          key: "_stop",
          value: function (e, t, n) {
            this.stoped = !0, 1 == n ? this.aborted && this.aborted() : this.breaked && this.breaked(e, t)
          }
        }, {
          key: "subscribe",
          value: function (e, t) {
            var n = this;
            this.stoped = !1;
            var o = this,
              r = this.qu;
            return new sn(function (e, t) {
                o.breaked = function (t, n) {
                  return e([t, n])
                }, o.aborted = function () {
                  return t("abort")
                }, r.map(function (e) {
                  return e.fn.bind(e)
                }).reduce(function (e, t) {
                  return e.then(function (e) {
                    return o.stoped ? sn.resolve() : t(e)
                  })
                }, sn.resolve(n.list)).then(function (n) {
                  o.stoped ? t("abort") : e([n])
                }, function (e) {
                  "abort" !== e && t(e)
                })
              }).then(function (t) {
                var o = jr(t, 2),
                  r = o[0],
                  i = o[1];
                n.qu = [], n.unsubscribeList.forEach(function (e) {
                  return e()
                }), n.unsubscribeList = [], e && e(r, i)
              }).catch(function (e) {
                n.qu = [], n.unsubscribeList.forEach(function (e) {
                  return e()
                }), n.unsubscribeList = [], t && t(e)
              }),
              function () {
                n._stop(null, null, !0)
              }
          }
        }], [{
          key: "of",
          value: function (t) {
            return new e(t)
          }
        }]), e
      }(),
      Ur = function (e) {
        function t() {
          Ze(this, t);
          var e = co(this, (t.__proto__ || gn(t)).call(this));
          e.urlConfig = {
            d: [],
            s: ["https://s-api01.svc.litv.tv/cdi/v2/rpc", "https://s-api02.svc.litv.tv/cdi/v2/rpc", "https://s-api03.svc.litv.tv/cdi/v2/rpc"],
            p: ["https://p-api01.svc.litv.tv/cdi/v2/rpc", "https://p-api02.svc.litv.tv/cdi/v2/rpc", "https://p-api03.svc.litv.tv/cdi/v2/rpc"]
          }, e.debugUrlConfig = {
            d: [],
            s: ["https://mc062tqbwa.execute-api.ap-northeast-1.amazonaws.com/staging/debug"],
            p: ["https://mc062tqbwa.execute-api.ap-northeast-1.amazonaws.com/production/debug"]
          };
          var n = window.location.href;
          "" != window.location.port || /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/.test(n) ? (e.urlConfig = e.urlConfig.d, e.debugUrlConfig = e.debugUrlConfig.d) : /\/staging-/.test(n) ? (e.urlConfig = e.urlConfig.s, e.debugUrlConfig = e.debugUrlConfig.s) : (e.urlConfig = e.urlConfig.p, e.debugUrlConfig = e.debugUrlConfig.p);
          var o = function (e) {
            return /ANDROID|IPHONE|IPAD|IPOD/i.test(e) ? "m-web" : "web"
          }(navigator.userAgent);
          return e.postData = e.postData({
            platform: o
          }).bind(e), e
        }
        return bo(t, Do), ot(t, [{
          key: "createLogger",
          value: function (e, t, n, o, r) {
            return new Br(e, t, n, o, r, this.postData)
          }
        }, {
          key: "postData",
          value: function (e) {
            return function (t, n) {
              if (t = pn({}, e, t), this.trigger("Report", {
                  reportData: t,
                  partTypeInfo: n
                }), 0 != this.urlConfig.length) return $o(this.urlConfig[Math.random() * this.urlConfig.length >> 0], {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json"
                },
                body: nr({
                  id: jo.get(),
                  jsonrpc: "2.0",
                  method: "YahooService.InsertYahooAdLog",
                  params: t
                })
              })
            }
          }
        }, {
          key: "postDebug",
          value: function (e, t, n) {
            var o = this;
            return new sn(function (r, i) {
              if (null == e) return console.log("LiTVPlayer postDebug reject: adInfo is null"), void i("adInfo is null");
              var a = {
                swver: n,
                unit_id: (t = t || {}).unit_id || "",
                ad_system: e.adSystem || "",
                duration: e.duration || 0,
                click_url: e.clickThroughUrl || "",
                media_url: e.mediaUrl || ""
              };
              console.log("LiTVPlayer postDebug", a, e, t, n), 0 != o.debugUrlConfig.length && $o(o.debugUrlConfig[Math.random() * o.debugUrlConfig.length >> 0], {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json"
                },
                body: nr({
                  id: jo.get(),
                  jsonrpc: "2.0",
                  method: "report_debug",
                  params: a
                })
              }).then(function (e) {
                1 == e.ok ? r() : i(e.statusText)
              }).catch(i)
            })
          }
        }]), t
      }(),
      Br = function () {
        function e(t, n, o, r, i, a) {
          Ze(this, e), this.spaceId = n, this.assetId = t, this.unitId = o, this.title = r, this.partTypeInfo = i, this.postData = a
        }
        return ot(e, [{
          key: "reportToLitv",
          value: function (e, t) {
            var n = {
              cdata: e,
              ad_id: this.unitId + "|" + No,
              ad_clip: this.spaceId + (t ? "|" + t : ""),
              asset_id: this.assetId,
              title: this.title
            };
            this.postData(n, this.partTypeInfo)
          }
        }, {
          key: "request",
          value: function () {
            return this.reportToLitv("request"), this
          }
        }, {
          key: "serve",
          value: function () {
            return this.reportToLitv("serve"), this
          }
        }, {
          key: "impression",
          value: function () {
            return this.reportToLitv("impression"), this
          }
        }, {
          key: "complete",
          value: function () {
            return this.reportToLitv("complete"), this
          }
        }, {
          key: "click",
          value: function () {
            return this.reportToLitv("click"), this
          }
        }, {
          key: "error",
          value: function (e) {
            var t = e.reportType,
              n = ["noAd", "duplicateAd"].includes(t) ? null : e.code;
            return this.reportToLitv(t, n), this
          }
        }, {
          key: "imgClick",
          value: function () {
            return this.reportToLitv("imgClick"), this
          }
        }, {
          key: "imgImpression",
          value: function () {
            return this.reportToLitv("imgImpression"), this
          }
        }, {
          key: "vipSkip",
          value: function () {
            return this.reportToLitv("vipSkip"), this
          }
        }, {
          key: "videoClick",
          value: function () {
            return this.reportToLitv("videoClick"), this
          }
        }, {
          key: "videoImpression",
          value: function () {
            return this.reportToLitv("videoImpression"), this
          }
        }, {
          key: "destroy",
          value: function () {
            this.postData = null
          }
        }]), e
      }(),
      $r = function (e) {
        function t() {
          Ze(this, t);
          var e = co(this, (t.__proto__ || gn(t)).call(this));
          return e.count = 0, e.subs = [], e
        }
        return bo(t, Do), ot(t, [{
          key: "requestPause",
          value: function (e, t) {
            0 == this.count && this.trigger("RequestPause", {
              partType: e,
              rewind: t
            }), this.count += 1
          }
        }, {
          key: "requestResum",
          value: function (e, t) {
            0 != this.count && (this.count -= 1, 0 == this.count && (this.trigger("RequestResum", {
              partType: e,
              rewind: t
            }), this.clearSub()))
          }
        }, {
          key: "getSub",
          value: function (e) {
            var t = new Hr(this, e);
            return this.subs.push(t), t
          }
        }, {
          key: "on",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "on", this).apply(this, arguments), this
          }
        }, {
          key: "clearSub",
          value: function () {
            this.subs.forEach(function (e) {
              return e.destroy()
            }), this.subs = []
          }
        }, {
          key: "reset",
          value: function () {
            0 != this.count && (this.trigger("Reset"), this.count = 0, this.clearSub())
          }
        }, {
          key: "forceResum",
          value: function () {
            this.subs.forEach(function (e) {
              return e.requestResum()
            }), this.clearSub()
          }
        }]), t
      }(),
      Hr = function () {
        function e(t, n) {
          Ze(this, e), this.parentCxt = t, this.isPauseRequested = !1, this.type = n, this.rewind = 0
        }
        return ot(e, [{
          key: "requestPause",
          value: function () {
            0 == this.isPauseRequested && (this.isPauseRequested = !0, this.parentCxt && this.parentCxt.requestPause(this.type, this.rewind))
          }
        }, {
          key: "requestResum",
          value: function () {
            1 == this.isPauseRequested && this.parentCxt && this.parentCxt.requestResum(this.type, this.rewind), this.parentCxt = null
          }
        }, {
          key: "setRewind",
          value: function (e) {
            void 0 !== e && (this.rewind = e)
          }
        }, {
          key: "destroy",
          value: function () {
            this.parentCxt = null
          }
        }]), e
      }(),
      zr = "Excluded By Interval",
      Gr = ["prerolls", "midrolls", "postrolls", "logo", "jingle", "pause_ad", "block_ad", "exit_ad", "end_ad"],
      Wr = function (e) {
        function t(e, n, o, r, i) {
          Ze(this, t);
          var a = co(this, (t.__proto__ || gn(t)).call(this));
          return a.lock = !0, a.queue = [], a.oriLiadMeta = null, a.isPaused = !1, a.imaPack = e, a.houseVideoAd = n, a.houseImageAd = o, a.countdownComponent = r, a.intervalTransit = i, a.elements = null, a.parts = null, a.midrollTimeCodes = [], a.role = null, a.assetId = null, a.linearAdMediaProxy = null, a.linearAdMediaData = null, a.samplingElement = a.samplingElement(), a.pauseAndResumController = new $r, a.report = new Ur, a.report.on("Report", function (e) {
            return a.trigger("Report", {
              reportData: e.reportData,
              partType: e.partTypeInfo.partType,
              trunkType: e.partTypeInfo.trunkType,
              sourcePartType: e.partTypeInfo.sourcePartType
            })
          }), a.ignoreDocumentHiddenCheck = !1, a.inLinearAdStream = !1, a.autoBind(a), a.linearAdList = ["prerolls", "midrolls", "postrolls", "block_ad", "exit_ad", "jingle", "comm_ad", "house_ad", "end_ad", "content_pool"], a.enableCountdownList = ["prerolls", "midrolls", "postrolls", "block_ad", "exit_ad", "comm_ad", "house_ad", "end_ad"], a.intervalInherit = ["prerolls", "postrolls", "jingle"], Gr.forEach(function (e) {
            var t = e.replace(/\_(\w)/g, function (e, t) {
              return t.toUpperCase()
            });
            a[t] = a.partFactory(e)
          }), a.pauseAndResumController.on("RequestPause", function (e) {
            var t = a.trigger("LinearAdStart", {
              partType: e.partType
            });
            "midrolls" != e.partType || t.defaultPrevented || a.trigger("RequestPause", {
              partType: e.partType,
              rewind: e.rewind
            })
          }).on("RequestResum", function (e) {
            var t = a.trigger("LinearAdComplete", {
              partType: e.partType
            });
            "midrolls" != e.partType || t.defaultPrevented || a.trigger("RequestResum", {
              partType: e.partType,
              rewind: e.rewind
            })
          }).on("Reset", function () {
            a.trigger("ResetPauseAndResum")
          }), a
        }
        return bo(t, Do), ot(t, [{
          key: "autoBind",
          value: function (e) {
            var t = !0,
              n = !1,
              o = void 0;
            try {
              for (var r, i = Nr(qr(e.constructor.prototype)); !(t = (r = i.next()).done); t = !0) {
                var a = r.value,
                  s = e[a];
                "constructor" !== a && "function" == typeof s && (e[a] = s.bind(e))
              }
            } catch (e) {
              n = !0, o = e
            } finally {
              try {
                !t && i.return && i.return()
              } finally {
                if (n) throw o
              }
            }
          }
        }, {
          key: "partFactory",
          value: function (e) {
            var t = this;
            return function (n) {
              var o = !1,
                r = function () {
                  o = !0
                },
                i = function () {
                  t.off("Stop", r)
                };
              t.one("Stop", r);
              var a = {
                  partType: e,
                  condition: n
                },
                s = {
                  start: function () {
                    return new sn(function (n, r) {
                      if (1 == t.lock) {
                        t.queue = [s];
                        var l = new Error(e + " is interrupted because not unlocked yet.");
                        return l.isWarning = !0, void r(l)
                      }
                      t.next(a.partType, a.condition).then(function (e) {
                        o || e.requestResum(), i(), n()
                      }).catch(function (e) {
                        var t = e.error,
                          n = e.pauseAndResumController;
                        !o && n && n.requestResum(), i(), t.isWarning ? console.warn(t.message) : console.error(t), r(t)
                      })
                    })
                  },
                  info: a
                };
              return s
            }
          }
        }, {
          key: "reconstruct",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments[1],
              n = this,
              o = arguments[2],
              r = arguments[3],
              i = [],
              a = void 0,
              s = [],
              l = o.concat();
            (a = e.elements || {})["*empty"] = {
              id: "*empty",
              users: "All",
              media_type: "video",
              schema: "empty"
            };
            var u = function (o) {
              var u = e[o];
              if (null == u || "elements" == o || null == u.element_id) return "continue";
              if (0 == u.element_id.length) {
                if ("comm_ad" != o) return "continue";
                u.element_id.push(["*empty"])
              }
              var c = pn({}, u);
              "prerolls" == o || "midrolls" == o || "postrolls" == o || "exit_ad" == o || "end_ad" == o ? c.no_ad = "comm_ad" : "comm_ad" == o && (c.no_ad = "house_ad"), c.enable_countdown = 1 != t && n.enableCountdownList.includes(o), c.is_linear = n.linearAdList.includes(o), c.inherit_interval = n.intervalInherit.includes(o), "midrolls" == o && (l = l.map(function (e, t) {
                return {
                  time: e + c.req_timeshift,
                  duration: r[t]
                }
              }));
              var d = /^logo_/.test(o);
              c.type = d ? "logo" : o, c.position = d ? o.match(/_(.+)/i)[1].toUpperCase() : "MC", Bo(c).filter(function (e) {
                return /_sampling$/i.test(e)
              }).forEach(function (e) {
                Array.isArray(c[e]) ? c[e] = c[e].map(function (e) {
                  return 0 === e ? -1 : e
                }) : 0 === c[e] && (c[e] = -1)
              }), "content_pool" == o && (c.element_sampling = -2), i.push(c), c.element_id = u.element_id.map(function (e, t, n) {
                return e.map(function (e) {
                  a[e] || (s.push(e), e = "*empty");
                  var t = a[e],
                    n = t.media_type.match(/(.+)_(.+)/i);
                  return null != n && (t.media_type = n[1], t.media_type_extend = n[2]), "image" !== t.media_type ? e : (t.is_logo = d, e)
                })
              })
            };
            for (var c in e) u(c);
            return s.length > 0 && (s = s.filter(function (e, t, n) {
              return n.indexOf(e) === t
            }), console.error("lose elements", s)), {
              parts: i,
              elements: a,
              midroll_time_codes: l
            }
          }
        }, {
          key: "next",
          value: function (e, t) {
            var n = this,
              o = this;
            return new sn(function (r, i) {
              var a = o.linearAdList.includes(e);
              if (1 == a) {
                if (1 == o.inLinearAdStream) {
                  var s = new Error(e + " is interrupted because the previous linear ad stream has not ended yet.");
                  return s.isWarning = !0, void i({
                    error: s
                  })
                }
                o.inLinearAdStream = !0
              }
              var l = null,
                u = null;
              "boolean" == typeof t ? l = t : "number" == typeof t ? u = t > 31536e6 ? t : +new Date + 1e3 * t : void 0 !== t && (l = t.ignoreInterval, t.endTime ? u = t.endTime : t.duration && (u = +new Date + 1e3 * t.duration)), o.trigger("Progress", {
                partType: e,
                condition: t,
                endTime: u,
                state: "AdStreamStart"
              });
              var c = n.pauseAndResumController.getSub(e);
              n.adPart$(n.parts, e, n.elements, n.role, u, null, c, null, e, l, a).then(function (t) {
                if (null == t) return sn.resolve([t, null]);
                var o = e,
                  r = null;
                if (t.length > 0) {
                  var i = t[t.length - 1];
                  o = i.part.type, r = i.exclude
                }
                return n.fillRemainingTime$(n.parts, n.elements, n.role, u, r, c, o, e, [], t, l)
              }).then(function (t) {
                var i = jr(t, 2),
                  s = i[0],
                  u = i[1];
                o.trigger("Progress", {
                  partType: e,
                  result: s,
                  contentPoolResult: u,
                  state: "AdStreamComplete"
                }), o.trigger("AdStreamComplete", {
                  partType: e,
                  result: s,
                  contentPoolResult: u
                }), 1 == a && (o.inLinearAdStream = !1), 1 == l && n.intervalTransit(e, null, null, !0), r(c)
              }).catch(function (t) {
                if (1 == a && (o.inLinearAdStream = !1), 1 == l && n.intervalTransit(e, null, null, !0), "abort" == t) return o.trigger("AdStreamCancel", {
                  partType: e,
                  isLinear: a
                }), void r(c);
                i({
                  error: t,
                  pauseAndResumController: c
                })
              })
            })
          }
        }, {
          key: "adPart$",
          value: function (e, t, n, o, r, i, a, s, l, u, c) {
            var d = this,
              f = this;
            return new sn(function (p, h) {
              Fr.of(e).takeUntilFromEventPattern(function (e) {
                d.on("Stop", e)
              }, function (e) {
                d.off("Stop", e)
              }).do(function (e) {
                f.trigger("Progress", {
                  partType: t,
                  trunkType: l,
                  sourcePartType: s,
                  partsInfo: e,
                  isLinear: c,
                  state: "AdPartStart"
                })
              }).takeUntilFromFilter(function (e) {
                return e.type == t
              }, "Can Not Find This Part").takeUntilFromFilter(function (e) {
                return 1 == u || l !== t || !0 !== e.is_linear || d.intervalTransit(t, e.min_interval, e.inherit_interval)
              }, zr).takeUntilFromFilter(function (e) {
                return void 0 === e.partobj_ratio || e.partobj_ratio > 10 * Math.random()
              }, "Excluded By Ratio").map(function (e) {
                var t = JSON.parse(nr(e.element_id)).map(function (e) {
                  return e.filter(function (e) {
                    return "Free" == o ? "Pay" != n[e].users : "Free" != n[e].users
                  })
                });
                return t = d.samplingElement(t, e.element_sampling, e.adobj_sampling), e.dc_element_id = t, a.setRewind(e.rewind), e
              }).map(function (c) {
                return d.adWaterflow$(c, e, t, n, o, r, i, a, s, l, u)
              }).merge().subscribe(function (e, n) {
                var o = e && e.reduce(function (e, t) {
                  return e.push(t.part), e
                }, []);
                f.trigger("Progress", {
                  endReason: n,
                  partType: t,
                  trunkType: l,
                  sourcePartType: s,
                  partsInfo: o,
                  isLinear: c,
                  state: "AdPartComplete"
                }), n === zr && (e = null), p(e)
              }, function (e) {
                h(e)
              })
            })
          }
        }, {
          key: "adWaterflow$",
          value: function (e, t, n, o, r, i, a, s, l, u, c) {
            var d = this,
              f = function () {
                return null == i || i > +new Date
              };
            return function () {
              return new sn(function (p, h) {
                Fr.of(e.dc_element_id).takeUntilFromEventPattern(function (e) {
                  d.on("Stop", e)
                }, function (e) {
                  d.off("Stop", e)
                }).do(function (e) {
                  d.trigger("Progress", {
                    partType: n,
                    trunkType: u,
                    sourcePartType: l,
                    elementIds: e,
                    state: "AdWaterflowStart"
                  })
                }).takeWhile(f).map(function (t) {
                  return d.adSlot$(e, t, o, n, i, a, s, l, u)
                }).concat().takeWhile(function () {
                  return f() && d.documentHiddenCheck()
                }).count(function (e) {
                  return 1 == e.needPlayNoAd
                }).subscribe(function (f) {
                  var v = jr(f, 2),
                    m = v[0],
                    g = v[1],
                    y = null;
                  if (l != n) {
                    var _ = g[g.length - 1];
                    y = _ ? {
                      elementIds: _.excludeElementIds,
                      adIds: _.excludeAdIds
                    } : a
                  } else y = a;
                  if (d.trigger("Progress", {
                      partType: n,
                      trunkType: u,
                      sourcePartType: l,
                      noAdCount: m,
                      exclude: y,
                      state: "AdWaterflowComplete"
                    }), "number" == typeof m && m > 0 && e.no_ad) {
                    d.trigger("Progress", {
                      trunkType: u,
                      currentType: n,
                      noAdType: e.no_ad,
                      count: m,
                      state: "GotoNoAd"
                    });
                    var b;
                    b = -1 == e.filling ? m : Math.min(m, e.filling), t.filter(function (t) {
                      return t.type === e.no_ad
                    }).forEach(function (e) {
                      return e.element_sampling = b
                    });
                    var w = d.linearAdList.includes(e.no_ad);
                    return d.adPart$(t, e.no_ad, o, r, i, y, s, n, u, c, w).then(function (t) {
                      var n = t.reduce(function (e, t) {
                        return e.parts = e.parts.concat(t.parts), e.exclude.adIds = e.exclude.adIds.concat(t.exclude.adIds), e.exclude.elementIds = e.exclude.elementIds.concat(t.exclude.elementIds), e
                      }, {
                        parts: [],
                        exclude: {
                          adIds: [],
                          elementIds: []
                        }
                      });
                      return n.parts = n.parts.concat([e]), n.part = e, p(n)
                    }).catch(function (e) {
                      h(e)
                    })
                  }
                  return p({
                    parts: [e],
                    exclude: y,
                    part: e
                  })
                }, function (e) {
                  "abort" != e && (console.error(e), h(e))
                })
              })
            }
          }
        }, {
          key: "adSlot$",
          value: function (e, t, n, o, r, i, a, s, l) {
            var u = this;
            return function (c) {
              var d = [],
                f = [];
              return s != o && (c ? (d = d.concat(c.excludeElementIds), f = f.concat(c.excludeAdIds)) : i && (i.elementIds && (d = d.concat(i.elementIds)), i.adIds && (f = f.concat(i.adIds)))), new sn(function (i, c) {
                Fr.of(t).takeUntilFromEventPattern(function (e) {
                  u.on("Stop", e)
                }, function (e) {
                  u.off("Stop", e)
                }).filter(function (e) {
                  return !d.includes(e)
                }).map(function (t) {
                  return u.adElement$(n[t], e, o, r, f, a, s, l)
                }).concat().takeWhile(function (e) {
                  return e.entity instanceof Error || e.entity instanceof Jr
                }).subscribe(function (e) {
                  var t = {
                      needPlayNoAd: !1,
                      excludeElementIds: d,
                      excludeAdIds: f
                    },
                    n = e.find(function (e) {
                      return "complete" === e.type
                    });
                  n && (null !== n.adId ? t.excludeAdIds.push(n.adId) : t.excludeElementIds.push(n.elementId));
                  var o = e.reduce(function (e, t) {
                    return 0 == e ? e : t.entity instanceof Kr || t.entity instanceof Jr
                  }, !0);
                  t.needPlayNoAd = o, i(t)
                }, function (e) {
                  "abort" != e && (console.error(e), c(e))
                })
              })
            }
          }
        }, {
          key: "adElement$",
          value: function (e, t, n, o, r, i, a, s) {
            var l = this,
              u = this.report.createLogger(this.assetId, e.space_id, e.unit_id, e.title, {
                partType: n,
                trunkType: s,
                sourcePartType: a
              });
            return function () {
              return new sn(function (c, d) {
                var f = {
                  type: null,
                  entity: null,
                  elementId: e.id,
                  adId: null
                };
                if ("empty" == e.schema) return f.type = "emptyContent", f.entity = new Jr(e.media_type), c(f);
                if ("video" == e.media_type || "image" == e.media_type) {
                  var p = !1,
                    h = function () {
                      p = !0
                    };
                  return l.one("Stop", h), l.adMedia$(e, t, n, o, r, u, i, a, s).then(function (e) {
                    l.off("Stop", h), p || c(e)
                  }).catch(function (e) {
                    l.off("Stop", h), p || d(e)
                  })
                }
                console.warn("not support media type: " + e.media_type + " [" + e.id + "]");
                var v = new Jo(Qo.codes.MEDIA_TYPE_MISMATCH);
                return u.error(v), f.type = "error", f.entity = v, c(f)
              })
            }
          }
        }, {
          key: "adMedia$",
          value: function (e, t, n, o, r, i, a, s, l) {
            var u = this,
              c = pn({}, e, {
                position: t.position,
                is_linear: t.is_linear,
                enable_countdown: t.enable_countdown,
                end_time: o
              });
            return new sn(function (o, d) {
              var f = {
                  type: null,
                  entity: null,
                  elementId: c.id,
                  adId: null
                },
                p = null,
                h = !1,
                v = function () {
                  h = !0
                };
              u.one("Stop", v);
              var m = c.schema.split("_");
              switch (m[0]) {
                case "yahoo":
                case "vast":
                case "ima":
                  p = u.imaPack.setExcludeAdIds(r);
                  break;
                case "litv":
                  p = "image" == c.media_type ? u.houseImageAd : u.houseVideoAd;
                  break;
                default:
                  var g = new Jo(Qo.codes.SCHEMA_MISMATCH);
                  return i.error(g), f.type = "error", f.entity = g, o(f)
              }
              c.adSource = m[1];
              var y = t.is_linear;
              y && (u.linearAdMediaProxy = p, u.linearAdMediaData = e, u.isPaused && p.pause());
              var _ = {
                partType: n,
                trunkType: l,
                sourcePartType: s,
                isLinear: y
              };
              p.adsRequest(c).onRequest(function (e, t) {
                "IMA" == t && i.request();
                var n = pn({}, _, {
                  requestInfo: e.requestInfo,
                  processor: t
                });
                u.trigger("AdRequest", n), u.trigger("Progress", pn(n, {
                  state: "AdRequest"
                }))
              }).onLoaded(function (e, t) {
                "IMA" == t && (i.serve(), f.adId = e.adId || null), u.trigger("Progress", pn(_, {
                  processor: t,
                  meta: e.meta
                }, {
                  state: "AdLoaded"
                }))
              }).onImpression(function (e, t) {
                switch (u.trigger("Impression", pn({}, _, {
                  processor: t
                })), t) {
                  case "IMA":
                    i.impression();
                    break;
                  case "HouseVideoAd":
                    i.videoImpression();
                    break;
                  case "HouseImageAd":
                    i.imgImpression()
                }
              }).onPauseRequested(function (e, t) {
                a && a.requestPause()
              }).onAdMediaStart(function (e, t) {
                var n = pn({}, _, {
                  processor: t,
                  duration: e.duration
                });
                u.trigger("AdMediaStart", n), u.trigger("Progress", pn(n, {
                  state: "AdMediaStart"
                }))
              }).onAdMediaComplete(function (e, t) {
                var n = pn({}, _, {
                  processor: t
                });
                u.trigger("AdMediaComplete", n), u.trigger("Progress", pn(n, {
                  state: "AdMediaComplete"
                }))
              }).onCompleted(function (e, t) {
                u.off("Stop", v), y && (u.linearAdMediaProxy = null, u.linearAdMediaData = null), "IMA" == t && i.complete(), h || (f.type = "complete", f.entity = c, o(f))
              }).onError(function (e, t) {
                var n = e.error;
                if (i.error(n), u.trigger("Error", pn({}, _, {
                    processor: t,
                    error: e
                  })), !1 !== e.fatal) {
                  u.off("Stop", v), y && (u.linearAdMediaProxy = null, u.linearAdMediaData = null);
                  var r = "image" == c.media_type ? new Yr(n) : new Kr(n);
                  h || (f.type = "error", f.entity = r, o(f))
                }
              }).onCountdownStart(function (e) {
                u.countdownComponent.start(e.time, c.purchase_url, e.clickFunction)
              }).onCountdownProgress(function (e) {
                u.countdownComponent.progress(e.time)
              }).onCountdownEnd(function () {
                u.countdownComponent.end()
              }).onClick(function (e, t) {
                switch (t) {
                  case "IMA":
                    i.click();
                    break;
                  case "HouseVideoAd":
                    i.videoClick();
                    break;
                  case "HouseImageAd":
                    i.imgClick()
                }
              }).onClickSkip(function (e, t) {
                i.vipSkip()
              }).onRequestResume(function (e, t) {
                u.resume()
              }).onPause(function (e, t) {
                u.trigger("AdPause", e)
              }).onResume(function (e, t) {
                u.trigger("AdResume", e)
              })
            })
          }
        }, {
          key: "fillRemainingTime$",
          value: function (e, t, n, o, r, i, a, s) {
            var l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : [],
              u = this,
              c = arguments[9],
              d = arguments[10],
              f = +new Date;
            if (this.trigger("Progress", {
                trunkType: s,
                nowTime: f,
                endTime: o,
                state: "CheckRemainingTime"
              }), null == o || f >= o) return sn.resolve([c, l]);
            this.trigger("Progress", {
              trunkType: s,
              currentType: a,
              state: "GotoContentPool"
            });
            var p = this.linearAdList.includes("content_pool");
            return this.adPart$(e, "content_pool", t, n, o, r, i, a, s, d, p).then(function (r) {
              var a = ((r || [])[0] || {}).exclude || null;
              return u.fillRemainingTime$(e, t, n, o, a, i, "content_pool", s, l.concat(r), c, d)
            })
          }
        }, {
          key: "samplingElement",
          value: function () {
            function e(e) {
              for (var t, n, o = e.slice(), r = o.length; r--;) t = o[n = Math.random() * (r + 1) << 0], o[n] = o[r], o[r] = t;
              return o
            }

            function t(t, n) {
              return -1 == n ? t : -2 == n ? e(t) : e(t).slice(0, n)
            }
            return function (e, n, o) {
              return e.length < n && (e = e.concat(Array(n - e.length).fill(["*empty"]))), t(e.map(function (e, n) {
                return t(e, o[n] || -1)
              }), n)
            }
          }
        }, {
          key: "documentHiddenCheck",
          value: function () {
            return 1 == this.ignoreDocumentHiddenCheck || !document[xo]
          }
        }, {
          key: "stopLinearAd",
          value: function () {
            var e = this;
            sn.resolve().then(function () {
              0 != e.inLinearAdStream && (e.trigger("Stop"), e.imaPack.stop(), e.houseVideoAd.stop(), e.houseImageAd.stopLinearAd(), e.countdownComponent.end(), e.pauseAndResumController.forceResum())
            })
          }
        }, {
          key: "reset",
          value: function () {
            this.trigger("Stop"), this.queue = [], this.imaPack.stop(), this.houseVideoAd.stop(), this.houseImageAd.stop(), this.countdownComponent.end(), this.pauseAndResumController.reset()
          }
        }, {
          key: "setMeta",
          value: function (e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
              i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
              a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [],
              s = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
            if (this.lock = !0, this.reset(), this.oriLiadMeta = void 0 === e ? void 0 : JSON.parse(nr(e)), e && e.length > 0 && !e.elements) this.trigger("MetaError", e);
            else {
              var l = this.reconstruct(e, o, r, i),
                u = l.elements,
                c = l.parts,
                d = l.midroll_time_codes;
              this.elements = u, this.parts = c, this.role = 0 == t ? "Pay" : "Free", this.assetId = n, this.midrollTimeCodes = d, this.imaPack.setReplacement(a), this.ignoreDocumentHiddenCheck = s
            }
          }
        }, {
          key: "getQueue",
          value: function () {
            return this.queue
          }
        }, {
          key: "unlock",
          value: function () {
            this.lock = !1
          }
        }, {
          key: "getMidrollTimeCodes",
          value: function () {
            return this.midrollTimeCodes
          }
        }, {
          key: "pause",
          value: function () {
            this.isPaused = !0, null != this.linearAdMediaProxy && this.linearAdMediaProxy.pause()
          }
        }, {
          key: "resume",
          value: function () {
            this.isPaused = !1, null != this.linearAdMediaProxy && this.linearAdMediaProxy.resume()
          }
        }, {
          key: "combined",
          value: function (e) {
            var t = this,
              n = this,
              o = [],
              r = !1,
              i = function () {
                r = !0
              },
              a = this.next,
              s = function (e) {
                e && o.push(e)
              },
              l = function () {
                o.forEach(function (e) {
                  e.requestResum()
                }), o = []
              },
              u = function () {
                t.off("Stop", i)
              };
            return this.one("Stop", i), {
              start: function () {
                return new sn(function (t, o) {
                  if (1 == n.lock) {
                    n.queue = [], e.forEach(function (e) {
                      n.queue.push(e)
                    });
                    var i = new Error("combined ads is interrupted because not unlocked yet.");
                    return i.isWarning = !0, void o(i)
                  }
                  e.reduce(function (e, t) {
                    return e.then(function (e) {
                      if (1 != r) {
                        s(e);
                        var n = t.info,
                          o = n.partType,
                          i = n.condition;
                        return a(o, i)
                      }
                    })
                  }, sn.resolve()).then(function (e) {
                    0 == r && (s(e), l()), u(), t()
                  }).catch(function (e) {
                    var t = e.error,
                      n = e.pauseAndResumController;
                    0 == r && (n && s(n), l()), u(), t.isWarning ? console.warn(t.message) : console.error(t), o(t)
                  })
                })
              }
            }
          }
        }, {
          key: "getSupportive",
          value: function () {
            return Gr
          }
        }, {
          key: "getCurrentExternalAdInfo",
          value: function () {
            return this.imaPack.getCurrentAdInfo()
          }
        }, {
          key: "getCurrentLinearAdElement",
          value: function () {
            return this.linearAdMediaData
          }
        }, {
          key: "sendCurrentExternalAdInfo",
          value: function (e) {
            return this.report.postDebug(this.imaPack.getCurrentAdInfo(), this.linearAdMediaData, e)
          }
        }, {
          key: "on",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "on", this).apply(this, arguments), this
          }
        }, {
          key: "one",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "one", this).apply(this, arguments), this
          }
        }, {
          key: "off",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "off", this).apply(this, arguments), this
          }
        }, {
          key: "vastTest",
          value: function (e, t) {
            var n = this,
              o = t.doNotReplace,
              r = void 0 === o || o,
              i = t.adSource,
              a = void 0 === i ? "debug" : i;
            1 == this.inLinearAdStream && this.stopLinearAd(), setTimeout(function () {
              n.inLinearAdStream = !0;
              var t = n.pauseAndResumController.getSub("midrolls");
              n.imaPack.adsRequest({
                data: e,
                isAdsResponse: /^\<[\s\S]+\>$/m.test(e),
                enable_countdown: !1,
                doNotReplace: r,
                adSource: a
              }).onRequest(function (e, t) {
                console.log("onRequest", e), n.trigger("AdRequest", {
                  isLinear: !0
                })
              }).onLoaded(function (e, t) {
                console.log("onLoaded", e)
              }).onImpression(function (e, t) {
                console.log("onImpression", e), n.trigger("Impression", {
                  isLinear: !0
                })
              }).onPauseRequested(function (e, n) {
                console.log("onPauseRequested", e), t.requestPause()
              }).onAdMediaStart(function (e, t) {
                console.log("onAdMediaStart", e)
              }).onAdMediaComplete(function (e, t) {
                console.log("onAdMediaComplete", e)
              }).onCompleted(function (e) {
                console.log("onCompleted", e), n.inLinearAdStream = !1, t.requestResum()
              }).onError(function (e, o) {
                console.log("onError|" + e.error.code + "|" + e.error.message, e), e.isLinear = !0, n.inLinearAdStream = !1, t.requestResum(), n.trigger("Error", e)
              }).onRequestResume(function (e, t) {
                console.log("onRequestResume", e), n.resume()
              }).onPause(function (e, t) {
                console.log("onPause", e), n.trigger("AdPause", e)
              }).onResume(function (e, t) {
                console.log("onResume", e), n.trigger("AdResume", e)
              })
            })
          }
        }, {
          key: "paused",
          get: function () {
            return this.isPaused
          }
        }]), t
      }(),
      Kr = function (e) {
        function t() {
          return Ze(this, t), co(this, (t.__proto__ || gn(t)).apply(this, arguments))
        }
        return bo(t, Yo), t
      }(),
      Yr = function (e) {
        function t() {
          return Ze(this, t), co(this, (t.__proto__ || gn(t)).apply(this, arguments))
        }
        return bo(t, Yo), t
      }(),
      Jr = function e(t) {
        Ze(this, e), this.mediaType = t
      },
      Qr = function () {
        function e() {
          Ze(this, e), this.transitMap = {
            main: {
              countTime: 0,
              inherit: !1
            }
          }, this.transit = this.transit.bind(this), this.reset()
        }
        return ot(e, [{
          key: "_updateCountTime",
          value: function (e) {
            for (var t in this.transitMap) this.transitMap.hasOwnProperty(t) && (this.transitMap[t].countTime += e)
          }
        }, {
          key: "timeChange",
          value: function (e, t) {
            if (1 != this.lock && (t >>= 0, !(null !== this.preTimeStamp && t - this.preTimeStamp < 1e3)))
              if (this.preTimeStamp = t, e >>= 0, null != this.preTime) {
                var n = e - this.preTime;
                n > 0 && n <= 2 && this._updateCountTime(n), this.preTime = e
              } else this.preTime = e
          }
        }, {
          key: "getMainCount",
          value: function () {
            return this.transitMap.main.countTime
          }
        }, {
          key: "reset",
          value: function () {
            for (var e in this.transitMap) this.transitMap.hasOwnProperty(e) && ("main" !== e ? !1 === this.transitMap[e].inherit && delete this.transitMap[e] : this.transitMap[e].countTime = 0);
            this.lock = !0, this.preTimeStamp = null, this.preTime = null
          }
        }, {
          key: "start",
          value: function () {
            this.lock = !1
          }
        }, {
          key: "transit",
          value: function (e, t, n, o) {
            if (!0 === o) return e in this.transitMap && (this.transitMap[e].countTime = 0), !1;
            if (e in this.transitMap) {
              var r = this.transitMap[e];
              return null === r.inherit && (r.inherit = n), r.countTime >= t && (r.countTime = 0, !0)
            }
            return this.transitMap[e] = {
              countTime: 0,
              inherit: n
            }, this.lock || this.getMainCount() > t
          }
        }, {
          key: "addCount",
          value: function (e, t) {
            return e in this.transitMap ? this.transitMap[e].countTime += t : this.transitMap[e] = {
              countTime: t,
              inherit: null
            }, this.transitMap[e].countTime
          }
        }, {
          key: "getAllCount",
          value: function () {
            var e = {};
            for (var t in this.transitMap) this.transitMap.hasOwnProperty(t) && (e[t] = this.transitMap[t].countTime);
            return e
          }
        }]), e
      }(),
      Zr = function (e) {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          Ze(this, t);
          var o = co(this, (t.__proto__ || gn(t)).call(this));
          if ("function" != typeof e) return o.start = o.stop = o.pause = function () {}, co(o);
          var r = !1;
          return o._pContinueSm = function (t) {
            return new sn(function (n, i) {
              if (1 == r) e(t).then(n).catch(i);
              else {
                var a = e(t);
                try {
                  "function" == typeof a.then ? (a.then(n).catch(i), r = !0) : o.trigger("typeError")
                } catch (e) {
                  o.trigger("typeError")
                }
              }
            })
          }, null == n && (o._pStopSm = function () {
            return sn.resolve()
          }), o._skip = !1, o._nowSessionId = "", o._checkTimerId = null, o._checkPointTime = 0, o._maxRecheck = 0, o._errorCheckTime = 6e4, o._abortCheckContinue = function () {}, o._abortStopContinue = function () {}, o
        }
        return bo(t, Do), ot(t, [{
          key: "_stopTimer",
          value: function () {
            null != this._checkTimerId && (clearTimeout(this._checkTimerId), this._checkTimerId = null)
          }
        }, {
          key: "_publishError",
          value: function (e) {
            this.trigger("error", {
              reason: e,
              sessionId: this._nowSessionId
            })
          }
        }, {
          key: "_checkContinue",
          value: function () {
            var e = this,
              t = !1;
            this._abortCheckContinue = function () {
              t = !0
            }, this._checkPointTime = +new Date, this._pContinueSm(this._nowSessionId).then(function (n) {
              1 != t && (e._stopTimer(), 1 == n.continueFlag ? e._prepareNextCheck(!1, n).then(function () {
                e._checkContinue()
              }) : e._publishError(n.reason))
            }).catch(function (n) {
              1 != t && (e._stopTimer(), e._prepareNextCheck(!0).then(function () {
                e._checkContinue()
              }))
            })
          }
        }, {
          key: "_prepareNextCheck",
          value: function (e, t) {
            var n = this;
            return new sn(function (o) {
              var r = 1;
              if (e) r = n._errorCheckTime, n._errorCheckTime = 6e4;
              else {
                var i = +new Date;
                n._errorCheckTime = n._checkPointTime + n._maxRecheck - i, n._errorCheckTime < 100 && (n._errorCheckTime = 100), n._maxRecheck = 1e3 * t.maxRecheck, (r = n._checkPointTime + 1e3 * t.minRecheck - i) < 1 && (r = 1)
              }
              setTimeout(o, r)
            })
          }
        }, {
          key: "_stopContinue",
          value: function () {
            var e = this,
              t = !1;
            return this._abortStopContinue = function () {
              t = !0
            }, new sn(function (n) {
              "" != e._nowSessionId ? e._pStopSm(e._nowSessionId).then(function () {
                1 != t && n()
              }).catch(function (e) {
                1 != t && (console.warn(e), n())
              }) : n()
            })
          }
        }, {
          key: "_checkSessionIdAndRun",
          value: function (e) {
            var t = this;
            return new sn(function (n, o) {
              t._stopTimer(), "" != t._nowSessionId && t._nowSessionId != e ? t._stopContinue().then(n) : n()
            })
          }
        }, {
          key: "start",
          value: function (e) {
            var t = this;
            1 != this._skip && (this._errorCheckTime = 6e4, this._abortCheckContinue(), this._checkSessionIdAndRun(e).then(function () {
              e && (t._nowSessionId = e, t._checkContinue())
            }))
          }
        }, {
          key: "stop",
          value: function () {
            var e = this;
            1 != this._skip && this._checkSessionIdAndRun("").then(function () {
              e._stopContinue()
            })
          }
        }, {
          key: "pause",
          value: function () {
            this._stopTimer(), this._abortCheckContinue()
          }
        }, {
          key: "skip",
          value: function (e) {
            1 == e && 0 == this._skip ? (this.pause(), this._stopContinue(), this._nowSessionId = "", this._skip = !0) : 0 == e && (this._skip = !1)
          }
        }]), t
      }(),
      Xr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWcluWxpF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgODggODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDg4IDg4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6MC43O2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtvcGFjaXR5OjAuNTtmaWxsOiNGRkZGRkY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCIgeTE9IjQ0IiB4Mj0iODguMSIgeTI9IjQ0Ij4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM3NTdDQkIiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM5MjQ4OTgiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjcsNzcuNGM0LDMuNiw4LjcsNi4zLDE0LDhjNS40LDEuNywxMS4yLDIuNiwxNy41LDIuNmM2LjIsMCwxMS45LTAuOSwxNy4zLTIuNmMyLjItMC43LDQuMi0xLjUsNi4xLTIuNQoJYzIuOS0xLjUsNS41LTMuMyw3LjktNS41YzQtMy42LDcuMS04LjIsOS4zLTEzLjdjMi4yLTUuNSwzLjMtMTIuMSwzLjMtMTkuN1M4NywyOS45LDg0LjgsMjQuM2MtMi4yLTUuNS01LjMtMTAuMS05LjMtMTMuNwoJcy04LjctNi4zLTE0LThDNTYuMSwwLjksNTAuMywwLDQ0LjIsMGMtNi4zLDAtMTIuMSwwLjktMTcuNSwyLjZjLTEuNywwLjYtMy40LDEuMi01LDJjLTMuMywxLjYtNi4zLDMuNi05LDYKCWMtNCwzLjYtNy4xLDguMi05LjMsMTMuN0MxLjEsMjkuOSwwLDM2LjQsMCw0NHMxLjEsMTQuMSwzLjMsMTkuN0M1LjYsNjkuMiw4LjcsNzMuOCwxMi43LDc3LjR6IE0zNi43LDU5TDM2LjcsNTkKCWMtMSwwLTEuNy0wLjctMS43LTEuN1YzMC43YzAtMC45LDAuNy0xLjcsMS43LTEuN2gwLjFjMC40LTAuMSwwLjgsMCwxLjIsMC4ybDIyLjYsMTMuMWMwLjgsMC41LDEuMSwxLjUsMC42LDIuM2MwLDAsMCwwLjEtMC4xLDAuMQoJYy0wLjEsMC4zLTAuMywwLjUtMC42LDAuN0wzOCw1OC44QzM3LjYsNTksMzcuMSw1OS4xLDM2LjcsNTlMMzYuNyw1OXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LjcsNTlMMzYuNyw1OWMtMSwwLTEuNy0wLjctMS43LTEuN1YzMC43YzAtMC45LDAuNy0xLjcsMS43LTEuN2gwLjFjMC40LTAuMSwwLjgsMCwxLjIsMC4ybDIyLjYsMTMuMQoJYzAuOCwwLjUsMS4xLDEuNSwwLjYsMi4zYzAsMCwwLDAuMS0wLjEsMC4xYy0wLjEsMC4zLTAuMywwLjUtMC42LDAuN0wzOCw1OC44QzM3LjYsNTksMzcuMSw1OS4xLDM2LjcsNTlMMzYuNyw1OXoiLz4KPC9zdmc+";
    var ei = function (e) {
        console.log("%c" + e.state, "color: #4B8A08", e.getCarryInfo())
      },
      ti = function (e) {
        console.log("%cAdReport", "color: #FF8000", e.getCarryInfo())
      },
      ni = function (e) {
        var t = e.getCarryInfo(),
          n = oi(t, "code"),
          o = ["%c" + e.type.replace(/(?:^|\_)(\w)/g, function (e, t) {
            return t.toUpperCase()
          }), "color: #FE2E2E", t];
        n && o.splice(2, 0, n), console.log.apply(null, o)
      },
      oi = function e(t, n) {
        if (null === t || "object" !== (void 0 === t ? "undefined" : uo(t))) return null;
        for (var o in t)
          if (t.hasOwnProperty(o)) {
            if (o == n) return t[o];
            var r = e(t[o], n);
            if (null !== r) return r
          } return null
      },
      ri = function (e) {
        function t(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments[2];
          Ze(this, t);
          var r = co(this, (t.__proto__ || gn(t)).call(this));
          r.isFirst = !0, r.platformInfo = function () {
            var e = navigator.userAgent,
              t = /iPad|iPhone|iPod/.test(e) && !window.MSStream,
              n = /(msie) ([\w.]+)|Trident/gi.test(e),
              o = /WINDOWS NT 5\.[\d]+/gi.test(e),
              r = /WINDOWS NT 6\.0+/gi.test(e),
              i = /WINDOWS NT 6\.[2,3]+/gi.test(e),
              a = /Firefox/.test(e),
              s = function () {
                try {
                  return window.self !== window.top
                } catch (e) {
                  return !0
                }
              }();
            return {
              isIOS: t,
              isIE: n,
              isXP: o,
              isVista: r,
              isWin8: i,
              isFirefox: a,
              inIframe: s,
              isIOSAndInIFrame: t && s
            }
          }(), r.noVolume = 0 == flowplayer.support.volume || !1 !== flowplayer.support.android, r.defOpt = pn({}, {
            decideVisible: !1,
            visibleThreshold: .3,
            checkContinueStream: null,
            stopContinueStream: null,
            displayClickToUnMute: !1,
            allowAdPasue: !1,
            appInfo: "",
            cover: null,
            adRequestTimeout: 8e3
          }, n), "" !== r.defOpt.appInfo && (r.defOpt.appInfo += "|"), r.defOpt.appInfo += "pv." + o + "|" + No, r._container = e, r._src = null, r._config = {
            autoplay: !1,
            fullscreen: !r.platformInfo.isIOSAndInIFrame,
            chromecast: !1,
            share: !1,
            key: "$384286923161798",
            hlsQualities: [{
              level: -1,
              label: "Auto"
            }, {
              level: 0,
              label: "360p"
            }, {
              level: 1,
              label: "480p"
            }, {
              level: 2,
              label: "720p"
            }, {
              level: 3,
              label: "1080p"
            }],
            hlsjs: {
              capLevelToPlayerSize: !0,
              maxBufferLength: 3,
              maxMaxBufferLength: 10,
              fragLoadingTimeOut: 1e4,
              fragLoadingMaxRetry: 3,
              listeners: ["hlsLevelSwitch", "hlsFpsDrop", "hlsFpsDropLevelCapping"],
              livePositionOffset: 0
            },
            safari: !0
          }, (r.platformInfo.isXP || r.platformInfo.isVista) && (r._config.engine = "flash"), r.abortPreSrc = function () {}, r.abortPreReqSrc = function () {}, r.playedCount = new Qr, r.programEndTime = null, r.inlinearAd = !1, r.inSetSrcThrottle = !1, r.temporarySrcInfo = null, r.isStopped = !0, r.inExecution = !1, r.inViewport = !0, r.onViewportChange = r.onViewportChange(), r.waitInViewport = r.waitInViewport(), r.waitClick = r.waitClick(), r.queue = [], r.pauseAdDelayTimer = null, r.isSeekingActionTimer = null, r.handleContentPlayerEvents = r.handleContentPlayerEvents(), r.ignoreDocumentHiddenCheck = !1, r.clip = {};
          var i = r.defOpt.cover || !0;
          r.fplayer = flowplayer(e, pn({}, r._config, {
            splash: i,
            clip: {
              sources: [{
                type: "video/mp4",
                src: ""
              }]
            }
          })), Sr.prototype.swfHls = r.fplayer.conf.swfHls, r.uiDisableControl = function (e) {
            var t = !1,
              n = e.disabled,
              o = function (o) {
                n = o, 1 != t && e.disable(o)
              };
            return {
              lock: function () {
                t = !0
              },
              unlock: function () {
                t = !1, o(n)
              },
              uiDisable: o
            }
          }(r.fplayer), r.uiDisable = r.uiDisableControl.uiDisable, r.keyboradHandle = Oo(r.fplayer);
          var a = To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).bind(r),
            s = function (e, t, n, o, r, i, a) {
              e.classList.add("litv-player"), e.classList.add("no-buffer"), e.classList.add("fp-mute"), 1 == a && e.classList.add("no-volume"), 1 == i.isIE && e.classList.add("is-ie"), 1 == i.isWin8 ? (e.classList.add("is-win8"), e.classList.add("fp-full")) : e.classList.contains("is-touch") || e.classList.add("fp-full");
              var s = e.querySelector(".fp-controls"),
                l = e.querySelector(".fp-fullscreen");
              l && s.appendChild(l);
              var u = e.querySelector(".fp-player"),
                c = u.querySelector(".fp-waiting");
              c.innerHTML = "<em></em><em></em><em></em>", u.appendChild(c);
              var d = u.querySelector(".fp-play");
              d.removeChild(d.querySelector(".fp-play-rounded-fill"));
              var f = Xr.split(",")[1];
              f = decodeURIComponent(escape(window.atob(f))), (f = (f = (new window.DOMParser).parseFromString(f, "text/xml")).documentElement).setAttribute("class", "fp-play-rounded-fill"), Ro(f), d.appendChild(f);
              var p = u.querySelector(".fp-ui");
              p.classList.add("nonlinear_image_container");
              var h = document.createElement("DIV");
              h.classList.add("logo_container"), h.classList.add("fp-ui"), u.appendChild(h);
              var v = document.createElement("DIV");
              v.classList.add("linear_image_container"), v.classList.add("linear_ad"), u.appendChild(v);
              var m = document.createElement("DIV");
              m.classList.add("house_video_ad_container"), m.classList.add("linear_ad"), u.appendChild(m);
              var g = document.createElement("DIV");
              g.classList.add("ima_container"), g.style.cssText = "position:absolute; top:0; left: 0; width:100%; height:100%;", u.appendChild(g);
              var y = document.createElement("DIV");
              y.classList.add("ad_common_ui"), u.appendChild(y);
              var _ = document.createElement("DIV");
              _.classList.add("ad_controls");
              var b = e.querySelector(".fp-volumebtn").cloneNode();
              _.appendChild(b), y.appendChild(_);
              var w = document.createElement("DIV");
              w.classList.add("ad_play_icon");
              var E = f.cloneNode(!0);
              Ro(E), w.appendChild(E), y.appendChild(w);
              var k = null;

              function C(t) {
                e.removeEventListener("mouseleave", C), k.removeEventListener("mouseleave", C), s.click()
              }
              s.addEventListener("click", function (t) {
                t.target.classList.contains("fp-qsel") && ((k = u.querySelector(".fp-qsel-menu")).classList.contains("fp-active") ? (e.removeEventListener("mouseleave", C), k.removeEventListener("mouseleave", C)) : (k.style.left = "calc(" + (t.target.offsetLeft - (k.offsetWidth >> 1)) + "px + 0.8em)", e.removeEventListener("mouseleave", C), k.removeEventListener("mouseleave", C), e.addEventListener("mouseleave", C), k.addEventListener("mouseleave", C), o(So.QUALITY_MEUN_OPEN)))
              }, !0), e.addEventListener("mouseenter", function (e) {
                t.disabled || s.click()
              }), e.addEventListener("dblclick", function (e) {
                n.fullscreen()
              }), s.addEventListener("dblclick", function (e) {
                e.stopPropagation()
              }, !0), e.addEventListener("click", function (t) {
                r.focus = n, null == n._src && t.stopImmediatePropagation();
                var o = t.target;
                o.classList.contains("fp-duration") || o.classList.contains("fp-remaining") ? t.stopImmediatePropagation() : (e.classList.contains("is-live") || e.classList.contains("is-dvr")) && (o.classList.contains("fp-ui") || o.classList.contains("fp-engine")) && t.stopImmediatePropagation()
              }, !0), r.focus || s.click();
              var T = function () {
                  var e = "viewport-fit=cover",
                    t = null,
                    n = !1;

                  function o() {
                    var e = document.body.scrollTop;
                    document.body.scrollTop += 1, setTimeout(function () {
                      document.body.scrollTop = e
                    }, 1)
                  }
                  return {
                    addCover: function () {
                      if (!n) {
                        t = null;
                        var r = document.querySelector("meta[name=viewport]");
                        if (r) {
                          var i = r.getAttribute("content");
                          i ? (t = i, i.split(",").map(function (e) {
                            return e.trim()
                          }).filter(function (e) {
                            return 0 == e.indexOf("viewport-fit")
                          })[0] ? i.replace(/viewport-fit=.+?\b/, e) : (i.length > 0 && (i += ", "), i += e)) : (t = "", i = e), r.setAttribute("content", i)
                        } else(r = document.createElement("META")).name = "viewport", r.content = e, document.querySelector("head").appendChild(r);
                        n = !0, o()
                      }
                    },
                    reset: function () {
                      if (n) {
                        var e = document.querySelector("meta[name=viewport]");
                        e && (null == t ? document.querySelector("head").removeChild(e) : e.setAttribute("content", t), n = !1, o())
                      }
                    }
                  }
                }(),
                S = 0,
                A = 0,
                I = null;

              function P() {
                var t = u.offsetWidth,
                  n = u.offsetHeight;
                A != t || S != n ? (A = t, S = n, t / n >= 16 / 9 ? (e.classList.remove("straight"), e.classList.add("horizontal"), h.style.width = n * (16 / 9) + "px", h.style.height = n - 40 + "px", h.style.top = "0", h.style.transform = "translate(-50%, 0)") : (e.classList.remove("horizontal"), e.classList.add("straight"), h.style.width = t + "px", h.style.height = t * (9 / 16) + "px", h.style.top = "50%", h.style.transform = "translate(-50%, -50%)"), I = window.requestAnimationFrame(P)) : I = window.requestAnimationFrame(P)
              }
              var O = null,
                x = function () {
                  null == O && (O = document.createElement("DIV")), e.parentNode.insertBefore(O, e), document.body.appendChild(e), document.body.classList.add("litvplayer-fullwindow")
                };
              1 == t.isFullscreen && (flowplayer.support.fullscreen || x(), P()), t.on("fullscreen", function (e) {
                flowplayer.support.fullscreen || x(), T.addCover(), P()
              }).on("fullscreen-exit", function (t) {
                flowplayer.support.fullscreen || (O.parentNode.insertBefore(e, O), O.parentNode.removeChild(O), document.body.classList.remove("litvplayer-fullwindow")), e.classList.remove("straight"), e.classList.remove("horizontal"), h.removeAttribute("style"), T.reset(), window.cancelAnimationFrame(I), S = A = 0
              });
              var M = null;

              function L() {
                e.classList.add("is-mouseover"), clearTimeout(M), M = setTimeout(function () {
                  e.classList.remove("is-mouseover")
                }, t.conf.mouseoutTimeout)
              }

              function R() {
                clearTimeout(M), e.classList.remove("is-mouseover")
              }

              function N(e) {
                e.stopImmediatePropagation()
              }
              return {
                fpPlayerContainer: u,
                logoContainer: h,
                nonlinearImageContainer: p,
                linearImageContainer: v,
                houseVideoAdContainer: m,
                imaAdContainer: g,
                MainViewOperator: {
                  linearAdStart: function () {
                    e.addEventListener("mouseover", N, !0), e.addEventListener("mousemove", L), e.addEventListener("mouseleave", R)
                  },
                  linearAdEnd: function () {
                    e.removeEventListener("mouseover", N, !0), e.removeEventListener("mousemove", L), e.removeEventListener("mouseleave", R)
                  }
                }
              }
            }(e, r.fplayer, r, a, t.prototype, r.platformInfo, r.noVolume),
            l = s.fpPlayerContainer,
            u = s.logoContainer,
            c = s.linearImageContainer,
            d = s.houseVideoAdContainer,
            f = s.nonlinearImageContainer,
            p = s.imaAdContainer,
            h = s.MainViewOperator;
          r.MainViewOperator = h, r.defOpt.decideVisible && !r.platformInfo.isIOSAndInIFrame && function (e, t, n, o) {
            new IntersectionObserver(function (t, r) {
              var i = t[0].intersectionRatio > e;
              i != n.inViewport && (n.inViewport = i, i && !n.isStopped ? o(So.IN_VIEWPORT) : o(So.OUT_VIEWPORT))
            }, {
              threshold: e
            }).observe(t), document.addEventListener(Mo, function () {
              n.isStopped || (document[xo] ? o(So.OUT_VIEWPORT) : n.inViewport && o(So.IN_VIEWPORT))
            })
          }(r.defOpt.visibleThreshold, e.querySelector(".fp-player"), r, a), r.queueNext = r.queueNext.bind(r), ["play", "pause", "seek"].forEach(function (e) {
            r[e] = r.decorateAction(r[e], e)
          });
          var v = r,
            m = {
              get currentTime() {
                return v.fplayer.ready ? v.fplayer.video.time : 0
              },
              get isFullscreen() {
                return v.fplayer.isFullscreen
              },
              get muted() {
                return v.fplayer.muted || !1
              },
              get volume() {
                return v.fplayer.volumeLevel
              }
            };
          r.ssControl = new Zr(r.defOpt.checkContinueStream, r.defOpt.stopContinueStream), r.imaPack = new Ir(p, m, r.platformInfo, r.defOpt.adRequestTimeout), r.houseVideoAd = new Ar(d, m, r.platformInfo), r.houseImageAd = new Zo(u, f, c), r.countdownComponent = r.initCountdownComponent(l), r.liAd = r.initLiAd(r.imaPack, r.houseVideoAd, r.houseImageAd, r.countdownComponent, r.playedCount.transit),
            function (e, t) {
              t.getSupportive().forEach(function (n) {
                var o = n.replace(/\_(\w)/g, function (e, t) {
                    return t.toUpperCase()
                  }),
                  r = "display" + o.replace(/^(.)/g, function (e, t) {
                    return t.toUpperCase()
                  });
                e[r] = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return t[o](e).start()
                }
              })
            }(r, r.liAd), r.fplayer.on("mute", function (e, n) {
              var o = n.muted || !1;
              r.imaPack.mute(o), r.houseVideoAd.mute(o), e.muted = o, e.getCarryInfo = function () {
                return {
                  muted: o
                }
              }, To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.MUTE, e, o)
            }), r.fplayer.on("volume", function (e, n, o) {
              var i = .5 * o;
              r.imaPack.setVolume(i), r.houseVideoAd.setVolume(i), e.volumeLevel = o, e.getCarryInfo = function () {
                return {
                  volumeLevel: o
                }
              }, To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.VOLUME, e, o)
            }), r.fplayer.on("shutdown stop unload flashdisabled", function (e) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, e.type, e)
            }), r.fplayer.on("fullscreen fullscreen-exit", function (e) {
              r.imaPack.resize(), To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, e.type, e)
            }), r.fplayer.on("speed", function (e, n, o) {
              e.level = o, e.getCarryInfo = function () {
                return {
                  level: o
                }
              }, To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.SPEED, e, o)
            }), r.fplayer.on("quality", function (e, n, o) {
              e.index = o, e.getCarryInfo = function () {
                return {
                  index: o
                }
              }, To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.QUALITY, e, o)
            }), r.fplayer.on("load ready", function (e, n, o) {
              e.video = o, e.getCarryInfo = function () {
                return {
                  video: o
                }
              }, To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, e.type, e, o)
            }), r.fplayer.on("beforeseek buffer", function (e, n, o) {
              e.position = o, e.getCarryInfo = function () {
                return {
                  position: o
                }
              }, To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, e.type, e, o)
            }), r.fplayer.on("progress", function (e, n, o) {
              r.playedCount.timeChange(o, e.timeStamp || +new Date), o *= 1e3, e.time = o, e.getCarryInfo = function () {
                return {
                  time: o
                }
              }, To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.PROGRESS, e, o)
            }), r.fplayer.on("error", function (e, n, o) {
              n.error = n.loading = !1, e.error = o, e.getCarryInfo = function () {
                return {
                  error: o
                }
              }, To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.ERROR, e, o)
            }), r.houseImageAd.on("click", function (e) {
              1 == e.is_logo ? To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.CLICK_LOGO, e) : 0 == e.is_linear && To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.CLICK_PAUSE_BANNER, e)
            }), r.houseImageAd.on("impression", function (e) {
              0 == e.is_logo && 0 == e.is_linear && To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.PAUSE_BANNER_IMPRESSION, e)
            }), r.ssControl.on("error", function (e) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.MULTIPLE_ACCOUNT_USING, e)
            }), r.ssControl.on("typeError", function (e) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", r).call(r, So.ERROR, {
                message: "checkContinueStream type error",
                error: e
              })
            });
          var g = new qo(r.houseImageAd);
          return g.on("PauseRequested", function (e) {
            1 == e.disableControl ? (r.keyboradHandle.stop(), r.inlinearAd = !0, r.uiDisable(!0), r._container.classList.add("linear_ad_impression"), r.handleContentPlayerEvents(!1), r.fplayer.pause()) : (r.fplayer.pause(), r.fplayer.one("resume", g.removeAll), setTimeout(r.abortPauseAd, 100))
          }).on("AdMediaComplete", function (e) {
            0 != e.is_linear && (r.keyboradHandle.resume(), r.inlinearAd = !1, r.uiDisable(!1), r._container.classList.remove("linear_ad_impression"), r._container.classList.remove("ad_paused"), r.fplayer.resume(), r.handleContentPlayerEvents(!0))
          }), r.assignImage = function (e, t) {
            return g.assign(e, t)
          }, window.addEventListener("resize", function () {
            r.imaPack.resize()
          }), r
        }
        return bo(t, Do), ot(t, [{
          key: "initCountdownComponent",
          value: function (e) {
            var n = this,
              o = new Fo(e);
            return o.on("click", function (e) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", n).call(n, So.CLICK_SKIP, e)
            }), o
          }
        }, {
          key: "initLiAd",
          value: function (e, n, o, r, i) {
            var a = this,
              s = new Wr(e, n, o, r, i);
            return s.on("LinearAdStart", function (e) {
              a.inlinearAd = !0, a.MainViewOperator.linearAdStart(), a.uiDisable(!0), a._container.classList.add("linear_ad_impression"), a.fplayer.on("progress.inLinearAd", function (e, t, n) {
                a.fplayer.pause()
              }), "midrolls" !== e.partType && a.fplayer.on("beforeseek.inLinearAd", function (e) {
                e.preventDefault()
              })
            }).on("LinearAdComplete", function (e) {
              a.fplayer.off(".inLinearAd"), a.inlinearAd = !1, a.MainViewOperator.linearAdEnd(), a.uiDisable(!1), a._container.classList.remove("linear_ad_impression"), a._container.classList.remove("ad_paused"), 1 == a.lookAfterTemporarySrc(e.partType) && e.preventDefault()
            }).on("RequestPause", function (e) {
              if (a.keyboradHandle.stop(), a.handleContentPlayerEvents(!1), a.fplayer.pause(), a.houseImageAd.closeNonLinearBanner(), !a.clip.live && e.rewind) {
                var n = a.fplayer.video.time + e.rewind;
                n = Math.max(n, 0), a.fplayer.seek(n)
              }
              a.fplayer.on("beforeseek.inLinearAd", function (e) {
                e.preventDefault()
              }), To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.PAUSE_FOR_AD, e)
            }).on("RequestResum", function (e) {
              a.fplayer.off(".inLinearAd"), a._container.classList.remove("ad_paused"), a.keyboradHandle.resume(), 1 != a.ignoreDocumentHiddenCheck && document[xo] ? a.requestPauseAd() : a.fplayer.resume(), a.handleContentPlayerEvents(!0), To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.RESUM_FOR_AD, e)
            }).on("ResetPauseAndResum", function (e) {
              a.MainViewOperator.linearAdEnd(), a._container.classList.remove("linear_ad_impression"), a._container.classList.remove("ad_paused")
            }).on("AdRequest", function (e) {
              1 == e.isLinear && a._container.classList.add("is-loading"), To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.AD_REQUEST, e)
            }).on("Impression", function (e) {}).on("AdMediaStart", function (e) {
              e.duration = 1e3 * e.duration, e.isLinear ? (a._container.classList.remove("is-loading"), To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.LINEAR_AD_MEDIA_START, e, e.duration)) : To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.NONLINEAR_AD_MEDIA_START, e, e.duration)
            }).on("AdMediaComplete", function (e) {
              e.isLinear ? To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.LINEAR_AD_MEDIA_COMPLETE, e) : To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.NONLINEAR_AD_MEDIA_COMPLETE, e)
            }).on("Error", function (e) {
              1 == e.isLinear && !1 !== e.error.fatal && a._container.classList.remove("is-loading"), To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.AD_ERROR, e)
            }).on("MetaError", function (e) {
              console.error("MetaError"), To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.AD_ERROR, {
                message: "LiAd Meta Error",
                liad: e
              })
            }).on("Report", function (e) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.AD_REPORT, e)
            }).on("Progress", function (e) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.AD_PROGRESS, e)
            }).on("AdStreamComplete", function (e) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", a).call(a, So.AD_STREAM_COMPLETE, e)
            }).on("AdStreamCancel", function (e) {
              1 == e.isLinear && a._container.classList.remove("is-loading")
            }).on("AdPause", function (e) {
              1 == a.defOpt.allowAdPasue ? a._container.classList.add("ad_paused") : a.linearAd$play()
            }).on("AdResume", function (e) {
              a._container.classList.remove("ad_paused")
            }), s
          }
        }, {
          key: "prepareVideo",
          value: function (e, t, n, o, r, i) {
            this.abortPreReqSrc();
            var a = this;
            return new sn(function (s, l) {
              a.keyboradHandle.stop(), a.handleContentPlayerEvents(!1);
              var u = function (e, t, n, o, r, i, a, s, l, u) {
                  function c(e) {
                    s.removeEventListener("click", c, !0), s.removeEventListener("touchstart", c, !0), u.triggerUserAction(), l.triggerUserAction()
                  }
                  e = "number" != typeof e ? .2 : Math.max(e / 1e3 >> 0, .2);
                  var d = null,
                    f = !1;
                  return {
                    cancel: function () {
                      f = !0, null != d && (d.off(".wua"), d.off(".setSrc")), s.removeEventListener("click", c, !0), s.removeEventListener("touchstart", c, !0)
                    },
                    listener: function (l, p) {
                      if (f = !1, d = p, p.off(".setSrc"), a && p.volume(1), o && p.mute(!0, !0), r) {
                        var h = void 0,
                          v = void 0;
                        "stop" == l.type ? (h = !1, v = !1) : 1 == p.muted ? (h = !0, v = !0) : (h = !0, v = !1), u.setAutoPlayState({
                          autoplayAllowed: h,
                          autoplayRequiresMuted: v
                        })
                      }
                      sn.resolve().then(function () {
                        return n ? sn.resolve() : (t = p.video, e > t.duration && (e = t.duration), new sn(function (e) {
                          "html5" == p.engine.engineName || i.isIE ? setTimeout(e, 500) : e()
                        }).then(function () {
                          if (!f) return new sn(function (t) {
                            p.seek(e, t)
                          })
                        }));
                        var t
                      }).then(function () {
                        if (!f) return "stop" == l.type ? function () {
                          if (!f) return new sn(function (e) {
                            p.disable(!1), p.one("resume.wua", function () {
                              f || (p.disable(!0), e())
                            })
                          })
                        }() : function () {
                          if (!f) return new sn(function (e) {
                            setTimeout(e)
                          })
                        }()
                      }).then(function () {
                        return 1 == i.isXP || 1 == i.isVista || n || 0 == r ? sn.resolve(!0) : function () {
                          if (!f) return new sn(function (e) {
                            var t = !1,
                              n = null,
                              o = p.video.time,
                              r = function () {
                                null != n && clearInterval(n), p.off(".checkPausedOnLoaded"), t = !0
                              },
                              a = function () {
                                if (f) r();
                                else if (1 != t) {
                                  var n = p.video.time;
                                  o == n ? (r(), e()) : (o = n, p.pause())
                                }
                              };
                            if (1 == i.isFirefox && 1 != i.isXP && 1 != i.isVista) p.pause(a);
                            else {
                              var s = 0;
                              p.on("progress.checkPausedOnLoaded", function () {
                                s++ > 0 && a()
                              }), p.pause(), n = setInterval(function () {
                                a()
                              }, 10)
                            }
                          })
                        }()
                      }).then(function (e) {
                        f || (p.off(".checkTimeChangeOnLoaded"), t(!0 === e))
                      }), "stop" == l.type && (s.addEventListener("click", c, !0), s.addEventListener("touchstart", c, !0))
                    }
                  }
                }(n, s, t, r, i, a.platformInfo, a.noVolume, a._container, a.houseVideoAd, a.imaPack),
                c = u.listener,
                d = u.cancel,
                f = pn({}, a.clip, {
                  sources: function (e) {
                    var t = [];
                    return /\.m3u8/.test(e) ? t = ["application/x-mpegurl", "application/vnd.apple.mpegurl"] : /\.mp4/.test(e) && (t = ["video/mp4"]), t.map(function (t) {
                      return {
                        type: t,
                        src: e
                      }
                    })
                  }(e),
                  cuepoints: o
                });
              a.abortPreReqSrc = d, a.fplayer.one("error.setSrc", function () {
                d(), a.fplayer.error = !1, a.fplayer.loading = !1
              }), a.fplayer.one("ready.setSrc stop.setSrc", c).load(f)
            })
          }
        }, {
          key: "handleContentPlayerEvents",
          value: function () {
            var e = !1;
            return function () {
              var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              t != e && (e = t, t ? this.enableContentPlayerEvents() : this.disableContentPlayerEvents())
            }
          }
        }, {
          key: "enableContentPlayerEvents",
          value: function () {
            var e = this;
            this.fplayer.on("cuepoint.fp", function (t, n, o) {
              if ("midroll_time_code" == o.type) {
                var r = o.duration;
                e.requestMidroll({
                  duration: r
                })
              }
            }).on("seek.fp", function (t, n, o) {
              return e.onSeek(t, n, o)
            }).on("finish.fp", function (t) {
              return e.onFinish(t)
            }).on("pause.fp", function (t) {
              return e.onPause(t)
            }).on("resume.fp", function (t) {
              return e.onResume(t)
            }).on("beforeresume.fp", function (n) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", e).call(e, So.BEFORE_RESUME, n)
            }).on("disable.fp", function (n) {
              To(t.prototype.__proto__ || gn(t.prototype), "trigger", e).call(e, So.DISABLE, n)
            })
          }
        }, {
          key: "disableContentPlayerEvents",
          value: function () {
            this.fplayer.off(".fp")
          }
        }, {
          key: "onSeek",
          value: function (e, n, o) {
            var r = this;
            null != this.isSeekingActionTimer && (clearTimeout(this.isSeekingActionTimer), this.isSeekingActionTimer = null), this._container.classList.add("is-seeking-action"), this.isSeekingActionTimer = setTimeout(function () {
              r._container.classList.remove("is-seeking-action")
            }, 1e3), 1 == this.inlinearAd ? 0 == n.paused && n.pause() : this.clip.live || this.requestMidroll(), e.position = o, e.getCarryInfo = function () {
              return {
                position: o
              }
            }, To(t.prototype.__proto__ || gn(t.prototype), "trigger", this).call(this, So.SEEK, e, o)
          }
        }, {
          key: "onFinish",
          value: function (e) {
            var n = this;
            To(t.prototype.__proto__ || gn(t.prototype), "trigger", this).call(this, So.FILM_FINISH, e), this.abortPauseAd(), this.liAd.postrolls({
              endTime: this.programEndTime
            }).start().then(function () {
              n._container.classList.add("is-ended"), To(t.prototype.__proto__ || gn(t.prototype), "trigger", n).call(n, So.ENDED, {
                currentInfo: n.currentInfo
              })
            }).catch(function (e) {
              !e.isWarning && console.error(e), n._container.classList.add("is-ended"), To(t.prototype.__proto__ || gn(t.prototype), "trigger", n).call(n, So.ENDED, {
                currentInfo: n.currentInfo
              })
            })
          }
        }, {
          key: "onPause",
          value: function (e) {
            To(t.prototype.__proto__ || gn(t.prototype), "trigger", this).call(this, So.PAUSE, e).defaultPrevented || (this.pauseAdDelayTimer = setTimeout(this.requestPauseAd.bind(this), 300))
          }
        }, {
          key: "onResume",
          value: function (e) {
            this._container.classList.remove("is-ended"), To(t.prototype.__proto__ || gn(t.prototype), "trigger", this).call(this, So.RESUME, e), this.abortPauseAd(), this.houseImageAd.closeNonLinearBanner()
          }
        }, {
          key: "abortPauseAd",
          value: function () {
            null != this.pauseAdDelayTimer && (clearTimeout(this.pauseAdDelayTimer), this.pauseAdDelayTimer = null)
          }
        }, {
          key: "decorateAction",
          value: function (e, t) {
            return function () {
              if (1 == this.inlinearAd) {
                var n = "linearAd$" + t;
                return n in this && this[n].apply(this, arguments), this
              }
              return this.inExecution ? this.queue.push({
                fn: e,
                arg: arguments
              }) : (this.inExecution = !0, e.apply(this, arguments)), this
            }
          }
        }, {
          key: "linearAd$play",
          value: function () {
            this.liAd.resume()
          }
        }, {
          key: "linearAd$pause",
          value: function () {
            this.liAd.pause()
          }
        }, {
          key: "queueNext",
          value: function () {
            if (this.inExecution = !1, 0 != this.queue.length) {
              var e = this.queue.shift(),
                t = e.fn,
                n = e.arg;
              t.apply(this, n)
            }
          }
        }, {
          key: "cleanQueue",
          value: function () {
            this.inExecution = !1, this.queue = []
          }
        }, {
          key: "requestMidroll",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.liAd.midrolls(e).start().catch(function (e) {
              return !e.isWarning && console.error(e)
            })
          }
        }, {
          key: "requestPauseAd",
          value: function () {
            return this.liAd.pauseAd().start().catch(function (e) {
              return !e.isWarning && console.error(e)
            })
          }
        }, {
          key: "setSrcThrottle",
          value: function () {
            var e = this;
            this.inSetSrcThrottle = !0, Po().then(function () {
              e.inSetSrcThrottle = !1, null != e.temporarySrcInfo && e.resetSrcByTemporary()
            })
          }
        }, {
          key: "lookAfterTemporarySrc",
          value: function (e) {
            var t = this;
            return null != this.temporarySrcInfo && (this.abortPreSrc(), this.temporarySrcInfo.isWakeFromKeepPlayingAd = !0, sn.resolve().then(function () {
              return t.resetSrcByTemporary()
            }), !0)
          }
        }, {
          key: "resetSrcByTemporary",
          value: function () {
            this.setSrcCore(this.temporarySrcInfo), this.temporarySrcInfo = null
          }
        }, {
          key: "setSrcCore",
          value: function (e) {
            var n = this,
              o = e.autoPlay,
              r = e.src,
              i = e.sessionId,
              a = e.startTime,
              s = e.liadMeta,
              l = e.playAds,
              u = e.assetId,
              c = e.midrollTimeCodes,
              d = e.midrollTimecodeDuration,
              f = e.mediaMode,
              p = void 0 === f ? "vod" : f,
              h = e.keepPlayingAd,
              v = void 0 !== h && h,
              m = e.programEndTime,
              g = void 0 === m ? null : m,
              y = e.midrollBeforeStart,
              _ = void 0 !== y && y,
              b = e.midrollBeforeStartDuration,
              w = void 0 === b ? 0 : b,
              E = e.isWakeFromKeepPlayingAd,
              k = void 0 !== E && E,
              C = e.adUrlReplacement,
              T = void 0 === C ? [] : C,
              S = e.muted,
              A = void 0 !== S && S,
              I = e.cover,
              P = void 0 === I ? null : I;
            if (1 == this.inSetSrcThrottle || 1 == this.inlinearAd && 1 == v) this.temporarySrcInfo = {
              autoPlay: o,
              assetId: u,
              liadMeta: s,
              playAds: l,
              programEndTime: g,
              src: r,
              sessionId: i,
              startTime: a,
              keepPlayingAd: v,
              mediaMode: p,
              midrollTimeCodes: c,
              midrollTimecodeDuration: d,
              midrollBeforeStart: _,
              midrollBeforeStartDuration: w,
              adUrlReplacement: T,
              muted: A,
              cover: P
            };
            else {
              this.keyboradHandle.setMode(p), this.keyboradHandle.stop(), this.programEndTime = g, this.handleContentPlayerEvents(!1), this.fplayer.off(".setSrc"), this.fplayer.off(".inLinearAd"), this.fplayer.pause(), this.abortPreSrc(), this.cleanQueue(), this.inExecution = !0, this.playedCount.reset(), this.uiDisable(!0), this.isStopped = !1, this._container.classList.remove("is-ended"), this._container.classList.remove("is-ready"), this._container.classList.remove("is-stopped"), this._container.classList.remove("is-start"), this._container.classList.add("is-preparing"), this._container.classList.contains("is-error") && (this._container.classList.remove("is-error"), [].concat(ht(this._container.querySelectorAll(".fp-message"))).forEach(function (e) {
                return e.parentNode.removeChild(e)
              })), "string" == typeof P && (this._container.style.backgroundImage = "url('" + P + "')"), this.removeListenViewportStatus(), this.ignoreDocumentHiddenCheck = !1;
              var O = this.isFirst;
              this.isFirst = !1;
              var x = !1,
                M = !1;
              "live" == p ? (x = !0, M = !0, this.ignoreDocumentHiddenCheck = !0, this.clip.live = !0, this.clip.dvr = !1) : "simulation_live" == p ? (M = !0, this.ignoreDocumentHiddenCheck = !0, this.clip.live = !1, this.clip.dvr = !0) : (this.clip.live = !1, this.clip.dvr = !1), this.ssControl.pause(), this.ssControl.skip(l), this.ssControl.start(i), this._src = Io(r), this.liAd.setMeta(s, l, u, M, c, d, a, T, this.ignoreDocumentHiddenCheck);
              var L = this.liAd.getMidrollTimeCodes();
              L = L.map(function (e) {
                return {
                  time: e.time,
                  duration: e.duration,
                  type: "midroll_time_code"
                }
              }), this.abortPreReqSrc(), this.waitInViewport.cancel(), this.waitClick.cancel();
              var R = !1;
              this.abortPreSrc = function () {
                R = !0, n.abortPreReqSrc(), n.waitInViewport.cancel(), n.waitClick.cancel()
              };
              var N = function (e, t, o, r, i) {
                return sn.resolve().then(function () {
                  if (!R) return n._src()
                }).then(function (a) {
                  if (!R) {
                    if (void 0 === a) throw new Error("InvalidSrc: failed to get source or no set source");
                    if (!a) throw new Error("InvalidSrc: " + a);
                    return n.prepareVideo(a, e, t, o, r, i)
                  }
                }).then(function (e) {
                  n._container.classList.remove("is-preparing"), !0 === e && n._container.classList.add("is-start"), 1 == i && 1 == n.defOpt.displayClickToUnMute && 1 == n.fplayer.muted && n.createUnmeuntMask()
                })
              };
              sn.resolve().then(function () {
                return n.waitInViewport.promise()
              }).then(function () {
                if (!R) return 0 == o ? n.waitClick.promise() : void 0
              }).then(function () {
                n.addListenViewportStatus()
              }).then(function () {
                if (1 == O) return n.fplayer.conf.splash = !1, n.fplayer.conf.autoplay = !0, N(x, a, L, A, O)
              }).then(function () {
                if (!R) {
                  var e = [];
                  if (1 == _) return e.push(n.liAd.midrolls({
                    duration: w
                  })), e;
                  if (!k) {
                    var t = n.liAd.getQueue();
                    t.length > 0 ? t.forEach(function (t) {
                      e.push(t)
                    }) : (e.push(n.liAd.prerolls()), "number" == typeof a && 0 !== a || e.push(n.liAd.jingle()))
                  }
                  return e
                }
              }).then(function (e) {
                if (!R) return n._container.classList.add("is-loading"), n.liAd.unlock(), n.liAd.combined(e).start()
              }).then(function () {
                if (0 == O) return sn.resolve().then(function () {
                  if (0 == n.ignoreDocumentHiddenCheck && document[xo]) return n.requestPauseAd(), n.waitClick.promise().then(function () {
                    n.houseImageAd.closeNonLinearBanner()
                  })
                }).then(function () {
                  return N(x, a, L, A, O)
                })
              }).then(function () {
                R || (n.keyboradHandle.resume(), n.uiDisable(!1), n._container.classList.add("is-start"), n._container.classList.remove("is-loading"), 1 == O && (1 != n.ignoreDocumentHiddenCheck && document[xo] ? n.requestPauseAd() : n.fplayer.resume()), n.playedCount.start(), n.handleContentPlayerEvents(!0), To(t.prototype.__proto__ || gn(t.prototype), "trigger", n).call(n, So.IMPRESSION), n.liAd.logo().start().catch(function (e) {
                  return !e.isWarning && console.error(e)
                }), n.queueNext())
              }).catch(function (e) {
                var o = !1,
                  r = !1,
                  i = "unknown";
                "string" == typeof e ? (o = "abort" == e.toLowerCase(), i = e) : e instanceof Error && (i = e.message, r = !0 === e.isWarning), o || r ? console.warn(e.message) : (n.fplayer.message(i), n._container.classList.add("is-error"), console.error(e)), r || (n.keyboradHandle.resume(), n._container.classList.remove("is-loading"), n._container.classList.remove("is-preparing"), n.handleContentPlayerEvents(!0), n.isFirst = O, To(t.prototype.__proto__ || gn(t.prototype), "trigger", n).call(n, So.ERROR, {
                  error: e
                }), n.queueNext())
              }), this.setSrcThrottle()
            }
          }
        }, {
          key: "addListenViewportStatus",
          value: function () {
            this.defOpt.decideVisible && !this.platformInfo.isIOSAndInIFrame && (To(t.prototype.__proto__ || gn(t.prototype), "on", this).call(this, "in_viewport", this.onViewportChange.onInViewport), To(t.prototype.__proto__ || gn(t.prototype), "on", this).call(this, "out_viewport", this.onViewportChange.onOutViewport))
          }
        }, {
          key: "removeListenViewportStatus",
          value: function () {
            this.defOpt.decideVisible && !this.platformInfo.isIOSAndInIFrame && (To(t.prototype.__proto__ || gn(t.prototype), "off", this).call(this, "in_viewport", this.onViewportChange.onInViewport), To(t.prototype.__proto__ || gn(t.prototype), "off", this).call(this, "out_viewport", this.onViewportChange.onOutViewport))
          }
        }, {
          key: "onViewportChange",
          value: function () {
            var e = !1,
              t = this;
            return {
              onInViewport: function () {
                t._container.classList.remove("waiting-enter-viewport"), 0 != e && (e = !1, 0 == t.inlinearAd ? t.play() : t.liAd.resume())
              },
              onOutViewport: function () {
                if (t._container.classList.add("waiting-enter-viewport"), 0 == t.inlinearAd) {
                  if (1 == t.fplayer.paused) return;
                  t.keyboradHandle.stop(), t.handleContentPlayerEvents(!1), t.pause(), t.fplayer.on("resume.ino", function () {
                    t.keyboradHandle.resume(), t.fplayer.off(".ino"), t.handleContentPlayerEvents(!0), t.houseImageAd.closeNonLinearBanner()
                  })
                } else {
                  if (1 == t.liAd.paused) return;
                  t.liAd.pause()
                }
                e = !0
              }
            }
          }
        }, {
          key: "waitInViewport",
          value: function () {
            var e = this,
              t = null;
            return {
              promise: function () {
                return new sn(function (n) {
                  e.defOpt.decideVisible && !e.platformInfo.isIOSAndInIFrame ? (e._container.classList.add("waiting-enter-viewport"), (t = new IntersectionObserver(function (t, o) {
                    1 == t[0].intersectionRatio > e.defOpt.visibleThreshold && (o.disconnect(), o = null, e._container.classList.remove("waiting-enter-viewport"), n())
                  }, {
                    threshold: e.defOpt.visibleThreshold
                  })).observe(e._container)) : n()
                })
              },
              cancel: function () {
                null != t && (t.disconnect(), t = null)
              }
            }
          }
        }, {
          key: "waitClick",
          value: function () {
            var e = this,
              t = function () {},
              n = this._container,
              o = function () {
                n.classList.remove("wait-click"), n.removeEventListener("click", r, !0), n.removeEventListener("touchstart", r, !0)
              },
              r = function (n) {
                e.imaPack.triggerUserAction(), e.houseVideoAd.triggerUserAction(), o(), t()
              };
            return {
              promise: function () {
                return new sn(function (e, o) {
                  t = e, n.classList.add("wait-click"), n.addEventListener("click", r, !0), n.addEventListener("touchstart", r, !0)
                })
              },
              cancel: function () {
                t = function () {}, o()
              }
            }
          }
        }, {
          key: "createUnmeuntMask",
          value: function () {
            this.uiDisableControl.lock();
            var e = document.createElement("DIV");
            e.classList.add("unumute"), e.classList.add("fp-icon"), this._container.appendChild(e);
            var t = function (n) {
              this.uiDisableControl.unlock(), this.fplayer.mute(!1), e.removeEventListener("click", t, !0), n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), e.parentNode.removeChild(e)
            }.bind(this);
            e.addEventListener("click", t, !0)
          }
        }, {
          key: "trigger",
          value: function () {
            return this
          }
        }, {
          key: "setSrc",
          value: function (e) {
            var t = e.autoPlay,
              n = void 0 === t || t,
              o = e.src,
              r = e.sessionId,
              i = e.startTime,
              a = e.liadMeta,
              s = e.playAds,
              l = e.assetId,
              u = e.midrollTimeCodes,
              c = void 0 === u ? [] : u,
              d = e.midrollTimecodeDuration,
              f = void 0 === d ? [] : d,
              p = e.mediaMode,
              h = void 0 === p ? "vod" : p,
              v = e.keepPlayingAd,
              m = void 0 !== v && v,
              g = e.programEndTime,
              y = void 0 === g ? null : g,
              _ = e.midrollBeforeStart,
              b = void 0 !== _ && _,
              w = e.midrollBeforeStartDuration,
              E = void 0 === w ? 0 : w,
              k = e.adUrlReplacement,
              C = void 0 === k ? [] : k,
              T = e.muted,
              S = void 0 !== T && T,
              A = e.cover,
              I = void 0 === A ? null : A;
            this.defOpt.decideVisible && this.platformInfo.isIOSAndInIFrame && (n = !1), null == c && (c = []), null == f && (f = []), null == C && (C = []), "string" == typeof i ? i = parseInt(i) : "number" != typeof i && (i = 0);
            var P = function (e) {
              return e / 1e3 >> 0
            };
            return c = c.map(P), f = f.map(P), E = P(E), this.setSrcCore({
              autoPlay: n,
              assetId: l,
              liadMeta: a,
              playAds: s,
              programEndTime: y,
              src: o,
              sessionId: r,
              startTime: i,
              keepPlayingAd: m,
              mediaMode: h,
              midrollTimeCodes: c,
              midrollTimecodeDuration: f,
              midrollBeforeStart: b,
              midrollBeforeStartDuration: E,
              adUrlReplacement: C,
              muted: S,
              cover: I
            }), this
          }
        }, {
          key: "play",
          value: function () {
            this.fplayer.resume(), this.queueNext()
          }
        }, {
          key: "pause",
          value: function () {
            this.fplayer.paused ? this.queueNext() : this.fplayer.pause(this.queueNext)
          }
        }, {
          key: "seek",
          value: function (e) {
            this.fplayer.seek(e / 1e3 >> 0, this.queueNext)
          }
        }, {
          key: "fastForward",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4,
              t = Math.min((this.currentTime + e) / 1e3 >> 0, this.fplayer.video.duration - 1);
            this.fplayer.seek(t)
          }
        }, {
          key: "rewind",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4,
              t = Math.max((this.currentTime - e) / 1e3 >> 0, 0);
            this.fplayer.seek(t)
          }
        }, {
          key: "stop",
          value: function () {
            1 != this.isStopped && (this.inlinearAd = !1, this.keyboradHandle.stop(), this.cleanQueue(), this.inExecution = !0, this.isStopped = !0, this._container.classList.add("is-stopped"), this.handleContentPlayerEvents(!1), this.fplayer.stop(), this.liAd.reset(), this.ssControl.stop(), this.queueNext())
          }
        }, {
          key: "mute",
          value: function (e) {
            return this.fplayer.mute(e), this
          }
        }, {
          key: "volume",
          value: function (e) {
            return this.fplayer.volume(e), this
          }
        }, {
          key: "fullscreen",
          value: function (e) {
            if (!0 === e) {
              if (1 == this.fplayer.isFullscreen) return this
            } else if (!1 === e && 0 == this.fplayer.isFullscreen) return this;
            var t = this.fplayer.disabled;
            return t && this.uiDisable(!1), this.fplayer.fullscreen(), t && this.uiDisable(!0), this
          }
        }, {
          key: "destroy",
          value: function () {}
        }, {
          key: "stopLinearAd",
          value: function () {
            this.liAd.stopLinearAd()
          }
        }, {
          key: "on",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "on", this).apply(this, arguments), this
          }
        }, {
          key: "one",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "one", this).apply(this, arguments), this
          }
        }, {
          key: "off",
          value: function () {
            return To(t.prototype.__proto__ || gn(t.prototype), "off", this).apply(this, arguments), this
          }
        }, {
          key: "addCount",
          value: function (e, t) {
            return this.playedCount.addCount(e, t)
          }
        }, {
          key: "getAllCount",
          value: function () {
            return this.playedCount.getAllCount()
          }
        }, {
          key: "getEngineName",
          value: function () {
            return this.fplayer.engine.engineName
          }
        }, {
          key: "getLiAdMeta",
          value: function (e) {
            if (!e) return this.liAd.oriLiadMeta;
            var t = this.liAd;
            return {
              oriLiadMeta: t.oriLiadMeta,
              elements: t.elements,
              parts: t.parts,
              midrollTimeCodes: t.midrollTimeCodes,
              role: t.role
            }
          }
        }, {
          key: "displayTimeline",
          value: function () {
            this._container.classList.toggle("fix_controls")
          }
        }, {
          key: "setVpaidModeToInsecure",
          value: function () {
            this.imaPack.setVpaidModeToInsecure()
          }
        }, {
          key: "setVpaidModeToEnable",
          value: function () {
            this.imaPack.setVpaidModeToEnable()
          }
        }, {
          key: "getVpaidMode",
          value: function () {
            return this.imaPack.getVpaidMode()
          }
        }, {
          key: "getAllPlayerVolumeLevel",
          value: function () {
            return {
              content: this.fplayer.volumeLevel,
              ima: this.imaPack.getVolume(),
              houseAd: this.houseVideoAd.getVolume()
            }
          }
        }, {
          key: "getCurrentExternalAdInfo",
          value: function () {
            return this.liAd.getCurrentExternalAdInfo()
          }
        }, {
          key: "sendCurrentExternalAdInfo",
          value: function () {
            return this.liAd.sendCurrentExternalAdInfo(this.defOpt.appInfo)
          }
        }, {
          key: "vastTest",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.liAd.vastTest(e, t)
          }
        }, {
          key: "currentTime",
          get: function () {
            return this.fplayer.ready ? 1e3 * this.fplayer.video.time : 0
          }
        }, {
          key: "volumeLevel",
          get: function () {
            return this.fplayer.volumeLevel
          }
        }, {
          key: "currentInfo",
          get: function () {
            return {
              percentage: (this.currentTime / (1e3 * this.fplayer.video.duration) * 1e3 >> 0) / 1e3,
              played: this.playedCount.getMainCount()
            }
          }
        }]), t
      }();
    ri.prototype.EVENT = ri.EVENT = So,
      function (e) {
        e.prototype.traced = {
          adProgress: !1,
          adReport: !1,
          error: !1
        }, Object.defineProperty(e.prototype, "trace", {
          get: function () {
            var e = this;
            return {
              all: function () {
                return this.adProgress().adReport().error()
              },
              adProgress: function () {
                return 1 == e.traced.adProgress ? this : (e.traced.adProgress = !0, e.on(So.AD_PROGRESS, ei), this)
              },
              adReport: function () {
                return 1 == e.traced.adReport ? this : (e.traced.adReport = !0, e.on(So.AD_REPORT, ti), this)
              },
              error: function () {
                return 1 == e.traced.error ? this : (e.traced.error = !0, e.on(So.AD_ERROR, ni), e.on(So.ERROR, ni), this)
              }
            }
          }
        }), Object.defineProperty(e.prototype, "untrace", {
          get: function () {
            var e = this;
            return {
              all: function () {
                return this.adProgress().adReport().error()
              },
              adProgress: function () {
                return 0 == e.traced.adProgress ? this : (e.traced.adProgress = !1, e.off(So.AD_PROGRESS, ei), this)
              },
              adReport: function () {
                return 0 == e.traced.adReport ? this : (e.traced.adReport = !1, e.off(So.AD_REPORT, ti), this)
              },
              error: function () {
                return 0 == e.traced.error ? this : (e.traced.error = !1, e.off(So.AD_ERROR, ni), e.off(So.ERROR, ni), this)
              }
            }
          }
        })
      }(ri);
    var ii = "ontouchstart" in window ? function () {
        function e(e) {
          try {
            navigator.vibrate([500, 100, 500])
          } catch (e) {}
          e.sendCurrentExternalAdInfo().then(function () {
            try {
              navigator.vibrate([100, 50, 50, 50, 50])
            } catch (e) {}
          }).catch(function (e) {
            console.warn(e)
          })
        }
        var t = function () {
          var e = 3e3,
            t = 0,
            n = 0,
            o = 0,
            r = 0,
            i = 0,
            a = 0,
            s = 0,
            l = 0,
            u = null,
            c = function () {};

          function d(d) {
            var f = d.accelerationIncludingGravity,
              p = (new Date).getTime(),
              h = p - l;
            h > 100 && (l = p, r = f.x, i = f.y, a = f.z, Math.abs(r + i + a - t - n - o) / h * 1e4 > e && (clearTimeout(u), u = setTimeout(function () {
              return s = 0
            }, 1e3), s++ > 8 && (s = 0, c())), t = r, n = i, o = a)
          }
          return {
            start: function (e) {
              var t = this;
              window.addEventListener("devicemotion", d), c = e, setTimeout(function () {
                t.stop()
              }, 3e3)
            },
            stop: function () {
              window.removeEventListener("devicemotion", d), c = function () {}, clearTimeout(u), s = 0
            }
          }
        }();
        return {
          addPlayer: function (n, o) {
            var r = function (t) {
              return function (n) {
                null != t.getCurrentExternalAdInfo() && e(t)
              }
            }(o);
            if (o.copyListener = r, n.addEventListener("copy", r, !0), window.DeviceMotionEvent) {
              var i = function (n) {
                return function (o) {
                  if (null != n.getCurrentExternalAdInfo()) {
                    o.preventDefault(), o.stopImmediatePropagation();
                    try {
                      navigator.vibrate([500])
                    } catch (o) {}
                    t.start(function () {
                      e(n)
                    })
                  }
                }
              }(o);
              o.contextmenuListener = i, n.addEventListener("contextmenu", i, !0)
            }
          },
          removePlayer: function (e, t) {
            e.removeEventListener("copy", t.copyListener, !0), t.copyListener = null, "function" == typeof t.contextmenuListener && (e.addEventListener("contextmenu", t.contextmenuListener, !0), t.contextmenuListener = null)
          }
        }
      }() : function () {
        var e = !1,
          t = [16, 18, 90],
          n = [],
          o = null;

        function r(e, t) {
          if (e.length != t.length) return !1;
          for (var n = 0, o = e.length; n < o; n++)
            if (-1 == t.indexOf(e[n])) return !1;
          return !0
        }

        function i() {
          clearTimeout(o), o = setTimeout(function () {
            e = !1, n = []
          }, 7e3)
        }
        return document.addEventListener("keydown", function (o) {
          n.indexOf(o.keyCode) < 0 && (i(), n.push(o.keyCode), e = r(t, n))
        }, !0), document.addEventListener("keyup", function (a) {
          i(), n = n.filter(function (e) {
            return e != a.keyCode
          }), e = r(t, n), 0 == n.length && clearTimeout(o)
        }, !0), {
          addPlayer: function (t, n) {
            var o = function (t) {
              return function (n) {
                !0 === e && (n.preventDefault(), n.stopImmediatePropagation(), t.sendCurrentExternalAdInfo())
              }
            }(n);
            n.contextmenuListener = o, t.addEventListener("contextmenu", o, !0)
          },
          removePlayer: function (e, t) {
            e.removeEventListener("contextmenu", t.contextmenuListener, !0), t.contextmenuListener = null
          }
        }
      }(),
      ai = function () {
        function e() {
          throw Ze(this, e), "This is a factory, you must create a new LiTVPlayer instance using the 'create' method."
        }
        return ot(e, null, [{
          key: "create",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (this.instanceMap = this.instanceMap || new Qe, this.instanceMap.has(e)) return this.instanceMap.get(e);
            this.count = "number" == typeof this.count ? ++this.count : 0;
            var n = new ri(e, t, "1.0.24");
            return this["$" + this.count] = n, this.instanceMap.set(e, n), ii.addPlayer(e, n), n
          }
        }]), e
      }();
    ai.prototype.EVENT = ai.EVENT = So, ai.prototype.version = ai.version = "1.0.24", window.LiTVPlayer = window.LiTVPlayer || ai, document.addEventListener("keydown", function (e) {
      var t = ri.prototype.focus;
      if (t && 0 != t.fplayer.conf.keyboard) {
        var n = e.ctrlKey || e.metaKey || e.altKey,
          o = e.which;
        !n && e.shiftKey || function () {
          switch (o) {
            case 39:
            case 76:
              return t.fastForward(), !0;
            case 37:
            case 72:
              return t.rewind(), !0
          }
        }() && e.stopImmediatePropagation()
      }
    }, !0), t.default = ai
  }).call(this, n(12))
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(4)),
    i = function (e) {
      function t() {
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t),
          function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
      }
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, r.default), o(t, [{
        key: "show",
        value: function (e) {
          (e = e || {}).dialogTitle = "<div class='skip_ad_dialog_title'>免看廣告 VIP還可以看更多</div>", e.dialogHtml = s(e),
            function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "show", this).call(this, e), $(".alert_module").addClass("skipAd"), a(e)
        }
      }]), t
    }(),
    a = function (e) {
      $(".skip_ad_dialog_content").find(".btn_section .btn").click(function (t) {
        var n = e.clickCallback;
        l.dismiss(), "function" == typeof n && n()
      })
    },
    s = function (e) {
      var t = new Array;
      return t.push("<div class='skip_ad_dialog_content'>"), t.push("\t<section class='text_section'>"), t.push("\t\t<div class='desc'>馬上變身VIP!省下萬秒看廣告的時間</div>"), t.push("\t\t<div class='desc'>電影、戲劇、動漫、綜藝、兒童</div>"), t.push("\t\t<div class='desc'>通通可以看!</div>"), t.push("\t</section>"), t.push("\t<section class='btn_section'>"), t.push("\t\t<div class='desc'>隨選影片餐$99/月</div>"), t.push("\t\t<a class='btn  immediate_updating_vip_btn' href='" + e.clickThrough + "' target='_blank'>立即升級VIP</a>"), t.push("\t</section>"), t.push("</div>"), t.join("")
    },
    l = new i;
  t.default = l
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), window.litv = window.litv || {}, litv.playerIdleTime = 144e5, t.default = function (e) {
    var t = !1,
      n = null,
      o = null;
    this.start = function () {
      r()
    }, this.stop = function () {
      i()
    };
    var r = function () {
        if (!t) {
          litv.debug && (console.group("idleForHours.start()"), console.groupEnd()), t = !0;
          var o = 0;
          n = setInterval(function () {
            o++, litv.debug && (console.group("idleForHours.count()"), console.log("count =>", 6e4 * o), console.log("limit =>", litv.playerIdleTime), console.groupEnd()), 6e4 * o >= litv.playerIdleTime && (i(), e.stop(), e.mask.idleOverHours())
          }, 6e4), $(window).on("mousemove", a), $(window).on("touchmove", a)
        }
      },
      i = function () {
        t && (litv.debug && (console.group("idleForHours.stop()"), console.groupEnd()), t = !1, clearTimeout(o), clearInterval(n), $(window).off("mousemove", a), $(window).off("touchmove", a))
      },
      a = function (e) {
        clearTimeout(o), o = setTimeout(function () {
          litv.debug && (console.group("idleForHours.reset()"), console.log("event =>", e), console.groupEnd()), i(), r()
        }, 1e3)
      }
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(1)),
    i = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.callPlayer = t, this.maxRecheck = 60, this.timeout = null, this.request = null
      }
      return o(e, [{
        key: "start",
        value: function () {
          var e = this;
          e.stop();
          var t = e.callPlayer.program,
            n = e.callPlayer.video;
          if (t && t.contentId && n && 1 != n.playAds) {
            var o = n.sessionId;
            o && (e.request = {
              url: "/vod/ajax/continueStreaming",
              selectMethod: "GET",
              request: {
                sessionId: o
              }
            }, r.default.get(e.request, function (t, n) {
              n.maxRecheck && (e.maxRecheck = n.maxRecheck), t == e.request ? 0 == n.continueFlag ? e.callPlayer.mask.multipleStreaming() : (n.minRecheck || (n.minRecheck = 60), e.timeout = setTimeout(function () {
                e.start()
              }, 1e3 * n.minRecheck)) : e.timeout = setTimeout(function () {
                e.start()
              }, 1e3 * e.maxRecheck)
            }, function (t) {
              e.timeout = setTimeout(function () {
                e.start()
              }, 1e3 * e.maxRecheck)
            }))
          }
        }
      }, {
        key: "stop",
        value: function () {
          clearTimeout(this.timeout)
        }
      }]), e
    }();
  t.default = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(n(1));
  t.default = function (e, t, n) {
    var r = e.video.sessionId;
    if (r) {
      var i = {
        url: "/vod/ajax/stopStreaming",
        selectMethod: "GET",
        request: {
          sessionId: r
        }
      };
      o.default.get(i, function (e, n) {
        "function" == typeof t && t(e, n)
      }, function (e) {
        "function" == typeof n && n(e)
      })
    }
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = s(n(0)),
    r = s(n(158)),
    i = s(n(162)),
    a = s(n(2));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = {
    KEYIN: "remote.event.keyin"
  };
  t.default = function (e) {
    var t = this;
    t.callPlayer = e, t.EVENT = a.default.extend({}, l);
    var n = !1,
      s = new r.default(t),
      u = new i.default(t),
      c = !1;
    this.show = function () {
      n ? s.show() : u.show(), c = !0
    }, this.dismiss = function () {
      s.dismiss(), u.dismiss(), c = !1
    }, this.message = function (e) {
      s.message(e), u.message(e)
    }, o.default.on(t.callPlayer.EVENT.FULLSCREEN, function (e) {
      e == t.callPlayer && (n = !0, u.dismiss(), 1 == c && s.show())
    }), o.default.on(t.callPlayer.EVENT.FULLSCREEN_EXIT, function (e) {
      e == t.callPlayer && (n = !1, s.dismiss(), 1 == c && u.show())
    }), o.default.on(s.EVENT.KEYIN, function (e, n) {
      e == s && o.default.emit(t.EVENT.KEYIN, t, n)
    }), o.default.on(u.EVENT.KEYIN, function (e, n) {
      e == u && o.default.emit(t.EVENT.KEYIN, t, n)
    })
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = a(n(38)),
    r = a(n(0)),
    i = a(n(2));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = {
    KEYIN: "fullscreen.event.keyin"
  };
  t.default = function (e) {
    var t = this;
    t.EVENT = i.default.extend({}, s);
    var n = e.callPlayer.playerView.getFlowplayerSection(),
      a = null;
    this.show = function () {
      var e = n.find(".fp-player");
      a || (a = new o.default({
        container: e,
        hiddenByIdle: !0
      }), l()), a.show(), u()
    }, this.dismiss = function () {
      a && a.dismiss()
    }, this.message = function (e) {
      a && a.message(e)
    }, Object.defineProperty(t, "exist", {
      get: function () {
        if (a) return a.exist
      }
    });
    var l = function () {
        r.default.on(a.EVENT.KEYIN, function (e, n) {
          e == a && r.default.emit(t.EVENT.KEYIN, t, n)
        })
      },
      u = function () {
        var e = n.find(".fp-player .remote_control_section");
        e.addClass("ga_fullscreen_remote"), e.find("[data-number='+']").addClass("ga_fullscreen_remote_up"), e.find("[data-number='-']").addClass("ga_fullscreen_remote_down"), e.find("[data-number='b']").addClass("ga_fullscreen_remote_return")
      }
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    left: [{
      text: "1",
      number: "1"
    }, {
      text: "2",
      number: "2"
    }, {
      text: "3",
      number: "3"
    }, {
      text: "4",
      number: "4"
    }, {
      text: "5",
      number: "5"
    }, {
      text: "6",
      number: "6"
    }, {
      text: "7",
      number: "7"
    }, {
      text: "8",
      number: "8"
    }, {
      text: "9",
      number: "9"
    }, {
      text: "往返",
      number: "b"
    }, {
      text: "0",
      number: "0"
    }, {
      text: "確定",
      number: "e"
    }],
    right: [{
      text: "CH+",
      number: "+"
    }, {
      text: "CH-",
      number: "-"
    }]
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    top: [{
      text: "1",
      number: "1"
    }, {
      text: "2",
      number: "2"
    }, {
      text: "3",
      number: "3"
    }, {
      text: "4",
      number: "4"
    }, {
      text: "5",
      number: "5"
    }, {
      text: "6",
      number: "6"
    }, {
      text: "7",
      number: "7"
    }, {
      text: "8",
      number: "8"
    }, {
      text: "9",
      number: "9"
    }, {
      text: "0",
      number: "0"
    }],
    bottom: [{
      text: "往返",
      number: "b"
    }, {
      text: "CH+",
      number: "+"
    }, {
      text: "CH-",
      number: "-"
    }, {
      text: "確定",
      number: "e"
    }]
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = a(n(5)),
    r = a(n(0)),
    i = a(n(2));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = {
    CLICK: "dragRemoteControlIcon.event.click"
  };
  t.default = function (e) {
    var t = this;
    t.EVENT = i.default.extend({}, s);
    var n = null,
      a = null,
      l = 0,
      u = 0,
      c = 0,
      d = 0,
      f = 0,
      p = 0,
      h = null,
      v = null,
      m = null;
    t.start = function () {
      n = e.children(".remote_control_section"), a = n.find(".remote_control_icon"), o.default.detectIsMobile() ? (k.set(), a.on("touchstart", g)) : a.on("mousedown", g)
    }, t.end = function () {
      o.default.detectIsMobile() ? (k.clear(), a.off("touchstart", g), $(document).off("touchend", _), $(document).off("touchmove", y)) : (a.off("mousedown", g), $(document).off("mouseup", _), $(document).off("mousemove", y))
    };
    var g = function (e) {
        (e = e || window.event).preventDefault(), f = (new Date).getTime(), a.css("cursor", "move"), a.addClass("hover"), o.default.detectIsMobile() ? (c = e.originalEvent.touches[0].clientX, d = e.originalEvent.touches[0].clientY, $(document).on("touchend", _), $(document).on("touchmove", y)) : (c = e.clientX, d = e.clientY, $(document).on("mouseup", _), $(document).on("mousemove", y)), h = {
          x: c,
          y: d
        }, v = {
          x: c,
          y: d
        }
      },
      y = function (e) {
        (e = e || window.event).preventDefault(), o.default.detectIsMobile() ? (l = c - e.originalEvent.touches[0].clientX, u = d - e.originalEvent.touches[0].clientY, c = e.originalEvent.touches[0].clientX, d = e.originalEvent.touches[0].clientY) : (l = c - e.clientX, u = d - e.clientY, c = e.clientX, d = e.clientY), v = {
          x: c,
          y: d
        };
        var t = w(u),
          r = E(l);
        n.css("top", t + "px"), n.css("left", r + "px")
      },
      _ = function e(n) {
        a.removeClass("hover"), a.css("cursor", ""), o.default.detectIsMobile() ? ($(document).off("touchend", e), $(document).off("touchmove", y)) : ($(document).off("mouseup", e), $(document).off("mousemove", y));
        var i = Math.pow(h.x - v.x, 2) + Math.pow(h.y - v.y, 2);
        i = Math.sqrt(i), p = (new Date).getTime(), i < 10 && p - f < 300 ? b(function () {
          r.default.emit(t.EVENT.CLICK, t)
        }) : b()
      },
      b = function (e) {
        var t = n.position().top,
          o = n.position().left,
          r = $(window).width(),
          i = $(window).height(),
          a = t + n.height() / 2,
          s = o + n.width() / 2,
          l = {
            top: a,
            bottom: i - a,
            left: s,
            right: r - s
          },
          u = null;
        for (var c in l) {
          var d = l[c];
          u ? d < u.gap && (u = {
            key: c,
            gap: Math.abs(d)
          }) : u = {
            key: c,
            gap: Math.abs(d)
          }
        }
        "top" == u.key ? u = {
          top: "0px"
        } : "bottom" == u.key ? u = {
          top: i - n.outerHeight() + "px"
        } : "left" == u.key ? u = {
          left: "0px"
        } : "right" == u.key && (u = {
          left: r - n.outerWidth() + "px"
        }), n.stop().animate(u, "fast", e)
      },
      w = function (e) {
        var t = n.position().top - e;
        if (t <= 0) return 0;
        var o = t + n.outerHeight(),
          r = $(window).height();
        return o >= r ? t = r - n.outerHeight() : t
      },
      E = function (e) {
        var t = n.position().left - e;
        if (t <= 0) return 0;
        var o = t + n.outerWidth(),
          r = $(window).width();
        return o >= r ? t = r - n.outerWidth() : t
      },
      k = new function () {
        this.set = function () {
          if (!m || !m.cssRules.length) {
            if (!m) {
              var e = document.createElement("style");
              document.head.appendChild(e), m = e.sheet
            }
            m.insertRule(".remote_control_section{touch-action: pan-y;}", m.cssRules.length)
          }
        }, this.clear = function () {
          m && m.cssRules.length && m.deleteRule(0)
        }
      }
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = a(n(38)),
    r = a(n(0)),
    i = a(n(2));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var s = {
    KEYIN: "exitFullscreen.event.keyin"
  };
  t.default = function (e) {
    var t = this;
    t.EVENT = i.default.extend({}, s);
    var n = $("body"),
      a = new o.default({
        container: n
      });
    this.show = function () {
      a.show(), l()
    }, this.dismiss = function () {
      a.dismiss()
    }, this.message = function (e) {
      a.message(e)
    }, Object.defineProperty(t, "exist", {
      get: function () {
        return a.exist
      }
    });
    var l = function () {
      var e = n.find(".remote_control_section");
      e.addClass("ga_exit_full_screen_remote"), e.find("[data-number='+']").addClass("ga_exit_fullscreen_remote_up"), e.find("[data-number='-']").addClass("ga_exit_fullscreen_remote_down"), e.find("[data-number='b']").addClass("ga_exit_fullscreen_remote_return")
    };
    r.default.on(a.EVENT.KEYIN, function (e, n) {
      e == a && r.default.emit(t.EVENT.KEYIN, t, n)
    })
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(n(7));
  t.default = function () {
    var e = this,
      t = new Array,
      n = new Array;
    this.getWatchRecord = function () {
      return r(t)
    }, this.getRemoteRecord = function () {
      return r(n)
    }, this.getRemoteRecords = function () {
      return n
    }, this.pushWatchRecord = function (n) {
      e.pushRemoteRecord(n), i(n, t)
    }, this.pushRemoteRecord = function (e) {
      i(e, n)
    };
    var r = function (e) {
        if (!(e.length < 2)) return e[0]
      },
      i = function (e, t) {
        if (o.default.isLive(e))
          if (t.length <= 0) t.push(e);
          else if (1 == t.length) {
          if (t[0].contentId == e.contentId) return;
          t.push(e)
        } else {
          if (t[1].contentId == e.contentId) return;
          t[0] = t[1], t[1] = e
        }
      }
  }
}, , , function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(3)),
    r = new function () {
      var e = new Array;
      this.setParam = function (n) {
        var r = new t;
        return r.setParam(n), e.push(r), o.default.getPosterBannerStyle(), r
      };
      var t = function () {
        var e = this;
        this.setParam = function (o) {
          e.param = o;
          var r = $(e.param.container),
            i = n(e.param.data);
          r.html(i), r.html() && (t(e.param.data), r.find("img.lazyload").lazyload())
        };
        var t = function (t) {
            $(e.param.container).find(".more_free_vod").click(function (n) {
              if ("function" == typeof e.param.clickCallback) {
                var r = o.default.getEventAttribute(n, "data-id"),
                  i = t[0].vodList[r];
                e.param.clickCallback(i), n.preventDefault()
              }
            })
          },
          n = function (e) {
            var t = new Array,
              n = (e = e[0]).vodList;
            t.push("<div class='player_recommand_body_view'>");
            for (var o = 0; o < n.length; o++) {
              var r = n[o],
                i = "/vod/" + r.contentType + "/content.do?content_id=" + r.contentId;
              if ("l" == e.programPublishPicsType) t.push("<a class='more_free_vod landscape' title='" + r.title + "' href='" + i + "' data-id=" + o + ">"), t.push("<div class='vod_poster'>"), t.push("<div class='padding_box'></div>"), t.push("<img class='img lazyload' data-src='" + r.videoImage + "' />"), t.push("<div class='play_icon'></div>"), t.push("</div>"), t.push("<div class='vod_title'>" + r.title + "</div>");
              else {
                if (t.push("<a class='more_free_vod' title='" + r.title + "' href='" + i + "' data-id=" + o + ">"), t.push("<div class='vod_poster'>"), t.push("<div class='padding_box'></div>"), t.push("<img class='img lazyload' data-src='" + r.imageFile + "' />"), r.posterBanner)
                  for (var a = 0; a < r.posterBanner.length; a++) {
                    var s = r.posterBanner[a];
                    t.push("<div class='poster_banner_poster_icon' data-poster-banner='" + s + "'></div>")
                  }
                t.push("<div class='play_icon'></div>"), t.push("</div>"), r.score ? (t.push("<div class='vod_score'>" + r.score + "</div>"), t.push("<div class='vod_title'>" + r.title + "</div>")) : t.push("<div class='vod_title'>" + r.title + "</div>"), "movie" == r.contentType ? t.push("<div class='vod_display_count'>" + r.commentary + "</div>") : t.push("<div class='vod_display_count'>" + r.displayCount + "</div>")
              }
              t.push("</a>")
            }
            return t.push("</div>"), t.join("")
          }
      }
    };
  t.default = r
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
  e.exports = n(202)
}, function (e, t, n) {
  "use strict";
  n(29);
  var o = w(n(132)),
    r = w(n(21)),
    i = w(n(7)),
    a = w(n(203)),
    s = w(n(204)),
    l = w(n(205)),
    u = w(n(206)),
    c = w(n(166)),
    d = w(n(207)),
    f = w(n(208)),
    p = (w(n(5)), w(n(6))),
    h = (w(n(114)), w(n(123)), w(n(1))),
    v = w(n(124)),
    m = w(n(137)),
    g = w(n(31)),
    y = w(n(209)),
    _ = w(n(0)),
    b = w(n(2));

  function w(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }! function () {
    window.litv = window.litv || {};
    var e = null,
      t = new o.default;
    $(document).ready(function () {
      k(), C(programInfo), R(programInfo), N(programInfo), E(programInfo), V(programInfo), n(programInfo), w(), j() ? (q(programInfo.contentId, j()), p.default.removeUrlParam("focus_time")) : D(programInfo, function (e) {
        e && (q(programInfo.contentId, j()), p.default.removeUrlParam("focus_time"))
      })
    });
    var n = function (e) {
        y.default.onReady(e, function (e, t) {
          q(e, t)
        })
      },
      w = function () {
        g.default.start()
      },
      E = function (e) {
        var t = {};
        t.container = $(".main_section.control_section .content .recommand_rank_section"), t.customClass = "watch_page", t.data = {}, r.default.recommands(e, function (e) {
          t.data.recommands = e
        }), r.default.ranks(e.contentType, function (e) {
          t.data.ranks = e, f.default.setParam(t)
        })
      },
      k = function () {
        t.setParam({
          container: $(".main_section .content .player_left"),
          data: null,
          shareKeys: ["content_id"]
        }), e = new m.default(t), F()
      },
      C = function (e) {
        var t = Tab.vodContentTab,
          n = $(".als-container");
        t.addTab("episode", e.episodeGroupTitle), t.addTab("rule_play", "播放清單"), t.addTab("attention", ""), t.addTab("teaser", ""), t.addTab("recommand", ""), t.addTab("rank", ""), i.default.isRulePlayList(e) ? (t.hideTab("episode"), t.setActive(0), T(t, e), A(t, e, "episode"), O(t, e, "episode"), I(t, e, "episode"), P(t, e, "episode")) : (t.hideTab("rule_play"), t.setActive(0), S(t, e), A(t, e, "rule_play"), O(t, e, "rule_play"), I(t, e, "rule_play"), P(t, e, "rule_play")), t.subscribe(Tab.EVENT.SWITCH, function (e) {
          (n = $(".als-container")).length > 0 && n.is(":visible") && $.fn.als("resizeAls")
        })
      },
      T = function (e, t) {
        r.default.rulePlays(t, function (n) {
          var o = $(".main_section.control_section div[data-ltc-tab] div[data-id='rule_play']");
          a.default.setParam({
            container: o,
            data: n,
            clickCallback: function (e) {
              q(e.contentId)
            }
          }), o.html() ? a.default.setFocus(t) : e.hideTab("rule_play"), x(e, "rule_play"), L()
        })
      },
      S = function (e, t) {
        r.default.positiveFilms(t, function (n) {
          var o = $(".main_section.control_section div[data-ltc-tab] div[data-id='episode']");
          n.contentType = t.contentType, n.isSpecial = t.isSpecial, s.default.setParam({
            container: o,
            data: n,
            clickCallback: function (e) {
              q(e.contentId)
            }
          }), o.html() ? s.default.setFocus(t) : e.hideTab("episode"), x(e, "episode"), L()
        })
      },
      A = function (e, t, n) {
        r.default.teasers(t.seriesId, function (o) {
          o.contentType = t.contentType;
          var r = $(".main_section.control_section div[data-ltc-tab]"),
            i = r.find("a[data-id='teaser']"),
            a = r.find("div[data-id='teaser']");
          i.html("預告花絮"), l.default.setParam({
            container: a,
            data: o,
            clickCallback: function (e) {
              q(e.contentId)
            }
          }), a.html() ? l.default.setFocus(t) : e.hideTab("teaser"), x(e, n), L()
        })
      },
      I = function (e, t, n) {
        r.default.recommands(t, function (t) {
          var o = $(".main_section.control_section div[data-ltc-tab]"),
            r = o.find("a[data-id='recommand']"),
            i = o.find("div[data-id='recommand']");
          r.html(t[0].name), c.default.setParam({
            container: i,
            data: t
          }), i.html() ? M.set("recommand", e) : e.hideTab("recommand"), x(e, n), L()
        })
      },
      P = function (e, t, n) {
        r.default.ranks(t.contentType, function (t) {
          var o = $(".main_section.control_section div[data-ltc-tab]"),
            r = o.find("a[data-id='rank']"),
            i = o.find("div[data-id='rank']");
          r.html("熱門排行"), d.default.setParam({
            container: i,
            data: t
          }), i.html() ? M.set("rank", e) : e.hideTab("rank"), x(e, n), L()
        })
      },
      O = function (t, n, o) {
        r.default.focusTree(n, function (n) {
          var r = $(".main_section.control_section div[data-ltc-tab]"),
            i = r.find("a[data-id='attention']"),
            a = r.find("div[data-id='attention']");
          i.html("看點"), u.default.setParam({
            container: a,
            data: n,
            clickCallback: function (t) {
              var n = t.focusId,
                o = t.data.focus,
                r = 1e3 * o[n].startTime;
              if (0 == e.seek(r, t.data)) {
                var i = 1e3 * o[n].startTime,
                  a = t.data.contentId;
                q(a, i)
              }
            }
          }), a.html() ? M.set("attention", t) : t.hideTab("attention"), x(t, o), L()
        })
      },
      x = function (e, t) {
        var n = $(".main_section.control_section div[data-ltc-tab]");
        n.find("a[data-id='" + t + "']").length <= 0 && n.find(".ltc-tab-list").html() && e.setActive(0)
      },
      M = new function () {
        var e = this;
        this.set = function (n, o) {
          e.tab = o, e.list || (e.list = new Array), e.list.push(n), t(!1), $(window).off("resize", t), $(window).on("resize", t)
        };
        var t = function (t) {
            clearTimeout(e.timeout), 0 == t ? n() : e.timeout = setTimeout(n, 300)
          },
          n = function () {
            if ($(window).width() > 1024)
              for (var t = 0; t < e.list.length; t++) {
                var n = e.list[t];
                e.tab.hideTab(n)
              } else
                for (var o = 0; o < e.list.length; o++) {
                  var r = e.list[o];
                  e.tab.showTab(r)
                }
          }
      },
      L = function () {
        var e = $(".main_section.control_section .custom_tab.ltc-tab");
        e.find(".ltc-tab-list").html() ? e.removeClass("hide") : e.addClass("hide")
      },
      R = function (e) {
        1 == e.isSeries && "0" != e.episode ? document.title = e.title + e.secondaryMark + "線上看-LiTV線上影視" : document.title = e.title + "線上看-LiTV線上影視"
      },
      N = function (e) {
        var t = $(".center_display_section > .alert_msg");
        if ("X" == e.chargeMode) t.show(), t.html("目前本片已下架，詳洽客服專線：02-77070708。");
        else if (-1 == e.watchDevices.indexOf("PC")) {
          for (var n = "", o = e.watchDevices, r = e.dictionary, i = 0; i < o.length; i++) {
            var a = r[o[i]];
            i < o.length - 1 ? n = n + a + "/" : n += a
          }
          n && (t.show(), t.html("<i class='watchDevice'></i>此影片尚未授權在電腦上播放，請至" + n + "上觀賞。"))
        } else t.hide()
      },
      j = function () {
        return p.default.getUrlParam("focus_time")
      },
      D = function (e, t) {
        "true" == p.default.getUrlParam("auto_play") ? t(!0) : new Promise(function (e, t) {
          b.default.getAuthStatus(function (t) {
            e(t)
          })
        }).then(function (t) {
          return new Promise(function (n, o) {
            0 == i.default.isVodEntryPoint(e) ? n({
              status: t,
              program: e
            }) : r.default.targetProgramInfo(e.contentId, function (e) {
              n({
                status: t,
                program: e
              })
            })
          })
        }).then(function (e) {
          var n = {},
            o = e.status,
            r = e.program;
          "F" == r.chargeMode ? n.url = o ? "/vod/ajax/getMainUrl" : "/vod/ajax/getMainUrlNoAuth" : n.url = "/vod/ajax/getMainUrl", n.selectMethod = "POST", n.request = {
            assetId: r.assetId,
            watchDevices: r.watchDevices
          }, n.request = JSON.stringify(n.request), h.default.get(n, function (e, n) {
            n.fullpath && n.playAds ? t(!0) : t(!1)
          })
        })
      },
      V = function (e) {
        p.default.removeUrlParam("id"), p.default.replaceUrlParam("content_id", e.contentId)
      },
      q = function t(n, o) {
        r.default.targetProgramInfo(n, function (n) {
          o && (n.bookmark = o), s.default.setFocus(n), l.default.setFocus(n), a.default.setFocus(n), U(n), v.default.setContentFocus(n), V(n), R(n), e.setSrc(n), y.default.setDetail(n, function (e, n) {
            t(e, n)
          })
        })
      },
      F = function () {
        _.default.on(e.EVENT.PREPARE_CALLBACK, function (e) {}), _.default.on(e.EVENT.MASK_CHANGE_CALLBACK, function (t, n) {
          e == t && (y.default.setBreadCrumbVisibility(!1), y.default.setAppDownloadBtnVisibility(!0), $(".main_section.player").removeClass("hide"), $(".main_section.player .content .player_right").find(".common_tabs_section").length <= 0 && B(e.program))
        }), _.default.on(e.EVENT.ENDED, function (t) {
          if (e == t) {
            var n = function (t) {
              t ? q(t.contentId) : e.displayEndAd()
            };
            i.default.isRulePlayList(e.program) ? r.default.nextRulePlayItem(e.program, function (e) {
              n(e)
            }) : r.default.nextEpisode(e.program, function (e) {
              n(e)
            })
          }
        })
      },
      U = function (e) {
        e.categoryId = p.default.getUrlParam("brc_id"), t.setContent(e)
      },
      B = function (t) {
        v.default.setParam({
          data: t,
          container: $(".main_section.player .content .player_right"),
          types: ["episode", "attention", "teaser", "moreFree", "rank", "merchandise"],
          clickCallback: function (t, n) {
            if ("episode" == t || "teaser" == t) q(n.contentId);
            else if ("attention" == t) {
              var o = n.focusId,
                r = n.data.focus,
                a = 1e3 * r[o].startTime;
              if (0 == e.seek(a, n.data)) {
                var s = 1e3 * r[o].startTime,
                  l = n.data.contentId;
                q(l, s)
              }
            } else "moreFree" == t || "rank" == t ? i.default.isPlayerExist(e) ? (window.open("/vod/" + n.contentType + "/content.do?content_id=" + n.contentId, "_blank"), e.pause()) : window.open("/vod/" + n.contentType + "/content.do?content_id=" + n.contentId, "_self") : "merchandise" == t && e.pause()
          },
          focusType: "moreFree"
        })
      }
  }()
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(3)),
    r = new function () {
      var e = new Array;
      this.setParam = function (n) {
        var o = new t;
        return o.setParam(n), e.push(o), o
      }, this.setFocus = function (t) {
        for (var n = 0; n < e.length; n++) e[n].setFocus(t)
      };
      var t = function () {
        var e = this;
        this.setParam = function (o) {
          e.param = o;
          var r = $(e.param.container),
            i = n(e.param.data);
          r.html(i), r.html() && (t(e.param.data), r.find("img.lazyload").lazyload())
        }, this.setFocus = function (t) {
          var n = $(e.param.container).find(".episode_content"),
            o = n.filter("[data-content-id='" + t.contentId + "']");
          n.removeClass("focus"), o.addClass("focus")
        };
        var t = function (t) {
            var n = $(e.param.container).find(".episode_content");
            n.mouseenter(function (e) {
              o.default.findElementByClass(e, "episode_content").addClass("hover")
            }), n.mouseleave(function (e) {
              o.default.findElementByClass(e, "episode_content").removeClass("hover")
            }), n.click(function (n) {
              n.preventDefault();
              var r = o.default.getEventAttribute(n, "data-id"),
                i = t[r];
              e.setFocus(i), "function" == typeof e.param.clickCallback && e.param.clickCallback(i)
            })
          },
          n = function (e) {
            if (0 == Array.isArray(e) || e.length <= 0) return "";
            var t = new Array;
            t.push("<div class='episode_teaser_template_view rule_play'>");
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              t.push("<a class='episode_content special' href='/vod/" + o.contentType + "/content.do?content_id=" + o.contentId + "' data-id=" + n + " data-content-id=" + o.contentId + " title='" + o.title + "'>"), t.push("<div class='poster'>"), t.push("<div class='padding_box'></div>"), t.push("<img class='img lazyload' data-src='" + o.videoImage + "' />"), t.push("<div class='play_icon'></div>"), t.push("</div>"), t.push("<h2 class='subtitle'>" + o.title + "</h2>"), t.push("</a>")
            }
            return t.push("</div>"), t.join("")
          }
      }
    };
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = i(n(3)),
    r = i(n(2));

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  i(n(18));
  var a = new function () {
    var e = new Array;
    this.setParam = function (n) {
      var r = new t;
      return r.setParam(n), e.push(r), o.default.getPosterBannerStyle(), r
    }, this.setFocus = function (t) {
      for (var n = 0; n < e.length; n++) e[n].setFocus(t)
    };
    var t = function () {
      var e = this;
      this.setParam = function (o) {
        e.param = o;
        var r = $(e.param.container),
          a = i(e.param.data);
        r.html(a), r.html() && (n(), t(), r.find("img.lazyload").lazyload())
      }, this.setFocus = function (t) {
        var n = $(e.param.container),
          o = n.find(".episode_group_name"),
          r = n.find(".episode_section"),
          i = n.find(".episode_content"),
          a = i.filter("[data-content-id='" + t.contentId + "']"),
          s = a.attr("data-season-id");
        s || (s = 0), i.removeClass("focus"), a.addClass("focus"), o.removeClass("focus"), o.filter("[data-season-id='" + s + "']").addClass("focus"), r.removeClass("show"), r.filter("[data-season-id='" + s + "']").addClass("show")
      };
      var t = function () {
          var t = $(e.param.container),
            n = t.find(".episode_group_name"),
            r = t.find(".episode_section"),
            i = t.find(".episode_content");
          n.click(function (e) {
            var t = o.default.getEventAttribute(e, "data-season-id");
            n.removeClass("focus"), n.filter("[data-season-id='" + t + "']").addClass("focus"), r.removeClass("show"), r.filter("[data-season-id='" + t + "']").addClass("show")
          }), i.mouseenter(function (e) {
            o.default.findElementByClass(e, "episode_content").addClass("hover")
          }), i.mouseleave(function (e) {
            o.default.findElementByClass(e, "episode_content").removeClass("hover")
          }), i.click(function (t) {
            var n = o.default.getEventAttribute(t, "data-season-id"),
              r = o.default.getEventAttribute(t, "data-episode-id"),
              i = e.param.data.seasons[n].episode[r];
            e.setFocus(i), "function" == typeof e.param.clickCallback && (t.preventDefault(), e.param.clickCallback(i))
          })
        },
        n = function () {
          var t = $(e.param.container);
          t = t.find(".als-container.episode_group_name_section"), r.default.nextTack(function () {
            t.als({
              speed: 500,
              easing: "linear",
              vSpace: 0,
              addHeight: 13
            })
          })
        },
        i = function (e) {
          var t = e.seasons;
          if (!Array.isArray(t) || t.length <= 0) return "";
          var n = new Array;
          n.push("<div class='episode_teaser_template_view'>"), n.push("<div class='als-container episode_group_name_section'>"), n.push("<span class='als-prev'></span>"), n.push("<div class='als-viewport'>"), n.push("<ul class='als-wrapper'>");
          for (var o = 0; o < t.length; o++) {
            var r = t[o];
            r.episode.length <= 0 || (n.push("<li class='episode_group_name als-item' data-season-id='" + o + "'>"), n.push("<div>" + r.seasonName + "</div>"), n.push("</li>"))
          }
          n.push("</ul>"), n.push("</div>"), n.push("<span class=als-next></span>"), n.push("</div>");
          for (var i = 0; i < t.length; i++) {
            var a = t[i],
              s = a.episode;
            if (!(s.length <= 0)) {
              var l = a.posterBanners;
              n.push("<div class='episode_section show' data-season-id=" + i + ">");
              for (var u = 0; u < s.length; u++) {
                var c = s[u],
                  d = "/vod/" + e.contentType + "/content.do?content_id=" + c.contentId;
                if ("show" == e.contentType || "blessedlife" == e.contentType || 1 == e.isSpecial) {
                  n.push("<a href = " + d + " class='episode_content special' data-season-id=" + i + " data-episode-id=" + u + " data-content-id=" + c.contentId + " title=" + e.title + c.secondaryMark + "線上看>"), n.push("<div class='poster'>"), n.push("<div class='padding_box'></div>"), n.push("<img class='img lazyload' data-src='" + c.videoImage + "' />");
                  for (var f = 0; f < l.length; f++) {
                    var p = l[f];
                    n.push("<div class='poster_banner_episode_triangle_icon' data-poster-banner='" + p + "' data-charge-mode='" + c.chargeMode + "'></div>")
                  }
                  n.push("<div class='play_icon'></div>"), c.originalDate && n.push("<div class='date'>" + c.originalDate + "</div>"), n.push("</div>"), n.push("<div class='subtitle'>" + c.secondaryMark + "</div>"), n.push("</a>")
                } else {
                  n.push("<a href = " + d + " class='episode_content' data-season-id=" + i + " data-episode-id=" + u + " data-content-id=" + c.contentId + " title=" + e.title + c.secondaryMark + "線上看>"), n.push("<div class='text'>" + c.episodeName + "</div>");
                  for (var h = 0; h < l.length; h++) {
                    var v = l[h];
                    n.push("<div class='poster_banner_episode_icon' data-poster-banner='" + v + "' data-charge-mode='" + c.chargeMode + "'></div>")
                  }
                  n.push("</a>")
                }
              }
              n.push("</div>")
            }
          }
          return n.push("</div>"), n.join("")
        }
    }
  };
  t.default = a
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(3)),
    r = new function () {
      var e = new Array;
      this.setParam = function (n) {
        var o = new t;
        return o.setParam(n), e.push(o), o
      }, this.setFocus = function (t) {
        for (var n = 0; n < e.length; n++) e[n].setFocus(t)
      };
      var t = function () {
        var e = this;
        this.setParam = function (o) {
          e.param = o;
          var r = $(e.param.container),
            i = n(e.param.data);
          r.html(i), r.html() && (t(e.param.data), r.find("img.lazyload").lazyload())
        }, this.setFocus = function (t) {
          var n = $(e.param.container).find(".episode_content"),
            o = n.filter("[data-content-id='" + t.contentId + "']");
          n.removeClass("focus"), o.addClass("focus")
        };
        var t = function (t) {
            var n = $(e.param.container).find(".episode_content");
            n.mouseenter(function (e) {
              o.default.findElementByClass(e, "episode_content").addClass("hover")
            }), n.mouseleave(function (e) {
              o.default.findElementByClass(e, "episode_content").removeClass("hover")
            }), n.click(function (n) {
              n.preventDefault();
              var r = o.default.getEventAttribute(n, "data-season-id"),
                i = o.default.getEventAttribute(n, "data-episode-id"),
                a = t.seasons[r].episode[i];
              e.setFocus(a), "function" == typeof e.param.clickCallback && e.param.clickCallback(a)
            })
          },
          n = function (e) {
            var t = e.seasons;
            if (t.length <= 0) return "";
            var n = !1,
              o = new Array;
            o.push("<div class='episode_teaser_template_view teaser'>");
            for (var r = 0; r < t.length; r++)
              for (var i = t[r].episode, a = 0; a < i.length; a++) {
                var s = i[a];
                n = !0, o.push("<a class='episode_content special' href='/vod/" + e.contentType + "/content.do/content_id=" + s.contentId + "' data-content-id=" + s.contentId + " data-season-id=" + r + " data-episode-id=" + a + " title='" + s.episodeName + "'>"), o.push("<div class='poster'>"), o.push("<div class='padding_box'></div>"), o.push("<img class='img lazyload' data-src='" + s.videoImage + "' />"), o.push("<div class='play_icon'></div>"), o.push("</div>"), o.push("<div class='subtitle'>" + s.episodeName + "</div>"), o.push("</a>")
              }
            return o.push("</div>"), o = o.join(""), 0 == n ? "" : o
          }
      }
    };
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = i(n(3)),
    r = i(n(37));

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var a = new function () {
    var e = new Array;
    this.setParam = function (n) {
      var o = new t;
      return o.setParam(n), e.push(n), o
    };
    var t = function () {
      var e = this;
      this.setParam = function (o) {
        e.param = o;
        var r = $(e.param.container),
          i = n(e.param.data);
        r.html(i), r.html() && t()
      };
      var t = function () {
          $(".attention_button").click(function (t) {
            var n = o.default.getEventAttribute(t, "data-season-id"),
              r = o.default.getEventAttribute(t, "data-episode-id"),
              i = {
                focusId: o.default.getEventAttribute(t, "data-focus-id"),
                data: e.param.data.seasons[n].episode[r]
              };
            void 0 !== e.param.clickCallback && e.param.clickCallback(i)
          })
        },
        n = function (e) {
          var t = e.seasons;
          if (t.length <= 0) return "";
          for (var n = new Array, o = 0; o < t.length; o++) {
            for (var i = t[o], a = i.episode, s = new Array, l = 0; l < a.length; l++) {
              var u = a[l];
              u.focus.length && s.push(u)
            }
            s.length && n.push(i)
          }
          for (var c = new Array, d = 0; d < n.length; d++) {
            var f = n[d];
            t.length <= 1 ? c.push('<ul class="attention_container hide" data-season-id="' + d + '">') : t.length > 1 && c.push('<ul class="attention_container" data-season-id="' + d + '">'), c.push('<li class="seasonName-title">'), c.push("<h3>" + f.seasonName + "</h3>"), c.push("</li>");
            for (var p = f.episode, h = 0; h < p.length; h++) {
              var v = p[h];
              c.push('<li class="season-attention-content">'), c.push("<h4>" + v.secondaryMark + "</h4>");
              for (var m = v.focus, g = 0; g < m.length; g++) {
                var y = m[g],
                  _ = 1e3 * y.startTime;
                c.push('<div class="attention_button" data-focus-id="' + g + '" data-season-id="' + d + '" data-episode-id="' + h + '" data-content-id="' + v.contentId + '">'), c.push('<i class="icon"></i>'), c.push('<div class="desc">' + r.default.getFormatTimeByMilliSeconds(_).wholeTime + " " + y.description + "</div>"), c.push("</div>")
              }
              c.push("</li>")
            }
            c.push("</ul>")
          }
          return c.join("")
        }
    }
  };
  t.default = a
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(3)),
    r = new function () {
      var e = new Array;
      this.setParam = function (n) {
        var o = new t;
        return o.setParam(n), e.push(n), o
      };
      var t = function () {
        var e = this;
        this.setParam = function (o) {
          e.param = o;
          var r = $(e.param.container),
            i = n(e.param.data);
          r.html(i), r.html() && t()
        };
        var t = function () {
            var t = $(e.param.container).find(".rank_item");
            t.not(".poster").mouseenter(function (e) {
              o.default.findElementByClass(e, "rank_item").addClass("hover")
            }), t.not(".poster").mouseleave(function (e) {
              o.default.findElementByClass(e, "rank_item").removeClass("hover")
            }), t.filter(".poster").mouseenter(function (e) {
              o.default.findElementByClass(e, "rank_item").addClass("hover")
            }), t.filter(".poster").mouseleave(function (e) {
              o.default.findElementByClass(e, "rank_item").removeClass("hover")
            })
          },
          n = function (e) {
            var t = e.vodList;
            if (0 == t.length) return "";
            var n = t[0].contentType,
              o = new Array;
            "ent" == n ? o.push("<div class='rank_template_body_view landscape'>") : o.push("<div class='rank_template_body_view'>");
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              o.push("<a class='rank_item' target='_blank' href='/vod/" + i.contentType + "/content.do?content_id=" + i.contentId + "' title='" + i.title + "'>"), o.push("<div class='rank_counter'>" + (r + 1) + "</div>"), o.push("<div class='rank_desc_title'>" + i.title + "</div>"), o.push("</a>")
            }
            return o.push("</div>"), o.join("")
          }
      }
    };
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function (e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(n(3));
  window.litv = window.litv || {};
  var r = new function () {
    this.setParam = function (t) {
      var n = new e;
      return n.setParam(t), n
    };
    var e = function () {
      var e = this;
      this.setParam = function (n) {
        e.param = n;
        var r = $(e.param.container),
          i = t(e.param.data);
        r.html(i), r.html() && (o.default.getPosterBannerStyle(), r.find(".recommand_rank_template_view").addClass(e.param.customClass), r.find("img.lazyload").lazyload(), litv.launchNativeAd && litv.launchNativeAd())
      };
      var t = function (e) {
        var t = e.recommands[0],
          n = e.ranks,
          o = new Array,
          r = "horizontal",
          i = n.vodList;
        if ("l" == t.programPublishPicsType && (r = "landscape"), o.push("<section class='recommand_rank_template_view " + r + "'>"), o.push("\t<div class='title_section'>"), i.length > 0 && (o.push("\t\t<div class='rank'>"), o.push("\t\t\t<div class='title'>熱門排行</div>"), o.push("\t\t\t<div class='line'></div>"), o.push("\t\t</div>")), o.push("\t\t<div class='recommand'>"), o.push("\t\t\t<div class='title'>" + t.name + "</div>"), o.push("\t\t\t<div class='line'></div>"), o.push("\t\t</div>"), o.push("\t</div>"), o.push("\t<ul class='content_section'>"), i.length > 0) {
          o.push("\t\t<li class='content_item rank'>");
          for (var a = 0; a < i.length; a++) {
            var s = i[a];
            o.push("<a class='link_section' href='/vod/" + s.contentType + "/content.do?content_id=" + s.contentId + "' title='" + s.title + "'>"), o.push("\t<div class='index'>" + (a + 1) + "</div>"), o.push("\t<div class='content_title'>" + s.title + "</div>"), o.push("</a>")
          }
          o.push("\t\t</li>")
        }
        for (var l = t.vodList, u = 0; u < l.length; u++) {
          var c = l[u];
          if ("l" == t.programPublishPicsType) o.push("<li class='content_item recommand landscape'>"), o.push("\t<a class='link_section' href='/vod/" + c.contentType + "/content.do?content_id=" + c.contentId + "' title='" + c.title + "'>"), o.push("\t\t<div class='poster_section'>"), o.push("\t\t\t<img class='poster lazyload' data-src='" + c.videoImage + "'/>"), o.push("\t\t\t<div class='play_icon'></div>"), o.push("\t\t</div>"), o.push("\t\t<div class='title'>" + c.title + "</div>"), o.push("\t</a>"), o.push("</li>");
          else {
            if (o.push("<li class='content_item recommand horizontal'>"), o.push("\t<a class='link_section' href='/vod/" + c.contentType + "/content.do?content_id=" + c.contentId + "' title='" + c.title + "'>"), o.push("\t\t<div class='poster_section'>"), o.push("\t\t\t<img class='poster lazyload' data-src='" + c.imageFile + "'/>"), c.posterBanner)
              for (var d = 0; d < c.posterBanner.length; d++) {
                var f = c.posterBanner[d];
                o.push("<div class='poster_banner_poster_icon' data-poster-banner='" + f + "'></div>")
              }
            o.push("\t\t\t<div class='play_icon'></div>"), o.push("\t\t</div>"), o.push("\t\t<div class='content_title_section'>"), c.score && o.push("<div class='score'>" + c.score + "</div>"), o.push("\t\t\t<div class='title'>" + c.title + "</div>"), o.push("\t\t</div>"), "movie" == c.contentType ? o.push("<div class='desc'>" + c.commentary + "</div>") : o.push("<div class='desc'>" + c.displayCount + "</div>"), o.push("\t</a>"), o.push("</li>")
          }
        }
        return o.push("\t</ul>"), o.push("</section>"), o.join("")
      }
    }
  };
  t.default = r
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }(),
    r = f(n(6)),
    i = f(n(21)),
    a = f(n(32)),
    s = f(n(5)),
    l = f(n(2)),
    u = f(n(129)),
    c = (f(n(1)), f(n(3))),
    d = f(n(7));

  function f(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var p = null,
    h = new(function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e)
      }
      return o(e, [{
        key: "onReady",
        value: function (e, t) {
          p = e.isSpecial ? $(".main_section.special_watch") : $(".main_section.common_watch"), this.setScore(e), this.setBreadCrumb(e), this.setSharePageBtnAction(), this.setLeaveMsgBtnAction(), this.setActorLink(), this.setVodPlayBtn(e), this.setVodPlayBtnAction(e, t), this.setPosterAction(t), this.setPriceMarkdown(e), this.setSpecialPoster(e, t), this.setAppDownloadBtn()
        }
      }, {
        key: "setDetail",
        value: function (e, t) {
          this.setVodPlayBtn(e), this.setVodPlayBtnAction(e, t), this.setPoster(e), this.setTitle(e), this.setSecondaryMark(e), this.setDisplayCount(e), this.setDistributorLogo(e), this.setDate(e), this.setYear(e), this.setLength(e), this.setCountry(e), this.setCategory(e), this.setRank(e), this.setWarning(e), this.setCaption(e), this.setPronunciation(e), this.setWatchDevice(e), this.setCredits(e), this.setDescription(e), this.setPriceMarkdown(e), this.setSpecialPoster(e, t)
        }
      }, {
        key: "setSpecialPoster",
        value: function (e, t) {
          var n = p.find(".special_poster");
          n.length <= 0 || (n.attr("href", "/vod/" + e.contentType + "/content.do?content_id=" + e.contentId), n.off("click"), n.on("click", function (n) {
            n.preventDefault(), t(e.contentId, 0)
          }))
        }
      }, {
        key: "setPriceMarkdown",
        value: function (e) {
          var t = d.default.getBsmPkgCategory(e);
          if (t) {
            var n = t.priceMdDesc,
              o = p.find(".content .detail .tvod_price_section");
            n ? o.html(n) : o.html("")
          }
        }
      }, {
        key: "setDescription",
        value: function (e) {
          p.find(".content .detail .main_desc_section").html(e.description)
        }
      }, {
        key: "setCredits",
        value: function (e) {
          var t = p.find(".content .detail .category_actor_section");
          t.find(".credits").remove();
          for (var n = new Array, o = 0; o < e.credits.length; o++) {
            var r = e.credits[o];
            n.push("<div class='item_section credits'>"), n.push("\t<div class='item_name'>" + r.typeName + "：</div>");
            for (var i = 0; i < r.list.length; i++) {
              var a = r.list[i];
              "actor" == r.type || "director" == r.type ? n.push("<a class='item_detail' data-value='" + a.name + "' target='_blank' itemprop='" + r.type + "' itemscope itemtype='http://schema.org/Person'>" + a.name + "</a>") : n.push("<a class='item_detail' data-value='" + a.name + "' target='_blank'>" + a.name + "</a>"), i + 1 != r.list.length && n.push("<div class='item_detail'>、</div>")
            }
            n.push("</div>")
          }
          n = n.join(""), t.append(n), this.setActorLink()
        }
      }, {
        key: "setWatchDevice",
        value: function (e) {
          var t = p.find(".content .detail .detail_section .item_section.watch_devices");
          if (e.watchDevices) {
            t.removeClass("hide"), t.find(".item_detail").remove();
            for (var n = 0; n < e.watchDevices.length; n++) {
              var o = e.watchDevices[n];
              "PHONE" == o ? t.append("<div class='item_detail img' style='background-image:url(/resources/image/phone.svg);' title='手機'></div>") : "PAD" == o ? t.append("<div class='item_detail img' style='background-image:url(/resources/image/pad.svg);' title='平板'></div>") : "PC" == o ? t.append("<div class='item_detail img' style='background-image:url(/resources/image/PC.svg);' title='電腦'></div>") : "TV" == o && t.append("<div class='item_detail img' style='background-image:url(/resources/image/TV.svg);' title='電視'></div>")
            }
          } else t.addClass("hide")
        }
      }, {
        key: "setPronunciation",
        value: function (e) {
          var t = p.find(".content .detail .detail_section .item_section.pronunciation"),
            n = t.find(".item_detail");
          e.pronunciation ? (t.removeClass("hide"), n.html(e.pronunciation)) : t.addClass("hide")
        }
      }, {
        key: "setCaption",
        value: function (e) {
          var t = p.find(".content .detail .detail_section .item_section.caption"),
            n = t.find(".item_detail");
          e.caption ? (t.removeClass("hide"), n.html(result.caption)) : t.addClass("hide")
        }
      }, {
        key: "setWarning",
        value: function (e) {
          var t = p.find(".content .detail .btn_section .item_section.warning"),
            n = t.find(".detail");
          e.warning ? (t.removeClass("hide"), n.html(e.warning)) : t.addClass("hide")
        }
      }, {
        key: "setRank",
        value: function (e) {
          var t = p.find(".content .detail .detail_section .item_section.rank"),
            n = t.find(".item_detail.img"),
            o = t.find(".item_detail").not(".img");
          e.rank ? (t.removeClass("hide"), "普遍級" == e.rank ? n.css("background-image", "url(/resources/image/rating_a_201712181346.jpg)") : "保護級" == e.rank ? n.css("background-image", "url(/resources/image/rating_b_201712181346.jpg)") : "輔12" == e.rank ? n.css("background-image", "url(/resources/image/rating_c_201712181346.jpg)") : "輔15" == e.rank ? n.css("background-image", "url(/resources/image/rating_d_201712181346.jpg)") : "限制級" == e.rank && n.css("background-image", "url(/resources/image/rating_e_201712181346.jpg)"), o.html(e.rank)) : t.addClass("hide")
        }
      }, {
        key: "setCategory",
        value: function (e) {
          var t = p.find(".content .detail .category_actor_section .item_section.category");
          if (e.category) {
            t.removeClass("hide"), t.find(".item_detail").remove();
            for (var n = 0; n < e.category.length; n++) {
              var o = e.category[n];
              null != o.name && t.append("<a class='item_detail' target='_blank' href='/vod/" + e.contentType + "/filter.do?category=" + o.id + "'>" + o.name + "</a>")
            }
            t.find(".item_detail").length <= 0 && t.addClass("hide")
          } else t.addClass("hide")
        }
      }, {
        key: "setCountry",
        value: function (e) {
          var t = p.find(".content .detail .detail_section .item_section.country"),
            n = t.find(".item_detail");
          if (e.country) {
            t.removeClass("hide"), n.remove();
            for (var o = 0; o < e.country.length; o++) {
              var r = e.country[o];
              t.append("<a class='item_detail' target='_blank' href='/vod/" + e.contentType + "/filter.do?country=" + r.id + "'>" + r.name + "</a>")
            }
          } else t.addClass("hide")
        }
      }, {
        key: "setLength",
        value: function (e) {
          var t = p.find(".content .detail .detail_section .item_section.length"),
            n = t.find(".item_detail");
          e.length ? (t.removeClass("hide"), n.html(e.length + "分鐘")) : t.addClass("hide")
        }
      }, {
        key: "setYear",
        value: function (e) {
          var t = p.find(".content .detail .detail_section .item_section.year"),
            n = t.find(".item_detail");
          e.year ? (t.removeClass("hide"), n.attr("href", "/vod/" + e.contentType + "/filter.do?year=" + e.year), n.html(e.year)) : t.addClass("hide")
        }
      }, {
        key: "setDate",
        value: function (e) {
          var t = p.find(".content .detail .detail_section .item_section.date"),
            n = t.find(".item_detail");
          e.originalDate ? (t.removeClass("hide"), n.html(e.originalDate), n.attr("href", "/vod/" + e.contentType + "/filter.do?year=" + e.originalDate)) : t.addClass("hide")
        }
      }, {
        key: "setDistributorLogo",
        value: function (e) {
          var t = p.find(".content .detail .title_section .sponsor_logo");
          e.distributorLogo ? (t.removeClass("hide"), t.attr("src", e.distributorLogo)) : t.addClass("hide")
        }
      }, {
        key: "setDisplayCount",
        value: function (e) {
          p.find(".content .detail .title_section .display_count").html(e.displayCount)
        }
      }, {
        key: "setSecondaryMark",
        value: function (e) {
          p.find(".content .detail .title_section .secondary_mark").html(e.secondaryMark)
        }
      }, {
        key: "setTitle",
        value: function (e) {
          p.find(".content .detail .title_section .vod_title").html(e.title)
        }
      }, {
        key: "setBreadCrumbVisibility",
        value: function (e) {
          var t = p.find(".content .crumb_section");
          1 == e ? t.removeClass("hide") : t.addClass("hide")
        }
      }, {
        key: "setPoster",
        value: function (e) {
          var t, n = p.find(".content .detail .main_poster_section .poster_section"),
            o = n.find(".vod_poster"),
            r = o.find(".poster_banner_poster_icon");
          if (t = e.isSeries ? e.title + "第" + e.episode + "集" : e.title, n.attr("title", t), n.attr("href", "/vod/" + e.contentType + "/content.do?content_id=" + e.contentId), o.attr("src", e.imageFile), o.attr("alt", t), r.remove(), e.posterBanner)
            for (var i = 0; i < e.posterBanner.length; i++) {
              var a = e.posterBanner[i];
              o.append("<div class='poster_banner_poster_icon' data-poster-banner='" + a + "'></div>")
            }
        }
      }, {
        key: "setPosterAction",
        value: function (e) {
          p.find(".content .detail .main_poster_section .poster_section").click(function (t) {
            t.preventDefault();
            var n = r.default.getUrlParam("content_id");
            e(n, 0)
          })
        }
      }, {
        key: "setBreadCrumb",
        value: function (e) {
          e.categoryId = r.default.getUrlParam("brc_id"), i.default.crumbView(e, function (e) {
            p.find(".content .crumb_section").html(e)
          })
        }
      }, {
        key: "setScore",
        value: function (e) {
          var t = p.find(".content .main_poster_section .star_fb_like_section").find(".vod_score");
          e.score ? t.html(e.score) : t.html("")
        }
      }, {
        key: "setSharePageBtnAction",
        value: function () {
          var e = p.find(".content .detail .btn_section .share_page"),
            t = new a.default({
              target: e,
              action: "click",
              actionCallback: function (e, r) {
                r.balloon.show(n()), o(t)
              },
              enterCallback: function (e, t) {},
              leaveCallback: function (e, t) {
                t.balloon.dismiss()
              },
              overflowArrowPosition: {
                left: "5px",
                right: "5px"
              },
              backgroundColor: "#fff",
              borderColor: "rgba(0, 0, 0, 0.5)"
            }),
            n = function () {
              var e = new Array;
              return e.push("<div class='copy_balloon'>"), e.push("<div class='fb_info_section'>"), e.push("<div class='fb_icon'></div>"), e.push("<div class='desc_text'>分享至 Facebook</div>"), e.push("</div>"), e.push("<input class='url_text' type='text' value=" + r.default.retentionQuerysURL(["id"]) + " />"), "pc" == s.default.deviceType ? e.push("<div class='description'>按Ctrl-C複製連結</div>") : e.push("<div class='description'>按住即可複製連結</div>"), e.push("<div class='exit_icon'></div>"), e.push("</div>"), e.join("")
            },
            o = function (e) {
              $(".copy_balloon > input").focus(), $(".copy_balloon > input").select(), $(".copy_balloon .exit_icon").click(function (t) {
                e.dismiss()
              }), $(".copy_balloon .fb_info_section").click(function (t) {
                e.dismiss(), FB.ui({
                  method: "share",
                  href: r.default.retentionQuerysURL(["content_id"])
                }, function (e) {})
              })
            }
        }
      }, {
        key: "setLeaveMsgBtnAction",
        value: function () {
          p.find(".content .detail .btn_section .leave_message").click(function (e) {
            var t = $(".fb-comments > *");
            if (t.length > 0) {
              var n = t.offset().top;
              $("html, body").animate({
                scrollTop: n
              }, "slow")
            }
          })
        }
      }, {
        key: "setActorLink",
        value: function () {
          for (var e = p.find(".content .detail .category_actor_section .item_section.credits .item_detail"), t = 0; t < e.length; t++) {
            var n = e.eq(t),
              o = n.attr("data-value"),
              r = "/search/search.do?search_input=" + encodeURIComponent(encodeURIComponent(o));
            n.attr("href", r)
          }
        }
      }, {
        key: "setVodPlayBtn",
        value: function (e) {
          var t = p.find(".content .detail .btn_section"),
            n = t.find(".episode_play"),
            o = t.find(".start_play"),
            r = t.find(".continue_play"),
            i = t.find(".open_app"),
            a = n.find(".desc_text"),
            c = parseInt(e.episodeName);
          if (c ? isNaN(c) ? a.html(e.episodeName) : a.html("第" + c + "集") : a.html("播放"), n.attr("data-content-id", e.contentId), o.attr("data-content-id", e.contentId), r.attr("data-content-id", e.contentId), "pc" == s.default.deviceType || 1 == litv.enableMobile) {
            i.removeClass("show"), l.default.getAuthStatus(function (t) {
              1 == t ? u.default.find(e.seriesId, function (t) {
                t ? (t = JSON.parse(t), e.episode == t.episode && e.season == t.season && e.videoType == t.videoType && e.groupId == t.groupId ? (n.removeClass("show"), o.addClass("show"), r.addClass("show")) : d()) : d()
              }) : d()
            });
            var d = function () {
              n.addClass("show"), o.removeClass("show"), r.removeClass("show")
            }
          } else i.addClass("show"), n.removeClass("show"), o.removeClass("show"), r.removeClass("show")
        }
      }, {
        key: "setVodPlayBtnAction",
        value: function (e, t) {
          var n = p.find(".content .detail .btn_section"),
            o = n.find(".episode_play, .start_play, .continue_play"),
            r = n.find(".open_app");
          o.off("click"), r.off("click"), o.click(function (e) {
            var n = c.default.getEventAttribute(e, "data-content-id"),
              o = c.default.getEventAttribute(e, "data-focus-time");
            t(n, o)
          }), r.click(function (e) {
            window.open("http://hyperurl.co/litvmobilewebplayer", "_blank")
          })
        }
      }, {
        key: "setAppDownloadBtn",
        value: function () {
          "pc" != s.default.deviceType && p.find(".content .app_download_btn").attr("href", "http://hyperurl.co/litvmobilewebplayer")
        }
      }, {
        key: "setAppDownloadBtnVisibility",
        value: function (e) {
          if ("pc" != s.default.deviceType) {
            var t = p.find(".content .app_download_btn");
            1 == e ? t.removeClass("hide") : t.addClass("hide")
          }
        }
      }]), e
    }());
  t.default = h
}]);
//# sourceMappingURL=vodWatch.js.map
