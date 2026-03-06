const reveals = document.querySelectorAll(".reveal")

function reveal(){

const windowHeight = window.innerHeight

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top

if(top < windowHeight - 100){

el.style.opacity = "1"
el.style.transform = "translateY(0)"

}

})

}

reveals.forEach(el=>{

el.style.opacity="0"
el.style.transform="translateY(40px)"
el.style.transition="0.6s"

})

window.addEventListener("scroll", reveal)