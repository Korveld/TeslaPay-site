var controller = new ScrollMagic.Controller();

function videoAnimation1(imagesCount) {
  // responsive breakpoints
  var mqMob = window.matchMedia("(max-width: 768px)");
  var mq = window.matchMedia("(min-width: 767.98px)");

  // define images
  var images = [];
  var animationPlaying = false;
  var frameIndex = 1;
  var frameCount = imagesCount - 1;
  var currentFrame = (index) => `./public/videos/video1/video${index.toString().padStart(3, '0')}.jpg`;

  // Preload images
  var preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      images.push(currentFrame(i));
    }
  };
  preloadImages();

  if (mq.matches) {
    $('#videoSequence1 .video-sequence').height(window.outerHeight - 40);
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
}

function videoAnimation2(imagesCount) {
  // responsive breakpoints
  var mqMob = window.matchMedia("(max-width: 768px)");
  var mq = window.matchMedia("(min-width: 767.98px)");

  // define images
  var images = [];
  var frameCount = imagesCount - 1;
  var currentFrame = (index) => `./public/videos/video2/video${index.toString().padStart(3, '0')}.jpg`;

  // Preload images
  var preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      images.push(currentFrame(i));
    }
  };
  preloadImages();

  if (mq.matches) {
    $('#videoSequence2 .video-sequence').height(window.outerHeight - 40);
  }

  // build scene
  if (mqMob.matches) {
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
          $("#videoSequence2 img").attr("src", images[obj.curImg]); // set the image source
        },
      }
    );

    new ScrollMagic.Scene({
      triggerElement: "#videoSequence2",
      duration: 1000,
      offset: -800,
      triggerHook: 0,
    })
      .setTween(tween)
      //.addIndicators({name: 'image sequence'})
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
          $("#videoSequence2 img").attr("src", images[obj.curImg]); // set the image source
        },
      }
    );

    new ScrollMagic.Scene({
      triggerElement: "#videoSequence2",
      duration: 1000,
      offset: -500,
      triggerHook: 0,
    })
      .setTween(tween)
      //.addIndicators({name: 'image sequence'})
      .addTo(controller);
  }
}

function videoAnimation3(imagesCount) {
  // responsive breakpoints
  var mqMob = window.matchMedia("(max-width: 768px)");
  var mq = window.matchMedia("(min-width: 767.98px)");

  // define images
  var images = [];
  var frameCount = imagesCount - 1;
  var currentFrame = (index) => `./public/videos/video3/video${index.toString().padStart(3, '0')}.jpg`;

  // Preload images
  var preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      images.push(currentFrame(i));
    }
  };
  preloadImages();

  // build scene
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
          $("#videoSequence3 .video-section__video-img").attr("src", images[obj.curImg]); // set the image source
        },
      }
    );

    new ScrollMagic.Scene({
      triggerElement: '.video-section',
      duration: 970,
      triggerHook: 0,
    })
      .setTween(tween)
      //.addIndicators({name: 'image sequence'})
      .addTo(controller);
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
}

function videoAnimation4(imagesCount, imagesCountMob) {
  // responsive breakpoints
  var mqMob = window.matchMedia("(max-width: 768px)");
  var mq = window.matchMedia("(min-width: 767.98px)");

  // define images
  var images = [];
  var frameCount = mq.matches ? imagesCount - 1 : imagesCountMob - 1;
  var currentFrame = (index) => `./public/videos/video4/video${index.toString().padStart(3, '0')}.jpg`;
  if (mqMob.matches) {
    currentFrame = (index) => `./public/videos/video4_mob/video${index.toString().padStart(3, '0')}.jpg`;
  }

  // Preload images
  var preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      images.push(currentFrame(i));
    }
  };
  preloadImages();

  // build scene
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
          $("#videoSequence4 .video-sequence img").attr("src", images[obj.curImg]); // set the image source
        },
      }
    );

    new ScrollMagic.Scene({
      triggerElement: "#videoSequence4",
      duration: 900,
      offset: 0,
      triggerHook: 0,
    })
      .setTween(tween)
      //.addIndicators({name: 'image sequence'})
      .addTo(controller);
  }

  if (mqMob.matches) {
    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {curImg: 0};

    // create tween
    var tween = TweenMax.to(obj, 0.5,
      {
        curImg: images.length - 1,  // animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,									// repeat 0 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          $("#videoSequence4 .video-sequence img").attr("src", images[obj.curImg]); // set the image source
        },
      }
    );

    new ScrollMagic.Scene({
      triggerElement: "#videoSequence4",
      duration: 900,
      offset: -300,
      triggerHook: 0,
    })
      .setTween(tween)
      //.addIndicators({name: 'image sequence'})
      .addTo(controller);
  }
}

jQuery(function ($) {
  let loadedImages = 0;
  let totalImages = 0;
  let videoImages1 = 0;
  let videoImages2 = 0;
  let videoImages3 = 0;
  let videoImages4 = 0;
  let videoImages4_mob = 0;

  function updateProgress() {
    let percent = Math.floor((loadedImages / totalImages) * 100);
    $(".progress-bar").css("width", percent + "%");
    $("#progress-text").text(percent + "%");

    if (loadedImages === totalImages) {
      $("#preloader").fadeOut(500, function () {
        $("#scrollContainer").css("visibility", "visible");
        videoAnimation1(videoImages1);
        videoAnimation2(videoImages2);
        videoAnimation3(videoImages3);
        videoAnimation4(videoImages4, videoImages4_mob);
      });
    }
  }

  function isImageCached(src) {
    let img = new Image();
    img.src = src;
    
    return img.complete && img.naturalHeight !== 0; // Cached if true
  }

  function preloadImages(folders) {
    totalImages = folders.totalImages;
    videoImages1 = folders.imagesPerFolder.folder1;
    videoImages2 = folders.imagesPerFolder.folder2;
    videoImages3 = folders.imagesPerFolder.folder3;
    videoImages4 = folders.imagesPerFolder.folder4;
    videoImages4_mob = folders.imagesPerFolder.folder5;
    let folderPaths = ["video1", "video2", "video3", "video4", "video4_mob"];

    folderPaths.forEach((folder, index) => {
      let count = folders.imagesPerFolder[`folder${index + 1}`] || 0;

      for (let i = 0; i <= count - 1; i++) {
        let imgPath = `./public/videos/${folder}/video${String(i).padStart(3, '0')}.jpg`;

        if (isImageCached(imgPath)) {
          loadedImages++;
          updateProgress();
        } else {
          let img = new Image();
          img.src = imgPath;

          img.onload = img.onerror = function () {
            loadedImages++;
            updateProgress();
          };
        }
      }
    });
  }

  // Fetch totalImages from config.json
  $.getJSON('./public/config.json', function (data) {
    preloadImages(data);
  }).fail(function () {
    console.error("Failed to load config.json");
  });
});

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
