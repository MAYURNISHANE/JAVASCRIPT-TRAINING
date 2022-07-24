function product() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result;
    if (num1 > num2) {
        result = "greater no";
    }
    else if (num1 < num2) {
        result = "lesser no";
    }
    else (num1 == num2) {
        result = "equal no";
    }
    document.getElementById('result').innerHTML = result;
}