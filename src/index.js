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
  // console.log coords
  // console.log(sectionApptCoords);
  // console.log(e.target.getBoundingClientRect());
  window.scrollTo({
    left: sectionApptCoords.left + window.pageXOffset,
    top: sectionApptCoords.top + window.pageYOffset,
    behavior: "smooth",
  });
  // newest method used
  // sectionAppt.scrollIntoView({ behavior: "smooth" });
});

//1. Add event listener to common parent element
//2. Determine what element originated the event

// smooth scrolling to the section
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    console.log(e.target);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// // random color rgb
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector(".nav-link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("Link", e.target);

//   e.stopPropagation();
// });

// document.querySelector(".nav-links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("Link", e.target);
// });

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

// menu fade animation
nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest("nav").querySelectorAll(".nav-link");
    const logo = link.closest("nav").querySelector(".logo");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener("mouseout", function (e) {});
