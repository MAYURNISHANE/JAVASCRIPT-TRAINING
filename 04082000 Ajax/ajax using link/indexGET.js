$(document).ready(function(){
    $('button').click(function(){
        //ajax
        $.get({url: 'https://jsonplaceholder.typicode.com/users',
    success: function(result){
        var data = '';
        for(var a=0; a< result.length; a++){
           data += '<tr><td>'+result[a].id+'</td><td>'+result[a].name+'</td><td>'+result[a].email+'</td></tr>'
        }
        $('.show').html(data);
    }
    })
    })
})