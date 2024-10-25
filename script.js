

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)








var tl = gsap.timeline();


tl.from(".loader h2",{
  x:80,
  opacity:0,
  duration:1,
  stagger:.1,
})

tl.to(".loader h2",{
    x:-100,
    opacity:0,
    stagger:.1,
    duration:1,
  
})



tl.to(".loader",{
    opacity:0,
    duration:1,
    delay:.5,
    display:"none"
})

tl.from(".page1-content h1 ",{
    y:100,
    opacity:0,
    duration:1,
    stagger:.1
  
})














function heading(){
    let h1 = document.querySelector(".page1-content h1");
let head = h1.textContent;
let splitheading = head.split("")
let clutter = "";


splitheading.forEach((item) => {
    clutter += `<span>${item}</span>`
})

h1.innerHTML = clutter;
}
heading()
let cursor = document.querySelector(".cursor");
function cursroEffect(){
    let pageContnt = document.querySelector(".page1-content");
    
    pageContnt.addEventListener("mousemove",function(dets){
        cursor.style.backgroundColor = "orange"
        gsap.to(".cursor",{
            x:dets.x,
            y:dets.y,
            
        })
    })
    
    pageContnt.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    pageContnt.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
}
cursroEffect();

gsap.to("hr",{
    duration:1,
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})
function page2Animation (){
    gsap.from(".elem h1 ",{
        y:120,
        stagger:1,
        duration:1.5,
        opacity:0,
        ease:"none",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 40%",
            end:"top 40%",
            scrub:2
        }
    })
}

page2Animation()


gsap.from(".elem p",{
    y:"500px",
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"100% 60%",
        end:"100% 60%",
   
        scrub:2
    }
})

let page4  = document.querySelector("#page4").addEventListener("mousemove",function(dets){
    // cursor.style.backgroundColor = "white",
    gsap.to(cursor,{
        scale:1.3,
        opacity:.8,
        x:dets.x,
        y:dets.y
    })
})

page4.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1,
    })
})

page4.addEventListener("mouseleave",function(){
  
    gsap.to(cursor,{
        scale:0,
        opacity:0,

    })
})











// var swiper = new swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

