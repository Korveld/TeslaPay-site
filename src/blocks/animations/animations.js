var controller = new ScrollMagic.Controller();

// All videos animations logic
function initializeScrollMagic(video, video_section, triggerElement, duration, offset = 0, videoHeight) {
  var mqMob = window.matchMedia("(max-width: 768px)");
  var mq = window.matchMedia("(min-width: 767.98px)");
  // var videoDuration = video.duration;
  var lastProgress = 0;
  var isAnimating = false;
  var progressvalue;
  
  // duration = duration ? duration : video_section.scrollHeight - window.innerHeight;
  duration = duration ? duration : video_section.scrollHeight;
  if (mqMob.matches) {
    duration = duration ? duration : window.outerHeight;
  }

  $(video).height(videoHeight ? videoHeight : window.outerHeight - 40);
  video.controls = false;

  video.addEventListener('play', function () {
    this.controls = false;
  });
  video.addEventListener('pause', function () {
    this.controls = false;
  });

  // Create a ScrollMagic scene
  const scene = new ScrollMagic.Scene({
    duration: duration,
    triggerElement: triggerElement,
    triggerHook: 0,
    offset: offset,
  })
    .on('progress', (e) => {
      if (video.id === 'video1' && mq.matches) {
        // Map scroll progress to video time
        console.log('Progress:', e.progress, 'Current time: ', video.currentTime, 'Duration:', video.duration);
        if (video.duration > 0) {
          // let newTime = e.progress * video.duration;
          // if (newTime !== video.currentTime) {
          //   video.currentTime = newTime;
          //   console.log('Current time: ', video.currentTime);
          // }
          /*if (mq.matches) {
            lastProgress = e.progress;
            if (!isAnimating) {
              isAnimating = true;
              requestAnimationFrame(updateVideoTime);
            }
          } else {
            let newTime = e.progress * video.duration;
            if (newTime !== video.currentTime) {
              video.currentTime = newTime;
            }
          }*/
          progressvalue = Math.floor(100 * e.progress);
          video.currentTime = video.duration * progressvalue / 100;
        } else {
          console.warn('Video duration is 0, cannot set currentTime');
        }
        video.pause(); // Pause to prevent auto-play behavior
      } else if (video.id !== 'video1') {
        console.log('Progress:', e.progress, 'Current time: ', video.currentTime, 'Duration:', video.duration);
        if (video.duration > 0) {
          progressvalue = Math.floor(100 * e.progress);
          video.currentTime = video.duration * progressvalue / 100;
        } else {
          console.warn('Video duration is 0, cannot set currentTime');
        }
        video.pause();
      }
    })
    // .addIndicators({name: video.id})
    .addTo(controller);
  // scene.on("change update progress start end enter leave", callback);

  if (mqMob.matches && video.id === 'video1') {
    scene.on("enter", function () {
      console.log(video.id, ' enter');
      video.pause();
      video.currentTime = 0.1;
      video.play();
    });
    scene.on("leave", function () {
      console.log(video.id, ' leave');
      // video.pause();
      // video.currentTime = 0.1;
    });
  }

  function updateVideoTime() {
    video.currentTime = video.duration * lastProgress;
    console.log('Current time: ', video.currentTime);
    isAnimating = false;
  }
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
      checkAllVideosLoaded();
    } else {
      forceVideoLoad(video);
      video.addEventListener('loadeddata', checkAllVideosLoaded);
      video.addEventListener('error', checkAllVideosLoaded); // Handle errors
    }
  });

  function initializeAllScrollMagic() {
    videos.forEach((video) => {
      var video_section = video.closest('section');
      var triggerElement = `#${video_section.id}`;
      var duration;
      var offset;
      var videoHeight;

      if (video.id === 'video2') {
        duration = 500;
        offset = -300;
      }

      if (video.id === 'video4') {
        duration = 900;
        offset = 0;
      }
      
      if (video.id === 'video4_mobile') {
        duration = 400;
        offset = 0;
      }

      if (mqMob.matches) {
        if (video.id === 'video1') {
          offset = -200;
        }
        if (video.id === 'video2') {
          duration = 500;
          offset = -450;
        }
        if (video.id === 'video3') {
        }
      }

      initializeScrollMagic(video, video_section, triggerElement, duration, offset, videoHeight);
    });
  }
}

// document.addEventListener('DOMContentLoaded', setupVideos);
jQuery(function ($) {
  setupVideos();
});
// End all videos animations logic

