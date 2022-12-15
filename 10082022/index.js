var arr = [{key: 'value'},'mayur', 'guru', 'amit', 'jay'];

for(var i of arr){
    if (i =='mayur'){
        var fname = i.replace('mayur', 'mayur nishane');
        alert(fname);
    }
    document.getElementById('demo').innerHTML = fname
}