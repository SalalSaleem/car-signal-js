var engineStart = document.getElementById("engineStart")
var carmoving = document.getElementById("carmoving")
var hornSound = document.getElementById("hornSound")

function horn(){
    hornSound.play();
}

function lights(param) {
     if (param == "circle3") {
        document.getElementById(param).style.opacity = "100%";
        document.getElementById("circle1").style.opacity = "50%";
        document.getElementById("circle2").style.opacity = "50%";  
        carmoving.play(); 
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
        gsap.killTweensOf("#carSec");
        carmoving.pause();
    }
    else if (param == "circle2") {
        document.getElementById(param).style.opacity = "100%";
        document.getElementById("circle1").style.opacity = "50%";
        document.getElementById("circle3").style.opacity = "50%";
        engineStart.play();
        gsap.killTweensOf("#carSec")
        gsap.to("#carSec", 0.3, {y:"+=1",x:"+=1", yoyo:true, repeat:1});
        gsap.to("#carSec", 0.3, {y:"-=1",x:"-=1", yoyo:true, repeat:1});
    
    }
    
}




