console.log("Custom Script is Connected");

const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

/*** MOBILE NAVIGATION  ***/

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/// Close Mobile Navigation ////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

/// STICKY NAV ////

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootmargin: "-100px",
  }
);
obs.observe(sectionHeroEl);
