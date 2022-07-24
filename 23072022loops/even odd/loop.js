//while loop
var a = 1;
var list = '';
while (a <= 10) {
    if (a % 2 == 0) {
        list += '<div class="even">even</div>'
    }
    else {
        list += '<div class="odd">odd</div>'
    }
    a++;
}
document.getElementById('list').innerHTML = list;
//DO WHILE
var b = 1;
var number = '';
do {
    if (b % 2 == 0) {
        number += '<div class="even">even</div>'
    }
    else {
        number += '<div class="odd">odd</div>'
    }
    b++;
}
while (b <= 10);
document.getElementById('number').innerHTML = number;

//FOR LOOP
var num = '';
for (var c = 1; c <= 10; c++) {
    if (c % 2 == 0) {
        num += '<div class="even">even</div>'
    }
    else {
        num += '<div class="odd">odd</div>'
    }
}
document.getElementById('num').innerHTML = num;

