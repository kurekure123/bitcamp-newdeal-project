    $('#card2').load('../make-bizcard/businesscard1.html');
    $('#card2').load('../make-bizcard/businesscard2.html');
    $('#card3').load('../make-bizcard/businesscard3.html');

    $('.cardlist-wrapper').on('click', '.card-flipper', function(e) {
        if ($(e.target).css('transform') == 'none') {
            $(e.target).css("transform", "rotateY(180deg)");
        } else {
            $(e.target).css("transform", "");
        }
    })
    

    
    