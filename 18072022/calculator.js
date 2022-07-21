function addition() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById('result').innerHTML = sum;
}
function substraction() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = num1 - num2;
    document.getElementById('result').innerHTML = sum;
}
function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = num1 * num2;
    document.getElementById('result').innerHTML = sum;
}
function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = num1 / num2;
    document.getElementById('result').innerHTML = sum;
}
function modulus() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = num1 % num2;
    document.getElementById('result').innerHTML = sum;
}
function clearscreen() {
    var num1 = document.getElementById('num1').value ='';
    var num2 = document.getElementById('num2').value ='';
    var sum = '';
    document.getElementById('result').innerHTML = sum;
}