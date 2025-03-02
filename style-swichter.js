/* ==========================Toggle style switcher ==========================================*/
const styleSwitcherToggle = document.querySelector(".style-swichter-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-swichter").classList.toggle("open");
})
// hide  style switcher on scroll //
window.addEventListener("scroll", () => {
    if( document.querySelector(".style-swichter").classList.contains("open"))
    {
        document.querySelector(".style-swichter").classList.remove("open");
    }
})
/* ==========================Theme colors ==========================================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActivesStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}
/* ==========================Theme light and dark mode ==========================================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})