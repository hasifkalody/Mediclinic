
// fading of search icon on navigation bar on cick

function fadeO() {
    let interval = setInterval(fadeOut, 8)
    let element = document.getElementById("search_icon")
    let cssobj = window.getComputedStyle(element)
    opacity = cssobj.getPropertyValue("opacity")

    function fadeOut() {
        document.getElementById("search_icon").style.opacity = opacity
        opacity -= 0.01
        if (opacity <= 0) {
            clearInterval(interval)
        }
    }
}

function fadeI() {

    let element = document.getElementById("search_icon")
    let cssobj = window.getComputedStyle(element)
    let opacity = parseInt(cssobj.getPropertyValue("opacity"))
    let interval = setInterval(fadeIn, 8)
    function fadeIn() {
        document.getElementById("search_icon").style.opacity = opacity
        opacity += 0.01
        if (opacity >= 1) {
            clearInterval(interval)
        }
    }

}
// fading of search icon on navigation bar on cick



// let clicked = false
// function anim() {

//     if (clicked == false) {
//         clicked = true;
//         rotate()
//         setTimeout(step2, 400)

//     }
//     else {
//         clicked = false
//         contract()
//         setTimeout(vanish, 800)

//     }

// }

// contraction of nav

function cross_cicked() {
    fadeI();
    contract();
    setTimeout(vanish, 800)
}

function contract() {
    let x = document.getElementById("anim_div")
    x.classList.add("toberemoved")
    x.classList.remove("translate_navg")
    let s = document.getElementById("s2")
    s.classList.add("cross_opp_tran")


}
function vanish() {
    let x = document.getElementById("anim_div")
    x.classList.remove("toberemoved")
    let y = document.getElementById("tst")
    y.classList.remove("add_to_test")
    let as = document.getElementById("ite")
    let rotate = as.getElementsByTagName("a")

    let s = document.getElementById("s2")
    s.classList.remove("cross_opp_tran")
    s.classList.remove("cross_tran")

    for (i = 0; i < rotate.length; i++) {
        rotate[i].classList.add("vib_of_a")
    }
    setTimeout(clear_rotation, 700)
    function clear_rotation() {
        for (i = 0; i < rotate.length; i++) {
            rotate[i].classList.remove("rotate")
        };
        for (i = 0; i < rotate.length; i++) {
            rotate[i].classList.remove("vib_of_a")
        }
    }
}

// contraction of nav


//    expansion of nav bar

function search_clicked() {

    fadeO();
    rotate();
    setTimeout(step2, 400)
}

function rotate() {
    let as = document.getElementById("ite")
    let rotate = as.getElementsByTagName("a")
    for (i = 0; i < rotate.length; i++) {
        rotate[i].classList.add("rotate")
    }
    // setTimeout(hide,200)
}
// function hide(){
//     let as=document.getElementById("ite")
//     let hide= as.getElementsByTagName("a")
//     for(i=0;i<hide.length;i++){
//         hide[i].style.display="none"
//     }
// }
function step2() {

    let y = document.getElementById("tst")
    y.classList.add("add_to_test")
    setTimeout(expand, 100)

}
function expand() {
    let x = document.getElementById("anim_div")
    x.classList.add("translate_navg")
    let s = document.getElementById("s2")
    s.classList.add("cross_tran")
}

//    expansion of nav bar

// carousel
current = 0
let buttonClass=document.getElementsByClassName("sliderButton")
buttonClass[current].classList.add("sliderButtonActive")
let classes = document.getElementsByClassName("slidingParticipants")
function hce(requested,comingFrmAnimtn=false) {
    buttonClass[current].classList.remove("sliderButtonActive")
    buttonClass[requested].classList.add("sliderButtonActive")
    if (current == requested) { return; }
    classes[requested].style.display = "flex"
    classes[current].style.display = "flex"
    for (i = 0; i < classes.length; i++) {
        if (i == requested) { continue }
        if (i == current) { continue }
        classes[i].style.display = "none"
    }
    classes[current].classList.remove("addToRequestedSlidingParticipant")
    classes[current].classList.remove("addToRequestedSlidingParticipant2")
    classes[current].classList.remove("addToCurrentSlidingParticipant")
    classes[current].classList.remove("addToCurrentSlidingParticipant2")
    classes[current].classList.remove("translateReq")
    classes[current].classList.remove("translateReq2")

    classes[requested].classList.remove("addToRequestedSlidingParticipant")
    classes[requested].classList.remove("addToRequestedSlidingParticipant2")
    classes[requested].classList.remove("addToCurrentSlidingParticipant")
    classes[requested].classList.remove("addToCurrentSlidingParticipant2")
    classes[requested].classList.remove("translateReq")
    classes[requested].classList.remove("translateReq2")

    // to avoid slides starting from left when in automatic mode
    if(comingFrmAnimtn==true){
        classes[current].classList.add("addToCurrentSlidingParticipant")
        classes[requested].classList.add("addToRequestedSlidingParticipant")
        setTimeout(() => { classes[requested].classList.add("translateReq") }, 1)  
    }
    // controls direction of sliding in manual mode
    else{
        if (requested - current >= 1) {
            classes[current].classList.add("addToCurrentSlidingParticipant")
            classes[requested].classList.add("addToRequestedSlidingParticipant")
            setTimeout(() => { classes[requested].classList.add("translateReq") }, 1)    
        }
        if (requested - current < 0) {
            classes[current].classList.add("addToCurrentSlidingParticipant2")
            classes[requested].classList.add("addToRequestedSlidingParticipant2")
            setTimeout(() => { classes[requested].classList.add("translateReq2") }, 1)
        }
    }
    current = requested 
}
n=1

function start(r=0){
   hce(r,true)
   n++
   if (n==classes.length){n=0}
}
// start()
var myTimeInterval=setInterval(() => {start(n)}, 3000);

 // stop slide show 
function stopTimeinterval(){
    clearInterval(myTimeInterval)
}

// carousel

