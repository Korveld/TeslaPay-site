jQuery(function ($) {
  $('.menu-burger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.menu').fadeToggle({
      duration: 300,
      start: function () {
        $(this).css('display','flex')
      }
    });
  });
});
