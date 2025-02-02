jQuery(function ($) {
  var mq = window.matchMedia("(min-width: 767.98px)");
  if (mq.matches) {
    if ($('.js-plan-text').length) {
      $('.js-plan-text').equalHeights()
    }
  }
});