jQuery(function ($) {
  // responsive breakpoints
  var mqMob = window.matchMedia("(max-width: 768px)");
  var mq = window.matchMedia("(min-width: 767.98px)");
  
  // define images
  var images = [];
  var animationPlaying = false;
  var frameIndex = 1;
  var frameCount = 420;
  var currentFrame = (index) => `./public/videos/video1/video${index.toString().padStart(3, '0')}.jpg`;

  // Preload images
  var preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      $("<img>").attr("src", currentFrame(i));
      images.push(currentFrame(i));
    }
  };
  preloadImages();

  if (mq.matches) {
    $('.video-sequence-canvas').height(window.outerHeight - 40);
  }

  // Update Image Frame
  function updateImage(index) {
    $("#videoSequence1 img").attr("src", images[index])
  }

  // Play Animation Function
  function playAnimation() {
    if (animationPlaying) return;

    animationPlaying = true;
    frameIndex = 1;

    var animationInterval = setInterval(() => {
      if (frameIndex >= frameCount) {
        clearInterval(animationInterval);
        animationPlaying = false;
      } else {
        updateImage(frameIndex);
        frameIndex++;
      }
    }, 30); // Adjust speed here (30ms per frame)
  }

  // build scene
  if (mqMob.matches) {
    new ScrollMagic.Scene({
      triggerElement: "#videoSequence1",
      duration: 0,
      triggerHook: 0.5,
      offset: 0,
    })
      .on('enter', (e) => {
        playAnimation();
      })
      // .addIndicators({name: 'image sequence'})
      .addTo(controller);
  }
  
  if (mq.matches) {
    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {curImg: 0};
    
    // create tween
    var tween = TweenMax.to(obj, 0.5,
      {
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,									// repeat 0 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          $("#videoSequence1 img").attr("src", images[obj.curImg]); // set the image source
        },
      }
    );
    
    new ScrollMagic.Scene({
      triggerElement: "#videoSequence1",
      duration: $('#videoSequence1')[0].scrollHeight,
      triggerHook: 0,
      offset: 0,
    })
      .setTween(tween)
      //.addIndicators({name: 'image sequence'})
      .addTo(controller);
  }
});

/*jQuery(function ($) {
  const $canvas = $("#videoSequenceCanvas");
  const context = $canvas[0].getContext("2d");

  const frameCount = 420;
  const currentFrame = index =>
    `./public/videos/video1/video${index.toString().padStart(3, '0')}.jpg`;

  // Preload images
  const preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      $("<img>").attr("src", currentFrame(i));
    }
  };

  // Initialize canvas with first frame
  const img = new Image();
  img.src = currentFrame(1);

  $(img).on("load", function () {
    context.drawImage(img, 0, 0);
  });

  // Function to update image
  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  };

  // Initialize ScrollMagic
  const $trigger = $("#videoSequence1"); // The element that triggers animation

  const scene = new ScrollMagic.Scene({
    triggerElement: $trigger[0], // Convert jQuery object to DOM element
    duration: 10000,
    triggerHook: 0,
    offset: 0,
  })
    //.setPin($canvas[0]) // Keep canvas fixed during animation
    .on("progress", function (event) {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(event.progress * frameCount)
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    })
    .addTo(controller);

  preloadImages();
});*/

// Video 3 and phone section animations logic
jQuery(function ($) {
  var mq = window.matchMedia( "(min-width: 767.98px)" );
  var mqMob = window.matchMedia( "(max-width: 768px)" );
  var video = document.getElementById('scroll-video');
  var lastProgress = 0;
  var isAnimating = false;
  var progressvalue;

  // Play video on scroll
  if (mq.matches) {
    new ScrollMagic.Scene({
      triggerElement: '.video-section',
      duration: 970,
      triggerHook: 0,
    })
      .on('progress', function(event) {
        // console.log(video.duration, video.currentTime);
        // video.currentTime = video.duration * event.progress;
        
        /*lastProgress = event.progress;
        if (!isAnimating) {
          isAnimating = true;
          requestAnimationFrame(updateVideoTime);
        }*/
        progressvalue = Math.floor(100 * event.progress);
        video.currentTime = video.duration * progressvalue / 100;
      })
      // .addIndicators({name: "play"})
      .addTo(controller);
  }

  function updateVideoTime() {
    video.currentTime = video.duration * lastProgress;
    isAnimating = false;
  }

  // Shrink and move video
  if (mq.matches) {
    var shrinkTween = gsap.to('.video-section__video', {
      y: '-86',
      // scale: 0.16,
      width: 226,
      height: 142,
      duration: 1,
      borderRadius: 8,
      ease: 'power1.inOut'
    });
    
    new ScrollMagic.Scene({
      triggerElement: '.video-section',
      triggerHook: 0,
      offset: 700,
      duration: 1200
    })
      .setTween(shrinkTween)
      .on('end', function(event) {
      })
      // .addIndicators({name: "shrink"})
      .addTo(controller);
  } else {
    var shrinkTween = gsap.to('.video-section__video', {
      y: '2',
      width: 112,
      height: 72,
      duration: 1,
      borderRadius: 4,
      ease: 'power1.inOut'
    });
    
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
      triggerElement: '.video-section',
      triggerHook: 0,
      offset: 1900,
      duration: 300
    })
      .setTween(gsap.to('.video-section__logo, .video-section__mc-logo', {
        opacity: 1,
        ease: 'power1.inOut'
      }))
      .addTo(controller);
  } else {
    new ScrollMagic.Scene({
      triggerElement: '.video-section',
      triggerHook: 0,
      offset: 900,
      duration: 200
    })
      .setTween(gsap.to('.video-section__logo, .video-section__mc-logo', {
        opacity: 1,
        ease: 'power1.inOut'
      }))
      .addTo(controller);
  }

  if (mq.matches) {
    new ScrollMagic.Scene({
      triggerElement: '.phone-section',
      duration: 200,
      triggerHook: 0,
      offset: 650,
    })
      .setTween(gsap.to('.phone-section__img-main-done', {
        opacity: 1,
        ease: 'power1.inOut'
      }))
      .addTo(controller);
  } else {
    new ScrollMagic.Scene({
      triggerElement: '.phone-section',
      duration: 200,
      triggerHook: 0,
      offset: 300,
    })
      .setTween(gsap.to('.phone-section__img-main-done', {
        opacity: 1,
        ease: 'power1.inOut'
      }))
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
