jQuery(function ($) {

  $('.get-app-btn').fancybox({
    afterShow : function( instance, current ) {
      $('#phoneFormModal').show();
      $('.phone-form__success').hide();
    }
  });
  
});
