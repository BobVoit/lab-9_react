import sqrtComplex from 'complex-sqrt';

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

    module() {
        return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
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

    static sqrt(value) {
        // let module = value.module();

        // let newNumber = new Complex(value.re / 4, value.im / 4);

        // // let arg = 0;

        // // if (value.re >= 0) {
        // //     arg = Math.atan(value.im / value.re);
        // // } else if (value.re < 0 && value.im > 0) {
        // //     arg = Math.PI + Math.atan(Math.abs(value.im / value.re));
        // // } else if (value.re < 0 && value.im < 0) {
        // //     arg = -Math.PI + Math.atan(Math.abs(value.im / value.re));
        // // }

        // let arg = Math.atan2(value.im, value.re);

        // let arg2 = arg / 2;

        // let newNumber2 = new Complex(Math.cos(arg2), Math.sin(arg2));

        // let result = new Complex(newNumber2.re * Math.sqrt(module), newNumber2.im * Math.sqrt(module));

        // return result; 

        let result = sqrtComplex(value.re, value.im);
        
        return new Complex(result[0], result[1]);

        // let reValue = Math.sqrt((module + value.re) / 2);

        // let imValue = (value.im >= 0 ? 1 : -1) * Math.sqrt((module - value.re) / 2);


        // return new Complex(reValue, imValue);
    }

    multOnNumber(number) {
        return new Complex(this.re * number, this.im * number);
    }

    static ln(value) {
        let module = value.module();
        let reValue = Math.log(module);
        // let arg = 0;

        // if (value.re >= 0) {
        //     arg = Math.atan(value.im / value.re);
        // } else if (value.re < 0 && value.im > 0) {
        //     arg = Math.PI + Math.atan(Math.abs(value.im / value.re));
        // } else if (value.re < 0 && value.im < 0) {
        //     arg = -Math.PI + Math.atan(Math.abs(value.im / value.re));
        // }
        // debugger
        let imValue = Math.atan2(value.im, value.re);
        return new Complex(reValue, imValue);

        // let z = value.module();
        // let f = Math.acos(value.re / z);
        // f = Math.asin(value.im / z);
        // //f:=arctan(x.i/x.r);

        // if ((value.im / value.re) < 0) {
        //     f = Math.PI-f;
        // }

        // return new Complex(Math.log(z), f)

        // result.r:=ln(z);
        // result.i:=f;
    }

    static task(xMin, xMax, h) {
        let array = [];
        let x = xMin;
        do {
            let sum = new Complex(1, 0);
            for (let k = 0; k <= 10; k++) {
                let denominator = new Complex(-x, k);

                // debugger;
                let num = new Complex(-5, k);
                let numSqrt = Complex.sqrt(num);
                let numLn = Complex.ln(numSqrt);
                let numerator = numLn.multOnNumber(4);

                let value = Complex.div(numerator, denominator);

                sum = Complex.mult(sum, value);
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