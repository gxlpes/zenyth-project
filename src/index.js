"use strict";

const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll("nav li");

  //toggle nav
  burguer.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });
    //burguer animation
    burguer.classList.toggle("toggle");
  });
};

navSlide();

//////////////////////////////////////////////////////////////////////////////////
// cookies message
const nav = document.querySelector("nav");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = 'We use cookies for analytics and perfomance of our website. <button class="cookie-close">Close</button>';
nav.before(message);

document.querySelector(".cookie-close").addEventListener("click", () => message.remove());

//////////////////////////////////////////////////////////////////////////////////
// modal window setup
const btnsOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////////////////////
// smooth scrolling button
const btnScrollTo = document.querySelector(".btn-scrollTo");
const sectionAppt = document.querySelector("#appointment");

btnScrollTo.addEventListener("click", function (e) {
  const sectionApptCoords = sectionAppt.getBoundingClientRect();
  sectionAppt.scrollIntoView({ behavior: "smooth" });
});

// smooth scrolling to the section
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  //////////////////////////////////////////////////////////////////////////////////
  // Matching
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//////////////////////////////////////////////////////////////////////////////////
// reveal sections with IntersectionObserver
const allSections = document.querySelectorAll("section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, { root: null, threshold: 0.15 });
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

const navigationHeight = document.querySelector("nav");

//////////////////////////////////////////////////////////////////////////////////
// tabbed component
const tabs = document.querySelectorAll(".about-tab");
const tabsContainer = document.querySelector(".about-content-container");
const tabsContent = document.querySelectorAll(".about-content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".about-tab");
  console.log(clicked);

  //////////////////////////////////////////////////////////////////////////////////
  // guard clause
  if (!clicked) return;

  //////////////////////////////////////////////////////////////////////////////////
  //active tab
  tabs.forEach((t) => t.classList.remove("about-tab-active"));
  tabsContent.forEach((c) => c.classList.remove("about-content-active"));
  clicked.classList.add("about-tab-active");

  //////////////////////////////////////////////////////////////////////////////////
  // activate content area
  document.querySelector(`.about-content-${clicked.dataset.tab}`).classList.add("about-content-active");
});

//////////////////////////////////////////////////////////////////////////////////
// menu fade animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest("nav").querySelectorAll(".nav-link");
    const logo = link.closest("nav").querySelector(".logo");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});
