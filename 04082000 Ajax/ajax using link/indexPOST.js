$(document).ready(function(){
    $('button').click(function(){
        $.post('https://dummy.restapiexample.com/api/v1/create',
        { 
            name: 'Hemanshu1', 
            city: 'Nagpur',
            conuntry: 'Pakistan'
        },
    function(result){
       
        console.log('result', result)
    }
    )
    })
})