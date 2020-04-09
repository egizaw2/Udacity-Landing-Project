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

element.scrollToTop({ top: 0, left: 0, behavior: 'smooth' });

var navMenu = document.getElementById("navbar__menu");

// Get all buttons with class="btn" inside the container
var menuLink = navMenu.getElementsByClassName("menu__link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    //  current/clicked button
    this.className += " active";
  });
}

