(function () {
    const c = document.getElementById("canvas");
    const g = c.getContext("2d");
    c.width = 512;
    c.height = 512;
    c.style.position = "absolute";

    c.style.left = (window.innerWidth / 2 - c.width / 2) + "px";
    c.style.top = (window.innerHeight / 2 - c.height / 2) + "px";

    g.font = "24px Ubuntu mono, sans-serif";
    g.textAlign = "center";
    g.textBaseline = "middle";
    (function () {
        const t = new Date();

        g.fillStyle = "#fff";
        g.fillRect(0, 0, c.width, c.height);

        g.fillStyle = "#000";
        g.translate(c.width / 2, c.height / 2);
        g.rotate(Math.PI / -2);
        for (let i = 0; i < 60; i++) {
            if (i % 5)
                g.fillRect(150, -0.5, 10, 1);
            else
                g.fillRect(140, -1.5, 20, 3);
            if (t.getSeconds() == i)
                g.fillRect(-30, -0.5, 150, 1);
            if (t.getMinutes() == i)
                g.fillRect(-30, -1, 150, 2);
            if ((t.getHours() % 12) * 5 == i)
                g.fillRect(-30, -1.5, 115, 3);
            g.fillRect(0, 0, 4, 4);
            g.rotate(6 * Math.PI / 180);
        }
        g.setTransform(1, 0, 0, 1, c.width / 2, c.height / 2);
        for (let i = 0, r; i < 12; i++) {
            r = (i - 3) * 30 * (Math.PI / 180);
            g.fillText(i, 125 * Math.cos(r), 125 * Math.sin(r));
        }

        g.setTransform(1, 0, 0, 1, 0, 0);
        requestAnimationFrame(arguments.callee);
    })();
})();
