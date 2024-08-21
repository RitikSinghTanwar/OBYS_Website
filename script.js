var locomotiveFunction = function(){
    // Locomotive scroll Trigger Linking code :

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveFunction();

// Cursor animation :

var cursorAnimation = function(){
    // Mouse Cursor :

document.addEventListener("mousemove",function(dets){
    gsap.to("#mouse_cursor",{
        x:dets.x,
        y:dets.y
    })
})

// Magnet Effect on nav Bar using shery js :

Shery.makeMagnet("#nav #nav_part2 h4" /* Element to target.*/, {});

// Mouser follower show on website in white color:
Shery.mouseFollower({});

}

cursorAnimation();

// Loader Animation :

var loadingAniamtion = function(){
    // Js code :
var count = 1;
var timer = setInterval(function(){
    document.querySelector("#line1_part1 h5").textContent = count;
    count++;
    if(count === 101){
        clearInterval(timer);
        gsap.to("#loader",{
            opacity:0,
            display:"none",
            duration:.8,
            scale:5
        })
    }
},35)


// hero3 cursor animation :

document.addEventListener("mousemove",function(dets){
    gsap.to("#page1 img",{
        x:dets.x,
        y:dets.y-300
    })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#page1 img",{
        opacity:1
    })
})

document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#page1 img",{
        opacity:0
    })
})

// GSAP Code :

var tl = gsap.timeline()

tl.from(".line h1,#line1_part1,.line h2",{
    y:150,
    duration:0.6,
    delay:.5,
    opacity:0,
    stagger:.2
})

tl.from("#page1",{
    y:1600,
    delay:2,
    opacity:0,
})

// Nav_bar :
var tl = gsap.timeline()

tl.from("#nav #nav_part2 h4",{
    y:-100,
    opacity:0,
    duration:.5,
    delay:4.6,
    stagger:.2
})

// Hero section main text :

tl.from("#hero1,#hero2,#hero3,#hero4,.hero h2",{
    y:200,
    duration:0.6,
    opacity:0,
    stagger:.2
})

};

loadingAniamtion();

// #page2 video cursor :

var video_cursor = document.querySelector("#video_container video");
var video_container = document.querySelector("#video_container");

video_container.addEventListener("mouseenter",function(dets){
    document.querySelector("#mouse_cursor").style.display = "none";
    video_container.addEventListener("mousemove",function(dets){
        gsap.to("#video_cursor",{
            x:dets.x-500,
            y:dets.y-150
        })
    })
})

video_container.addEventListener("mouseleave",function(dets){
    document.querySelector("#mouse_cursor").style.display = "initial";
})

// video play-pause js code :
var num = 0;
video_container.addEventListener("click",function(){
   if(num%2==0){
        video_cursor.play();
        document.querySelector("#video_cursor").innerHTML = `<i class="ri-pause-line"></i>`
        document.querySelector("#video_cursor").style.scale = ".5"
   }
   else{
        video_cursor.pause();
        document.querySelector("#video_cursor").innerHTML = `<i class="ri-play-line"></i>`
        document.querySelector("#video_cursor").style.scale = "1"
   }
   num++;
})

function sheryAnimation(){
    Shery.imageEffect(".image_div", {
        style: 6,
        // debug:true,
        config:{"noiseDetail":{"value":4.58,"range":[0,100]},"distortionAmount":{"value":7.94,"range":[0,10]},"scale":{"value":29.01,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.766652243523436},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.6,"range":[0,1]},"antialias_threshold":{"value":0.04,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}},
        gooey: true,
      });
}

sheryAnimation();


// GSAP animation : Like scrollTrigger :

// Page3 h1 heading :

gsap.from("#page3_content h1,#page3_content_underline",{
    y:100,
    opacity:0,
    duration:.3,
    stagger:.2,
    scrollTrigger:{
        trigger:"#page3_content",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 60%",
        end:"top 10%"
    }
})

// Page3 images

gsap.from("#page3_image_container .image_div",{
    y:500,
    x:200,
    opacity:0,
    duration:.3,
    stagger:.1,
    scrollTrigger:{
        trigger:"#page3_image_container .image_div",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 250%",
        end:"top 20%"
    }
})


// Page3 circle :

gsap.from("#page3_circle1",{
    x:500,
    opacity:0,
    duration:.3,
    scrollTrigger:{
        trigger:"#page3_circle1",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 150%",
        end:"top 20%"
    }
})

gsap.from("#page3_circle2",{
    x:-500,
    opacity:0,
    duration:.3,
    scrollTrigger:{
        trigger:"#page3_circle2",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 150%",
        end:"top 20%"
    }
})

gsap.from("#page3_circle3",{
    y:200,
    opacity:0,
    duration:.3,
    scrollTrigger:{
        trigger:"#page3_circle3",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 150%",
        end:"top 20%"
    }
})

// Page4 : heading :

gsap.from("#page4_content h1,#page4_content_underline",{
    y:100,
    opacity:0,
    duration:.3,
    stagger:.1,
    scrollTrigger:{
        trigger:"#page4_content h1,#page4_content_underline",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 60%",
        end:"top 10%"
    }
})

// Page4 : paragraph :

gsap.from("#page4_content p",{
    y:100,
    opacity:0,
    duration:.3,
    stagger:.1,
    scrollTrigger:{
        trigger:"#page4_content p",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 100%",
        end:"top 10%"
    }
})

// Page4 : image: 

gsap.from("#page4_flex img",{
    x:-400,
    opacity:0,
    duration:.2,
    scrollTrigger:{
        trigger:"#page4_flex img",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 100%",
        end:"top 10%"
    }
})

gsap.from("#page4_flex p",{
    x:400,
    // opacity:0,
    duration:.2,
    scrollTrigger:{
        trigger:"#page4_flex p",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 100%",
        end:"top 10%"
    }
})

// Page4 blue div :

gsap.from("#page4_blue_div",{
    scale:2,
    // opacity:0,
    duration:.2,
    scrollTrigger:{
        trigger:"#page4_blue_div",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 100%",
        end:"top 10%"
    }
})

// Page 5 :

gsap.from("#page5_container .page5_text",{
    y:500,
    opacity:0,
    duration:.2,
    stagger:.1,
    scrollTrigger:{
        trigger:"#page5_container .page5_text",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 800%",
        end:"top 10%"
    }
})

// Page 6: 

gsap.from("#page6_top h1",{
    x:-500,
    opacity:0,
    duration:.1,
    scrollTrigger:{
        trigger:"#page6_top h1",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 50%",
        end:"top 10%"
    }
})

gsap.from("#page6_top i",{
    x:500,
    opacity:0,
    duration:.1,
    scrollTrigger:{
        trigger:"#page6_top i",
        scroller:"#main",
        scrub:5,
        // markers:true,
        start:"top 50%",
        end:"top 10%"
    }
})