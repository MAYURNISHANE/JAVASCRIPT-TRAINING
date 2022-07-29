var list = ['home', 'career', 'product', 'cars', 'contact', 'watches'];
var navlist =''
for (var i=0; i<list.length; i++){
    navlist+= '<li class="nav-list">'+list[i]+'</li>'
}
document.getElementById('nav').innerHTML=navlist