$(document).ready(function(){
    $('.product > span').click(function(){
        var list = $(this).html();
        $('.detaile > ul').addClass('same')
        $('.'+list).removeClass('same');
    })
})