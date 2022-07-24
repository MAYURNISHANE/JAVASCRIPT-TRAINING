//WHILE LOOP
var a = 1;
var list = '';
while (a <= 10) {
    list += (a * 7) + '<br/>';
    a++;
}
document.getElementById('list').innerHTML = list;
//DO WHILE
var b = 1;
var number = '';
do {
    number += (b * 7) + '<br/>';
    b++;
}
while (b <= 10);
document.getElementById('number').innerHTML = number;

//FOR LOOP
var num = '';
for (var c = 1; c <= 10; c++) {
    num += (c * 7) + '<br/>';
}
document.getElementById('num').innerHTML = num;
