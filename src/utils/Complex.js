export default class Complex {
    constructor(re = 0, im = 0) {
        this.re = re;
        this.im = im;
    }

    toString(){
        return `${this.re}${this.im > 0 ? ` + ${Math.abs(this.im)}i` : this.im < 0 ? ` - ${Math.abs(this.im)}i`:''}`;
    }

    getRe() {
        return this.re;
    }
    
    getIm() {
        return this.im;
    }

    static add(c1, c2) {
        return new Complex(c1.re + c2.re, c1.im + c2.im);
    }

    static sub(c1, c2) {
        return new Complex(c1.re - c2.re, c1.im - c2.im);
    }

    static mult(c1, c2) {
        return new Complex(
            c1.re * c2.re - c1.im * c2.im, 
            c1.re * c2.im + c1.im * c2.re
        );
    }

    static div(c1, c2){
        let squares = c2.re**2 + c2.im**2;
        return new Complex(
            (c1.re * c2.re + c1.im * c2.im) / squares, 
            (c2.re * c1.im - c1.re * c2.im) / squares,
        );
    }

    static expJ(value) { // exp(j*a)
        return new Complex(Math.cos(value), Math.sin(value));
    }

    static task(xMin, xMax, h) {
        let array = [];
        let x = xMin;
        do {
            let sum = new Complex();
            for (let k = 0; k <= 10; k++) {
                // debugger;
                let first = this.expJ(Math.log(2) * x);
                let second = this.add(first, new Complex(k * x));
                let third = this.div(new Complex(k), second);
                let fourth  = this.expJ(k * x);
                let six = Math.pow(Math.E, x);
                let seven = this.mult(fourth, new Complex(six));
                let result = this.mult(third, seven);
                sum = this.add(sum, result);
            }
            array.push({
                re: sum.getRe(),
                im: sum.getIm(),
                x 
            });
            x += h;
        } while (x < xMax);
        return array;
    }
}