$(document).ready(function(){
    $('.blocks > div').click(function(){
       var list = $(this).html();
    $('.block-detaile >div').addClass('dblock');
       $('.'+list).removeClass('detaile')
    })
})