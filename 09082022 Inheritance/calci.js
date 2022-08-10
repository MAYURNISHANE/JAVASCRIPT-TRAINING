var result = '';
class calculator {
    constructor() {
        
    }
    grabnum1() {
        return parseInt(document.getElementById('number1').value);
    }
    grabnum2() {
        return parseInt(document.getElementById('number2').value);
    }

    maths(num1, num2, calculate) {
        if (calculate == '+') {
            result = (num1 + num2);
        }
        else if (calculate == '-') {
            result = (num1 - num2);
        }
        else if (calculate == '*') {
            result = (num1 * num2);
        }
        else if (calculate == '/') {
            result = (num1 / num2);
        }
        else if (calculate == '%') {
            result = (num1 % num2);
        }
        document.getElementById('result').innerHTML = result;

    }
}
class mathematics extends calculator {
    constructor() {
        super();

    }
    addition() {

        var int1 = this.grabnum1();
        var int2 = this.grabnum2();
         this.maths(int1,int2,'+');

    }
    substraction() {

        var int1 = this.grabnum1();
        var int2 = this.grabnum2();
         this.maths(int1,int2,'-');

    }
    multiplication() {

        var int1 = this.grabnum1();
        var int2 = this.grabnum2();
         this.maths(int1,int2,'*');

    }
    division() {

        var int1 = this.grabnum1();
        var int2 = this.grabnum2();
         this.maths(int1,int2,'/');

    }
    modulus() {

        var int1 = this.grabnum1();
        var int2 = this.grabnum2();
         this.maths(int1,int2,'%');

    }
    
}
let solve = new mathematics();
