jQuery(function ($) {
  $('.js-scroll-to').on('click', function(e) {
    e.preventDefault();

    // var $container = $('#scrollContainer'),
    var $container = $('html, body'),
      $scrollTo = $($($(this).attr('href')));
    
    /*$container.scrollTop(
      $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
    );*/
    /*$container.animate({
      scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
    }, 500);*/
    $container.animate({
      scrollTop: $scrollTo.offset().top
    }, 500);
  });
});
