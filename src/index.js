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

// cookies message
const nav = document.querySelector("nav");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = 'We use cookies for analytics and perfomance of our website. <button class="cookie-close">Close</button>';
nav.before(message);

document.querySelector(".cookie-close").addEventListener("click", () => message.remove());

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

//smooth scrolling button
const btnScrollTo = document.querySelector(".btn-scrollTo");
const sectionAppt = document.querySelector("#appointment");

btnScrollTo.addEventListener("click", function (e) {
  const sectionApptCoords = sectionAppt.getBoundingClientRect();
  console.log(sectionApptCoords);
  console.log(e.target.getBoundingClientRect());

  //scrolling
  window.scrollTo(sectionApptCoords.left + window.pageXOffset, sectionApptCoords.top + window.pageYOffset);
});
