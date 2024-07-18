

//gsap animation on presentation
gsap.from('.nav-item', { duration: 0.5, opacity: 0, scale: 0.5 })
gsap.from('.draw', { duration: 0.5, opacity: 0, scale: 0.5, stagger: 0.5, x: -200 })
gsap.from('.draw-second', { duration: 0.5, opacity: 0, scale: 0.5, stagger: 0.5, x: 200, })



//Html elements
const proj = document.querySelector('.proj-pres-int');
const cards = document.querySelectorAll('.project');
const skillPercent1 = document.querySelector('.percent-1');


//element on view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight) &&
        rect.right <= (window.innerWidth)
    );
}



//skills animation
function onElementVisible() {
    gsap.from(cards, { duration: 1, opacity: 0, stagger: 0.5 });

}

//project animation
function onElementVisible2() {
    gsap.from('.percent', { duration: 0.5, opacity: 0, stagger: 0.5, width: 0 })

}

let projAnimationTriggered = false;
let skillAnimationTriggered = false;

window.addEventListener('scroll', () => {
    if (!projAnimationTriggered && isElementInViewport(proj)) {
        onElementVisible();
        projAnimationTriggered = true;
    }

    if (!skillAnimationTriggered && isElementInViewport(skillPercent1)) {
        onElementVisible2();
        skillAnimationTriggered = true;
    }
});








