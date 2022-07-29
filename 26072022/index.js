var images = ['image/image2.png', 'image/image3.png', 'image/banner3.png', 'image/banner2.png', 'image/banner1.png']
var imagetag = '';
for (var i = 0; i < images.length; i++) {
    imagetag += '<div class="images" id="image' + i + '"><img class="img" src ="' + images[i] + '"/></div>'
}
document.getElementById('mayur').innerHTML = imagetag;

function next() {
    var id = '';
    for (var i = 0; i < images.length; i++) {
        if (document.getElementById('image' + i).style.display == 'block') {
            id = i;
        }
        document.getElementById('image' + i).style.display = 'none';
    }
    document.getElementById('image' + parseInt(id + 1)).style.display = 'block';
}
function prev(){
    var id = '';
for (var i = 0; i < images.length; i++) {
    if (document.getElementById('image' + i).style.display == 'block') {
        id = i;
    }
    document.getElementById('image' + i).style.display = 'none';
}
document.getElementById('image' + parseInt(id - 1)).style.display = 'block';
}