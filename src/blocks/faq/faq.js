jQuery(function ($) {
  
  $('.faq__question').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('is-open');
    $(this).next().slideToggle(500);
  });
  
});
