$('li').click(function() {
    alert('Clicked');
});

$('#btn').click(function () {
    console.log($('#h1').text());
    $('h1').text('Testing text');
    $('#h1').append(' Extra text');
});

$('#btn').on('click', function() {
    console.log('clicked');
});