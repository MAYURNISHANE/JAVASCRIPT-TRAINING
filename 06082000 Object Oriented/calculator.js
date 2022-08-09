var result = '';
class calculator {
    constructor(number1, number2, operator){
        this.number1 = number1;
        this.number2 = number2;
        this.operator = operator;
    }
    getnumber1(){
        return parseInt(document.getElementById('value1').value);
    }
    getnumber2(){
        return parseInt(document.getElementById('value2').value);
    }
    calculate(){
        if (this.operator == '+'){
            result = (this.number1 + this.number2)
        }
        else if (this.operator == '-'){
            result = (this.number1 - this.number2)
        }
        else if (this.operator == '*'){
            result = (this.number1 * this.number2)
        }
        else if (this.operator == '/'){
            result = (this.number1 / this.number2)
        }
        else if (this.operator == '%'){
            result = (this.number1 % this.number2)
        }
        document.getElementById('result').innerHTML = result;
    }
}

    
function additionnew(){
    let getnum =new calculator()
    var numb1 =getnum.getnumber1();
    var numb2 =getnum.getnumber2();
    let addition = new calculator(numb1, numb2, '+');
    addition.calculate()
}
function substractnew(){
    let getnum =new calculator()
    var numb1 =getnum.getnumber1();
    var numb2 =getnum.getnumber2();
    let substract = new calculator(numb1, numb2, '-');
    substract.calculate()
}
function multiplynew(){
    let getnum =new calculator()
    var numb1 =getnum.getnumber1();
    var numb2 =getnum.getnumber2();
    let multiply = new calculator(numb1, numb2, '*');
    multiply.calculate()
}
function dividenew(){
    let getnum =new calculator()
    var numb1 =getnum.getnumber1();
    var numb2 =getnum.getnumber2();
    let divide = new calculator(numb1, numb2, '/');
    divide.calculate()
}
function modulusnew(){
    let getnum =new calculator()
    var numb1 =getnum.getnumber1();
    var numb2 =getnum.getnumber2();
    let modulus = new calculator(numb1, numb2, '%');
    modulus.calculate()
}