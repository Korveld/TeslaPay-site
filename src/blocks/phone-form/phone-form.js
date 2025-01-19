jQuery(function ($) {

  $('#phoneFormModal').validate({
    errorElement: 'span',
    errorClass: 'not-valid-tip',
    rules: {
      phone_qr: {
        required: true,
      },
    },
    messages: {},
    errorPlacement: function (error, element) {
      element.parents('.phone-form__input-wrapper').append(error)
    },
    submitHandler: function(form) {
      // form.submit();
      $(form)[0].reset();
      $(form).hide();
      $(form).siblings('.phone-form__success').show();
    }
  });

  $('#phoneFormModal').submit(function (e) {
    $(this).valid();
  });
  
});
