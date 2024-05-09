tl = gsap.timeline()
tl.from("#nav",{
   opacity:0,
   delay:1 
})
tl.from("#nav h1, #nav h4, #nav h3",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})
tl.from("#left h1",{
x:-50,
opacity:0,
duration:0.5,
stagger:0.5
})
tl.from("#right img ",{
    opacity:0,
    duration:0.5,
})

gsap.from("#page2 .part2 .aa1",{
    opacity:0,
    scale:0,
    duration:1,
    stagger:0.3,
    scrollTigger:{
        trigger:"page2 .part2 .aa1",
        scroller:"body",
        markers:true,
    }

})