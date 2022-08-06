$(document).ready(function(){
    $('button').click(function(){
        $.ajax({url: 'text.txt',
    success: function(result){
        $('.show').html(result);
    }
    })
    })
})