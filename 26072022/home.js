var images = ['image/image2.png', 'image/image3.png', 'image/banner3.png', 'image/banner2.png'];
document.getElementById('result').innerHTML = '<img id="image0" class="pics" data-pics="0" src="' + images[0] + '" />'

var dots = '';
for (var i = 0; i < images.length; i++) {
    dots += '<span onclick="showimage(' + i + ')" class="block">' + i + '</span>'
}
document.getElementById('dots').innerHTML = dots;
function showimage(id) {
    document.getElementById('result').innerHTML = '<img id="image' + (id) + '"  data-pics="' + (id) + '" src="' + images[(id)] + '" />'
}
function next() {
    var currentimg = parseInt(document.querySelectorAll('#result img ')[0].dataset.pics);
    document.getElementById('result').innerHTML = '<img id="image' + (currentimg + 1) + '"  data-pics="' + (currentimg + 1) + '" src="' + images[(currentimg + 1)] + '" />'
}
function prev() {
    var currentimg = parseInt(document.querySelectorAll('#result img ')[0].dataset.pics);
    document.getElementById('result').innerHTML = '<img id="image' + (currentimg - 1) + '"  data-pics="' + (currentimg - 1) + '" src="' + images[(currentimg - 1)] + '" />'

}