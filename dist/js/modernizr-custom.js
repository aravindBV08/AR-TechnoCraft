/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-ambientlight-apng-audio-backdropfilter-backgroundblendmode-backgroundsize-batteryapi-bgpositionshorthand-blobworkers-borderimage-borderradius-boxsizing-classlist-contextmenu-createelementattrs_createelement_attrs-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssmask-csspointerevents-csspseudoanimations-csspseudotransitions-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-customevent-customprotocolhandler-datalistelem-dataworkers-devicemotion_deviceorientation-fileinput-formattribute-formvalidation-framed-geolocation-getusermedia-htmlimports-ie8compat-imgcrossorigin-input-inputtypes-jpeg2000-jpegxr-localizednumber-localstorage-lowbattery-matchmedia-mediaqueries-multiplebgs-outputelem-picture-placeholder-preserve3d-requestautocomplete-rgba-sandbox-scrollsnappoints-seamless-shapes-sharedworkers-siblinggeneral-sizes-smil-srcdoc-srcset-strictmode-subpixelfont-supports-target-textalignlast-textareamaxlength-textshadow-touchevents-transferables-video-videoloop-videopreload-webpalpha-webworkers-xhr2-xhrresponsetypedocument-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o(e) {
        var t = T.className,
            n = Modernizr._config.classPrefix || "";
        if (w && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), w ? T.className.baseVal = t : T.className = t)
    }

    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function s(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function d(e, t) {
        if ("object" == typeof e)
            for (var n in e) P(e, n) && d(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                i = Modernizr[r[0]];
            if (2 == r.length && (i = i[r[1]]), "undefined" != typeof i) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function l() {
        var e = t.body;
        return e || (e = i(w ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, n, r, o) {
        var a, s, d, c, u = "modernizr",
            A = i("div"),
            p = l();
        if (parseInt(r, 10))
            for (; r--;) d = i("div"), d.id = o ? o[r] : u + (r + 1), A.appendChild(d);
        return a = i("style"), a.type = "text/css", a.id = "s" + u, (p.fake ? p : A).appendChild(a), p.appendChild(A), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), A.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), s = n(A, e), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = c, T.offsetHeight) : A.parentNode.removeChild(A), !!s
    }

    function u(e, t) {
        return e - 1 === t || e === t || e + 1 === t
    }

    function A(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function p(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(s(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + s(t[o]) + ":" + r + ")");
            return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function f(e, t, o, s) {
        function d() {
            c && (delete I.style, delete I.modElem)
        }
        if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
            var l = p(e, o);
            if (!r(l, "undefined")) return l
        }
        for (var c, u, f, m, h, v = ["modernizr", "tspan"]; !I.style;) c = !0, I.modElem = i(v.shift()), I.style = I.modElem.style;
        for (f = e.length, u = 0; f > u; u++)
            if (m = e[u], h = I.style[m], A(m, "-") && (m = a(m)), I.style[m] !== n) {
                if (s || r(o, "undefined")) return d(), "pfx" == t ? m : !0;
                try {
                    I.style[m] = o
                } catch (g) {}
                if (I.style[m] != h) return d(), "pfx" == t ? m : !0
            }
        return d(), !1
    }
    var m = [],
        h = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                m.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                m.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = h, Modernizr = new Modernizr, Modernizr.addTest("customprotocolhandler", function() {
        if (!navigator.registerProtocolHandler) return !1;
        try {
            navigator.registerProtocolHandler("thisShouldFail")
        } catch (e) {
            return e instanceof TypeError
        }
        return !1
    }), Modernizr.addTest("customevent", "CustomEvent" in e && "function" == typeof e.CustomEvent), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("ie8compat", !e.addEventListener && !!t.documentMode && 7 === t.documentMode);
    var v = e.CSS;
    Modernizr.addTest("cssescape", v ? "function" == typeof v.escape : !1);
    var g = "CSS" in e && "supports" in e.CSS,
        y = "supportsCSS" in e;
    Modernizr.addTest("supports", g || y), Modernizr.addTest("picture", "HTMLPictureElement" in e), Modernizr.addTest("strictmode", function() {
        "use strict";
        return !this
    }()), Modernizr.addTest("devicemotion", "DeviceMotionEvent" in e), Modernizr.addTest("deviceorientation", "DeviceOrientationEvent" in e), Modernizr.addTest("target", function() {
        var t = e.document;
        if (!("querySelectorAll" in t)) return !1;
        try {
            return t.querySelectorAll(":target"), !0
        } catch (n) {
            return !1
        }
    }), Modernizr.addTest("xhr2", "XMLHttpRequest" in e && "withCredentials" in new XMLHttpRequest), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("framed", e.location != top.location);
    var b = h._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    h._prefixes = b, Modernizr.addTest("sharedworkers", "SharedWorker" in e), Modernizr.addTest("webworkers", "Worker" in e);
    var T = t.documentElement;
    Modernizr.addTest("contextmenu", "contextMenu" in T && "HTMLMenuItemElement" in e), Modernizr.addTest("classlist", "classList" in T);
    var w = "svg" === T.nodeName.toLowerCase();
    w || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = x.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = x.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), x.elements = n + " " + e, l(t)
        }

        function i(e) {
            var t = E[e[T]];
            return t || (t = {}, w++, e[T] = w, E[w] = t), t
        }

        function a(e, n, r) {
            if (n || (n = t), h) return n.createElement(e);
            r || (r = i(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : b.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || y.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), h) return e.createDocumentFragment();
            n = n || i(e);
            for (var o = n.frag.cloneNode(), a = 0, s = r(), d = s.length; d > a; a++) o.createElement(s[a]);
            return o
        }

        function d(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return x.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(x, t.frag)
        }

        function l(e) {
            e || (e = t);
            var r = i(e);
            return !x.shivCSS || m || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), h || d(e, r), e
        }

        function c(e) {
            for (var t, n = e.getElementsByTagName("*"), o = n.length, i = RegExp("^(?:" + r().join("|") + ")$", "i"), a = []; o--;) t = n[o], i.test(t.nodeName) && a.push(t.applyElement(u(t)));
            return a
        }

        function u(e) {
            for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(C + ":" + e.nodeName); r--;) t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue);
            return o.style.cssText = e.style.cssText, o
        }

        function A(e) {
            for (var t, n = e.split("{"), o = n.length, i = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + C + "\\:$2"; o--;) t = n[o] = n[o].split("}"), t[t.length - 1] = t[t.length - 1].replace(i, a), n[o] = t.join("}");
            return n.join("{")
        }

        function p(e) {
            for (var t = e.length; t--;) e[t].removeNode()
        }

        function f(e) {
            function t() {
                clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), r = null
            }
            var r, o, a = i(e),
                s = e.namespaces,
                d = e.parentWindow;
            return !B || e.printShived ? e : ("undefined" == typeof s[C] && s.add(C), d.attachEvent("onbeforeprint", function() {
                t();
                for (var i, a, s, d = e.styleSheets, l = [], u = d.length, p = Array(u); u--;) p[u] = d[u];
                for (; s = p.pop();)
                    if (!s.disabled && S.test(s.media)) {
                        try {
                            i = s.imports, a = i.length
                        } catch (f) {
                            a = 0
                        }
                        for (u = 0; a > u; u++) p.push(i[u]);
                        try {
                            l.push(s.cssText)
                        } catch (f) {}
                    }
                l = A(l.reverse().join("")), o = c(e), r = n(e, l)
            }), d.attachEvent("onafterprint", function() {
                p(o), clearTimeout(a._removeSheetTimer), a._removeSheetTimer = setTimeout(t, 500)
            }), e.printShived = !0, e)
        }
        var m, h, v = "3.7.3",
            g = e.html5 || {},
            y = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            b = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            T = "_html5shiv",
            w = 0,
            E = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", m = "hidden" in e, h = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                m = !0, h = !0
            }
        }();
        var x = {
            elements: g.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: v,
            shivCSS: g.shivCSS !== !1,
            supportsUnknownElements: h,
            shivMethods: g.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: a,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = x, l(t);
        var S = /^$|\b(?:all|print)\b/,
            C = "html5shiv",
            B = !h && function() {
                var n = t.documentElement;
                return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
            }();
        x.type += " print", x.shivPrint = f, f(t), "object" == typeof module && module.exports && (module.exports = x)
    }("undefined" != typeof e ? e : this, t);
    var E = "Moz O ms Webkit",
        x = h._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    h._domPrefixes = x;
    var S = h._config.usePrefixes ? E.split(" ") : [];
    h._cssomPrefixes = S;
    var C = function(t) {
        var r, o = b.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + t;
        for (var a = 0; o > a; a++) {
            var s = b[a],
                d = s.toUpperCase() + "_" + r;
            if (d in i) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    h.atRule = C;
    var B = function() {
        function e(e, t) {
            var o;
            return e ? (t && "string" != typeof t || (t = i(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = i("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    h.hasEvent = B, Modernizr.addTest("ambientlight", B("devicelight", e));
    var k = function(e, t) {
        var n = !1,
            r = i("div"),
            o = r.style;
        if (e in o) {
            var a = x.length;
            for (o[e] = t, n = o[e]; a-- && !n;) o[e] = "-" + x[a] + "-" + t, n = o[e]
        }
        return "" === n && (n = !1), n
    };
    h.prefixedCSSValue = k, Modernizr.addTest("audio", function() {
        var e = i("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("video", function() {
        var e = i("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("bgpositionshorthand", function() {
        var e = i("a"),
            t = e.style,
            n = "right 10px bottom 10px";
        return t.cssText = "background-position: " + n + ";", t.backgroundPosition === n
    }), Modernizr.addTest("csscalc", function() {
        var e = "width:",
            t = "calc(10px);",
            n = i("a");
        return n.style.cssText = e + b.join(t + e), !!n.style.length
    }), Modernizr.addTest("multiplebgs", function() {
        var e = i("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("csspointerevents", function() {
        var e = i("a").style;
        return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
    }), Modernizr.addTest("cssremunit", function() {
        var e = i("a").style;
        try {
            e.fontSize = "3rem"
        } catch (t) {}
        return /rem/.test(e.fontSize)
    }), Modernizr.addTest("rgba", function() {
        var e = i("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("fileinput", function() {
        if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
        var e = i("input");
        return e.type = "file", !e.disabled
    }), Modernizr.addTest("formattribute", function() {
        var e, n = i("form"),
            r = i("input"),
            o = i("div"),
            a = "formtest" + (new Date).getTime(),
            s = !1;
        n.id = a;
        try {
            r.setAttribute("form", a)
        } catch (d) {
            t.createAttribute && (e = t.createAttribute("form"), e.nodeValue = a, r.setAttributeNode(e))
        }
        return o.appendChild(n), o.appendChild(r), T.appendChild(o), s = n.elements && 1 === n.elements.length && r.form == n, o.parentNode.removeChild(o), s
    }), Modernizr.addTest("placeholder", "placeholder" in i("input") && "placeholder" in i("textarea")), Modernizr.addTest("createelementattrs", function() {
        try {
            return "test" == i('<input name="test" />').getAttribute("name")
        } catch (e) {
            return !1
        }
    }, {
        aliases: ["createelement-attrs"]
    }), Modernizr.addTest("outputelem", "value" in i("output")), Modernizr.addTest("sandbox", "sandbox" in i("iframe")), Modernizr.addTest("seamless", "seamless" in i("iframe")), Modernizr.addTest("srcdoc", "srcdoc" in i("iframe")), Modernizr.addTest("imgcrossorigin", "crossOrigin" in i("img")), Modernizr.addTest("srcset", "srcset" in i("img")), Modernizr.addTest("textareamaxlength", !!("maxLength" in i("textarea"))), Modernizr.addTest("videoloop", "loop" in i("video")), Modernizr.addTest("videopreload", "preload" in i("video"));
    var N = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete N.elem
    }), Modernizr.addTest("csschunit", function() {
        var e, t = N.elem.style;
        try {
            t.fontSize = "3ch", e = -1 !== t.fontSize.indexOf("ch")
        } catch (n) {
            e = !1
        }
        return e
    });
    var P;
    ! function() {
        var e = {}.hasOwnProperty;
        P = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), h._l = {}, h.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, h._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        h.addTest = d
    }), d("htmlimports", "import" in i("link")), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onload = e.onerror = function() {
            d("jpeg2000", 1 == e.width)
        }, e.src = "data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="
    }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onload = e.onerror = function() {
            d("jpegxr", 1 == e.width, {
                aliases: ["jpeg-xr"]
            })
        }, e.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    }), Modernizr.addAsyncTest(function() {
        var e, t, n, r = i("img"),
            o = "sizes" in r;
        !o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function() {
            d("sizes", 2 == r.width)
        }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : d("sizes", o)
    }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onerror = function() {
            d("webpalpha", !1, {
                aliases: ["webp-alpha"]
            })
        }, e.onload = function() {
            d("webpalpha", 1 == e.width, {
                aliases: ["webp-alpha"]
            })
        }, e.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="
    }), Modernizr.addAsyncTest(function() {
        function t() {
            d("blobworkers", !1), n()
        }

        function n() {
            l && o.revokeObjectURL(l), s && s.terminate(), c && clearTimeout(c)
        }
        try {
            var r = e.BlobBuilder,
                o = e.URL;
            Modernizr._config.usePrefix && (r = r || e.MozBlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.OBlobBuilder, o = o || e.MozURL || e.webkitURL || e.MSURL || e.OURL);
            var i, a, s, l, c, u = "Modernizr",
                A = "this.onmessage=function(e){postMessage(e.data)}";
            try {
                i = new Blob([A], {
                    type: "text/javascript"
                })
            } catch (p) {}
            i || (a = new r, a.append(A), i = a.getBlob()), l = o.createObjectURL(i), s = new Worker(l), s.onmessage = function(e) {
                d("blobworkers", u === e.data), n()
            }, s.onerror = t, c = setTimeout(t, 200), s.postMessage(u)
        } catch (p) {
            t()
        }
    }), Modernizr.addAsyncTest(function() {
        try {
            var e = "Modernizr",
                t = new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");
            t.onmessage = function(n) {
                t.terminate(), d("dataworkers", e === n.data), t = null
            }, t.onerror = function() {
                d("dataworkers", !1), t = null
            }, setTimeout(function() {
                d("dataworkers", !1)
            }, 200), t.postMessage(e)
        } catch (n) {
            setTimeout(function() {
                d("dataworkers", !1)
            }, 0)
        }
    });
    var z = i("input"),
        M = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        L = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++) L[t[n]] = !!(t[n] in z);
        return L.list && (L.list = !(!i("datalist") || !e.HTMLDataListElement)), L
    }(M), Modernizr.addTest("datalistelem", Modernizr.input.list);
    var _ = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        D = {};
    Modernizr.inputtypes = function(e) {
        for (var r, o, i, a = e.length, s = "1)", d = 0; a > d; d++) z.setAttribute("type", r = e[d]), i = "text" !== z.type && "style" in z, i && (z.value = s, z.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && z.style.WebkitAppearance !== n ? (T.appendChild(z), o = t.defaultView, i = o.getComputedStyle && "textfield" !== o.getComputedStyle(z, null).WebkitAppearance && 0 !== z.offsetHeight, T.removeChild(z)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? z.checkValidity && z.checkValidity() === !1 : z.value != s)), D[e[d]] = !!i;
        return D
    }(_);
    var U = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return c("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    h.mq = U, Modernizr.addTest("mediaqueries", U("only all"));
    var j = h.testStyles = c;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            j(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    }), j("#modernizr{overflow: scroll; width: 40px; height: 40px; }#" + b.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#") + "scrollbar{width:0px}", function(e) {
        Modernizr.addTest("cssscrollbar", 40 == e.scrollWidth)
    }), Modernizr.addTest("siblinggeneral", function() {
        return j("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}", function(e) {
            return 200 == e.lastChild.offsetWidth
        }, 2)
    }), Modernizr.addTest("formvalidation", function() {
        var t = i("form");
        if (!("checkValidity" in t && "addEventListener" in t)) return !1;
        if ("reportValidity" in t) return !0;
        var n, r = !1;
        return Modernizr.formvalidationapi = !0, t.addEventListener("submit", function(t) {
            (!e.opera || e.operamini) && t.preventDefault(), t.stopPropagation()
        }, !1), t.innerHTML = '<input name="modTest" required="required" /><button></button>', j("#modernizr form{position:absolute;top:-99999em}", function(e) {
            e.appendChild(t), n = t.getElementsByTagName("input")[0], n.addEventListener("invalid", function(e) {
                r = !0, e.preventDefault(), e.stopPropagation()
            }, !1), Modernizr.formvalidationmessage = !!n.validationMessage, t.getElementsByTagName("button")[0].click()
        }), r
    }), Modernizr.addTest("localizednumber", function() {
        if (!Modernizr.inputtypes.number) return !1;
        if (!Modernizr.formvalidation) return !1;
        var e, n = i("div"),
            r = l(),
            o = function() {
                return T.insertBefore(r, T.firstElementChild || T.firstChild)
            }();
        n.innerHTML = '<input type="number" value="1.0" step="0.1"/>';
        var a = n.childNodes[0];
        o.appendChild(n), a.focus();
        try {
            t.execCommand("InsertText", !1, "1,1")
        } catch (s) {}
        return e = "number" === a.type && 1.1 === a.valueAsNumber && a.checkValidity(), o.removeChild(n), r.fake && o.parentNode.removeChild(o), e
    }), j("#modernizr { height: 50vh; }", function(t) {
        var n = parseInt(e.innerHeight / 2, 10),
            r = parseInt((e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).height, 10);
        Modernizr.addTest("cssvhunit", r == n)
    }), j("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function(t) {
        var n = t.firstChild;
        n.innerHTML = "This is a text written in Arial", Modernizr.addTest("subpixelfont", e.getComputedStyle ? "44px" !== e.getComputedStyle(n, null).getPropertyValue("width") : !1)
    }, 1, ["subpixel"]), j("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(t) {
        var n = t.childNodes[2],
            r = t.childNodes[1],
            o = t.childNodes[0],
            i = parseInt((r.offsetWidth - r.clientWidth) / 2, 10),
            a = o.clientWidth / 100,
            s = o.clientHeight / 100,
            d = parseInt(50 * Math.max(a, s), 10),
            l = parseInt((e.getComputedStyle ? getComputedStyle(n, null) : n.currentStyle).width, 10);
        Modernizr.addTest("cssvmaxunit", u(d, l) || u(d, l - i))
    }, 3), j("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(t) {
        var n = t.childNodes[2],
            r = t.childNodes[1],
            o = t.childNodes[0],
            i = parseInt((r.offsetWidth - r.clientWidth) / 2, 10),
            a = o.clientWidth / 100,
            s = o.clientHeight / 100,
            d = parseInt(50 * Math.min(a, s), 10),
            l = parseInt((e.getComputedStyle ? getComputedStyle(n, null) : n.currentStyle).width, 10);
        Modernizr.addTest("cssvminunit", u(d, l) || u(d, l - i))
    }, 3), Modernizr.addTest("canvas", function() {
        var e = i("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addAsyncTest(function() {
        if (!Modernizr.canvas) return !1;
        var e = new Image,
            t = i("canvas"),
            n = t.getContext("2d");
        e.onload = function() {
            d("apng", function() {
                return "undefined" == typeof t.getContext ? !1 : (n.drawImage(e, 0, 0), 0 === n.getImageData(0, 0, 1, 1).data[3])
            })
        }, e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="
    });
    var Q = function(e) {
        if ("undefined" == typeof XMLHttpRequest) return !1;
        var t = new XMLHttpRequest;
        t.open("get", "/", !0);
        try {
            t.responseType = e
        } catch (n) {
            return !1
        }
        return "response" in t && t.responseType == e
    };
    Modernizr.addTest("xhrresponsetypedocument", Q("document"));
    var R = {}.toString;
    Modernizr.addTest("smil", function() {
        return !!t.createElementNS && /SVGAnimate/.test(R.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
    }), Modernizr.addTest("blobconstructor", function() {
        try {
            return !!new Blob
        } catch (e) {
            return !1
        }
    }, {
        aliases: ["blob-constructor"]
    }), Modernizr.addTest("typedarrays", "ArrayBuffer" in e);
    var I = {
        style: N.elem.style
    };
    Modernizr._q.unshift(function() {
        delete I.style
    });
    var H = h.testProp = function(e, t, r) {
        return f([e], n, t, r)
    };
    Modernizr.addTest("textshadow", H("textShadow", "1px 1px"))
}(window, document);