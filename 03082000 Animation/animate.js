$(document).ready(function () {
    $('.search').keyup(function () {
        var textValue = $(this).val();
        $('.search-text').html(textValue);
        localStorage.setItem('#search-history', textValue);
        $('#search-history').html(localStorage.getItem(textValue));

    });
    $('.search').click(function () {
        $(this).animate({ 'width': '280px' }, 3000)
        $(this).css({ 'background-color': 'purple', 'border-radius': '50px' });
    });
    $('.search').blur(function () {
        $(this).animate({ 'width': '160px' }, 0)
        $(this).css({ 'background-color': 'grey', 'border-radius': '20px' });
    })
})