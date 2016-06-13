
$('div.col-md-12 > .btn').each(function (index) {
    $(this).bind('click', function () {
        console.log('index:' + index + 'gg');

        var img = $('img:eq(' + index + ' )');

        if (img.is(":visible")) {
            img.hide();
        } else {
            img.show();
        }


    });
});



var test = function () {
    console.log('test');
}