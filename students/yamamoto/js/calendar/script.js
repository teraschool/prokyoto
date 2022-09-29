const N = 50;
const today = new Date();
let c, g, w, h, scale;
let isAnimated = false;
let y, m, d;

function resize(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    w = c.width / 2;
    h = c.height / 2;
    scale = Math.min(w, h) / 70;
}

function getMonthDays(y, m) {
    return new Date(y, m, 0).getDate();
}

function on_click(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - w;
    const y = e.clientY - rect.top - h;

    if (y < -scale * 125 / 3) {
        if (x >= 0) {
            nextMonth();
        } else {
            previousMonth();
        }
    }
}

function nextMonth() {
    if (m + 1 > 11) {
        m = 0;
        y++;
    } else {
        m++;
    }
    draw();
}

function previousMonth() {
    if (m - 1 < 0) {
        m = 11;
        y--;
    } else {
        m--;
    }
    draw();
}

function compareDate(date1, date2) {
    if (date1.getFullYear() == date2.getFullYear()) {
        if (date1.getMonth() == date2.getMonth()) {
            if (date1.getDate() == date2.getDate()) {
                return true;
            }
        }
    }
    return false;
}

function draw() {
    g.fillStyle = "#eee";
    g.fillRect(0, 0, c.width, c.height);

    g.setTransform(1, 0, 0, 1, c.width / 2, c.height / 2);

    let date, dx, dy;
    const start = new Date(y, m, 0).getDay();
    for (let week = 0; week <= 5; week++) {
        dy = scale * ((100 * week - 250) / 6);
        if (typeof date !== "undefined" && date.getMonth() != m) {
            continue;
        }
        for (let day = 0; day < 7; day++) {
            dx = scale * ((100 * day - 350) / 7);
            date = new Date(y, m, week * 7 + day - start);
            switch (date.getDay()) {
                case 0:
                    g.fillStyle = "#c66";
                    break;
                case 6:
                    g.fillStyle = "#66c";
                    break;
                default:
                    g.fillStyle = "#ccc";
                    break;
            }
            if (date.getMonth() != m) {
                g.globalAlpha = 0.3;
            } else {
                g.globalAlpha = 1;
            }
            g.fillRect(dx, dy, scale * 100 / 7 - scale, scale * 100 / 7 - scale);
            if (compareDate(today, date)) {
                g.fillStyle = "#fff";
                g.beginPath();
                g.arc(dx + (scale * 50 / 7), dy + (scale * 100 / 7) - scale * 3, scale * 1.5, 0, 2 * Math.PI);
                g.fill();
            }
            g.fillStyle = "#333";
            g.font = (scale * 5) + "px Ubuntu Mono";
            g.textAlign = "left";
            g.textBaseline = "top";
            g.fillText(date.getDate(), dx + scale, dy + scale);
        }
    }

    g.globalAlpha = 1;
    g.fillStyle = "#333";


    g.textAlign = "center";
    g.font = (scale * 5) + "px Ubuntu Mono";
    g.fillText(y, 0, -scale * 125 / 3 - (scale * 5));

    g.font = (scale * 15) + "px Ubuntu Mono";
    g.fillText((m + 1), 0, -scale * 125 / 3 - (scale * 20));

    dx = -50 * scale;
    dy = -60 * scale;
    g.fillStyle = "#ccc";
    g.beginPath();
    g.moveTo(dx + scale * 10, dy);
    g.lineTo(dx + scale * 10, dy + scale * 10);
    g.lineTo(dx, dy + scale * 5);
    g.fill();

    dx = 50 * scale;
    g.beginPath();
    g.moveTo(dx - scale * 10, dy);
    g.lineTo(dx - scale * 10, dy + scale * 10);
    g.lineTo(dx, dy + scale * 5);
    g.fill();

    g.setTransform(1, 0, 0, 1, 0, 0);
};

window.addEventListener("load", function () {
    const now = new Date();
    y = now.getFullYear();
    m = now.getMonth();
    c = document.getElementById("c");
    g = c.getContext("2d");
    c.addEventListener("DOMMouseScroll", function (e) {

    });
    resize(c);
    draw();
});

window.addEventListener("resize", function () {
    resize(c);
    draw(c);
});

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 39) {
        nextMonth();
    } else if (e.keyCode == 37) {
        previousMonth();
    }
});

window.addEventListener("mousedown", function (e) {
    on_click(e);
});

window.addEventListener("touchstart", function (e) {
    on_click(e);
});
