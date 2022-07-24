function equalto() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var result = (number1 == number2) ? 'both are equal' : 'both are unequal';
    document.getElementById('result').innerHTML = result;
}
function unequalto() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var result = (number1 != number2) ? 'both are different' : 'both are equal';
    document.getElementById('result').innerHTML = result;
}
function greaterthan() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var result = (number1 > number2) ? number1 + 'is greater than' + number2 : number2 + 'is greater than' + number1;
    document.getElementById('result').innerHTML = result;
}
function lessthan() {
    var number1 = parseInt(document.getElementById('num1').value);
    var number2 = parseInt(document.getElementById('num2').value);
    var result = (number1 < number2) ? number1 + 'is less than' + number2 : number2 + 'is less than' + number1;
    document.getElementById('result').innerHTML = result;
}
function clearscreen() {
    var number1 = document.getElementById('num1').value = '';
    var number2 = document.getElementById('num2').value = '';
    var result = '';
    document.getElementById('result').innerHTML = result;
}