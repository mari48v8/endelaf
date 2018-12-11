parcelRequire = function (e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire,
        o = "function" == typeof require && require;

    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;
                if (!t && f) return f(n, !0);
                if (i) return i(n, !0);
                if (o && "string" == typeof n) return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function (r) {
                return e[n][1][r] || r
            };
            var l = r[n] = new u.Module(n);
            e[n][0].call(l.exports, p, l, l.exports, this)
        }
        return r[n].exports;

        function p(e) {
            return u(p.resolve(e))
        }
    }
    u.isParcelRequire = !0, u.Module = function (e) {
        this.id = e, this.bundle = u, this.exports = {}
    }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
        e[r] = [function (e, r) {
            r.exports = n
        }, {}]
    };
    for (var f = 0; f < n.length; f++) u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
            return c
        }) : t && (this[t] = c)
    }
    return u
}({
    "NIH0": [function (require, module, exports) {
        "use strict";
        var e = document.querySelectorAll("input[name='trin1']"),
            t = document.querySelector(".block6 .jacket-choice");

        function n(e) {
            var n = e.target.getAttribute("value");
            t.textContent = "", t.textContent += "Windbreaker", n.indexOf("d") > -1 ? t.textContent += " Damen size: " + n[n.length - 1].toUpperCase() : t.textContent += " Herre size: " + n[n.length - 1].toUpperCase()
        }
        e.forEach(function (e) {
            return e.addEventListener("change", n)
        });
        var l = document.querySelectorAll('.radio_button input[type="radio"]'),
            r = document.querySelector(".block6 .issue-choice"),
            i = !1;
        l.forEach(function (e) {
            return e.addEventListener("click", function () {
                i = !0, l.forEach(function (e) {
                    e.parentElement.style.border = "none", e.parentElement.style.backgroundColor = "white", e.removeAttribute("checked")
                }), document.querySelector('input[name="nr-of-issues"]:checked').setAttribute("checked", "checked"), document.querySelector('input[name="nr-of-issues"]:checked').parentElement.style.border = "2px solid #0077ff", document.querySelector('input[name="nr-of-issues"]:checked').parentElement.style.backgroundColor = "lightblue", document.querySelector('input[name="nr-of-issues"]:checked').nextElementSibling.nextElementSibling.style.display = "inherit", r.textContent = "", r.textContent += e.nextElementSibling.textContent + " magazines ", r.textContent += e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
                var t = void 0,
                    n = e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
                if (n.indexOf("for") > -1) {
                    var o = n.substring(n.indexOf("for") + 4, n.indexOf("kr")),
                        c = Number(o.replace(",", "")),
                        a = String(c + 3950);
                    t = a.substring(0, a.length - 2) + "," + a.substring(a.length - 2), document.querySelector(".i-alt").textContent = "I Alt: " + t + " kr."
                }
                O()
            })
        });
        var o = document.querySelector("form"),
            c = document.querySelectorAll("div.block4>div>input:not([type='radio'])"),
            a = document.querySelectorAll(".pay"),
            u = document.querySelector("#mobile-pay-nr"),
            d = document.querySelector('button[type="submit"]'),
            m = document.querySelector("#mobile-pay-confirm"),
            s = !1,
            y = [],
            p = void 0,
            v = !1;

        function h(e, t) {
            e.addEventListener("input", function () {
                o.elements[t].validity.valid ? e.className = "true" : e.className = "false", document.querySelectorAll(".true").length === c.length && (s = !0, O())
            })
        }
        c.forEach(h);
        var b = document.querySelector("#post-nr"),
            f = document.querySelector("#by"),
            S = document.querySelector("#address"),
            g = [];

        function E() {
            fetch("postnummer.json").then(function (e) {
                return e.json()
            }).then(function (e) {
                g = e;
                var t = b.value;
                g.forEach(function (e, n) {
                    Number(t) === e.Postnr && (b.className = "true", f.textContent = "" + g[n].Bynavn, (g[n].Gade || g[n].Firma) && (S.value = g[n].Firma ? g[n].Firma + ", " + g[n].Gade : "" + g[n].Gade, S.className = "true"))
                })
            })
        }
        b.addEventListener("input", E);
        var x = document.querySelectorAll('.pay input[type="radio"]');
        x.forEach(function (e, t) {
            return e.addEventListener("click", function () {
                if (p = t, x.forEach(function (e) {
                        e.removeAttribute("checked"), e.removeAttribute("class"), e.nextElementSibling.style.opacity = "1", e.nextElementSibling.nextElementSibling.style.transform = "scale(0)", e.parentElement.style.border = "none", e.nextElementSibling.style.backgroundColor = "white", e.parentElement.style.height = "46px"
                    }), document.querySelector('input[name="payment"]:checked').setAttribute("checked", "checked"), document.querySelector('input[name="payment"]:checked').parentElement.style.border = "2px solid #0077ff", document.querySelector('input[name="payment"]:checked').nextElementSibling.style.backgroundColor = "lightblue", "girokort" === document.querySelector('input[name="payment"]:checked').value || "mobile-pay" === document.querySelector('input[name="payment"]:checked').value ? document.querySelector('input[name="payment"]:checked').parentElement.style.height = "140px" : document.querySelector('input[name="payment"]:checked').parentElement.style.height = "210px", document.querySelector('input[name="payment"]:checked').nextElementSibling.nextElementSibling.style.display = "inherit", "girokort" === e.value) y[3] = !0, O();
                else {
                    var n = e.nextElementSibling.nextElementSibling.querySelectorAll("p input"),
                        l = 0,
                        r = void 0;
                    n.forEach(function (e) {
                        e.addEventListener("input", function () {
                            e.validity.valid ? (r++, ++l !== n.length && r !== n.length || (y[t] = !0, O())) : (r = l, r--, O())
                        })
                    })
                }
                document.querySelector('input[name="payment"]:checked ~ .payment-label-around-div').style.transform = "scale(1)", document.querySelector('input[name="payment"]:checked ~ .payment-label-around-div input').focus()
            })
        });
        var k = document.querySelectorAll(".close");

        function q(e) {
            e.target.parentElement.parentElement.style.height = "46px", e.target.parentElement.style.display = "none", e.target.parentElement.parentElement.querySelector('input[type="radio"]').removeAttribute("checked"), u.value = "", m.className = "not-active", d.classList.add("not-active")
        }
        k.forEach(function (e) {
            return e.addEventListener("click", q)
        });
        var L = document.querySelectorAll('input[name="payment"]');

        function A() {
            d.style.display = "inherit", m.classList.add("not-active");
            var e = document.querySelectorAll('input[name="payment"][checked]');

            function t() {
                "mobile-pay" === e[0].id && u.validity.valid ? (m.classList.remove("not-active"), d.style.display = "none", y[2] = !0, O()) : "mobile-pay" !== e[0].id || u.validity.valid ? "mobile-pay" !== e[0].id && (m.classList.add("not-active"), d.style.display = "inherit", O()) : (m.classList.remove("not-active"), d.style.display = "none", m.classList.remove("live"))
            }
            t(), u.addEventListener("input", t)
        }
        L.forEach(function (e) {
            return e.addEventListener("change", A)
        });
        var C = document.querySelector("input#agreement");

        function N() {
            v = !!C.checked, O()
        }

        function O() {
            console.log(y);
            for (var e = 0; e < o.elements.length; e++) !0 === s && !0 === i && !0 === y[p] && !0 === v && o.elements[9].value && o.elements[10].value && o.elements[11].value && o.elements[12].value ? (d.classList.add("live"), m.classList.add("live")) : (d.classList.remove("live"), m.classList.remove("live"))
        }
        C.addEventListener("change", N), O();
    }, {}]
}, {}, ["NIH0"], null)
//# sourceMappingURL=form-yan.d61dbfc6.map