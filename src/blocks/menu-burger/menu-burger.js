jQuery(function ($) {
  var mqMob = window.matchMedia("(max-width: 768px)");
  
  function toggleMenu() {
    $('.menu-burger').toggleClass('is-active');
    $('.menu').fadeToggle({
      duration: 300,
      start: function () {
        $(this).css('display','flex')
      }
    });
  }
  
  if (mqMob.matches) {
    $('.menu a').on('click', function (e) {
      toggleMenu();
    });
  }
  
  $('.menu-burger').on('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
});
