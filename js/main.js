$(function(){

    $('.subbutt').on('click', function(){
        var emailInput = ('email').val;
        
        if ('emailInput' == "") {
            alert('Empty email slot..');
        }
        // console.log('hope');
    //     if 
    //    prompt('Thank you for your email.');
        
    });


    $('.main-carousel').flickity({
        cellAlign: 'center',
        contain: true,
        freescroll: true,
        groupCells: 1,
        prevNextButtons: false,
        pageDots: true,
        resize: true,
        autoPlay: true,
        });

    $('')({

    })


});

