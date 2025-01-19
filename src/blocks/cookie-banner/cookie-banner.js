jQuery(function ($) {

  if (!$.cookie('cookiesAccepted')) {
    $('#cookie-banner').show();
    $('.cookie-banner__overflow').show();
  }
  
  $('.cookie-banner__close').on('click', function (e) {
    e.preventDefault();
    $('#cookie-banner').fadeOut(300);
  });
  
  $('.cookie-banner__overflow').on('click', function (e) {
    e.preventDefault();
    $('#cookie-banner').fadeOut(300);
    $(this).fadeOut(300);
  });

  $('#accept-cookies').on('click', function (e) {
    e.preventDefault();
    $.cookie('cookiesAccepted', 'true', { expires: 365, path: '/' });
    $('#cookie-banner').fadeOut(300);
    $('.cookie-banner__overflow').fadeOut(300);
  });

  $('#reject-cookies').on('click', function (e) {
    e.preventDefault();
    $.cookie('cookiesAccepted', 'false', { expires: 365, path: '/' });
    $('#cookie-banner').fadeOut(300);
    $('.cookie-banner__overflow').fadeOut(300);
  });
  
});
