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


var x = document.querySelectorAll('.pay input[type="radio"]');
x.forEach(function (e, t) {
    return e.addEventListener("click", function () {
        if (p = t, x.forEach(function (e) {
                e.removeAttribute("checked"), e.removeAttribute("class"), e.nextElementSibling.style.opacity = "1", e.nextElementSibling.nextElementSibling.style.transform = "scale(0)", e.parentElement.style.border = "none", e.nextElementSibling.style.backgroundColor = "white", e.parentElement.style.height = "46px"
            }), document.querySelector('input[name="payment"]:checked').setAttribute("checked", "checked"), document.querySelector('input[name="payment"]:checked').parentElement.style.border = "2px solid #ccc", document.querySelector('input[name="payment"]:checked').nextElementSibling.style.backgroundColor = "none", "mobile-pay" === document.querySelector('input[name="payment"]:checked').value ? document.querySelector('input[name="payment"]:checked').parentElement.style.height = "140px" : document.querySelector('input[name="payment"]:checked').parentElement.style.height = "358px", document.querySelector('input[name="payment"]:checked').nextElementSibling.nextElementSibling.style.display = "inherit" === e.value) y[3] = !0, O();
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