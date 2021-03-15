$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
    
    $( () => {
        let topBtn = $('#page-top');

        topBtn.hide();
        
        $(window).scroll( () => {
            if ($(this).scrollTop() > 400) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
        
        topBtn.click( () => {
            $('html,body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});
