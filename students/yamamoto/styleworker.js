const RES_W = 430;

function autosize() {
    let w = window.innerWidth;

    const desktop = document.getElementById("desktop");
    const mobile = document.getElementById("mobile");
    if (w < RES_W) {
        desktop.disabled = true;
        mobile.disabled = false;
    } else {
        desktop.disabled = false;
        mobile.disabled = true;
    }
}

function addClass(name, add) {
    const e = document.getElementsByClassName(name);
    for (let i = 0; i < e.length; i++) {
        e[i].classList.add(add);
    }
}

function removeClass(name, remove) {
    const e = document.getElementsByClassName(name);
    for (let i = 0; i < e.length; i++) {
        e[i].classList.remove(remove);
    }
}

window.addEventListener("load", function () {
    const ua = navigator.userAgent;

    const desktop = document.getElementById("desktop");
    const mobile = document.getElementById("mobile");

    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') && ua.indexOf('Mobile') > 0) {
        //Smartphone
        desktop.disabled = true;
        mobile.disabled = false;
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        //Tablet
        desktop.disabled = true;
        mobile.disabled = false;
    } else {
        //Desktop
        desktop.disabled = false;
        mobile.disabled = true;
    }
});
