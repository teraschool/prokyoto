function $hude(canvas) {
    return new hude(canvas);
}

class huont {
    constructor(f){
        if (f) {
            this.weight = f.weight | "normal";
            this.size = f.size | "10px";
            this.family = f.family | "sans-serif";
        } else {
            this.weight = "normal";
            this.size = "10px";
            this.family = "sans-serif";
        }
    }

    get() {
        return Object.values(this).join(' ');
    }
}

class hude {
    constructor(canvas) {
        this._c = canvas;
        this._g = c.getContext('2d');

        this._huont = new huont();

        this.clearWith("white");
    }

    get $w() {
        return this._c.width;
    }

    get $h() {
        return this._c.height;
    }

    center() {
        this._g.setTransform(1, 0, 0, 1, this.$w / 2, this.$h / 2);

        return this;
    }

    translate(x, y) {
        this._g.translate(x, y);

        return this;
    }

    fillStyle(s) {
        this._g.fillStyle = s;

        return this;
    }

    strokeStyle(s) {
        this._g.strokeStyle = s;

        return this;
    }

    fill(s) {
        if (s) this._g.fillStyle = s;
        this._g.fill();

        return this;
    }

    stroke(s) {
        if (s) this._g.strokeStyle = s;
        this._g.stroke();

        return this;
    }

    circle(r) {
        this._g.beginPath();
        this._g.arc(0, 0, r, 0, 2 * Math.PI);
        this._g.closePath();

        return this;
    }

    roundRect(w, h, r) {
        this._g.translate(-w/2, -h/2);
        this._g.beginPath();
        this._g.moveTo(0, r);
        this._g.arc(r, h - r, r, Math.PI, Math.PI / 2, 1);
        this._g.arc(w - r, h - r, r, Math.PI / 2, 0, 1); 
        this._g.arc(w - r, r, r, 0, Math.PI * 3 / 2, 1);
        this._g.arc(r, r, r, Math.PI * 3 / 2, Math.PI, 1);
        this._g.closePath();

        return this;
    }

    clearWith(s) {
        this._g.resetTransform();
        this._g.fillStyle= s;
        this._g.fillRect(0, 0, this.$w, this.$h);

        return this;
    }

    font(f) {

        for (let [k, v] of Object.entries(f)) {
            this._huont[k] = v;
        }

        this._g.font = this._huont.get();

        return this;
    }

    baseLine(v) {
        this._g.textBaseline = v;

        return this;
    }

    textAlign(v) {
        this._g.textAlign = v;

        return this;
    }

    text(t, align, baseLine) {
        if (align) this._g.textAlign = align;

        if (baseLine) this._g.textBaseline = baseLine;

        this._g.fillText(t, 0, 0);

        return this;
    }

}