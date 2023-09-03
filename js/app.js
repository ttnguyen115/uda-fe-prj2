/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navContainer = document.getElementById("navbar__list");
const nodesByIdSection = document.querySelectorAll('[id^="section"]');
const navItems = [...nodesByIdSection].map((node) => ({
  id: node.id,
  title: node.dataset.nav,
}));
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function createElement(htmlTag = "div", attributes = null, children = null) {
  const newElement = document.createElement(htmlTag);

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) =>
      newElement.setAttribute(key, value.toString()),
    );
  }

  if (children) {
    if (!Array.isArray(children)) children = [children];

    children.forEach((child) => {
      if (typeof child === "string") child = document.createTextNode(child);
      newElement.appendChild(child);
    });
  }

  return newElement;
}

function handleScroll(linkItems) {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offsetTop = section.offsetTop - 50;
    const height = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const isInViewport = top >= offsetTop && top < offsetTop + height;

    const {} = section.getBoundingClientRect();

    if (isInViewport) {
      // Highlight section nav item
      const elementSelector = `#navbar__list li a[href*=${sectionId}]`;
      linkItems.forEach((item) => {
        item.classList.remove("active-link");
        const navSection = document.querySelector(elementSelector);
        navSection?.classList.add("active-link");
      });
      // Trigger effect for active section
      section.classList.add("active");
    } else {
      // Remove effect for inactive section
      section.classList.remove("active");
    }
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
navItems.map((item) => {
  const navItemElement = createElement(
    "li",
    {
      class: "navbar__list--item",
    },
    [
      createElement(
        "a",
        { class: "navbar__list--link", href: `#${item.id}` },
        item.title,
      ),
    ],
  );
  navContainer.appendChild(navItemElement);
});

/**
 * End Main Functions
 * Begin Events
 *
 */
const linkItems = document.querySelectorAll("header nav a");
// Set sections as active
window.onscroll = () => handleScroll(linkItems);

/**
 * End Events
 * Begin Scrollup
 *
 */
function scrollHeader() {
  const nav = document.getElementById("main__hero");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// Show scroll up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/**
 *
 * End Scrollup
 *
 */
