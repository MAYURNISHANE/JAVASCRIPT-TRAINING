
$(document).ready(function () {
    $('.car1, .car2, .car3').click(function () {
        $('.img1, .img2, .img3').hide()
        if ($(this).hasClass('car1')) {
            $('.img2').slideToggle();
            $(this).toggleClass('active');
        }
        else if ($(this).hasClass('car3')) {
            $('.img3').slideToggle();
            $(this).toggleClass('active');
        }
        else {
            $('.img1').slideToggle();
            $(this).toggleClass('active');
        }
    })
})