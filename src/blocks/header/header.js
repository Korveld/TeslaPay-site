$('.scrollContainer').on('scroll load', function () {
  if ($(this).scrollTop() > 0) {
    $('.header').addClass('is-sticky');
  } else {
    $('.header').removeClass('is-sticky');
  }
});
