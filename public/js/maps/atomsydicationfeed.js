require = function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function (a, b, c) {
        "use strict";
        var d = ["I", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"],
            e = {
                decToRoman: function (a) {
                    var b = Math.round(a || 0);
                    return b < 0 && (b = 0), b > d.length - 1 && (b = d.length - 1), d[b]
                },
                formatDate: function (a) {
                    var b = new Date(a),
                        c = b.getUTCFullYear(),
                        d = b.getUTCMonth() + 1,
                        e = b.getUTCDate(),
                        f = b.getUTCHours(),
                        g = b.getUTCMinutes(),
                        h = b.getUTCSeconds();
                    return d < 10 && (d = "0" + d), e < 10 && (e = "0" + e), f < 10 && (f = "0" + f), g < 10 && (g = "0" + g), h < 10 && (h = "0" + h), c + "-" + d + "-" + e + " " + f + ":" + g + ":" + h + " UTC"
                },
                formatDepth: function (a) {
                    return a.toFixed(1)
                },
                formatMagnitude: function (a) {
                    return a.toFixed(1)
                }
            };
        b.exports = e
    }, {}],
    "listwidget/DYFIList": [function (a, b, c) {
        "use strict";
        var d = a("listwidget/EqList"),
            e = a("listwidget/Util"),
            f = function (a) {
                var b;
                return b = d(a), b.getClassName = function () {
                    return "eqlist dyfilist"
                }, b.getEventAside = function (a) {
                    return (a.properties.felt || 0) + " responses"
                }, b.getEventTitle = function (a) {
                    return a.properties.title
                }, b.getEventValue = function (a) {
                    var b = e.decToRoman(a.properties.cdi);
                    return '<span class="roman mmi' + b + '">' + b + "</span>"
                }, b.includeEvent = function (a) {
                    return a.properties.types.indexOf("dyfi") !== -1
                }, a = null, b
            };
        b.exports = f
    }, {
        "listwidget/EqList": "listwidget/EqList",
        "listwidget/Util": 1
    }],
    "listwidget/EqList": [function (a, b, c) {
        "use strict";
        var d = a("listwidget/Util"),
            e = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/",
            f = {},
            g = {},
            h = !0,
            i = e + "significant_month.geojsonp",
            j = e + "significant_week.geojsonp",
            k = e + "significant_day.geojsonp",
            l = e + "significant_hour.geojsonp",
            m = e + "all_month.geojsonp",
            n = e + "all_week.geojsonp",
            o = e + "all_day.geojsonp",
            p = e + "all_hour.geojsonp",
            q = e + "4.5_month.geojsonp",
            r = e + "4.5_week.geojsonp",
            s = e + "4.5_day.geojsonp",
            t = e + "4.5_hour.geojsonp",
            u = e + "2.5_month.geojsonp",
            v = e + "2.5_week.geojsonp",
            w = e + "2.5_day.geojsonp",
            x = e + "2.5_hour.geojsonp",
            y = e + "1.0_month.geojsonp",
            z = e + "1.0_week.geojsonp",
            A = e + "1.0_day.geojsonp",
            B = e + "1.0_hour.geojsonp",
            C = function (a, b) {
                var c = g[a];
                void 0 !== c && null !== c || (c = []), c.push(b), g[a] = c
            },
            D = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) a[c].call(null, b)
            },
            E = function (a) {
                var b = a.name || null,
                    c = document.querySelector("head"),
                    d = new RegExp(b + "\\.js$"),
                    e = null,
                    f = document.querySelectorAll("script[src]");
                if (c && b) {
                    for (var g = 0;
                        "undefined" == typeof url && g < f.length; g++)
                        if (e = f[g].src, e.match(d)) return e.replace(/\.js$/, ".css");
                    return null
                }
                try {
                    console.log("EqList::No head element.")
                } catch (a) {}
            },
            F = function (a) {
                var b = a.url,
                    c = document.querySelector("head");
                if (c && null !== b && !f.hasOwnProperty(b)) {
                    var d = document.createElement("link");
                    d.setAttribute("rel", "stylesheet"), d.setAttribute("href", b), c.appendChild(d), f[b] = !0
                }
            },
            G = function (a) {
                var b, c, e, f, g, h, j, k, l, m, n, o, p;
                return b = {}, c = function (a) {
                    e = a.container || document.createElement("div"), g = a.feed || i, h = a.includeEvent || null, j = a.compareEvents || null, f = a.css || null, a.load !== !1 && b.load()
                }, k = function (a) {
                    var b = document.createElement("p");
                    return b.className = "error", b.innerHTML = a, b
                }, l = function () {
                    e.innerHTML = ""
                }, m = function () {
                    var a = document.createElement("script");
                    a.src = g, C(g, function (b) {
                        p(b), a.parentNode.removeChild(a)
                    }), document.querySelector("script").parentNode.appendChild(a)
                }, n = function (a) {
                    var c, d = a.slice(0),
                        e = a.length - 1;
                    for (c = h || b.includeEvent; e >= 0; e--) c(a[e]) || d.splice(e, 1);
                    return d
                }, o = function () {
                    var a = e.appendChild(document.createElement("p"));
                    a.className = "eqlist-loading", a.innerHTML = 'Fetching list of earthquakes. If this takes longer than is reasonable, you can <a href="' + g + '">view the source data</a>.'
                }, p = function (a) {
                    var c, d = n(a.features),
                        f = 0,
                        g = d.length,
                        h = [];
                    if (0 === g) return l(), void e.appendChild(k("No Events Found."));
                    for (d.sort(j || b.compareEvents), f = 0; f < g; f++) h.push(b.getEventMarkup(d[f]));
                    l(), c = document.createElement("ol"), c.className = b.getClassName().toLowerCase(), c.innerHTML = h.join(""), e.appendChild(c)
                }, b.compareEvents = function (a, b) {
                    return b.properties.time - a.properties.time
                }, b.getClassName = function () {
                    return "EqList"
                }, b.getEventAside = function (a) {
                    return d.formatDepth(a.geometry.coordinates[2]) + " km"
                }, b.getEventMarkup = function (a) {
                    var c = a.properties;
                    return ['<li class="eqitem">', '<span class="value">', b.getEventValue(a), "</span>", '<a class="title" href="', c.url, '">', b.getEventTitle(a), "</a>", '<div class="row">', '<span class="subtitle column mobile-three-of-four">', b.getEventSubtitle(a), "</span>", '<span class="aside column mobile-one-of-four">', b.getEventAside(a), "</span>", "</div>", "</li>"].join("")
                }, b.getEventSubtitle = function (a) {
                    return d.formatDate(a.properties.time)
                }, b.getEventTitle = function (a) {
                    return a.properties.place
                }, b.getEventValue = function (a) {
                    return d.formatMagnitude(a.properties.mag)
                }, b.includeEvent = function () {
                    return !0
                }, b.load = function () {
                    F({
                        url: f || E({
                            name: "earthquake-list-widget"
                        })
                    }), o(), m()
                }, c(a || {}), a = null, b
            };
        G.setValidateUrl = function (a) {
            h = a
        }, G.unregisterListener = function (a) {
            g[a] = null, delete g[a]
        }, window.eqfeed_callback = function (a) {
            var b = a.metadata.url,
                c = null;
            for (c in g) b.indexOf(c) === -1 && h !== !1 || (D(g[c], a), h === !0 && G.unregisterListener(c))
        }, G.SIG_URL_MONTH = i, G.SIG_URL_WEEK = j, G.SIG_URL_DAY = k, G.SIG_URL_HOUR = l, G.ALL_URL_MONTH = m, G.ALL_URL_WEEK = n, G.ALL_URL_DAY = o, G.ALL_URL_HOUR = p, G.M45_URL_MONTH = q, G.M45_URL_WEEK = r, G.M45_URL_DAY = s, G.M45_URL_HOUR = t, G.M25_URL_MONTH = u, G.M25_URL_WEEK = v, G.M25_URL_DAY = w, G.M25_URL_HOUR = x, G.M1_URL_MONTH = y, G.M1_URL_WEEK = z, G.M1_URL_DAY = A, G.M1_URL_HOUR = B, b.exports = G
    }, {
        "listwidget/Util": 1
    }],
    "listwidget/PAGERList": [function (a, b, c) {
        "use strict";
        var d = a("listwidget/EqList"),
            e = a("listwidget/Util"),
            f = function (a) {
                var b;
                return b = d(a), b.getClassName = function () {
                    return "eqlist pagerlist"
                }, b.getEventAside = function (a) {
                    var b = e.decToRoman(a.properties.mmi);
                    return '<span class="roman mmi' + b + '">' + b + "</span>"
                }, b.getEventTitle = function (a) {
                    return a.properties.title
                }, b.getEventValue = function (a) {
                    return '<span class="pager-alertlevel pager-alertlevel-' + a.properties.alert + '">' + a.properties.alert[0].toUpperCase() + a.properties.alert.slice(1) + "</span>"
                }, b.includeEvent = function (a) {
                    return a.properties.types.indexOf("losspager") !== -1
                }, a = null, b
            };
        b.exports = f
    }, {
        "listwidget/EqList": "listwidget/EqList",
        "listwidget/Util": 1
    }],
    "listwidget/ShakeMapList": [function (a, b, c) {
        "use strict";
        var d = a("listwidget/EqList"),
            e = a("listwidget/Util"),
            f = function (a) {
                var b;
                return b = d(a), b.getClassName = function () {
                    return "eqlist shakemaplist"
                }, b.getEventAside = function (a) {
                    return a.id
                }, b.getEventTitle = function (a) {
                    return a.properties.title
                }, b.getEventValue = function (a) {
                    var b = e.decToRoman(a.properties.mmi);
                    return '<span class="roman mmi' + b + '">' + b + "</span>"
                }, b.includeEvent = function (a) {
                    return a.properties.types.indexOf("shakemap") !== -1
                }, a = null, b
            };
        b.exports = f
    }, {
        "listwidget/EqList": "listwidget/EqList",
        "listwidget/Util": 1
    }]
}, {}, []);