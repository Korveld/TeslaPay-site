var controller = new ScrollMagic.Controller();

// All videos animations logic
function initializeScrollMagic(video, video_section, triggerElement, duration, offset = 0) {
  var videoDuration = video.duration; // Get video duration

  // Create a ScrollMagic scene
  new ScrollMagic.Scene({
    duration: duration ? duration : video_section.scrollHeight - window.innerHeight,
    triggerElement: triggerElement,
    triggerHook: 0,
    offset: offset,
  })
    .on('progress', (e) => {
      // Map scroll progress to video time
      video.currentTime = e.progress * videoDuration;

      // Pause the video to prevent auto-play behavior
      video.pause();
    })
    .addTo(controller); // Add the scene to the controller
}

function setupVideos() {
  var videos = document.querySelectorAll('.js-video');
  var mqMob = window.matchMedia( "(max-width: 768px)" );
  videos.forEach((video) => {
    $(video).height($(window).height() - 40);
    var video_section = video.closest('section');
    var triggerElement = `#${video_section.id}`;
    var duration;
    var offset;
    
    if (video.id === 'video2') {
      duration = 500;
      offset = -300;
    }

    if (video.id === 'video3') {
      offset = -300;
    }

    if (mqMob.matches) {
      if (video.id === 'video2') {
        duration = 400;
        offset = -250;
      }
      if (video.id === 'video3') {
        offset = -100;
      }
    }

    if (video.readyState >= 1) {
      initializeScrollMagic(video, video_section, triggerElement, duration, offset);
    } else {
      video.addEventListener('loadedmetadata', () => {
        initializeScrollMagic(video, video_section, triggerElement, duration, offset);
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', setupVideos);
// End all videos animations logic

// Other animations logic
jQuery(function ($) {
  var mq = window.matchMedia( "(min-width: 767.98px)" );
  var mqMob = window.matchMedia( "(max-width: 768px)" );
  
  var animate_icon_1 = new ScrollMagic.Scene({
    triggerElement: "#trigger_animate_icon_1", 
    duration: 400
  })
    .setTween("#animate_icon_1", { scale: 1 })
    .addTo(controller);
  var animate_icon_2 = new ScrollMagic.Scene({
    triggerElement: "#trigger_animate_icon_2", 
    duration: 400,
    offset: 0
  })
    .setTween("#animate_icon_2", { rotation: 0 })
    .addTo(controller);
  
  var card_offset = 45;
  if (mqMob.matches) {
    card_offset = 25;
  }
  $('.js-animate-card').each(function(index, node) {
    new ScrollMagic.Scene({
      triggerElement: "#trigger_animate_icon_3",
      duration: 400,
      offset: 0
    })
      .setTween(node, { x: card_offset * (index + 1) })
      .addTo(controller);
  });
});

jQuery(function ($) {
  
  $('.faq__question').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('is-open');
    $(this).next().slideToggle(500);
  });
  
});

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

jQuery(function ($) {

  $('.get-app-btn').fancybox({
    afterShow : function( instance, current ) {
      $('#phoneFormModal').show();
      $('.phone-form__success').hide();
    }
  });
  
});

$('.scrollContainer').on('scroll load', function () {
  if ($(this).scrollTop() > 0) {
    $('.header').addClass('is-sticky');
  } else {
    $('.header').removeClass('is-sticky');
  }
});

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

jQuery(function ($) {
});

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

var scrollContainer = document.getElementById('scrollContainer');

document.addEventListener("DOMContentLoaded", function(event) {
  var scrollpos = sessionStorage.getItem('scrollpos');
  if (scrollpos) {
    scrollContainer.scrollTo(0, scrollpos);
    sessionStorage.removeItem('scrollpos');
  }
});

window.addEventListener("beforeunload", function (e) {
  sessionStorage.setItem('scrollpos', scrollContainer.scrollTop);
});

