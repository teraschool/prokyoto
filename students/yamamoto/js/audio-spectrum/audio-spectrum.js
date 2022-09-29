function render(t, spectrum) {
    g.clearRect(0, 0, c.width, c.height); //Reset canvas	

    let circleSpectrum, linearSpectrum;
    for (let i = 0, l = spectrum.length; i < l; i++) {
        if ((i * 44100 / 2048) > 3000) {
            circleSpectrum = averageSplit(spectrum.slice(0, i), 64);
            linearSpectrum = averageSplit(spectrum.slice(0, i), 32);
            break;
        }
    }

    g.setTransform(1, 0, 0, 1, c.width / 2, c.height / 2); //move origin to center of the canvas

    circle_spectrum(circleSpectrum);
    linear_spectrum(linearSpectrum, false);
    linear_spectrum(linearSpectrum, true);
    particle_spectrum(t, circleSpectrum);
    render_timer(t);

    g.setTransform(1, 0, 0, 1, 0, 0); //reset transform
}

function circle_spectrum(spectrum) {
    let level, rad, med;
    g.fillStyle = "#fff";
    for (let i = 0, l = spectrum.length; i < l; i++) {
        level = spectrum[i] / 6;
        g.rotate(2 * Math.PI / spectrum.length);
        g.fillRect(-1.5, 150 - level / 2, 3, level);
    }
}

function linear_spectrum(spectrum, isFlipped) {
    const space = (c.width / 2 - 200) / spectrum.length;
    if (isFlipped) g.scale(-1, 1);
    g.strokeStyle = "#fff";
    g.lineWidth = 1.5;
    g.beginPath();
    for (let i = 0, l = spectrum.length; i < l; i++) {
        let level = spectrum[i] - 128;
        let x = 200 + space * i;
        let y = Math.abs(level) > 32 ? level * (c.height / 2 - 400) / 256 : 0;
        if (i == 0) {
            g.moveTo(x, y);
        } else {
            g.lineTo(x, y);
        }
        g.lineTo(x + space / 2, 0);
    }
    g.stroke();
    if (isFlipped) g.scale(-1, 1);
}

let pre = 0;
let particles = [];

function particle_spectrum(t, spectrum) {
    let r;
    let threshold = averageSplit(spectrum, 10)[4];
    if (t - pre > 0.1 && threshold > 96) {
        pre = t;
        for (let i = 0; i < spectrum.length; i++) {
            level = spectrum[i] / 6;
            r = i * 2 * Math.PI / spectrum.length;
            particles.push({
                x: 150 * Math.cos(r),
                y: 150 * Math.sin(r),
                vx: Math.cos(r) * (spectrum[i] / 32),
                vy: Math.sin(r) * (spectrum[i] / 32),
                life: 1.0
            });
        }
    }
    g.fillStyle = "#fff";
    for (let i = 0, p; p = particles[i]; i++) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.05;

        if (p.life >= 0) {
            g.globalAlpha = p.life;
            g.beginPath();
            g.arc(p.x, p.y, 1.5, 0, 2 * Math.PI);
            g.fill();
        } else {
            particles.splice(i, 1);
        }
    }
    g.globalAlpha = 1.0;
}

function render_timer(t) {
    t = Math.trunc(t);
    let minutes = ('00' + Math.floor(t / 60)).slice(-2);
    let seconds = ('00' + (t % 60)).slice(-2);
    g.fillStyle = "#fff";
    g.font = "32px Ubuntu Mono, monospace";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(minutes + ":" + seconds, 0, 0);
}

function averageSplit(arr, n) {
    const ret = [];
    const size = Math.floor(arr.length / n);
    for (let i = 0, l = arr.length / size; i < l; i++) {
        ret[i] = arr.slice(i * size, (i + 1) * size);
        ret[i] = ret[i].reduce((acc, curr) => acc += curr, 0) / ret[i].length
    }
    return ret;
}
