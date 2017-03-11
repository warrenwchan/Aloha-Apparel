$(function () {
    // smooth scrolling
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = this.hash,
            // takes # of 'a href'
            $target = $(target);
        // targets # of 'a href'

        $('html, body').animate({
            // animate method on the body
            'scrollTop': $target.offset().top - 116
            // scrolltop animate method smooth scroll to corresponding 'a href' #
        }, 400)
        // .top 116 for fixed nav bar. 900 for scroll speed in millisec
    });



    $('.subbutt').on('click', function (event) {
        event.preventDefault();
        const isItValid = formValidation($('.email').val())
        
        if(isItValid){
            confirm('Thanks for marking this');
        } else {
            confirm('Please stop being dumb')
        }
    });


    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        freescroll: true,
        groupCells: 1,
        prevNextButtons: false,
        pageDots: true,
        resize: true,
        autoPlay: true,

    });

    function formValidation(string) {
        return /.+@.+\..+/gi.test(string)
    }
});