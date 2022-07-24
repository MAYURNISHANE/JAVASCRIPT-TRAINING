var list = '';
var number = 10;
for (var a = 1; a <= number; a++) {
    list += "<tr>";
    for (var b = 1; b <= 10; b++) {
        list += "<td>" + b + "</td>"
    }
    list += "</tr>";
}
document.getElementById('table').innerHTML = list;