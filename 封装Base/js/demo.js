window.onload = function () {

    /*
    $().getId('a').css('backgroundColor', 'red');
    alert($().getId('a').css('backgroundColor'));
    */

    // $().getId('a').innerHTML(456);

    // $().getId('a').css('backgroundColor', 'blue').css('height', '500px').html('你好 CSS').css('color', 'red');


    /*
        $().getTagName('div').click(function () {
            alert(123);
        });
    */

    /*
        $().getName('h').click(function () {
            alert('hello');
        });
    */

    $().getClass('ccc').css('backgroundColor', '#ccc');

    $().getClass('dropMenu').center(100, 500);

    $().resize(
        function () {
            $().getClass('dropMenu').center(100, 500);
        }
    );

    $().getClass('dropMenu').hover(function () {
        $(this).getClass('menu').show();
    }, function () {
        $(this).getClass('menu').hide();
    });
}