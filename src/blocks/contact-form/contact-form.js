jQuery(function ($) {
  $('#contactForm').validate({
    errorElement: 'span',
    // errorClass: 'not-valid-tip',
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      term1: {
        required: true,
      },
    },
    messages: {
    },
    errorPlacement: function(error, element) {
      element.parents('.js-field-wrapper').append(error)
    },
    submitHandler: function(form) {
      $(form)[0].submit();
    }
  });
});
