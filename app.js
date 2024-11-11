

function lights(param) {
     if (param == "circle3") {
        document.getElementById(param).style.opacity = "100%";
        document.getElementById("circle1").style.opacity = "50%";
        document.getElementById("circle2").style.opacity = "50%";
      gsap.to("#carSec", {
            duration: 6,
            ease: "none",
            x: -1400,
        
        }).repeat(Infinity);
    }
    else if (param == "circle1") {
        document.getElementById(param).style.opacity = "100%";
        document.getElementById("circle2").style.opacity = "50%";
        document.getElementById("circle3").style.opacity = "50%";
        gsap.killTweensOf("#carSec")
    }
    else if (param == "circle2") {
        document.getElementById(param).style.opacity = "100%";
        document.getElementById("circle1").style.opacity = "50%";
        document.getElementById("circle3").style.opacity = "50%";
        gsap.killTweensOf("#carSec")
        gsap.to("#carSec", 0.3, {y:"+=1",x:"+=1", yoyo:true, repeat:1});
        gsap.to("#carSec", 0.3, {y:"-=1",x:"-=1", yoyo:true, repeat:1});
    
    }
    
}