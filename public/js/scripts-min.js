var controller=new ScrollMagic.Controller,mq=window.matchMedia("(min-width: 767.98px)"),mqMob=window.matchMedia("(max-width: 768px)");function shrinkVideoAnimation(){if(mq.matches){var e=gsap.to(".video-section__video",{y:"-86",width:226,height:142,duration:1,borderRadius:8,ease:"power1.inOut"});new ScrollMagic.Scene({triggerElement:".video-section",triggerHook:0,offset:700,duration:1200}).setTween(e).on("end",function(e){}).addTo(controller)}else{e=gsap.to(".video-section__video",{y:"2",width:112,height:72,duration:1,borderRadius:4,ease:"power1.inOut"});new ScrollMagic.Scene({triggerElement:".video-section",triggerHook:0,offset:0,duration:900}).setTween(e).addTo(controller)}mq.matches?new ScrollMagic.Scene({triggerElement:".video-section",triggerHook:0,offset:1900,duration:300}).setTween(gsap.to(".video-section__logo, .video-section__mc-logo",{opacity:1,ease:"power1.inOut"})).addTo(controller):new ScrollMagic.Scene({triggerElement:".video-section",triggerHook:0,offset:900,duration:200}).setTween(gsap.to(".video-section__logo, .video-section__mc-logo",{opacity:1,ease:"power1.inOut"})).addTo(controller),mq.matches?new ScrollMagic.Scene({triggerElement:".phone-section",duration:200,triggerHook:0,offset:650}).setTween(gsap.to(".phone-section__img-main-done",{opacity:1,ease:"power1.inOut"})).addTo(controller):new ScrollMagic.Scene({triggerElement:".phone-section",duration:200,triggerHook:0,offset:300}).setTween(gsap.to(".phone-section__img-main-done",{opacity:1,ease:"power1.inOut"})).addTo(controller),mq.matches,new ScrollMagic.Scene({triggerElement:".phone-section",duration:500,triggerHook:0,offset:-400}).setTween(gsap.to(".phone-section__img-main",{bottom:0,opacity:1,ease:"power1.inOut"})).addTo(controller),mq.matches?new ScrollMagic.Scene({triggerElement:".phone-section",duration:500,triggerHook:0,offset:-200}).setTween(gsap.to(".phone-section__top-content",{opacity:1,ease:"power1.inOut"})).addTo(controller):new ScrollMagic.Scene({triggerElement:".phone-section",duration:500,triggerHook:0,offset:-100}).setTween(gsap.to(".phone-section__top-content",{opacity:1,ease:"power1.inOut"})).addTo(controller)}function videoAnimation1(e){var o=[],t=!1,n=1,i=e-1,r=e=>`./public/videos/video1/video${e.toString().padStart(3,"0")}.jpg`;function a(){if(!t){t=!0,n=1;var e=setInterval(()=>{n>=i?(clearInterval(e),t=!1):(!function(e){$("#videoSequence1 img").attr("src",o[e])}(n),n++)},30)}}if((()=>{for(let e=1;e<=i;e++)o.push(r(e))})(),mq.matches&&$("#videoSequence1 .video-sequence").height(window.outerHeight-40),mqMob.matches&&new ScrollMagic.Scene({triggerElement:"#videoSequence1",duration:0,triggerHook:.5,offset:0}).on("enter",e=>{a()}).addTo(controller),mq.matches){var c={curImg:0},s=TweenMax.to(c,.5,{curImg:o.length-1,roundProps:"curImg",repeat:0,immediateRender:!0,ease:Linear.easeNone,onUpdate:function(){$("#videoSequence1 img").attr("src",o[c.curImg])}});new ScrollMagic.Scene({triggerElement:"#videoSequence1",duration:$("#videoSequence1")[0].scrollHeight,triggerHook:0,offset:0}).setTween(s).addTo(controller)}}function videoAnimation1_mob(){const e=$("#video1")[0];$(e).height(window.outerHeight-40);const o=new ScrollMagic.Scene({duration:window.outerHeight,triggerElement:"#videoSection1",triggerHook:0,offset:-200}).addTo(controller);o.on("enter",function(){e.pause(),e.currentTime=.1,e.play()}),o.on("leave",function(){console.log(e.id,"leave")})}function videoAnimation2(e){var o=[],t=e-1,n=e=>`./public/videos/video2/video${e.toString().padStart(3,"0")}.jpg`;if((()=>{for(let e=1;e<=t;e++)o.push(n(e))})(),mq.matches&&$("#videoSequence2 .video-sequence").height(window.outerHeight-40),mqMob.matches){var i={curImg:0},r=TweenMax.to(i,.5,{curImg:o.length-1,roundProps:"curImg",repeat:0,immediateRender:!0,ease:Linear.easeNone,onUpdate:function(){$("#videoSequence2 img").attr("src",o[i.curImg])}});new ScrollMagic.Scene({triggerElement:"#videoSequence2",duration:1e3,offset:-800,triggerHook:0}).setTween(r).addTo(controller)}if(mq.matches){i={curImg:0},r=TweenMax.to(i,.5,{curImg:o.length-1,roundProps:"curImg",repeat:0,immediateRender:!0,ease:Linear.easeNone,onUpdate:function(){$("#videoSequence2 img").attr("src",o[i.curImg])}});new ScrollMagic.Scene({triggerElement:"#videoSequence2",duration:1e3,offset:-500,triggerHook:0}).setTween(r).addTo(controller)}}function videoAnimation3(e){var o=[],t=e-1,n=e=>`./public/videos/video3/video${e.toString().padStart(3,"0")}.jpg`;if((()=>{for(let e=1;e<=t;e++)o.push(n(e))})(),mq.matches){var i={curImg:0},r=TweenMax.to(i,.5,{curImg:o.length-1,roundProps:"curImg",repeat:0,immediateRender:!0,ease:Linear.easeNone,onUpdate:function(){$("#videoSequence3 .video-section__video-img").attr("src",o[i.curImg])}});new ScrollMagic.Scene({triggerElement:".video-section",duration:970,triggerHook:0}).setTween(r).addTo(controller)}}function videoAnimation4(e){var o=[],t=e-1,n=e=>`./public/videos/video4/video${e.toString().padStart(3,"0")}.jpg`;if((()=>{for(let e=1;e<=t;e++)o.push(n(e))})(),mq.matches){var i={curImg:0},r=TweenMax.to(i,.5,{curImg:o.length-1,roundProps:"curImg",repeat:0,immediateRender:!0,ease:Linear.easeNone,onUpdate:function(){$("#videoSequence4 .video-sequence img").attr("src",o[i.curImg])}});new ScrollMagic.Scene({triggerElement:"#videoSequence4",duration:900,offset:0,triggerHook:0}).setTween(r).addTo(controller)}}function videoAnimation4_mob(e){var o=[],t=e-1,n=e=>`./public/videos/video4_mob/video${e.toString().padStart(3,"0")}.jpg`;if((()=>{for(let e=1;e<=t;e++)o.push(n(e))})(),mqMob.matches){var i={curImg:0},r=TweenMax.to(i,.5,{curImg:o.length-1,roundProps:"curImg",repeat:0,immediateRender:!0,ease:Linear.easeNone,onUpdate:function(){$("#videoSequence4 .video-sequence img").attr("src",o[i.curImg])}});new ScrollMagic.Scene({triggerElement:"#videoSequence4",duration:900,offset:-300,triggerHook:0}).setTween(r).addTo(controller)}}jQuery(function(e){if(e("#animate_icon_1").length&&mq.matches){new ScrollMagic.Scene({triggerElement:"#trigger_animate_icon_1",duration:400}).setTween("#animate_icon_1",{scale:1}).addTo(controller),new ScrollMagic.Scene({triggerElement:"#trigger_animate_icon_2",duration:400,offset:0}).setTween("#animate_icon_2",{rotation:0}).addTo(controller);e(".js-animate-card").each(function(e,o){new ScrollMagic.Scene({triggerElement:"#trigger_animate_icon_3",duration:400,offset:0}).setTween(o,{x:45*(e+1)}).addTo(controller)})}e(".video-section__video").length&&shrinkVideoAnimation()}),jQuery(function(e){let o=0,t=0,n=0,i=0,r=0,a=0,c=0;function s(c){let s=Math.floor(o/n*100);e("#progress-text").text(s+"%"),o===n&&e("#preloader").fadeOut(500,function(){var o;e("#scrollContainer").css("visibility","visible"),videoAnimation1(n),t=(o=c).totalImages-o.imagesPerFolder.folder1-o.imagesPerFolder.folder5,i=o.imagesPerFolder.folder2,r=o.imagesPerFolder.folder3,a=o.imagesPerFolder.folder4,["video2","video3","video4"].forEach((e,t)=>{let n=o.imagesPerFolder[`folder${t+2}`]||0;videoAnimation2(i),videoAnimation3(r),videoAnimation4(a);for(let o=0;o<=n-1;o++){let t=`./public/videos/${e}/video${String(o).padStart(3,"0")}.jpg`;if(l(t))0;else{let e=new Image;e.src=t,e.onload=e.onerror=function(){0}}}})})}function l(e){let o=new Image;return o.src=e,o.complete&&0!==o.naturalHeight}e(".video-sequence").length&&e.getJSON("./public/config.json",function(e){var r;mq.matches?(n=(r=e).imagesPerFolder.folder1,["video1"].forEach((e,t)=>{let n=r.imagesPerFolder[`folder${t+1}`]||0;for(let t=0;t<=n-1;t++){let n=`./public/videos/${e}/video${String(t).padStart(3,"0")}.jpg`;if(l(n))o++,s(r);else{let e=new Image;e.src=n,e.onload=e.onerror=function(){o++,s(r)}}}})):(videoAnimation1_mob(),function(e){t=e.totalImages-e.imagesPerFolder.folder1-e.imagesPerFolder.folder4-e.imagesPerFolder.folder3,i=e.imagesPerFolder.folder2,c=e.imagesPerFolder.folder5,["video2","video4_mob"].forEach((o,t)=>{let n=e.imagesPerFolder.folder2||0;1===t&&(n=e.imagesPerFolder.folder5||0),videoAnimation2(i),videoAnimation4_mob(c);for(let e=0;e<=n-1;e++){let t=`./public/videos/${o}/video${String(e).padStart(3,"0")}.jpg`;if(l(t))0;else{let e=new Image;e.src=t,e.onload=e.onerror=function(){0}}}})}(e))}).fail(function(){console.error("Failed to load config.json")})}),jQuery(function(e){e.cookie("cookiesAccepted")||(e("#cookie-banner").show(),e(".cookie-banner__overflow").show()),e(".cookie-banner__close").on("click",function(o){o.preventDefault(),e("#cookie-banner").fadeOut(300)}),e(".cookie-banner__overflow").on("click",function(o){o.preventDefault(),e("#cookie-banner").fadeOut(300),e(this).fadeOut(300)}),e("#accept-cookies").on("click",function(o){o.preventDefault(),e.cookie("cookiesAccepted","true",{expires:365,path:"/"}),e("#cookie-banner").fadeOut(300),e(".cookie-banner__overflow").fadeOut(300)}),e("#reject-cookies").on("click",function(o){o.preventDefault(),e.cookie("cookiesAccepted","false",{expires:365,path:"/"}),e("#cookie-banner").fadeOut(300),e(".cookie-banner__overflow").fadeOut(300)})}),jQuery(function(e){e(".faq__question").on("click",function(o){o.preventDefault(),e(this).parent().hasClass("is-open")?(e(this).parent().removeClass("is-open"),e(this).next().slideUp({duration:500,start:function(){e(this).find(".faq__answer-wrapper").css("opacity","0")}})):(e(this).parent().addClass("is-open"),e(this).next().slideDown({duration:500,progress:function(o,t,n){n<100&&e(this).find(".faq__answer-wrapper").css("opacity","1")}}))})}),jQuery(function(e){let o;e(".get-app-btn").fancybox({afterShow:function(t,n){e("#phoneFormModal").show(),e(".phone-form__success").hide();const i=e(".phone-form__input input");o=window.intlTelInput(i[0],{initialCountry:"us",loadUtils:()=>import("/public/libs/utils.js"),separateDialCode:!0}),e("#phoneFormModal").validate({errorElement:"span",errorClass:"not-valid-tip",rules:{phone_qr:{required:!0,intlTelNumber:!0}},messages:{},errorPlacement:function(e,o){o.parents(".phone-form__input-wrapper").append(e)},submitHandler:function(t){var n={phone:o.getNumber()};console.log(n),e(t)[0].reset(),e(t).hide(),e(t).siblings(".phone-form__success").show()}}),e("#phoneFormModal").submit(function(o){e(this).valid()}),jQuery.validator.addMethod("intlTelNumber",function(e,t){return this.optional(t)||o.isValidNumber()},"Please enter a valid phone number")},afterClose:function(){o.destroy()}})}),$(".scrollContainer").on("scroll load",function(){$(this).scrollTop()>0?$(".header").addClass("is-sticky"):$(".header").removeClass("is-sticky")}),jQuery(function(e){window.matchMedia("(min-width: 767.98px)");var o=window.matchMedia("(max-width: 768px)");e(".lang-switcher__current").on("click",function(t){t.preventDefault(),e(this).parent().find(".lang-switcher__dropdown").fadeToggle(300),e(this).toggleClass("is-active"),o.matches&&e(".lang-switcher__overflow").fadeIn(300)}),e(".lang-switcher__overflow").on("click",function(o){e(".lang-switcher .lang-switcher__current").removeClass("is-active"),e(".lang-switcher .lang-switcher__dropdown").fadeOut(300),e(this).fadeOut(300)}),e(document).on("click",function(o){e(o.target).hasClass("lang-switcher")||0!==e(o.target).parents(".lang-switcher").length||(e(".lang-switcher .lang-switcher__current").removeClass("is-active"),e(".lang-switcher .lang-switcher__dropdown").fadeOut(300),e(".lang-switcher__overflow").fadeOut(300))}),e(".lang-switcher__dropdown-item").on("mouseenter",function(o){e(this).siblings(".lang-switcher__dropdown-item").addClass("is-disabled")}),e(".lang-switcher__dropdown-item").on("mouseleave",function(o){e(this).siblings(".lang-switcher__dropdown-item").removeClass("is-disabled")})}),jQuery(function(e){}),jQuery(function(e){}),jQuery(function(e){function o(){e(".menu-burger").toggleClass("is-active"),e(".menu").fadeToggle({duration:300,start:function(){e(this).css("display","flex")}})}window.matchMedia("(max-width: 768px)").matches&&e(".menu a").on("click",function(e){o()}),e(".menu-burger").on("click",function(e){e.preventDefault(),o()})}),jQuery(function(e){window.matchMedia("(min-width: 767.98px)").matches&&e(".js-plan-text").length&&e(".js-plan-text").equalHeights()}),jQuery(function(e){e(".js-scroll-to").on("click",function(o){o.preventDefault();var t=e("#scrollContainer"),n=e(e(e(this).attr("href")));t.animate({scrollTop:n.offset().top-t.offset().top+t.scrollTop()},500)})});var scrollContainer=document.getElementById("scrollContainer");document.addEventListener("DOMContentLoaded",function(e){var o=sessionStorage.getItem("scrollpos");o&&(scrollContainer.scrollTo(0,o),sessionStorage.removeItem("scrollpos"))}),window.addEventListener("beforeunload",function(e){sessionStorage.setItem("scrollpos",scrollContainer.scrollTop)});