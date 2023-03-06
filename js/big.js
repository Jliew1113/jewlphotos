var scrolledWindow = function() {

    $(window).scroll(function(){

        var header = $('#fh5co-header'),
            scrlTop = $(this).scrollTop();

        if ( scrlTop > 500 && scrlTop <= 2000 ) {
            header.addClass('navbar-fixed-top fh5co-animated slideInDown');
        } else if ( scrlTop <= 500) {
            if ( header.hasClass('navbar-fixed-top') ) {
                header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
                setTimeout(function(){
                    header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
                }, 100 );
            }
        } 

       $('#fh5co-home .flexslider .fh5co-overlay').css({
            'opacity' : (.5)+(scrlTop/2000)
       });

       if ( $('body').hasClass('offcanvas-visible') ) {
           $('body').removeClass('offcanvas-visible');
           $('.js-fh5co-nav-toggle').removeClass('active');
       }
     
    });

    $(window).resize(function() {
        if ( $('body').hasClass('offcanvas-visible') ) {
           $('body').removeClass('offcanvas-visible');
           $('.js-fh5co-nav-toggle').removeClass('active');
       }
    });
    
};