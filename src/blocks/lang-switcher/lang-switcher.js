jQuery(function ($) {

  var mq = window.matchMedia( "(min-width: 767.98px)" );
  var mqMob = window.matchMedia( "(max-width: 768px)" );
  
  $('.lang-switcher__current').on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('.lang-switcher__dropdown').fadeToggle(300);
    $(this).toggleClass('is-active');

    if (mqMob.matches) {
      $('.lang-switcher__overflow').fadeIn(300);
    }
  });

  $('.lang-switcher__overflow').on('click', function (e) {
    $('.lang-switcher .lang-switcher__current').removeClass('is-active');
    $('.lang-switcher .lang-switcher__dropdown').fadeOut(300);
    $(this).fadeOut(300);
  });

  $(document).on('click', function (e) {
    if (!$(e.target).hasClass('lang-switcher') && $(e.target).parents('.lang-switcher').length === 0) {
      $('.lang-switcher .lang-switcher__current').removeClass('is-active');
      $('.lang-switcher .lang-switcher__dropdown').fadeOut(300);
      $('.lang-switcher__overflow').fadeOut(300);
    }
  });
  
});
