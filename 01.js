gsap.from("nav ul li", 1, {
    opacity : 0,
    translateY : -400,
    stagger : .2
});

gsap.to(".main_section img", 2, {
    clipPath : "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
});

gsap.to("h1", 2, {
    opacity : 1,
    clipPath : "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
});

gsap.to(".left a", 1.4, {
    opacity : 1,
    clipPath : "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
});

gsap.to(".left p", 1.7, {
    opacity : 1,
    clipPath : "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
});


var button = document.getElementById("button");
var exit = document.getElementById("back");
var tl = gsap.timeline({});

tl.paused(true);

tl.to(".second_section",{
    position : "relative",
    zIndex : "999",
});

tl.from(".second_section", 1, {
    translateY : 1000
});

tl.to(".line", 1, {
    translateY : -800
});

tl.from(".second_section .lekha", 1, {
    translateY : 1000
});

tl.from(".second_section img", 1,{
    translateY : 1000,
    stagger : 0.2,
    ease : Back.easeOut
});

tl.from(".second_section a", 1,{
    translateY : 1000,
    ease : Back.easeOut
});

button.addEventListener("click", ()=>{
    tl.play();
});

exit.addEventListener("click", ()=>{
    tl.reverse();
});
