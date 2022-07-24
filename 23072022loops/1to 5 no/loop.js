//WHILE LOOP
var a = 1;
var list = '';
while (a <= 5) {
    list += a + '<br/>';
    a++;
}
document.getElementById('list').innerHTML = list;

//DO WHILE
var b = 1;
var number = '';
do {
    number += +b +"<br/>";
    b++;
}
while (b <= 5);
document.getElementById('number').innerHTML = number;

//FOR LOOP
var num = '';
for (var c = 1; c <= 5; c++) {
    num += c + "<br/>";
}
document.getElementById('num').innerHTML = num;
