
// ---------------import lenis--------------------
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)







let page2 = document.querySelector("#page2");
let cursor = document.querySelector(".cursor");

page2.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        ease:"none",
        x:dets.x,
        y:dets.y
    })
})

page2.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1.5,
        opacity:.8
    })
})
page2.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:0,
    })
})


let cursor2  =  document.querySelector("#cusrsor")
window.addEventListener("mousemove",function(detials){

gsap.to(cursor2,{
    x:detials.x,
    y:detials.y,
    ease:"none"
})


})

let tl2 = gsap.timeline();


tl2.from(".heading span h1",{
    y:250,
    duration:1,
    stagger:.1
})




// let page3 = document.querySelector("#page3");
window.addEventListener("wheel",function(event){

if(event.deltaY > 0){
  gsap.to(".products-1  .pro-contains",{
        y:130,
        duration:2,
        delay:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:1
        }
    })

}
if(event.deltaY < 0){
    gsap.to(".products-1 .pro-contains",{
        y:-150,
        duration:2,
        delay:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top 20%",
            end:"top 0%",
            scrub:1
        }
    })
}
  
})



window.addEventListener("wheel",function(event){

    if(event.deltaY > 0){
      gsap.to(".products-2  .pro-contains",{
            y:130,
            duration:2,
            delay:1,
            scrollTrigger:{
                trigger:"#page3",
                scroller:"body",
                start:"top 30%",
                end:"top 10%",
                scrub:1
            }
        })
    
    }
    if(event.deltaY < 0){
        gsap.to(".products-2 .pro-contains",{
            y:-150,
            duration:2,
            delay:1,
            scrollTrigger:{
                trigger:"#page3",
                scroller:"body",
                start:"top 20%",
                end:"top 0%",
                scrub:1
            }
        })
    }
      
    })

    window.addEventListener("wheel",function(event){

        if(event.deltaY > 0){
          gsap.to(".products-3  .pro-contains",{
                y:130,
                duration:2,
                delay:1,
                scrollTrigger:{
                    trigger:"#page3",
                    scroller:"body",
                    start:"top 30%",
                    end:"top 10%",
                    scrub:1
                }
            })
        
        }
        if(event.deltaY < 0){
            gsap.to(".products-3 .pro-contains",{
                y:-150,
                duration:2,
                delay:1,
                scrollTrigger:{
                    trigger:"#page3",
                    scroller:"body",
                    start:"top 20%",
                    end:"top 0%",
                    scrub:1
                }
            })
        }
          
        })





let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 30%",
        end:"top 10%"
    }
});

tl3.from(".page3-products .products-1",{
    opacity:0,

})

tl3.from(".page3-products .products-2",{
    opacity:0,
})

tl3.from(".page3-products .products-3",{
    opacity:0,
})



let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 30%",
        end:"top 10%",
    }
});

tl4.from("#page5 .page5-left",{
    opacity:0,

})

tl4.from("#page5 .page5-right",{
    opacity:0,
})



let page5 = document.querySelector("#page5");

page5.addEventListener("mousemove",function(e){
    cursor.style.backgroundColor = "white"
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
    })
})

page5.addEventListener("mouseenter",function(e){
    cursor2.style.display = "none",
    cursor.style.backgroundColor = "white"
    gsap.to(cursor,{
        scale:8,
        ease:"none"
    })
})

page5.addEventListener("mouseleave",function(e){
    cursor2.style.display = "block",
    cursor.style.backgroundColor = "white"
    gsap.to(cursor,{
  scale:1,
  opacity:0
    })
})


