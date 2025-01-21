var controller = new ScrollMagic.Controller();

// All videos animations logic
function initializeScrollMagic(video, video_section, triggerElement, duration, offset = 0) {
  // var videoDuration = video.duration;

  // Create a ScrollMagic scene
  new ScrollMagic.Scene({
    duration: duration ? duration : video_section.scrollHeight - window.innerHeight,
    triggerElement: triggerElement,
    triggerHook: 0,
    offset: offset,
  })
    .on('progress', (e) => {
      // Map scroll progress to video time
      console.log('Progress:', e.progress, 'Duration:', video.duration);
      if (video.duration > 0) {
        let newTime = e.progress * video.duration;
        if (newTime !== video.currentTime) {
          video.currentTime = newTime;
          console.log('Current time: ', video.currentTime);
        }
      } else {
        console.warn('Video duration is 0, cannot set currentTime');
      }
      video.pause(); // Pause to prevent auto-play behavior
    })
    .addTo(controller);
}

function setupVideos() {
  var videos = document.querySelectorAll('.js-video');
  var mqMob = window.matchMedia("(max-width: 768px)");
  var loadedCount = 0;
  var timeoutFallback = 5000; // 5 seconds fallback timer

  function checkAllVideosLoaded() {
    loadedCount++;
    if (loadedCount === videos.length) {
      showPageAndInitialize();
    }
  }

  function forceVideoLoad(video) {
    video.play()
      .then(() => {
        console.log('video loaded:', video);
        video.pause();
      })
      .catch(error => {
        console.error("Error forcing video to load:", error);
      });
  }

  function showPageAndInitialize() {
    clearTimeout(fallbackTimer);
    document.querySelector('.scrollContainer').style.visibility = 'visible';
    initializeAllScrollMagic();
  }

  var fallbackTimer = setTimeout(() => {
    console.warn("Fallback triggered: Not all videos loaded in time");
    showPageAndInitialize();
  }, timeoutFallback);

  videos.forEach(video => {
    if (video.readyState >= 2) {
      forceVideoLoad(video);
      checkAllVideosLoaded();
    } else {
      forceVideoLoad(video);
      video.addEventListener('loadeddata', checkAllVideosLoaded);
      video.addEventListener('error', checkAllVideosLoaded); // Handle errors
    }
  });

  function initializeAllScrollMagic() {
    videos.forEach((video) => {
      $(video).height(window.outerHeight - 40);
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
          duration = 500;
          offset = -450;
        }
        if (video.id === 'video3') {
          offset = -100;
        }
      }

      initializeScrollMagic(video, video_section, triggerElement, duration, offset);
    });
  }
}

document.addEventListener('DOMContentLoaded', setupVideos);
// End all videos animations logic

// Video 3 and phone section animations logic
jQuery(function ($) {
  var mq = window.matchMedia( "(min-width: 767.98px)" );
  var mqMob = window.matchMedia( "(max-width: 768px)" );
  var video = document.getElementById('scroll-video');

  // Play video on scroll
  if (mq.matches) {
    new ScrollMagic.Scene({
      triggerElement: '.video-section',
      duration: 970,
      triggerHook: 0,
    })
      // .setPin('.video-section', {pushFollowers: false})
      .on('progress', function(event) {
        console.log(video.duration, video.currentTime);
        video.currentTime = video.duration * event.progress;
      })
      // .addIndicators({name: "play"})
      .addTo(controller);
  }

  // Shrink and move video while keeping it centered
  if (mq.matches) {
    var shrinkTween = gsap.to('.video-container video', {
      y: '-71',
      // scale: 0.16,
      width: 237,
      height: 148,
      duration: 1,
      borderRadius: 8,
      ease: 'power1.inOut'
    });
  } else {
    var shrinkTween = gsap.to('.video-container video', {
      y: '2',
      width: 112,
      height: 72,
      duration: 1,
      borderRadius: 4,
      ease: 'power1.inOut'
    });
  }

  if (mq.matches) {
    new ScrollMagic.Scene({
      triggerElement: '.video-section',
      triggerHook: 0,
      offset: 700,
      duration: 1200
    })
      .setTween(shrinkTween)
      // .addIndicators({name: "shrink"})
      .addTo(controller);
  } else {
    new ScrollMagic.Scene({
      triggerElement: '.video-section',
      triggerHook: 0,
      offset: 0,
      duration: 900
    })
      .setTween(shrinkTween)
      // .addIndicators({name: "shrink"})
      .addTo(controller);
  }

  if (mq.matches) {
    new ScrollMagic.Scene({
      triggerElement: '.phone-section',
      duration: 500,
      triggerHook: 0,
      offset: -400,
    })
      .setTween(gsap.to('.phone-section__img-main', {
        bottom: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }))
      // .addIndicators({name: "phone"})
      .addTo(controller);
  } else {
    new ScrollMagic.Scene({
      triggerElement: '.phone-section',
      duration: 500,
      triggerHook: 0,
      offset: -400,
    })
      .setTween(gsap.to('.phone-section__img-main', {
        bottom: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }))
      // .addIndicators({name: "phone"})
      .addTo(controller);
  }

  if (mq.matches) {
    new ScrollMagic.Scene({
      triggerElement: '.phone-section',
      duration: 500,
      triggerHook: 0,
      offset: -200,
    })
      .setTween(gsap.to('.phone-section__top-content', {
        opacity: 1,
        ease: 'power1.inOut'
      }))
      // .addIndicators({name: "phone"})
      .addTo(controller);
  } else {
    new ScrollMagic.Scene({
      triggerElement: '.phone-section',
      duration: 500,
      triggerHook: 0,
      offset: -100,
    })
      .setTween(gsap.to('.phone-section__top-content', {
        opacity: 1,
        ease: 'power1.inOut'
      }))
      // .addIndicators({name: "phone"})
      .addTo(controller);
  }
});
// End Video 3 and phone section animations logic

// Other animations logic
jQuery(function ($) {
  var mq = window.matchMedia( "(min-width: 767.98px)" );
  var mqMob = window.matchMedia( "(max-width: 768px)" );

  if (mq.matches) {
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
    $('.js-animate-card').each(function(index, node) {
      new ScrollMagic.Scene({
        triggerElement: "#trigger_animate_icon_3",
        duration: 400,
        offset: 0
      })
        .setTween(node, { x: card_offset * (index + 1) })
        .addTo(controller);
    }); 
  }
});
