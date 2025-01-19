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
  var mqMob = window.matchMedia("(max-width: 768px)");
  var loadedCount = 0;

  // Function to check if all videos are loaded
  function checkAllVideosLoaded() {
    loadedCount++;
    if (loadedCount === videos.length) {
      // All videos are loaded, show the page content
      document.querySelector('.scrollContainer').style.visibility = 'visible';
      initializeAllScrollMagic(); // Initialize ScrollMagic after all videos are loaded
    }
  }

  // Attach 'loadeddata' event to each video
  videos.forEach(video => {
    video.addEventListener('loadeddata', checkAllVideosLoaded);
  });

  function initializeAllScrollMagic() {
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
