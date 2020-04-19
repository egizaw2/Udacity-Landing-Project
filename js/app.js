/**
 * Global variables
 */

const nav = document.querySelector("#navbar__list");
const section1 = document.querySelectorAll("section");

/**
 * build navigation bar
 */
function activeSection() {
    maxSection = section1[0];
    minVal = 1000;
    for (item of section1) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top > -100 & bounding.top < minVal) {
            minVal = bounding.top;
            maxSection = item;
        };
    };
    return maxSection;
};
/**
 * build navigation bar
 */
function sections() {
    for (let item of section1) {
        let section = document.createElement("li");
        section.className = 'menu__link';
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        nav.appendChild(section);
    };
};

sections();
function setActive () {
    window.addEventListener('scroll', function (event) {
        let section = activeSection();
        section.classList.add('your-active-class');
        // set other sections as inactive
        for (let item of section1) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
        // set corresponding header style
        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
        // remove from other headers
        const headers = document.querySelectorAll('.menu__link');
        for (let item of headers) {
            console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};
setActive();
// add scroll to event
function scrollToAnchor() {
    nav.addEventListener('click', function (scroll) {
        const selected = document.querySelector('#' + scroll.target.dataset.nav);
        selected.scrollIntoView();
    });
};
//Tried to change color of nav icons when clicked
const sectionNavbar = document.querySelectorAll('section');
function myFunction() {
    nav.addEventListener('click', function (event) {
        document.getElementById("navbar__list").style.color = "rgb(136, 203, 171)";
    });
};
myFunction();
scrollToAnchor();
// change default curser to pointer cursor
function cursor() {
    document.getElementById("navbar__list").style.cursor = "pointer";
}
cursor();



