var list = '';
var number = 10;
for (var a = 1; a <= number; a++) {
    for (var b = 1; b <= 10; b++) {
        list += '&nbsp; &nbsp #'
    }
    list += '<br/>'
}
document.getElementById('mayur').innerHTML = list;
// top to bottom
var list = '';
var number = 10;
for (var c = 0; c <= number; c++) {
    for (var d = 1; d <= c; d++) {
        list += '&nbsp; &nbsp #'
    }
    list += '<br/>'
}
document.getElementById('top').innerHTML = list;
//  bottom to top
var list = '';
var number = 10;
for (var c = 10; c >= 0; c--) {
    for (var d = 1; d <= c; d++) {
        list += '&nbsp; &nbsp #'
    }
    list += '<br/>'
}
document.getElementById('bottom').innerHTML = list;