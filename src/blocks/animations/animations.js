var controller = new ScrollMagic.Controller();

// All videos animations logic
function initializeScrollMagic(video, video_section, triggerElement, duration, offset = 0) {
  var videoDuration = video.duration;
  console.log('initializeScrollMagic');

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
          offset = -250;
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
