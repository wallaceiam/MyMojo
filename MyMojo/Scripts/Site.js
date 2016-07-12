$(function () {

    //  scroll animated with wow.js
    //  settings div wow
    wow = new WOW(
      {
          animateClass: 'animated fadeInUp',
          offset: 50,
          mobile: true,  // false
          callback: function (box) { }
      }
    );
    //  Go! div wow
    wow.init();


    /*======= Skillset *=======*/


    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function () {

        $('.level-bar-inner').each(function () {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });
});