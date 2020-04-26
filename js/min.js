
$('document').ready(function () {


    //stiky nav
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.navbar').addClass('sticky-nav');
        } else {

            $('.navbar').removeClass('sticky-nav');
        }
    });





      // scroll smoth 

    $('.navbar .navbar-nav .nav-item .nav-link ').click(function () {
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });


 
  
    
   


});