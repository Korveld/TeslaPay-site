jQuery(function ($) {
  
  let iti;

  $('.get-app-btn').fancybox({
    afterShow: function( instance, current ) {
      $('#phoneFormModal').show();
      $('.phone-form__success').hide();

      // intl-tel-input
      const input = $(".phone-form__input input");
      iti = window.intlTelInput(input[0], {
        // allowDropdown: false,
        // autoPlaceholder: "off",
        // containerClass: "test",
        // countryOrder: ["jp", "kr"],
        // countrySearch: false,
        // customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
        //   return "e.g. " + selectedCountryPlaceholder;
        // },
        // dropdownContainer: document.querySelector('#custom-container'),
        // excludeCountries: ["us"],
        // fixDropdownWidth: false,
        // formatAsYouType: false,
        // formatOnDisplay: false,
        // geoIpLookup: function(callback) {
        //   fetch("https://ipapi.co/json")
        //     .then(function(res) { return res.json(); })
        //     .then(function(data) { callback(data.country_code); })
        //     .catch(function() { callback(); });
        // },
        // hiddenInput: () => ({ phone: "phone_full", country: "country_code" }),
        // i18n: { 'de': 'Deutschland' },
        initialCountry: "us",
        loadUtils: () => import("/public/libs/utils.js"), // leading slash (and http-server) required for this to work in chrome
        // nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // showFlags: false,
        separateDialCode: true,
        // strictMode: true,
        // useFullscreenPopup: true,
        // validationNumberTypes: null,
      });

      $('#phoneFormModal').validate({
        errorElement: 'span',
        errorClass: 'not-valid-tip',
        rules: {
          phone_qr: {
            required: true,
            intlTelNumber: true
          },
        },
        messages: {},
        errorPlacement: function (error, element) {
          element.parents('.phone-form__input-wrapper').append(error)
        },
        submitHandler: function(form) {
          // form.submit();
          // var inputData = iti.getSelectedCountryData();
          var formData = {
            phone: iti.getNumber(),
          }
          console.log(formData);
          $(form)[0].reset();
          $(form).hide();
          $(form).siblings('.phone-form__success').show();
        }
      });

      $('#phoneFormModal').submit(function (e) {
        $(this).valid();
      });

      jQuery.validator.addMethod("intlTelNumber", function(value, element) {
        return this.optional(element) || iti.isValidNumber();
      }, "Please enter a valid phone number");
    },
    afterClose: function () {
      iti.destroy();
    }
  });
  
});
