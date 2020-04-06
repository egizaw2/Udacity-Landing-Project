/**
 * Global variables
 */

const nav = document.querySelector("#navbar__list");
const section = document.querySelectorAll("section");

/**
 * build navigation bar
 */

function sections() {
    for (let item of section) {
        let section = document.createElement("li");
        section.className = 'menu__link';
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        nav.appendChild(section);
    };
};

sections();

// add scroll to event
function scrollToAnchor() {
    nav.addEventListener('click', function (scroll) {
        const selected = document.querySelector('#' + scroll.target.dataset.nav);
        selected.scrollIntoView();
    });
};
//Tried to change color of nav icons when clicked
const color = document.querySelectorAll('section');
function myFunction() {
    nav.addEventListener('click', function (event) {
        document.getElementById("navbar__list").style.color = "rgb(136, 203, 171)";
    });
};
scrollToAnchor();
// change default curser to pointer cursor
function cursor() {
    document.getElementById("navbar__list").style.cursor = "pointer";
}
cursor();

myFunction();
