

var tl = gsap.timeline()

tl.from("#loader h3",{
  x:200,
  opacity:0,
  duration:1,
  stagger:0.1
})

tl.to("#loader h3",{
  opacity:0,
  x:-200,
  duration:1,
  stagger:0.1
})
tl.to("#loader",{
  opacity:0
})
tl.to("#loader",{
  display:"none"
})

document.addEventListener("DOMContentLoaded", function() {
    var delayedText = document.querySelector(".delayed-text");
  
    function handleScroll() {
      var scrollPosition = window.scrollY;
      var elementPosition = delayedText.offsetTop;
      var windowHeight = window.innerHeight;
  
      if (scrollPosition > elementPosition - windowHeight + 300) {
        delayedText.classList.add("show");
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });
  