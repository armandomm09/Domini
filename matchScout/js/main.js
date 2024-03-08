/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* GH: bedimcode */

/* ==================== CHANGE BACK HEADER ========================*/
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    // change for HEADER 
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* GH: easy-code */



/* ================== TRANSITION ================================= */

/*
function nextSection(currentSection) {
    const fieldsets = document.getElementsByClassName('displayable-section');
    let nextSec = currentSection + 1;
    if (currentSection < nextSec) {
        fieldsets[currentSection].classList.add("hidden")
        fieldsets[nextSec].classList.remove("hidden")
        console.log(currentSection);
        console.log(nextSec);
    }

}
*/

function nextSection(currentSection) {
    const fieldsets = document.querySelectorAll('.displayable-section');
    let nextSec = currentSection + 1;

    if (nextSec < fieldsets.length && fieldsets[currentSection] && fieldsets[nextSec]) {
        fieldsets[currentSection].classList.add("hidden");
        fieldsets[nextSec].classList.remove("hidden");
        console.log(currentSection);
        console.log(nextSec);
    }
}

function prevSection(currentSection) {
    const fieldsets = document.getElementsByClassName('displayable-section');
    if (currentSection > 0) {
        fieldsets[currentSection].classList.add("hidden")
        fieldsets[currentSection - 1].classList.remove("hidden")
        console.log(fieldsets);
    }
}


